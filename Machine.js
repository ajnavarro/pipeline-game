Machine = function (game, x, y, name) {
    this.game = game

    let entity = game.add.sprite(x, y, "machine", 1)

    entity.smoothed = true
    entity.scale.set(0.3)

    entity.inputEnabled = true
    entity.input.enableDrag()

    game.physics.enable(entity, Phaser.Physics.ARCADE)

    var style = {
        font: "32px Arial",
        fill: "#000000",
        wordWrap: true,
        wordWrapWidth: entity.width,
        align: "center"
    }

    let text = game.add.text(0, 0, name, style)
    text.anchor.set(0.5)

    this.entity = entity

    this.text = text


}

Machine.prototype.Update = function () {
    this.text.x = Math.floor(this.entity.x + this.entity.width / 2)
    this.text.y = Math.floor(this.entity.y + this.entity.height / 2)
}

Machine.Preload = function (game) {
    game.load.image("machine", "assets/tree.png")
}
