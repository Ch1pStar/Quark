import Behaviour from './Behaviour';
import Util from '../core/Util';
import Vector2D from '../math/Vector2D';
import { randomAToB } from '../math/MathUtils';

export default class RandomDrift extends Behaviour {

	constructor(driftX, driftY, delay, life, easing) {
		super(life, easing);
		this.reset(driftX, driftY, delay);
		this.time = 0;
		this.name = "RandomDrift";
	
		this.applyBehaviour = this.applyBehaviour
	}


	reset(driftX, driftY, delay, life, easing) {
		this.panFoce = new Vector2D(driftX, driftY);
		this.panFoce = this.normalizeForce(this.panFoce);
		this.delay = delay;
		if (life){
			RandomDrift._super_.prototype.reset.call(this, life, easing);
		}
	}

	applyBehaviour(particle, time, index) {
		super.applyBehaviour(particle, time, index);
		this.time += time;
		if (this.time >= this.delay) {			
			particle.a.addXY(randomAToB(-this.panFoce.x, this.panFoce.x), randomAToB(-this.panFoce.y, this.panFoce.y));
			this.time = 0;
		};
	}
}