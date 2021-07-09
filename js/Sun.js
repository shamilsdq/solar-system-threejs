import * as THREE from './libraries/three.module.js';



class Sun extends THREE.Object3D
{
    constructor() 
    {   
        super();
        this.initialize();
    }

    initialize()
    {
        const geometry = new THREE.SphereGeometry(5, 5, 5);
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
        const mesh = new THREE.Mesh(geometry, material);
        this.add(mesh);

        this.light = new THREE.PointLight(0xFFFF00, 1, 200, 0.1);
        this.add(this.light);
    }

    update()
    {

    }
}



export default Sun;