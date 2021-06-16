var spaceShipImg,spaceCraftImg1,spaceCraftImg2,bgImg;
var spaceShip,spaceCraft;
var gameState = "undocked"

function preload() {
  spaceShipImg = loadImage ("iss.png");
  spaceCraftImg1 = loadAnimation ("spacecraft2.png","spacecraft3.png","spacecraft4.png");
  spaceCraftImg2 = loadAnimation ("spacecraft1.png");
  bgImg = loadImage ("spacebg.jpg"); 
}

function setup() {
  createCanvas(800,400);
  spaceShip = createSprite(400, 200, 50, 50);
  spaceShip.addImage(spaceShipImg);

  spaceCraft = createSprite(400,300);
  spaceCraft.addAnimation("moving",spaceCraftImg1)
  spaceCraft.addAnimation("static",spaceCraftImg2)
  spaceCraft.scale = 0.1;
}

function draw() {
  background(bgImg);  

  if(gameState !== "docked"){
    if (keyDown("right")){
      spaceCraft.x += 5
    }
    if (keyDown("left")){
      spaceCraft.x -= 5
    }
    if (keyDown("down")){
      spaceCraft.y += 5
    }
    if (keyDown("up")){
      spaceCraft.y -= 5
    }
    if (spaceCraft.x === 335 && spaceCraft.y === 265){
      gameState="docked"
    }
  }
  else{
    spaceCraft.changeAnimation("static",spaceCraftImg2)
    spaceCraft.y = 245;
  }
  drawSprites();
}