import Paddle from "./paddle.m.js";

class AIPaddle extends Paddle {
    constructor(canvas) {
        super("AI paddle", canvas);
        this._center = { x: (this._canvas.width - this._width / 2), y: this._canvas.height / 2 };
        this._color = "green";
    }
};

export default AIPaddle;