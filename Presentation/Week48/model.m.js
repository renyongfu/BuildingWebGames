class Model {
    #background;
    #bird;
    #camera;
    #pipes = [];

    constructor() {

    }

    set background(value) {
        this.#background = value;
    }

    set bird(value) {
        this.#bird = value;
    }

    get bird() {
        return this.#bird;
    }

    set camera(value) {
        return this.#camera = value;
    }

    get camera() {
        return this.#camera;
    }

    addPipe(pipe) {
        this.#pipes.push(pipe);
    }

    get pipes() {
        return this.#pipes;
    }

    get actors() {
        return [this.#background, this.#bird, ...this.#pipes];
    }
};

export default Model;
