import Paddle from "./paddle.m.js";

class PlayerPaddle extends Paddle {
    constructor(canvas) {
        super("Player paddle", canvas);
    }
};

export default PlayerPaddle;