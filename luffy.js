class Luffy{
    constructor(game){
        this.game = game
        this.animator = new Animator(ASSET_MANAGER.getAsset("./luffy.png"), 0, 0, 56, 58, 8, 0.08);
        this.angle = Math.floor(Math.random() * 360); 
        this.x = 400;
        this.y = 400;
        this.speed = 400;
    };

    update() {
        this.x += (this.speed * Math.cos(this.angle*0.017453)) * this.game.clockTick;
        this.y += (this.speed * Math.sin(this.angle*0.017453)) * this.game.clockTick;

        if(this.x > 950) this.angle = (180 - this.angle);
        else if(this.x < -50)this.angle = (180 - this.angle);
        else if(this.y > 700)this.angle = (360 - this.angle);
        else if(this.y < -20)this.angle = (360 - this.angle);
    };

    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
        

    };

    
}
function toDegrees (angle) {
    return angle * (180 / Math.PI);
}