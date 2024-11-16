class SystemState {
    #arrowKeydown = false;
    #arrowKeyup = false;
    #paddles = {};
    #balls = [];

    constructor() {
    }

    get isArrowDownPressed() {
        return this.#arrowKeydown;
    }

    set isArrowDownPressed(val) {
        this.#arrowKeydown = val;
    }

    get isArrowUpPressed() {
        return this.#arrowKeyup;
    }

    set isArrowUpPressed(val) {
        this.#arrowKeyup = val;
    }

    get paddles() {
        return this.#paddles;
    }

    set paddles(value) {
        this.#paddles = value;
    }

    addBall(ball) {
        this.#balls.push(ball);
    }

    getBalls() {
        return this.#balls;
    }
}

export default SystemState;
