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
        const canvasHeight = context.canvas.height;
        const p = {
            x: this.#position.x - camera.position.x,
            y: canvasHeight - (this.#position.y - camera.position.y) - this.#height
        };
        context.fillRect(p.x, p.y, this.#width, this.#height);
    }

    get position() {
        return this.#position;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }
};

export default Pipe;
