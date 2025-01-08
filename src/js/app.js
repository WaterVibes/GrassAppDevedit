import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { StreetGrid } from './utils/streetGrid.js';
import { DistrictBoundary } from './utils/districtBoundary.js';
import { innerHarborDistrict } from '../data/districts/innerHarbor.js';
import { cantonDistrict } from '../data/districts/canton.js';
import { fellsPointDistrict } from '../data/districts/fellsPoint.js';
import { federalHillDistrict } from '../data/districts/federalHill.js';
import { mountVernonDistrict } from '../data/districts/mountVernon.js';

class App {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = null;
        this.streetGrid = null;
        this.districtBoundary = null;
        this.currentDistrict = null;
        this.cityModel = null;
        this.markers = new Map();
        
        this.init();
    }

    async init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(this.renderer.domElement);

        // Setup camera for angled eagle-eye view
        this.camera.position.set(-1000, 1500, 1000);
        this.camera.lookAt(0, 0, 0);
        this.camera.up.set(0, 1, 0);

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = true;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.minDistance = 500;
        this.controls.maxDistance = 4000;
        this.controls.minPolarAngle = Math.PI / 6;
        this.controls.maxPolarAngle = Math.PI / 2.5;

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambientLight);

        // Add directional light with shadows
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1000, 2000, 1000);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 5000;
        directionalLight.shadow.camera.left = -2000;
        directionalLight.shadow.camera.right = 2000;
        directionalLight.shadow.camera.top = 2000;
        directionalLight.shadow.camera.bottom = -2000;
        this.scene.add(directionalLight);

        // Add hemisphere light for better ambient lighting
        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
        this.scene.add(hemisphereLight);

        // Add ground plane for shadows
        const groundGeometry = new THREE.PlaneGeometry(10000, 10000);
        const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -1;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // Load markers
        await this.loadMarkers();

        // Load city model
        await this.loadCityModel();

        // Initialize components
        this.streetGrid = new StreetGrid(this.scene);
        this.districtBoundary = new DistrictBoundary(this.scene);

        // Create district selection UI
        this.createDistrictUI();

        // Load initial district
        await this.loadDistrict(federalHillDistrict);

        // Handle window resize
        window.addEventListener('resize', this.onWindowResize.bind(this), false);

        // Start animation loop
        this.animate();

        console.log('Scene initialized');
    }

    async loadMarkers() {
        const districts = ['mount_vernon', 'inner_harbor', 'federal_hill', 'fells_point', 'canton'];
        
        for (const district of districts) {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}optimized_markers/marker_${district}.json`);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const marker = await response.json();
                this.markers.set(district, marker);
            } catch (error) {
                console.error(`Error loading marker for ${district}:`, error);
            }
        }
    }

    async loadCityModel() {
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath(`${import.meta.env.BASE_URL}draco-decoder/`);
        loader.setDRACOLoader(dracoLoader);
        
        const loadingElement = document.getElementById('loading');
        console.log('Starting to load city model...');
        
        return new Promise((resolve, reject) => {
            try {
                loader.load(
                    `${import.meta.env.BASE_URL}models/baltimore_city_optimized_v2.glb`,
                    (gltf) => {
                        console.log('Model loaded successfully:', gltf);
                        this.cityModel = gltf.scene;
                        this.cityModel.scale.set(1, 1, 1);
                        this.cityModel.position.set(0, 0, 0);
                        
                        // Add some basic material to make the model visible
                        gltf.scene.traverse((child) => {
                            if (child.isMesh) {
                                child.material.side = THREE.DoubleSide;
                                child.castShadow = true;
                                child.receiveShadow = true;
                                child.material.needsUpdate = true;
                                console.log('Processed mesh:', child.name);
                            }
                        });
                        
                        this.scene.add(this.cityModel);
                        console.log('Model added to scene');
                        
                        if (loadingElement) {
                            loadingElement.style.display = 'none';
                        }
                        resolve(gltf);
                    },
                    (progress) => {
                        if (loadingElement && progress.total > 0) {
                            const percentComplete = Math.round((progress.loaded / progress.total) * 100);
                            console.log(`Loading progress: ${percentComplete}%`);
                            loadingElement.textContent = `Loading Baltimore City Model... ${percentComplete}%`;
                        }
                    },
                    (error) => {
                        console.error('Error loading city model:', error);
                        console.error('Error details:', {
                            message: error.message,
                            stack: error.stack
                        });
                        if (loadingElement) {
                            loadingElement.textContent = 'Error loading city model';
                        }
                        reject(error);
                    }
                );
            } catch (error) {
                console.error('Exception during model loading:', error);
                reject(error);
            }
        });
    }

    createDistrictUI() {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.right = '20px';
        container.style.zIndex = '100';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '10px';
        container.style.maxWidth = '400px';
        container.style.justifyContent = 'flex-end';

        const districts = [
            { name: 'Inner Harbor', data: innerHarborDistrict },
            { name: 'Federal Hill', data: federalHillDistrict },
            { name: 'Mount Vernon', data: mountVernonDistrict },
            { name: 'Fells Point', data: fellsPointDistrict },
            { name: 'Canton', data: cantonDistrict }
        ];

        districts.forEach(district => {
            const button = document.createElement('button');
            button.textContent = district.name;
            button.onclick = () => this.loadDistrict(district.data);
            button.className = 'district-btn';
            if (district.data === this.currentDistrict) {
                button.classList.add('active');
            }
            container.appendChild(button);
        });

        document.body.appendChild(container);

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .district-btn {
                padding: 8px 16px;
                background: rgba(0, 255, 0, 0.2);
                border: 1px solid #00ff00;
                color: #00ff00;
                border-radius: 4px;
                cursor: pointer;
                font-family: 'Orbitron', sans-serif;
                transition: all 0.3s ease;
                min-width: 120px;
                text-align: center;
            }
            .district-btn:hover {
                background: rgba(0, 255, 0, 0.3);
                transform: translateY(-2px);
                box-shadow: 0 2px 8px rgba(0, 255, 0, 0.2);
            }
            .district-btn.active {
                background: rgba(0, 255, 0, 0.4);
                box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
                transform: translateY(-2px);
            }
        `;
        document.head.appendChild(style);
    }

    async loadDistrict(district) {
        if (this.currentDistrict === district) return;
        
        // Update UI
        const buttons = document.querySelectorAll('.district-btn');
        buttons.forEach(btn => {
            if (btn.textContent === district.name) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        this.currentDistrict = district;
        this.districtBoundary.createBoundary(district);
        this.streetGrid.createStreets(district);

        // Get marker for district
        const districtId = district.id || district.name.toLowerCase().replace(/\s+/g, '_');
        const marker = this.markers.get(districtId);

        if (marker) {
            // Use marker position
            const { camera, target } = marker;
            // Convert string values to numbers
            this.camera.position.set(
                parseFloat(camera.x),
                parseFloat(camera.y),
                parseFloat(camera.z)
            );
            this.controls.target.set(
                parseFloat(target.x),
                parseFloat(target.y),
                parseFloat(target.z)
            );
            this.camera.lookAt(
                parseFloat(target.x),
                parseFloat(target.y),
                parseFloat(target.z)
            );
        } else {
            // Fallback to calculated center with angled eagle-eye view
            const center = this.calculateDistrictCenter(district);
            this.camera.position.set(
                center.x - 1000,
                1500,
                center.z + 1000
            );
            this.camera.lookAt(center.x, 0, center.z);
            this.controls.target.set(center.x, 0, center.z);
        }
    }

    calculateDistrictCenter(district) {
        const coords = district.boundary.coordinates;
        let sumX = 0, sumY = 0;
        
        coords.forEach(coord => {
            sumX += this.streetGrid.latLongToX(coord[0], coord[1]);
            sumY += this.streetGrid.latLongToY(coord[0], coord[1]);
        });

        return {
            x: sumX / coords.length,
            y: sumY / coords.length
        };
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        // Update controls
        this.controls.update();

        // Update components
        if (this.streetGrid) this.streetGrid.update();
        if (this.districtBoundary) this.districtBoundary.update();

        // Render scene
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading message once the app is initialized
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
    
    // Create app instance
    new App();
}); 