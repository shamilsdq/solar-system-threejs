import App from "./App.js";



const app = new App(
    window.innerWidth, 
    window.innerHeight,
    document.querySelector('body')
);
app.animate();