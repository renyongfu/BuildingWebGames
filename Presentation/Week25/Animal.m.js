export class Animal {
    #name = "";
    #speed = 0;
    constructor(name, speed) {
        this.#name = name;
    }

    set name(val) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set speed(val) {
        this.#speed = val;
    }

    move() {
        console.log(`${this.#name} moves at the speed of ${this.#speed}`);
    }
}
