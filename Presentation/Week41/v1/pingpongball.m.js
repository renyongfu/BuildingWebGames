import Actor from "./actor.m.js";

class PingpongBall extends Actor {
    #center;
    #radius = 4;
    #color = 'red';
    #speed;

    constructor(canvas) {
        super("pingpong ball", canvas);
        this.#center = { x: this._canvas.width / 2, y: this._canvas.height / 2 };
        this.#speed = { x: 2, y: 1 };
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
};

export default PingpongBall;
