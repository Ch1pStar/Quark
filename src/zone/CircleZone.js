import Zone from './Zone';

export default class PointZone extends Zone {

	constructor(x, y, radius) {
		super();
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.angle = 0;
		this.center = {
			x : this.x,
			y : this.y
		};
	}

	getPosition() {
		this.random = Math.random();
		this.angle = Math.PI * 2 * Math.random();
		this.vector.x = this.x + this.random * this.radius * Math.cos(this.angle);
		this.vector.y = this.y + this.random * this.radius * Math.sin(this.angle);
		return this.vector;
	}

	setCenter(x, y) {
		this.center.x = x;
		this.center.y = y;
	}

	crossing(particle) {
		var d = particle.p.distanceTo(this.center);
		if (this.crossType == "dead") {
			if (d - particle.radius > this.radius)
				particle.dead = true;
		} else if (this.crossType == "bound") {
			if (d + particle.radius >= this.radius)
				this.getSymmetric(particle);
		} else if (this.crossType == "cross") {
			if (this.alert) {
				alert('Sorry CircleZone does not support cross method');
				this.alert = false;
			}
		}
	}

	getSymmetric(particle) {
		var tha2 = particle.v.getGradient();
		var tha1 = this.getGradient(particle);
		var tha = 2 * (tha1 - tha2);
		var oldx = particle.v.x;
		var oldy = particle.v.y;
		particle.v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
		particle.v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
	}

	getGradient(particle) {
		return -Math.PI / 2 + Math.atan2(particle.p.y - this.center.y, particle.p.x - this.center.x);
	}
}