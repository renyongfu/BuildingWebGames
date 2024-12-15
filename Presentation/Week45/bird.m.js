import Actor from "./actor.m.js"

class Bird extends Actor {
    #pos = {x: 300, y: 300};

    constructor() {
        super();
    }

    draw(context) {
        context.fillStyle = "white";

        const halfH = 10;
        const halfW = 20;
        const p = this.#pos;
        context.fillRect(p.x - halfW, p.y - halfH, halfW * 2, halfH * 2);
    }
};

export default Bird;
