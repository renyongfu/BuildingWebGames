class Game {
    #rootElement;
    #canvas;
    #ctxt;
    #backgroundColor = 'blue';


    constructor(width = 800, height = 600) {
        this.#rootElement = document.createElement('div');
        document.body.append(this.#rootElement);
        this.#canvas = document.createElement('canvas');
        this.#canvas.width = width;
        this.#canvas.height = height;
        this.#rootElement.append(this.#canvas);
        this.#ctxt = this.#canvas.getContext('2d');
    }

    run() {
        this.#draw();
    }

    #draw() {
        this.#ctxt.fillStyle = this.#backgroundColor;
        this.#ctxt.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
    }
};

export default Game;
