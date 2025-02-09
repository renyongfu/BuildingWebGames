class Camera {
    #pos;
    #speed;

    constructor(initialPosition, speed) {
        this.#pos = initialPosition;
        this.#speed = speed;
    }

    tick() {
        this.#pos.x += this.#speed.x;
        this.#pos.y += this.#speed.y;
    }

    get position() {
        return this.#pos;
    }
};

export default Camera;
