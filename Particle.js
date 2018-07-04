function Particle(x, y, burstRate, partColor, firework) {
	this.pos = createVector(x, y);
	this.acc = createVector(random(-1, 1), 0);
	this.firework = firework;
	this.burstRate = burstRate;
	this.lifeSpan = 255;
	this.partColor = partColor;

	if(this.firework){
		this.vel = createVector(0, random(-15, -7));
	} else {
		this.vel = p5.Vector.random2D();
		this.vel.mult(random(1, 3));
	}

	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.update = function() {
		if(!this.firework && this.lifeSpan){
			if(random(1) < 0.2){
				this.vel.mult(this.burstRate);
			}
			this.lifeSpan -= 3;
		}
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.done = function(){
		if(this.lifeSpan <= 0){
			return true;
		} else {
			return false;
		}
	}

	this.show = function(){
		if(!this.firework && this.lifeSpan){
			fill(this.partColor.red, this.partColor.green, this.partColor.blue, this.lifeSpan)
			rect(this.pos.x, this.pos.y, 4, 4);
		} else if(this.firework){
			fill(102);
			rect(this.pos.x, this.pos.y, 2, 10);
		}
	}
}
