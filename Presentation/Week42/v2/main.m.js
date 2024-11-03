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
    #intervalhandle;
    #results = {
        hitCount: 0,
        missCount: 0,
    };


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
        this.#systemState.paddles = { left: this.#actors[2], right: this.#actors[1] };
        this.#systemState.addBall(this.#actors[0]);

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
        const tickInterval = 1000/60; //60 frames / second
        this.#intervalhandle = window.setInterval(()=>this.#onTick(), tickInterval);
        this.#draw();
    }

    shutdown() {
        window.clearInterval(this.#intervalhandle);
        this.#intervalhandle = undefined;
    }

    #draw() {
        this.#ctxt.fillStyle = this.#backgroundColor;
        this.#ctxt.fillRect(0, 0, this.#canvas.width, this.#canvas.height);

        for(const act of this.#actors) {
            act.draw(this.#ctxt);
        }
        this.#ctxt.font = "30px serif";
        this.#ctxt.fillText("hit: " + this.#results.hitCount + "  --  missed: " + this.#results.missCount, 100, 50);

    }

    #onTick() {
        for(const act of this.#actors) {
            const ret = act.onTick(this.#systemState);
            if (ret === "leftPaddle") {
                this.#results.hitCount += 1;
            }
            else if (ret === "leftWall") {
                this.#results.missCount += 1;
            }
        }
        this.#draw();
    }
};

export default Game;
 