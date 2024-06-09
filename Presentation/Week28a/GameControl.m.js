export default class GameControl {
    #snake = null;
    #graphics = null;
    #game = null;

    constructor() {
    }

    startGame() {
        this.#game.createNewBoard(20, 20);
        this.#game.startTick();
        this.processInput = this.processInput.bind(this);
        this.onMouseClick = this.onMouseClick.bind(this);
        window.addEventListener("keydown", this.processInput, false);
        window.addEventListener("click", this.onMouseClick, false);
    }

    processInput(event) {
        const key = event.key.toLowerCase();
        console.log("key = ", key);
        const toUp = (key == "w" || key == "arrowup");
        const toLeft = (key == "a" || key == "arrowleft");
        const toDown = (key == "s" || key == "arrowdown");
        const toRight = (key == "d" || key == "arrowright");

        this.updateFacing(toUp, toLeft, toDown, toRight);
        event.preventDefault();
    }

    onMouseClick(event) {
        console.log(`mouse clicked: ${event.x}, ${event.y}`);
        // get mouse (x, y) cordination
        const x = event.x;
        const y = event.y;
        // get snake head cordination
        const sx = this.#snake.parts[0].x * this.#graphics.squareSize;
        const sy = this.#snake.parts[0].y * this.#graphics.squareSize;
        // get the delta of mouse click
        const dx = x - sx;
        const dy = y - sy;

        // initialize turning direction
        let toUp = false;
        let toLeft = false;
        let toDown = false;
        let toRight = false;

        // get the clicking direction
        const isHorizontal = Math.abs(dx) >= Math.abs(dy);
        if (isHorizontal) {
            if (dx > 0) {
                toRight = true;
            }
            else {
                toLeft = true;
            }
        }
        else {
            if (dy > 0) {
                toDown = true;
            }
            else {
                toUp = true;
            }
        }

        // update snake facing
        this.updateFacing(toUp, toLeft, toDown, toRight);
        event.preventDefault();
    }

    updateFacing(toUp, toLeft, toDown, toRight) {
        let targetDirection = this.#snake.facing;
        if(toUp && this.#snake.facing != "S") {
            targetDirection = "N";
        }
        else if(toLeft && this.#snake.facing != "E") {
            targetDirection = "W";
        }
        else if(toDown && this.#snake.facing != "N") {
            targetDirection = "S";
        }
        else if(toRight && this.#snake.facing != "W") {
            targetDirection = "E";
        }
        this.#snake.facing = targetDirection;
    }

    gameOver() {
        window.removeEventListener("keydown", this.processInput, false);
        window.removeEventListener("click", this.onMouseClick, false);
        this.#game.stopTick();
        window.alert("Game Over!");
    }

    set snake(value) {
        this.#snake = value;
    }

    set graphics(value) {
        this.#graphics = value;
    }

    set game(value) {
        this.#game = value;
    }
};
