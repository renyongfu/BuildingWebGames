import Mammal from "./Mammal.m.js"

export default class Guineapig extends Mammal {
    constructor() {
        super('Guinea');
    }

    talk() {
        return "Duo-duo";
    }
};
