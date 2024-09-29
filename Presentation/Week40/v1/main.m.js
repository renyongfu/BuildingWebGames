import AIPaddle from "./aiPaddle.m.js"
import PingpongBall from "./pingpongball.m.js";
import PlayerPaddle from "./playerPaddle.m.js";
import SystemState from "./systemState.m.js";

class Game {
    #rootElement;
    #canvas;
    #ctxt;
    #backgroundColor = 'blue';
    #actors = [];
    #systemState;


    constructor(width = 800, height = 600) {
        this.#rootElement = document.createElement('div');
        document.body.append(this.#rootElement);
        this.#canvas = document.createElement('canvas');
        this.#canvas.width = width;
        this.#canvas.height = height;
        this.#rootElement.append(this.#canvas);
        this.#ctxt = this.#canvas.getContext('2d');

        this.#actors.push(new PingpongBall(this.#canvas));
        this.#actors.push(new AIPaddle(this.#canvas));
        this.#actors.push(new PlayerPaddle(this.#canvas));

        this.#systemState = new SystemState();
        window.addEventListener("keydown", (evt) => {
            if (evt.key === "ArrowDown") {
                this.#systemState.isArrowDownPressed = true;
            }
            else if (evt.key === "ArrowUp") {
                this.#systemState.isArrowUpPressed = true;
            }
        });
        window.addEventListener("keyup", (evt) => {
            if (evt.key === "ArrowDown") {
                this.#systemState.isArrowDownPressed = false;
            }
            else if (evt.key === "ArrowUp") {
                this.#systemState.isArrowUpPressed = false;
            }
        });
    }

    run() {
        this.#draw();
    }

    #draw() {
        this.#ctxt.fillStyle = this.#backgroundColor;
        this.#ctxt.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

        for(const act of this.#actors) {
            act.draw(this.#ctxt);
        }
    }
};

export default Game;
 