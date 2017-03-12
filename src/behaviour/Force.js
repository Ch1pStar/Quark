import Behaviour from './Behaviour';
import Vector2D from '../math/Vector2D';

export default class Force extends Behaviour {

	constructor(fx, fy, life, easing) {
		super(life, easing);
		this.force = this.normalizeForce(new Vector2D(fx, fy));
		this.name = "Force";
		this.applyBehaviour = this.applyBehaviour;
	}

	reset(fx, fy, life, easing) {
		this.force = this.normalizeForce(new Vector2D(fx, fy));
		if (life){
			super.reset(life, easing);
		}
	}

	applyBehaviour(particle, time, index) {
		super.applyBehaviour(particle, time, index);
		particle.a.add(this.force);
	}
}
