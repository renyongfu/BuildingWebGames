import Paddle from "./paddle.m.js";
import SystemState from "./systemState.m.js";

class AIPaddle extends Paddle {
    constructor(canvas) {
        super("AI paddle", canvas);
        this._center = { x: (this._canvas.width - this._width / 2), y: this._canvas.height / 2 };
        this._color = "green";
    }


    onTick(systemState) {
        const balls = systemState.getBalls();
        let minTicksNeeded = Number.MAX_SAFE_INTEGER;
        for (let i=0; i< balls.length; ++i) {
            const ball = balls[i];
            const ballCenter = ball.center;
            const ballSpeed = ball.speed;
            const isBallTowardsAI = ballSpeed.x > 0;
            if (!isBallTowardsAI) {
                continue;
            }
            const deltaX = this._center.x - ballCenter.x;
            const deltaY = this._center.y - ballCenter.y;
            const ticksNeeded = deltaX / ballSpeed.x;
            // choose to hit the ball that arrive AIPaddle wall the earliest
            if (minTicksNeeded < ticksNeeded) {
                continue;
            }
            minTicksNeeded = ticksNeeded;
            const aiSpeedY = deltaY / ticksNeeded;

            this._center.y -= aiSpeedY;
        }
    }
};

export default AIPaddle;