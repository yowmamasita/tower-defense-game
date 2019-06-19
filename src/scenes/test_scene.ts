import Phaser from "phaser";

export class TestScene extends Phaser.Scene {
    constructor() {
        super({
            key: "TestScene",
        });
    }

    public create() {
        this.add.text(16, 16, "Hello World!", { fontSize: "32px", fill: "#fff" });
    }
}
