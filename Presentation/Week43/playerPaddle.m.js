import Paddle from "./paddle.m.js";

class PlayerPaddle extends Paddle {
    #tickSpeed = 5;

    constructor(canvas) {
        super("Player paddle", canvas);
        this._center = {x: this._width/2, y: this._canvas.height / 2};
    }

    onTick(systemState) {
        const minCenterY = this._height / 2;
        const maxCenterY = this._canvas.height - this._height / 2;
        let newY = this._center.y;

        if (systemState.isArrowDownPressed) {
            newY += this.#tickSpeed;
        }
        else if (systemState.isArrowUpPressed) {
            newY -= this.#tickSpeed;
        }
        if (newY < minCenterY) {
            newY = minCenterY;
        }
        if (newY > maxCenterY) {
            newY = maxCenterY;
        }
        this._center.y = newY;
    }
};

export default PlayerPaddle;