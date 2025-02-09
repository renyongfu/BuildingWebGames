import Actor from "./actor.m.js"

class Pipe extends Actor {
    #position;
    #width;
    #height;
    #color = "yellow";

    constructor(position, width, height) {
        super();
        this.#position = position;
        this.#width = width;
        this.#height = height;
    }

    draw(context, camera) {
        context.fillStyle = this.#color;
        const p = {
            x: this.#position.x - camera.position.x,
            y: this.#position.y - camera.position.y
        };
        context.fillRect(p.x, p.y, this.#width, this.#height);
    }
};

export default Pipe;
