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

    relativePosition(point) {
        return {x: point.x - this.#pos.x, y: point.y - this.#pos.y};
    }
};

export default Camera;
