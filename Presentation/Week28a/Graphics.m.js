export default class Graphics {
    #blockColor = "black";
    #backGroundColor = "white";
    #canvas = document.getElementById("canvas");
    #ctx = canvas.getContext("2d");
    #squareSize = 20;
    #game = null;

    constructor() {
    }

    clearCanvas() {
        this.#ctx.fillStyle = this.#backGroundColor;
        this.#ctx.fillRect(0, 0, 1024, 1024);
    }

    drawBoard() {
        this.#ctx.fillStyle = this.#blockColor;
        let currentYoffset = 0;
        const board = this.#game.board;
        for (let rid = 0; rid < board.length; ++rid) {
            const line = board[rid];
            const charList = line.split("");
            let currentXoffset = 0;
            charList.forEach((char) => {
                if (char === "#") {
                    this.#ctx.fillRect(currentXoffset, currentYoffset,
                        this.#squareSize, this.#squareSize);
                }
                currentXoffset += this.#squareSize;
            });
            currentYoffset += this.#squareSize;
        }
    }

    drawObject(objectParts, color) {
        const sz = this.#squareSize;
        this.#ctx.fillStyle = color;
        objectParts.forEach((part) => {
            const partX = part.x * sz;
            const partY = part.y * sz;
            this.#ctx.fillRect(partX, partY, sz, sz);
        });
    }

    drawScore() {
        this.#ctx.font = "30px serif";
        this.#ctx.fillText("Score:" + this.#game.score, 50, 300);
    }

    drawGame(snake) {
        this.clearCanvas();
        this.drawBoard();
        this.drawObject(snake.parts, snake.color);
        this.drawObject(this.#game.fruit, "red");
        this.drawScore();
    }

    set game(value) {
        this.#game = value;
    }
};
