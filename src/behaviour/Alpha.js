import Behaviour from './Behaviour';
import Util from '../core/Util';

export default class Alpha extends Behaviour {

	constructor(a, b, life, easing) {
		super(life, easing);

		this.reset(a, b, this.life);
		this.name = "Alpha";

		this.applyBehaviour = this.applyBehaviour
	}

	/**
	 * Reset this behaviour's parameters
	 *
	 * @method reset
	 * @memberof Quark#Quark.Alpha
	 * @instance
	 *
	 * @todo add description for 'a' and 'b'
	 *
	 * @param {Number} a
	 * @param {String} b
	 * @param {Number} [life=Infinity] 				this behaviour's life
	 * @param {String} [easing=Quark.easeLinear] 	this behaviour's easing
	 */
	reset(a, b, life, easing) {
		if (b == null || b == undefined){
			this.same = true;
		} else {
			this.same = false;
		}
		this.a = Util.setSpanValue(a || 1);
		this.b = Util.setSpanValue(b);
		if (life){
			super.reset(life, easing);
		}
	}

	/**
	 * Sets the new alpha value of the particle
	 *
	 * @method initialize
	 * @memberof Quark#Quark.Alpha
	 * @instance
	 *
	 * @param {Quark.Particle} particle A single Quark generated particle
	 */
	initialize(particle) {
		particle.transform.alphaA = this.a.getValue();
		if (this.same){
			particle.transform.alphaB = particle.transform.alphaA;
		} else {
			particle.transform.alphaB = this.b.getValue();
		}
	};

	/**
	 * @method applyBehaviour
	 * @memberof Quark#Quark.Alpha
	 * @instance
	 *
	 * @param {Quark.Particle} particle
	 * @param {Number} 			time the integrate time 1/ms
	 * @param {Int} 			index the particle index
 	 */
	applyBehaviour(particle, time, index) {
		super.applyBehaviour(particle, time, index);
		particle.alpha = particle.transform.alphaB + (particle.transform.alphaA - particle.transform.alphaB) * this.energy;
		if (particle.alpha < 0.001)
			particle.alpha = 0;
	};
}
