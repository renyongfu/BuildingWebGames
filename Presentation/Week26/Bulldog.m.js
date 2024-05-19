import Dog from "./Dog.m.js";

export default class Bulldog extends Dog {
    constructor () {
        super();
    }

    talk() {
        return "Wou-mou-tou";
    }
}
