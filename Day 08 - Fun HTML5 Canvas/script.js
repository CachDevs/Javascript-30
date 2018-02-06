const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false;
let lastX = 0,
    lastY = 0;

function draw(e) {
  if (!isDrawing) return // Stop the function when not drawing

  context.beginPath();
  context.moveTo(lastX, lastY); // Start form
  context.lineTo(e.offsetX, e.offsetY); // Go to
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY]; // Update line position coordenates
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
