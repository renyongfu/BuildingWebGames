import Background from "./background.m.js";
import Bird from "./bird.m.js"
import Pipe from "./pipe.m.js";
import Camera from "./camera.m.js";

class Controller {
    #model;
    #systemState;

    constructor(model, systemState) {
        this.#model = model;
        this.#systemState = systemState;
        const w = this.#systemState.canvas.width;
        const h = this.#systemState.canvas.height;
        const pipeWidth = 20;
        const pipeHeight = 100;

        this.#model.background = new Background();
        this.#model.bird = new Bird({x: 1, y: 0});
        this.#model.camera= new Camera({x: 0, y: 0}, {x: 1, y: 0});
    
        const pipe1 = new Pipe({x: 50, y: 0}, pipeWidth, pipeHeight);
        this.#model.addPipe(pipe1);
        const pipe2 = new Pipe({x: 50, y: h - pipeHeight}, pipeWidth, pipeHeight);
        this.#model.addPipe(pipe2);
        const pipe3 = new Pipe({x: w - 50, y: 0}, pipeWidth, pipeHeight);
        this.#model.addPipe(pipe3);
        const pipe4 = new Pipe({x: w - 50, y: h - pipeHeight}, pipeWidth, pipeHeight);
        this.#model.addPipe(pipe4);
    }

    draw() {
        const actors = this.#model.actors;
        const context = this.#systemState.canvasContext;
        for (const actor of actors) {
            actor.draw(context, this.#model.camera);
        }
    }
};

export default Controller;