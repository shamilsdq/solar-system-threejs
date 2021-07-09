import * as THREE from './libraries/three.module.js';



class SolarSystem
{
    constructor(width, height, scene)
    {
        this.width = width;
        this.height = height;

        this.components = [];
        this.initialize(scene);
    }

    initialize(scene)
    {
        // initialize a root node
        this.root = new THREE.Object3D();
        scene.add(this.root);
        
        // common sphere geometry for planets and sun
        const geometry = new THREE.SphereGeometry(5, 5, 5);

        // create a sun component
        {
            let material = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
            let mesh = new THREE.Mesh(geometry, material);
            this.root.add(mesh);
        }

        // create planets
    }

    update()
    {
        this.root.rotation.y += 0.01;
        // animate planets and suns
    }

    resize(width, height)
    {
        // resize objects to fit new dimensions
    }
}



export default SolarSystem;