const BACKGROUND_COLOUR = '#000000';
const LINE_COLOUR = '#FFFFFF';
const LINE_WIDTH = 15

var currentX = 0
var currentY = 0
var previousX = 0
var previousY = 0

var canvas;
var context;

function prepareCanvas() {
  // console.log('Preparing canvas...');
  canvas = document.getElementById('my-canvas')
  context = canvas.getContext('2d')

  context.fillStyle = BACKGROUND_COLOUR
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  
  context.strokeStyle = LINE_COLOUR;
  context.lineWidth = LINE_WIDTH;
  context.lineJoin = 'round'

  var isPainting = false;

  document.addEventListener('mousedown', function (event) {
    // console.log('Mouse pressed!');
    isPainting = true;
    currentX = event.clientX - canvas.offsetLeft;
    currentY = event.clientY - canvas.offsetTop;
    
  });

  
  document.addEventListener('mousemove', function (event) {
    if (isPainting) {
      previousX = currentX;
      currentX = event.clientX - canvas.offsetLeft;

      previousY = currentY;
      currentY = event.clientY - canvas.offsetTop;

      draw();
    }

  });

  document.addEventListener('mouseup', function (event) {
    // console.log('Mouse released');
    isPainting = false;

  });

  canvas.addEventListener('mouseleave', function (event) {
    isPainting = false;

  });

  canvas.addEventListener('touchstart', function (event) {
    // console.log('Touchdown!');
    isPainting = true;
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY - canvas.offsetTop;
    
  });

  canvas.addEventListener('touchmove', function (event) {
    if (isPainting) {
      previousX = currentX;
      currentX = event.touches[0].clientX - canvas.offsetLeft;

      previousY = currentY;
      currentY = event.touches[0].clientY - canvas.offsetTop;

      draw();
    }

  });

  canvas.addEventListener('touchend', function (event) {
    isPainting = false;

  });

  canvas.addEventListener('touchcancel', function (event) {
    isPainting = false;

  });

}

function draw() {
  context.beginPath();
  context.moveTo(previousX, previousY);
  context.lineTo(currentX, currentY);
  context.closePath();
  context.stroke();
}

function clearCanvas() {
  var currentX = 0
  var currentY = 0
  var previousX = 0
  var previousY = 0
  context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}
    


