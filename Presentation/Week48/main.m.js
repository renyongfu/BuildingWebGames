import SystemState from "./systemState.m.js";
import Model from "./model.m.js"
import Controller from "./controller.m.js";
import OpenaiChat from "./openaiChat.m.js";

class Game {
    #controller;
    #intervalhandle;
    #chat;

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

        const chatRoot = document.createElement('div');
        document.body.append(chatRoot);
        this.#chat = new OpenaiChat(chatRoot);
    }

    run() {
        const tickInterval = 1000/60; //60 frames / second
        this.#intervalhandle = window.setInterval(()=>this.#onTick(), tickInterval);

        window.addEventListener('keyup',  (event) => {
            const spaceKey = ' ';
            if (event.key === spaceKey) {
                // Prevent default behavior (tabbing to next element)
                event.preventDefault();
                // Your custom logic here
                this.#controller.onSpaceClicked();
            }
        });

        this.#controller.draw();
    }

    shutdown() {
        window.clearInterval(this.#intervalhandle);
        this.#intervalhandle = undefined;
    }

    #onTick() {
        this.#controller.tick();
        this.#controller.draw();
    }
};

export default Game;