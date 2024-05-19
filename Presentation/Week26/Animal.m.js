export default class Animal {
    #name = "";
    #speed = 1;
    constructor(name) {
        this.#name = name;
    }

    set name(val) {
        this.#name = val;
    }

    get name() {
        return this.#name;
    }

    set speed(val) {
        this.#speed = val;
    }

    get speed() {
        return this.#speed;
    }

    move() {
        console.log(`${this.#name} moves at the speed of ${this.#speed}`);
    }

    talk() {
        return "Animal talk";
    }
}
