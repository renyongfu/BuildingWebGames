import Actor from "./actor.m.js"

class Bird extends Actor {
    #pos = {x: 300, y: 300};
    #speed;

    constructor(speed) {
        super();
        this.#speed = speed;
    }

    draw(context, camera) {
        context.fillStyle = "white";

        const halfH = 10;
        const halfW = 20;
        const p = {
            x: this.#pos.x - camera.position.x,
            y: this.#pos.y - camera.position.y
        };
        context.fillRect(p.x - halfW, p.y - halfH, halfW * 2, halfH * 2);
    }
};

export default Bird;
