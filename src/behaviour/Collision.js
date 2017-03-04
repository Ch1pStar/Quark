import Behaviour from './Behaviour';
import Util from '../core/Util';
import Vector2D from '../math/Vector2D';

export default class Collision extends Behaviour {

	constructor(emitter, mass, callback, life, easing) {
		super(life, easing);
		this.reset(emitter, mass, callback);
		this.name = "Collision";
		this.applyBehaviour = this.applyBehaviour
	}

	/**
	 * Reset this behaviour's parameters
	 *
	 * @memberof Proton#Proton.Collision
	 * @method reset
	 * @instance
	 *
	 * @todo add description to mass
	 *
	 * @param {Proton.Emitter} 	[emitter=null] 		the attraction point coordinates
	 * @param {Boolean} 		[mass=true]			
	 * @param {Callback}	 	[callback=null]		the callback after the collision
	 * @param {Number} 			[life=Infinity] 	this behaviour's life
	 * @param {String} [easing=Proton.easeLinear] 	this behaviour's easing
	 */
	reset(emitter, mass, callback, life, easing) {
		this.emitter = emitter || null;
		this.mass = mass || true;
		this.callback = callback || null;
		this.collisionPool = [];
		this.delta = new Vector2D();
		if (life){
			super.reset(life, easing);
		}
	}

	/**
	 * Apply this behaviour for all particles every time
	 *
	 * @memberof Proton#Proton.Collision
	 * @method applyBehaviour
	 * @instance
	 *
	 * @param {Proton.Particle} particle
	 * @param {Number} 			time the integrate time 1/ms
	 * @param {Int} 			index the particle index
	 */
	applyBehaviour(particle, time, index) {
		let newPool = this.emitter.particles.slice(index);
		let otherParticle;
		let lengthSq;
		let overlap;
		let averageMass1, averageMass2;
		let length = newPool.length;
		for (let i = 0; i < length; i++) {
			otherParticle = newPool[i];
			if (otherParticle !== particle) {
				this.delta.copy(otherParticle.p);
				this.delta.sub(particle.p);
				lengthSq = this.delta.lengthSq();
				const distance = particle.radius + otherParticle.radius;

				if (lengthSq <= distance * distance) {
					overlap = distance - Math.sqrt(lengthSq);
					overlap += 0.5;
					const totalMass = particle.mass + otherParticle.mass;
					averageMass1 = this.mass ? otherParticle.mass / totalMass : 0.5;
					averageMass2 = this.mass ? particle.mass / totalMass : 0.5;
					particle.p.add(this.delta.clone().normalize().multiplyScalar(overlap * -averageMass1));
					otherParticle.p.add(this.delta.normalize().multiplyScalar(overlap * averageMass2));
					if (this.callback){
						this.callback(particle, otherParticle);
					}
				}
			}
		}
	}
}