function Firework() {
	this.littleParticles = 100;
	this.burstRate = random(0.7, 0.99);
	this.partColor = {
		red: random(0, 255),
		green: random(0, 255),
		blue: random(0, 255)
	};

	this.firework = new Particle(random(width), height, this.burstRate, this.partColor, true);
	this.exploded = false;
	this.particles = [];


	this.update = function() {
		if(!this.exploded) {
			this.firework.applyForce(gravity);
			this.firework.update();
			if(this.firework.vel.y >= 0) {
				this.exploded = true;
				this.explode();
			}
		}

		for(var i = this.particles.length - 1; i >= 0; i--){
			this.particles[i].applyForce(gravity);
			this.particles[i].update();
			if(this.particles[i].done()){
				this.particles.splice(i, 1);
			}
		}

	}

	this.explode = function() {
		for(var i = 0; i < this.littleParticles; i++){
			var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.burstRate, this.partColor);
			this.particles.push(p);
		}

	}

	this.show = function() {
		if(!this.exploded) {
			this.firework.show();
		}

		for(var i = 0; i < this.particles.length; i++){
			this.particles[i].show();
		}
	}
}