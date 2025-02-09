import Actor from "./actor.m.js"

class Bird extends Actor {
    #pos = {x: 300, y: 300};
    #speed;
    #gravityAcceleration = -1 / 60;
    #jumpForce = 2;
    #images = [];
    #currentImageId = 0;
    #tickCount = 0;
    #flipInterval = 15; // 15/60 seconds
    #sound;

    constructor(speed) {
        super();
        this.#speed = speed;
        const imageFiles = ["bird1.png", "bird2.png", "bird3.png", "bird4.png"];
        for (const file of imageFiles) {
            const image = new Image();
            image.src = "./" + file;
            this.#images.push(image);
        }
        this.#sound= new Audio("./flappybird.mp3");
        this.#sound.autoplay = true;
        this.#sound.loop = true;
    }

    draw(context, camera) {
        context.fillStyle = "white";

        const canvasHeight = context.canvas.height;

        const p = {
            x: this.#pos.x - camera.position.x,
            y: canvasHeight - (this.#pos.y - camera.position.y)
        };
        const numImages = this.#images.length;
        const id = this.#currentImageId;
        if (this.#tickCount % this.#flipInterval === 0) {
            this.#currentImageId += 1;
            this.#currentImageId %= numImages;
        }
        const img = this.#images[id];
        context.drawImage(img, p.x, p.y);
    }

    tick(context) {
        this.#tickCount += 1;
        this.#speed.y += this.#gravityAcceleration;
        this.#pos.x += this.#speed.x;
        this.#pos.y += this.#speed.y;
    }

    flyUpward() {
        this.#speed.y = this.#jumpForce;
        console.log('fly Upward!');
    }
};

export default Bird;
