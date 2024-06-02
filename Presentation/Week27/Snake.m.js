
export default class Snake {
    #parts = [
        {x: 4, y: 2},
        {x: 3, y: 2},
        {x: 2, y: 2}
    ];
    #color = "green";
    #facing = "E";
    #game = null;

    nextLocation() {
        const snakeHead = this.#parts[0];
        let targetX = snakeHead.x;
        let targetY = snakeHead.y;
        targetY = this.#facing == "N" ? targetY-1 : targetY;
        targetY = this.#facing == "S" ? targetY+1 : targetY;
        targetX = this.#facing == "W" ? targetX-1 : targetX;
        targetX = this.#facing == "E" ? targetX+1 : targetX;
        return {x: targetX, y: targetY};
    }

    move() {
        const location = this.nextLocation();
        const game = this.#game;

        if(game.isWall(location)) {
            return "gameover";
        }
        if(game.isEmpty(location)) {
            this.#parts.unshift(location);
            this.#parts.pop();
        }
        const fruitId = game.isFruit(location);
        if(fruitId >= 0) {
            game.fruit.splice(fruitId, 1);
            this.#parts.unshift(location);
            game.score++;
        }
    }

    set game(value) {
        this.#game = value;
    }

    get parts() {
        return this.#parts;
    }

    get facing() {
        return this.#facing;
    }

    set facing(value) {
        this.#facing = value;
    }
};