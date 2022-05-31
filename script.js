const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const eagleImage = new Image();
eagleImage.src = 'img/eagle_sprite_sheet.png';
const spriteWidth = 461;
const spriteHeight = 498;
let frameX = 0;
let gameFrame = 0;
const staggerFrame = 9;
let speed = 6;

function animate(){

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Animate eagle
  ctx.drawImage(eagleImage, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Slow the animation
  if (gameFrame % staggerFrame == 0){
    if (frameX < 7){
      frameX ++;
    }
    else frameX = 3;
  }
  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
