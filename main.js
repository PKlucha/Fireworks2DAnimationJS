var fireworks = [];

function setup() {
	createCanvas(window.innerWidth - 10, window.innerHeight - 20);
	//frameRate(50);
	stroke(0);
	gravity = createVector(0, 0.1);
	background(0);
}

function draw() {
	background(0, 25);

	if(random(1) < 0.08) {
		fireworks.push(new Firework());
	}

	for(var i = fireworks.length - 1; i >= 0; i--){
		fireworks[i].update();
		fireworks[i].show();
		if(fireworks[i].exploded && fireworks[i].particles.length < 3){
			fireworks.splice(i, 1);
		}
	}
}