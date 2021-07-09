import * as THREE from './libraries/three.module.js';
import SolarSystem from './SolarSystem.js';



class App
{
    constructor(width, height, domElement)
    {
        this.width = width;
        this.height = height;

        this.initialize(domElement);
    }

    initialize(domElement)
    {
        // initialize renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        domElement.appendChild(this.renderer.domElement);

        // initialize scene
        this.scene = new THREE.Scene();

        // initialize camera
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 100);
        this.camera.position.set(0, 50, 0);
        this.camera.lookAt(0, 0, 0);

        // initialize solar system object
        this.solarsystem = new SolarSystem(this.width, this.height);
        this.scene.add(this.solarsystem);
    }

    animate()
    {
        // update state of solar system
        this.solarsystem.update();

        // render and recurse
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }

    resize(width, height)
    {
        // update components to fit viewport dimensions
    }
}



export default App;