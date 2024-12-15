import Actor from "./actor.m.js"

class Background extends Actor {
    #size;
    constructor() {
        super();
        this.#size = {width: 400, height: 400};
    }

    draw(context) {
        this.#size = { width: context.canvas.width, height: context.canvas.height };
        context.fillStyle = "blue";
        context.fillRect(0, 0, this.#size.width, this.#size.height);
    }

    set width(value) {
        this.#size.width = value;
    }

    set height(value) {
        this.#size.height = value;
    }
};

export default Background;
