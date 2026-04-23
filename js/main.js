//draw Basic form
function drawKoch(ctx, x1, y1, x2, y2, depth) {
  if (depth === 0) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  } else {
    const x3 = x1 + (x2 - x1) / 3;
    const y3 = y1 + (y2 - y1) / 3;
    const x4 = x1 + (2 * (x2 - x1)) / 3;
    const y4 = y1 + (2 * (y2 - y1)) / 3;

    const cos60 = Math.cos(Math.PI / 3);
    const sin60 = Math.sin(Math.PI / 3);
    const peakX = x3 + (x4 - x3) * cos60 + (y4 - y3) * sin60;
    const peakY = y3 - (x4 - x3) * sin60 + (y4 - y3) * cos60;

    drawKoch(ctx, x1, y1, x3, y3, depth - 1);
    drawKoch(ctx, x3, y3, peakX, peakY, depth - 1);
    drawKoch(ctx, peakX, peakY, x4, y4, depth - 1);
    drawKoch(ctx, x4, y4, x2, y2, depth - 1);
  }
}

//draw 4 copies 
const canvas = document.getElementById("kochCanvas");
const ctx = canvas.getContext("2d");

for (let n = 0; n < 4; n++) {
  let yOffset = 80 + n * 100; 
  ctx.fillText(`n = ${n + 1}`, 50, yOffset - 20); 
  drawKoch(ctx, 100, yOffset, 600, yOffset, n);
}
