let video;
let charSet =  '     .:-=+*%@#';

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / 8, height / 8);
  video.hide();
  textSize(12);
  textFont('monospace');
}

function draw() {
  background(0);
  video.loadPixels();

  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];

      let brightness = (r + g + b) / 3;
      let charIndex = int(map(brightness, 0, 255, charSet.length - 1, 0));
      let char = charSet.charAt(charIndex);

      fill(195, 80, 80); // Bright green color
      text(char, x * 8, y * 8);
    }
  }
}
