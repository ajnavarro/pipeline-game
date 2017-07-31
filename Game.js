MainGame = {
    Game: function (game) {
        //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

        this.game      //  a reference to the currently running game (Phaser.Game)
        this.add       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
        this.camera    //  a reference to the game camera (Phaser.Camera)
        this.cache     //  the game cache (Phaser.Cache)
        this.input     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
        this.load      //  for preloading assets (Phaser.Loader)
        this.math      //  lots of useful common math operations (Phaser.Math)
        this.sound     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
        this.stage     //  the game stage (Phaser.Stage)
        this.time      //  the clock (Phaser.Time)
        this.tweens    //  the tween manager (Phaser.TweenManager)
        this.state     //  the state manager (Phaser.StateManager)
        this.world     //  the game world (Phaser.World)
        this.particles //  the particle manager (Phaser.Particles)
        this.physics   //  the physics manager (Phaser.Physics)
        this.rnd       //  the repeatable random number generator (Phaser.RandomDataGenerator)

        //  You can use any of these from any function within this State.
        //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

    }
}

MainGame.Game.prototype = {

    preload: function () {
        Minion.Preload(this.game)
        Machine.Preload(this.game)

        this.game.load.image('background', 'assets/background.jpg')
    },

    create: function () {
        this.game.add.tileSprite(0, 0, 1024, 768, 'background')

        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        this.game.stage.backgroundColor = '#ff00ff'

        let rootedRepo = new Machine(this.game, 0, 0, "Rooted Repo")
        let berserker = new Machine(this.game, 0, 0, "Berserker")
        let docFreq = new Machine(this.game, 0, 0, "DocFreq")
        let cooc = new Machine(this.game, 0, 0, "Cooc")
        let swivel = new Machine(this.game, 0, 0, "Swivel")
        let nBow = new Machine(this.game, 0, 0, "Nbow")
        let vecino = new Machine(this.game, 0, 0, "Vecino")

        this.machines = [rootedRepo, berserker, docFreq, cooc, swivel, nBow, vecino]

        let m1 = new Minion(this.game, 0, 0)
        m1.AddMachine(rootedRepo)
        m1.AddMachine(berserker)

        let m2 = new Minion(this.game, 0, 0)
        m2.AddMachine(berserker)
        m2.AddMachine(docFreq)

        let m3 = new Minion(this.game, 0, 0)
        m3.AddMachine(berserker)
        m3.AddMachine(nBow)

        let m4 = new Minion(this.game, 0, 0)
        m4.AddMachine(berserker)
        m4.AddMachine(cooc)

        let m5 = new Minion(this.game, 0, 0)
        m5.AddMachine(cooc)
        m5.AddMachine(swivel)

        let m6 = new Minion(this.game, 0, 0)
        m6.AddMachine(docFreq)
        m6.AddMachine(nBow)

        let m7 = new Minion(this.game, 0, 0)
        m7.AddMachine(docFreq)
        m7.AddMachine(vecino)

        let m8 = new Minion(this.game, 0, 0)
        m8.AddMachine(nBow)
        m8.AddMachine(vecino)

        let m9 = new Minion(this.game, 0, 0)
        m9.AddMachine(swivel)
        m9.AddMachine(vecino)

        this.minions = [m1, m2, m3, m4, m5, m6, m7, m8, m9]
    },

    update: function () {
        this.machines.forEach(function (machine) {
            machine.Update()
        })

        this.minions.forEach(function (minion) {
            minion.Update()
        })
    }
}
