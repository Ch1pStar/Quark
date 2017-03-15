// import Particle from '../core/Particle';
import Particle from '../core/Particle';
import Rate from '../initialize/Rate';
import NumericalIntegration from '../math/NumericalIntegration';
import initializeFn from '../initialize/InitializeUtil';
import MiniSignal from 'mini-signals';

export default class Emitter extends Particle{
  constructor() {
    super();

    this.initializes = [];
    this.behaviours = [];
    this.emitTime = 0;
    this.emitTotalTimes = -1;
    /**
     * The friction coefficient for all particle emit by This;
     * @property damping
     * @type {Number}
     * @default 0.006
     */
    this.damping = .006;
    /**
     * If bindEmitter the particles can bind this emitter's property;
     * @property bindEmitter
     * @type {Boolean}
     * @default true
     */
    this.bindEmitter = true;
    /**
     * The number of particles per second emit (a [particle]/b [s]);
     * @property rate
     * @type {Quark.Rate}
     * @default Quark.Rate(1, .1)
     */
    this.rate = new Rate(1, .1);

    this.integrator = new NumericalIntegration();

    this.maxParticles = 50000;


    this.particleCreated = new MiniSignal();
    this.particleUpdate = new MiniSignal();
    this.particleDead = new MiniSignal();

    this.update = this.update;
    this.emitting = this.emitting;
    this.createParticle = this.createParticle;
    this.integrate = this.integrate;
    this.activateParticle = this.activateParticle;
    this.updateParticle = this.updateParticle;
  }

  set maxParticles(val){
    this.active = new Array(val).fill(false);
    this.particles = new Array(val);
    this.activeCount = 0;
  }

  get maxParticles(){
    return this.particles.length;
  }

  /**
   * create single particle;
   * 
   * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
   * @method removeAllParticles
   */
  createParticle(time) {
    let activeCount = this.activeCount;
    if(activeCount === this.maxParticles) return;

    const active = this.active;
    for (let i = 0, n = active.length; i < n; i++) {
      if (!active[i]) {
        this.activateParticle(i, time);
        active[i] = true;
        this.activeCount = activeCount + 1;
        break;
      }
    }
  }

  activateParticle(index, time){
    const particles = this.particles;
    let particle = particles[index];

    if(!particle){
      particles[index] = particle = new Particle();
    }

    let initializes = this.initializes;
    let behaviours = this.behaviours;

    particle.reset();
    initializeFn(this, particle, initializes);
    particle.addBehaviours(behaviours);
    particle.update(index, time);

    this.particleCreated.dispatch(particle);

  }

  updateParticle(particle, index, time, damping){
    const res = particle.update(index, time);

    this.integrator.integrate(particle, time, damping);

    if(res){
      this.particleUpdate.dispatch(particle);
    }else{
      this.particleDead.dispatch(particle);
    }
    return res;
  }

  integrate(time) {
    const damping = 1 - this.damping;
    this.integrator.integrate(this, time, damping);


    const active = this.active;
    let activeCount = this.activeCount;
    const particles = this.particles;

    for (let i = 0, n = active.length; i < n; i++) {
      if (active[i] && !this.updateParticle(particles[i], i, time, damping)) {
        active[i] = false;
        activeCount--;
      }
    }
    this.activeCount = activeCount;

  }

  emitting(time) {
    this.emitTime += time;
    if(this.emitTime < this.emitTotalTimes){
      const length = this.rate.getValue(time);

      for (let i = 0; i < length; i++) {
        this.createParticle(time);
      }
    }
  }

  emit(emitTime, life) {
    this.emitTime = 0;
    this.emitTotalTimes = emitTime || Infinity;

    if(!isNaN(life)) {
      this.life = life;
    }

    this.rate.init();
  }

  /**
   * stop emiting
   * @method stopEmit
   */
  stopEmit() {
    this.emitTotalTimes = -1;
    this.emitTime = 0;
  }

  /**
   * remove current all particles
   * @method removeAllParticles
   */
  removeAllParticles() {
    this.active.forEach((a)=>a=false);
  }

  /**
   * add initialize to this emitter
   * @method addSelfInitialize
   */
  addSelfInitialize(pObj) {
    if (pObj['init']) {
      pObj.init(this);
    } else {
      this.initAll();
    }
  }

  /**
   * add the Initialize to particles;
   * 
   * you can use initializes array:for example emitter.addInitialize(initialize1,initialize2,initialize3);
   * @method addInitialize
   * @param {Quark.Initialize} initialize like this new Quark.Radius(1, 12)
   */
  addInitialize() {
    const length = arguments.length;
    for (let i = 0; i < length; i++) {
      this.initializes.push(arguments[i]);
    }
  }

  /**
   * remove the Initialize
   * @method removeInitialize
   * @param {Quark.Initialize} initialize a initialize
   */
  removeInitialize(initializer) {
    const index = this.initializes.indexOf(initializer);
    if (index > -1) {
      this.initializes.splice(index, 1);
    }
  }

  /**
   * remove all Initializes
   * @method removeInitializers
   */
  removeInitializers() {
    this.initializes.length = 0;
  }

  /**
   * add the Behaviour to particles;
   * 
   * you can use Behaviours array:emitter.addBehaviour(Behaviour1,Behaviour2,Behaviour3);
   * @method addBehaviour
   * @param {Quark.Behaviour} behaviour like this new Quark.Color('random')
   */
  addBehaviour() {
    const length = arguments.length;
    for (let i = 0; i < length; i++) {
      this.behaviours.push(arguments[i]);
      if (arguments[i].hasOwnProperty("parents"))
        arguments[i].parents.push(this);
    }
  }

  /**
   * remove the Behaviour
   * @method removeBehaviour
   * @param {Quark.Behaviour} behaviour a behaviour
   */
  removeBehaviour(behaviour) {
    const index = this.behaviours.indexOf(behaviour);
    if (index > -1)
      this.behaviours.splice(index, 1);
  }

  /**
   * remove all behaviours
   * @method removeAllBehaviours
   */
  removeAllBehaviours() {
    this.behaviours.length = 0;
  }

  update(time) {
    this.age += time;
    if (this.dead || (this.age >= this.life)) {
      this.destroy();
    }

    this.emitting(time);
    this.integrate(time);
  };

  /**
   * Destory this Emitter
   * @method destroy
   */
  destroy() {
    this.dead = true;
    this.emitTotalTimes = -1;

    this.removeInitializers();
    this.removeAllBehaviours();

    if (this.parent){
      this.parent.removeEmitter(this);
    }
  }

}