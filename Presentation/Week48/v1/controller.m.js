import Background from "./background.m.js";
import Bird from "./bird.m.js"
import Pipe from "./pipe.m.js";
import Camera from "./camera.m.js";

class Controller {
    #model;
    #systemState;
    #speedX = 1;

    constructor(model, systemState) {
        this.#model = model;
        this.#systemState = systemState;
        const w = this.#systemState.canvas.width;
        const h = this.#systemState.canvas.height;
        const pipeWidth = 20;
        const pipeHeight = 100;

        this.#model.background = new Background();
        this.#model.bird = new Bird({x: this.#speedX, y: 0});
        this.#model.camera= new Camera({x: 0, y: 0}, {x: this.#speedX, y: 0});
    
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

    tick() {
        const actors = this.#model.actors;
        this.#model.camera.tick();
        for (const actor of actors) {
            actor.tick();
        }

        // add a new pipe if necessary
        const pipes = this.#model.pipes;
        const lastPipe = pipes[pipes.length - 1];
        const canvasPos = this.#model.camera.relativePosition(lastPipe.position);
        const canvasWidth = this.#systemState.canvas.width;
        const canvasHeight = this.#systemState.canvas.height;
        if (canvasPos.x < canvasWidth / 2) {
            const pipeWidth = 20;
            const pipeHeight = 100;
            const pipeX = this.#model.camera.position.x + canvasWidth;
            const pipe3 = new Pipe({x: pipeX, y: 0}, pipeWidth, pipeHeight);
            this.#model.addPipe(pipe3);
            const pipe4 = new Pipe({x: pipeX, y: canvasHeight - pipeHeight}, pipeWidth, pipeHeight);
            this.#model.addPipe(pipe4);
        }
    }

    onSpaceClicked() {
        this.#model.bird.flyUpward();
    }
};

export default Controller;