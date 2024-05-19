import Dog from "./Dog.m.js";

export default class Shiba extends Dog {
    constructor() {
        super();
    }

    talk() {
        return "Wof-wouf";
    }
}
