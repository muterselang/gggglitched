// p5.glitch-almost-everything
// cc teddavis.org 2020

let glitch;
let imagePath = 'https://www.artic.edu/iiif/2/52ac8996-3460-cf71-cb42-5c4d0aa29b74/full/843,/0/default.jpg';

function setup() {
	createCanvas(windowWidth, windowHeight);
	// background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	// glitch.debug(); // debug info

	glitch.pixelate(.99); // hard pixels
	// glitch.errors(false); // no error messages

	// test loadBytes w/ callback
	glitch.loadBytes(imagePath, function() {
		glitch.randomBytes(50); // 50 random bytes
		// glitch.saveBytes('fish_glitch.png'); // toggle saveBytes()
	});

	glitch.loadType('jpg');
	glitch.loadQuality(.100)

	glitch.loadImage(imagePath); // glitch loadImage()
	loadImage(imagePath, function(img) {
		glitch.loadImage(img); // from p5.js loadImage()
	});

	glitch.debug(false); // turn off before draw()!
}

function draw() {
	glitch.resetBytes(); // fresh bytes
	glitch.limitBytes(.4, .8) // limit bytes
	glitch.randomByte(52) // single random
	glitch.randomBytes(50) // 5 random
	glitch.randomBytes(5, 120) // 5 random pos, exact val
	glitch.replaceByte(53, 255); // single replace
	glitch.replaceBytes(123, '7c'); // all replace
	glitch.replaceHex('ffdb00430101', 'ffdb00430155');
	glitch.swapBytes(88, 100); // swap values
	glitch.buildImage();
	image(glitch.image, width / 2, height / 2)
}

function keyPressed() {
	if(key === 'I') { // image raw
		glitch.saveImage('still_life_gggglitched');
	} else if(key === 'S') { // image safe
		glitch.saveSafe('still_life_gggglitched');
	} else if(key === 'C') { // canvas
		glitch.saveCanvas('still_life_gggglitched');
	}
}