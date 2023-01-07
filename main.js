const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./luffy.png");
ASSET_MANAGER.queueDownload("./marineford.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	gameEngine.addEntity(new Luffy(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
