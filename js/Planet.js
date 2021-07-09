import * as THREE from './libraries/three.module.js';



class Planet extends THREE.Object3D
{
    constructor(radius, color) 
    {
        super();

        this.radius = radius;
        this.color = color;
        
        this.initialize();
    }

    initialize()
    {
        const geometry = new THREE.SphereGeometry(this.radius, 5, 5);
        const material = new THREE.MeshBasicMaterial({ color: this.color });
        const mesh = new THREE.Mesh(geometry, material);
        this.add(mesh);
    }

    update()
    {
        this.rotation.y = (this.rotation.y + 0.01) % (Math.PI * 2);
    }
}



export default Planet;