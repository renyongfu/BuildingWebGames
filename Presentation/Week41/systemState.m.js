class SystemState {
    #arrowKeydown = false;
    #arrowKeyup = false;
    #paddles = {};

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
}

export default SystemState;
