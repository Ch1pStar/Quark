import Force from './Force';
import Vector2D from '../math/Vector2D';

export default class Gravity extends Force {

	constructor(g, life, easing) {
		super(0, g, life, easing);
		this.name = 'Gravity';
		this.applyBehaviour = this.applyBehaviour;
	}

	reset(g, life, easing) {
		super.reset(0, g, life, easing);
	}

	applyBehaviour(particle, time, index) {
		super.applyBehaviour(particle, time, index);
		particle.a.add(this.force);
	}
}