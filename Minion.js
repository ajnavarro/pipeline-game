Minion = function (game, x, y) {
    this.game = game

    let entity = game.add.sprite(x, y, "minion", 1)

    entity.smoothed = false
    entity.scale.set(1)

    entity.animations.add('up', [0, 1], 5, true)
    entity.animations.add('down', [2, 3], 5, true)

    entity.animations.add('left', [10, 11], 5, true)
    entity.animations.add('right', [8, 9], 5, true)

    entity.animations.add('stay', [4, 5], 4, true)

    game.physics.enable(entity, Phaser.Physics.ARCADE)

    entity.play('stay')

    this.entity = entity
}

Minion.prototype.AddMachine = function (machine) {
    if (this.path === undefined) {
        this.pi = 0
        this.path = []
    }

    this.path.push(machine)
}

Minion.prototype.Update = function () {
    let machine = this.path[this.pi].entity
    this.game.physics.arcade.moveToObject(this.entity, machine, 100, 300)

    let distance = Math.floor(this.game.physics.arcade.distanceToXY(this.entity, machine.x, machine.y))
    if (distance === 0) {
        this.pi++
    }

    if (this.pi >= this.path.length) {
        this.pi = 0
    }

    let x = Math.floor(this.entity.body.velocity.x)
    let y = Math.floor(this.entity.body.velocity.y)

    if (x < 0 && y < 0) {
        this.entity.play('left')
    } else if (x < 0 && y > 0) {
        this.entity.play('left')
    } else if (x > 0 && y < 0) {
        this.entity.play('right')
    } else if (x > 0 && y > 0) {
        this.entity.play('right')
    } else if (x < 0 && y === 0) {
        this.entity.play('left')
    } else if (x > 0 && y === 0) {
        this.entity.play('right')
    } else if (y < 0 && x === 0) {
        this.entity.play('up')
    } else if (y > 0 && x === 0) {
        this.entity.play('down')
    } else {
        this.entity.play('stay')
    }
}

Minion.Preload = function (game) {
    game.load.spritesheet("minion", "assets/minion.png", 31, 39)
}


Movement = function (machine, ttw) {
    this.machine = machine
    this.ttw = ttw
}