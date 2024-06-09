export default class Game {
    #board = [
        "####",
        "#  #",
        "#  #",
        "####"
    ];
    #fruit = [
        {x: 10, y: 10},
        {x: 11, y: 10}
    ];
    #tickNumber = 0;
    #timer = null;
    #score = 0;
    #snake = null;
    #graphics= null;
    #gameControl = null;

    constructor() {
    }

    createNewBoard(numRow, numColumn) {
        let newBoard = [];
        for (let rowId = 0; rowId < numRow; ++rowId) {
            let charList = "";
            for (let colId = 0; colId < numColumn; ++colId) {
                let char = ' ';
                if (rowId === 0 || rowId === numRow - 1) {
                    char = '#'
                }
                else if (colId === 0 || colId === numColumn - 1) {
                    char = '#';
                }
                charList += char;
            }
            newBoard.push(charList);
        }
        this.#board = newBoard;
    }

    tick() {
        this.#tickNumber++;
        if(this.#snake.move() === "gameover") {
            this.#gameControl.gameOver();
            return;
        }
        this.#graphics.drawGame(this.#snake);
    }

    startTick() {
        this.tick = this.tick.bind(this);
        this.#timer = window.setInterval(this.tick, 500);
    }

    isEmpty(location) {
        return this.#board[location.y][location.x] == ' ';
    }

    isWall(location) {
        return this.#board[location.y][location.x] == '#';
    }

    // Return the fruit identifier in fruit parts if found, otherwise return -1
    isFruit(location) {
        for (let i = 0; i < this.#fruit.length; ++i){
            let fruit = this.#fruit[i];
            if(location.x == fruit.x && location.y == fruit.y) {
                return i;
            }
        }
        return -1;
    }

    set snake(value) {
        this.#snake =value;
    }

    set graphics(value) {
        this.#graphics = value;
    }

    set gameControl(value) {
        this.#gameControl = value;
    }

    get board() {
        return this.#board;
    }

    get fruit() {
        return this.#fruit;
    }

    get score() {
        return this.#score;
    }


    stopTick() {
        window.clearInterval(this.#timer);
        this.#timer = null;
    }

    increaseScore() {
        this.#score++;
    }
};
