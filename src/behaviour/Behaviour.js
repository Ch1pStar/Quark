import Util from '../core/Util';
import { MEASURE } from '../emitter/const';
import getEasingByName from '../math/ease';


const BEHAVIOUR_ID_BASE = 0xFFFFF;
let uid = 0;

export default class Behaviour {

	constructor(life, easing = 'easeLinear') {
		this.id = BEHAVIOUR_ID_BASE + uid++;
		this.life = life || Infinity;
		this.easing = getEasingByName(easing);
		this.age = 0;
		this.energy = 1;
		this.dead = false;
		this.parents = [];
		this.name = 'Behaviour';
		this.applyBehaviour = this.applyBehaviour
	}

	/**
	 * Reset this behaviour's parameters
	 *
	 * @method reset
	 * @memberof Proton.Behaviour
	 * @instance
	 *
	 * @param {Number} [life=Infinity] 		this behaviour's life
	 * @param {String} [easing=easeLinear] 	this behaviour's easing
	 */
	reset(life, easing) {
		this.life = life || Infinity;
		this.easing = easing || getEasingByName('easeLinear');
	}

	/**
	 * Normalize a force by 1:100;
	 *
	 * @method normalizeForce
	 * @memberof Proton.Behaviour
	 * @instance
	 *
	 * @param {Proton.Vector2D} force 
	 */
	normalizeForce(force) {
		return force.multiplyScalar(MEASURE);
	}

	/**
	 * Normalize a value by 1:100;
	 *
	 * @method normalizeValue
	 * @memberof Proton.Behaviour
	 * @instance
	 *
	 * @param {Number} value
	 */
	normalizeValue(value) {
		return value * MEASURE;
	}

	/**
	 * Initialize the behaviour's parameters for all particles
	 *
	 * @method initialize
	 * @memberof Proton.Behaviour
	 * @instance
	 *
	 * @param {Proton.Particle} particle
	 */
	initialize(particle) {
	}
	
	/**
	 * Apply this behaviour for all particles every time
	 *
	 * @method applyBehaviour
	 * @memberof Proton.Behaviour
	 * @instance
	 *
	 * @param {Proton.Particle} particle
	 * @param {Number} 			time the integrate time 1/ms
	 * @param {Int} 			index the particle index
	 */
	applyBehaviour(particle, time, index) {
		this.age += time;
		if (this.age >= this.life || this.dead) {
			this.energy = 0;
			this.dead = true;
			this.destroy();
		} else {
			var scale = this.easing(particle.age / particle.life);
			this.energy = Math.max(1 - scale, 0);
		}
	}
	
	/**
	 * Destory this behaviour
	 *
	 * @method destroy
	 * @memberof Proton.Behaviour
	 * @instance
	 */
	destroy() {
		var index;
		var length = this.parents.length, i;
		for ( i = 0; i < length; i++) {
			this.parents[i].removeBehaviour(this);
		}

		this.parents = [];
	}
}