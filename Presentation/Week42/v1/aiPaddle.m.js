import Paddle from "./paddle.m.js";

class AIPaddle extends Paddle {
    constructor(canvas) {
        super("AI paddle", canvas);
        this._center = { x: (this._canvas.width - this._width / 2), y: this._canvas.height / 2 };
        this._color = "green";
    }

    onTick(systemState) {
        const balls = systemState.getBalls();
        const ball = balls[0];
        const ballCenter = ball.center;
        const ballSpeed = ball.speed;
        const isBallTowardsAI = ballSpeed.x > 0;
        if (!isBallTowardsAI) {
            return;
        }
        const deltaX = this._center.x - ballCenter.x;
        const deltaY = this._center.y - ballCenter.y;
        const ticksNeeded = deltaX / ballSpeed.x;
        const aiSpeedY = deltaY / ticksNeeded;

        this._center.y -= aiSpeedY;
    }
};

export default AIPaddle;