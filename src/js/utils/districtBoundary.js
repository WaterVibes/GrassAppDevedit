import * as THREE from 'three';

export class DistrictBoundary {
    constructor(scene) {
        this.scene = scene;
        this.boundary = new THREE.Group();
        this.scene.add(this.boundary);
        
        // Constants for visualization
        this.boundaryWidth = 3;
        this.boundaryColor = 0x00ff00;
        this.boundaryOpacity = 0.5;
        this.glowSize = 20;
        
        // Scale factors for converting lat/long to scene coordinates
        this.scaleX = 10000;
        this.scaleY = 10000;
        this.centerLat = 39.290;
        this.centerLong = -76.615;
    }

    createBoundary(district) {
        // Clear existing boundary
        while(this.boundary.children.length > 0) {
            const object = this.boundary.children[0];
            object.geometry.dispose();
            object.material.dispose();
            this.boundary.remove(object);
        }

        const points = district.boundary.coordinates.map(coord => {
            const x = this.latLongToX(coord[0], coord[1]);
            const y = this.latLongToY(coord[0], coord[1]);
            return new THREE.Vector2(x, y);
        });

        // Create main boundary shape
        const shape = new THREE.Shape(points);
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({
            color: this.boundaryColor,
            transparent: true,
            opacity: this.boundaryOpacity,
            side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(geometry, material);
        this.boundary.add(mesh);

        // Create glowing outline
        const lineGeometry = new THREE.BufferGeometry();
        const vertices = [];
        
        // Close the loop by adding the first point again
        points.push(points[0]);
        
        points.forEach(point => {
            vertices.push(point.x, point.y, 0);
        });

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        
        const lineMaterial = new THREE.LineBasicMaterial({
            color: this.boundaryColor,
            linewidth: this.boundaryWidth,
            transparent: true,
            opacity: 0.8
        });

        const line = new THREE.Line(lineGeometry, lineMaterial);
        this.boundary.add(line);

        // Add glow effect
        const glowMaterial = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(this.boundaryColor) },
                glowSize: { value: this.glowSize }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 color;
                uniform float glowSize;
                varying vec2 vUv;
                void main() {
                    float dist = length(vUv - vec2(0.5));
                    float alpha = smoothstep(0.5, 0.0, dist) * 0.5;
                    gl_FragColor = vec4(color, alpha);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide
        });

        const glowGeometry = geometry.clone();
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        glowMesh.scale.multiplyScalar(1.1);
        this.boundary.add(glowMesh);
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