class SystemState {
    #canvas;
    #canvasContext;

    constructor(canvas) {
        this.#canvas = canvas;
        this.#canvasContext = this.#canvas.getContext('2d');
    }

    get canvas() {
        return this.#canvas;
    }

    get canvasContext() {
        return this.#canvasContext;
    }

    get width() {
        this.#canvas.width;
    }

    get height() {
        this.#canvas.height;
    }
};

export default SystemState;
