class SystemState {
    #arrowKeydown = false;
    #arrowKeyup = false;

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
}

export default SystemState;
