class Luffy{
    constructor(game){
        this.game = game
        this.animator = new Animator(ASSET_MANAGER.getAsset("./luffy.png"), 0, 0, 56, 58, 8, 0.08);
        
        this.x = -300;
        this.y = 600;
        this.speed = 500;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1000) this.x = -300
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
        

    };
}