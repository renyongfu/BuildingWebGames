import Actor from "./actor.m.js";

class PingpongBall extends Actor {
    #center;
    #radius = 4;
    #color = 'red';

    constructor(canvas) {
        super("pingpong ball", canvas);
        this.#center = { x: this._canvas.width / 2, y: this._canvas.height / 2 };
    }

    draw(ctxt) {
        ctxt.fillStyle = this.#color;
        ctxt.beginPath();
        ctxt.arc(this.#center.x, this.#center.y, this.#radius, 0, 2 * Math.PI, false);
        ctxt.fill();
    }
};

export default PingpongBall;
