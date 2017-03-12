import Behaviour from './Behaviour';
import Vector2D from '../math/Vector2D';
import Util from '../core/Util';

export default class Scale extends Behaviour {

	constructor(a, b, life, easing) {
		super(life, easing);
		this.reset(a, b);
		this.name = 'Scale';

		this.applyBehaviour = this.applyBehaviour;
	}

	reset(a, b, life, easing) {
		if (b == null || b == undefined){
			this.same = true;
		}else{
			this.same = false;
		}
		this.a = Util.setSpanValue(Util.initValue(a, 1));
		this.b = Util.setSpanValue(b);
		if (life){
			suoer.reset(life, easing);
		}
	}

	initialize(particle) {
		particle.transform.scaleA = this.a.getValue();
		particle.transform.oldRadius = particle.radius;
		if (this.same){
			particle.transform.scaleB = particle.transform.scaleA;
		}else{
			particle.transform.scaleB = this.b.getValue();
		}
	}

	applyBehaviour(particle, time, index) {
		super.applyBehaviour(particle, time, index);
		particle.scale = particle.transform.scaleB + (particle.transform.scaleA - particle.transform.scaleB) * this.energy;
		if (particle.scale < 0.0001){
			particle.scale = 0;
		}
		particle.radius = particle.transform.oldRadius * particle.scale;
	}
}