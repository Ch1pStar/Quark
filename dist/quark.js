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
	exports.Scale = exports.Rotate = exports.RandomDrift = exports.GravityWell = exports.Gravity = exports.Force = exports.CrossZone = exports.Repulsion = exports.Collision = exports.Attraction = exports.Alpha = exports.CircleZone = exports.ImageZone = exports.LineZone = exports.PointZone = exports.RectZone = exports.Span = undefined;
	
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
	
	var _PointZone = __webpack_require__(26);
	
	var _PointZone2 = _interopRequireDefault(_PointZone);
	
	var _LineZone = __webpack_require__(27);
	
	var _LineZone2 = _interopRequireDefault(_LineZone);
	
	var _ImageZone = __webpack_require__(28);
	
	var _ImageZone2 = _interopRequireDefault(_ImageZone);
	
	var _CircleZone = __webpack_require__(29);
	
	var _CircleZone2 = _interopRequireDefault(_CircleZone);
	
	var _Alpha = __webpack_require__(30);
	
	var _Alpha2 = _interopRequireDefault(_Alpha);
	
	var _Attraction = __webpack_require__(31);
	
	var _Attraction2 = _interopRequireDefault(_Attraction);
	
	var _Collision = __webpack_require__(32);
	
	var _Collision2 = _interopRequireDefault(_Collision);
	
	var _Repulsion = __webpack_require__(33);
	
	var _Repulsion2 = _interopRequireDefault(_Repulsion);
	
	var _CrossZone = __webpack_require__(23);
	
	var _CrossZone2 = _interopRequireDefault(_CrossZone);
	
	var _Force = __webpack_require__(34);
	
	var _Force2 = _interopRequireDefault(_Force);
	
	var _Gravity = __webpack_require__(35);
	
	var _Gravity2 = _interopRequireDefault(_Gravity);
	
	var _GravityWell = __webpack_require__(36);
	
	var _GravityWell2 = _interopRequireDefault(_GravityWell);
	
	var _RandomDrift = __webpack_require__(37);
	
	var _RandomDrift2 = _interopRequireDefault(_RandomDrift);
	
	var _Rotate = __webpack_require__(38);
	
	var _Rotate2 = _interopRequireDefault(_Rotate);
	
	var _Scale = __webpack_require__(39);
	
	var _Scale2 = _interopRequireDefault(_Scale);
	
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
	exports.Repulsion = _Repulsion2.default;
	exports.CrossZone = _CrossZone2.default;
	exports.Force = _Force2.default;
	exports.Gravity = _Gravity2.default;
	exports.GravityWell = _GravityWell2.default;
	exports.RandomDrift = _RandomDrift2.default;
	exports.Rotate = _Rotate2.default;
	exports.Scale = _Scale2.default;
	
	
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
	
	var _Particle2 = __webpack_require__(4);
	
	var _Particle3 = _interopRequireDefault(_Particle2);
	
	var _Rate = __webpack_require__(6);
	
	var _Rate2 = _interopRequireDefault(_Rate);
	
	var _NumericalIntegration = __webpack_require__(10);
	
	var _NumericalIntegration2 = _interopRequireDefault(_NumericalIntegration);
	
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
	
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	
	    var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));
	
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
	
	    _this.maxParticles = 50000;
	
	    _this.update = _this.update;
	    _this.emitting = _this.emitting;
	    _this.createParticle = _this.createParticle;
	    _this.integrate = _this.integrate;
	    _this.activateParticle = _this.activateParticle;
	    _this.updateParticle = _this.updateParticle;
	    return _this;
	  }
	
	  _createClass(Emitter, [{
	    key: 'createParticle',
	
	
	    /**
	     * create single particle;
	     * 
	     * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
	     * @method removeAllParticles
	     */
	    value: function createParticle(time) {
	      var activeCount = this.activeCount;
	      if (activeCount === this.maxParticles) return;
	
	      var active = this.active;
	      for (var i = 0, n = active.length; i < n; i++) {
	        if (!active[i]) {
	          this.activateParticle(i, time);
	          active[i] = true;
	          this.activeCount = activeCount + 1;
	          break;
	        }
	      }
	    }
	  }, {
	    key: 'activateParticle',
	    value: function activateParticle(index, time) {
	      var particles = this.particles;
	      var particle = particles[index];
	
	      if (!particle) {
	        particles[index] = particle = new _Particle3.default();
	      }
	
	      var initializes = this.initializes;
	      var behaviours = this.behaviours;
	
	      particle.reset();
	      (0, _InitializeUtil2.default)(this, particle, initializes);
	      particle.addBehaviours(behaviours);
	      particle.update(index, time);
	
	      this.particleCreated.dispatch(particle);
	    }
	  }, {
	    key: 'updateParticle',
	    value: function updateParticle(particle, index, time, damping) {
	      var res = particle.update(index, time);
	
	      this.integrator.integrate(particle, time, damping);
	
	      if (res) {
	        this.particleUpdate.dispatch(particle);
	      } else {
	        this.particleDead.dispatch(particle);
	      }
	      return res;
	    }
	  }, {
	    key: 'integrate',
	    value: function integrate(time) {
	      var damping = 1 - this.damping;
	      this.integrator.integrate(this, time, damping);
	
	      var active = this.active;
	      var activeCount = this.activeCount;
	      var particles = this.particles;
	
	      for (var i = 0, n = active.length; i < n; i++) {
	        if (active[i] && !this.updateParticle(particles[i], i, time, damping)) {
	          active[i] = false;
	          activeCount--;
	        }
	      }
	      this.activeCount = activeCount;
	    }
	  }, {
	    key: 'emitting',
	    value: function emitting(time) {
	      this.emitTime += time;
	      var length = this.rate.getValue(time);
	
	      for (var i = 0; i < length; i++) {
	        this.createParticle(time);
	      }
	    }
	  }, {
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
	    key: 'update',
	    value: function update(time) {
	      this.age += time;
	      if (this.dead || this.age >= this.life) {
	        this.destroy();
	      }
	
	      this.emitting(time);
	      this.integrate(time);
	    }
	  }, {
	    key: 'destroy',
	
	
	    /**
	     * Destory this Emitter
	     * @method destroy
	     */
	    value: function destroy() {
	      this.dead = true;
	      this.emitTotalTimes = -1;
	
	      this.removeInitializers();
	      this.removeAllBehaviours();
	
	      if (this.parent) {
	        this.parent.removeEmitter(this);
	      }
	    }
	  }, {
	    key: 'maxParticles',
	    set: function set(val) {
	      this.active = new Array(val).fill(false);
	      this.particles = new Array(val);
	      this.activeCount = 0;
	    },
	    get: function get() {
	      return this.particles.length;
	    }
	  }]);
	
	  return Emitter;
	}(_Particle3.default);
	
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
	  function Particle() {
	    _classCallCheck(this, Particle);
	
	    this.id = uid++;
	    this.reset(true);
	    this.sprite = null;
	
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
	      this.life = Infinity;
	      this.age = 0;
	      this.energy = 1;
	      this.dead = false;
	      this.sleep = false;
	      this.target = null;
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
	    value: function update(index, time) {
	      var age = this.age + time;
	
	      if (age >= this.life) {
	        this.destroy();
	        return false;
	      }
	      this.age = age;
	
	      var length = this.behaviours.length;
	      var i = void 0;
	      for (i = 0; i < length; i++) {
	        if (this.behaviours[i]) {
	          this.behaviours[i].applyBehaviour(this, time, index);
	        }
	      }
	      var scale = this.easing(this.age / this.life);
	      this.energy = Math.max(1 - scale, 0);
	
	      return true;
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
	
	    this.integrate = this.integrate;
	    this.eulerIntegrate = this.eulerIntegrate;
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
	
	var _CrossZone = __webpack_require__(23);
	
	var _CrossZone2 = _interopRequireDefault(_CrossZone);
	
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
				if (this.crossType == _CrossZone2.default.CROSS_TYPES.DEAD) {
					if (particle.p.x + particle.radius < this.x) particle.dead = true;else if (particle.p.x - particle.radius > this.x + this.width) particle.dead = true;
	
					if (particle.p.y + particle.radius < this.y) particle.dead = true;else if (particle.p.y - particle.radius > this.y + this.height) particle.dead = true;
				} else if (this.crossType == _CrossZone2.default.CROSS_TYPES.BOUND) {
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
				} else if (this.crossType == _CrossZone2.default.CROSS_TYPES.CROSS) {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _CrossZone = __webpack_require__(23);
	
	var _CrossZone2 = _interopRequireDefault(_CrossZone);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Zone = function () {
		function Zone() {
			_classCallCheck(this, Zone);
	
			this.vector = new _Vector2D2.default(0, 0);
			this.random = 0;
			this.crossType = _CrossZone2.default.CROSS_TYPES.DEAD;
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
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CrossZone = function (_Behaviour) {
		_inherits(CrossZone, _Behaviour);
	
		function CrossZone(zone, crossType, life, easing) {
			_classCallCheck(this, CrossZone);
	
			var _this = _possibleConstructorReturn(this, (CrossZone.__proto__ || Object.getPrototypeOf(CrossZone)).call(this, life, easing));
	
			_this.reset(zone, crossType);
			_this.name = 'CrossZone';
	
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		_createClass(CrossZone, [{
			key: 'reset',
			value: function reset(zone, crossType, life, easing) {
				this.zone = zone;
				this.zone.crossType = _Util2.default.initValue(crossType, CrossZone.CROSS_TYPES.DEAD);
				if (life) {
					_get(CrossZone.prototype.__proto__ || Object.getPrototypeOf(CrossZone.prototype), 'reset', this).call(this, life, easing);
				}
			}
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				_get(CrossZone.prototype.__proto__ || Object.getPrototypeOf(CrossZone.prototype), 'applyBehaviour', this).call(this, particle, time, index);
				this.zone.crossing(particle);
			}
		}]);
	
		return CrossZone;
	}(_Behaviour3.default);
	
	CrossZone.CROSS_TYPES = {
		CROSS: 1 << 0,
		DEAD: 1 << 2,
		BOUND: 1 << 3
	};
	exports.default = CrossZone;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _const = __webpack_require__(2);
	
	var _ease = __webpack_require__(25);
	
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	var _CrossZone = __webpack_require__(23);
	
	var _CrossZone2 = _interopRequireDefault(_CrossZone);
	
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
			_this.direction = direction || 1;
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
				if (this.crossType == _CrossZone2.default.CROSS_TYPES.DEAD) {
					if (this.direction == 1) {
						this.getRange(particle, function () {
							if (self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					} else {
						this.getRange(particle, function () {
							if (!self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					}
				} else if (this.crossType == _CrossZone2.default.CROSS_TYPES.BOUND) {
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
				} else if (this.crossType == _CrossZone2.default.CROSS_TYPES.CROSS) {
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
		}]);
	
		return LineZone;
	}(_Zone3.default);
	
	exports.default = LineZone;

/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Zone2 = __webpack_require__(22);
	
	var _Zone3 = _interopRequireDefault(_Zone2);
	
	var _CrossZone = __webpack_require__(23);
	
	var _CrossZone2 = _interopRequireDefault(_CrossZone);
	
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
			key: 'getPosition',
			value: function getPosition() {
				this.random = Math.random();
				this.angle = Math.PI * 2 * Math.random();
				this.vector.x = this.x + this.random * this.radius * Math.cos(this.angle);
				this.vector.y = this.y + this.random * this.radius * Math.sin(this.angle);
				return this.vector;
			}
		}, {
			key: 'setCenter',
			value: function setCenter(x, y) {
				this.center.x = x;
				this.center.y = y;
			}
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				var d = particle.p.distanceTo(this.center);
				if (this.crossType == _CrossZone2.default.CROSS_TYPES.DEAD) {
					if (d - particle.radius > this.radius) particle.dead = true;
				} else if (this.crossType == _CrossZone2.default.CROSS_TYPES.BOUND) {
					if (d + particle.radius >= this.radius) this.getSymmetric(particle);
				} else if (this.crossType == _CrossZone2.default.CROSS_TYPES.CROSS) {
					if (this.alert) {
						alert('Sorry CircleZone does not support cross method');
						this.alert = false;
					}
				}
			}
		}, {
			key: 'getSymmetric',
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
			key: 'getGradient',
			value: function getGradient(particle) {
				return -Math.PI / 2 + Math.atan2(particle.p.y - this.center.y, particle.p.x - this.center.x);
			}
		}]);
	
		return PointZone;
	}(_Zone3.default);
	
	exports.default = PointZone;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
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

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Attraction2 = __webpack_require__(31);
	
	var _Attraction3 = _interopRequireDefault(_Attraction2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Repulsion = function (_Attraction) {
		_inherits(Repulsion, _Attraction);
	
		function Repulsion(targetPosition, force, radius, life, easing) {
			_classCallCheck(this, Repulsion);
	
			var _this = _possibleConstructorReturn(this, (Repulsion.__proto__ || Object.getPrototypeOf(Repulsion)).call(this, targetPosition, force, radius, life, easing));
	
			_this.force *= -1;
			_this.name = "Repulsion";
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		_createClass(Repulsion, [{
			key: 'reset',
			value: function reset(targetPosition, force, radius, life, easing) {
				_get(Repulsion.prototype.__proto__ || Object.getPrototypeOf(Repulsion.prototype), 'reset', this).call(this, targetPosition, force, radius, life, easing);
				this.force *= -1;
			}
		}]);
	
		return Repulsion;
	}(_Attraction3.default);
	
	exports.default = Repulsion;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Force = function (_Behaviour) {
		_inherits(Force, _Behaviour);
	
		function Force(fx, fy, life, easing) {
			_classCallCheck(this, Force);
	
			var _this = _possibleConstructorReturn(this, (Force.__proto__ || Object.getPrototypeOf(Force)).call(this, life, easing));
	
			_this.force = _this.normalizeForce(new _Vector2D2.default(fx, fy));
			_this.name = "Force";
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		_createClass(Force, [{
			key: 'reset',
			value: function reset(fx, fy, life, easing) {
				this.force = this.normalizeForce(new _Vector2D2.default(fx, fy));
				if (life) {
					_get(Force.prototype.__proto__ || Object.getPrototypeOf(Force.prototype), 'reset', this).call(this, life, easing);
				}
			}
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				_get(Force.prototype.__proto__ || Object.getPrototypeOf(Force.prototype), 'applyBehaviour', this).call(this, particle, time, index);
				particle.a.add(this.force);
			}
		}]);
	
		return Force;
	}(_Behaviour3.default);
	
	exports.default = Force;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Force2 = __webpack_require__(34);
	
	var _Force3 = _interopRequireDefault(_Force2);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Gravity = function (_Force) {
		_inherits(Gravity, _Force);
	
		function Gravity(g, life, easing) {
			_classCallCheck(this, Gravity);
	
			var _this = _possibleConstructorReturn(this, (Gravity.__proto__ || Object.getPrototypeOf(Gravity)).call(this, 0, g, life, easing));
	
			_this.name = 'Gravity';
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		_createClass(Gravity, [{
			key: 'reset',
			value: function reset(g, life, easing) {
				_get(Gravity.prototype.__proto__ || Object.getPrototypeOf(Gravity.prototype), 'reset', this).call(this, 0, g, life, easing);
			}
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				_get(Gravity.prototype.__proto__ || Object.getPrototypeOf(Gravity.prototype), 'applyBehaviour', this).call(this, particle, time, index);
				particle.a.add(this.force);
			}
		}]);
	
		return Gravity;
	}(_Force3.default);
	
	exports.default = Gravity;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GravityWell = function (_Behaviour) {
		_inherits(GravityWell, _Behaviour);
	
		function GravityWell(centerPoint, force, life, easing) {
			_classCallCheck(this, GravityWell);
	
			var _this = _possibleConstructorReturn(this, (GravityWell.__proto__ || Object.getPrototypeOf(GravityWell)).call(this, life, easing));
	
			_this.distanceVec = new _Vector2D2.default();
			_this.centerPoint = _Util2.default.initValue(centerPoint, new _Vector2D2.default());
			_this.force = _Util2.default.initValue(_this.normalizeValue(force), 100);
			_this.name = "GravityWell";
	
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		_createClass(GravityWell, [{
			key: 'reset',
			value: function reset(centerPoint, force, life, easing) {
				this.distanceVec = new _Vector2D2.default();
				this.centerPoint = _Util2.default.initValue(centerPoint, new _Vector2D2.default());
				this.force = _Util2.default.initValue(this.normalizeValue(force), 100);
				if (life) {
					_get(GravityWell.prototype.__proto__ || Object.getPrototypeOf(GravityWell.prototype), 'reset', this).call(this, life, easing);
				}
			}
		}, {
			key: 'initialize',
			value: function initialize(particle) {}
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this.distanceVec.set(this.centerPoint.x - particle.p.x, this.centerPoint.y - particle.p.y);
				var distanceSq = this.distanceVec.lengthSq();
				if (distanceSq != 0) {
					var distance = this.distanceVec.length();
					var factor = this.force * time / (distanceSq * distance);
					particle.v.x += factor * this.distanceVec.x;
					particle.v.y += factor * this.distanceVec.y;
				}
			}
		}]);
	
		return GravityWell;
	}(_Behaviour3.default);
	
	exports.default = GravityWell;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	var _MathUtils = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RandomDrift = function (_Behaviour) {
		_inherits(RandomDrift, _Behaviour);
	
		function RandomDrift(driftX, driftY, delay, life, easing) {
			_classCallCheck(this, RandomDrift);
	
			var _this = _possibleConstructorReturn(this, (RandomDrift.__proto__ || Object.getPrototypeOf(RandomDrift)).call(this, life, easing));
	
			_this.reset(driftX, driftY, delay);
			_this.time = 0;
			_this.name = "RandomDrift";
	
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		_createClass(RandomDrift, [{
			key: 'reset',
			value: function reset(driftX, driftY, delay, life, easing) {
				this.panFoce = new _Vector2D2.default(driftX, driftY);
				this.panFoce = this.normalizeForce(this.panFoce);
				this.delay = delay;
				if (life) {
					RandomDrift._super_.prototype.reset.call(this, life, easing);
				}
			}
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				_get(RandomDrift.prototype.__proto__ || Object.getPrototypeOf(RandomDrift.prototype), 'applyBehaviour', this).call(this, particle, time, index);
				this.time += time;
				if (this.time >= this.delay) {
					particle.a.addXY((0, _MathUtils.randomAToB)(-this.panFoce.x, this.panFoce.x), (0, _MathUtils.randomAToB)(-this.panFoce.y, this.panFoce.y));
					this.time = 0;
				};
			}
		}]);
	
		return RandomDrift;
	}(_Behaviour3.default);
	
	exports.default = RandomDrift;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rotate = function (_Behaviour) {
		_inherits(Rotate, _Behaviour);
	
		function Rotate(a, b, style, life, easing) {
			_classCallCheck(this, Rotate);
	
			var _this = _possibleConstructorReturn(this, (Rotate.__proto__ || Object.getPrototypeOf(Rotate)).call(this, life, easing));
	
			_this.reset(a, b, style);
			_this.name = 'Rotate';
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		_createClass(Rotate, [{
			key: 'reset',
			value: function reset(a, b, style, life, easing) {
				if (b == null || b == undefined) {
					this.same = true;
				} else {
					this.same = false;
				}
	
				this.a = _Util2.default.setSpanValue(a || Rotate.TYPE.VELOCITY);
				this.b = _Util2.default.setSpanValue(b || 0);
				this.style = style || Rotate.STYLES.TO;
				if (life) {
					_get(Rotate.prototype.__proto__ || Object.getPrototypeOf(Rotate.prototype), 'reset', this).call(this, life, easing);
				}
			}
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.rotation = this.a.getValue();
				particle.transform.rotationA = this.a.getValue();
				if (!this.same) {
					particle.transform.rotationB = this.b.getValue();
				}
			}
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				_get(Rotate.prototype.__proto__ || Object.getPrototypeOf(Rotate.prototype), 'applyBehaviour', this).call(this, particle, time, index);
				if (!this.same) {
					if (this.style == Rotate.STYLES.TO) {
						particle.rotation += particle.transform.rotationB + (particle.transform.rotationA - particle.transform.rotationB) * this.energy;
					} else {
						particle.rotation += particle.transform.rotationB;
					}
				} else if (this.a.a == Rotate.TYPE.VELOCITY) {
					//beta...
					particle.rotation = particle.getDirection();
				}
			}
		}]);
	
		return Rotate;
	}(_Behaviour3.default);
	
	Rotate.STYLES = {
		TO: 1 << 0,
		FROM: 1 << 1
	};
	Rotate.TYPE = {
		VELOCITY: 1 << 0
	};
	exports.default = Rotate;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Behaviour2 = __webpack_require__(24);
	
	var _Behaviour3 = _interopRequireDefault(_Behaviour2);
	
	var _Vector2D = __webpack_require__(5);
	
	var _Vector2D2 = _interopRequireDefault(_Vector2D);
	
	var _Util = __webpack_require__(7);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Scale = function (_Behaviour) {
		_inherits(Scale, _Behaviour);
	
		function Scale(a, b, life, easing) {
			_classCallCheck(this, Scale);
	
			var _this = _possibleConstructorReturn(this, (Scale.__proto__ || Object.getPrototypeOf(Scale)).call(this, life, easing));
	
			_this.reset(a, b);
			_this.name = 'Scale';
	
			_this.applyBehaviour = _this.applyBehaviour;
			return _this;
		}
	
		_createClass(Scale, [{
			key: 'reset',
			value: function reset(a, b, life, easing) {
				if (b == null || b == undefined) {
					this.same = true;
				} else {
					this.same = false;
				}
				this.a = _Util2.default.setSpanValue(_Util2.default.initValue(a, 1));
				this.b = _Util2.default.setSpanValue(b);
				if (life) {
					suoer.reset(life, easing);
				}
			}
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.transform.scaleA = this.a.getValue();
				particle.transform.oldRadius = particle.radius;
				if (this.same) {
					particle.transform.scaleB = particle.transform.scaleA;
				} else {
					particle.transform.scaleB = this.b.getValue();
				}
			}
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				_get(Scale.prototype.__proto__ || Object.getPrototypeOf(Scale.prototype), 'applyBehaviour', this).call(this, particle, time, index);
				particle.scale = particle.transform.scaleB + (particle.transform.scaleA - particle.transform.scaleB) * this.energy;
				if (particle.scale < 0.0001) {
					particle.scale = 0;
				}
				particle.radius = particle.transform.oldRadius * particle.scale;
			}
		}]);
	
		return Scale;
	}(_Behaviour3.default);
	
	exports.default = Scale;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3NGVlMDk3ZjAzMzg0MGE2ZGNkYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvU3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21pbmktc2lnbmFscy9saWIvbWluaS1zaWduYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1BvbGFyMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9SZWN0Wm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9ab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQ3Jvc3Nab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQmVoYXZpb3VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvUG9pbnRab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0xpbmVab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0ltYWdlWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9BdHRyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvUmVwdWxzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvRm9yY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9HcmF2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvR3Jhdml0eVdlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9SYW5kb21EcmlmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL1JvdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL1NjYWxlLmpzIl0sIm5hbWVzIjpbImdldFNwYW4iLCJhIiwiYiIsImNlbnRlciIsIlNwYW4iLCJSZWN0Wm9uZSIsIlBvaW50Wm9uZSIsIkxpbmVab25lIiwiSW1hZ2Vab25lIiwiQ2lyY2xlWm9uZSIsIkFscGhhIiwiQXR0cmFjdGlvbiIsIkNvbGxpc2lvbiIsIlJlcHVsc2lvbiIsIkNyb3NzWm9uZSIsIkZvcmNlIiwiR3Jhdml0eSIsIkdyYXZpdHlXZWxsIiwiUmFuZG9tRHJpZnQiLCJSb3RhdGUiLCJTY2FsZSIsImdsb2JhbCIsIlF1YXJrIiwiZXhwb3J0cyIsIkVtaXR0ZXIiLCJQT09MX01BWCIsIlRJTUVfU1RFUCIsIlVTRV9DTE9DSyIsIk1FQVNVUkUiLCJFVUxFUiIsIlJLMiIsIlJLNCIsIlZFUkxFVCIsIlBBUlRJQ0xFX0NSRUFURUQiLCJQQVJUSUNMRV9VUERBVEUiLCJQQVJUSUNMRV9TTEVFUCIsIlBBUlRJQ0xFX0RFQUQiLCJFTUlUVEVSX0FEREVEIiwiRU1JVFRFUl9SRU1PVkVEIiwiaW5pdGlhbGl6ZXMiLCJiZWhhdmlvdXJzIiwiZW1pdFRpbWUiLCJlbWl0VG90YWxUaW1lcyIsImRhbXBpbmciLCJiaW5kRW1pdHRlciIsInJhdGUiLCJpbnRlZ3JhdG9yIiwibWF4UGFydGljbGVzIiwidXBkYXRlIiwiZW1pdHRpbmciLCJjcmVhdGVQYXJ0aWNsZSIsImludGVncmF0ZSIsImFjdGl2YXRlUGFydGljbGUiLCJ1cGRhdGVQYXJ0aWNsZSIsInRpbWUiLCJhY3RpdmVDb3VudCIsImFjdGl2ZSIsImkiLCJuIiwibGVuZ3RoIiwiaW5kZXgiLCJwYXJ0aWNsZXMiLCJwYXJ0aWNsZSIsInJlc2V0IiwiYWRkQmVoYXZpb3VycyIsInBhcnRpY2xlQ3JlYXRlZCIsImRpc3BhdGNoIiwicmVzIiwicGFydGljbGVVcGRhdGUiLCJwYXJ0aWNsZURlYWQiLCJnZXRWYWx1ZSIsImxpZmUiLCJJbmZpbml0eSIsImlzTmFOIiwiaW5pdCIsIl90YWlsUGFydGljbGUiLCJfcG9vbEhlYWQiLCJwT2JqIiwiaW5pdEFsbCIsImFyZ3VtZW50cyIsInB1c2giLCJpbml0aWFsaXplciIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcmVudHMiLCJiZWhhdmlvdXIiLCJhZ2UiLCJkZWFkIiwiZGVzdHJveSIsInJlbW92ZUluaXRpYWxpemVycyIsInJlbW92ZUFsbEJlaGF2aW91cnMiLCJwYXJlbnQiLCJyZW1vdmVFbWl0dGVyIiwidmFsIiwiQXJyYXkiLCJmaWxsIiwidWlkIiwiUGFydGljbGUiLCJpZCIsInNwcml0ZSIsIk1hdGgiLCJhdGFuMiIsInYiLCJ4IiwieSIsIlBJIiwiZW5lcmd5Iiwic2xlZXAiLCJ0YXJnZXQiLCJtYXNzIiwicmFkaXVzIiwiYWxwaGEiLCJzY2FsZSIsInJvdGF0aW9uIiwiY29sb3IiLCJlYXNpbmciLCJ0cmFuc2Zvcm0iLCJwIiwib2xkIiwic2V0IiwicmdiIiwiciIsImciLCJhcHBseUJlaGF2aW91ciIsIm1heCIsImluaXRpYWxpemUiLCJhZGRCZWhhdmlvdXIiLCJWZWN0b3IyRCIsInZhbHVlIiwiRXJyb3IiLCJ3IiwidW5kZWZpbmVkIiwiYWRkVmVjdG9ycyIsInMiLCJzdWJWZWN0b3JzIiwibWluIiwibXVsdGlwbHlTY2FsYXIiLCJzcXJ0IiwiZGl2aWRlU2NhbGFyIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJ0aGEiLCJjb3MiLCJzaW4iLCJkeCIsImR5IiwibCIsIm9sZExlbmd0aCIsIlJhdGUiLCJudW1wYW4iLCJ0aW1lcGFuIiwibnVtUGFuIiwidGltZVBhbiIsInNldFNwYW5WYWx1ZSIsInN0YXJ0VGltZSIsIm5leHRUaW1lIiwiaW5pdFZhbHVlIiwiZGVmYXVsdHMiLCJnZXRWZWN0b3IyRCIsInBvc3Rpb25PclgiLCJ2ZWN0b3IyZCIsImp1ZGdlVmVjdG9yMkQiLCJwT0JKIiwicmVzdWx0Iiwic2V0VmVjdG9yMkRCeU9iamVjdCIsInZ4IiwidnkiLCJheCIsImF5IiwiYyIsImNvbnN0cnVjdG9yIiwiZ2V0U3BhblZhbHVlIiwicGFuIiwiaGV4VG9SR0IiLCJoIiwiaGV4MTYiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJwYXJzZUludCIsInJnYlRvSGV4IiwicmJnIiwiaXNBcnJheSIsIklOVCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQVRvQiIsInJhbmRvbUZsb2F0aW5nIiwiZGVncmVlVHJhbnNmb3JtIiwiZiIsIk51bWVyaWNhbEludGVncmF0aW9uIiwidHlwZSIsImV1bGVySW50ZWdyYXRlIiwiY29weSIsImFkZCIsImNsZWFyIiwiZW1pdHRlciIsInJvdGF0ZSIsIkluaXRpYWxpemUiLCJWZWxvY2l0eSIsIkxpZmUiLCJNYXNzIiwiUmFkaXVzIiwiUG9zaXRpb24iLCJycGFuIiwidGhhcGFuIiwiclBhbiIsInRoYVBhbiIsIlBPTEFSIiwiUCIsInJQYW5WYWwiLCJub3JtYWxpemVkUEkiLCJ2ciIsInRoYVBhbk5vcm0iLCJwb2xhcjJkIiwibm9ybWFsaXplVmVsb2NpdHkiLCJnZXRYIiwiZ2V0WSIsIlBvbGFyMkQiLCJhYnMiLCJsaWZlUGFuIiwibWFzc1BhbiIsIm9sZFJhZGl1cyIsInpvbmUiLCJnZXRQb3NpdGlvbiIsInZlY3RvciIsIndpZHRoIiwiaGVpZ2h0IiwiY3Jvc3NUeXBlIiwiQ1JPU1NfVFlQRVMiLCJERUFEIiwiQk9VTkQiLCJDUk9TUyIsIlpvbmUiLCJhbGVydCIsIm5hbWUiLCJjcm9zc2luZyIsIkJFSEFWSU9VUl9JRF9CQVNFIiwiQmVoYXZpb3VyIiwiZm9yY2UiLCJyZW1vdmVCZWhhdmlvdXIiLCJnZXRFYXNpbmdCeU5hbWUiLCJlYXNlTGluZWFyIiwiZWFzZUluUXVhZCIsInBvdyIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluU2luZSIsImVhc2VPdXRTaW5lIiwiZWFzZUluT3V0U2luZSIsImVhc2VJbkV4cG8iLCJlYXNlT3V0RXhwbyIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5DaXJjIiwiZWFzZU91dENpcmMiLCJlYXNlSW5PdXRDaXJjIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsIngxIiwieTEiLCJ4MiIsInkyIiwiZGlyZWN0aW9uIiwibWlueCIsIm1pbnkiLCJtYXh4IiwibWF4eSIsImRvdCIsInh4eXkiLCJncmFkaWVudCIsImdldEdyYWRpZW50IiwiZ2V0TGVuZ3RoIiwic2VsZiIsImdldFJhbmdlIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RGlzdGFuY2UiLCJnZXRTeW1tZXRyaWMiLCJBIiwiQiIsIkMiLCJEIiwidGhhMiIsInRoYTEiLCJvbGR4Iiwib2xkeSIsImZ1biIsImFuZ2xlIiwiaW1hZ2VEYXRhIiwiZCIsInZlY3RvcnMiLCJzZXRWZWN0b3JzIiwiaiIsImxlbmd0aDEiLCJsZW5ndGgyIiwiZGF0YSIsImdldEJvdW5kIiwibmVnYXRlIiwiZGlzdGFuY2VUbyIsInNhbWUiLCJhbHBoYUEiLCJhbHBoYUIiLCJ0YXJnZXRQb3NpdGlvbiIsIm5vcm1hbGl6ZVZhbHVlIiwicmFkaXVzU3EiLCJhdHRyYWN0aW9uRm9yY2UiLCJsZW5ndGhTcSIsIlByb3RvbiIsInN1YiIsIm5vcm1hbGl6ZSIsImNhbGxiYWNrIiwiY29sbGlzaW9uUG9vbCIsImRlbHRhIiwibmV3UG9vbCIsInNsaWNlIiwib3RoZXJQYXJ0aWNsZSIsIm92ZXJsYXAiLCJhdmVyYWdlTWFzczEiLCJhdmVyYWdlTWFzczIiLCJkaXN0YW5jZSIsInRvdGFsTWFzcyIsImNsb25lIiwiZngiLCJmeSIsIm5vcm1hbGl6ZUZvcmNlIiwiY2VudGVyUG9pbnQiLCJkaXN0YW5jZVZlYyIsImRpc3RhbmNlU3EiLCJmYWN0b3IiLCJkcmlmdFgiLCJkcmlmdFkiLCJkZWxheSIsInBhbkZvY2UiLCJfc3VwZXJfIiwicHJvdG90eXBlIiwiY2FsbCIsImFkZFhZIiwic3R5bGUiLCJUWVBFIiwiVkVMT0NJVFkiLCJTVFlMRVMiLCJUTyIsInJvdGF0aW9uQSIsInJvdGF0aW9uQiIsIkZST00iLCJzdW9lciIsInNjYWxlQSIsInNjYWxlQiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztB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QjtBQUNBO0FBQ0Q7OztrQ0FFY1IsUSxFQUFVUixJLEVBQU1NLEssRUFBTztBQUNyQyxpSEFBcUJFLFFBQXJCLEVBQStCUixJQUEvQixFQUFxQ00sS0FBckM7QUFDQUUsYUFBU21ELEtBQVQsR0FBaUJuRCxTQUFTdUQsU0FBVCxDQUFtQjJPLE1BQW5CLEdBQTRCLENBQUNsUyxTQUFTdUQsU0FBVCxDQUFtQjBPLE1BQW5CLEdBQTRCalMsU0FBU3VELFNBQVQsQ0FBbUIyTyxNQUFoRCxJQUEwRCxLQUFLclAsTUFBNUc7QUFDQSxRQUFJN0MsU0FBU21ELEtBQVQsR0FBaUIsTUFBckIsRUFBNEI7QUFDM0JuRCxjQUFTbUQsS0FBVCxHQUFpQixDQUFqQjtBQUNBO0FBQ0RuRCxhQUFTaUQsTUFBVCxHQUFrQmpELFNBQVN1RCxTQUFULENBQW1Cd0csU0FBbkIsR0FBK0IvSixTQUFTbUQsS0FBMUQ7QUFDQTs7Ozs7O21CQXhDbUI3RixLIiwiZmlsZSI6InF1YXJrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NGVlMDk3ZjAzMzg0MGE2ZGNkYiIsImV4cG9ydCAqIGZyb20gJy4vZW1pdHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBTcGFuIGZyb20gJy4vbWF0aC9TcGFuJztcclxuXHJcbmltcG9ydCBSZWN0Wm9uZSBmcm9tICcuL3pvbmUvUmVjdFpvbmUnO1xyXG5pbXBvcnQgUG9pbnRab25lIGZyb20gJy4vem9uZS9Qb2ludFpvbmUnO1xyXG5pbXBvcnQgTGluZVpvbmUgZnJvbSAnLi96b25lL0xpbmVab25lJztcclxuaW1wb3J0IEltYWdlWm9uZSBmcm9tICcuL3pvbmUvSW1hZ2Vab25lJztcclxuaW1wb3J0IENpcmNsZVpvbmUgZnJvbSAnLi96b25lL0NpcmNsZVpvbmUnO1xyXG5cclxuaW1wb3J0IEFscGhhIGZyb20gJy4vYmVoYXZpb3VyL0FscGhhJztcclxuaW1wb3J0IEF0dHJhY3Rpb24gZnJvbSAnLi9iZWhhdmlvdXIvQXR0cmFjdGlvbic7XHJcbmltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9iZWhhdmlvdXIvQ29sbGlzaW9uJztcclxuaW1wb3J0IFJlcHVsc2lvbiBmcm9tICcuL2JlaGF2aW91ci9SZXB1bHNpb24nO1xyXG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcbmltcG9ydCBGb3JjZSBmcm9tICcuL2JlaGF2aW91ci9Gb3JjZSc7XHJcbmltcG9ydCBHcmF2aXR5IGZyb20gJy4vYmVoYXZpb3VyL0dyYXZpdHknO1xyXG5pbXBvcnQgR3Jhdml0eVdlbGwgZnJvbSAnLi9iZWhhdmlvdXIvR3Jhdml0eVdlbGwnO1xyXG5pbXBvcnQgUmFuZG9tRHJpZnQgZnJvbSAnLi9iZWhhdmlvdXIvUmFuZG9tRHJpZnQnO1xyXG5pbXBvcnQgUm90YXRlIGZyb20gJy4vYmVoYXZpb3VyL1JvdGF0ZSc7XHJcbmltcG9ydCBTY2FsZSBmcm9tICcuL2JlaGF2aW91ci9TY2FsZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BhbihhLCBiLCBjZW50ZXIpIHtcclxuICAgIHJldHVybiBuZXcgU3BhbihhLCBiLCBjZW50ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTcGFuLCBSZWN0Wm9uZSwgUG9pbnRab25lLCBMaW5lWm9uZSwgSW1hZ2Vab25lLCBDaXJjbGVab25lIH07XHJcblxyXG5leHBvcnQgeyBBbHBoYSwgQXR0cmFjdGlvbiwgQ29sbGlzaW9uLCBSZXB1bHNpb24sIENyb3NzWm9uZSwgRm9yY2UsIEdyYXZpdHksIEdyYXZpdHlXZWxsLCBSYW5kb21EcmlmdCwgUm90YXRlLCBTY2FsZSB9O1xyXG5cclxuZ2xvYmFsLlF1YXJrID0gZXhwb3J0cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJleHBvcnQgKiBmcm9tICcuL2NvbnN0JztcclxuXHJcbmltcG9ydCBFbWl0dGVyIGZyb20gJy4vRW1pdHRlcic7XHJcblxyXG5leHBvcnQge0VtaXR0ZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbWl0dGVyL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IFBPT0xfTUFYID0gMTAwMDtcclxuZXhwb3J0IGNvbnN0IFRJTUVfU1RFUCA9IDYwO1xyXG5leHBvcnQgY29uc3QgVVNFX0NMT0NLID0gZmFsc2U7XHJcbmV4cG9ydCBjb25zdCBNRUFTVVJFID0gMTAwO1xyXG5leHBvcnQgY29uc3QgRVVMRVIgPSAnZXVsZXInO1xyXG5leHBvcnQgY29uc3QgUksyID0gJ3J1bmdlLWt1dHRhMic7XHJcbmV4cG9ydCBjb25zdCBSSzQgPSAncnVuZ2Uta3V0dGE0JztcclxuZXhwb3J0IGNvbnN0IFZFUkxFVCA9ICd2ZXJsZXQnO1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfQ1JFQVRFRCA9ICdwYXJ0aWxjbGVDcmVhdGVkJztcclxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX1VQREFURSA9ICdwYXJ0aWxjbGVVcGRhdGUnO1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfU0xFRVAgPSAncGFydGljbGVTbGVlcCc7XHJcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9ERUFEID0gJ3BhcnRpbGNsZURlYWQnO1xyXG5leHBvcnQgY29uc3QgRU1JVFRFUl9BRERFRCA9ICdlbWl0dGVyQWRkZWQnO1xyXG5leHBvcnQgY29uc3QgRU1JVFRFUl9SRU1PVkVEID0gJ2VtaXR0ZXJSZW1vdmVkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9jb25zdC5qcyIsIi8vIGltcG9ydCBQYXJ0aWNsZSBmcm9tICcuLi9jb3JlL1BhcnRpY2xlJztcclxuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4uL2NvcmUvUGFydGljbGUnO1xyXG5pbXBvcnQgUmF0ZSBmcm9tICcuLi9pbml0aWFsaXplL1JhdGUnO1xyXG5pbXBvcnQgTnVtZXJpY2FsSW50ZWdyYXRpb24gZnJvbSAnLi4vbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbic7XHJcbmltcG9ydCBpbml0aWFsaXplRm4gZnJvbSAnLi4vaW5pdGlhbGl6ZS9Jbml0aWFsaXplVXRpbCc7XHJcbmltcG9ydCBNaW5pU2lnbmFsIGZyb20gJ21pbmktc2lnbmFscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIGV4dGVuZHMgUGFydGljbGV7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZXMgPSBbXTtcclxuICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gLTE7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmcmljdGlvbiBjb2VmZmljaWVudCBmb3IgYWxsIHBhcnRpY2xlIGVtaXQgYnkgVGhpcztcclxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQGRlZmF1bHQgMC4wMDZcclxuICAgICAqL1xyXG4gICAgdGhpcy5kYW1waW5nID0gLjAwNjtcclxuICAgIC8qKlxyXG4gICAgICogSWYgYmluZEVtaXR0ZXIgdGhlIHBhcnRpY2xlcyBjYW4gYmluZCB0aGlzIGVtaXR0ZXIncyBwcm9wZXJ0eTtcclxuICAgICAqIEBwcm9wZXJ0eSBiaW5kRW1pdHRlclxyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmluZEVtaXR0ZXIgPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyBwZXIgc2Vjb25kIGVtaXQgKGEgW3BhcnRpY2xlXS9iIFtzXSk7XHJcbiAgICAgKiBAcHJvcGVydHkgcmF0ZVxyXG4gICAgICogQHR5cGUge1F1YXJrLlJhdGV9XHJcbiAgICAgKiBAZGVmYXVsdCBRdWFyay5SYXRlKDEsIC4xKVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJhdGUgPSBuZXcgUmF0ZSgxLCAuMSk7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdG9yID0gbmV3IE51bWVyaWNhbEludGVncmF0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5tYXhQYXJ0aWNsZXMgPSA1MDAwMDtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlO1xyXG4gICAgdGhpcy5lbWl0dGluZyA9IHRoaXMuZW1pdHRpbmc7XHJcbiAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlID0gdGhpcy5jcmVhdGVQYXJ0aWNsZTtcclxuICAgIHRoaXMuaW50ZWdyYXRlID0gdGhpcy5pbnRlZ3JhdGU7XHJcbiAgICB0aGlzLmFjdGl2YXRlUGFydGljbGUgPSB0aGlzLmFjdGl2YXRlUGFydGljbGU7XHJcbiAgICB0aGlzLnVwZGF0ZVBhcnRpY2xlID0gdGhpcy51cGRhdGVQYXJ0aWNsZTtcclxuICB9XHJcblxyXG4gIHNldCBtYXhQYXJ0aWNsZXModmFsKXtcclxuICAgIHRoaXMuYWN0aXZlID0gbmV3IEFycmF5KHZhbCkuZmlsbChmYWxzZSk7XHJcbiAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheSh2YWwpO1xyXG4gICAgdGhpcy5hY3RpdmVDb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4UGFydGljbGVzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlIHNpbmdsZSBwYXJ0aWNsZTtcclxuICAgKiBcclxuICAgKiBjYW4gdXNlIGVtaXQoe3g6MTB9LG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KSBvciBlbWl0KFt7eDoxMH0sbmV3IEluaXRpYWxpemVdLG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXHJcbiAgICovXHJcbiAgY3JlYXRlUGFydGljbGUodGltZSkge1xyXG4gICAgbGV0IGFjdGl2ZUNvdW50ID0gdGhpcy5hY3RpdmVDb3VudDtcclxuICAgIGlmKGFjdGl2ZUNvdW50ID09PSB0aGlzLm1heFBhcnRpY2xlcykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBhY3RpdmUubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGlmICghYWN0aXZlW2ldKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVBhcnRpY2xlKGksIHRpbWUpO1xyXG4gICAgICAgIGFjdGl2ZVtpXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDb3VudCA9IGFjdGl2ZUNvdW50ICsgMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGVQYXJ0aWNsZShpbmRleCwgdGltZSl7XHJcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcztcclxuICAgIGxldCBwYXJ0aWNsZSA9IHBhcnRpY2xlc1tpbmRleF07XHJcblxyXG4gICAgaWYoIXBhcnRpY2xlKXtcclxuICAgICAgcGFydGljbGVzW2luZGV4XSA9IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemVzID0gdGhpcy5pbml0aWFsaXplcztcclxuICAgIGxldCBiZWhhdmlvdXJzID0gdGhpcy5iZWhhdmlvdXJzO1xyXG5cclxuICAgIHBhcnRpY2xlLnJlc2V0KCk7XHJcbiAgICBpbml0aWFsaXplRm4odGhpcywgcGFydGljbGUsIGluaXRpYWxpemVzKTtcclxuICAgIHBhcnRpY2xlLmFkZEJlaGF2aW91cnMoYmVoYXZpb3Vycyk7XHJcbiAgICBwYXJ0aWNsZS51cGRhdGUoaW5kZXgsIHRpbWUpO1xyXG5cclxuICAgIHRoaXMucGFydGljbGVDcmVhdGVkLmRpc3BhdGNoKHBhcnRpY2xlKTtcclxuXHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYXJ0aWNsZShwYXJ0aWNsZSwgaW5kZXgsIHRpbWUsIGRhbXBpbmcpe1xyXG4gICAgY29uc3QgcmVzID0gcGFydGljbGUudXBkYXRlKGluZGV4LCB0aW1lKTtcclxuXHJcbiAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKTtcclxuXHJcbiAgICBpZihyZXMpe1xyXG4gICAgICB0aGlzLnBhcnRpY2xlVXBkYXRlLmRpc3BhdGNoKHBhcnRpY2xlKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnBhcnRpY2xlRGVhZC5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgaW50ZWdyYXRlKHRpbWUpIHtcclxuICAgIGNvbnN0IGRhbXBpbmcgPSAxIC0gdGhpcy5kYW1waW5nO1xyXG4gICAgdGhpcy5pbnRlZ3JhdG9yLmludGVncmF0ZSh0aGlzLCB0aW1lLCBkYW1waW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmU7XHJcbiAgICBsZXQgYWN0aXZlQ291bnQgPSB0aGlzLmFjdGl2ZUNvdW50O1xyXG4gICAgY29uc3QgcGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXM7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBhY3RpdmUubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGlmIChhY3RpdmVbaV0gJiYgIXRoaXMudXBkYXRlUGFydGljbGUocGFydGljbGVzW2ldLCBpLCB0aW1lLCBkYW1waW5nKSkge1xyXG4gICAgICAgIGFjdGl2ZVtpXSA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZUNvdW50LS07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWN0aXZlQ291bnQgPSBhY3RpdmVDb3VudDtcclxuXHJcbiAgfVxyXG5cclxuICBlbWl0dGluZyh0aW1lKSB7XHJcbiAgICB0aGlzLmVtaXRUaW1lICs9IHRpbWU7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnJhdGUuZ2V0VmFsdWUodGltZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlKHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdChlbWl0VGltZSwgbGlmZSkge1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gZW1pdFRpbWUgfHwgSW5maW5pdHk7XHJcblxyXG4gICAgaWYoIWlzTmFOKGxpZmUpKSB7XHJcbiAgICAgIHRoaXMubGlmZSA9IGxpZmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yYXRlLmluaXQoKTtcclxuXHJcbiAgICB0aGlzLnBhcnRpY2xlQ3JlYXRlZCA9IG5ldyBNaW5pU2lnbmFsKCk7XHJcbiAgICB0aGlzLnBhcnRpY2xlVXBkYXRlID0gbmV3IE1pbmlTaWduYWwoKTtcclxuICAgIHRoaXMucGFydGljbGVEZWFkID0gbmV3IE1pbmlTaWduYWwoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHN0b3AgZW1pdGluZ1xyXG4gICAqIEBtZXRob2Qgc3RvcEVtaXRcclxuICAgKi9cclxuICBzdG9wRW1pdCgpIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcclxuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGN1cnJlbnQgYWxsIHBhcnRpY2xlc1xyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsUGFydGljbGVzKCkge1xyXG4gICAgdGhpcy5fdGFpbFBhcnRpY2xlID0gbnVsbDtcclxuICAgIHRoaXMuX3Bvb2xIZWFkID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZCBpbml0aWFsaXplIHRvIHRoaXMgZW1pdHRlclxyXG4gICAqIEBtZXRob2QgYWRkU2VsZkluaXRpYWxpemVcclxuICAgKi9cclxuICBhZGRTZWxmSW5pdGlhbGl6ZShwT2JqKSB7XHJcbiAgICBpZiAocE9ialsnaW5pdCddKSB7XHJcbiAgICAgIHBPYmouaW5pdCh0aGlzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5pdEFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIHRoZSBJbml0aWFsaXplIHRvIHBhcnRpY2xlcztcclxuICAgKiBcclxuICAgKiB5b3UgY2FuIHVzZSBpbml0aWFsaXplcyBhcnJheTpmb3IgZXhhbXBsZSBlbWl0dGVyLmFkZEluaXRpYWxpemUoaW5pdGlhbGl6ZTEsaW5pdGlhbGl6ZTIsaW5pdGlhbGl6ZTMpO1xyXG4gICAqIEBtZXRob2QgYWRkSW5pdGlhbGl6ZVxyXG4gICAqIEBwYXJhbSB7UXVhcmsuSW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBsaWtlIHRoaXMgbmV3IFF1YXJrLlJhZGl1cygxLCAxMilcclxuICAgKi9cclxuICBhZGRJbml0aWFsaXplKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplcy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgdGhlIEluaXRpYWxpemVcclxuICAgKiBAbWV0aG9kIHJlbW92ZUluaXRpYWxpemVcclxuICAgKiBAcGFyYW0ge1F1YXJrLkluaXRpYWxpemV9IGluaXRpYWxpemUgYSBpbml0aWFsaXplXHJcbiAgICovXHJcbiAgcmVtb3ZlSW5pdGlhbGl6ZShpbml0aWFsaXplcikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluaXRpYWxpemVzLmluZGV4T2YoaW5pdGlhbGl6ZXIpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGFsbCBJbml0aWFsaXplc1xyXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZXJzXHJcbiAgICovXHJcbiAgcmVtb3ZlSW5pdGlhbGl6ZXJzKCkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplcy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIHRoZSBCZWhhdmlvdXIgdG8gcGFydGljbGVzO1xyXG4gICAqIFxyXG4gICAqIHlvdSBjYW4gdXNlIEJlaGF2aW91cnMgYXJyYXk6ZW1pdHRlci5hZGRCZWhhdmlvdXIoQmVoYXZpb3VyMSxCZWhhdmlvdXIyLEJlaGF2aW91cjMpO1xyXG4gICAqIEBtZXRob2QgYWRkQmVoYXZpb3VyXHJcbiAgICogQHBhcmFtIHtRdWFyay5CZWhhdmlvdXJ9IGJlaGF2aW91ciBsaWtlIHRoaXMgbmV3IFF1YXJrLkNvbG9yKCdyYW5kb20nKVxyXG4gICAqL1xyXG4gIGFkZEJlaGF2aW91cigpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5wdXNoKGFyZ3VtZW50c1tpXSk7XHJcbiAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoXCJwYXJlbnRzXCIpKVxyXG4gICAgICAgIGFyZ3VtZW50c1tpXS5wYXJlbnRzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgdGhlIEJlaGF2aW91clxyXG4gICAqIEBtZXRob2QgcmVtb3ZlQmVoYXZpb3VyXHJcbiAgICogQHBhcmFtIHtRdWFyay5CZWhhdmlvdXJ9IGJlaGF2aW91ciBhIGJlaGF2aW91clxyXG4gICAqL1xyXG4gIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5iZWhhdmlvdXJzLmluZGV4T2YoYmVoYXZpb3VyKTtcclxuICAgIGlmIChpbmRleCA+IC0xKVxyXG4gICAgICB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSBhbGwgYmVoYXZpb3Vyc1xyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsQmVoYXZpb3Vyc1xyXG4gICAqL1xyXG4gIHJlbW92ZUFsbEJlaGF2aW91cnMoKSB7XHJcbiAgICB0aGlzLmJlaGF2aW91cnMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICB0aGlzLmFnZSArPSB0aW1lO1xyXG4gICAgaWYgKHRoaXMuZGVhZCB8fCAodGhpcy5hZ2UgPj0gdGhpcy5saWZlKSkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXR0aW5nKHRpbWUpO1xyXG4gICAgdGhpcy5pbnRlZ3JhdGUodGltZSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVzdG9yeSB0aGlzIEVtaXR0ZXJcclxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcclxuICAgKi9cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZWFkID0gdHJ1ZTtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUluaXRpYWxpemVycygpO1xyXG4gICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyZW50KXtcclxuICAgICAgdGhpcy5wYXJlbnQucmVtb3ZlRW1pdHRlcih0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmxldCB1aWQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGV7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5pZCA9IHVpZCsrO1xyXG4gICAgICB0aGlzLnJlc2V0KHRydWUpO1xyXG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3k7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnYueCwgLXRoaXMudi55KSAqICgxODAgLyBNYXRoLlBJKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldChpbml0KSB7XHJcbiAgICAgIHRoaXMubGlmZSA9IEluZmluaXR5O1xyXG4gICAgICB0aGlzLmFnZSA9IDA7XHJcbiAgICAgIHRoaXMuZW5lcmd5ID0gMTtcclxuICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2xlZXAgPSBmYWxzZTtcclxuICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gMTA7XHJcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICB0aGlzLnNjYWxlID0gMTtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuY29sb3IgPSBudWxsO1xyXG4gICAgICB0aGlzLmVhc2luZyA9ICh2YWwpID0+IHZhbDtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7fVxyXG4gICAgICBpZiAoaW5pdCkge1xyXG4gICAgICAgIHRoaXMucCA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMudiA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMuYSA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMub2xkID0ge1xyXG4gICAgICAgICAgcCA6IG5ldyBWZWN0b3IyRCgpLFxyXG4gICAgICAgICAgdiA6IG5ldyBWZWN0b3IyRCgpLFxyXG4gICAgICAgICAgYSA6IG5ldyBWZWN0b3IyRCgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJlaGF2aW91cnMgPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkZWxldGUgdGhpcy50cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5wLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLnYuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMuYS5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQucC5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQudi5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQuYS5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnJnYiA9IHtcclxuICAgICAgICByIDogMjU1LFxyXG4gICAgICAgIGcgOiAyNTUsXHJcbiAgICAgICAgYiA6IDI1NVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShpbmRleCwgdGltZSkge1xyXG4gICAgICBjb25zdCBhZ2UgPSB0aGlzLmFnZSArIHRpbWU7XHJcblxyXG4gICAgICBpZihhZ2UgPj0gdGhpcy5saWZlKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWdlID0gYWdlO1xyXG5cclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5iZWhhdmlvdXJzLmxlbmd0aDtcclxuICAgICAgbGV0IGk7XHJcbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5iZWhhdmlvdXJzW2ldKXtcclxuICAgICAgICAgIHRoaXMuYmVoYXZpb3Vyc1tpXS5hcHBseUJlaGF2aW91cih0aGlzLCB0aW1lLCBpbmRleClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmVhc2luZyh0aGlzLmFnZSAvIHRoaXMubGlmZSk7XHJcbiAgICAgIHRoaXMuZW5lcmd5ID0gTWF0aC5tYXgoMSAtIHNjYWxlLCAwKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJlaGF2aW91cihiZWhhdmlvdXIpIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYmVoYXZpb3VyKTtcclxuICAgICAgaWYgKGJlaGF2aW91ci5oYXNPd25Qcm9wZXJ0eSgncGFyZW50cycpKXtcclxuICAgICAgICBiZWhhdmlvdXIucGFyZW50cy5wdXNoKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGJlaGF2aW91ci5pbml0aWFsaXplKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJlaGF2aW91cnMoYmVoYXZpb3Vycykge1xyXG4gICAgICB2YXIgbGVuZ3RoID0gYmVoYXZpb3Vycy5sZW5ndGgsIGk7XHJcbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFkZEJlaGF2aW91cihiZWhhdmlvdXJzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5iZWhhdmlvdXJzLmluZGV4T2YoYmVoYXZpb3VyKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICB2YXIgYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgYmVoYXZpb3VyLnBhcmVudHMgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0b3J5IHRoaXMgcGFydGljbGVcclxuICAgICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuICAgICAgdGhpcy5lbmVyZ3kgPSAwO1xyXG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRHtcclxuXHJcbiAgY29uc3RydWN0b3IoeCwgeSl7XHJcbiAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgfVxyXG5cclxuICBzZXQoeCwgeSkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0WCh4KSB7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFkoeSkge1xyXG5cclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0Q29tcG9uZW50KGluZGV4LCB2YWx1ZSkge1xyXG5cclxuICAgIHN3aXRjaCAoIGluZGV4ICkge1xyXG5cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHRoaXMueCA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0R3JhZGllbnQoKSB7XHJcbiAgICBpZiAodGhpcy54ICE9IDApXHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA+IDApXHJcbiAgICAgIHJldHVybiBNYXRoLlBJIC8gMjtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA8IDApXHJcbiAgICAgIHJldHVybiAtTWF0aC5QSSAvIDI7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnQoaW5kZXgpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRleCBpcyBvdXQgb2YgcmFuZ2U6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb3B5KHYpIHtcclxuXHJcbiAgICB0aGlzLnggPSB2Lng7XHJcbiAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFkZFZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICB0aGlzLnkgKz0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFhZKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gYTtcclxuICAgIHRoaXMueSArPSBiO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCArIGIueDtcclxuICAgIHRoaXMueSA9IGEueSArIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCArPSBzO1xyXG4gICAgdGhpcy55ICs9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc3ViKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1YlZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICB0aGlzLnkgLT0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1YlZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCAtIGIueDtcclxuICAgIHRoaXMueSA9IGEueSAtIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtdWx0aXBseVNjYWxhcihzKSB7XHJcblxyXG4gICAgdGhpcy54ICo9IHM7XHJcbiAgICB0aGlzLnkgKj0gcztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBkaXZpZGVTY2FsYXIocykge1xyXG5cclxuICAgIGlmIChzICE9PSAwKSB7XHJcblxyXG4gICAgICB0aGlzLnggLz0gcztcclxuICAgICAgdGhpcy55IC89IHM7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHRoaXMuc2V0KDAsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtaW4odikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPiB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA+IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtYXgodikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPCB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBjbGFtcChtaW4sIG1heCkge1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyBtaW4gPCBtYXgsIGlmIHRoaXMgYXNzdW1wdGlvbiBpc24ndCB0cnVlIGl0IHdpbGwgbm90IG9wZXJhdGUgY29ycmVjdGx5XHJcblxyXG4gICAgaWYgKHRoaXMueCA8IG1pbi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtaW4ueDtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueCA+IG1heC54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtYXgueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IG1pbi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtaW4ueTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueSA+IG1heC55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtYXgueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbmVnYXRlKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKC0xKTtcclxuXHJcbiAgfVxyXG5cclxuICBkb3Qodikge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoU3EoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcclxuXHJcbiAgfVxyXG5cclxuICBsZW5ndGgoKSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG5cclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUbyh2KSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlVG9TcXVhcmVkKHYpKTtcclxuXHJcbiAgfVxyXG5cclxuICByb3RhdGUodGhhKSB7XHJcbiAgICB2YXIgeCA9IHRoaXMueDtcclxuICAgIHZhciB5ID0gdGhpcy55O1xyXG4gICAgdGhpcy54ID0geCAqIE1hdGguY29zKHRoYSkgKyB5ICogTWF0aC5zaW4odGhhKTtcclxuICAgIHRoaXMueSA9IC14ICogTWF0aC5zaW4odGhhKSArIHkgKiBNYXRoLmNvcyh0aGEpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZVRvU3F1YXJlZCh2KSB7XHJcblxyXG4gICAgdmFyIGR4ID0gdGhpcy54IC0gdi54LCBkeSA9IHRoaXMueSAtIHYueTtcclxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRMZW5ndGgobCkge1xyXG5cclxuICAgIHZhciBvbGRMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG5cclxuICAgIGlmIChvbGRMZW5ndGggIT09IDAgJiYgbCAhPT0gb2xkTGVuZ3RoKSB7XHJcblxyXG4gICAgICB0aGlzLm11bHRpcGx5U2NhbGFyKGwgLyBvbGRMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGxlcnAodiwgYWxwaGEpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gKHYueCAtIHRoaXMueCApICogYWxwaGE7XHJcbiAgICB0aGlzLnkgKz0gKHYueSAtIHRoaXMueSApICogYWxwaGE7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZXF1YWxzKHYpIHtcclxuXHJcbiAgICByZXR1cm4gKCh2LnggPT09IHRoaXMueCApICYmICh2LnkgPT09IHRoaXMueSApICk7XHJcblxyXG4gIH1cclxuXHJcbiAgdG9BcnJheSgpIHtcclxuXHJcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMueCA9IDAuMDtcclxuICAgIHRoaXMueSA9IDAuMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XHJcblxyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL1ZlY3RvcjJELmpzIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGV7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG51bXBhbiwgdGltZXBhbikge1xyXG4gICAgdGhpcy5udW1QYW4gPSBudW1wYW5cclxuICAgIHRoaXMudGltZVBhbiA9IHRpbWVwYW47XHJcbiAgICB0aGlzLm51bVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoaXMubnVtUGFuKTtcclxuICAgIHRoaXMudGltZVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoaXMudGltZVBhbik7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLm5leHRUaW1lID0gMDtcclxuICAgIHRoaXMuaW5pdCgpOyAgXHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5uZXh0VGltZSA9IHRoaXMudGltZVBhbi5nZXRWYWx1ZSgpOyBcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKHRpbWUpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5zdGFydFRpbWUgPj0gdGhpcy5uZXh0VGltZSkge1xyXG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICAgIHRoaXMubmV4dFRpbWUgPSB0aGlzLnRpbWVQYW4uZ2V0VmFsdWUoKTtcclxuICAgICAgaWYgKHRoaXMubnVtUGFuLmIgPT0gMSkge1xyXG4gICAgICAgIGlmICh0aGlzLm51bVBhbi5nZXRWYWx1ZShmYWxzZSkgPiAwLjUpXHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1QYW4uZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL1JhdGUuanMiLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcbmltcG9ydCBTcGFuIGZyb20gJy4uL21hdGgvU3Bhbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGluaXRWYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIGEgc3BlY2lmaWMgdmFsdWUsIGNvdWxkIGJlIGV2ZXJ5dGhpbmcgYnV0IG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSBkZWZhdWx0cyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgaW5pdFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgZGVmYXVsdHMpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpID8gdmFsdWUgOiBkZWZhdWx0cztcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgVmVjdG9yMkQgLSBvciBjcmVhdGVzIGEgbmV3IG9uZVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGdldFZlY3RvcjJEXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtRdWFyay5WZWN0b3IyRCB8IE51bWJlcn0gcG9zdGlvbk9yWFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt5XSBqdXN0IHZhbGlkIGlmICdwb3N0aW9uT3JYJyBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7UXVhcmsuVmVjdG9yMkR9XHJcbiAgICAgKi9cclxuICAgIGdldFZlY3RvcjJEOiBmdW5jdGlvbihwb3N0aW9uT3JYLCB5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihwb3N0aW9uT3JYKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGlvbk9yWDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdmVjdG9yMmQgPSBuZXcgVmVjdG9yMkQocG9zdGlvbk9yWCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3IyZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QganVkZ2VWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHBPQkpgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIGZ1bmN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBPQkpcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBqdWRnZVZlY3RvcjJEOiBmdW5jdGlvbihwT0JKKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgneScpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3AnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdwb3NpdGlvbicpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ3AnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2eCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3Z4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndicpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3ZlbG9jaXR5JykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAndic7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdhJykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZScpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ2EnO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFZlY3RvcjJEQnlPYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGB0YXJnZXRgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGBwT0JKYFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwT0JKXHJcbiAgICAgKi9cclxuICAgIHNldFZlY3RvcjJEQnlPYmplY3Q6IGZ1bmN0aW9uKHRhcmdldCwgcE9CSikge1xyXG4gICAgICAgIGlmKHBPQkoueCkgdGFyZ2V0LnAueCA9IHBPQkoueDtcclxuXHJcbiAgICAgICAgaWYocE9CSi55KSB0YXJnZXQucC55ID0gcE9CSi55O1xyXG5cclxuICAgICAgICBpZihwT0JKLnZ4KSB0YXJnZXQudi54ID0gcE9CSi52eDtcclxuICAgICAgICBpZihwT0JKLnZ5KSB0YXJnZXQudi55ID0gcE9CSi52eTtcclxuXHJcbiAgICAgICAgaWYocE9CSi5heCkgdGFyZ2V0LmEueCA9IHBPQkouYXg7XHJcbiAgICAgICAgaWYocE9CSi5heSkgdGFyZ2V0LmEueSA9IHBPQkouYXk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbmV3IFF1YXJrLlNwYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2Qgc2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYSwgYiBhbmQgYyBzaG91bGQgYmUgJ01peGVkJyBvciAnTnVtYmVyJz9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUXVhcmsuU3Bhbn0gYVxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gICAgICAgICAgICAgICBiXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtRdWFyay5TcGFufVxyXG4gICAgICovXHJcbiAgICBzZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gU3Bhbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghYylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSwgYik7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIsIGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGZyb20gYSBRdWFyay5TcGFuLCBpZiB0aGUgcGFyYW0gaXMgbm90IGEgUXVhcmsuU3BhbiBpdCB3aWxsIHJldHVybiB0aGUgZ2l2ZW4gcGFyYW1ldGVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgZ2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZCB8IFF1YXJrLlNwYW59IHBhblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge01peGVkfSB0aGUgdmFsdWUgb2YgUXVhcmsuU3BhbiBPUiB0aGUgcGFyYW1ldGVyIGlmIGl0IGlzIG5vdCBhIFF1YXJrLlNwYW5cclxuICAgICAqL1xyXG4gICAgZ2V0U3BhblZhbHVlOiBmdW5jdGlvbihwYW4pIHtcclxuICAgICAgICBpZiAocGFuLmNvbnN0cnVjdG9yID09PSBTcGFuKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuLmdldFZhbHVlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlZGVmICB7T2JqZWN0fSByZ2JPYmplY3RcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByIHJlZCB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGcgZ3JlZW4gdmFsdWVcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBiIGJsdWUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIHJnYiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBoZXhUb1JHQlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoIGFueSBoZXggdmFsdWUsIGUuZy4gIzAwMDAwMCBvciAwMDAwMDAgZm9yIGJsYWNrXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7cmdiT2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBoZXhUb1JHQjogZnVuY3Rpb24oaCkge1xyXG4gICAgICAgIHZhciBoZXgxNiA9IChoLmNoYXJBdCgwKSA9PSBcIiNcIikgPyBoLnN1YnN0cmluZygxLCA3KSA6IGg7XHJcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoMCwgMiksIDE2KTtcclxuICAgICAgICB2YXIgZyA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygyLCA0KSwgMTYpO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDQsIDYpLCAxNik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IHIsXHJcbiAgICAgICAgICAgIGc6IGcsXHJcbiAgICAgICAgICAgIGI6IGJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29udmVydHMgYSByZ2IgdmFsdWUgdG8gYSByZ2Igc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgcmdiVG9IZXhcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdCB8IFF1YXJrLmhleFRvUkdCfSByZ2IgYSByZ2Igb2JqZWN0IGxpa2UgaW4ge0BsaW5rIFF1YXJrI1F1YXJrLlV0aWwuaGV4VG9SR0J9XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZ2IoKVxyXG4gICAgICovXHJcbiAgICByZ2JUb0hleDogZnVuY3Rpb24ocmJnKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJiZy5yICsgJywgJyArIHJiZy5nICsgJywgJyArIHJiZy5iICsgJyknO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvVXRpbC5qcyIsImltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhbntcclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBjZW50ZXIgPSBmYWxzZSkge1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcclxuXHRcdFx0dGhpcy5pc0FycmF5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5hID0gYTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYSA9IGE7XHJcblx0XHRcdHRoaXMuYiA9IGIgfHwgdGhpcy5hO1xyXG5cdFx0XHR0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFZhbHVlKElOVCl7XHJcblx0XHRpZiAodGhpcy5pc0FycmF5KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmFbTWF0aC5mbG9vcih0aGlzLmEubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCF0aGlzLmNlbnRlcil7XHJcblx0XHRcdFx0cmV0dXJuIHJhbmRvbUFUb0IodGhpcy5hLCB0aGlzLmIsIElOVCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHJldHVybiByYW5kb21GbG9hdGluZyh0aGlzLmEsIHRoaXMuYiwgSU5UKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL1NwYW4uanMiLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tQVRvQihhLCBiLCBJTlQpIHtcclxuICBpZiAoIUlOVClcclxuICAgIHJldHVybiAoYSArIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKSk8PDA7XHJcbiAgZWxzZVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChiIC0gYSkpICsgYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0aW5nKGNlbnRlciwgZiwgSU5UKSB7XHJcbiAgcmV0dXJuIHJhbmRvbUFUb0IoY2VudGVyIC0gZiwgY2VudGVyICsgZiwgSU5UKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZVRyYW5zZm9ybShhKSB7XHJcbiAgcmV0dXJuIGEgKiBNYXRoLlBJIC8gMTgwO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvTWF0aFV0aWxzLmpzIiwiaW1wb3J0IHsgRVVMRVIgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNhbEludGVncmF0aW9uIHtcclxuXHJcbiAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCBFVUxFUjtcclxuXHJcbiAgICB0aGlzLmludGVncmF0ZSA9IHRoaXMuaW50ZWdyYXRlO1xyXG4gICAgdGhpcy5ldWxlckludGVncmF0ZSA9IHRoaXMuZXVsZXJJbnRlZ3JhdGU7XHJcbiAgfVxyXG5cclxuICBpbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcclxuICAgIHRoaXMuZXVsZXJJbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpO1xyXG4gIH1cclxuXHJcbiAgZXVsZXJJbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcclxuICAgIGlmICghcGFydGljbGUuc2xlZXApIHtcclxuICAgICAgcGFydGljbGUub2xkLnAuY29weShwYXJ0aWNsZS5wKTtcclxuICAgICAgcGFydGljbGUub2xkLnYuY29weShwYXJ0aWNsZS52KTtcclxuICAgICAgcGFydGljbGUuYS5tdWx0aXBseVNjYWxhcigxIC8gcGFydGljbGUubWFzcyk7XHJcbiAgICAgIHBhcnRpY2xlLnYuYWRkKHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIodGltZSkpO1xyXG4gICAgICBwYXJ0aWNsZS5wLmFkZChwYXJ0aWNsZS5vbGQudi5tdWx0aXBseVNjYWxhcih0aW1lKSk7XHJcbiAgICAgIGlmIChkYW1waW5nKXtcclxuICAgICAgICBwYXJ0aWNsZS52Lm11bHRpcGx5U2NhbGFyKGRhbXBpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHBhcnRpY2xlLmEuY2xlYXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgeyBkZWdyZWVUcmFuc2Zvcm0gfSBmcm9tICcuLi9tYXRoL01hdGhVdGlscyc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplcykge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGluaXRpYWxpemVzLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gaW5pdGlhbGl6ZXNbaV07XHJcbiAgICBpZiAoaW5pdGlhbGl6ZSBpbnN0YW5jZW9mIEluaXRpYWxpemUpe1xyXG4gICAgICBpbml0aWFsaXplLmluaXQoZW1pdHRlciwgcGFydGljbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kRW1pdHRlcihlbWl0dGVyLCBwYXJ0aWNsZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplKXtcclxuICBVdGlsLnNldFZlY3RvcjJEQnlPYmplY3QocGFydGljbGUsIGluaXRpYWxpemUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kRW1pdHRlcihlbWl0dGVyLCBwYXJ0aWNsZSkge1xyXG4gIGlmIChlbWl0dGVyLmJpbmRFbWl0dGVyKSB7XHJcbiAgICBwYXJ0aWNsZS5wLmFkZChlbWl0dGVyLnApO1xyXG4gICAgcGFydGljbGUudi5hZGQoZW1pdHRlci52KTtcclxuICAgIHBhcnRpY2xlLmEuYWRkKGVtaXR0ZXIuYSk7XHJcbiAgICBwYXJ0aWNsZS52LnJvdGF0ZShkZWdyZWVUcmFuc2Zvcm0oZW1pdHRlci5yb3RhdGlvbikpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemVVdGlsLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdGlhbGl6ZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cmVzZXQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0aW5pdChlbWl0dGVyLCBwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHBhcnRpY2xlKSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxpemUoZW1pdHRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCkge1xyXG5cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9Jbml0aWFsaXplLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBNaW5pU2lnbmFsQmluZGluZyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWxCaW5kaW5nKGZuLCBvbmNlLCB0aGlzQXJnKSB7XG4gICAgaWYgKG9uY2UgPT09IHVuZGVmaW5lZCkgb25jZSA9IGZhbHNlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWxCaW5kaW5nKTtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fb25jZSA9IG9uY2U7XG4gICAgdGhpcy5fdGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgdGhpcy5fbmV4dCA9IHRoaXMuX3ByZXYgPSB0aGlzLl9vd25lciA9IG51bGw7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbEJpbmRpbmcsIFt7XG4gICAga2V5OiAnZGV0YWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgICAgaWYgKHRoaXMuX293bmVyID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLl9vd25lci5kZXRhY2godGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWluaVNpZ25hbEJpbmRpbmc7XG59KSgpO1xuXG5mdW5jdGlvbiBfYWRkTWluaVNpZ25hbEJpbmRpbmcoc2VsZiwgbm9kZSkge1xuICBpZiAoIXNlbGYuX2hlYWQpIHtcbiAgICBzZWxmLl9oZWFkID0gbm9kZTtcbiAgICBzZWxmLl90YWlsID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLl90YWlsLl9uZXh0ID0gbm9kZTtcbiAgICBub2RlLl9wcmV2ID0gc2VsZi5fdGFpbDtcbiAgICBzZWxmLl90YWlsID0gbm9kZTtcbiAgfVxuXG4gIG5vZGUuX293bmVyID0gc2VsZjtcblxuICByZXR1cm4gbm9kZTtcbn1cblxudmFyIE1pbmlTaWduYWwgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNaW5pU2lnbmFsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaW5pU2lnbmFsKTtcblxuICAgIHRoaXMuX2hlYWQgPSB0aGlzLl90YWlsID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1pbmlTaWduYWwsIFt7XG4gICAga2V5OiAnaGFuZGxlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVycygpIHtcbiAgICAgIHZhciBleGlzdHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoZXhpc3RzKSByZXR1cm4gISFub2RlO1xuXG4gICAgICB2YXIgZWUgPSBbXTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgZWUucHVzaChub2RlKTtcbiAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjaGFzKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZS5fb3duZXIgPT09IHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzcGF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcblxuICAgICAgaWYgKCFub2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl9vbmNlKSB0aGlzLmRldGFjaChub2RlKTtcbiAgICAgICAgbm9kZS5fZm4uYXBwbHkobm9kZS5fdGhpc0FyZywgYXJndW1lbnRzKTtcbiAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChmbikge1xuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNhZGQoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBGdW5jdGlvbi4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYWRkTWluaVNpZ25hbEJpbmRpbmcodGhpcywgbmV3IE1pbmlTaWduYWxCaW5kaW5nKGZuLCBmYWxzZSwgdGhpc0FyZykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI29uY2UoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBGdW5jdGlvbi4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYWRkTWluaVNpZ25hbEJpbmRpbmcodGhpcywgbmV3IE1pbmlTaWduYWxCaW5kaW5nKGZuLCB0cnVlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBNaW5pU2lnbmFsQmluZGluZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2RldGFjaCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIE1pbmlTaWduYWxCaW5kaW5nIG9iamVjdC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLl9vd25lciAhPT0gdGhpcykgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChub2RlLl9wcmV2KSBub2RlLl9wcmV2Ll9uZXh0ID0gbm9kZS5fbmV4dDtcbiAgICAgIGlmIChub2RlLl9uZXh0KSBub2RlLl9uZXh0Ll9wcmV2ID0gbm9kZS5fcHJldjtcblxuICAgICAgaWYgKG5vZGUgPT09IHRoaXMuX2hlYWQpIHtcbiAgICAgICAgdGhpcy5faGVhZCA9IG5vZGUuX25leHQ7XG4gICAgICAgIGlmIChub2RlLl9uZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fdGFpbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZSA9PT0gdGhpcy5fdGFpbCkge1xuICAgICAgICB0aGlzLl90YWlsID0gbm9kZS5fcHJldjtcbiAgICAgICAgdGhpcy5fdGFpbC5fbmV4dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX293bmVyID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaEFsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaEFsbCgpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcbiAgICAgIGlmICghbm9kZSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIHRoaXMuX2hlYWQgPSB0aGlzLl90YWlsID0gbnVsbDtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsO1xufSkoKTtcblxuTWluaVNpZ25hbC5NaW5pU2lnbmFsQmluZGluZyA9IE1pbmlTaWduYWxCaW5kaW5nO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNaW5pU2lnbmFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWluaS1zaWduYWxzL2xpYi9taW5pLXNpZ25hbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSYXRlIGZyb20gJy4vUmF0ZSc7XHJcbmltcG9ydCBWZWxvY2l0eSBmcm9tICcuL1ZlbG9jaXR5JztcclxuaW1wb3J0IExpZmUgZnJvbSAnLi9MaWZlJztcclxuaW1wb3J0IE1hc3MgZnJvbSAnLi9NYXNzJztcclxuaW1wb3J0IFJhZGl1cyBmcm9tICcuL1JhZGl1cyc7XHJcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL1Bvc2l0aW9uJztcclxuXHJcbmV4cG9ydCB7IFJhdGUsIFZlbG9jaXR5LCBMaWZlLCBNYXNzLCBSYWRpdXMsIFBvc2l0aW9uIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvaW5kZXguanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgeyBNRUFTVVJFIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XHJcbmltcG9ydCBQb2xhcjJEIGZyb20gJy4uL21hdGgvUG9sYXIyRCc7XHJcbmltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi4vbWF0aC9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cdGNvbnN0cnVjdG9yKHJwYW4sIHRoYXBhbiwgdHlwZSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHJcblx0XHQvLyBzcGVlZCBvcHRpbWl6YXRpb25zXHJcblx0XHR0aGlzLlBPTEFSID0gJ3BvbGFyJztcclxuXHRcdHRoaXMuUCA9ICdwJztcclxuXHRcdHRoaXMuclBhblZhbCA9IHRoaXMuclBhbi5nZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5ub3JtYWxpemVkUEkgPSBNYXRoLlBJIC8gMTgwO1xyXG5cdH1cclxuXHJcblx0cmVzZXQocnBhbiwgdGhhcGFuLCB0eXBlKSB7XHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHR9XHJcblxyXG5cdG5vcm1hbGl6ZVZlbG9jaXR5KHZyKSB7XHJcblx0XHRyZXR1cm4gdnIgKiBNRUFTVVJFO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdGlmICh0aGlzLnR5cGUgPT0gdGhpcy5QIHx8IHRoaXMudHlwZSA9PSB0aGlzLlAgfHwgdGhpcy50eXBlID09IHRoaXMuUE9MQVIpIHtcclxuXHRcdFx0Y29uc3QgdGhhUGFuTm9ybSA9IHJhbmRvbUFUb0IodGhpcy50aGFQYW4uYSwgdGhpcy50aGFQYW4uYikqdGhpcy5ub3JtYWxpemVkUEk7XHJcblx0XHRcdGNvbnN0IHBvbGFyMmQgPSBuZXcgUG9sYXIyRCh0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhblZhbCksIHRoYVBhbk5vcm0pO1xyXG5cdFx0XHR0YXJnZXQudi54ID0gcG9sYXIyZC5nZXRYKCk7XHJcblx0XHRcdHRhcmdldC52LnkgPSBwb2xhcjJkLmdldFkoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhcmdldC52LnggPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhbi5nZXRWYWx1ZSgpKTtcclxuXHRcdFx0dGFyZ2V0LnYueSA9IHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy50aGFQYW4uZ2V0VmFsdWUoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvVmVsb2NpdHkuanMiLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2xhcjJEIHtcclxuXHJcblx0Y29uc3RydWN0b3IociwgdGhhKXtcclxuXHRcdHRoaXMuciA9IE1hdGguYWJzKHIpIHx8IDA7XHJcblx0XHR0aGlzLnRoYSA9IHRoYSB8fCAwO1xyXG5cdH1cclxuXHJcblx0c2V0KHIsIHRoYSkge1xyXG5cclxuXHRcdHRoaXMuciA9IHI7XHJcblx0XHR0aGlzLnRoYSA9IHRoYTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFIocikge1xyXG5cclxuXHRcdHRoaXMuciA9IHI7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRUaGEodGhhKSB7XHJcblxyXG5cdFx0dGhpcy50aGEgPSB0aGE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0Y29weShwKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcC5yO1xyXG5cdFx0dGhpcy50aGEgPSBwLnRoYTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHR0b1ZlY3RvcigpIHtcclxuXHRcdHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy5nZXRYKCksIHRoaXMuZ2V0WSgpKTtcclxuXHR9XHJcblxyXG5cdGdldFgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yICogTWF0aC5zaW4odGhpcy50aGEpO1xyXG5cdH1cclxuXHJcblx0Z2V0WSgpIHtcclxuXHRcdHJldHVybiAtdGhpcy5yICogTWF0aC5jb3ModGhpcy50aGEpO1xyXG5cdH1cclxuXHJcblx0bm9ybWFsaXplKCkge1xyXG5cclxuXHRcdHRoaXMuciA9IDE7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGVxdWFscyh2KSB7XHJcblxyXG5cdFx0cmV0dXJuICgodi5yID09PSB0aGlzLnIgKSAmJiAodi50aGEgPT09IHRoaXMudGhhICkgKTtcclxuXHJcblx0fVxyXG5cclxuXHR0b0FycmF5KCkge1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5yLCB0aGlzLnRoYV07XHJcblxyXG5cdH1cclxuXHJcblx0Y2xlYXIoKSB7XHJcblx0XHR0aGlzLnIgPSAwLjA7XHJcblx0XHR0aGlzLnRoYSA9IDAuMDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Y2xvbmUoKSB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQb2xhcjJEKHRoaXMuciwgdGhpcy50aGEpO1xyXG5cclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvUG9sYXIyRC5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWZlIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgYykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmxpZmVQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHRpZiAodGhpcy5saWZlUGFuLmEgPT0gSW5maW5pdHkpe1xyXG5cdFx0XHR0YXJnZXQubGlmZSA9IEluZmluaXR5O1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRhcmdldC5saWZlID0gdGhpcy5saWZlUGFuLmdldFZhbHVlKCk7XHRcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9MaWZlLmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc3MgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGEsIGIsIGMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc3NQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHRhcmdldCkge1xyXG4gICAgICAgIHRhcmdldC5tYXNzID0gdGhpcy5tYXNzUGFuLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGl1cyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgXHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucmFkaXVzID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoYSwgYiwgYyl7XHJcblx0XHR0aGlzLnJhZGl1cyA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnJhZGl1cyA9IHRoaXMucmFkaXVzLmdldFZhbHVlKCk7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ub2xkUmFkaXVzID0gcGFydGljbGUucmFkaXVzO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioem9uZSkge1xyXG4gICAgXHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuem9uZSA9IHpvbmUgfHwgbmV3IFBvaW50Wm9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KHpvbmUpe1xyXG5cdFx0dGhpcy56b25lID0gem9uZSB8fCBuZXcgUG9pbnRab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdHRoaXMuem9uZS5nZXRQb3NpdGlvbigpO1xyXG5cdFx0dGFyZ2V0LnAueCA9IHRoaXMuem9uZS52ZWN0b3IueDtcclxuXHRcdHRhcmdldC5wLnkgPSB0aGlzLnpvbmUudmVjdG9yLnk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvUG9zaXRpb24uanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4uL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGg7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkRFQUQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdH0gZWxzZSBpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzIDwgdGhpcy55KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueCAmJiBwYXJ0aWNsZS52LnggPD0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnggPSB0aGlzLnggKyB0aGlzLndpZHRoICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRlbHNlIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBhcnRpY2xlLnYueCA+PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkgJiYgcGFydGljbGUudi55IDw9IDApXHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmIHBhcnRpY2xlLnYueSA+PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9SZWN0Wm9uZS5qcyIsImltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMudmVjdG9yID0gbmV3IFZlY3RvcjJEKDAsIDApO1xyXG5cdFx0dGhpcy5yYW5kb20gPSAwO1xyXG5cdFx0dGhpcy5jcm9zc1R5cGUgPSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRDtcclxuXHRcdHRoaXMuYWxlcnQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblxyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvWm9uZS5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jvc3Nab25lIGV4dGVuZHMgQmVoYXZpb3Vye1xyXG5cclxuXHRzdGF0aWMgQ1JPU1NfVFlQRVMgPSB7XHJcblx0XHRDUk9TUzogMSA8PCAwLFxyXG5cdFx0REVBRDogMSA8PCAyLFxyXG5cdFx0Qk9VTkQ6IDEgPDwgM1xyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KHpvbmUsIGNyb3NzVHlwZSk7XHJcblx0XHR0aGlzLm5hbWUgPSAnQ3Jvc3Nab25lJztcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHRoaXMuem9uZSA9IHpvbmU7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NUeXBlID0gVXRpbC5pbml0VmFsdWUoY3Jvc3NUeXBlLCBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NpbmcocGFydGljbGUpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0Nyb3NzWm9uZS5qcyIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCB7IE1FQVNVUkUgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuaW1wb3J0IGdldEVhc2luZ0J5TmFtZSBmcm9tICcuLi9tYXRoL2Vhc2UnO1xyXG5cclxuXHJcbmNvbnN0IEJFSEFWSU9VUl9JRF9CQVNFID0gMHhGRkZGRjtcclxubGV0IHVpZCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihsaWZlLCBlYXNpbmcgPSAnZWFzZUxpbmVhcicpIHtcclxuXHRcdHRoaXMuaWQgPSBCRUhBVklPVVJfSURfQkFTRSArIHVpZCsrO1xyXG5cdFx0dGhpcy5saWZlID0gbGlmZSB8fCBJbmZpbml0eTtcclxuXHRcdHRoaXMuZWFzaW5nID0gZ2V0RWFzaW5nQnlOYW1lKGVhc2luZyk7XHJcblx0XHR0aGlzLmFnZSA9IDA7XHJcblx0XHR0aGlzLmVuZXJneSA9IDE7XHJcblx0XHR0aGlzLmRlYWQgPSBmYWxzZTtcclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5uYW1lID0gJ0JlaGF2aW91cic7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMubGlmZSA9IGxpZmUgfHwgSW5maW5pdHk7XHJcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBnZXRFYXNpbmdCeU5hbWUoJ2Vhc2VMaW5lYXInKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIGZvcmNlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVGb3JjZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gZm9yY2UgXHJcblx0ICovXHJcblx0bm9ybWFsaXplRm9yY2UoZm9yY2UpIHtcclxuXHRcdHJldHVybiBmb3JjZS5tdWx0aXBseVNjYWxhcihNRUFTVVJFKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIHZhbHVlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVWYWx1ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcclxuXHQgKi9cclxuXHRub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlICogTUVBU1VSRTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgdGhlIGJlaGF2aW91cidzIHBhcmFtZXRlcnMgZm9yIGFsbCBwYXJ0aWNsZXNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHR0aGlzLmFnZSArPSB0aW1lO1xyXG5cdFx0aWYgKHRoaXMuYWdlID49IHRoaXMubGlmZSB8fCB0aGlzLmRlYWQpIHtcclxuXHRcdFx0dGhpcy5lbmVyZ3kgPSAwO1xyXG5cdFx0XHR0aGlzLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBzY2FsZSA9IHRoaXMuZWFzaW5nKHBhcnRpY2xlLmFnZSAvIHBhcnRpY2xlLmxpZmUpO1xyXG5cdFx0XHR0aGlzLmVuZXJneSA9IE1hdGgubWF4KDEgLSBzY2FsZSwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIERlc3RvcnkgdGhpcyBiZWhhdmlvdXJcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgZGVzdHJveVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICovXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHZhciBpbmRleDtcclxuXHRcdHZhciBsZW5ndGggPSB0aGlzLnBhcmVudHMubGVuZ3RoLCBpO1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLnBhcmVudHNbaV0ucmVtb3ZlQmVoYXZpb3VyKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQmVoYXZpb3VyLmpzIiwiY29uc3QgZWFzaW5nID0ge1xyXG5cdGVhc2VMaW5lYXIgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHZhbHVlLCAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0UXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLShNYXRoLnBvdygodmFsdWUgLSAxKSwgMikgLSAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRRdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgMik7XHJcblx0XHRyZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAtIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMyk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dEN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAoTWF0aC5wb3coKHZhbHVlIC0gMSksIDMpICsgMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0Q3ViaWMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCAzKTtcclxuXHRcdHJldHVybiAwLjUgKiAoTWF0aC5wb3coKHZhbHVlIC0gMiksIDMpICsgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluUXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHZhbHVlLCA0KTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0UXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5wb3coKHZhbHVlIC0gMSksIDQpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0UXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCA0KTtcclxuXHRcdHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIE1hdGgucG93KHZhbHVlLCAzKSAtIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC1NYXRoLmNvcyh2YWx1ZSAqIChNYXRoLlBJIC8gMikpICsgMTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0U2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zaW4odmFsdWUgKiAoTWF0aC5QSSAvIDIpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRTaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAoLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpIC0gMSkpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICh2YWx1ZSA9PT0gMCkgPyAwIDogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dEV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICh2YWx1ZSA9PT0gMSkgPyAxIDogLU1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0RXhwbyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUgPT09IDApXHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0aWYgKHZhbHVlID09PSAxKVxyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKTtcclxuXHRcdHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdmFsdWUpICsgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluQ2lyYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLShNYXRoLnNxcnQoMSAtICh2YWx1ZSAqIHZhbHVlKSkgLSAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0Q2lyYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygodmFsdWUgLSAxKSwgMikpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dENpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xyXG5cdFx0cmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xyXG5cdH0sXHJcblx0XHJcblx0ZWFzZUluQmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gKHZhbHVlKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRCYWNrIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhciBzID0gMS43MDE1ODtcclxuXHRcdHJldHVybiAoIHZhbHVlID0gdmFsdWUgLSAxKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRCYWNrIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhciBzID0gMS43MDE1ODtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHZhbHVlIC0gcykpO1xyXG5cdFx0cmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcclxuXHR9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRFYXNpbmdCeU5hbWUobmFtZSkge1xyXG5cdHJldHVybiBlYXNpbmdbbmFtZV1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9lYXNlLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54O1xyXG5cdFx0dGhpcy52ZWN0b3IueSA9IHRoaXMueTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0YWxlcnQoJ1NvcnJ5IFBvaW50Wm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzaW5nIG1ldGhvZCcpO1xyXG5cdFx0XHR0aGlzLmFsZXJ0ID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvUG9pbnRab25lLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuLi9iZWhhdmlvdXIvQ3Jvc3Nab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgxLCB5MSwgeDIsIHkyLCBkaXJlY3Rpb24pIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0aWYgKHgyIC0geDEgPj0gMCkge1xyXG5cdFx0XHR0aGlzLngxID0geDE7XHJcblx0XHRcdHRoaXMueTEgPSB5MTtcclxuXHRcdFx0dGhpcy54MiA9IHgyO1xyXG5cdFx0XHR0aGlzLnkyID0geTI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLngxID0geDI7XHJcblx0XHRcdHRoaXMueTEgPSB5MjtcclxuXHRcdFx0dGhpcy54MiA9IHgxO1xyXG5cdFx0XHR0aGlzLnkyID0geTE7XHJcblx0XHR9XHJcblx0XHR0aGlzLmR4ID0gdGhpcy54MiAtIHRoaXMueDE7XHJcblx0XHR0aGlzLmR5ID0gdGhpcy55MiAtIHRoaXMueTE7XHJcblx0XHR0aGlzLm1pbnggPSBNYXRoLm1pbih0aGlzLngxLCB0aGlzLngyKTtcclxuXHRcdHRoaXMubWlueSA9IE1hdGgubWluKHRoaXMueTEsIHRoaXMueTIpO1xyXG5cdFx0dGhpcy5tYXh4ID0gTWF0aC5tYXgodGhpcy54MSwgdGhpcy54Mik7XHJcblx0XHR0aGlzLm1heHkgPSBNYXRoLm1heCh0aGlzLnkxLCB0aGlzLnkyKTtcclxuXHRcdHRoaXMuZG90ID0gdGhpcy54MiAqIHRoaXMueTEgLSB0aGlzLngxICogdGhpcy55MjtcclxuXHRcdHRoaXMueHh5eSA9IHRoaXMuZHggKiB0aGlzLmR4ICsgdGhpcy5keSAqIHRoaXMuZHk7XHJcblx0XHR0aGlzLmdyYWRpZW50ID0gdGhpcy5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xyXG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgMTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueDEgKyB0aGlzLnJhbmRvbSAqIHRoaXMubGVuZ3RoICogTWF0aC5jb3ModGhpcy5ncmFkaWVudCk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55MSArIHRoaXMucmFuZG9tICogdGhpcy5sZW5ndGggKiBNYXRoLnNpbih0aGlzLmdyYWRpZW50KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5ERUFEKSB7XHJcblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkJPVU5EKSB7XHJcblx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChzZWxmLmdldERpc3RhbmNlKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSA8PSBwYXJ0aWNsZS5yYWRpdXMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmR4ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLmR5ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5nZXRTeW1tZXRyaWMocGFydGljbGUudik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkNST1NTKSB7XHJcblx0XHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5IGxpbmVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXREaXJlY3Rpb24oeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IEIgPT0gMCA/IDEgOiBCO1xyXG5cdFx0aWYgKChBICogeCArIEIgKiB5ICsgQykgKiBEID4gMClcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGlzdGFuY2UoeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IChBICogeCArIEIgKiB5ICsgQyk7XHJcblx0XHRyZXR1cm4gRCAvIE1hdGguc3FydCh0aGlzLnh4eXkpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3ltbWV0cmljKHYpIHtcclxuXHRcdHZhciB0aGEyID0gdi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhID0gMiAqICh0aGExIC0gdGhhMik7XHJcblx0XHR2YXIgb2xkeCA9IHYueDtcclxuXHRcdHZhciBvbGR5ID0gdi55O1xyXG5cdFx0di54ID0gb2xkeCAqIE1hdGguY29zKHRoYSkgLSBvbGR5ICogTWF0aC5zaW4odGhhKTtcclxuXHRcdHYueSA9IG9sZHggKiBNYXRoLnNpbih0aGEpICsgb2xkeSAqIE1hdGguY29zKHRoYSk7XHJcblx0XHRyZXR1cm4gdjtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KCkge1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIodGhpcy5keSwgdGhpcy5keCk7XHJcblx0fVxyXG5cclxuXHRnZXRSYW5nZShwYXJ0aWNsZSwgZnVuKSB7XHJcblx0XHR2YXIgYW5nbGUgPSBNYXRoLmFicyh0aGlzLmdldEdyYWRpZW50KCkpO1xyXG5cdFx0aWYgKGFuZ2xlIDw9IE1hdGguUEkgLyA0KSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnggPCB0aGlzLm1heHggJiYgcGFydGljbGUucC54ID4gdGhpcy5taW54KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgPCB0aGlzLm1heHkgJiYgcGFydGljbGUucC55ID4gdGhpcy5taW55KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldExlbmd0aCgpIHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keSlcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9MaW5lWm9uZS5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoaW1hZ2VEYXRhLCB4LCB5LCBkKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5yZXNldChpbWFnZURhdGEsIHgsIHksIGQpO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoaW1hZ2VEYXRhLCB4LCB5LCBkKSB7XHJcblx0XHR0aGlzLmltYWdlRGF0YSA9IGltYWdlRGF0YTtcclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy5kID0gZCB8fCAyO1xyXG5cdFx0dGhpcy52ZWN0b3JzID0gW107XHJcblx0XHR0aGlzLnNldFZlY3RvcnMoKTtcclxuXHR9XHJcblxyXG5cdHNldFZlY3RvcnMoKSB7XHJcblx0XHR2YXIgaSwgajtcclxuXHRcdHZhciBsZW5ndGgxID0gdGhpcy5pbWFnZURhdGEud2lkdGg7XHJcblx0XHR2YXIgbGVuZ3RoMiA9IHRoaXMuaW1hZ2VEYXRhLmhlaWdodDtcclxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoMTsgaSArPSB0aGlzLmQpIHtcclxuXHRcdFx0Zm9yICggaiA9IDA7IGogPCBsZW5ndGgyOyBqICs9IHRoaXMuZCkge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9ICgoaiA+PiAwKSAqIGxlbmd0aDEgKyAoaSA+PiAwKSkgKiA0O1xyXG5cdFx0XHRcdGlmICh0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnZlY3RvcnMucHVzaCh7XHJcblx0XHRcdFx0XHRcdHggOiBpICsgdGhpcy54LFxyXG5cdFx0XHRcdFx0XHR5IDogaiArIHRoaXMueVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRnZXRCb3VuZCh4LCB5KSB7XHJcblx0XHR2YXIgaW5kZXggPSAoKHkgPj4gMCkgKiB0aGlzLmltYWdlRGF0YS53aWR0aCArICh4ID4+IDApKSAqIDQ7XHJcblx0XHRpZiAodGhpcy5pbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID4gMClcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yLmNvcHkodGhpcy52ZWN0b3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudmVjdG9ycy5sZW5ndGgpXSk7XHJcblx0fVxyXG5cclxuXHRnZXRDb2xvcih4LCB5KSB7XHJcblx0XHR4IC09IHRoaXMueDtcclxuXHRcdHkgLT0gdGhpcy55O1xyXG5cdFx0dmFyIGkgPSAoKHkgPj4gMCkgKiB0aGlzLmltYWdlRGF0YS53aWR0aCArICh4ID4+IDApKSAqIDQ7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpXSxcclxuXHRcdFx0ZyA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDFdLFxyXG5cdFx0XHRiIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgMl0sXHJcblx0XHRcdGEgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAzXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJkZWFkXCIpIHtcclxuXHRcdFx0aWYgKHRoaXMuZ2V0Qm91bmQocGFydGljbGUucC54IC0gdGhpcy54LCBwYXJ0aWNsZS5wLnkgLSB0aGlzLnkpKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImJvdW5kXCIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmdldEJvdW5kKHBhcnRpY2xlLnAueCAtIHRoaXMueCwgcGFydGljbGUucC55IC0gdGhpcy55KSlcclxuXHRcdFx0XHRwYXJ0aWNsZS52Lm5lZ2F0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL0ltYWdlWm9uZS5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcbmltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSwgcmFkaXVzKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuXHRcdHRoaXMuYW5nbGUgPSAwO1xyXG5cdFx0dGhpcy5jZW50ZXIgPSB7XHJcblx0XHRcdHggOiB0aGlzLngsXHJcblx0XHRcdHkgOiB0aGlzLnlcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMucmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMuYW5nbGUgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54ICsgdGhpcy5yYW5kb20gKiB0aGlzLnJhZGl1cyAqIE1hdGguY29zKHRoaXMuYW5nbGUpO1xyXG5cdFx0dGhpcy52ZWN0b3IueSA9IHRoaXMueSArIHRoaXMucmFuZG9tICogdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdHNldENlbnRlcih4LCB5KSB7XHJcblx0XHR0aGlzLmNlbnRlci54ID0geDtcclxuXHRcdHRoaXMuY2VudGVyLnkgPSB5O1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdHZhciBkID0gcGFydGljbGUucC5kaXN0YW5jZVRvKHRoaXMuY2VudGVyKTtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCkge1xyXG5cdFx0XHRpZiAoZCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMucmFkaXVzKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0aWYgKGQgKyBwYXJ0aWNsZS5yYWRpdXMgPj0gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0dGhpcy5nZXRTeW1tZXRyaWMocGFydGljbGUpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0XHRhbGVydCgnU29ycnkgQ2lyY2xlWm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG1ldGhvZCcpO1xyXG5cdFx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0U3ltbWV0cmljKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgdGhhMiA9IHBhcnRpY2xlLnYuZ2V0R3JhZGllbnQoKTtcclxuXHRcdHZhciB0aGExID0gdGhpcy5nZXRHcmFkaWVudChwYXJ0aWNsZSk7XHJcblx0XHR2YXIgdGhhID0gMiAqICh0aGExIC0gdGhhMik7XHJcblx0XHR2YXIgb2xkeCA9IHBhcnRpY2xlLnYueDtcclxuXHRcdHZhciBvbGR5ID0gcGFydGljbGUudi55O1xyXG5cdFx0cGFydGljbGUudi54ID0gb2xkeCAqIE1hdGguY29zKHRoYSkgLSBvbGR5ICogTWF0aC5zaW4odGhhKTtcclxuXHRcdHBhcnRpY2xlLnYueSA9IG9sZHggKiBNYXRoLnNpbih0aGEpICsgb2xkeSAqIE1hdGguY29zKHRoYSk7XHJcblx0fVxyXG5cclxuXHRnZXRHcmFkaWVudChwYXJ0aWNsZSkge1xyXG5cdFx0cmV0dXJuIC1NYXRoLlBJIC8gMiArIE1hdGguYXRhbjIocGFydGljbGUucC55IC0gdGhpcy5jZW50ZXIueSwgcGFydGljbGUucC54IC0gdGhpcy5jZW50ZXIueCk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvQ2lyY2xlWm9uZS5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxwaGEgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblxyXG5cdFx0dGhpcy5yZXNldChhLCBiLCB0aGlzLmxpZmUpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJBbHBoYVwiO1xyXG5cclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2EnIGFuZCAnYidcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGJcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9UXVhcmsuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0aWYgKGIgPT0gbnVsbCB8fCBiID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdHRoaXMuc2FtZSA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNhbWUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYSA9IFV0aWwuc2V0U3BhblZhbHVlKGEgfHwgMSk7XHJcblx0XHR0aGlzLmIgPSBVdGlsLnNldFNwYW5WYWx1ZShiKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIG5ldyBhbHBoYSB2YWx1ZSBvZiB0aGUgcGFydGljbGVcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtRdWFyay5QYXJ0aWNsZX0gcGFydGljbGUgQSBzaW5nbGUgUXVhcmsgZ2VuZXJhdGVkIHBhcnRpY2xlXHJcblx0ICovXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQSA9IHRoaXMuYS5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYgKHRoaXMuc2FtZSl7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UXVhcmsuUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcbiBcdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLmFscGhhID0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQiArIChwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBIC0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQikgKiB0aGlzLmVuZXJneTtcclxuXHRcdGlmIChwYXJ0aWNsZS5hbHBoYSA8IDAuMDAxKVxyXG5cdFx0XHRwYXJ0aWNsZS5hbHBoYSA9IDA7XHJcblx0fTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0FscGhhLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJhY3Rpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YXJnZXRQb3NpdGlvbiwgZm9yY2UsIHJhZGl1cywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbiB8fCBuZXcgVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkF0dHJhY3Rpb25cIjtcclxuXHRcdFxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkF0dHJhY3Rpb25cclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2ZvcmNlJyBhbmQgJ3JhZGl1cydcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEfSB0YXJnZXRQb3NpdGlvbiB0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZm9yY2U9MTAwXVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcmFkaXVzPTEwMDBdXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy50YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIHx8IG5ldyBQcm90b24uVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5BdHRyYWN0aW9uXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLmNvcHkodGhpcy50YXJnZXRQb3NpdGlvbik7XHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5zdWIocGFydGljbGUucCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gdGhpcy5hdHRyYWN0aW9uRm9yY2UubGVuZ3RoU3EoKTtcclxuXHRcdGlmICh0aGlzLmxlbmd0aFNxID4gMC4wMDAwMDQgJiYgdGhpcy5sZW5ndGhTcSA8IHRoaXMucmFkaXVzU3EpIHtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2Uubm9ybWFsaXplKCk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKDEgLSB0aGlzLmxlbmd0aFNxIC8gdGhpcy5yYWRpdXNTcSk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKHRoaXMuZm9yY2UpO1xyXG5cdFx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmF0dHJhY3Rpb25Gb3JjZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQXR0cmFjdGlvbi5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbWl0dGVyLCBtYXNzLCBjYWxsYmFjaywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChlbWl0dGVyLCBtYXNzLCBjYWxsYmFjayk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkNvbGxpc2lvblwiO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sbGlzaW9uXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIHRvIG1hc3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLkVtaXR0ZXJ9IFx0W2VtaXR0ZXI9bnVsbF0gXHRcdHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBcdFx0W21hc3M9dHJ1ZV1cdFx0XHRcclxuXHQgKiBAcGFyYW0ge0NhbGxiYWNrfVx0IFx0W2NhbGxiYWNrPW51bGxdXHRcdHRoZSBjYWxsYmFjayBhZnRlciB0aGUgY29sbGlzaW9uXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdFtsaWZlPUluZmluaXR5XSBcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQoZW1pdHRlciwgbWFzcywgY2FsbGJhY2ssIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5lbWl0dGVyID0gZW1pdHRlciB8fCBudWxsO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcyB8fCB0cnVlO1xyXG5cdFx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XHJcblx0XHR0aGlzLmNvbGxpc2lvblBvb2wgPSBbXTtcclxuXHRcdHRoaXMuZGVsdGEgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0bGV0IG5ld1Bvb2wgPSB0aGlzLmVtaXR0ZXIucGFydGljbGVzLnNsaWNlKGluZGV4KTtcclxuXHRcdGxldCBvdGhlclBhcnRpY2xlO1xyXG5cdFx0bGV0IGxlbmd0aFNxO1xyXG5cdFx0bGV0IG92ZXJsYXA7XHJcblx0XHRsZXQgYXZlcmFnZU1hc3MxLCBhdmVyYWdlTWFzczI7XHJcblx0XHRsZXQgbGVuZ3RoID0gbmV3UG9vbC5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG90aGVyUGFydGljbGUgPSBuZXdQb29sW2ldO1xyXG5cdFx0XHRpZiAob3RoZXJQYXJ0aWNsZSAhPT0gcGFydGljbGUpIHtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLmNvcHkob3RoZXJQYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLnN1YihwYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHRsZW5ndGhTcSA9IHRoaXMuZGVsdGEubGVuZ3RoU3EoKTtcclxuXHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHBhcnRpY2xlLnJhZGl1cyArIG90aGVyUGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0XHRpZiAobGVuZ3RoU3EgPD0gZGlzdGFuY2UgKiBkaXN0YW5jZSkge1xyXG5cdFx0XHRcdFx0b3ZlcmxhcCA9IGRpc3RhbmNlIC0gTWF0aC5zcXJ0KGxlbmd0aFNxKTtcclxuXHRcdFx0XHRcdG92ZXJsYXAgKz0gMC41O1xyXG5cdFx0XHRcdFx0Y29uc3QgdG90YWxNYXNzID0gcGFydGljbGUubWFzcyArIG90aGVyUGFydGljbGUubWFzcztcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMSA9IHRoaXMubWFzcyA/IG90aGVyUGFydGljbGUubWFzcyAvIHRvdGFsTWFzcyA6IDAuNTtcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMiA9IHRoaXMubWFzcyA/IHBhcnRpY2xlLm1hc3MgLyB0b3RhbE1hc3MgOiAwLjU7XHJcblx0XHRcdFx0XHRwYXJ0aWNsZS5wLmFkZCh0aGlzLmRlbHRhLmNsb25lKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIC1hdmVyYWdlTWFzczEpKTtcclxuXHRcdFx0XHRcdG90aGVyUGFydGljbGUucC5hZGQodGhpcy5kZWx0YS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihvdmVybGFwICogYXZlcmFnZU1hc3MyKSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jYWxsYmFjayl7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FsbGJhY2socGFydGljbGUsIG90aGVyUGFydGljbGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQ29sbGlzaW9uLmpzIiwiaW1wb3J0IEF0dHJhY3Rpb24gZnJvbSAnLi9BdHRyYWN0aW9uJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwdWxzaW9uIGV4dGVuZHMgQXR0cmFjdGlvbiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSAqPSAtMTtcclxuXHRcdHRoaXMubmFtZSA9IFwiUmVwdWxzaW9uXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyLnJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSAqPSAtMTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL1JlcHVsc2lvbi5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JjZSBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGZ4LCBmeSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplRm9yY2UobmV3IFZlY3RvcjJEKGZ4LCBmeSkpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJGb3JjZVwiO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXI7XHJcblx0fVxyXG5cclxuXHRyZXNldChmeCwgZnksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplRm9yY2UobmV3IFZlY3RvcjJEKGZ4LCBmeSkpO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuYS5hZGQodGhpcy5mb3JjZSk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvRm9yY2UuanMiLCJpbXBvcnQgRm9yY2UgZnJvbSAnLi9Gb3JjZSc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXZpdHkgZXh0ZW5kcyBGb3JjZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGcsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIoMCwgZywgbGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMubmFtZSA9ICdHcmF2aXR5JztcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoZywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlci5yZXNldCgwLCBnLCBsaWZlLCBlYXNpbmcpO1xyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuYS5hZGQodGhpcy5mb3JjZSk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9HcmF2aXR5LmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXZpdHlXZWxsIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY2VudGVyUG9pbnQsIGZvcmNlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmRpc3RhbmNlVmVjID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHR0aGlzLmNlbnRlclBvaW50ID0gVXRpbC5pbml0VmFsdWUoY2VudGVyUG9pbnQsIG5ldyBWZWN0b3IyRCk7XHJcblx0XHR0aGlzLmZvcmNlID0gVXRpbC5pbml0VmFsdWUodGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSksIDEwMCk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkdyYXZpdHlXZWxsXCI7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cclxuXHRyZXNldChjZW50ZXJQb2ludCwgZm9yY2UsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5kaXN0YW5jZVZlYyA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5jZW50ZXJQb2ludCA9IFV0aWwuaW5pdFZhbHVlKGNlbnRlclBvaW50LCBuZXcgVmVjdG9yMkQpO1xyXG5cdFx0dGhpcy5mb3JjZSA9IFV0aWwuaW5pdFZhbHVlKHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpLCAxMDApO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0dGhpcy5kaXN0YW5jZVZlYy5zZXQodGhpcy5jZW50ZXJQb2ludC54IC0gcGFydGljbGUucC54LCB0aGlzLmNlbnRlclBvaW50LnkgLSBwYXJ0aWNsZS5wLnkpO1xyXG5cdFx0Y29uc3QgZGlzdGFuY2VTcSA9IHRoaXMuZGlzdGFuY2VWZWMubGVuZ3RoU3EoKTtcclxuXHRcdGlmIChkaXN0YW5jZVNxICE9IDApIHtcclxuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlVmVjLmxlbmd0aCgpO1xyXG5cdFx0XHRjb25zdCBmYWN0b3IgPSAodGhpcy5mb3JjZSAqIHRpbWUgKSAvIChkaXN0YW5jZVNxICogZGlzdGFuY2UgKTtcclxuXHRcdFx0cGFydGljbGUudi54ICs9IGZhY3RvciAqIHRoaXMuZGlzdGFuY2VWZWMueDtcclxuXHRcdFx0cGFydGljbGUudi55ICs9IGZhY3RvciAqIHRoaXMuZGlzdGFuY2VWZWMueTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0dyYXZpdHlXZWxsLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IHsgcmFuZG9tQVRvQiB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbURyaWZ0IGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZHJpZnRYLCBkcmlmdFksIGRlbGF5LCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KGRyaWZ0WCwgZHJpZnRZLCBkZWxheSk7XHJcblx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJSYW5kb21EcmlmdFwiO1xyXG5cdFxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cclxuXHRyZXNldChkcmlmdFgsIGRyaWZ0WSwgZGVsYXksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5wYW5Gb2NlID0gbmV3IFZlY3RvcjJEKGRyaWZ0WCwgZHJpZnRZKTtcclxuXHRcdHRoaXMucGFuRm9jZSA9IHRoaXMubm9ybWFsaXplRm9yY2UodGhpcy5wYW5Gb2NlKTtcclxuXHRcdHRoaXMuZGVsYXkgPSBkZWxheTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0UmFuZG9tRHJpZnQuX3N1cGVyXy5wcm90b3R5cGUucmVzZXQuY2FsbCh0aGlzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0dGhpcy50aW1lICs9IHRpbWU7XHJcblx0XHRpZiAodGhpcy50aW1lID49IHRoaXMuZGVsYXkpIHtcdFx0XHRcclxuXHRcdFx0cGFydGljbGUuYS5hZGRYWShyYW5kb21BVG9CKC10aGlzLnBhbkZvY2UueCwgdGhpcy5wYW5Gb2NlLngpLCByYW5kb21BVG9CKC10aGlzLnBhbkZvY2UueSwgdGhpcy5wYW5Gb2NlLnkpKTtcclxuXHRcdFx0dGhpcy50aW1lID0gMDtcclxuXHRcdH07XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9SYW5kb21EcmlmdC5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3RhdGUgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRzdGF0aWMgU1RZTEVTID0ge1xyXG5cdFx0VE86IDEgPDwgMCxcclxuXHRcdEZST006IDEgPDwgMVxyXG5cdH07XHJcblxyXG5cdHN0YXRpYyBUWVBFID0ge1xyXG5cdFx0VkVMT0NJVFk6IDEgPDwgMFxyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIHN0eWxlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KGEsIGIsIHN0eWxlKTtcclxuXHRcdHRoaXMubmFtZSA9ICdSb3RhdGUnO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXI7XHJcblx0fVxyXG5cclxuXHRyZXNldChhLCBiLCBzdHlsZSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRpZiAoYiA9PSBudWxsIHx8IGIgPT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0dGhpcy5zYW1lID0gdHJ1ZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnNhbWUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmEgPSBVdGlsLnNldFNwYW5WYWx1ZShhIHx8IFJvdGF0ZS5UWVBFLlZFTE9DSVRZKTtcclxuXHRcdHRoaXMuYiA9IFV0aWwuc2V0U3BhblZhbHVlKGIgfHwgMCk7XHJcblx0XHR0aGlzLnN0eWxlID0gc3R5bGUgfHwgUm90YXRlLlNUWUxFUy5UTztcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnJvdGF0aW9uID0gdGhpcy5hLmdldFZhbHVlKCk7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25BID0gdGhpcy5hLmdldFZhbHVlKCk7XHJcblx0XHRpZiAoIXRoaXMuc2FtZSl7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdGlmICghdGhpcy5zYW1lKSB7XHJcblx0XHRcdGlmICh0aGlzLnN0eWxlID09IFJvdGF0ZS5TVFlMRVMuVE8pIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiArPSBwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25CICsgKHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkEgLSBwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25CKSAqIHRoaXMuZW5lcmd5XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGFydGljbGUucm90YXRpb24gKz0gcGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQjtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmEuYSA9PSBSb3RhdGUuVFlQRS5WRUxPQ0lUWSkge1xyXG5cdFx0XHQvL2JldGEuLi5cclxuXHRcdFx0cGFydGljbGUucm90YXRpb24gPSBwYXJ0aWNsZS5nZXREaXJlY3Rpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL1JvdGF0ZS5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2FsZSBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoYSwgYik7XHJcblx0XHR0aGlzLm5hbWUgPSAnU2NhbGUnO1xyXG5cclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRpZiAoYiA9PSBudWxsIHx8IGIgPT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0dGhpcy5zYW1lID0gdHJ1ZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnNhbWUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYSA9IFV0aWwuc2V0U3BhblZhbHVlKFV0aWwuaW5pdFZhbHVlKGEsIDEpKTtcclxuXHRcdHRoaXMuYiA9IFV0aWwuc2V0U3BhblZhbHVlKGIpO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdW9lci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUudHJhbnNmb3JtLnNjYWxlQSA9IHRoaXMuYS5nZXRWYWx1ZSgpO1xyXG5cdFx0cGFydGljbGUudHJhbnNmb3JtLm9sZFJhZGl1cyA9IHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdGlmICh0aGlzLnNhbWUpe1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVCID0gcGFydGljbGUudHJhbnNmb3JtLnNjYWxlQTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVCID0gdGhpcy5iLmdldFZhbHVlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRwYXJ0aWNsZS5zY2FsZSA9IHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUIgKyAocGFydGljbGUudHJhbnNmb3JtLnNjYWxlQSAtIHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUIpICogdGhpcy5lbmVyZ3k7XHJcblx0XHRpZiAocGFydGljbGUuc2NhbGUgPCAwLjAwMDEpe1xyXG5cdFx0XHRwYXJ0aWNsZS5zY2FsZSA9IDA7XHJcblx0XHR9XHJcblx0XHRwYXJ0aWNsZS5yYWRpdXMgPSBwYXJ0aWNsZS50cmFuc2Zvcm0ub2xkUmFkaXVzICogcGFydGljbGUuc2NhbGU7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9TY2FsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=