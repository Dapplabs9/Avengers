var canvas = new fabric.Canvas("myCanvas");
var blockWidth = 30;
var blockHeight = 30;
var playerX = 10;
var playerY = 10;
var player_Object = "";
var block_Object = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
      player_Object = Img;
      player_Object.scaleToWidth(150);
      player_Object.scaleToHeight(150);
      player_Object.set({
          top: playerY,
          left: playerX
      });
      canvas.add(player_Object);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
      block_Object = Img;
      block_Object.scaleToWidth(blockWidth);
      block_Object.scaleToHeight(blockHeight);
      block_Object.set({
          top: playerY,
          left: playerX
      });
      canvas.add(block_Object);
    });
}

window.addEventListener("keydown",key_down);
function key_down(e){
    var keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == 80) {
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if (e.shiftKey == true && keyPressed == 77) {
        blockHeight = blockHeight - 10;
        blockWidth = blockWidth - 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if (keyPressed == 37) {
        left();
        console.log("left");
    }
    if (keyPressed == 38) {
        up();
        console.log("up");
    }
    if (keyPressed == 39) {
        right();
        console.log("right");
    }
    if (keyPressed == 40) {
        down();
        console.log("down");
    }
    if (keyPressed == 76) {
        block_update("https://i.postimg.cc/KzF6GDqt/hulk-legs.png");
        console.log("wall");
    }
    if (keyPressed == 82) {
        block_update("https://i.postimg.cc/8s8BGtwS/thor-right-hand.png");
        console.log("wood");
    }
    if (keyPressed == 72) {
        block_update("https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png");
        console.log("glass");
    }
    if (keyPressed == 70) {
        block_update("https://i.postimg.cc/hGnyTPLB/ironman-face.png");
        console.log("roof");
    }
    if (keyPressed == 66) {
        block_update("https://i.postimg.cc/FscwL6M0/spiderman-body.png");
        console.log("wall2");
    }
}
function up(){
    if (playerY >=0) {
        playerY = playerY - 10;
        canvas.remove(player_Object);
        player_update();
    }
}
function down(){
    if (playerY <=600) {
        playerY = playerY + 10;
        canvas.remove(player_Object);
        player_update();
    }
}
function right(){
    if (playerX <=1000) {
        playerX = playerX + 10;
        canvas.remove(player_Object);
        player_update();
    }
}
function left(){
    if (playerX >=0) {
        playerX = playerX - 10;
        canvas.remove(player_Object);
        player_update();
    }
}