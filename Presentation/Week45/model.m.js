class Model {
    #background;
    #bird;
    #pipes = [];

    constructor() {

    }

    set background(value) {
        this.#background = value;
    }

    set bird(value) {
        this.#bird = value;
    }

    addPipe(pipe) {
        this.#pipes.push(pipe);
    }

    get actors() {
        return [this.#background, this.#bird, ...this.#pipes];
    }
};

export default Model;
