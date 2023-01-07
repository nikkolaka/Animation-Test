class Background{
    constructor(game){
    };

    update(){

    };

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./marineford.png"), 0, 0, 1024, 768);
    }
}