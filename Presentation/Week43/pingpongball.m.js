import Actor from "./actor.m.js";
const s_hitSound = new Audio("./pingpong.mp3");
s_hitSound.autoplay = true;

const Colors = ['red', 'green', 'yellow', 'cyan', 'purple'];

class PingpongBall extends Actor {
    #center;
    #radius = 4;
    #color;
    #speed;
    #speedUpFactor = {x: 1.1, y: 1.2};
    #maxSpeed = {x: 5, y: 3};

    constructor(canvas) {
        super("pingpong ball", canvas);
        const x = this._canvas.width - Math.random() * this._canvas.width / 2;
        const y = this._canvas.height - Math.random() * this._canvas.height / 2;
        const px = Math.random() * 1 + 1;
        const py = Math.random() * 0.5 + 0.5;
        this.#center = { x: x, y: y };
        this.#speed = { x: px, y: py };
        const colorId = Math.floor(Math.random() * Colors.length);
        this.#color = Colors[colorId];
    }

    get center() {
        return { x: this.#center.x, y: this.#center.y };
    }

    get speed() {
        return { x: this.#speed.x, y: this.#speed.y };
    }

    draw(ctxt) {
        ctxt.fillStyle = this.#color;
        ctxt.beginPath();
        ctxt.arc(this.#center.x, this.#center.y, this.#radius, 0, 2 * Math.PI, false);
        ctxt.fill();
    }

    onTick(systemState) {
        this.#center.x = this.#center.x + this.#speed.x;
        this.#center.y = this.#center.y + this.#speed.y;

        // Check against paddles
        const paddles = systemState.paddles;
        if (paddles.left) {
            const pad = paddles.left;
            const paddleX = pad.center.x + pad.width / 2;
            const padMinY = pad.center.y - pad.height / 2;
            const padMaxY = pad.center.y + pad.height / 2;
            if (this.#center.x <= paddleX + this.#radius &&
                this.#center.y >= padMinY &&
                this.#center.y <= padMaxY) {
                this.#center.x = paddleX + this.#radius;
                this.#speed.x *= -1;
                s_hitSound.play();
                this.#speedUp();
                return "leftPaddle";
            }
        }
        if (paddles.right) {
            const pad = paddles.right;
            const paddleX = pad.center.x - pad.width / 2;
            const padMinY = pad.center.y - pad.height / 2;
            const padMaxY = pad.center.y + pad.height / 2;
            if (this.#center.x >= paddleX - this.#radius &&
                this.#center.y >= padMinY &&
                this.#center.y <= padMaxY) {
                this.#center.x = paddleX - this.#radius;
                this.#speed.x *= -1;
                s_hitSound.play();
                this.#speedUp();
                return "rightPaddle";
             }
        }

        // check against walls
        if (this.#center.x < this.#radius) {
            this.#center.x = this.#radius;
            this.#speed.x *= -1;
            return "leftWall";
        }
        if (this.#center.y < this.#radius) {
            this.#center.y = this.#radius;
            this.#speed.y *= -1;
            return "topWall";
        }
        if (this.#center.x > this._canvas.width - this.#radius) {
            this.#center.x = this._canvas.width - this.#radius;
            this.#speed.x *= -1;
            return "rightWall";
        }
        if (this.#center.y > this._canvas.height - this.#radius) {
            this.#center.y = this._canvas.height - this.#radius;
            this.#speed.y *= -1;
            return "bottomWall";
        }
        return "noHit";
    }

    #speedUp() {
        // speed it up
        if (Math.abs(this.#speed.x) < this.#maxSpeed.x) {
            this.#speed.x *= this.#speedUpFactor.x;
        }
        if (Math.abs(this.#speed.y) < this.#maxSpeed.y) {
            this.#speed.y *= this.#speedUpFactor.y;
        }       
    }
};

export default PingpongBall;
