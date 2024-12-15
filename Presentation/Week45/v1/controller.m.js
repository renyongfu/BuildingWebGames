import Background from "./background.m.js";
import Bird from "./bird.m.js"

class Controller {
    #model;
    #systemState;

    constructor(model, systemState) {
        this.#model = model;
        this.#systemState = systemState;

        this.#model.background = new Background();
        this.#model.bird = new Bird();
    }

    draw() {
        const actors = this.#model.actors;
        const context = this.#systemState.canvasContext;
        for (const actor of actors) {
            actor.draw(context);
        }
    }
};

export default Controller;