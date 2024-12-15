class Model {
    #background;
    #bird;

    constructor() {

    }

    set background(value) {
        this.#background = value;
    }

    set bird(value) {
        this.#bird = value;
    }

    get actors() {
        return [this.#background, this.#bird];
    }
};

export default Model;
