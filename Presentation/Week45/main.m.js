import SystemState from "./systemState.m.js";
import Model from "./model.m.js"
import Controller from "./controller.m.js";

class Game {
    #controller;

    constructor(width = 800, height = 600) {
        const rootElement = document.createElement('div');
        document.body.append(rootElement);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        rootElement.append(canvas);
        const systemState = new SystemState(canvas);
        const model = new Model();
        this.#controller = new Controller(model, systemState);
    }

    run() {
        this.#controller.draw();
    }
};

export default Game;