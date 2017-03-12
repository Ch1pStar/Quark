import Attraction from './Attraction';
import Util from '../core/Util';
import Vector2D from '../math/Vector2D';

export default class Repulsion extends Attraction {

	constructor(targetPosition, force, radius, life, easing) {
		super(targetPosition, force, radius, life, easing);
		this.force *= -1;
		this.name = "Repulsion";
		this.applyBehaviour = this.applyBehaviour;
	}

	reset(targetPosition, force, radius, life, easing) {
		super.reset(targetPosition, force, radius, life, easing);
		this.force *= -1;
	}
}