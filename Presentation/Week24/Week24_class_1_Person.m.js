
export class Person {
    #name;
    #age;

    constructor(_name, _age) {
        this.#name = _name;
        this.#age = _age;
    }

    get name() {
        return this.#name;
    }

    describe() {
        console.log(`I am ${this.#name} and I am ${this.#age} year old`);
    }
}
