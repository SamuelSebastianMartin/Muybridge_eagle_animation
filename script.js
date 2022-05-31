const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const eagleImage = new Image();
eagleImage.src = 'img/eagle_sprite_sheet_5frame_by2.png';
const spriteWidth = 526;
const spriteHeight = 493;
let frameX = 0;
let gameFrame = 0;
let takeoffClimbRate = 9; // speed of assent to flying level
const staggerFrame = 9;
let speed = 6;
let takeoff = true; // will takeoff sprite row be used.

function animate(){

  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Animate eagle
  // Takeoff - just 6 frames
  if (takeoff) {
    ctx.drawImage(eagleImage, frameX * spriteWidth, spriteHeight, spriteWidth, spriteHeight, 0, 70 - (frameX * takeoffClimbRate), CANVAS_WIDTH, CANVAS_HEIGHT);
    // Slow the animation
    if (gameFrame % (staggerFrame) == 0){
      if (frameX < 4){
        frameX ++;
      }
      else {
        takeoff = false;
        frameX = 0;
      }
    }

  }else { // Flying loop, repeating for ever.
    ctx.drawImage(eagleImage, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Slow the animation
    if (gameFrame % staggerFrame == 0){
      if (frameX < 4){
        frameX ++;
      }
      else frameX = 0;
    }

  }

  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
