import Behaviour from './Behaviour';
import Util from '../core/Util';
import Vector2D from '../math/Vector2D';


export default class CrossZone extends Behaviour{

	static CROSS_TYPES = {
		CROSS: 1 << 0,
		DEAD: 1 << 2,
		BOUND: 1 << 3
	};

	constructor(zone, crossType, life, easing){
		super(life, easing);
		this.reset(zone, crossType);
		this.name = 'CrossZone';

		this.applyBehaviour = this.applyBehaviour;
	}

	reset(zone, crossType, life, easing){
		this.zone = zone;
		this.zone.crossType = Util.initValue(crossType, CrossZone.CROSS_TYPES.DEAD);
		if (life){
			super.reset(life, easing);
		}
	}

	applyBehaviour(particle, time, index) {
		super.applyBehaviour(particle, time, index);
		this.zone.crossing(particle);
	}
}
