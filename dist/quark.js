(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Collision = exports.Attraction = exports.Alpha = exports.CircleZone = exports.ImageZone = exports.LineZone = exports.PointZone = exports.RectZone = exports.Span = undefined;
	
	var _emitter = __webpack_require__(1);
	
	Object.keys(_emitter).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _emitter[key];
	        }
	    });
	});
	
	var _initialize = __webpack_require__(14);
	
	Object.keys(_initialize).forEach(function (key) {
	    if (key === "default" || key === "__esModule") return;
	    Object.defineProperty(exports, key, {
	        enumerable: true,
	        get: function get() {
	            return _initialize[key];
	        }
	    });
	});
	exports.getSpan = getSpan;
	
	var _Span = __webpack_require__(8);
	
	var _Span2 = _interopRequireDefault(_Span);
	
	var _RectZone = __webpack_require__(21);
	
	var _RectZone2 = _interopRequireDefault(_RectZone);
	
	var _PointZone = __webpack_require__(23);
	
	var _PointZone2 = _interopRequireDefault(_PointZone);
	
	var _LineZone = __webpack_require__(24);
	
	var _LineZone2 = _interopRequireDefault(_LineZone);
	
	var _ImageZone = __webpack_require__(25);
	
	var _ImageZone2 = _interopRequireDefault(_ImageZone);
	
	var _CircleZone = __webpack_require__(26);
	
	var _CircleZone2 = _interopRequireDefault(_CircleZone);
	
	var _Alpha = __webpack_require__(27);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	var _Attraction = __webpack_require__(30);
	
	var _Attraction2 = _interopRequireDefault(_Attraction);
	
	var _Collision = __webpack_require__(31);
	
	var _Collision2 = _interopRequireDefault(_Collision);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getSpan(a, b, center) {
	    return new _Span2.default(a, b, center);
	}
	
	exports.Span = _Span2.default;
	exports.RectZone = _RectZone2.default;
	exports.PointZone = _PointZone2.default;
	exports.LineZone = _LineZone2.default;
	exports.ImageZone = _ImageZone2.default;
	exports.CircleZone = _CircleZone2.default;
	exports.Alpha = _Alpha2.default;
	exports.Attraction = _Attraction2.default;
	exports.Collision = _Collision2.default;
	
	
	global.Quark = exports;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Emitter = undefined;
	
	var _const = __webpack_require__(2);
	
	Object.keys(_const).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _const[key];
	    }
	  });
	});
	
	var _Emitter = __webpack_require__(3);
	
	var _Emitter2 = _interopRequireDefault(_Emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Emitter = _Emitter2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var POOL_MAX = exports.POOL_MAX = 1000;
	var TIME_STEP = exports.TIME_STEP = 60;
	var USE_CLOCK = exports.USE_CLOCK = false;
	var MEASURE = exports.MEASURE = 100;
	var EULER = exports.EULER = 'euler';
	var RK2 = exports.RK2 = 'runge-kutta2';
	var RK4 = exports.RK4 = 'runge-kutta4';
	var VERLET = exports.VERLET = 'verlet';
	var PARTICLE_CREATED = exports.PARTICLE_CREATED = 'partilcleCreated';
	var PARTICLE_UPDATE = exports.PARTICLE_UPDATE = 'partilcleUpdate';
	var PARTICLE_SLEEP = exports.PARTICLE_SLEEP = 'particleSleep';
	var PARTICLE_DEAD = exports.PARTICLE_DEAD = 'partilcleDead';
	var EMITTER_ADDED = exports.EMITTER_ADDED = 'emitterAdded';
	var EMITTER_REMOVED = exports.EMITTER_REMOVED = 'emitterRemoved';

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _PixiParticle = __webpack_require__(4);
	
	var _PixiParticle2 = _interopRequireDefault(_PixiParticle);
	
	var _Rate = __webpack_require__(6);
	
	var _Rate2 = _interopRequireDefault(_Rate);
	
	var _NumericalIntegration = __webpack_require__(10);
	
	var _NumericalIntegration2 = _interopRequireDefault(_NumericalIntegration);
	
	var _const = __webpack_require__(2);
	
	var _InitializeUtil = __webpack_require__(11);
	
	var _InitializeUtil2 = _interopRequireDefault(_InitializeUtil);
	
	var _miniSignals = __webpack_require__(13);
	
	var _miniSignals2 = _interopRequireDefault(_miniSignals);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import Particle from '../core/Particle';
	
	
	var Emitter = function (_Particle) {
	  _inherits(Emitter, _Particle);
	
	  function Emitter(txt, container) {
	    _classCallCheck(this, Emitter);
	
	    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));
	
	    _this.txt = txt;
	    _this.particleContainer = container;
	
	    _this.initializes = [];
	    _this.behaviours = [];
	    _this.emitTime = 0;
	    _this.emitTotalTimes = -1;
	    /**
	     * The friction coefficient for all particle emit by This;
	     * @property damping
	     * @type {Number}
	     * @default 0.006
	     */
	    _this.damping = .006;
	    /**
	     * If bindEmitter the particles can bind this emitter's property;
	     * @property bindEmitter
	     * @type {Boolean}
	     * @default true
	     */
	    _this.bindEmitter = true;
	    /**
	     * The number of particles per second emit (a [particle]/b [s]);
	     * @property rate
	     * @type {Quark.Rate}
	     * @default Quark.Rate(1, .1)
	     */
	    _this.rate = new _Rate2.default(1, .1);
	
	    _this.integrator = new _NumericalIntegration2.default();
	
	    _this._tailParticle = null;
	    _this._poolHead = null;
	    _this.particleCount = 0;
	
	    _this.update = _this.update;
	    _this.createParticle = _this.createParticle;
	    _this.integrate = _this.integrate;
	    _this.setupParticle = _this.setupParticle;
	    return _this;
	  }
	
	  _createClass(Emitter, [{
	    key: 'emit',
	    value: function emit(emitTime, life) {
	      this.emitTime = 0;
	      this.emitTotalTimes = emitTime || Infinity;
	
	      if (!isNaN(life)) {
	        this.life = life;
	      }
	
	      this.rate.init();
	
	      this.particleCreated = new _miniSignals2.default();
	      this.particleUpdate = new _miniSignals2.default();
	      this.particleDead = new _miniSignals2.default();
	    }
	
	    /**
	     * stop emiting
	     * @method stopEmit
	     */
	
	  }, {
	    key: 'stopEmit',
	    value: function stopEmit() {
	      this.emitTotalTimes = -1;
	      this.emitTime = 0;
	    }
	
	    /**
	     * remove current all particles
	     * @method removeAllParticles
	     */
	
	  }, {
	    key: 'removeAllParticles',
	    value: function removeAllParticles() {
	      this._tailParticle = null;
	      this._poolHead = null;
	    }
	
	    /**
	     * create single particle;
	     * 
	     * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
	     * @method removeAllParticles
	     */
	
	  }, {
	    key: 'createParticle',
	    value: function createParticle(initialize, behaviour) {
	      // const particle = new Particle();
	
	      var particle = void 0;
	
	      if (this._poolHead) {
	        particle = this._poolHead;
	        this._poolHead = this._poolHead._next;
	        particle._next = null;
	        // console.log('pooled');
	      } else {
	        particle = new _PixiParticle2.default(this.txt);
	        this.particleContainer.addChild(particle.sprite);
	      }
	      this.particleCount++;
	
	      var initializes = this.initializes;
	      var behaviours = this.behaviours;
	
	      if (initialize) {
	        if (initialize.constructor === Array) initializes = initialize;else initializes = [initialize];
	      }
	
	      if (behaviour) {
	        if (behaviour.constructor === Array) behaviours = behaviour;else behaviours = [behaviour];
	      }
	
	      particle.reset();
	      (0, _InitializeUtil2.default)(this, particle, initializes);
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
	
	  }, {
	    key: 'addSelfInitialize',
	    value: function addSelfInitialize(pObj) {
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
	
	  }, {
	    key: 'addInitialize',
	    value: function addInitialize() {
	      var length = arguments.length;
	      for (var i = 0; i < length; i++) {
	        this.initializes.push(arguments[i]);
	      }
	    }
	
	    /**
	     * remove the Initialize
	     * @method removeInitialize
	     * @param {Quark.Initialize} initialize a initialize
	     */
	
	  }, {
	    key: 'removeInitialize',
	    value: function removeInitialize(initializer) {
	      var index = this.initializes.indexOf(initializer);
	      if (index > -1) {
	        this.initializes.splice(index, 1);
	      }
	    }
	
	    /**
	     * remove all Initializes
	     * @method removeInitializers
	     */
	
	  }, {
	    key: 'removeInitializers',
	    value: function removeInitializers() {
	      this.initializes.length = 0;
	    }
	
	    /**
	     * add the Behaviour to particles;
	     * 
	     * you can use Behaviours array:emitter.addBehaviour(Behaviour1,Behaviour2,Behaviour3);
	     * @method addBehaviour
	     * @param {Quark.Behaviour} behaviour like this new Quark.Color('random')
	     */
	
	  }, {
	    key: 'addBehaviour',
	    value: function addBehaviour() {
	      var length = arguments.length;
	      for (var i = 0; i < length; i++) {
	        this.behaviours.push(arguments[i]);
	        if (arguments[i].hasOwnProperty("parents")) arguments[i].parents.push(this);
	      }
	    }
	
	    /**
	     * remove the Behaviour
	     * @method removeBehaviour
	     * @param {Quark.Behaviour} behaviour a behaviour
	     */
	
	  }, {
	    key: 'removeBehaviour',
	    value: function removeBehaviour(behaviour) {
	      var index = this.behaviours.indexOf(behaviour);
	      if (index > -1) this.behaviours.splice(index, 1);
	    }
	
	    /**
	     * remove all behaviours
	     * @method removeAllBehaviours
	     */
	
	  }, {
	    key: 'removeAllBehaviours',
	    value: function removeAllBehaviours() {
	      this.behaviours.length = 0;
	    }
	  }, {
	    key: 'integrate',
	    value: function integrate(time) {
	      var damping = 1 - this.damping;
	
	      this.integrator.integrate(this, time, damping);
	      var particle = this._tailParticle;
	      var i = 0;
	      while (particle) {
	
	        particle.update(time, i++);
	        this.integrator.integrate(particle, time, damping);
	
	        // todo tailparticle is not removed
	        if (particle._prev && particle._prev.dead) {
	          var deadParticle = particle._prev;
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
	  }, {
	    key: 'emitting',
	    value: function emitting(time) {
	      if (this.emitTotalTimes == 'once') {
	        var length = this.rate.getValue(99999);
	        for (var i = 0; i < length; i++) {
	          this.createParticle();
	        }
	
	        this.emitTotalTimes = 'none';
	      } else if (!isNaN(this.emitTotalTimes)) {
	        this.emitTime += time;
	        if (this.emitTime < this.emitTotalTimes) {
	          var _length = this.rate.getValue(time);
	          for (var _i = 0; _i < _length; _i++) {
	            this.createParticle();
	          }
	        }
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(time) {
	      this.age += time;
	      if (this.age >= this.life || this.dead) {
	        this.destroy();
	      }
	
	      this.emitting(time);
	      this.integrate(time);
	    }
	  }, {
	    key: 'setupParticle',
	    value: function setupParticle(particle, initialize, behaviour) {
	      var initializes = this.initializes;
	      var behaviours = this.behaviours;
	
	      if (initialize) {
	        if (initialize.constructor === Array) initializes = initialize;else initializes = [initialize];
	      }
	
	      if (behaviour) {
	        if (behaviour.constructor === Array) behaviours = behaviour;else behaviours = [behaviour];
	      }
	
	      particle.reset();
	      (0, _InitializeUtil2.default)(this, particle, initializes);
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
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.dead = true;
	      this.emitTotalTimes = -1;
	
	      if (this._tailParticle === null) {
	        this.removeInitializers();
	        this.removeAllBehaviours();
	
	        if (this.parent) this.parent.removeEmitter(this);
	      }
	    }
	  }]);
	
	  return Emitter;
	}(_PixiParticle2.default);
	
	exports.default = Emitter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var uid = 0;
	
	var Particle = function () {
	  function Particle(txt) {
	    _classCallCheck(this, Particle);
	
	    this.id = uid++;
	    this.reset(true);
	
	    if (txt) this.sprite = new PIXI.Sprite(txt);
	    this.update = this.update;
	    this.destroy = this.destroy;
	  }
	
	  _createClass(Particle, [{
	    key: 'getDirection',
	    value: function getDirection() {
	      return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI);
	    }
	  }, {
	    key: 'reset',
	    value: function reset(init) {
	      this._prev = null;
	      this._next = null;
	      this.life = Infinity;
	      this.age = 0;
	      this.energy = 1;
	      this.dead = false;
	      this.sleep = false;
	      this.target = null;
	      // this.sprite = null;
	      this.parent = null;
	      this.mass = 1;
	      this.radius = 10;
	      this.alpha = 1;
	      this.scale = 1;
	      this.rotation = 0;
	      this.color = null;
	      this.easing = function (val) {
	        return val;
	      };
	      this.transform = {};
	      if (init) {
	        this.p = new _Vector2D2.default();
	        this.v = new _Vector2D2.default();
	        this.a = new _Vector2D2.default();
	        this.old = {
	          p: new _Vector2D2.default(),
	          v: new _Vector2D2.default(),
	          a: new _Vector2D2.default()
	        };
	        this.behaviours = [];
	      } else {
	        // delete this.transform;
	        this.p.set(0, 0);
	        this.v.set(0, 0);
	        this.a.set(0, 0);
	        this.old.p.set(0, 0);
	        this.old.v.set(0, 0);
	        this.old.a.set(0, 0);
	        this.removeAllBehaviours();
	      }
	
	      this.transform.rgb = {
	        r: 255,
	        g: 255,
	        b: 255
	      };
	      return this;
	    }
	  }, {
	    key: 'update',
	    value: function update(time, index) {
	      if (!this.sleep) {
	        this.age += time;
	        var length = this.behaviours.length;
	        var i = void 0;
	        for (i = 0; i < length; i++) {
	          if (this.behaviours[i]) this.behaviours[i].applyBehaviour(this, time, index);
	        }
	      }
	      if (this.sprite) {
	        this.sprite.x = this.p.x;
	        this.sprite.y = this.p.y;
	      }
	
	      if (this.age >= this.life) {
	        this.destroy();
	      } else {
	        var scale = this.easing(this.age / this.life);
	        this.energy = Math.max(1 - scale, 0);
	      }
	    }
	  }, {
	    key: 'addBehaviour',
	    value: function addBehaviour(behaviour) {
	      this.behaviours.push(behaviour);
	      if (behaviour.hasOwnProperty('parents')) {
	        behaviour.parents.push(this);
	      }
	      behaviour.initialize(this);
	    }
	  }, {
	    key: 'addBehaviours',
	    value: function addBehaviours(behaviours) {
	      var length = behaviours.length,
	          i;
	      for (i = 0; i < length; i++) {
	        this.addBehaviour(behaviours[i]);
	      }
	    }
	  }, {
	    key: 'removeBehaviour',
	    value: function removeBehaviour(behaviour) {
	      var index = this.behaviours.indexOf(behaviour);
	      if (index > -1) {
	        var behaviour = this.behaviours.splice(index, 1);
	        behaviour.parents = null;
	      }
	    }
	  }, {
	    key: 'removeAllBehaviours',
	    value: function removeAllBehaviours() {
	      this.behaviours.length = 0;
	    }
	
	    /**
	     * Destory this particle
	     * @method destroy
	     */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.removeAllBehaviours();
	      this.energy = 0;
	      this.dead = true;
	      this.parent = null;
	    }
	  }]);
	
	  return Particle;
	}();
	
	exports.default = Particle;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vector2D = function () {
	  function Vector2D(x, y) {
	    _classCallCheck(this, Vector2D);
	
	    this.x = x || 0;
	    this.y = y || 0;
	  }
	
	  _createClass(Vector2D, [{
	    key: "set",
	    value: function set(x, y) {
	
	      this.x = x;
	      this.y = y;
	      return this;
	    }
	  }, {
	    key: "setX",
	    value: function setX(x) {
	
	      this.x = x;
	      return this;
	    }
	  }, {
	    key: "setY",
	    value: function setY(y) {
	
	      this.y = y;
	
	      return this;
	    }
	  }, {
	    key: "setComponent",
	    value: function setComponent(index, value) {
	
	      switch (index) {
	
	        case 0:
	          this.x = value;
	          break;
	        case 1:
	          this.y = value;
	          break;
	        default:
	          throw new Error("index is out of range: " + index);
	
	      }
	    }
	  }, {
	    key: "getGradient",
	    value: function getGradient() {
	      if (this.x != 0) return Math.atan2(this.y, this.x);else if (this.y > 0) return Math.PI / 2;else if (this.y < 0) return -Math.PI / 2;
	    }
	  }, {
	    key: "getComponent",
	    value: function getComponent(index) {
	
	      switch (index) {
	
	        case 0:
	          return this.x;
	        case 1:
	          return this.y;
	        default:
	          throw new Error("index is out of range: " + index);
	
	      }
	    }
	  }, {
	    key: "copy",
	    value: function copy(v) {
	
	      this.x = v.x;
	      this.y = v.y;
	
	      return this;
	    }
	  }, {
	    key: "add",
	    value: function add(v, w) {
	
	      if (w !== undefined) {
	        return this.addVectors(v, w);
	      }
	
	      this.x += v.x;
	      this.y += v.y;
	
	      return this;
	    }
	  }, {
	    key: "addXY",
	    value: function addXY(a, b) {
	
	      this.x += a;
	      this.y += b;
	
	      return this;
	    }
	  }, {
	    key: "addVectors",
	    value: function addVectors(a, b) {
	
	      this.x = a.x + b.x;
	      this.y = a.y + b.y;
	
	      return this;
	    }
	  }, {
	    key: "addScalar",
	    value: function addScalar(s) {
	
	      this.x += s;
	      this.y += s;
	
	      return this;
	    }
	  }, {
	    key: "sub",
	    value: function sub(v, w) {
	
	      if (w !== undefined) {
	        return this.subVectors(v, w);
	      }
	
	      this.x -= v.x;
	      this.y -= v.y;
	
	      return this;
	    }
	  }, {
	    key: "subVectors",
	    value: function subVectors(a, b) {
	
	      this.x = a.x - b.x;
	      this.y = a.y - b.y;
	
	      return this;
	    }
	  }, {
	    key: "multiplyScalar",
	    value: function multiplyScalar(s) {
	
	      this.x *= s;
	      this.y *= s;
	
	      return this;
	    }
	  }, {
	    key: "divideScalar",
	    value: function divideScalar(s) {
	
	      if (s !== 0) {
	
	        this.x /= s;
	        this.y /= s;
	      } else {
	
	        this.set(0, 0);
	      }
	
	      return this;
	    }
	  }, {
	    key: "min",
	    value: function min(v) {
	
	      if (this.x > v.x) {
	
	        this.x = v.x;
	      }
	
	      if (this.y > v.y) {
	
	        this.y = v.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "max",
	    value: function max(v) {
	
	      if (this.x < v.x) {
	
	        this.x = v.x;
	      }
	
	      if (this.y < v.y) {
	
	        this.y = v.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "clamp",
	    value: function clamp(min, max) {
	
	      // This function assumes min < max, if this assumption isn't true it will not operate correctly
	
	      if (this.x < min.x) {
	
	        this.x = min.x;
	      } else if (this.x > max.x) {
	
	        this.x = max.x;
	      }
	
	      if (this.y < min.y) {
	
	        this.y = min.y;
	      } else if (this.y > max.y) {
	
	        this.y = max.y;
	      }
	
	      return this;
	    }
	  }, {
	    key: "negate",
	    value: function negate() {
	
	      return this.multiplyScalar(-1);
	    }
	  }, {
	    key: "dot",
	    value: function dot(v) {
	
	      return this.x * v.x + this.y * v.y;
	    }
	  }, {
	    key: "lengthSq",
	    value: function lengthSq() {
	
	      return this.x * this.x + this.y * this.y;
	    }
	  }, {
	    key: "length",
	    value: function length() {
	
	      return Math.sqrt(this.x * this.x + this.y * this.y);
	    }
	  }, {
	    key: "normalize",
	    value: function normalize() {
	
	      return this.divideScalar(this.length());
	    }
	  }, {
	    key: "distanceTo",
	    value: function distanceTo(v) {
	
	      return Math.sqrt(this.distanceToSquared(v));
	    }
	  }, {
	    key: "rotate",
	    value: function rotate(tha) {
	      var x = this.x;
	      var y = this.y;
	      this.x = x * Math.cos(tha) + y * Math.sin(tha);
	      this.y = -x * Math.sin(tha) + y * Math.cos(tha);
	      return this;
	    }
	  }, {
	    key: "distanceToSquared",
	    value: function distanceToSquared(v) {
	
	      var dx = this.x - v.x,
	          dy = this.y - v.y;
	      return dx * dx + dy * dy;
	    }
	  }, {
	    key: "setLength",
	    value: function setLength(l) {
	
	      var oldLength = this.length();
	
	      if (oldLength !== 0 && l !== oldLength) {
	
	        this.multiplyScalar(l / oldLength);
	      }
	
	      return this;
	    }
	  }, {
	    key: "lerp",
	    value: function lerp(v, alpha) {
	
	      this.x += (v.x - this.x) * alpha;
	      this.y += (v.y - this.y) * alpha;
	
	      return this;
	    }
	  }, {
	    key: "equals",
	    value: function equals(v) {
	
	      return v.x === this.x && v.y === this.y;
	    }
	  }, {
	    key: "toArray",
	    value: function toArray() {
	
	      return [this.x, this.y];
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.x = 0.0;
	      this.y = 0.0;
	      return this;
	    }
	  }, {
	    key: "clone",
	    value: function clone() {
	
	      return new Vector2D(this.x, this.y);
	    }
	  }]);
	
	  return Vector2D;
	}();
	
	exports.default = Vector2D;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rate = function () {
	  function Rate(numpan, timepan) {
	    _classCallCheck(this, Rate);
	
	    this.numPan = numpan;
	    this.timePan = timepan;
	    this.numPan = _Util2.default.setSpanValue(this.numPan);
	    this.timePan = _Util2.default.setSpanValue(this.timePan);
	    this.startTime = 0;
	    this.nextTime = 0;
	    this.init();
	  }
	
	  _createClass(Rate, [{
	    key: 'init',
	    value: function init() {
	      this.startTime = 0;
	      this.nextTime = this.timePan.getValue();
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue(time) {
	      this.startTime += time;
	      if (this.startTime >= this.nextTime) {
	        this.startTime = 0;
	        this.nextTime = this.timePan.getValue();
	        if (this.numPan.b == 1) {
	          if (this.numPan.getValue(false) > 0.5) return 1;else return 0;
	        } else {
	          return this.numPan.getValue(true);
	        }
	      }
	      return 0;
	    }
	  }]);
	
	  return Rate;
	}();
	
	exports.default = Rate;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	var _Span = __webpack_require__(8);
	
	var _Span2 = _interopRequireDefault(_Span);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    /**
	     * Returns the default if the value is null or undefined
	     *
	     * @memberof Quark#Quark.Util
	     * @method initValue
	     *
	     * @param {Mixed} value a specific value, could be everything but null or undefined
	     * @param {Mixed} defaults the default if the value is null or undefined
	     */
	    initValue: function initValue(value, defaults) {
	        var value = value != null && value != undefined ? value : defaults;
	        return value;
	    },
	
	    /**
	     * Returns the Vector2D - or creates a new one
	     *
	     * @memberof Quark#Quark.Util
	     * @method getVector2D
	     *
	     * @param {Quark.Vector2D | Number} postionOrX
	     * @param {Number} [y] just valid if 'postionOrX' is not an object
	     *
	     * @return {Quark.Vector2D}
	     */
	    getVector2D: function getVector2D(postionOrX, y) {
	        if ((typeof postionOrX === 'undefined' ? 'undefined' : _typeof(postionOrX)) == 'object') {
	            return postionOrX;
	        } else {
	            var vector2d = new _Vector2D2.default(postionOrX, y);
	            return vector2d;
	        }
	    },
	
	    /**
	     * @memberof Quark#Quark.Util
	     * @method judgeVector2D
	     *
	     * @todo add description for param `pOBJ`
	     * @todo add description for function
	     *
	     * @param {Object} pOBJ
	     *
	     * @return {String} result
	     */
	    judgeVector2D: function judgeVector2D(pOBJ) {
	        var result = '';
	        if (pOBJ.hasOwnProperty('x') || pOBJ.hasOwnProperty('y') || pOBJ.hasOwnProperty('p') || pOBJ.hasOwnProperty('position')) result += 'p';
	        if (pOBJ.hasOwnProperty('vx') || pOBJ.hasOwnProperty('vx') || pOBJ.hasOwnProperty('v') || pOBJ.hasOwnProperty('velocity')) result += 'v';
	        if (pOBJ.hasOwnProperty('ax') || pOBJ.hasOwnProperty('ax') || pOBJ.hasOwnProperty('a') || pOBJ.hasOwnProperty('accelerate')) result += 'a';
	
	        return result;
	    },
	
	    /**
	     * @memberof Quark#Quark.Util
	     * @method setVector2DByObject
	     *
	     * @todo add description for param `target`
	     * @todo add description for param `pOBJ`
	     * @todo add description for function
	     *
	     * @param {Object} target
	     * @param {Object} pOBJ
	     */
	    setVector2DByObject: function setVector2DByObject(target, pOBJ) {
	        if (pOBJ.x) target.p.x = pOBJ.x;
	
	        if (pOBJ.y) target.p.y = pOBJ.y;
	
	        if (pOBJ.vx) target.v.x = pOBJ.vx;
	        if (pOBJ.vy) target.v.y = pOBJ.vy;
	
	        if (pOBJ.ax) target.a.x = pOBJ.ax;
	        if (pOBJ.ay) target.a.y = pOBJ.ay;
	    },
	
	    /**
	     * Returns a new Quark.Span object
	     *
	     * @memberof Quark#Quark.Util
	     * @method setSpanValue
	     *
	     * @todo a, b and c should be 'Mixed' or 'Number'?
	     *
	     * @param {Mixed | Quark.Span} a
	     * @param {Mixed}               b
	     * @param {Mixed}               c
	     *
	     * @return {Quark.Span}
	     */
	    setSpanValue: function setSpanValue(a, b, c) {
	        if (a.constructor === _Span2.default) {
	            return a;
	        } else {
	            if (!b) {
	                return new _Span2.default(a);
	            } else {
	                if (!c) return new _Span2.default(a, b);else return new _Span2.default(a, b, c);
	            }
	        }
	    },
	
	    /**
	     * Returns the value from a Quark.Span, if the param is not a Quark.Span it will return the given parameter
	     *
	     * @memberof Quark#Quark.Util
	     * @method getSpanValue
	     *
	     * @param {Mixed | Quark.Span} pan
	     *
	     * @return {Mixed} the value of Quark.Span OR the parameter if it is not a Quark.Span
	     */
	    getSpanValue: function getSpanValue(pan) {
	        if (pan.constructor === _Span2.default) return pan.getValue();else return pan;
	    },
	
	    /**
	     * @typedef  {Object} rgbObject
	     * @property {Number} r red value
	     * @property {Number} g green value
	     * @property {Number} b blue value
	     */
	    /**
	     * converts a hex value to a rgb object
	     *
	     * @memberof Quark#Quark.Util
	     * @method hexToRGB
	     *
	     * @param {String} h any hex value, e.g. #000000 or 000000 for black
	     *
	     * @return {rgbObject}
	     */
	    hexToRGB: function hexToRGB(h) {
	        var hex16 = h.charAt(0) == "#" ? h.substring(1, 7) : h;
	        var r = parseInt(hex16.substring(0, 2), 16);
	        var g = parseInt(hex16.substring(2, 4), 16);
	        var b = parseInt(hex16.substring(4, 6), 16);
	
	        return {
	            r: r,
	            g: g,
	            b: b
	        };
	    },
	
	    /**
	     * converts a rgb value to a rgb string
	     *
	     * @memberof Quark#Quark.Util
	     * @method rgbToHex
	     *
	     * @param {Object | Quark.hexToRGB} rgb a rgb object like in {@link Quark#Quark.Util.hexToRGB}
	     *
	     * @return {String} rgb()
	     */
	    rgbToHex: function rgbToHex(rbg) {
	        return 'rgb(' + rbg.r + ', ' + rbg.g + ', ' + rbg.b + ')';
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MathUtils = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Span = function () {
		function Span(a, b) {
			var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
			_classCallCheck(this, Span);
	
			if (Array.isArray(a)) {
				this.isArray = true;
				this.a = a;
			} else {
				this.a = a;
				this.b = b || this.a;
				this.center = center;
			}
		}
	
		_createClass(Span, [{
			key: 'getValue',
			value: function getValue(INT) {
				if (this.isArray) {
					return this.a[Math.floor(this.a.length * Math.random())];
				} else {
					if (!this.center) {
						return (0, _MathUtils.randomAToB)(this.a, this.b, INT);
					} else {
						return (0, _MathUtils.randomFloating)(this.a, this.b, INT);
					}
				}
			}
		}]);
	
		return Span;
	}();
	
	exports.default = Span;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.randomAToB = randomAToB;
	exports.randomFloating = randomFloating;
	exports.degreeTransform = degreeTransform;
	function randomAToB(a, b, INT) {
	  if (!INT) return a + Math.random() * (b - a) << 0;else return Math.floor(Math.random() * (b - a)) + a;
	}
	
	function randomFloating(center, f, INT) {
	  return randomAToB(center - f, center + f, INT);
	}
	
	function degreeTransform(a) {
	  return a * Math.PI / 180;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _const = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NumericalIntegration = function () {
	  function NumericalIntegration(type) {
	    _classCallCheck(this, NumericalIntegration);
	
	    this.type = type || _const.EULER;
	  }
	
	  _createClass(NumericalIntegration, [{
	    key: 'integrate',
	    value: function integrate(particle, time, damping) {
	      this.eulerIntegrate(particle, time, damping);
	    }
	  }, {
	    key: 'eulerIntegrate',
	    value: function eulerIntegrate(particle, time, damping) {
	      if (!particle.sleep) {
	        particle.old.p.copy(particle.p);
	        particle.old.v.copy(particle.v);
	        particle.a.multiplyScalar(1 / particle.mass);
	        particle.v.add(particle.a.multiplyScalar(time));
	        particle.p.add(particle.old.v.multiplyScalar(time));
	        if (damping) {
	          particle.v.multiplyScalar(damping);
	        }
	        particle.a.clear();
	      }
	    }
	  }]);
	
	  return NumericalIntegration;
	}();
	
	exports.default = NumericalIntegration;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initialize;
	
	var _Initialize = __webpack_require__(12);
	
	var _Initialize2 = _interopRequireDefault(_Initialize);
	
	var _MathUtils = __webpack_require__(9);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function initialize(emitter, particle, initializes) {
	  var length = initializes.length;
	  for (var i = 0; i < length; i++) {
	    var _initialize = initializes[i];
	    if (_initialize instanceof _Initialize2.default) {
	      _initialize.init(emitter, particle);
	    } else {
	      init(emitter, particle, _initialize);
	    }
	  }
	
	  bindEmitter(emitter, particle);
	}
	
	function init(emitter, particle, initialize) {
	  _Util2.default.setVector2DByObject(particle, initialize);
	}
	
	function bindEmitter(emitter, particle) {
	  if (emitter.bindEmitter) {
	    particle.p.add(emitter.p);
	    particle.v.add(emitter.v);
	    particle.a.add(emitter.a);
	    particle.v.rotate((0, _MathUtils.degreeTransform)(emitter.rotation));
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Initialize = function () {
		function Initialize() {
			_classCallCheck(this, Initialize);
		}
	
		_createClass(Initialize, [{
			key: "reset",
			value: function reset() {}
		}, {
			key: "init",
			value: function init(emitter, particle) {
				if (particle) {
					this.initialize(particle);
				} else {
					this.initialize(emitter);
				}
			}
		}, {
			key: "initialize",
			value: function initialize() {}
		}]);
	
		return Initialize;
	}();
	
	exports.default = Initialize;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var MiniSignalBinding = (function () {
	  function MiniSignalBinding(fn, once, thisArg) {
	    if (once === undefined) once = false;
	
	    _classCallCheck(this, MiniSignalBinding);
	
	    this._fn = fn;
	    this._once = once;
	    this._thisArg = thisArg;
	    this._next = this._prev = this._owner = null;
	  }
	
	  _createClass(MiniSignalBinding, [{
	    key: 'detach',
	    value: function detach() {
	      if (this._owner === null) return false;
	      this._owner.detach(this);
	      return true;
	    }
	  }]);
	
	  return MiniSignalBinding;
	})();
	
	function _addMiniSignalBinding(self, node) {
	  if (!self._head) {
	    self._head = node;
	    self._tail = node;
	  } else {
	    self._tail._next = node;
	    node._prev = self._tail;
	    self._tail = node;
	  }
	
	  node._owner = self;
	
	  return node;
	}
	
	var MiniSignal = (function () {
	  function MiniSignal() {
	    _classCallCheck(this, MiniSignal);
	
	    this._head = this._tail = undefined;
	  }
	
	  _createClass(MiniSignal, [{
	    key: 'handlers',
	    value: function handlers() {
	      var exists = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	      var node = this._head;
	
	      if (exists) return !!node;
	
	      var ee = [];
	
	      while (node) {
	        ee.push(node);
	        node = node._next;
	      }
	
	      return ee;
	    }
	  }, {
	    key: 'has',
	    value: function has(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#has(): First arg must be a MiniSignalBinding object.');
	      }
	
	      return node._owner === this;
	    }
	  }, {
	    key: 'dispatch',
	    value: function dispatch() {
	      var node = this._head;
	
	      if (!node) return false;
	
	      while (node) {
	        if (node._once) this.detach(node);
	        node._fn.apply(node._thisArg, arguments);
	        node = node._next;
	      }
	
	      return true;
	    }
	  }, {
	    key: 'add',
	    value: function add(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#add(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
	    }
	  }, {
	    key: 'once',
	    value: function once(fn) {
	      var thisArg = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (typeof fn !== 'function') {
	        throw new Error('MiniSignal#once(): First arg must be a Function.');
	      }
	      return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
	    }
	  }, {
	    key: 'detach',
	    value: function detach(node) {
	      if (!(node instanceof MiniSignalBinding)) {
	        throw new Error('MiniSignal#detach(): First arg must be a MiniSignalBinding object.');
	      }
	      if (node._owner !== this) return this;
	
	      if (node._prev) node._prev._next = node._next;
	      if (node._next) node._next._prev = node._prev;
	
	      if (node === this._head) {
	        this._head = node._next;
	        if (node._next === null) {
	          this._tail = null;
	        }
	      } else if (node === this._tail) {
	        this._tail = node._prev;
	        this._tail._next = null;
	      }
	
	      node._owner = null;
	      return this;
	    }
	  }, {
	    key: 'detachAll',
	    value: function detachAll() {
	      var node = this._head;
	      if (!node) return this;
	
	      this._head = this._tail = null;
	
	      while (node) {
	        node._owner = null;
	        node = node._next;
	      }
	      return this;
	    }
	  }]);
	
	  return MiniSignal;
	})();
	
	MiniSignal.MiniSignalBinding = MiniSignalBinding;
	
	exports['default'] = MiniSignal;
	module.exports = exports['default'];


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Position = exports.Radius = exports.Mass = exports.Life = exports.Velocity = exports.Rate = undefined;
	
	var _Rate = __webpack_require__(6);
	
	var _Rate2 = _interopRequireDefault(_Rate);
	
	var _Velocity = __webpack_require__(15);
	
	var _Velocity2 = _interopRequireDefault(_Velocity);
	
	var _Life = __webpack_require__(17);
	
	var _Life2 = _interopRequireDefault(_Life);
	
	var _Mass = __webpack_require__(18);
	
	var _Mass2 = _interopRequireDefault(_Mass);
	
	var _Radius = __webpack_require__(19);
	
	var _Radius2 = _interopRequireDefault(_Radius);
	
	var _Position = __webpack_require__(20);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Rate = _Rate2.default;
	exports.Velocity = _Velocity2.default;
	exports.Life = _Life2.default;
	exports.Mass = _Mass2.default;
	exports.Radius = _Radius2.default;
	exports.Position = _Position2.default;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _const = __webpack_require__(2);
	
	var _Polar2D = __webpack_require__(16);
	
	var _Polar2D2 = _interopRequireDefault(_Polar2D);
	
	var _MathUtils = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Velocity = function (_Initialize) {
		_inherits(Velocity, _Initialize);
	
		function Velocity(rpan, thapan, type) {
			_classCallCheck(this, Velocity);
	
			var _this = _possibleConstructorReturn(this, (Velocity.__proto__ || Object.getPrototypeOf(Velocity)).call(this));
	
			_this.rPan = _Util2.default.setSpanValue(rpan);
			_this.thaPan = _Util2.default.setSpanValue(thapan);
			_this.type = _Util2.default.initValue(type, 'vector');
	
			// speed optimizations
			_this.POLAR = 'polar';
			_this.P = 'p';
			_this.rPanVal = _this.rPan.getValue();
			_this.normalizedPI = Math.PI / 180;
			return _this;
		}
	
		_createClass(Velocity, [{
			key: 'reset',
			value: function reset(rpan, thapan, type) {
				this.rPan = _Util2.default.setSpanValue(rpan);
				this.thaPan = _Util2.default.setSpanValue(thapan);
				this.type = _Util2.default.initValue(type, 'vector');
			}
		}, {
			key: 'normalizeVelocity',
			value: function normalizeVelocity(vr) {
				return vr * _const.MEASURE;
			}
		}, {
			key: 'initialize',
			value: function initialize(target) {
				if (this.type == this.P || this.type == this.P || this.type == this.POLAR) {
					var thaPanNorm = (0, _MathUtils.randomAToB)(this.thaPan.a, this.thaPan.b) * this.normalizedPI;
					var polar2d = new _Polar2D2.default(this.normalizeVelocity(this.rPanVal), thaPanNorm);
					target.v.x = polar2d.getX();
					target.v.y = polar2d.getY();
				} else {
					target.v.x = this.normalizeVelocity(this.rPan.getValue());
					target.v.y = this.normalizeVelocity(this.thaPan.getValue());
				}
			}
		}]);
	
		return Velocity;
	}(_Initialize3.default);
	
	exports.default = Velocity;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Polar2D = function () {
		function Polar2D(r, tha) {
			_classCallCheck(this, Polar2D);
	
			this.r = Math.abs(r) || 0;
			this.tha = tha || 0;
		}
	
		_createClass(Polar2D, [{
			key: 'set',
			value: function set(r, tha) {
	
				this.r = r;
				this.tha = tha;
				return this;
			}
		}, {
			key: 'setR',
			value: function setR(r) {
	
				this.r = r;
				return this;
			}
		}, {
			key: 'setTha',
			value: function setTha(tha) {
	
				this.tha = tha;
	
				return this;
			}
		}, {
			key: 'copy',
			value: function copy(p) {
	
				this.r = p.r;
				this.tha = p.tha;
	
				return this;
			}
		}, {
			key: 'toVector',
			value: function toVector() {
				return new _Vector2D2.default(this.getX(), this.getY());
			}
		}, {
			key: 'getX',
			value: function getX() {
				return this.r * Math.sin(this.tha);
			}
		}, {
			key: 'getY',
			value: function getY() {
				return -this.r * Math.cos(this.tha);
			}
		}, {
			key: 'normalize',
			value: function normalize() {
	
				this.r = 1;
				return this;
			}
		}, {
			key: 'equals',
			value: function equals(v) {
	
				return v.r === this.r && v.tha === this.tha;
			}
		}, {
			key: 'toArray',
			value: function toArray() {
	
				return [this.r, this.tha];
			}
		}, {
			key: 'clear',
			value: function clear() {
				this.r = 0.0;
				this.tha = 0.0;
				return this;
			}
		}, {
			key: 'clone',
			value: function clone() {
	
				return new Polar2D(this.r, this.tha);
			}
		}]);
	
		return Polar2D;
	}();
	
	exports.default = Polar2D;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Life = function (_Initialize) {
		_inherits(Life, _Initialize);
	
		function Life(a, b, c) {
			_classCallCheck(this, Life);
	
			var _this = _possibleConstructorReturn(this, (Life.__proto__ || Object.getPrototypeOf(Life)).call(this));
	
			_this.lifePan = _Util2.default.setSpanValue(a, b, c);
			return _this;
		}
	
		_createClass(Life, [{
			key: 'initialize',
			value: function initialize(target) {
				if (this.lifePan.a == Infinity) {
					target.life = Infinity;
				} else {
					target.life = this.lifePan.getValue();
				}
			}
		}]);
	
		return Life;
	}(_Initialize3.default);
	
	exports.default = Life;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Mass = function (_Initialize) {
	    _inherits(Mass, _Initialize);
	
	    function Mass(a, b, c) {
	        _classCallCheck(this, Mass);
	
	        var _this = _possibleConstructorReturn(this, (Mass.__proto__ || Object.getPrototypeOf(Mass)).call(this));
	
	        _this.massPan = _Util2.default.setSpanValue(a, b, c);
	        return _this;
	    }
	
	    _createClass(Mass, [{
	        key: 'initialize',
	        value: function initialize(target) {
	            target.mass = this.massPan.getValue();
	        }
	    }]);
	
	    return Mass;
	}(_Initialize3.default);
	
	exports.default = Mass;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Radius = function (_Initialize) {
	    _inherits(Radius, _Initialize);
	
	    function Radius(a, b, c) {
	        _classCallCheck(this, Radius);
	
	        var _this = _possibleConstructorReturn(this, (Radius.__proto__ || Object.getPrototypeOf(Radius)).call(this));
	
	        _this.radius = _Util2.default.setSpanValue(a, b, c);
	        return _this;
	    }
	
	    _createClass(Radius, [{
	        key: 'reset',
	        value: function reset(a, b, c) {
	            this.radius = _Util2.default.setSpanValue(a, b, c);
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize(particle) {
	            particle.radius = this.radius.getValue();
	            particle.transform.oldRadius = particle.radius;
	        }
	    }]);
	
	    return Radius;
	}(_Initialize3.default);
	
	exports.default = Radius;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Initialize2 = __webpack_require__(12);
	
	var _Initialize3 = _interopRequireDefault(_Initialize2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Position = function (_Initialize) {
	    _inherits(Position, _Initialize);
	
	    function Position(zone) {
	        _classCallCheck(this, Position);
	
	        var _this = _possibleConstructorReturn(this, (Position.__proto__ || Object.getPrototypeOf(Position)).call(this));
	
	        _this.zone = zone || new PointZone();
	        return _this;
	    }
	
	    _createClass(Position, [{
	        key: 'reset',
	        value: function reset(zone) {
	            this.zone = zone || new PointZone();
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize(target) {
	            this.zone.getPosition();
	            target.p.x = this.zone.vector.x;
	            target.p.y = this.zone.vector.y;
	        }
	    }]);
	
	    return Position;
	}(_Initialize3.default);
	
	exports.default = Position;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RectZone = function (_Zone) {
		_inherits(RectZone, _Zone);
	
		function RectZone(x, y, width, height) {
			_classCallCheck(this, RectZone);
	
			var _this = _possibleConstructorReturn(this, (RectZone.__proto__ || Object.getPrototypeOf(RectZone)).call(this));
	
			_this.x = x;
			_this.y = y;
			_this.width = width;
			_this.height = height;
			return _this;
		}
	
		_createClass(RectZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.vector.x = this.x + Math.random() * this.width;
				this.vector.y = this.y + Math.random() * this.height;
	
				return this.vector;
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				if (this.crossType == 'dead') {
					if (particle.p.x + particle.radius < this.x) particle.dead = true;else if (particle.p.x - particle.radius > this.x + this.width) particle.dead = true;
	
					if (particle.p.y + particle.radius < this.y) particle.dead = true;else if (particle.p.y - particle.radius > this.y + this.height) particle.dead = true;
				} else if (this.crossType == 'bound') {
					if (particle.p.x - particle.radius < this.x) {
						particle.p.x = this.x + particle.radius;
						particle.v.x *= -1;
					} else if (particle.p.x + particle.radius > this.x + this.width) {
						particle.p.x = this.x + this.width - particle.radius;
						particle.v.x *= -1;
					}
	
					if (particle.p.y - particle.radius < this.y) {
						particle.p.y = this.y + particle.radius;
						particle.v.y *= -1;
					} else if (particle.p.y + particle.radius > this.y + this.height) {
						particle.p.y = this.y + this.height - particle.radius;
						particle.v.y *= -1;
					}
				} else if (this.crossType == 'cross') {
					if (particle.p.x + particle.radius < this.x && particle.v.x <= 0) particle.p.x = this.x + this.width + particle.radius;else if (particle.p.x - particle.radius > this.x + this.width && particle.v.x >= 0) particle.p.x = this.x - particle.radius;
	
					if (particle.p.y + particle.radius < this.y && particle.v.y <= 0) particle.p.y = this.y + this.height + particle.radius;else if (particle.p.y - particle.radius > this.y + this.height && particle.v.y >= 0) particle.p.y = this.y - particle.radius;
				}
			}
		}]);
	
		return RectZone;
	}(_Zone3.default);
	
	exports.default = RectZone;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Zone = function () {
		function Zone() {
			_classCallCheck(this, Zone);
	
			this.vector = new Proton.Vector2D(0, 0);
			this.random = 0;
			this.crossType = 'dead';
			this.alert = true;
		}
	
		_createClass(Zone, [{
			key: 'getPosition',
			value: function getPosition() {}
		}, {
			key: 'crossing',
			value: function crossing(particle) {}
		}]);
	
		return Zone;
	}();
	
	exports.default = Zone;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PointZone = function (_Zone) {
		_inherits(PointZone, _Zone);
	
		function PointZone(x, y) {
			_classCallCheck(this, PointZone);
	
			var _this = _possibleConstructorReturn(this, (PointZone.__proto__ || Object.getPrototypeOf(PointZone)).call(this));
	
			_this.x = x;
			_this.y = y;
			return _this;
		}
	
		_createClass(PointZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.vector.x = this.x;
				this.vector.y = this.y;
	
				return this.vector;
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				if (this.alert) {
					alert('Sorry PointZone does not support crossing method');
					this.alert = false;
				}
			}
		}]);
	
		return PointZone;
	}(_Zone3.default);
	
	exports.default = PointZone;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineZone = function (_Zone) {
		_inherits(LineZone, _Zone);
	
		function LineZone(x1, y1, x2, y2, direction) {
			_classCallCheck(this, LineZone);
	
			var _this = _possibleConstructorReturn(this, (LineZone.__proto__ || Object.getPrototypeOf(LineZone)).call(this));
	
			if (x2 - x1 >= 0) {
				_this.x1 = x1;
				_this.y1 = y1;
				_this.x2 = x2;
				_this.y2 = y2;
			} else {
				_this.x1 = x2;
				_this.y1 = y2;
				_this.x2 = x1;
				_this.y2 = y1;
			}
			_this.dx = _this.x2 - _this.x1;
			_this.dy = _this.y2 - _this.y1;
			_this.minx = Math.min(_this.x1, _this.x2);
			_this.miny = Math.min(_this.y1, _this.y2);
			_this.maxx = Math.max(_this.x1, _this.x2);
			_this.maxy = Math.max(_this.y1, _this.y2);
			_this.dot = _this.x2 * _this.y1 - _this.x1 * _this.y2;
			_this.xxyy = _this.dx * _this.dx + _this.dy * _this.dy;
			_this.gradient = _this.getGradient();
			_this.length = _this.getLength();
			_this.direction = direction || '>';
			return _this;
		}
	
		_createClass(LineZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.random = Math.random();
				this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient);
				this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient);
	
				return this.vector;
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				var self = this;
				if (this.crossType == "dead") {
					if (this.direction == ">" || this.direction == "R" || this.direction == "right" || this.direction == "down") {
						this.getRange(particle, function () {
							if (self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					} else {
						this.getRange(particle, function () {
							if (!self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					}
				} else if (this.crossType == "bound") {
					this.getRange(particle, function () {
						if (self.getDistance(particle.p.x, particle.p.y) <= particle.radius) {
							if (self.dx == 0) {
								particle.v.x *= -1;
							} else if (self.dy == 0) {
								particle.v.y *= -1;
							} else {
								self.getSymmetric(particle.v);
							}
						}
					});
				} else if (this.crossType == "cross") {
					if (this.alert) {
						alert('Sorry lineZone does not support cross method');
						this.alert = false;
					}
				}
			}
		}, {
			key: 'getDirection',
			value: function getDirection(x, y) {
				var A = this.dy;
				var B = -this.dx;
				var C = this.dot;
				var D = B == 0 ? 1 : B;
				if ((A * x + B * y + C) * D > 0) return true;else return false;
			}
		}, {
			key: 'getDistance',
			value: function getDistance(x, y) {
				var A = this.dy;
				var B = -this.dx;
				var C = this.dot;
				var D = A * x + B * y + C;
				return D / Math.sqrt(this.xxyy);
			}
		}, {
			key: 'getSymmetric',
			value: function getSymmetric(v) {
				var tha2 = v.getGradient();
				var tha1 = this.getGradient();
				var tha = 2 * (tha1 - tha2);
				var oldx = v.x;
				var oldy = v.y;
				v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
				v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
				return v;
			}
		}, {
			key: 'getGradient',
			value: function getGradient() {
				return Math.atan2(this.dy, this.dx);
			}
		}, {
			key: 'getRange',
			value: function getRange(particle, fun) {
				var angle = Math.abs(this.getGradient());
				if (angle <= Math.PI / 4) {
					if (particle.p.x < this.maxx && particle.p.x > this.minx) {
						fun();
					}
				} else {
					if (particle.p.y < this.maxy && particle.p.y > this.miny) {
						fun();
					}
				}
			}
		}, {
			key: 'getLength',
			value: function getLength() {
				return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				var self = this;
				if (this.crossType == "dead") {
					if (this.direction == ">" || this.direction == "R" || this.direction == "right" || this.direction == "down") {
						this.getRange(particle, function () {
							if (self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					} else {
						this.getRange(particle, function () {
							if (!self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					}
				} else if (this.crossType == "bound") {
					this.getRange(particle, function () {
						if (self.getDistance(particle.p.x, particle.p.y) <= particle.radius) {
							if (self.dx == 0) {
								particle.v.x *= -1;
							} else if (self.dy == 0) {
								particle.v.y *= -1;
							} else {
								self.getSymmetric(particle.v);
							}
						}
					});
				} else if (this.crossType == "cross") {
					if (this.alert) {
						alert('Sorry lineZone does not support cross method');
						this.alert = false;
					}
				}
			}
		}]);
	
		return LineZone;
	}(_Zone3.default);
	
	exports.default = LineZone;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PointZone = function (_Zone) {
		_inherits(PointZone, _Zone);
	
		function PointZone(imageData, x, y, d) {
			_classCallCheck(this, PointZone);
	
			var _this = _possibleConstructorReturn(this, (PointZone.__proto__ || Object.getPrototypeOf(PointZone)).call(this));
	
			_this.reset(imageData, x, y, d);
			return _this;
		}
	
		_createClass(PointZone, [{
			key: "reset",
			value: function reset(imageData, x, y, d) {
				this.imageData = imageData;
				this.x = x;
				this.y = y;
				this.d = d || 2;
				this.vectors = [];
				this.setVectors();
			}
		}, {
			key: "setVectors",
			value: function setVectors() {
				var i, j;
				var length1 = this.imageData.width;
				var length2 = this.imageData.height;
				for (i = 0; i < length1; i += this.d) {
					for (j = 0; j < length2; j += this.d) {
						var index = ((j >> 0) * length1 + (i >> 0)) * 4;
						if (this.imageData.data[index + 3] > 0) {
							this.vectors.push({
								x: i + this.x,
								y: j + this.y
							});
						}
					}
				}
				return this.vector;
			}
		}, {
			key: "getBound",
			value: function getBound(x, y) {
				var index = ((y >> 0) * this.imageData.width + (x >> 0)) * 4;
				if (this.imageData.data[index + 3] > 0) return true;else return false;
			}
		}, {
			key: "getPosition",
			value: function getPosition() {
				return this.vector.copy(this.vectors[Math.floor(Math.random() * this.vectors.length)]);
			}
		}, {
			key: "getColor",
			value: function getColor(x, y) {
				x -= this.x;
				y -= this.y;
				var i = ((y >> 0) * this.imageData.width + (x >> 0)) * 4;
				return {
					r: this.imageData.data[i],
					g: this.imageData.data[i + 1],
					b: this.imageData.data[i + 2],
					a: this.imageData.data[i + 3]
				};
			}
		}, {
			key: "crossing",
			value: function crossing(particle) {
				if (this.crossType == "dead") {
					if (this.getBound(particle.p.x - this.x, particle.p.y - this.y)) particle.dead = true;else particle.dead = false;
				} else if (this.crossType == "bound") {
					if (!this.getBound(particle.p.x - this.x, particle.p.y - this.y)) particle.v.negate();
				}
			}
		}]);
	
		return PointZone;
	}(_Zone3.default);
	
	exports.default = PointZone;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PointZone = function (_Zone) {
		_inherits(PointZone, _Zone);
	
		function PointZone(x, y, radius) {
			_classCallCheck(this, PointZone);
	
			var _this = _possibleConstructorReturn(this, (PointZone.__proto__ || Object.getPrototypeOf(PointZone)).call(this));
	
			_this.x = x;
			_this.y = y;
			_this.radius = radius;
			_this.angle = 0;
			_this.center = {
				x: _this.x,
				y: _this.y
			};
			return _this;
		}
	
		_createClass(PointZone, [{
			key: "getPosition",
			value: function getPosition() {
				this.random = Math.random();
				this.angle = Math.PI * 2 * Math.random();
				this.vector.x = this.x + this.random * this.radius * Math.cos(this.angle);
				this.vector.y = this.y + this.random * this.radius * Math.sin(this.angle);
				return this.vector;
			}
		}, {
			key: "setCenter",
			value: function setCenter(x, y) {
				this.center.x = x;
				this.center.y = y;
			}
		}, {
			key: "crossing",
			value: function crossing(particle) {
				var d = particle.p.distanceTo(this.center);
				if (this.crossType == "dead") {
					if (d - particle.radius > this.radius) particle.dead = true;
				} else if (this.crossType == "bound") {
					if (d + particle.radius >= this.radius) this.getSymmetric(particle);
				} else if (this.crossType == "cross") {
					if (this.alert) {
						alert('Sorry CircleZone does not support cross method');
						this.alert = false;
					}
				}
			}
		}, {
			key: "getSymmetric",
			value: function getSymmetric(particle) {
				var tha2 = particle.v.getGradient();
				var tha1 = this.getGradient(particle);
				var tha = 2 * (tha1 - tha2);
				var oldx = particle.v.x;
				var oldy = particle.v.y;
				particle.v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
				particle.v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
			}
		}, {
			key: "getGradient",
			value: function getGradient(particle) {
				return -Math.PI / 2 + Math.atan2(particle.p.y - this.center.y, particle.p.x - this.center.x);
			}
		}]);
	
		return PointZone;
	}(_Zone3.default);
	
	exports.default = PointZone;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(28);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Alpha = function (_Behaviour) {
		_inherits(Alpha, _Behaviour);
	
		function Alpha(a, b, life, easing) {
			_classCallCheck(this, Alpha);
	
			var _this = _possibleConstructorReturn(this, (Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call(this, life, easing));
	
			_this.reset(a, b, _this.life);
			_this.name = "Alpha";
	
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
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
	
	
		_createClass(Alpha, [{
			key: 'reset',
			value: function reset(a, b, life, easing) {
				if (b == null || b == undefined) {
					this.same = true;
				} else {
					this.same = false;
				}
				this.a = _Util2.default.setSpanValue(a || 1);
				this.b = _Util2.default.setSpanValue(b);
				if (life) {
					_get(Alpha.prototype.__proto__ || Object.getPrototypeOf(Alpha.prototype), 'reset', this).call(this, life, easing);
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
	
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.transform.alphaA = this.a.getValue();
				if (this.same) {
					particle.transform.alphaB = particle.transform.alphaA;
				} else {
					particle.transform.alphaB = this.b.getValue();
				}
			}
		}, {
			key: 'applyBehaviour',
	
	
			/**
	   * @method applyBehaviour
	   * @memberof Quark#Quark.Alpha
	   * @instance
	   *
	   * @param {Quark.Particle} particle
	   * @param {Number} 			time the integrate time 1/ms
	   * @param {Int} 			index the particle index
	  	 */
			value: function applyBehaviour(particle, time, index) {
				_get(Alpha.prototype.__proto__ || Object.getPrototypeOf(Alpha.prototype), 'applyBehaviour', this).call(this, particle, time, index);
				particle.alpha = particle.transform.alphaB + (particle.transform.alphaA - particle.transform.alphaB) * this.energy;
				if (particle.alpha < 0.001) particle.alpha = 0;
			}
		}]);
	
		return Alpha;
	}(_Behaviour3.default);
	
	exports.default = Alpha;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _const = __webpack_require__(2);
	
	var _ease = __webpack_require__(29);
	
	var _ease2 = _interopRequireDefault(_ease);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BEHAVIOUR_ID_BASE = 0xFFFFF;
	var uid = 0;
	
	var Behaviour = function () {
		function Behaviour(life) {
			var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easeLinear';
	
			_classCallCheck(this, Behaviour);
	
			this.id = BEHAVIOUR_ID_BASE + uid++;
			this.life = life || Infinity;
			this.easing = (0, _ease2.default)(easing);
			this.age = 0;
			this.energy = 1;
			this.dead = false;
			this.parents = [];
			this.name = 'Behaviour';
			this.applyBehaviour = this.applyBehaviour;
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
	
	
		_createClass(Behaviour, [{
			key: 'reset',
			value: function reset(life, easing) {
				this.life = life || Infinity;
				this.easing = easing || (0, _ease2.default)('easeLinear');
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
	
		}, {
			key: 'normalizeForce',
			value: function normalizeForce(force) {
				return force.multiplyScalar(_const.MEASURE);
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
	
		}, {
			key: 'normalizeValue',
			value: function normalizeValue(value) {
				return value * _const.MEASURE;
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
	
		}, {
			key: 'initialize',
			value: function initialize(particle) {}
	
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
	
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
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
	
		}, {
			key: 'destroy',
			value: function destroy() {
				var index;
				var length = this.parents.length,
				    i;
				for (i = 0; i < length; i++) {
					this.parents[i].removeBehaviour(this);
				}
	
				this.parents = [];
			}
		}]);
	
		return Behaviour;
	}();
	
	exports.default = Behaviour;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = getEasingByName;
	var easing = {
		easeLinear: function easeLinear(value) {
			return value;
		},
	
		easeInQuad: function easeInQuad(value) {
			return Math.pow(value, 2);
		},
	
		easeOutQuad: function easeOutQuad(value) {
			return -(Math.pow(value - 1, 2) - 1);
		},
	
		easeInOutQuad: function easeInOutQuad(value) {
			if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 2);
			return -0.5 * ((value -= 2) * value - 2);
		},
	
		easeInCubic: function easeInCubic(value) {
			return Math.pow(value, 3);
		},
	
		easeOutCubic: function easeOutCubic(value) {
			return Math.pow(value - 1, 3) + 1;
		},
	
		easeInOutCubic: function easeInOutCubic(value) {
			if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 3);
			return 0.5 * (Math.pow(value - 2, 3) + 2);
		},
	
		easeInQuart: function easeInQuart(value) {
			return Math.pow(value, 4);
		},
	
		easeOutQuart: function easeOutQuart(value) {
			return -(Math.pow(value - 1, 4) - 1);
		},
	
		easeInOutQuart: function easeInOutQuart(value) {
			if ((value /= 0.5) < 1) return 0.5 * Math.pow(value, 4);
			return -0.5 * ((value -= 2) * Math.pow(value, 3) - 2);
		},
	
		easeInSine: function easeInSine(value) {
			return -Math.cos(value * (Math.PI / 2)) + 1;
		},
	
		easeOutSine: function easeOutSine(value) {
			return Math.sin(value * (Math.PI / 2));
		},
	
		easeInOutSine: function easeInOutSine(value) {
			return -0.5 * (Math.cos(Math.PI * value) - 1);
		},
	
		easeInExpo: function easeInExpo(value) {
			return value === 0 ? 0 : Math.pow(2, 10 * (value - 1));
		},
	
		easeOutExpo: function easeOutExpo(value) {
			return value === 1 ? 1 : -Math.pow(2, -10 * value) + 1;
		},
	
		easeInOutExpo: function easeInOutExpo(value) {
			if (value === 0) return 0;
			if (value === 1) return 1;
			if ((value /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (value - 1));
			return 0.5 * (-Math.pow(2, -10 * --value) + 2);
		},
	
		easeInCirc: function easeInCirc(value) {
			return -(Math.sqrt(1 - value * value) - 1);
		},
	
		easeOutCirc: function easeOutCirc(value) {
			return Math.sqrt(1 - Math.pow(value - 1, 2));
		},
	
		easeInOutCirc: function easeInOutCirc(value) {
			if ((value /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - value * value) - 1);
			return 0.5 * (Math.sqrt(1 - (value -= 2) * value) + 1);
		},
	
		easeInBack: function easeInBack(value) {
			var s = 1.70158;
			return value * value * ((s + 1) * value - s);
		},
	
		easeOutBack: function easeOutBack(value) {
			var s = 1.70158;
			return (value = value - 1) * value * ((s + 1) * value + s) + 1;
		},
	
		easeInOutBack: function easeInOutBack(value) {
			var s = 1.70158;
			if ((value /= 0.5) < 1) return 0.5 * (value * value * (((s *= 1.525) + 1) * value - s));
			return 0.5 * ((value -= 2) * value * (((s *= 1.525) + 1) * value + s) + 2);
		}
	};
	
	function getEasingByName(name) {
		return easing[name];
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(28);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Attraction = function (_Behaviour) {
		_inherits(Attraction, _Behaviour);
	
		function Attraction(targetPosition, force, radius, life, easing) {
			_classCallCheck(this, Attraction);
	
			var _this = _possibleConstructorReturn(this, (Attraction.__proto__ || Object.getPrototypeOf(Attraction)).call(this, life, easing));
	
			_this.targetPosition = targetPosition || new _Vector2D2.default();
			_this.radius = radius || 1000;
			_this.force = _this.normalizeValue(force) || 100;
			_this.radiusSq = _this.radius * _this.radius;
			_this.attractionForce = new _Vector2D2.default();
			_this.lengthSq = 0;
			_this.name = "Attraction";
	
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		/**
	  * Reset this behaviour's parameters
	  *
	  * @method reset
	  * @memberof Proton#Proton.Attraction
	  * @instance
	  *
	  * @todo add description for 'force' and 'radius'
	  *
	  * @param {Proton.Vector2D} targetPosition the attraction point coordinates
	  * @param {Number} [force=100]
	  * @param {Number} [radius=1000]
	  * @param {Number} [life=Infinity] 				this behaviour's life
	  * @param {String} [easing=Proton.easeLinear] 	this behaviour's easing
	  */
	
	
		_createClass(Attraction, [{
			key: 'reset',
			value: function reset(targetPosition, force, radius, life, easing) {
				this.targetPosition = targetPosition || new Proton.Vector2D();
				this.radius = radius || 1000;
				this.force = this.normalizeValue(force) || 100;
				this.radiusSq = this.radius * this.radius;
				this.attractionForce = new _Vector2D2.default();
				this.lengthSq = 0;
				if (life) {
					_get(Attraction.prototype.__proto__ || Object.getPrototypeOf(Attraction.prototype), 'reset', this).call(this, life, easing);
				}
			}
	
			/**
	   * Apply this behaviour for all particles every time
	   *
	   * @memberof Proton#Proton.Attraction
	   * @method applyBehaviour
	   * @instance
	   *
	   * @param {Proton.Particle} particle
	   * @param {Number} 			time the integrate time 1/ms
	   * @param {Int} 			index the particle index
	   */
	
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				_get(Attraction.prototype.__proto__ || Object.getPrototypeOf(Attraction.prototype), 'applyBehaviour', this).call(this, particle, time, index);
	
				this.attractionForce.copy(this.targetPosition);
				this.attractionForce.sub(particle.p);
				this.lengthSq = this.attractionForce.lengthSq();
				if (this.lengthSq > 0.000004 && this.lengthSq < this.radiusSq) {
					this.attractionForce.normalize();
					this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq);
					this.attractionForce.multiplyScalar(this.force);
					particle.a.add(this.attractionForce);
				}
			}
		}]);
	
		return Attraction;
	}(_Behaviour3.default);
	
	exports.default = Attraction;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(28);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Collision = function (_Behaviour) {
		_inherits(Collision, _Behaviour);
	
		function Collision(emitter, mass, callback, life, easing) {
			_classCallCheck(this, Collision);
	
			var _this = _possibleConstructorReturn(this, (Collision.__proto__ || Object.getPrototypeOf(Collision)).call(this, life, easing));
	
			_this.reset(emitter, mass, callback);
			_this.name = "Collision";
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
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
	
	
		_createClass(Collision, [{
			key: 'reset',
			value: function reset(emitter, mass, callback, life, easing) {
				this.emitter = emitter || null;
				this.mass = mass || true;
				this.callback = callback || null;
				this.collisionPool = [];
				this.delta = new _Vector2D2.default();
				if (life) {
					_get(Collision.prototype.__proto__ || Object.getPrototypeOf(Collision.prototype), 'reset', this).call(this, life, easing);
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
	
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				var newPool = this.emitter.particles.slice(index);
				var otherParticle = void 0;
				var lengthSq = void 0;
				var overlap = void 0;
				var averageMass1 = void 0,
				    averageMass2 = void 0;
				var length = newPool.length;
				for (var i = 0; i < length; i++) {
					otherParticle = newPool[i];
					if (otherParticle !== particle) {
						this.delta.copy(otherParticle.p);
						this.delta.sub(particle.p);
						lengthSq = this.delta.lengthSq();
						var distance = particle.radius + otherParticle.radius;
	
						if (lengthSq <= distance * distance) {
							overlap = distance - Math.sqrt(lengthSq);
							overlap += 0.5;
							var totalMass = particle.mass + otherParticle.mass;
							averageMass1 = this.mass ? otherParticle.mass / totalMass : 0.5;
							averageMass2 = this.mass ? particle.mass / totalMass : 0.5;
							particle.p.add(this.delta.clone().normalize().multiplyScalar(overlap * -averageMass1));
							otherParticle.p.add(this.delta.normalize().multiplyScalar(overlap * averageMass2));
							if (this.callback) {
								this.callback(particle, otherParticle);
							}
						}
					}
				}
			}
		}]);
	
		return Collision;
	}(_Behaviour3.default);
	
	exports.default = Collision;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ZTg4NjIwMzU5NzBjZjkyMmRjNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QaXhpUGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvVmVjdG9yMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvUmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9VdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1NwYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvTWF0aFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL051bWVyaWNhbEludGVncmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemVVdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9taW5pLXNpZ25hbHMvbGliL21pbmktc2lnbmFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9WZWxvY2l0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9Qb2xhcjJELmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL0xpZmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvTWFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYWRpdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvUmVjdFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9Qb2ludFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvTGluZVpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvSW1hZ2Vab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0NpcmNsZVpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9BbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0JlaGF2aW91ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9lYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQXR0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0NvbGxpc2lvbi5qcyJdLCJuYW1lcyI6WyJnZXRTcGFuIiwiYSIsImIiLCJjZW50ZXIiLCJTcGFuIiwiUmVjdFpvbmUiLCJQb2ludFpvbmUiLCJMaW5lWm9uZSIsIkltYWdlWm9uZSIsIkNpcmNsZVpvbmUiLCJBbHBoYSIsIkF0dHJhY3Rpb24iLCJDb2xsaXNpb24iLCJnbG9iYWwiLCJRdWFyayIsImV4cG9ydHMiLCJFbWl0dGVyIiwiUE9PTF9NQVgiLCJUSU1FX1NURVAiLCJVU0VfQ0xPQ0siLCJNRUFTVVJFIiwiRVVMRVIiLCJSSzIiLCJSSzQiLCJWRVJMRVQiLCJQQVJUSUNMRV9DUkVBVEVEIiwiUEFSVElDTEVfVVBEQVRFIiwiUEFSVElDTEVfU0xFRVAiLCJQQVJUSUNMRV9ERUFEIiwiRU1JVFRFUl9BRERFRCIsIkVNSVRURVJfUkVNT1ZFRCIsInR4dCIsImNvbnRhaW5lciIsInBhcnRpY2xlQ29udGFpbmVyIiwiaW5pdGlhbGl6ZXMiLCJiZWhhdmlvdXJzIiwiZW1pdFRpbWUiLCJlbWl0VG90YWxUaW1lcyIsImRhbXBpbmciLCJiaW5kRW1pdHRlciIsInJhdGUiLCJpbnRlZ3JhdG9yIiwiX3RhaWxQYXJ0aWNsZSIsIl9wb29sSGVhZCIsInBhcnRpY2xlQ291bnQiLCJ1cGRhdGUiLCJjcmVhdGVQYXJ0aWNsZSIsImludGVncmF0ZSIsInNldHVwUGFydGljbGUiLCJsaWZlIiwiSW5maW5pdHkiLCJpc05hTiIsImluaXQiLCJwYXJ0aWNsZUNyZWF0ZWQiLCJwYXJ0aWNsZVVwZGF0ZSIsInBhcnRpY2xlRGVhZCIsImluaXRpYWxpemUiLCJiZWhhdmlvdXIiLCJwYXJ0aWNsZSIsIl9uZXh0IiwiYWRkQ2hpbGQiLCJzcHJpdGUiLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwicmVzZXQiLCJhZGRCZWhhdmlvdXJzIiwicGFyZW50IiwiX3ByZXYiLCJkaXNwYXRjaCIsInBPYmoiLCJpbml0QWxsIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwiaSIsInB1c2giLCJpbml0aWFsaXplciIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImhhc093blByb3BlcnR5IiwicGFyZW50cyIsInRpbWUiLCJkZWFkIiwiZGVhZFBhcnRpY2xlIiwiYWxwaGEiLCJ2aXNpYmxlIiwiZ2V0VmFsdWUiLCJhZ2UiLCJkZXN0cm95IiwiZW1pdHRpbmciLCJyZW1vdmVJbml0aWFsaXplcnMiLCJyZW1vdmVBbGxCZWhhdmlvdXJzIiwicmVtb3ZlRW1pdHRlciIsInVpZCIsIlBhcnRpY2xlIiwiaWQiLCJQSVhJIiwiU3ByaXRlIiwiTWF0aCIsImF0YW4yIiwidiIsIngiLCJ5IiwiUEkiLCJlbmVyZ3kiLCJzbGVlcCIsInRhcmdldCIsIm1hc3MiLCJyYWRpdXMiLCJzY2FsZSIsInJvdGF0aW9uIiwiY29sb3IiLCJlYXNpbmciLCJ2YWwiLCJ0cmFuc2Zvcm0iLCJwIiwib2xkIiwic2V0IiwicmdiIiwiciIsImciLCJhcHBseUJlaGF2aW91ciIsIm1heCIsImFkZEJlaGF2aW91ciIsIlZlY3RvcjJEIiwidmFsdWUiLCJFcnJvciIsInciLCJ1bmRlZmluZWQiLCJhZGRWZWN0b3JzIiwicyIsInN1YlZlY3RvcnMiLCJtaW4iLCJtdWx0aXBseVNjYWxhciIsInNxcnQiLCJkaXZpZGVTY2FsYXIiLCJkaXN0YW5jZVRvU3F1YXJlZCIsInRoYSIsImNvcyIsInNpbiIsImR4IiwiZHkiLCJsIiwib2xkTGVuZ3RoIiwiUmF0ZSIsIm51bXBhbiIsInRpbWVwYW4iLCJudW1QYW4iLCJ0aW1lUGFuIiwic2V0U3BhblZhbHVlIiwic3RhcnRUaW1lIiwibmV4dFRpbWUiLCJpbml0VmFsdWUiLCJkZWZhdWx0cyIsImdldFZlY3RvcjJEIiwicG9zdGlvbk9yWCIsInZlY3RvcjJkIiwianVkZ2VWZWN0b3IyRCIsInBPQkoiLCJyZXN1bHQiLCJzZXRWZWN0b3IyREJ5T2JqZWN0IiwidngiLCJ2eSIsImF4IiwiYXkiLCJjIiwiZ2V0U3BhblZhbHVlIiwicGFuIiwiaGV4VG9SR0IiLCJoIiwiaGV4MTYiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJwYXJzZUludCIsInJnYlRvSGV4IiwicmJnIiwiaXNBcnJheSIsIklOVCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQVRvQiIsInJhbmRvbUZsb2F0aW5nIiwiZGVncmVlVHJhbnNmb3JtIiwiZiIsIk51bWVyaWNhbEludGVncmF0aW9uIiwidHlwZSIsImV1bGVySW50ZWdyYXRlIiwiY29weSIsImFkZCIsImNsZWFyIiwiZW1pdHRlciIsInJvdGF0ZSIsIkluaXRpYWxpemUiLCJWZWxvY2l0eSIsIkxpZmUiLCJNYXNzIiwiUmFkaXVzIiwiUG9zaXRpb24iLCJycGFuIiwidGhhcGFuIiwiclBhbiIsInRoYVBhbiIsIlBPTEFSIiwiUCIsInJQYW5WYWwiLCJub3JtYWxpemVkUEkiLCJ2ciIsInRoYVBhbk5vcm0iLCJwb2xhcjJkIiwibm9ybWFsaXplVmVsb2NpdHkiLCJnZXRYIiwiZ2V0WSIsIlBvbGFyMkQiLCJhYnMiLCJsaWZlUGFuIiwibWFzc1BhbiIsIm9sZFJhZGl1cyIsInpvbmUiLCJnZXRQb3NpdGlvbiIsInZlY3RvciIsIndpZHRoIiwiaGVpZ2h0IiwiY3Jvc3NUeXBlIiwiWm9uZSIsIlByb3RvbiIsImFsZXJ0IiwieDEiLCJ5MSIsIngyIiwieTIiLCJkaXJlY3Rpb24iLCJtaW54IiwibWlueSIsIm1heHgiLCJtYXh5IiwiZG90IiwieHh5eSIsImdyYWRpZW50IiwiZ2V0R3JhZGllbnQiLCJnZXRMZW5ndGgiLCJzZWxmIiwiZ2V0UmFuZ2UiLCJnZXREaXJlY3Rpb24iLCJnZXREaXN0YW5jZSIsImdldFN5bW1ldHJpYyIsIkEiLCJCIiwiQyIsIkQiLCJ0aGEyIiwidGhhMSIsIm9sZHgiLCJvbGR5IiwiZnVuIiwiYW5nbGUiLCJpbWFnZURhdGEiLCJkIiwidmVjdG9ycyIsInNldFZlY3RvcnMiLCJqIiwibGVuZ3RoMSIsImxlbmd0aDIiLCJkYXRhIiwiZ2V0Qm91bmQiLCJuZWdhdGUiLCJkaXN0YW5jZVRvIiwibmFtZSIsInNhbWUiLCJhbHBoYUEiLCJhbHBoYUIiLCJCRUhBVklPVVJfSURfQkFTRSIsIkJlaGF2aW91ciIsImZvcmNlIiwicmVtb3ZlQmVoYXZpb3VyIiwiZ2V0RWFzaW5nQnlOYW1lIiwiZWFzZUxpbmVhciIsImVhc2VJblF1YWQiLCJwb3ciLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5DdWJpYyIsImVhc2VPdXRDdWJpYyIsImVhc2VJbk91dEN1YmljIiwiZWFzZUluUXVhcnQiLCJlYXNlT3V0UXVhcnQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJblNpbmUiLCJlYXNlT3V0U2luZSIsImVhc2VJbk91dFNpbmUiLCJlYXNlSW5FeHBvIiwiZWFzZU91dEV4cG8iLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluQ2lyYyIsImVhc2VPdXRDaXJjIiwiZWFzZUluT3V0Q2lyYyIsImVhc2VJbkJhY2siLCJlYXNlT3V0QmFjayIsImVhc2VJbk91dEJhY2siLCJ0YXJnZXRQb3NpdGlvbiIsIm5vcm1hbGl6ZVZhbHVlIiwicmFkaXVzU3EiLCJhdHRyYWN0aW9uRm9yY2UiLCJsZW5ndGhTcSIsInN1YiIsIm5vcm1hbGl6ZSIsImNhbGxiYWNrIiwiY29sbGlzaW9uUG9vbCIsImRlbHRhIiwibmV3UG9vbCIsInBhcnRpY2xlcyIsInNsaWNlIiwib3RoZXJQYXJ0aWNsZSIsIm92ZXJsYXAiLCJhdmVyYWdlTWFzczEiLCJhdmVyYWdlTWFzczIiLCJkaXN0YW5jZSIsInRvdGFsTWFzcyIsImNsb25lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO1NBYWdCQSxPLEdBQUFBLE87O0FBWmhCOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sVUFBU0EsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCQyxNQUF2QixFQUErQjtBQUNsQyxZQUFPLG1CQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsTUFBZixDQUFQO0FBQ0g7O1NBRVFDLEk7U0FBTUMsUTtTQUFVQyxTO1NBQVdDLFE7U0FBVUMsUztTQUFXQyxVO1NBRWhEQyxLO1NBQU9DLFU7U0FBWUMsUzs7O0FBRTVCQyxRQUFPQyxLQUFQLEdBQWVDLE9BQWYsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7Ozs7OztTQUVRQyxPOzs7Ozs7Ozs7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QWxRLGdCQUFTeUQsQ0FBVCxDQUFXeUUsR0FBWCxDQUFlLEtBQUt1SCxLQUFMLENBQVdVLEtBQVgsR0FBbUJiLFNBQW5CLEdBQStCM0ssY0FBL0IsQ0FBOENtTCxVQUFVLENBQUNDLFlBQXpELENBQWY7QUFDQUYscUJBQWNwTSxDQUFkLENBQWdCeUUsR0FBaEIsQ0FBb0IsS0FBS3VILEtBQUwsQ0FBV0gsU0FBWCxHQUF1QjNLLGNBQXZCLENBQXNDbUwsVUFBVUUsWUFBaEQsQ0FBcEI7QUFDQSxXQUFJLEtBQUtULFFBQVQsRUFBa0I7QUFDakIsYUFBS0EsUUFBTCxDQUFjdlAsUUFBZCxFQUF3QjZQLGFBQXhCO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRDs7Ozs7O21CQTNFbUIzUyxTIiwiZmlsZSI6InF1YXJrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZTg4NjIwMzU5NzBjZjkyMmRjNyIsImV4cG9ydCAqIGZyb20gJy4vZW1pdHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBTcGFuIGZyb20gJy4vbWF0aC9TcGFuJztcclxuXHJcbmltcG9ydCBSZWN0Wm9uZSBmcm9tICcuL3pvbmUvUmVjdFpvbmUnO1xyXG5pbXBvcnQgUG9pbnRab25lIGZyb20gJy4vem9uZS9Qb2ludFpvbmUnO1xyXG5pbXBvcnQgTGluZVpvbmUgZnJvbSAnLi96b25lL0xpbmVab25lJztcclxuaW1wb3J0IEltYWdlWm9uZSBmcm9tICcuL3pvbmUvSW1hZ2Vab25lJztcclxuaW1wb3J0IENpcmNsZVpvbmUgZnJvbSAnLi96b25lL0NpcmNsZVpvbmUnO1xyXG5cclxuaW1wb3J0IEFscGhhIGZyb20gJy4vYmVoYXZpb3VyL0FscGhhJztcclxuaW1wb3J0IEF0dHJhY3Rpb24gZnJvbSAnLi9iZWhhdmlvdXIvQXR0cmFjdGlvbic7XHJcbmltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9iZWhhdmlvdXIvQ29sbGlzaW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGFuKGEsIGIsIGNlbnRlcikge1xyXG4gICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIsIGNlbnRlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNwYW4sIFJlY3Rab25lLCBQb2ludFpvbmUsIExpbmVab25lLCBJbWFnZVpvbmUsIENpcmNsZVpvbmUgfTtcclxuXHJcbmV4cG9ydCB7IEFscGhhLCBBdHRyYWN0aW9uLCBDb2xsaXNpb24gfTtcclxuXHJcbmdsb2JhbC5RdWFyayA9IGV4cG9ydHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiZXhwb3J0ICogZnJvbSAnLi9jb25zdCc7XHJcblxyXG5pbXBvcnQgRW1pdHRlciBmcm9tICcuL0VtaXR0ZXInO1xyXG5cclxuZXhwb3J0IHtFbWl0dGVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBQT09MX01BWCA9IDEwMDA7XHJcbmV4cG9ydCBjb25zdCBUSU1FX1NURVAgPSA2MDtcclxuZXhwb3J0IGNvbnN0IFVTRV9DTE9DSyA9IGZhbHNlO1xyXG5leHBvcnQgY29uc3QgTUVBU1VSRSA9IDEwMDtcclxuZXhwb3J0IGNvbnN0IEVVTEVSID0gJ2V1bGVyJztcclxuZXhwb3J0IGNvbnN0IFJLMiA9ICdydW5nZS1rdXR0YTInO1xyXG5leHBvcnQgY29uc3QgUks0ID0gJ3J1bmdlLWt1dHRhNCc7XHJcbmV4cG9ydCBjb25zdCBWRVJMRVQgPSAndmVybGV0JztcclxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX0NSRUFURUQgPSAncGFydGlsY2xlQ3JlYXRlZCc7XHJcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9VUERBVEUgPSAncGFydGlsY2xlVXBkYXRlJztcclxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX1NMRUVQID0gJ3BhcnRpY2xlU2xlZXAnO1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfREVBRCA9ICdwYXJ0aWxjbGVEZWFkJztcclxuZXhwb3J0IGNvbnN0IEVNSVRURVJfQURERUQgPSAnZW1pdHRlckFkZGVkJztcclxuZXhwb3J0IGNvbnN0IEVNSVRURVJfUkVNT1ZFRCA9ICdlbWl0dGVyUmVtb3ZlZCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCIvLyBpbXBvcnQgUGFydGljbGUgZnJvbSAnLi4vY29yZS9QYXJ0aWNsZSc7XHJcbmltcG9ydCBQYXJ0aWNsZSBmcm9tICcuLi9jb3JlL1BpeGlQYXJ0aWNsZSc7XHJcbmltcG9ydCBSYXRlIGZyb20gJy4uL2luaXRpYWxpemUvUmF0ZSc7XHJcbmltcG9ydCBOdW1lcmljYWxJbnRlZ3JhdGlvbiBmcm9tICcuLi9tYXRoL051bWVyaWNhbEludGVncmF0aW9uJztcclxuaW1wb3J0IHsgUEFSVElDTEVfQ1JFQVRFRCwgUEFSVElDTEVfVVBEQVRFLCBQQVJUSUNMRV9ERUFEIH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCBpbml0aWFsaXplRm4gZnJvbSAnLi4vaW5pdGlhbGl6ZS9Jbml0aWFsaXplVXRpbCc7XHJcbmltcG9ydCBNaW5pU2lnbmFsIGZyb20gJ21pbmktc2lnbmFscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIGV4dGVuZHMgUGFydGljbGV7XHJcbiAgY29uc3RydWN0b3IodHh0LCBjb250YWluZXIpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy50eHQgPSB0eHQ7XHJcbiAgICB0aGlzLnBhcnRpY2xlQ29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZXMgPSBbXTtcclxuICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gLTE7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmcmljdGlvbiBjb2VmZmljaWVudCBmb3IgYWxsIHBhcnRpY2xlIGVtaXQgYnkgVGhpcztcclxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQGRlZmF1bHQgMC4wMDZcclxuICAgICAqL1xyXG4gICAgdGhpcy5kYW1waW5nID0gLjAwNjtcclxuICAgIC8qKlxyXG4gICAgICogSWYgYmluZEVtaXR0ZXIgdGhlIHBhcnRpY2xlcyBjYW4gYmluZCB0aGlzIGVtaXR0ZXIncyBwcm9wZXJ0eTtcclxuICAgICAqIEBwcm9wZXJ0eSBiaW5kRW1pdHRlclxyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmluZEVtaXR0ZXIgPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyBwZXIgc2Vjb25kIGVtaXQgKGEgW3BhcnRpY2xlXS9iIFtzXSk7XHJcbiAgICAgKiBAcHJvcGVydHkgcmF0ZVxyXG4gICAgICogQHR5cGUge1F1YXJrLlJhdGV9XHJcbiAgICAgKiBAZGVmYXVsdCBRdWFyay5SYXRlKDEsIC4xKVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJhdGUgPSBuZXcgUmF0ZSgxLCAuMSk7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdG9yID0gbmV3IE51bWVyaWNhbEludGVncmF0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5fdGFpbFBhcnRpY2xlID0gbnVsbDtcclxuICAgIHRoaXMuX3Bvb2xIZWFkID0gbnVsbDtcclxuICAgIHRoaXMucGFydGljbGVDb3VudCA9IDA7XHJcblxyXG5cclxuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGU7XHJcbiAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlID0gdGhpcy5jcmVhdGVQYXJ0aWNsZTtcclxuICAgIHRoaXMuaW50ZWdyYXRlID0gdGhpcy5pbnRlZ3JhdGU7XHJcbiAgICB0aGlzLnNldHVwUGFydGljbGUgPSB0aGlzLnNldHVwUGFydGljbGU7XHJcbiAgfVxyXG5cclxuICBlbWl0KGVtaXRUaW1lLCBsaWZlKSB7XHJcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSBlbWl0VGltZSB8fCBJbmZpbml0eTtcclxuXHJcbiAgICBpZighaXNOYU4obGlmZSkpIHtcclxuICAgICAgdGhpcy5saWZlID0gbGlmZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJhdGUuaW5pdCgpO1xyXG5cclxuICAgIHRoaXMucGFydGljbGVDcmVhdGVkID0gbmV3IE1pbmlTaWduYWwoKTtcclxuICAgIHRoaXMucGFydGljbGVVcGRhdGUgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZURlYWQgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc3RvcCBlbWl0aW5nXHJcbiAgICogQG1ldGhvZCBzdG9wRW1pdFxyXG4gICAqL1xyXG4gIHN0b3BFbWl0KCkge1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgY3VycmVudCBhbGwgcGFydGljbGVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcclxuICAgKi9cclxuICByZW1vdmVBbGxQYXJ0aWNsZXMoKSB7XHJcbiAgICB0aGlzLl90YWlsUGFydGljbGUgPSBudWxsO1xyXG4gICAgdGhpcy5fcG9vbEhlYWQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlIHNpbmdsZSBwYXJ0aWNsZTtcclxuICAgKiBcclxuICAgKiBjYW4gdXNlIGVtaXQoe3g6MTB9LG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KSBvciBlbWl0KFt7eDoxMH0sbmV3IEluaXRpYWxpemVdLG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXHJcbiAgICovXHJcbiAgY3JlYXRlUGFydGljbGUoaW5pdGlhbGl6ZSwgYmVoYXZpb3VyKSB7XHJcbiAgICAvLyBjb25zdCBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZSgpO1xyXG5cclxuICAgIGxldCBwYXJ0aWNsZTtcclxuXHJcbiAgICBpZih0aGlzLl9wb29sSGVhZCl7XHJcbiAgICAgIHBhcnRpY2xlID0gdGhpcy5fcG9vbEhlYWQ7XHJcbiAgICAgIHRoaXMuX3Bvb2xIZWFkID0gdGhpcy5fcG9vbEhlYWQuX25leHQ7XHJcbiAgICAgIHBhcnRpY2xlLl9uZXh0ID0gbnVsbDtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3Bvb2xlZCcpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKHRoaXMudHh0KTtcclxuICAgICAgdGhpcy5wYXJ0aWNsZUNvbnRhaW5lci5hZGRDaGlsZChwYXJ0aWNsZS5zcHJpdGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYXJ0aWNsZUNvdW50Kys7XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemVzID0gdGhpcy5pbml0aWFsaXplcztcclxuICAgIGxldCBiZWhhdmlvdXJzID0gdGhpcy5iZWhhdmlvdXJzO1xyXG5cclxuICAgIGlmIChpbml0aWFsaXplKSB7XHJcbiAgICAgIGlmICggaW5pdGlhbGl6ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpXHJcbiAgICAgICAgaW5pdGlhbGl6ZXMgPSBpbml0aWFsaXplO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgaW5pdGlhbGl6ZXMgPSBbaW5pdGlhbGl6ZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJlaGF2aW91cikge1xyXG4gICAgICBpZiAoIGJlaGF2aW91ci5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpXHJcbiAgICAgICAgYmVoYXZpb3VycyA9IGJlaGF2aW91cjtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGJlaGF2aW91cnMgPSBbYmVoYXZpb3VyXTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0aWNsZS5yZXNldCgpO1xyXG4gICAgaW5pdGlhbGl6ZUZuKHRoaXMsIHBhcnRpY2xlLCBpbml0aWFsaXplcyk7XHJcbiAgICBwYXJ0aWNsZS5hZGRCZWhhdmlvdXJzKGJlaGF2aW91cnMpO1xyXG4gICAgcGFydGljbGUucGFyZW50ID0gdGhpcztcclxuICAgIHBhcnRpY2xlLl9wcmV2ID0gdGhpcy5fdGFpbFBhcnRpY2xlO1xyXG4gICAgdGhpcy5fdGFpbFBhcnRpY2xlID0gcGFydGljbGU7XHJcblxyXG4gICAgdGhpcy5wYXJ0aWNsZUNyZWF0ZWQuZGlzcGF0Y2gocGFydGljbGUpO1xyXG5cclxuICAgIHJldHVybiBwYXJ0aWNsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZCBpbml0aWFsaXplIHRvIHRoaXMgZW1pdHRlclxyXG4gICAqIEBtZXRob2QgYWRkU2VsZkluaXRpYWxpemVcclxuICAgKi9cclxuICBhZGRTZWxmSW5pdGlhbGl6ZShwT2JqKSB7XHJcbiAgICBpZiAocE9ialsnaW5pdCddKSB7XHJcbiAgICAgIHBPYmouaW5pdCh0aGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdEFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIHRoZSBJbml0aWFsaXplIHRvIHBhcnRpY2xlcztcclxuICAgKiBcclxuICAgKiB5b3UgY2FuIHVzZSBpbml0aWFsaXplcyBhcnJheTpmb3IgZXhhbXBsZSBlbWl0dGVyLmFkZEluaXRpYWxpemUoaW5pdGlhbGl6ZTEsaW5pdGlhbGl6ZTIsaW5pdGlhbGl6ZTMpO1xyXG4gICAqIEBtZXRob2QgYWRkSW5pdGlhbGl6ZVxyXG4gICAqIEBwYXJhbSB7UXVhcmsuSW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBsaWtlIHRoaXMgbmV3IFF1YXJrLlJhZGl1cygxLCAxMilcclxuICAgKi9cclxuICBhZGRJbml0aWFsaXplKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplcy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgdGhlIEluaXRpYWxpemVcclxuICAgKiBAbWV0aG9kIHJlbW92ZUluaXRpYWxpemVcclxuICAgKiBAcGFyYW0ge1F1YXJrLkluaXRpYWxpemV9IGluaXRpYWxpemUgYSBpbml0aWFsaXplXHJcbiAgICovXHJcbiAgcmVtb3ZlSW5pdGlhbGl6ZShpbml0aWFsaXplcikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluaXRpYWxpemVzLmluZGV4T2YoaW5pdGlhbGl6ZXIpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGFsbCBJbml0aWFsaXplc1xyXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZXJzXHJcbiAgICovXHJcbiAgcmVtb3ZlSW5pdGlhbGl6ZXJzKCkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplcy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIHRoZSBCZWhhdmlvdXIgdG8gcGFydGljbGVzO1xyXG4gICAqIFxyXG4gICAqIHlvdSBjYW4gdXNlIEJlaGF2aW91cnMgYXJyYXk6ZW1pdHRlci5hZGRCZWhhdmlvdXIoQmVoYXZpb3VyMSxCZWhhdmlvdXIyLEJlaGF2aW91cjMpO1xyXG4gICAqIEBtZXRob2QgYWRkQmVoYXZpb3VyXHJcbiAgICogQHBhcmFtIHtRdWFyay5CZWhhdmlvdXJ9IGJlaGF2aW91ciBsaWtlIHRoaXMgbmV3IFF1YXJrLkNvbG9yKCdyYW5kb20nKVxyXG4gICAqL1xyXG4gIGFkZEJlaGF2aW91cigpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoXCJwYXJlbnRzXCIpKVxyXG4gICAgICAgIGFyZ3VtZW50c1tpXS5wYXJlbnRzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgdGhlIEJlaGF2aW91clxyXG4gICAqIEBtZXRob2QgcmVtb3ZlQmVoYXZpb3VyXHJcbiAgICogQHBhcmFtIHtRdWFyay5CZWhhdmlvdXJ9IGJlaGF2aW91ciBhIGJlaGF2aW91clxyXG4gICAqL1xyXG4gIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5iZWhhdmlvdXJzLmluZGV4T2YoYmVoYXZpb3VyKTtcclxuICAgIGlmIChpbmRleCA+IC0xKVxyXG4gICAgICB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSBhbGwgYmVoYXZpb3Vyc1xyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsQmVoYXZpb3Vyc1xyXG4gICAqL1xyXG4gIHJlbW92ZUFsbEJlaGF2aW91cnMoKSB7XHJcbiAgICB0aGlzLmJlaGF2aW91cnMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIGludGVncmF0ZSh0aW1lKSB7XHJcbiAgICBjb25zdCBkYW1waW5nID0gMSAtIHRoaXMuZGFtcGluZztcclxuXHJcbiAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHRoaXMsIHRpbWUsIGRhbXBpbmcpO1xyXG4gICAgbGV0IHBhcnRpY2xlID0gdGhpcy5fdGFpbFBhcnRpY2xlO1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgd2hpbGUocGFydGljbGUpe1xyXG5cclxuICAgICAgcGFydGljbGUudXBkYXRlKHRpbWUsIGkrKyk7XHJcbiAgICAgIHRoaXMuaW50ZWdyYXRvci5pbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpO1xyXG5cclxuICAgICAgLy8gdG9kbyB0YWlscGFydGljbGUgaXMgbm90IHJlbW92ZWRcclxuICAgICAgaWYgKHBhcnRpY2xlLl9wcmV2ICYmIHBhcnRpY2xlLl9wcmV2LmRlYWQpIHtcclxuICAgICAgICBjb25zdCBkZWFkUGFydGljbGUgPSBwYXJ0aWNsZS5fcHJldjtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlRGVhZC5kaXNwYXRjaChkZWFkUGFydGljbGUpO1xyXG4gICAgICAgIHRoaXMucGFydGljbGVDb3VudC0tO1xyXG5cclxuICAgICAgICAvLyBpZihkZWFkUGFydGljbGUgPT09IHRoaXMuX3RhaWxQYXJ0aWNsZSl7XHJcbiAgICAgICAgLy8gICB0aGlzLl90YWlsUGFydGljbGUgPSBkZWFkUGFydGljbGUuX3ByZXY7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBkZWFkUGFydGljbGUuc3ByaXRlLmFscGhhID0gMDtcclxuICAgICAgICBkZWFkUGFydGljbGUuc3ByaXRlLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcGFydGljbGUuX3ByZXYgPSBkZWFkUGFydGljbGUuX3ByZXY7XHJcblxyXG4gICAgICAgIC8vYWRkIHRvIHBvb2xcclxuICAgICAgICBkZWFkUGFydGljbGUuX3ByZXYgPSBudWxsO1xyXG4gICAgICAgIGRlYWRQYXJ0aWNsZS5fbmV4dCA9IHRoaXMuX3Bvb2xIZWFkO1xyXG4gICAgICAgIHRoaXMuX3Bvb2xIZWFkID0gZGVhZFBhcnRpY2xlO1xyXG5cclxuXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wYXJ0aWNsZVVwZGF0ZS5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcblxyXG4gICAgICBwYXJ0aWNsZSA9IHBhcnRpY2xlLl9wcmV2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdHRpbmcodGltZSkge1xyXG4gICAgaWYgKHRoaXMuZW1pdFRvdGFsVGltZXMgPT0gJ29uY2UnKSB7ICBcclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5yYXRlLmdldFZhbHVlKDk5OTk5KTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUGFydGljbGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9ICdub25lJztcclxuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHRoaXMuZW1pdFRvdGFsVGltZXMpKSB7XHJcbiAgICAgIHRoaXMuZW1pdFRpbWUgKz0gdGltZTtcclxuICAgICAgaWYgKHRoaXMuZW1pdFRpbWUgPCB0aGlzLmVtaXRUb3RhbFRpbWVzKSB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5yYXRlLmdldFZhbHVlKHRpbWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuY3JlYXRlUGFydGljbGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLmFnZSArPSB0aW1lO1xyXG4gICAgaWYgKHRoaXMuYWdlID49IHRoaXMubGlmZSB8fCB0aGlzLmRlYWQpIHtcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbWl0dGluZyh0aW1lKTtcclxuICAgIHRoaXMuaW50ZWdyYXRlKHRpbWUpO1xyXG4gIH07XHJcblxyXG4gIHNldHVwUGFydGljbGUocGFydGljbGUsIGluaXRpYWxpemUsIGJlaGF2aW91cikge1xyXG4gICAgbGV0IGluaXRpYWxpemVzID0gdGhpcy5pbml0aWFsaXplcztcclxuICAgIGxldCBiZWhhdmlvdXJzID0gdGhpcy5iZWhhdmlvdXJzO1xyXG5cclxuICAgIGlmIChpbml0aWFsaXplKSB7XHJcbiAgICAgIGlmICggaW5pdGlhbGl6ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpXHJcbiAgICAgICAgaW5pdGlhbGl6ZXMgPSBpbml0aWFsaXplO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgaW5pdGlhbGl6ZXMgPSBbaW5pdGlhbGl6ZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJlaGF2aW91cikge1xyXG4gICAgICBpZiAoIGJlaGF2aW91ci5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpXHJcbiAgICAgICAgYmVoYXZpb3VycyA9IGJlaGF2aW91cjtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGJlaGF2aW91cnMgPSBbYmVoYXZpb3VyXTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0aWNsZS5yZXNldCgpO1xyXG4gICAgaW5pdGlhbGl6ZUZuKHRoaXMsIHBhcnRpY2xlLCBpbml0aWFsaXplcyk7XHJcbiAgICBwYXJ0aWNsZS5hZGRCZWhhdmlvdXJzKGJlaGF2aW91cnMpO1xyXG4gICAgcGFydGljbGUucGFyZW50ID0gdGhpcztcclxuICAgIHBhcnRpY2xlLl9wcmV2ID0gdGhpcy5fdGFpbFBhcnRpY2xlO1xyXG4gICAgdGhpcy5fdGFpbFBhcnRpY2xlID0gcGFydGljbGU7XHJcbiAgfVxyXG5cclxuICAvLyByZWN5Y2xlUGFydGljbGUocGFydGljbGUpe1xyXG4gIC8vICAgLy8gaWYocGFydGljbGUubmV4dClcclxuICAvLyAgIC8vICAgcGFydGljbGUubmV4dC5wcmV2ID0gcGFydGljbGUucHJldjtcclxuXHJcbiAgLy8gICBwYXJ0aWNsZS5fcHJldiA9IHBhcnRpY2xlLl9wcmV2Ll9wcmV2O1xyXG5cclxuICAvLyAgIGlmKHBhcnRpY2xlID09PSB0aGlzLl90YWlsUGFydGljbGUpXHJcbiAgLy8gICAgIHRoaXMuX3RhaWxQYXJ0aWNsZSA9IHBhcnRpY2xlLl9wcmV2O1xyXG5cclxuICAvLyAgIC8vYWRkIHRvIHBvb2xcclxuICAvLyAgIHBhcnRpY2xlLl9wcmV2ID0gbnVsbDtcclxuICAvLyAgIHBhcnRpY2xlLl9uZXh0ID0gdGhpcy5fcG9vbEhlYWQ7XHJcbiAgLy8gICB0aGlzLl9wb29sSGVhZCA9IHBhcnRpY2xlO1xyXG5cclxuICAvLyAgIC8vIC8vcmVtb3ZlIGNoaWxkIGZyb20gZGlzcGxheSwgb3IgbWFrZSBpdCBpbnZpc2libGUgaWYgaXQgaXMgaW4gYSBQYXJ0aWNsZUNvbnRhaW5lclxyXG4gIC8vICAgLy8gaWYodGhpcy5fcGFyZW50SXNQQylcclxuICAvLyAgIC8vIHtcclxuICAvLyAgIC8vICAgcGFydGljbGUuYWxwaGEgPSAwO1xyXG4gIC8vICAgLy8gICBwYXJ0aWNsZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgLy8gICAvLyB9XHJcbiAgLy8gICAvLyBlbHNlXHJcbiAgLy8gICAvLyB7XHJcbiAgLy8gICAvLyAgIGlmKHBhcnRpY2xlLnBhcmVudClcclxuICAvLyAgIC8vICAgICBwYXJ0aWNsZS5wYXJlbnQucmVtb3ZlQ2hpbGQocGFydGljbGUpO1xyXG4gIC8vICAgLy8gfVxyXG4gIC8vICAgLy8gLy9kZWNyZWFzZSBjb3VudFxyXG4gIC8vICAgLy8gLS10aGlzLnBhcnRpY2xlQ291bnQ7XHJcbiAgLy8gfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxyXG4gICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG5cclxuICAgIGlmKHRoaXMuX3RhaWxQYXJ0aWNsZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUluaXRpYWxpemVycygpO1xyXG4gICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVFbWl0dGVyKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9FbWl0dGVyLmpzIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxubGV0IHVpZCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZXtcclxuICAgIGNvbnN0cnVjdG9yKHR4dCkge1xyXG4gICAgICB0aGlzLmlkID0gdWlkKys7XHJcbiAgICAgIHRoaXMucmVzZXQodHJ1ZSk7XHJcblxyXG4gICAgICBpZih0eHQpXHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHR4dCk7XHJcbiAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGU7XHJcbiAgICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMudi54LCAtdGhpcy52LnkpICogKDE4MCAvIE1hdGguUEkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KGluaXQpIHtcclxuICAgICAgdGhpcy5fcHJldiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX25leHQgPSBudWxsO1xyXG4gICAgICB0aGlzLmxpZmUgPSBJbmZpbml0eTtcclxuICAgICAgdGhpcy5hZ2UgPSAwO1xyXG4gICAgICB0aGlzLmVuZXJneSA9IDE7XHJcbiAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNsZWVwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgLy8gdGhpcy5zcHJpdGUgPSBudWxsO1xyXG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gMTA7XHJcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICB0aGlzLnNjYWxlID0gMTtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuY29sb3IgPSBudWxsO1xyXG4gICAgICB0aGlzLmVhc2luZyA9ICh2YWwpID0+IHZhbDtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7fVxyXG4gICAgICBpZiAoaW5pdCkge1xyXG4gICAgICAgIHRoaXMucCA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMudiA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMuYSA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMub2xkID0ge1xyXG4gICAgICAgICAgcCA6IG5ldyBWZWN0b3IyRCgpLFxyXG4gICAgICAgICAgdiA6IG5ldyBWZWN0b3IyRCgpLFxyXG4gICAgICAgICAgYSA6IG5ldyBWZWN0b3IyRCgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJlaGF2aW91cnMgPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkZWxldGUgdGhpcy50cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5wLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLnYuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMuYS5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQucC5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQudi5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQuYS5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnJnYiA9IHtcclxuICAgICAgICByIDogMjU1LFxyXG4gICAgICAgIGcgOiAyNTUsXHJcbiAgICAgICAgYiA6IDI1NVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBpbmRleCkge1xyXG4gICAgICBpZighdGhpcy5zbGVlcCkge1xyXG4gICAgICAgIHRoaXMuYWdlICs9IHRpbWU7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5iZWhhdmlvdXJzLmxlbmd0aDtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5iZWhhdmlvdXJzW2ldKVxyXG4gICAgICAgICAgICB0aGlzLmJlaGF2aW91cnNbaV0uYXBwbHlCZWhhdmlvdXIodGhpcywgdGltZSwgaW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuc3ByaXRlKXtcclxuICAgICAgICB0aGlzLnNwcml0ZS54ID0gdGhpcy5wLng7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUueSA9IHRoaXMucC55O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmFnZSA+PSB0aGlzLmxpZmUpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBzY2FsZSA9IHRoaXMuZWFzaW5nKHRoaXMuYWdlIC8gdGhpcy5saWZlKTtcclxuICAgICAgICB0aGlzLmVuZXJneSA9IE1hdGgubWF4KDEgLSBzY2FsZSwgMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgICB0aGlzLmJlaGF2aW91cnMucHVzaChiZWhhdmlvdXIpO1xyXG4gICAgICBpZiAoYmVoYXZpb3VyLmhhc093blByb3BlcnR5KCdwYXJlbnRzJykpe1xyXG4gICAgICAgIGJlaGF2aW91ci5wYXJlbnRzLnB1c2godGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgYmVoYXZpb3VyLmluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKSB7XHJcbiAgICAgIHZhciBsZW5ndGggPSBiZWhhdmlvdXJzLmxlbmd0aCwgaTtcclxuICAgICAgZm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYWRkQmVoYXZpb3VyKGJlaGF2aW91cnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHZhciBiZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBiZWhhdmlvdXIucGFyZW50cyA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xyXG4gICAgICB0aGlzLmJlaGF2aW91cnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc3RvcnkgdGhpcyBwYXJ0aWNsZVxyXG4gICAgICogQG1ldGhvZCBkZXN0cm95XHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xyXG4gICAgICB0aGlzLmVuZXJneSA9IDA7XHJcbiAgICAgIHRoaXMuZGVhZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1BpeGlQYXJ0aWNsZS5qcyIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRHtcclxuXHJcbiAgY29uc3RydWN0b3IoeCwgeSl7XHJcbiAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgfVxyXG5cclxuICBzZXQoeCwgeSkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0WCh4KSB7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFkoeSkge1xyXG5cclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0Q29tcG9uZW50KGluZGV4LCB2YWx1ZSkge1xyXG5cclxuICAgIHN3aXRjaCAoIGluZGV4ICkge1xyXG5cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHRoaXMueCA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0R3JhZGllbnQoKSB7XHJcbiAgICBpZiAodGhpcy54ICE9IDApXHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA+IDApXHJcbiAgICAgIHJldHVybiBNYXRoLlBJIC8gMjtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA8IDApXHJcbiAgICAgIHJldHVybiAtTWF0aC5QSSAvIDI7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnQoaW5kZXgpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRleCBpcyBvdXQgb2YgcmFuZ2U6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb3B5KHYpIHtcclxuXHJcbiAgICB0aGlzLnggPSB2Lng7XHJcbiAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFkZFZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICB0aGlzLnkgKz0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFhZKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gYTtcclxuICAgIHRoaXMueSArPSBiO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCArIGIueDtcclxuICAgIHRoaXMueSA9IGEueSArIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCArPSBzO1xyXG4gICAgdGhpcy55ICs9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc3ViKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1YlZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICB0aGlzLnkgLT0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1YlZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCAtIGIueDtcclxuICAgIHRoaXMueSA9IGEueSAtIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtdWx0aXBseVNjYWxhcihzKSB7XHJcblxyXG4gICAgdGhpcy54ICo9IHM7XHJcbiAgICB0aGlzLnkgKj0gcztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBkaXZpZGVTY2FsYXIocykge1xyXG5cclxuICAgIGlmIChzICE9PSAwKSB7XHJcblxyXG4gICAgICB0aGlzLnggLz0gcztcclxuICAgICAgdGhpcy55IC89IHM7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHRoaXMuc2V0KDAsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtaW4odikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPiB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA+IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtYXgodikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPCB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBjbGFtcChtaW4sIG1heCkge1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyBtaW4gPCBtYXgsIGlmIHRoaXMgYXNzdW1wdGlvbiBpc24ndCB0cnVlIGl0IHdpbGwgbm90IG9wZXJhdGUgY29ycmVjdGx5XHJcblxyXG4gICAgaWYgKHRoaXMueCA8IG1pbi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtaW4ueDtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueCA+IG1heC54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtYXgueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IG1pbi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtaW4ueTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueSA+IG1heC55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtYXgueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbmVnYXRlKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKC0xKTtcclxuXHJcbiAgfVxyXG5cclxuICBkb3Qodikge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoU3EoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcclxuXHJcbiAgfVxyXG5cclxuICBsZW5ndGgoKSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG5cclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUbyh2KSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlVG9TcXVhcmVkKHYpKTtcclxuXHJcbiAgfVxyXG5cclxuICByb3RhdGUodGhhKSB7XHJcbiAgICB2YXIgeCA9IHRoaXMueDtcclxuICAgIHZhciB5ID0gdGhpcy55O1xyXG4gICAgdGhpcy54ID0geCAqIE1hdGguY29zKHRoYSkgKyB5ICogTWF0aC5zaW4odGhhKTtcclxuICAgIHRoaXMueSA9IC14ICogTWF0aC5zaW4odGhhKSArIHkgKiBNYXRoLmNvcyh0aGEpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZVRvU3F1YXJlZCh2KSB7XHJcblxyXG4gICAgdmFyIGR4ID0gdGhpcy54IC0gdi54LCBkeSA9IHRoaXMueSAtIHYueTtcclxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRMZW5ndGgobCkge1xyXG5cclxuICAgIHZhciBvbGRMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG5cclxuICAgIGlmIChvbGRMZW5ndGggIT09IDAgJiYgbCAhPT0gb2xkTGVuZ3RoKSB7XHJcblxyXG4gICAgICB0aGlzLm11bHRpcGx5U2NhbGFyKGwgLyBvbGRMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGxlcnAodiwgYWxwaGEpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gKHYueCAtIHRoaXMueCApICogYWxwaGE7XHJcbiAgICB0aGlzLnkgKz0gKHYueSAtIHRoaXMueSApICogYWxwaGE7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZXF1YWxzKHYpIHtcclxuXHJcbiAgICByZXR1cm4gKCh2LnggPT09IHRoaXMueCApICYmICh2LnkgPT09IHRoaXMueSApICk7XHJcblxyXG4gIH1cclxuXHJcbiAgdG9BcnJheSgpIHtcclxuXHJcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMueCA9IDAuMDtcclxuICAgIHRoaXMueSA9IDAuMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XHJcblxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL1ZlY3RvcjJELmpzIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGV7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG51bXBhbiwgdGltZXBhbikge1xyXG4gICAgdGhpcy5udW1QYW4gPSBudW1wYW5cclxuICAgIHRoaXMudGltZVBhbiA9IHRpbWVwYW47XHJcbiAgICB0aGlzLm51bVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoaXMubnVtUGFuKTtcclxuICAgIHRoaXMudGltZVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoaXMudGltZVBhbik7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLm5leHRUaW1lID0gMDtcclxuICAgIHRoaXMuaW5pdCgpOyAgXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5uZXh0VGltZSA9IHRoaXMudGltZVBhbi5nZXRWYWx1ZSgpOyBcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKHRpbWUpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5zdGFydFRpbWUgPj0gdGhpcy5uZXh0VGltZSkge1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICAgIHRoaXMubmV4dFRpbWUgPSB0aGlzLnRpbWVQYW4uZ2V0VmFsdWUoKTtcclxuICAgICAgaWYgKHRoaXMubnVtUGFuLmIgPT0gMSkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bVBhbi5nZXRWYWx1ZShmYWxzZSkgPiAwLjUpXHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1QYW4uZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL1JhdGUuanMiLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcbmltcG9ydCBTcGFuIGZyb20gJy4uL21hdGgvU3Bhbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGluaXRWYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIGEgc3BlY2lmaWMgdmFsdWUsIGNvdWxkIGJlIGV2ZXJ5dGhpbmcgYnV0IG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSBkZWZhdWx0cyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgaW5pdFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgZGVmYXVsdHMpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpID8gdmFsdWUgOiBkZWZhdWx0cztcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgVmVjdG9yMkQgLSBvciBjcmVhdGVzIGEgbmV3IG9uZVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGdldFZlY3RvcjJEXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtRdWFyay5WZWN0b3IyRCB8IE51bWJlcn0gcG9zdGlvbk9yWFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt5XSBqdXN0IHZhbGlkIGlmICdwb3N0aW9uT3JYJyBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7UXVhcmsuVmVjdG9yMkR9XHJcbiAgICAgKi9cclxuICAgIGdldFZlY3RvcjJEOiBmdW5jdGlvbihwb3N0aW9uT3JYLCB5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihwb3N0aW9uT3JYKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGlvbk9yWDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdmVjdG9yMmQgPSBuZXcgVmVjdG9yMkQocG9zdGlvbk9yWCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3IyZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QganVkZ2VWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHBPQkpgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIGZ1bmN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBPQkpcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBqdWRnZVZlY3RvcjJEOiBmdW5jdGlvbihwT0JKKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgneScpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3AnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdwb3NpdGlvbicpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ3AnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2eCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3Z4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndicpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3ZlbG9jaXR5JykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAndic7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdhJykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZScpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ2EnO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFZlY3RvcjJEQnlPYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGB0YXJnZXRgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGBwT0JKYFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwT0JKXHJcbiAgICAgKi9cclxuICAgIHNldFZlY3RvcjJEQnlPYmplY3Q6IGZ1bmN0aW9uKHRhcmdldCwgcE9CSikge1xyXG4gICAgICAgIGlmKHBPQkoueCkgdGFyZ2V0LnAueCA9IHBPQkoueDtcclxuXHJcbiAgICAgICAgaWYocE9CSi55KSB0YXJnZXQucC55ID0gcE9CSi55O1xyXG5cclxuICAgICAgICBpZihwT0JKLnZ4KSB0YXJnZXQudi54ID0gcE9CSi52eDtcclxuICAgICAgICBpZihwT0JKLnZ5KSB0YXJnZXQudi55ID0gcE9CSi52eTtcclxuXHJcbiAgICAgICAgaWYocE9CSi5heCkgdGFyZ2V0LmEueCA9IHBPQkouYXg7XHJcbiAgICAgICAgaWYocE9CSi5heSkgdGFyZ2V0LmEueSA9IHBPQkouYXk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbmV3IFF1YXJrLlNwYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2Qgc2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYSwgYiBhbmQgYyBzaG91bGQgYmUgJ01peGVkJyBvciAnTnVtYmVyJz9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUXVhcmsuU3Bhbn0gYVxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gICAgICAgICAgICAgICBiXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtRdWFyay5TcGFufVxyXG4gICAgICovXHJcbiAgICBzZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gU3Bhbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghYylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSwgYik7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIsIGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGZyb20gYSBRdWFyay5TcGFuLCBpZiB0aGUgcGFyYW0gaXMgbm90IGEgUXVhcmsuU3BhbiBpdCB3aWxsIHJldHVybiB0aGUgZ2l2ZW4gcGFyYW1ldGVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgZ2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZCB8IFF1YXJrLlNwYW59IHBhblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge01peGVkfSB0aGUgdmFsdWUgb2YgUXVhcmsuU3BhbiBPUiB0aGUgcGFyYW1ldGVyIGlmIGl0IGlzIG5vdCBhIFF1YXJrLlNwYW5cclxuICAgICAqL1xyXG4gICAgZ2V0U3BhblZhbHVlOiBmdW5jdGlvbihwYW4pIHtcclxuICAgICAgICBpZiAocGFuLmNvbnN0cnVjdG9yID09PSBTcGFuKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuLmdldFZhbHVlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlZGVmICB7T2JqZWN0fSByZ2JPYmplY3RcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByIHJlZCB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGcgZ3JlZW4gdmFsdWVcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBiIGJsdWUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIHJnYiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBoZXhUb1JHQlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoIGFueSBoZXggdmFsdWUsIGUuZy4gIzAwMDAwMCBvciAwMDAwMDAgZm9yIGJsYWNrXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7cmdiT2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBoZXhUb1JHQjogZnVuY3Rpb24oaCkge1xyXG4gICAgICAgIHZhciBoZXgxNiA9IChoLmNoYXJBdCgwKSA9PSBcIiNcIikgPyBoLnN1YnN0cmluZygxLCA3KSA6IGg7XHJcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoMCwgMiksIDE2KTtcclxuICAgICAgICB2YXIgZyA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygyLCA0KSwgMTYpO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDQsIDYpLCAxNik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IHIsXHJcbiAgICAgICAgICAgIGc6IGcsXHJcbiAgICAgICAgICAgIGI6IGJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29udmVydHMgYSByZ2IgdmFsdWUgdG8gYSByZ2Igc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgcmdiVG9IZXhcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdCB8IFF1YXJrLmhleFRvUkdCfSByZ2IgYSByZ2Igb2JqZWN0IGxpa2UgaW4ge0BsaW5rIFF1YXJrI1F1YXJrLlV0aWwuaGV4VG9SR0J9XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZ2IoKVxyXG4gICAgICovXHJcbiAgICByZ2JUb0hleDogZnVuY3Rpb24ocmJnKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJiZy5yICsgJywgJyArIHJiZy5nICsgJywgJyArIHJiZy5iICsgJyknO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvVXRpbC5qcyIsImltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhbntcclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBjZW50ZXIgPSBmYWxzZSkge1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcclxuXHRcdFx0dGhpcy5pc0FycmF5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5hID0gYTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYSA9IGE7XHJcblx0XHRcdHRoaXMuYiA9IGIgfHwgdGhpcy5hO1xyXG5cdFx0XHR0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFZhbHVlKElOVCl7XHJcblx0XHRpZiAodGhpcy5pc0FycmF5KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmFbTWF0aC5mbG9vcih0aGlzLmEubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCF0aGlzLmNlbnRlcil7XHJcblx0XHRcdFx0cmV0dXJuIHJhbmRvbUFUb0IodGhpcy5hLCB0aGlzLmIsIElOVCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHJldHVybiByYW5kb21GbG9hdGluZyh0aGlzLmEsIHRoaXMuYiwgSU5UKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL1NwYW4uanMiLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tQVRvQihhLCBiLCBJTlQpIHtcclxuICBpZiAoIUlOVClcclxuICAgIHJldHVybiAoYSArIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKSk8PDA7XHJcbiAgZWxzZVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChiIC0gYSkpICsgYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0aW5nKGNlbnRlciwgZiwgSU5UKSB7XHJcbiAgcmV0dXJuIHJhbmRvbUFUb0IoY2VudGVyIC0gZiwgY2VudGVyICsgZiwgSU5UKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZVRyYW5zZm9ybShhKSB7XHJcbiAgcmV0dXJuIGEgKiBNYXRoLlBJIC8gMTgwO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvTWF0aFV0aWxzLmpzIiwiaW1wb3J0IHsgRVVMRVIgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNhbEludGVncmF0aW9uIHtcclxuXHJcbiAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCBFVUxFUjtcclxuICB9XHJcblxyXG4gIGludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZykge1xyXG4gICAgdGhpcy5ldWxlckludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZyk7XHJcbiAgfVxyXG5cclxuICBldWxlckludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZykge1xyXG4gICAgaWYgKCFwYXJ0aWNsZS5zbGVlcCkge1xyXG4gICAgICBwYXJ0aWNsZS5vbGQucC5jb3B5KHBhcnRpY2xlLnApO1xyXG4gICAgICBwYXJ0aWNsZS5vbGQudi5jb3B5KHBhcnRpY2xlLnYpO1xyXG4gICAgICBwYXJ0aWNsZS5hLm11bHRpcGx5U2NhbGFyKDEgLyBwYXJ0aWNsZS5tYXNzKTtcclxuICAgICAgcGFydGljbGUudi5hZGQocGFydGljbGUuYS5tdWx0aXBseVNjYWxhcih0aW1lKSk7XHJcbiAgICAgIHBhcnRpY2xlLnAuYWRkKHBhcnRpY2xlLm9sZC52Lm11bHRpcGx5U2NhbGFyKHRpbWUpKTtcclxuICAgICAgaWYgKGRhbXBpbmcpe1xyXG4gICAgICAgIHBhcnRpY2xlLnYubXVsdGlwbHlTY2FsYXIoZGFtcGluZyk7XHJcbiAgICAgIH1cclxuICAgICAgcGFydGljbGUuYS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbi5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCB7IGRlZ3JlZVRyYW5zZm9ybSB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemVzKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gaW5pdGlhbGl6ZXMubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSBpbml0aWFsaXplc1tpXTtcclxuICAgIGlmIChpbml0aWFsaXplIGluc3RhbmNlb2YgSW5pdGlhbGl6ZSl7XHJcbiAgICAgIGluaXRpYWxpemUuaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0KGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXQoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemUpe1xyXG4gIFV0aWwuc2V0VmVjdG9yMkRCeU9iamVjdChwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcbiAgaWYgKGVtaXR0ZXIuYmluZEVtaXR0ZXIpIHtcclxuICAgIHBhcnRpY2xlLnAuYWRkKGVtaXR0ZXIucCk7XHJcbiAgICBwYXJ0aWNsZS52LmFkZChlbWl0dGVyLnYpO1xyXG4gICAgcGFydGljbGUuYS5hZGQoZW1pdHRlci5hKTtcclxuICAgIHBhcnRpY2xlLnYucm90YXRlKGRlZ3JlZVRyYW5zZm9ybShlbWl0dGVyLnJvdGF0aW9uKSk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRyZXNldCgpIHtcclxuXHJcblx0fVxyXG5cclxuXHRpbml0KGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcblx0XHRpZiAocGFydGljbGUpIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsaXplKHBhcnRpY2xlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShlbWl0dGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKSB7XHJcblxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1pbmlTaWduYWxCaW5kaW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaVNpZ25hbEJpbmRpbmcoZm4sIG9uY2UsIHRoaXNBcmcpIHtcbiAgICBpZiAob25jZSA9PT0gdW5kZWZpbmVkKSBvbmNlID0gZmFsc2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNpZ25hbEJpbmRpbmcpO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9vbmNlID0gb25jZTtcbiAgICB0aGlzLl90aGlzQXJnID0gdGhpc0FyZztcbiAgICB0aGlzLl9uZXh0ID0gdGhpcy5fcHJldiA9IHRoaXMuX293bmVyID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2lnbmFsQmluZGluZywgW3tcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgICBpZiAodGhpcy5fb3duZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX293bmVyLmRldGFjaCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsQmluZGluZztcbn0pKCk7XG5cbmZ1bmN0aW9uIF9hZGRNaW5pU2lnbmFsQmluZGluZyhzZWxmLCBub2RlKSB7XG4gIGlmICghc2VsZi5faGVhZCkge1xuICAgIHNlbGYuX2hlYWQgPSBub2RlO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuX3RhaWwuX25leHQgPSBub2RlO1xuICAgIG5vZGUuX3ByZXYgPSBzZWxmLl90YWlsO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9XG5cbiAgbm9kZS5fb3duZXIgPSBzZWxmO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgTWluaVNpZ25hbCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWwpO1xuXG4gICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbCwgW3tcbiAgICBrZXk6ICdoYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZXJzKCkge1xuICAgICAgdmFyIGV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG5cbiAgICAgIGlmIChleGlzdHMpIHJldHVybiAhIW5vZGU7XG5cbiAgICAgIHZhciBlZSA9IFtdO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBlZS5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhub2RlKSB7XG4gICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgTWluaVNpZ25hbEJpbmRpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNoYXMoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBNaW5pU2lnbmFsQmluZGluZyBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlLl9vd25lciA9PT0gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX29uY2UpIHRoaXMuZGV0YWNoKG5vZGUpO1xuICAgICAgICBub2RlLl9mbi5hcHBseShub2RlLl90aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2FkZCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIGZhbHNlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjb25jZSgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIHRydWUsIHRoaXNBcmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjZGV0YWNoKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuX293bmVyICE9PSB0aGlzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKG5vZGUuX3ByZXYpIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xuICAgICAgaWYgKG5vZGUuX25leHQpIG5vZGUuX25leHQuX3ByZXYgPSBub2RlLl9wcmV2O1xuXG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy5faGVhZCkge1xuICAgICAgICB0aGlzLl9oZWFkID0gbm9kZS5fbmV4dDtcbiAgICAgICAgaWYgKG5vZGUuX25leHQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlID09PSB0aGlzLl90YWlsKSB7XG4gICAgICAgIHRoaXMuX3RhaWwgPSBub2RlLl9wcmV2O1xuICAgICAgICB0aGlzLl90YWlsLl9uZXh0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoQWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoQWxsKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdGhpcztcblxuICAgICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSBudWxsO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBub2RlLl9vd25lciA9IG51bGw7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTaWduYWw7XG59KSgpO1xuXG5NaW5pU2lnbmFsLk1pbmlTaWduYWxCaW5kaW5nID0gTWluaVNpZ25hbEJpbmRpbmc7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1pbmlTaWduYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9taW5pLXNpZ25hbHMvbGliL21pbmktc2lnbmFscy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlJztcclxuaW1wb3J0IFZlbG9jaXR5IGZyb20gJy4vVmVsb2NpdHknO1xyXG5pbXBvcnQgTGlmZSBmcm9tICcuL0xpZmUnO1xyXG5pbXBvcnQgTWFzcyBmcm9tICcuL01hc3MnO1xyXG5pbXBvcnQgUmFkaXVzIGZyb20gJy4vUmFkaXVzJztcclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IHsgUmF0ZSwgVmVsb2NpdHksIExpZmUsIE1hc3MsIFJhZGl1cywgUG9zaXRpb24gfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9pbmRleC5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCB7IE1FQVNVUkUgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuaW1wb3J0IFBvbGFyMkQgZnJvbSAnLi4vbWF0aC9Qb2xhcjJEJztcclxuaW1wb3J0IHsgcmFuZG9tQVRvQiwgcmFuZG9tRmxvYXRpbmcgfSBmcm9tICcuLi9tYXRoL01hdGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWxvY2l0eSBleHRlbmRzIEluaXRpYWxpemV7XHJcblx0Y29uc3RydWN0b3IocnBhbiwgdGhhcGFuLCB0eXBlKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuclBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHJwYW4pO1xyXG5cdFx0dGhpcy50aGFQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGFwYW4pO1xyXG5cdFx0dGhpcy50eXBlID0gVXRpbC5pbml0VmFsdWUodHlwZSwgJ3ZlY3RvcicpO1xyXG5cclxuXHRcdC8vIHNwZWVkIG9wdGltaXphdGlvbnNcclxuXHRcdHRoaXMuUE9MQVIgPSAncG9sYXInO1xyXG5cdFx0dGhpcy5QID0gJ3AnO1xyXG5cdFx0dGhpcy5yUGFuVmFsID0gdGhpcy5yUGFuLmdldFZhbHVlKCk7XHJcblx0XHR0aGlzLm5vcm1hbGl6ZWRQSSA9IE1hdGguUEkgLyAxODA7XHJcblx0fVxyXG5cclxuXHRyZXNldChycGFuLCB0aGFwYW4sIHR5cGUpIHtcclxuXHRcdHRoaXMuclBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHJwYW4pO1xyXG5cdFx0dGhpcy50aGFQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGFwYW4pO1xyXG5cdFx0dGhpcy50eXBlID0gVXRpbC5pbml0VmFsdWUodHlwZSwgJ3ZlY3RvcicpO1xyXG5cdH1cclxuXHJcblx0bm9ybWFsaXplVmVsb2NpdHkodnIpIHtcclxuXHRcdHJldHVybiB2ciAqIE1FQVNVUkU7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHRhcmdldCkge1xyXG5cdFx0aWYgKHRoaXMudHlwZSA9PSB0aGlzLlAgfHwgdGhpcy50eXBlID09IHRoaXMuUCB8fCB0aGlzLnR5cGUgPT0gdGhpcy5QT0xBUikge1xyXG5cdFx0XHRjb25zdCB0aGFQYW5Ob3JtID0gcmFuZG9tQVRvQih0aGlzLnRoYVBhbi5hLCB0aGlzLnRoYVBhbi5iKSp0aGlzLm5vcm1hbGl6ZWRQSTtcclxuXHRcdFx0Y29uc3QgcG9sYXIyZCA9IG5ldyBQb2xhcjJEKHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy5yUGFuVmFsKSwgdGhhUGFuTm9ybSk7XHJcblx0XHRcdHRhcmdldC52LnggPSBwb2xhcjJkLmdldFgoKTtcclxuXHRcdFx0dGFyZ2V0LnYueSA9IHBvbGFyMmQuZ2V0WSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFyZ2V0LnYueCA9IHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy5yUGFuLmdldFZhbHVlKCkpO1xyXG5cdFx0XHR0YXJnZXQudi55ID0gdGhpcy5ub3JtYWxpemVWZWxvY2l0eSh0aGlzLnRoYVBhbi5nZXRWYWx1ZSgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9WZWxvY2l0eS5qcyIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbGFyMkQge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyLCB0aGEpe1xyXG5cdFx0dGhpcy5yID0gTWF0aC5hYnMocikgfHwgMDtcclxuXHRcdHRoaXMudGhhID0gdGhhIHx8IDA7XHJcblx0fVxyXG5cclxuXHRzZXQociwgdGhhKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHRoaXMudGhhID0gdGhhO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0UihyKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFRoYSh0aGEpIHtcclxuXHJcblx0XHR0aGlzLnRoYSA9IHRoYTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRjb3B5KHApIHtcclxuXHJcblx0XHR0aGlzLnIgPSBwLnI7XHJcblx0XHR0aGlzLnRoYSA9IHAudGhhO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHRvVmVjdG9yKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0WCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnRoYSk7XHJcblx0fVxyXG5cclxuXHRnZXRZKCkge1xyXG5cdFx0cmV0dXJuIC10aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnRoYSk7XHJcblx0fVxyXG5cclxuXHRub3JtYWxpemUoKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gMTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0ZXF1YWxzKHYpIHtcclxuXHJcblx0XHRyZXR1cm4gKCh2LnIgPT09IHRoaXMuciApICYmICh2LnRoYSA9PT0gdGhpcy50aGEgKSApO1xyXG5cclxuXHR9XHJcblxyXG5cdHRvQXJyYXkoKSB7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLnIsIHRoaXMudGhhXTtcclxuXHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuciA9IDAuMDtcclxuXHRcdHRoaXMudGhhID0gMC4wO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRjbG9uZSgpIHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFBvbGFyMkQodGhpcy5yLCB0aGlzLnRoYSk7XHJcblxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9Qb2xhcjJELmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZmUgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubGlmZVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdGlmICh0aGlzLmxpZmVQYW4uYSA9PSBJbmZpbml0eSl7XHJcblx0XHRcdHRhcmdldC5saWZlID0gSW5maW5pdHk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGFyZ2V0LmxpZmUgPSB0aGlzLmxpZmVQYW4uZ2V0VmFsdWUoKTtcdFxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0xpZmUuanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzcyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFzc1BhbiA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUodGFyZ2V0KSB7XHJcbiAgICAgICAgdGFyZ2V0Lm1hc3MgPSB0aGlzLm1hc3NQYW4uZ2V0VmFsdWUoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL01hc3MuanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaXVzIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XHJcbiAgICBcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yYWRpdXMgPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldChhLCBiLCBjKXtcclxuXHRcdHRoaXMucmFkaXVzID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUucmFkaXVzID0gdGhpcy5yYWRpdXMuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5vbGRSYWRpdXMgPSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvUmFkaXVzLmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih6b25lKSB7XHJcbiAgICBcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy56b25lID0gem9uZSB8fCBuZXcgUG9pbnRab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoem9uZSl7XHJcblx0XHR0aGlzLnpvbmUgPSB6b25lIHx8IG5ldyBQb2ludFpvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHRhcmdldCkge1xyXG5cdFx0dGhpcy56b25lLmdldFBvc2l0aW9uKCk7XHJcblx0XHR0YXJnZXQucC54ID0gdGhpcy56b25lLnZlY3Rvci54O1xyXG5cdFx0dGFyZ2V0LnAueSA9IHRoaXMuem9uZS52ZWN0b3IueTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyBNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aDtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQ7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSAnZGVhZCcpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSAnYm91bmQnKSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLngpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnggPSB0aGlzLnggKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnggPSB0aGlzLnggKyB0aGlzLndpZHRoIC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueCAqPSAtMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnkgKj0gLTE7XHJcblx0XHRcdH0gZWxzZSBpZiAocGFydGljbGUucC55ICsgcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnkgKj0gLTE7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gJ2Nyb3NzJykge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54ICYmIHBhcnRpY2xlLnYueCA8PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGggJiYgcGFydGljbGUudi54ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54IC0gcGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSAmJiBwYXJ0aWNsZS52LnkgPD0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcGFydGljbGUudi55ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL1JlY3Rab25lLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy52ZWN0b3IgPSBuZXcgUHJvdG9uLlZlY3RvcjJEKDAsIDApO1xyXG5cdFx0dGhpcy5yYW5kb20gPSAwO1xyXG5cdFx0dGhpcy5jcm9zc1R5cGUgPSAnZGVhZCc7XHJcblx0XHR0aGlzLmFsZXJ0ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL1pvbmUuanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLng7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRhbGVydCgnU29ycnkgUG9pbnRab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3NpbmcgbWV0aG9kJyk7XHJcblx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9Qb2ludFpvbmUuanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZVpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeDEsIHkxLCB4MiwgeTIsIGRpcmVjdGlvbikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoeDIgLSB4MSA+PSAwKSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MTtcclxuXHRcdFx0dGhpcy55MSA9IHkxO1xyXG5cdFx0XHR0aGlzLngyID0geDI7XHJcblx0XHRcdHRoaXMueTIgPSB5MjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MjtcclxuXHRcdFx0dGhpcy55MSA9IHkyO1xyXG5cdFx0XHR0aGlzLngyID0geDE7XHJcblx0XHRcdHRoaXMueTIgPSB5MTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZHggPSB0aGlzLngyIC0gdGhpcy54MTtcclxuXHRcdHRoaXMuZHkgPSB0aGlzLnkyIC0gdGhpcy55MTtcclxuXHRcdHRoaXMubWlueCA9IE1hdGgubWluKHRoaXMueDEsIHRoaXMueDIpO1xyXG5cdFx0dGhpcy5taW55ID0gTWF0aC5taW4odGhpcy55MSwgdGhpcy55Mik7XHJcblx0XHR0aGlzLm1heHggPSBNYXRoLm1heCh0aGlzLngxLCB0aGlzLngyKTtcclxuXHRcdHRoaXMubWF4eSA9IE1hdGgubWF4KHRoaXMueTEsIHRoaXMueTIpO1xyXG5cdFx0dGhpcy5kb3QgPSB0aGlzLngyICogdGhpcy55MSAtIHRoaXMueDEgKiB0aGlzLnkyO1xyXG5cdFx0dGhpcy54eHl5ID0gdGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keTtcclxuXHRcdHRoaXMuZ3JhZGllbnQgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCAnPic7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMucmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLngxICsgdGhpcy5yYW5kb20gKiB0aGlzLmxlbmd0aCAqIE1hdGguY29zKHRoaXMuZ3JhZGllbnQpO1xyXG5cdFx0dGhpcy52ZWN0b3IueSA9IHRoaXMueTEgKyB0aGlzLnJhbmRvbSAqIHRoaXMubGVuZ3RoICogTWF0aC5zaW4odGhpcy5ncmFkaWVudCk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImRlYWRcIikge1xyXG5cdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCI+XCIgfHwgdGhpcy5kaXJlY3Rpb24gPT0gXCJSXCIgfHwgdGhpcy5kaXJlY3Rpb24gPT0gXCJyaWdodFwiIHx8IHRoaXMuZGlyZWN0aW9uID09IFwiZG93blwiKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJib3VuZFwiKSB7XHJcblx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChzZWxmLmdldERpc3RhbmNlKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSA8PSBwYXJ0aWNsZS5yYWRpdXMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmR4ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLmR5ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5nZXRTeW1tZXRyaWMocGFydGljbGUudik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJjcm9zc1wiKSB7XHJcblx0XHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5IGxpbmVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXREaXJlY3Rpb24oeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IEIgPT0gMCA/IDEgOiBCO1xyXG5cdFx0aWYgKChBICogeCArIEIgKiB5ICsgQykgKiBEID4gMClcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGlzdGFuY2UoeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IChBICogeCArIEIgKiB5ICsgQyk7XHJcblx0XHRyZXR1cm4gRCAvIE1hdGguc3FydCh0aGlzLnh4eXkpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3ltbWV0cmljKHYpIHtcclxuXHRcdHZhciB0aGEyID0gdi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhID0gMiAqICh0aGExIC0gdGhhMik7XHJcblx0XHR2YXIgb2xkeCA9IHYueDtcclxuXHRcdHZhciBvbGR5ID0gdi55O1xyXG5cdFx0di54ID0gb2xkeCAqIE1hdGguY29zKHRoYSkgLSBvbGR5ICogTWF0aC5zaW4odGhhKTtcclxuXHRcdHYueSA9IG9sZHggKiBNYXRoLnNpbih0aGEpICsgb2xkeSAqIE1hdGguY29zKHRoYSk7XHJcblx0XHRyZXR1cm4gdjtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KCkge1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIodGhpcy5keSwgdGhpcy5keCk7XHJcblx0fVxyXG5cclxuXHRnZXRSYW5nZShwYXJ0aWNsZSwgZnVuKSB7XHJcblx0XHR2YXIgYW5nbGUgPSBNYXRoLmFicyh0aGlzLmdldEdyYWRpZW50KCkpO1xyXG5cdFx0aWYgKGFuZ2xlIDw9IE1hdGguUEkgLyA0KSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnggPCB0aGlzLm1heHggJiYgcGFydGljbGUucC54ID4gdGhpcy5taW54KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgPCB0aGlzLm1heHkgJiYgcGFydGljbGUucC55ID4gdGhpcy5taW55KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldExlbmd0aCgpIHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keSlcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJkZWFkXCIpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09IFwiPlwiIHx8IHRoaXMuZGlyZWN0aW9uID09IFwiUlwiIHx8IHRoaXMuZGlyZWN0aW9uID09IFwicmlnaHRcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PSBcImRvd25cIikge1xyXG5cdFx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGYuZ2V0RGlyZWN0aW9uKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSlcclxuXHRcdFx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmdldFJhbmdlKHBhcnRpY2xlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICghc2VsZi5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiYm91bmRcIikge1xyXG5cdFx0XHR0aGlzLmdldFJhbmdlKHBhcnRpY2xlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoc2VsZi5nZXREaXN0YW5jZShwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkgPD0gcGFydGljbGUucmFkaXVzKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5keCA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLnYueCAqPSAtMTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2VsZi5keSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuZ2V0U3ltbWV0cmljKHBhcnRpY2xlLnYpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiY3Jvc3NcIikge1xyXG5cdFx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeSBsaW5lWm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG1ldGhvZCcpO1xyXG5cdFx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL0xpbmVab25lLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihpbWFnZURhdGEsIHgsIHksIGQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnJlc2V0KGltYWdlRGF0YSwgeCwgeSwgZCk7XHJcblx0fVxyXG5cclxuXHRyZXNldChpbWFnZURhdGEsIHgsIHksIGQpIHtcclxuXHRcdHRoaXMuaW1hZ2VEYXRhID0gaW1hZ2VEYXRhO1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLmQgPSBkIHx8IDI7XHJcblx0XHR0aGlzLnZlY3RvcnMgPSBbXTtcclxuXHRcdHRoaXMuc2V0VmVjdG9ycygpO1xyXG5cdH1cclxuXHJcblx0c2V0VmVjdG9ycygpIHtcclxuXHRcdHZhciBpLCBqO1xyXG5cdFx0dmFyIGxlbmd0aDEgPSB0aGlzLmltYWdlRGF0YS53aWR0aDtcclxuXHRcdHZhciBsZW5ndGgyID0gdGhpcy5pbWFnZURhdGEuaGVpZ2h0O1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGgxOyBpICs9IHRoaXMuZCkge1xyXG5cdFx0XHRmb3IgKCBqID0gMDsgaiA8IGxlbmd0aDI7IGogKz0gdGhpcy5kKSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gKChqID4+IDApICogbGVuZ3RoMSArIChpID4+IDApKSAqIDQ7XHJcblx0XHRcdFx0aWYgKHRoaXMuaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMudmVjdG9ycy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0eCA6IGkgKyB0aGlzLngsXHJcblx0XHRcdFx0XHRcdHkgOiBqICsgdGhpcy55XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGdldEJvdW5kKHgsIHkpIHtcclxuXHRcdHZhciBpbmRleCA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcclxuXHRcdGlmICh0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPiAwKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3IuY29weSh0aGlzLnZlY3RvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy52ZWN0b3JzLmxlbmd0aCldKTtcclxuXHR9XHJcblxyXG5cdGdldENvbG9yKHgsIHkpIHtcclxuXHRcdHggLT0gdGhpcy54O1xyXG5cdFx0eSAtPSB0aGlzLnk7XHJcblx0XHR2YXIgaSA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHIgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2ldLFxyXG5cdFx0XHRnIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgMV0sXHJcblx0XHRcdGIgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAyXSxcclxuXHRcdFx0YSA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDNdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImRlYWRcIikge1xyXG5cdFx0XHRpZiAodGhpcy5nZXRCb3VuZChwYXJ0aWNsZS5wLnggLSB0aGlzLngsIHBhcnRpY2xlLnAueSAtIHRoaXMueSkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gZmFsc2U7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiYm91bmRcIikge1xyXG5cdFx0XHRpZiAoIXRoaXMuZ2V0Qm91bmQocGFydGljbGUucC54IC0gdGhpcy54LCBwYXJ0aWNsZS5wLnkgLSB0aGlzLnkpKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnYubmVnYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvSW1hZ2Vab25lLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cdFx0dGhpcy5hbmdsZSA9IDA7XHJcblx0XHR0aGlzLmNlbnRlciA9IHtcclxuXHRcdFx0eCA6IHRoaXMueCxcclxuXHRcdFx0eSA6IHRoaXMueVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyB0aGlzLnJhbmRvbSAqIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55ICsgdGhpcy5yYW5kb20gKiB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0c2V0Q2VudGVyKHgsIHkpIHtcclxuXHRcdHRoaXMuY2VudGVyLnggPSB4O1xyXG5cdFx0dGhpcy5jZW50ZXIueSA9IHk7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIGQgPSBwYXJ0aWNsZS5wLmRpc3RhbmNlVG8odGhpcy5jZW50ZXIpO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiZGVhZFwiKSB7XHJcblx0XHRcdGlmIChkIC0gcGFydGljbGUucmFkaXVzID4gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiYm91bmRcIikge1xyXG5cdFx0XHRpZiAoZCArIHBhcnRpY2xlLnJhZGl1cyA+PSB0aGlzLnJhZGl1cylcclxuXHRcdFx0XHR0aGlzLmdldFN5bW1ldHJpYyhwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiY3Jvc3NcIikge1xyXG5cdFx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeSBDaXJjbGVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWMocGFydGljbGUpIHtcclxuXHRcdHZhciB0aGEyID0gcGFydGljbGUudi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KHBhcnRpY2xlKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gcGFydGljbGUudi54O1xyXG5cdFx0dmFyIG9sZHkgPSBwYXJ0aWNsZS52Lnk7XHJcblx0XHRwYXJ0aWNsZS52LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0cGFydGljbGUudi55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KHBhcnRpY2xlKSB7XHJcblx0XHRyZXR1cm4gLU1hdGguUEkgLyAyICsgTWF0aC5hdGFuMihwYXJ0aWNsZS5wLnkgLSB0aGlzLmNlbnRlci55LCBwYXJ0aWNsZS5wLnggLSB0aGlzLmNlbnRlci54KTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbHBoYSBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHJcblx0XHR0aGlzLnJlc2V0KGEsIGIsIHRoaXMubGlmZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkFscGhhXCI7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnYScgYW5kICdiJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGFcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gYlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1RdWFyay5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRpZiAoYiA9PSBudWxsIHx8IGIgPT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0dGhpcy5zYW1lID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hID0gVXRpbC5zZXRTcGFuVmFsdWUoYSB8fCAxKTtcclxuXHRcdHRoaXMuYiA9IFV0aWwuc2V0U3BhblZhbHVlKGIpO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgbmV3IGFscGhhIHZhbHVlIG9mIHRoZSBwYXJ0aWNsZVxyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBpbml0aWFsaXplXHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1F1YXJrLlBhcnRpY2xlfSBwYXJ0aWNsZSBBIHNpbmdsZSBRdWFyayBnZW5lcmF0ZWQgcGFydGljbGVcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBID0gdGhpcy5hLmdldFZhbHVlKCk7XHJcblx0XHRpZiAodGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQiA9IHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCID0gdGhpcy5iLmdldFZhbHVlKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtRdWFyay5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuIFx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuYWxwaGEgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCICsgKHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUEgLSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCKSAqIHRoaXMuZW5lcmd5O1xyXG5cdFx0aWYgKHBhcnRpY2xlLmFscGhhIDwgMC4wMDEpXHJcblx0XHRcdHBhcnRpY2xlLmFscGhhID0gMDtcclxuXHR9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQWxwaGEuanMiLCJpbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgeyBNRUFTVVJFIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XHJcbmltcG9ydCBnZXRFYXNpbmdCeU5hbWUgZnJvbSAnLi4vbWF0aC9lYXNlJztcclxuXHJcblxyXG5jb25zdCBCRUhBVklPVVJfSURfQkFTRSA9IDB4RkZGRkY7XHJcbmxldCB1aWQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IobGlmZSwgZWFzaW5nID0gJ2Vhc2VMaW5lYXInKSB7XHJcblx0XHR0aGlzLmlkID0gQkVIQVZJT1VSX0lEX0JBU0UgKyB1aWQrKztcclxuXHRcdHRoaXMubGlmZSA9IGxpZmUgfHwgSW5maW5pdHk7XHJcblx0XHR0aGlzLmVhc2luZyA9IGdldEVhc2luZ0J5TmFtZShlYXNpbmcpO1xyXG5cdFx0dGhpcy5hZ2UgPSAwO1xyXG5cdFx0dGhpcy5lbmVyZ3kgPSAxO1xyXG5cdFx0dGhpcy5kZWFkID0gZmFsc2U7XHJcblx0XHR0aGlzLnBhcmVudHMgPSBbXTtcclxuXHRcdHRoaXMubmFtZSA9ICdCZWhhdmlvdXInO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQobGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLmxpZmUgPSBsaWZlIHx8IEluZmluaXR5O1xyXG5cdFx0dGhpcy5lYXNpbmcgPSBlYXNpbmcgfHwgZ2V0RWFzaW5nQnlOYW1lKCdlYXNlTGluZWFyJyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBOb3JtYWxpemUgYSBmb3JjZSBieSAxOjEwMDtcclxuXHQgKlxyXG5cdCAqIEBtZXRob2Qgbm9ybWFsaXplRm9yY2VcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uVmVjdG9yMkR9IGZvcmNlIFxyXG5cdCAqL1xyXG5cdG5vcm1hbGl6ZUZvcmNlKGZvcmNlKSB7XHJcblx0XHRyZXR1cm4gZm9yY2UubXVsdGlwbHlTY2FsYXIoTUVBU1VSRSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBOb3JtYWxpemUgYSB2YWx1ZSBieSAxOjEwMDtcclxuXHQgKlxyXG5cdCAqIEBtZXRob2Qgbm9ybWFsaXplVmFsdWVcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXHJcblx0ICovXHJcblx0bm9ybWFsaXplVmFsdWUodmFsdWUpIHtcclxuXHRcdHJldHVybiB2YWx1ZSAqIE1FQVNVUkU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXplIHRoZSBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzIGZvciBhbGwgcGFydGljbGVzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGluaXRpYWxpemVcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICovXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0dGhpcy5hZ2UgKz0gdGltZTtcclxuXHRcdGlmICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUgfHwgdGhpcy5kZWFkKSB7XHJcblx0XHRcdHRoaXMuZW5lcmd5ID0gMDtcclxuXHRcdFx0dGhpcy5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5kZXN0cm95KCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgc2NhbGUgPSB0aGlzLmVhc2luZyhwYXJ0aWNsZS5hZ2UgLyBwYXJ0aWNsZS5saWZlKTtcclxuXHRcdFx0dGhpcy5lbmVyZ3kgPSBNYXRoLm1heCgxIC0gc2NhbGUsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvKipcclxuXHQgKiBEZXN0b3J5IHRoaXMgYmVoYXZpb3VyXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGRlc3Ryb3lcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqL1xyXG5cdGRlc3Ryb3koKSB7XHJcblx0XHR2YXIgaW5kZXg7XHJcblx0XHR2YXIgbGVuZ3RoID0gdGhpcy5wYXJlbnRzLmxlbmd0aCwgaTtcclxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5wYXJlbnRzW2ldLnJlbW92ZUJlaGF2aW91cih0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnBhcmVudHMgPSBbXTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0JlaGF2aW91ci5qcyIsImNvbnN0IGVhc2luZyA9IHtcclxuXHRlYXNlTGluZWFyIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5RdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5wb3coKHZhbHVlIC0gMSksIDIpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0UXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3codmFsdWUsIDIpO1xyXG5cdFx0cmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgLSAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5DdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5wb3codmFsdWUsIDMpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRDdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKE1hdGgucG93KCh2YWx1ZSAtIDEpLCAzKSArIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgMyk7XHJcblx0XHRyZXR1cm4gMC41ICogKE1hdGgucG93KCh2YWx1ZSAtIDIpLCAzKSArIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgNCk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtKE1hdGgucG93KCh2YWx1ZSAtIDEpLCA0KSAtIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dFF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgNCk7XHJcblx0XHRyZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiBNYXRoLnBvdyh2YWx1ZSwgMykgLSAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5TaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtTWF0aC5jb3ModmFsdWUgKiAoTWF0aC5QSSAvIDIpKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguc2luKHZhbHVlICogKE1hdGguUEkgLyAyKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0U2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSAtIDEpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5FeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPT09IDApID8gMCA6IE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRFeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPT09IDEpID8gMSA6IC1NYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKyAxO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdGlmICh2YWx1ZSA9PT0gMSlcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSk7XHJcblx0XHRyZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXZhbHVlKSArIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkNpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSAodmFsdWUgKiB2YWx1ZSkpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dENpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coKHZhbHVlIC0gMSksIDIpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRDaXJjIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcclxuXHRcdHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcclxuXHR9LFxyXG5cdFxyXG5cdGVhc2VJbkJhY2sgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dmFyIHMgPSAxLjcwMTU4O1xyXG5cdFx0cmV0dXJuICh2YWx1ZSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0QmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gKCB2YWx1ZSA9IHZhbHVlIC0gMSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0QmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB2YWx1ZSAtIHMpKTtcclxuXHRcdHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XHJcblx0fSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RWFzaW5nQnlOYW1lKG5hbWUpIHtcclxuXHRyZXR1cm4gZWFzaW5nW25hbWVdXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvZWFzZS5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyYWN0aW9uIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHJcblx0XHR0aGlzLnRhcmdldFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb24gfHwgbmV3IFZlY3RvcjJEO1xyXG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTAwMDtcclxuXHRcdHRoaXMuZm9yY2UgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKGZvcmNlKSB8fCAxMDA7XHJcblx0XHR0aGlzLnJhZGl1c1NxID0gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1c1xyXG5cdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdHRoaXMubGVuZ3RoU3EgPSAwO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJBdHRyYWN0aW9uXCI7XHJcblx0XHRcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5BdHRyYWN0aW9uXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yICdmb3JjZScgYW5kICdyYWRpdXMnXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gdGFyZ2V0UG9zaXRpb24gdGhlIGF0dHJhY3Rpb24gcG9pbnQgY29vcmRpbmF0ZXNcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2ZvcmNlPTEwMF1cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3JhZGl1cz0xMDAwXVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1Qcm90b24uZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMudGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbiB8fCBuZXcgUHJvdG9uLlZlY3RvcjJEO1xyXG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTAwMDtcclxuXHRcdHRoaXMuZm9yY2UgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKGZvcmNlKSB8fCAxMDA7XHJcblx0XHR0aGlzLnJhZGl1c1NxID0gdGhpcy5yYWRpdXMgKiB0aGlzLnJhZGl1c1xyXG5cdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdHRoaXMubGVuZ3RoU3EgPSAwO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQXR0cmFjdGlvblxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5jb3B5KHRoaXMudGFyZ2V0UG9zaXRpb24pO1xyXG5cdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2Uuc3ViKHBhcnRpY2xlLnApO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IHRoaXMuYXR0cmFjdGlvbkZvcmNlLmxlbmd0aFNxKCk7XHJcblx0XHRpZiAodGhpcy5sZW5ndGhTcSA+IDAuMDAwMDA0ICYmIHRoaXMubGVuZ3RoU3EgPCB0aGlzLnJhZGl1c1NxKSB7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm5vcm1hbGl6ZSgpO1xyXG5cdFx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5tdWx0aXBseVNjYWxhcigxIC0gdGhpcy5sZW5ndGhTcSAvIHRoaXMucmFkaXVzU3EpO1xyXG5cdFx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5tdWx0aXBseVNjYWxhcih0aGlzLmZvcmNlKTtcclxuXHRcdFx0cGFydGljbGUuYS5hZGQodGhpcy5hdHRyYWN0aW9uRm9yY2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0F0dHJhY3Rpb24uanMiLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlzaW9uIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZW1pdHRlciwgbWFzcywgY2FsbGJhY2ssIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoZW1pdHRlciwgbWFzcywgY2FsbGJhY2spO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJDb2xsaXNpb25cIjtcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiB0byBtYXNzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5FbWl0dGVyfSBcdFtlbWl0dGVyPW51bGxdIFx0XHR0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xyXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gXHRcdFttYXNzPXRydWVdXHRcdFx0XHJcblx0ICogQHBhcmFtIHtDYWxsYmFja31cdCBcdFtjYWxsYmFjaz1udWxsXVx0XHR0aGUgY2FsbGJhY2sgYWZ0ZXIgdGhlIGNvbGxpc2lvblxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHRbbGlmZT1JbmZpbml0eV0gXHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1Qcm90b24uZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KGVtaXR0ZXIsIG1hc3MsIGNhbGxiYWNrLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMuZW1pdHRlciA9IGVtaXR0ZXIgfHwgbnVsbDtcclxuXHRcdHRoaXMubWFzcyA9IG1hc3MgfHwgdHJ1ZTtcclxuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xyXG5cdFx0dGhpcy5jb2xsaXNpb25Qb29sID0gW107XHJcblx0XHR0aGlzLmRlbHRhID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5Db2xsaXNpb25cclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdGxldCBuZXdQb29sID0gdGhpcy5lbWl0dGVyLnBhcnRpY2xlcy5zbGljZShpbmRleCk7XHJcblx0XHRsZXQgb3RoZXJQYXJ0aWNsZTtcclxuXHRcdGxldCBsZW5ndGhTcTtcclxuXHRcdGxldCBvdmVybGFwO1xyXG5cdFx0bGV0IGF2ZXJhZ2VNYXNzMSwgYXZlcmFnZU1hc3MyO1xyXG5cdFx0bGV0IGxlbmd0aCA9IG5ld1Bvb2wubGVuZ3RoO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRvdGhlclBhcnRpY2xlID0gbmV3UG9vbFtpXTtcclxuXHRcdFx0aWYgKG90aGVyUGFydGljbGUgIT09IHBhcnRpY2xlKSB7XHJcblx0XHRcdFx0dGhpcy5kZWx0YS5jb3B5KG90aGVyUGFydGljbGUucCk7XHJcblx0XHRcdFx0dGhpcy5kZWx0YS5zdWIocGFydGljbGUucCk7XHJcblx0XHRcdFx0bGVuZ3RoU3EgPSB0aGlzLmRlbHRhLmxlbmd0aFNxKCk7XHJcblx0XHRcdFx0Y29uc3QgZGlzdGFuY2UgPSBwYXJ0aWNsZS5yYWRpdXMgKyBvdGhlclBhcnRpY2xlLnJhZGl1cztcclxuXHJcblx0XHRcdFx0aWYgKGxlbmd0aFNxIDw9IGRpc3RhbmNlICogZGlzdGFuY2UpIHtcclxuXHRcdFx0XHRcdG92ZXJsYXAgPSBkaXN0YW5jZSAtIE1hdGguc3FydChsZW5ndGhTcSk7XHJcblx0XHRcdFx0XHRvdmVybGFwICs9IDAuNTtcclxuXHRcdFx0XHRcdGNvbnN0IHRvdGFsTWFzcyA9IHBhcnRpY2xlLm1hc3MgKyBvdGhlclBhcnRpY2xlLm1hc3M7XHJcblx0XHRcdFx0XHRhdmVyYWdlTWFzczEgPSB0aGlzLm1hc3MgPyBvdGhlclBhcnRpY2xlLm1hc3MgLyB0b3RhbE1hc3MgOiAwLjU7XHJcblx0XHRcdFx0XHRhdmVyYWdlTWFzczIgPSB0aGlzLm1hc3MgPyBwYXJ0aWNsZS5tYXNzIC8gdG90YWxNYXNzIDogMC41O1xyXG5cdFx0XHRcdFx0cGFydGljbGUucC5hZGQodGhpcy5kZWx0YS5jbG9uZSgpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKG92ZXJsYXAgKiAtYXZlcmFnZU1hc3MxKSk7XHJcblx0XHRcdFx0XHRvdGhlclBhcnRpY2xlLnAuYWRkKHRoaXMuZGVsdGEubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIGF2ZXJhZ2VNYXNzMikpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FsbGJhY2spe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhbGxiYWNrKHBhcnRpY2xlLCBvdGhlclBhcnRpY2xlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0NvbGxpc2lvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=