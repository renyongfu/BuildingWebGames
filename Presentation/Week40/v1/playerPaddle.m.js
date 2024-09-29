import Paddle from "./paddle.m.js";

class PlayerPaddle extends Paddle {
    constructor(canvas) {
        super("Player paddle", canvas);
        this._center = {x: this._width/2, y: this._canvas.height / 2};
    }
};

export default PlayerPaddle;