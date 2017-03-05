// import Particle from '../core/Particle';
import Particle from '../core/PixiParticle';
import Rate from '../initialize/Rate';
import NumericalIntegration from '../math/NumericalIntegration';
import { PARTICLE_CREATED, PARTICLE_UPDATE, PARTICLE_DEAD } from './const';
import initializeFn from '../initialize/InitializeUtil';
import MiniSignal from 'mini-signals';

export default class Emitter extends Particle{
  constructor(txt, container) {
    super();

    this.txt = txt;
    this.particleContainer = container;

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

    this._tailParticle = null;
    this._poolHead = null;
    this.particleCount = 0;


    this.update = this.update;
    this.createParticle = this.createParticle;
    this.integrate = this.integrate;
    this.setupParticle = this.setupParticle;
  }

  emit(emitTime, life) {
    this.emitTime = 0;
    this.emitTotalTimes = emitTime || Infinity;

    if(!isNaN(life)) {
      this.life = life;
    }

    this.rate.init();

    this.particleCreated = new MiniSignal();
    this.particleUpdate = new MiniSignal();
    this.particleDead = new MiniSignal();
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
    this._tailParticle = null;
    this._poolHead = null;
  }

  /**
   * create single particle;
   * 
   * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
   * @method removeAllParticles
   */
  createParticle(initialize, behaviour) {
    // const particle = new Particle();

    let particle;

    if(this._poolHead){
      particle = this._poolHead;
      this._poolHead = this._poolHead._next;
      particle._next = null;
      // console.log('pooled');
    }else{
      particle = new Particle(this.txt);
      this.particleContainer.addChild(particle.sprite);
    }
    this.particleCount++;

    let initializes = this.initializes;
    let behaviours = this.behaviours;

    if (initialize) {
      if ( initialize.constructor === Array)
        initializes = initialize;
      else
        initializes = [initialize];
    }

    if (behaviour) {
      if ( behaviour.constructor === Array)
        behaviours = behaviour;
      else
        behaviours = [behaviour];
    }

    particle.reset();
    initializeFn(this, particle, initializes);
    particle.addBehaviours(behaviours);
    particle.parent = this;
    particle._prev = this._tailParticle;
    this._tailParticle = particle;

    this.particleCreated.dispatch(particle);

    return particle;
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

  integrate(time) {
    const damping = 1 - this.damping;

    this.integrator.integrate(this, time, damping);
    let particle = this._tailParticle;
    let i = 0;
    while(particle){

      particle.update(time, i++);
      this.integrator.integrate(particle, time, damping);

      // todo tailparticle is not removed
      if (particle._prev && particle._prev.dead) {
        const deadParticle = particle._prev;
        this.particleDead.dispatch(deadParticle);
        this.particleCount--;

        // if(deadParticle === this._tailParticle){
        //   this._tailParticle = deadParticle._prev;
        // }

        deadParticle.sprite.alpha = 0;
        deadParticle.sprite.visible = false;

        particle._prev = deadParticle._prev;

        //add to pool
        deadParticle._prev = null;
        deadParticle._next = this._poolHead;
        this._poolHead = deadParticle;


      }
      this.particleUpdate.dispatch(particle);

      particle = particle._prev;
    }
  }

  emitting(time) {
    if (this.emitTotalTimes == 'once') {  
      const length = this.rate.getValue(99999);
      for (let i = 0; i < length; i++) {
        this.createParticle();
      }

      this.emitTotalTimes = 'none';
    } else if (!isNaN(this.emitTotalTimes)) {
      this.emitTime += time;
      if (this.emitTime < this.emitTotalTimes) {
        const length = this.rate.getValue(time);
        for (let i = 0; i < length; i++) {
          this.createParticle();
        }
      }
    }
  }

  update(time) {
    this.age += time;
    if (this.age >= this.life || this.dead) {
      this.destroy();
    }

    this.emitting(time);
    this.integrate(time);
  };

  setupParticle(particle, initialize, behaviour) {
    let initializes = this.initializes;
    let behaviours = this.behaviours;

    if (initialize) {
      if ( initialize.constructor === Array)
        initializes = initialize;
      else
        initializes = [initialize];
    }

    if (behaviour) {
      if ( behaviour.constructor === Array)
        behaviours = behaviour;
      else
        behaviours = [behaviour];
    }

    particle.reset();
    initializeFn(this, particle, initializes);
    particle.addBehaviours(behaviours);
    particle.parent = this;
    particle._prev = this._tailParticle;
    this._tailParticle = particle;
  }

  // recycleParticle(particle){
  //   // if(particle.next)
  //   //   particle.next.prev = particle.prev;

  //   particle._prev = particle._prev._prev;

  //   if(particle === this._tailParticle)
  //     this._tailParticle = particle._prev;

  //   //add to pool
  //   particle._prev = null;
  //   particle._next = this._poolHead;
  //   this._poolHead = particle;

  //   // //remove child from display, or make it invisible if it is in a ParticleContainer
  //   // if(this._parentIsPC)
  //   // {
  //   //   particle.alpha = 0;
  //   //   particle.visible = false;
  //   // }
  //   // else
  //   // {
  //   //   if(particle.parent)
  //   //     particle.parent.removeChild(particle);
  //   // }
  //   // //decrease count
  //   // --this.particleCount;
  // }

  /**
   * Destory this Emitter
   * @method destroy
   */
  destroy() {
    this.dead = true;
    this.emitTotalTimes = -1;

    if(this._tailParticle === null) {
      this.removeInitializers();
      this.removeAllBehaviours();

      if (this.parent)
        this.parent.removeEmitter(this);
    }
  }

}