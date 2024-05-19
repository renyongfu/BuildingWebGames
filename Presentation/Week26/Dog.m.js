import Mammal from "./Mammal.m.js"

export default class Dog extends Mammal {
    constructor() {
        super();
        this.name = "Dog";
    }

    talk() {
        return "Wou-wou";
    }
};
