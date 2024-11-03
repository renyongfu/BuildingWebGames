import Actor from "./actor.m.js";

class Paddle extends Actor {
    _center;
    _width;
    _height;
    _color;

    constructor(name, canvas) {
        super(name, canvas);
        this._center = { x: 0, y: 0 };
        this._width = 10;
        this._height = 60;
        this._color = 'cyan';
    }

    draw(ctxt) {
        ctxt.fillStyle = this._color;
        const hw = this._width / 2;
        const hh = this._height / 2;
        ctxt.fillRect(this._center.x - hw, this._center.y - hh,
            this._width, this._height);
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get center() {
        return { x: this._center.x, y: this._center.y };
    }
};

export default Paddle;
