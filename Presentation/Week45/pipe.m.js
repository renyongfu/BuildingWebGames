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

    draw(context) {
        context.fillStyle = this.#color;
        context.fillRect(this.#position.x, this.#position.y, this.#width, this.#height);
    }
};

export default Pipe;
