let video;
let charSet = '     .:-=+*%@#';

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / 40, height / 40);
  video.hide();
  textSize(min(width, height) / 40);
  textFont('monospace');
  textStyle(BOLD);
}

function draw() {
  background(0);
  video.loadPixels();

  let scaleX = width / video.width;
  let scaleY = height / video.height;

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let brightness = (r + g + b) / 3;
      let charIndex = int(map(brightness, 0, 255, 0, charSet.length - 1));
      let char = charSet.charAt(charIndex);

      fill(0, 255, 0); // Bright green color
      text(char, x * scaleX, y * scaleY);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  video.size(width / 40, height / 40);
  textSize(min(width, height) / 40);
}
