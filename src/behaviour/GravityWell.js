import Behaviour from './Behaviour';
import Util from '../core/Util';
import Vector2D from '../math/Vector2D';

export default class GravityWell extends Behaviour {

	constructor(centerPoint, force, life, easing) {
		super(life, easing);
		this.distanceVec = new Vector2D();
		this.centerPoint = Util.initValue(centerPoint, new Vector2D);
		this.force = Util.initValue(this.normalizeValue(force), 100);
		this.name = "GravityWell";

		this.applyBehaviour = this.applyBehaviour
	}


	reset(centerPoint, force, life, easing) {
		this.distanceVec = new Vector2D();
		this.centerPoint = Util.initValue(centerPoint, new Vector2D);
		this.force = Util.initValue(this.normalizeValue(force), 100);
		if (life){
			super.reset(life, easing);
		}
	}

	initialize(particle) {

	}

	applyBehaviour(particle, time, index) {
		this.distanceVec.set(this.centerPoint.x - particle.p.x, this.centerPoint.y - particle.p.y);
		const distanceSq = this.distanceVec.lengthSq();
		if (distanceSq != 0) {
			const distance = this.distanceVec.length();
			const factor = (this.force * time ) / (distanceSq * distance );
			particle.v.x += factor * this.distanceVec.x;
			particle.v.y += factor * this.distanceVec.y;
		}
	}
}