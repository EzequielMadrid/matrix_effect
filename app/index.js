const c = document.getElementById("canvas"); // canvas node
const ctx = canvas.getContext("2d"); // rendering

c.width = window.innerWidth;
c.height = window.innerHeight;

const chars = " @aftercode2099 是更好的 YouTube 频道 ";
const finalChars = chars.split("");
console.log(finalChars);
const charSize = 20;
const columns = c.width / charSize;
// console.log(columns);
const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = {
    y: Math.floor(Math.random() * c.height),
    interval: Math.random * 500,
  };
  console.log(drops[i]);
}

function drawing() {
  console.log("drawing matrix....");
  ctx.fillStyle = "rgb(0,0,0,0.05)";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.font = `${charSize}px monospace`;

  for (let i = 0; i < columns; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    // fillText(draw, x, y),
    ctx.fillText(text, i * charSize, drops[i].y * charSize);
    /* 
     if(reseteamos && lluvia)
    */
    if (drops[i].y * charSize > c.height && Math.random() > 0.975) {
      //  Math.random() ===>  [0,1] |  (100% - 97.5%) 2.5%
      drops[i].y = 0;
    }

    // increment 'y' position of the drop for the next frame
    drops[i].y++;
  }
}

function animate() {
  console.log("animating...");
  drawing();
  requestAnimationFrame(animate);
}
// animate();

function timing() {
  console.log("animating with interval...");
  drawing();
  setTimeout(timing, 250);
}

// starting the animation
timing();
