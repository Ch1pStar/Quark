import Behaviour from './Behaviour';
import Vector2D from '../math/Vector2D';
import Util from '../core/Util';

export default class Rotate extends Behaviour {

	static STYLES = {
		TO: 1 << 0,
		FROM: 1 << 1
	};

	static TYPE = {
		VELOCITY: 1 << 0
	};

	constructor(a, b, style, life, easing) {
		super(life, easing);
		this.reset(a, b, style);
		this.name = 'Rotate';
		this.applyBehaviour = this.applyBehaviour;
	}

	reset(a, b, style, life, easing) {
		if (b == null || b == undefined){
			this.same = true;
		}else{
			this.same = false;
		}

		this.a = Util.setSpanValue(a || Rotate.TYPE.VELOCITY);
		this.b = Util.setSpanValue(b || 0);
		this.style = style || Rotate.STYLES.TO;
		if (life){
			super.reset(life, easing);
		}
	}

	initialize(particle) {
		particle.rotation = this.a.getValue();
		particle.transform.rotationA = this.a.getValue();
		if (!this.same){
			particle.transform.rotationB = this.b.getValue();
		}
	}

	applyBehaviour(particle, time, index) {
		super.applyBehaviour(particle, time, index);
		if (!this.same) {
			if (this.style == Rotate.STYLES.TO) {
				particle.rotation += particle.transform.rotationB + (particle.transform.rotationA - particle.transform.rotationB) * this.energy
			} else {
				particle.rotation += particle.transform.rotationB;
			}
		} else if (this.a.a == Rotate.TYPE.VELOCITY) {
			//beta...
			particle.rotation = particle.getDirection();
		}
	}
}