const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 85;

let isDrawing = false;
let lastX = 0,
    lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return // Stop the function when not drawing

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY); // Start form
  context.lineTo(e.offsetX, e.offsetY); // Go to
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY]; // Update line position coordinates

  // hue update
  hue++;
  if(hue == 360) hue = 0;

  // lineWidth update
  console.log(context.lineWidth);
  if(context.lineWidth >= 85 || context.lineWidth <= 1) {
    console.log("cambio")
    direction = !direction;
  }
  if(direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
