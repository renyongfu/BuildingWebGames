import Paddle from "./paddle.m.js";

class AIPaddle extends Paddle {
    constructor(canvas) {
        super("AI paddle", canvas);
    }
};

export default AIPaddle;