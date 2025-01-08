import * as THREE from 'three';

export class StreetGrid {
    constructor(scene) {
        this.scene = scene;
        this.streets = new THREE.Group();
        this.scene.add(this.streets);
        
        // Constants for visualization
        this.streetWidth = 2;
        this.streetColor = 0x00ff00;
        this.streetOpacity = 0.5;
        
        // Scale factors for converting lat/long to scene coordinates
        this.scaleX = 10000;
        this.scaleY = 10000;
        this.centerLat = 39.290;
        this.centerLong = -76.615;
    }

    createStreets(district) {
        // Clear existing streets
        while(this.streets.children.length > 0) {
            const object = this.streets.children[0];
            object.geometry.dispose();
            object.material.dispose();
            this.streets.remove(object);
        }

        // Create boundary streets
        district.boundaryStreets.forEach(street => {
            this.createStreet(street);
        });

        // Create internal streets
        district.internalStreets.forEach(street => {
            this.createStreet(street);
        });
    }

    createStreet(street) {
        const points = street.coordinates.map(coord => {
            const x = this.latLongToX(coord[0], coord[1]);
            const y = this.latLongToY(coord[0], coord[1]);
            return new THREE.Vector3(x, y, 0);
        });

        const curve = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(curve, 20, this.streetWidth, 8, false);
        const material = new THREE.MeshBasicMaterial({
            color: this.streetColor,
            transparent: true,
            opacity: this.streetOpacity,
            side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(geometry, material);
        this.streets.add(mesh);
    }

    latLongToX(lat, long) {
        return (long - this.centerLong) * this.scaleX;
    }

    latLongToY(lat, long) {
        return (lat - this.centerLat) * this.scaleY;
    }

    update() {
        // Animation updates if needed
    }
} 