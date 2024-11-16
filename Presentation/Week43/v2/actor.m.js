class Actor {
    _canvas;
    #name;

    constructor(name, canvas) {
        this.#name = name;
        this._canvas = canvas;
    }

    draw(ctxt) {

    }

    onTick(systemState) {
        return "";
    }
};

export default Actor;
