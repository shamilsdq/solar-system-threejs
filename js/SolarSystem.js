import * as THREE from './libraries/three.module.js';
import Planet from './Planet.js';
import Sun from './Sun.js';



class SolarSystem extends THREE.Object3D
{
    constructor(width, height)
    {
        super();

        this.width = width;
        this.height = height;

        this.planets = [];
        this.initialize();
    }

    initialize()
    {
        // create sun
        this.sun = new Sun(this.root);
        this.add(this.sun);

        // create earth
        {
            let planet = new Planet(1, 0x4477FF);
            planet.position.x = 10;
            this.planets.push(planet);
            this.add(planet);
        }
        
        
    }

    update()
    {
        // animate planets and suns
        this.rotation.y = (this.rotation.y + 0.01) % (Math.PI * 2);
        this.planets.forEach(planet => planet.update());
    }

    resize(width, height)
    {
        // resize objects to fit new dimensions
    }
}



export default SolarSystem;