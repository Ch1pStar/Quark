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
	
	    _this.particleCreated = new _miniSignals2.default();
	    _this.particleUpdate = new _miniSignals2.default();
	    _this.particleDead = new _miniSignals2.default();
	
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
	      if (this.emitTime < this.emitTotalTimes) {
	        var length = this.rate.getValue(time);
	
	        for (var i = 0; i < length; i++) {
	          this.createParticle(time);
	        }
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
	      this.active.forEach(function (a) {
	        return a = false;
	      });
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
	  if (!INT) return a + Math.random() * (b - a);else return Math.floor(Math.random() * (b - a)) + a;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NGU1ZWE1ZTI2OGNkYTk0OTA1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvU3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21pbmktc2lnbmFscy9saWIvbWluaS1zaWduYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1BvbGFyMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9SZWN0Wm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9ab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQ3Jvc3Nab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQmVoYXZpb3VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvUG9pbnRab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0xpbmVab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0ltYWdlWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9BdHRyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvUmVwdWxzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvRm9yY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9HcmF2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvR3Jhdml0eVdlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9SYW5kb21EcmlmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL1JvdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL1NjYWxlLmpzIl0sIm5hbWVzIjpbImdldFNwYW4iLCJhIiwiYiIsImNlbnRlciIsIlNwYW4iLCJSZWN0Wm9uZSIsIlBvaW50Wm9uZSIsIkxpbmVab25lIiwiSW1hZ2Vab25lIiwiQ2lyY2xlWm9uZSIsIkFscGhhIiwiQXR0cmFjdGlvbiIsIkNvbGxpc2lvbiIsIlJlcHVsc2lvbiIsIkNyb3NzWm9uZSIsIkZvcmNlIiwiR3Jhdml0eSIsIkdyYXZpdHlXZWxsIiwiUmFuZG9tRHJpZnQiLCJSb3RhdGUiLCJTY2FsZSIsImdsb2JhbCIsIlF1YXJrIiwiZXhwb3J0cyIsIkVtaXR0ZXIiLCJQT09MX01BWCIsIlRJTUVfU1RFUCIsIlVTRV9DTE9DSyIsIk1FQVNVUkUiLCJFVUxFUiIsIlJLMiIsIlJLNCIsIlZFUkxFVCIsIlBBUlRJQ0xFX0NSRUFURUQiLCJQQVJUSUNMRV9VUERBVEUiLCJQQVJUSUNMRV9TTEVFUCIsIlBBUlRJQ0xFX0RFQUQiLCJFTUlUVEVSX0FEREVEIiwiRU1JVFRFUl9SRU1PVkVEIiwiaW5pdGlhbGl6ZXMiLCJiZWhhdmlvdXJzIiwiZW1pdFRpbWUiLCJlbWl0VG90YWxUaW1lcyIsImRhbXBpbmciLCJiaW5kRW1pdHRlciIsInJhdGUiLCJpbnRlZ3JhdG9yIiwibWF4UGFydGljbGVzIiwicGFydGljbGVDcmVhdGVkIiwicGFydGljbGVVcGRhdGUiLCJwYXJ0aWNsZURlYWQiLCJ1cGRhdGUiLCJlbWl0dGluZyIsImNyZWF0ZVBhcnRpY2xlIiwiaW50ZWdyYXRlIiwiYWN0aXZhdGVQYXJ0aWNsZSIsInVwZGF0ZVBhcnRpY2xlIiwidGltZSIsImFjdGl2ZUNvdW50IiwiYWN0aXZlIiwiaSIsIm4iLCJsZW5ndGgiLCJpbmRleCIsInBhcnRpY2xlcyIsInBhcnRpY2xlIiwicmVzZXQiLCJhZGRCZWhhdmlvdXJzIiwiZGlzcGF0Y2giLCJyZXMiLCJnZXRWYWx1ZSIsImxpZmUiLCJJbmZpbml0eSIsImlzTmFOIiwiaW5pdCIsImZvckVhY2giLCJwT2JqIiwiaW5pdEFsbCIsImFyZ3VtZW50cyIsInB1c2giLCJpbml0aWFsaXplciIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcmVudHMiLCJiZWhhdmlvdXIiLCJhZ2UiLCJkZWFkIiwiZGVzdHJveSIsInJlbW92ZUluaXRpYWxpemVycyIsInJlbW92ZUFsbEJlaGF2aW91cnMiLCJwYXJlbnQiLCJyZW1vdmVFbWl0dGVyIiwidmFsIiwiQXJyYXkiLCJmaWxsIiwidWlkIiwiUGFydGljbGUiLCJpZCIsInNwcml0ZSIsIk1hdGgiLCJhdGFuMiIsInYiLCJ4IiwieSIsIlBJIiwiZW5lcmd5Iiwic2xlZXAiLCJ0YXJnZXQiLCJtYXNzIiwicmFkaXVzIiwiYWxwaGEiLCJzY2FsZSIsInJvdGF0aW9uIiwiY29sb3IiLCJlYXNpbmciLCJ0cmFuc2Zvcm0iLCJwIiwib2xkIiwic2V0IiwicmdiIiwiciIsImciLCJhcHBseUJlaGF2aW91ciIsIm1heCIsImluaXRpYWxpemUiLCJhZGRCZWhhdmlvdXIiLCJWZWN0b3IyRCIsInZhbHVlIiwiRXJyb3IiLCJ3IiwidW5kZWZpbmVkIiwiYWRkVmVjdG9ycyIsInMiLCJzdWJWZWN0b3JzIiwibWluIiwibXVsdGlwbHlTY2FsYXIiLCJzcXJ0IiwiZGl2aWRlU2NhbGFyIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJ0aGEiLCJjb3MiLCJzaW4iLCJkeCIsImR5IiwibCIsIm9sZExlbmd0aCIsIlJhdGUiLCJudW1wYW4iLCJ0aW1lcGFuIiwibnVtUGFuIiwidGltZVBhbiIsInNldFNwYW5WYWx1ZSIsInN0YXJ0VGltZSIsIm5leHRUaW1lIiwiaW5pdFZhbHVlIiwiZGVmYXVsdHMiLCJnZXRWZWN0b3IyRCIsInBvc3Rpb25PclgiLCJ2ZWN0b3IyZCIsImp1ZGdlVmVjdG9yMkQiLCJwT0JKIiwicmVzdWx0Iiwic2V0VmVjdG9yMkRCeU9iamVjdCIsInZ4IiwidnkiLCJheCIsImF5IiwiYyIsImNvbnN0cnVjdG9yIiwiZ2V0U3BhblZhbHVlIiwicGFuIiwiaGV4VG9SR0IiLCJoIiwiaGV4MTYiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJwYXJzZUludCIsInJnYlRvSGV4IiwicmJnIiwiaXNBcnJheSIsIklOVCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQVRvQiIsInJhbmRvbUZsb2F0aW5nIiwiZGVncmVlVHJhbnNmb3JtIiwiZiIsIk51bWVyaWNhbEludGVncmF0aW9uIiwidHlwZSIsImV1bGVySW50ZWdyYXRlIiwiY29weSIsImFkZCIsImNsZWFyIiwiZW1pdHRlciIsInJvdGF0ZSIsIkluaXRpYWxpemUiLCJWZWxvY2l0eSIsIkxpZmUiLCJNYXNzIiwiUmFkaXVzIiwiUG9zaXRpb24iLCJycGFuIiwidGhhcGFuIiwiclBhbiIsInRoYVBhbiIsIlBPTEFSIiwiUCIsInJQYW5WYWwiLCJub3JtYWxpemVkUEkiLCJ2ciIsInRoYVBhbk5vcm0iLCJwb2xhcjJkIiwibm9ybWFsaXplVmVsb2NpdHkiLCJnZXRYIiwiZ2V0WSIsIlBvbGFyMkQiLCJhYnMiLCJsaWZlUGFuIiwibWFzc1BhbiIsIm9sZFJhZGl1cyIsInpvbmUiLCJnZXRQb3NpdGlvbiIsInZlY3RvciIsIndpZHRoIiwiaGVpZ2h0IiwiY3Jvc3NUeXBlIiwiQ1JPU1NfVFlQRVMiLCJERUFEIiwiQk9VTkQiLCJDUk9TUyIsIlpvbmUiLCJhbGVydCIsIm5hbWUiLCJjcm9zc2luZyIsIkJFSEFWSU9VUl9JRF9CQVNFIiwiQmVoYXZpb3VyIiwiZm9yY2UiLCJyZW1vdmVCZWhhdmlvdXIiLCJnZXRFYXNpbmdCeU5hbWUiLCJlYXNlTGluZWFyIiwiZWFzZUluUXVhZCIsInBvdyIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluU2luZSIsImVhc2VPdXRTaW5lIiwiZWFzZUluT3V0U2luZSIsImVhc2VJbkV4cG8iLCJlYXNlT3V0RXhwbyIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5DaXJjIiwiZWFzZU91dENpcmMiLCJlYXNlSW5PdXRDaXJjIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsIngxIiwieTEiLCJ4MiIsInkyIiwiZGlyZWN0aW9uIiwibWlueCIsIm1pbnkiLCJtYXh4IiwibWF4eSIsImRvdCIsInh4eXkiLCJncmFkaWVudCIsImdldEdyYWRpZW50IiwiZ2V0TGVuZ3RoIiwic2VsZiIsImdldFJhbmdlIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RGlzdGFuY2UiLCJnZXRTeW1tZXRyaWMiLCJBIiwiQiIsIkMiLCJEIiwidGhhMiIsInRoYTEiLCJvbGR4Iiwib2xkeSIsImZ1biIsImFuZ2xlIiwiaW1hZ2VEYXRhIiwiZCIsInZlY3RvcnMiLCJzZXRWZWN0b3JzIiwiaiIsImxlbmd0aDEiLCJsZW5ndGgyIiwiZGF0YSIsImdldEJvdW5kIiwibmVnYXRlIiwiZGlzdGFuY2VUbyIsInNhbWUiLCJhbHBoYUEiLCJhbHBoYUIiLCJ0YXJnZXRQb3NpdGlvbiIsIm5vcm1hbGl6ZVZhbHVlIiwicmFkaXVzU3EiLCJhdHRyYWN0aW9uRm9yY2UiLCJsZW5ndGhTcSIsIlByb3RvbiIsInN1YiIsIm5vcm1hbGl6ZSIsImNhbGxiYWNrIiwiY29sbGlzaW9uUG9vbCIsImRlbHRhIiwibmV3UG9vbCIsInNsaWNlIiwib3RoZXJQYXJ0aWNsZSIsIm92ZXJsYXAiLCJhdmVyYWdlTWFzczEiLCJhdmVyYWdlTWFzczIiLCJkaXN0YW5jZSIsInRvdGFsTWFzcyIsImNsb25lIiwiZngiLCJmeSIsIm5vcm1hbGl6ZUZvcmNlIiwiY2VudGVyUG9pbnQiLCJkaXN0YW5jZVZlYyIsImRpc3RhbmNlU3EiLCJmYWN0b3IiLCJkcmlmdFgiLCJkcmlmdFkiLCJkZWxheSIsInBhbkZvY2UiLCJfc3VwZXJfIiwicHJvdG90eXBlIiwiY2FsbCIsImFkZFhZIiwic3R5bGUiLCJUWVBFIiwiVkVMT0NJVFkiLCJTVFlMRVMiLCJUTyIsInJvdGF0aW9uQSIsInJvdGF0aW9uQiIsIkZST00iLCJzdW9lciIsInNjYWxlQSIsInNjYWxlQiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QVQsQ0FBbUIyTyxNQUFuQixHQUE0QixLQUFLN1YsQ0FBTCxDQUFPb0UsUUFBUCxFQUE1QjtBQUNBO0FBQ0Q7OztrQ0FFY0wsUSxFQUFVUixJLEVBQU1NLEssRUFBTztBQUNyQyxpSEFBcUJFLFFBQXJCLEVBQStCUixJQUEvQixFQUFxQ00sS0FBckM7QUFDQUUsYUFBUytDLEtBQVQsR0FBaUIvQyxTQUFTbUQsU0FBVCxDQUFtQjJPLE1BQW5CLEdBQTRCLENBQUM5UixTQUFTbUQsU0FBVCxDQUFtQjBPLE1BQW5CLEdBQTRCN1IsU0FBU21ELFNBQVQsQ0FBbUIyTyxNQUFoRCxJQUEwRCxLQUFLclAsTUFBNUc7QUFDQSxRQUFJekMsU0FBUytDLEtBQVQsR0FBaUIsTUFBckIsRUFBNEI7QUFDM0IvQyxjQUFTK0MsS0FBVCxHQUFpQixDQUFqQjtBQUNBO0FBQ0QvQyxhQUFTNkMsTUFBVCxHQUFrQjdDLFNBQVNtRCxTQUFULENBQW1Cd0csU0FBbkIsR0FBK0IzSixTQUFTK0MsS0FBMUQ7QUFDQTs7Ozs7O21CQXhDbUI1RixLIiwiZmlsZSI6InF1YXJrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NGU1ZWE1ZTI2OGNkYTk0OTA1ZCIsImV4cG9ydCAqIGZyb20gJy4vZW1pdHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vaW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBTcGFuIGZyb20gJy4vbWF0aC9TcGFuJztcclxuXHJcbmltcG9ydCBSZWN0Wm9uZSBmcm9tICcuL3pvbmUvUmVjdFpvbmUnO1xyXG5pbXBvcnQgUG9pbnRab25lIGZyb20gJy4vem9uZS9Qb2ludFpvbmUnO1xyXG5pbXBvcnQgTGluZVpvbmUgZnJvbSAnLi96b25lL0xpbmVab25lJztcclxuaW1wb3J0IEltYWdlWm9uZSBmcm9tICcuL3pvbmUvSW1hZ2Vab25lJztcclxuaW1wb3J0IENpcmNsZVpvbmUgZnJvbSAnLi96b25lL0NpcmNsZVpvbmUnO1xyXG5cclxuaW1wb3J0IEFscGhhIGZyb20gJy4vYmVoYXZpb3VyL0FscGhhJztcclxuaW1wb3J0IEF0dHJhY3Rpb24gZnJvbSAnLi9iZWhhdmlvdXIvQXR0cmFjdGlvbic7XHJcbmltcG9ydCBDb2xsaXNpb24gZnJvbSAnLi9iZWhhdmlvdXIvQ29sbGlzaW9uJztcclxuaW1wb3J0IFJlcHVsc2lvbiBmcm9tICcuL2JlaGF2aW91ci9SZXB1bHNpb24nO1xyXG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcbmltcG9ydCBGb3JjZSBmcm9tICcuL2JlaGF2aW91ci9Gb3JjZSc7XHJcbmltcG9ydCBHcmF2aXR5IGZyb20gJy4vYmVoYXZpb3VyL0dyYXZpdHknO1xyXG5pbXBvcnQgR3Jhdml0eVdlbGwgZnJvbSAnLi9iZWhhdmlvdXIvR3Jhdml0eVdlbGwnO1xyXG5pbXBvcnQgUmFuZG9tRHJpZnQgZnJvbSAnLi9iZWhhdmlvdXIvUmFuZG9tRHJpZnQnO1xyXG5pbXBvcnQgUm90YXRlIGZyb20gJy4vYmVoYXZpb3VyL1JvdGF0ZSc7XHJcbmltcG9ydCBTY2FsZSBmcm9tICcuL2JlaGF2aW91ci9TY2FsZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BhbihhLCBiLCBjZW50ZXIpIHtcclxuICAgIHJldHVybiBuZXcgU3BhbihhLCBiLCBjZW50ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBTcGFuLCBSZWN0Wm9uZSwgUG9pbnRab25lLCBMaW5lWm9uZSwgSW1hZ2Vab25lLCBDaXJjbGVab25lIH07XHJcblxyXG5leHBvcnQgeyBBbHBoYSwgQXR0cmFjdGlvbiwgQ29sbGlzaW9uLCBSZXB1bHNpb24sIENyb3NzWm9uZSwgRm9yY2UsIEdyYXZpdHksIEdyYXZpdHlXZWxsLCBSYW5kb21EcmlmdCwgUm90YXRlLCBTY2FsZSB9O1xyXG5cclxuZ2xvYmFsLlF1YXJrID0gZXhwb3J0cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJleHBvcnQgKiBmcm9tICcuL2NvbnN0JztcclxuXHJcbmltcG9ydCBFbWl0dGVyIGZyb20gJy4vRW1pdHRlcic7XHJcblxyXG5leHBvcnQge0VtaXR0ZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbWl0dGVyL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IFBPT0xfTUFYID0gMTAwMDtcclxuZXhwb3J0IGNvbnN0IFRJTUVfU1RFUCA9IDYwO1xyXG5leHBvcnQgY29uc3QgVVNFX0NMT0NLID0gZmFsc2U7XHJcbmV4cG9ydCBjb25zdCBNRUFTVVJFID0gMTAwO1xyXG5leHBvcnQgY29uc3QgRVVMRVIgPSAnZXVsZXInO1xyXG5leHBvcnQgY29uc3QgUksyID0gJ3J1bmdlLWt1dHRhMic7XHJcbmV4cG9ydCBjb25zdCBSSzQgPSAncnVuZ2Uta3V0dGE0JztcclxuZXhwb3J0IGNvbnN0IFZFUkxFVCA9ICd2ZXJsZXQnO1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfQ1JFQVRFRCA9ICdwYXJ0aWxjbGVDcmVhdGVkJztcclxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX1VQREFURSA9ICdwYXJ0aWxjbGVVcGRhdGUnO1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfU0xFRVAgPSAncGFydGljbGVTbGVlcCc7XHJcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9ERUFEID0gJ3BhcnRpbGNsZURlYWQnO1xyXG5leHBvcnQgY29uc3QgRU1JVFRFUl9BRERFRCA9ICdlbWl0dGVyQWRkZWQnO1xyXG5leHBvcnQgY29uc3QgRU1JVFRFUl9SRU1PVkVEID0gJ2VtaXR0ZXJSZW1vdmVkJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9jb25zdC5qcyIsIi8vIGltcG9ydCBQYXJ0aWNsZSBmcm9tICcuLi9jb3JlL1BhcnRpY2xlJztcclxuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4uL2NvcmUvUGFydGljbGUnO1xyXG5pbXBvcnQgUmF0ZSBmcm9tICcuLi9pbml0aWFsaXplL1JhdGUnO1xyXG5pbXBvcnQgTnVtZXJpY2FsSW50ZWdyYXRpb24gZnJvbSAnLi4vbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbic7XHJcbmltcG9ydCBpbml0aWFsaXplRm4gZnJvbSAnLi4vaW5pdGlhbGl6ZS9Jbml0aWFsaXplVXRpbCc7XHJcbmltcG9ydCBNaW5pU2lnbmFsIGZyb20gJ21pbmktc2lnbmFscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIGV4dGVuZHMgUGFydGljbGV7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZXMgPSBbXTtcclxuICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gLTE7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmcmljdGlvbiBjb2VmZmljaWVudCBmb3IgYWxsIHBhcnRpY2xlIGVtaXQgYnkgVGhpcztcclxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQGRlZmF1bHQgMC4wMDZcclxuICAgICAqL1xyXG4gICAgdGhpcy5kYW1waW5nID0gLjAwNjtcclxuICAgIC8qKlxyXG4gICAgICogSWYgYmluZEVtaXR0ZXIgdGhlIHBhcnRpY2xlcyBjYW4gYmluZCB0aGlzIGVtaXR0ZXIncyBwcm9wZXJ0eTtcclxuICAgICAqIEBwcm9wZXJ0eSBiaW5kRW1pdHRlclxyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmluZEVtaXR0ZXIgPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyBwZXIgc2Vjb25kIGVtaXQgKGEgW3BhcnRpY2xlXS9iIFtzXSk7XHJcbiAgICAgKiBAcHJvcGVydHkgcmF0ZVxyXG4gICAgICogQHR5cGUge1F1YXJrLlJhdGV9XHJcbiAgICAgKiBAZGVmYXVsdCBRdWFyay5SYXRlKDEsIC4xKVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJhdGUgPSBuZXcgUmF0ZSgxLCAuMSk7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdG9yID0gbmV3IE51bWVyaWNhbEludGVncmF0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5tYXhQYXJ0aWNsZXMgPSA1MDAwMDtcclxuXHJcblxyXG4gICAgdGhpcy5wYXJ0aWNsZUNyZWF0ZWQgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZVVwZGF0ZSA9IG5ldyBNaW5pU2lnbmFsKCk7XHJcbiAgICB0aGlzLnBhcnRpY2xlRGVhZCA9IG5ldyBNaW5pU2lnbmFsKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZTtcclxuICAgIHRoaXMuZW1pdHRpbmcgPSB0aGlzLmVtaXR0aW5nO1xyXG4gICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSA9IHRoaXMuY3JlYXRlUGFydGljbGU7XHJcbiAgICB0aGlzLmludGVncmF0ZSA9IHRoaXMuaW50ZWdyYXRlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVBhcnRpY2xlID0gdGhpcy5hY3RpdmF0ZVBhcnRpY2xlO1xyXG4gICAgdGhpcy51cGRhdGVQYXJ0aWNsZSA9IHRoaXMudXBkYXRlUGFydGljbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4UGFydGljbGVzKHZhbCl7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IG5ldyBBcnJheSh2YWwpLmZpbGwoZmFsc2UpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBuZXcgQXJyYXkodmFsKTtcclxuICAgIHRoaXMuYWN0aXZlQ291bnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1heFBhcnRpY2xlcygpe1xyXG4gICAgcmV0dXJuIHRoaXMucGFydGljbGVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNyZWF0ZSBzaW5nbGUgcGFydGljbGU7XHJcbiAgICogXHJcbiAgICogY2FuIHVzZSBlbWl0KHt4OjEwfSxuZXcgR3Jhdml0eSgxMCkseydwYXJ0aWNsZVVwZGF0ZScsZnVufSkgb3IgZW1pdChbe3g6MTB9LG5ldyBJbml0aWFsaXplXSxuZXcgR3Jhdml0eSgxMCkseydwYXJ0aWNsZVVwZGF0ZScsZnVufSlcclxuICAgKiBAbWV0aG9kIHJlbW92ZUFsbFBhcnRpY2xlc1xyXG4gICAqL1xyXG4gIGNyZWF0ZVBhcnRpY2xlKHRpbWUpIHtcclxuICAgIGxldCBhY3RpdmVDb3VudCA9IHRoaXMuYWN0aXZlQ291bnQ7XHJcbiAgICBpZihhY3RpdmVDb3VudCA9PT0gdGhpcy5tYXhQYXJ0aWNsZXMpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYWN0aXZlLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBpZiAoIWFjdGl2ZVtpXSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVQYXJ0aWNsZShpLCB0aW1lKTtcclxuICAgICAgICBhY3RpdmVbaV0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ291bnQgPSBhY3RpdmVDb3VudCArIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlUGFydGljbGUoaW5kZXgsIHRpbWUpe1xyXG4gICAgY29uc3QgcGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXM7XHJcbiAgICBsZXQgcGFydGljbGUgPSBwYXJ0aWNsZXNbaW5kZXhdO1xyXG5cclxuICAgIGlmKCFwYXJ0aWNsZSl7XHJcbiAgICAgIHBhcnRpY2xlc1tpbmRleF0gPSBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbml0aWFsaXplcyA9IHRoaXMuaW5pdGlhbGl6ZXM7XHJcbiAgICBsZXQgYmVoYXZpb3VycyA9IHRoaXMuYmVoYXZpb3VycztcclxuXHJcbiAgICBwYXJ0aWNsZS5yZXNldCgpO1xyXG4gICAgaW5pdGlhbGl6ZUZuKHRoaXMsIHBhcnRpY2xlLCBpbml0aWFsaXplcyk7XHJcbiAgICBwYXJ0aWNsZS5hZGRCZWhhdmlvdXJzKGJlaGF2aW91cnMpO1xyXG4gICAgcGFydGljbGUudXBkYXRlKGluZGV4LCB0aW1lKTtcclxuXHJcbiAgICB0aGlzLnBhcnRpY2xlQ3JlYXRlZC5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFydGljbGUocGFydGljbGUsIGluZGV4LCB0aW1lLCBkYW1waW5nKXtcclxuICAgIGNvbnN0IHJlcyA9IHBhcnRpY2xlLnVwZGF0ZShpbmRleCwgdGltZSk7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdG9yLmludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZyk7XHJcblxyXG4gICAgaWYocmVzKXtcclxuICAgICAgdGhpcy5wYXJ0aWNsZVVwZGF0ZS5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5wYXJ0aWNsZURlYWQuZGlzcGF0Y2gocGFydGljbGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGludGVncmF0ZSh0aW1lKSB7XHJcbiAgICBjb25zdCBkYW1waW5nID0gMSAtIHRoaXMuZGFtcGluZztcclxuICAgIHRoaXMuaW50ZWdyYXRvci5pbnRlZ3JhdGUodGhpcywgdGltZSwgZGFtcGluZyk7XHJcblxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xyXG4gICAgbGV0IGFjdGl2ZUNvdW50ID0gdGhpcy5hY3RpdmVDb3VudDtcclxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYWN0aXZlLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBpZiAoYWN0aXZlW2ldICYmICF0aGlzLnVwZGF0ZVBhcnRpY2xlKHBhcnRpY2xlc1tpXSwgaSwgdGltZSwgZGFtcGluZykpIHtcclxuICAgICAgICBhY3RpdmVbaV0gPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVDb3VudC0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjdGl2ZUNvdW50ID0gYWN0aXZlQ291bnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgZW1pdHRpbmcodGltZSkge1xyXG4gICAgdGhpcy5lbWl0VGltZSArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5lbWl0VGltZSA8IHRoaXMuZW1pdFRvdGFsVGltZXMpe1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnJhdGUuZ2V0VmFsdWUodGltZSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSh0aW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdChlbWl0VGltZSwgbGlmZSkge1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gZW1pdFRpbWUgfHwgSW5maW5pdHk7XHJcblxyXG4gICAgaWYoIWlzTmFOKGxpZmUpKSB7XHJcbiAgICAgIHRoaXMubGlmZSA9IGxpZmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yYXRlLmluaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHN0b3AgZW1pdGluZ1xyXG4gICAqIEBtZXRob2Qgc3RvcEVtaXRcclxuICAgKi9cclxuICBzdG9wRW1pdCgpIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcclxuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGN1cnJlbnQgYWxsIHBhcnRpY2xlc1xyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsUGFydGljbGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmUuZm9yRWFjaCgoYSk9PmE9ZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIGluaXRpYWxpemUgdG8gdGhpcyBlbWl0dGVyXHJcbiAgICogQG1ldGhvZCBhZGRTZWxmSW5pdGlhbGl6ZVxyXG4gICAqL1xyXG4gIGFkZFNlbGZJbml0aWFsaXplKHBPYmopIHtcclxuICAgIGlmIChwT2JqWydpbml0J10pIHtcclxuICAgICAgcE9iai5pbml0KHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0QWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEluaXRpYWxpemUgdG8gcGFydGljbGVzO1xyXG4gICAqIFxyXG4gICAqIHlvdSBjYW4gdXNlIGluaXRpYWxpemVzIGFycmF5OmZvciBleGFtcGxlIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShpbml0aWFsaXplMSxpbml0aWFsaXplMixpbml0aWFsaXplMyk7XHJcbiAgICogQG1ldGhvZCBhZGRJbml0aWFsaXplXHJcbiAgICogQHBhcmFtIHtRdWFyay5Jbml0aWFsaXplfSBpbml0aWFsaXplIGxpa2UgdGhpcyBuZXcgUXVhcmsuUmFkaXVzKDEsIDEyKVxyXG4gICAqL1xyXG4gIGFkZEluaXRpYWxpemUoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgSW5pdGlhbGl6ZVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZVxyXG4gICAqIEBwYXJhbSB7UXVhcmsuSW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBhIGluaXRpYWxpemVcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplKGluaXRpYWxpemVyKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5pdGlhbGl6ZXMuaW5kZXhPZihpbml0aWFsaXplcik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYWxsIEluaXRpYWxpemVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVJbml0aWFsaXplcnNcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplcnMoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEJlaGF2aW91ciB0byBwYXJ0aWNsZXM7XHJcbiAgICogXHJcbiAgICogeW91IGNhbiB1c2UgQmVoYXZpb3VycyBhcnJheTplbWl0dGVyLmFkZEJlaGF2aW91cihCZWhhdmlvdXIxLEJlaGF2aW91cjIsQmVoYXZpb3VyMyk7XHJcbiAgICogQG1ldGhvZCBhZGRCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGxpa2UgdGhpcyBuZXcgUXVhcmsuQ29sb3IoJ3JhbmRvbScpXHJcbiAgICovXHJcbiAgYWRkQmVoYXZpb3VyKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShcInBhcmVudHNcIikpXHJcbiAgICAgICAgYXJndW1lbnRzW2ldLnBhcmVudHMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgQmVoYXZpb3VyXHJcbiAgICogQG1ldGhvZCByZW1vdmVCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGEgYmVoYXZpb3VyXHJcbiAgICovXHJcbiAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpXHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGFsbCBiZWhhdmlvdXJzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxCZWhhdmlvdXJzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcclxuICAgIHRoaXMuYmVoYXZpb3Vycy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIHRoaXMuYWdlICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWFkIHx8ICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUpKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW1pdHRpbmcodGltZSk7XHJcbiAgICB0aGlzLmludGVncmF0ZSh0aW1lKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxyXG4gICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlSW5pdGlhbGl6ZXJzKCk7XHJcbiAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJlbnQpe1xyXG4gICAgICB0aGlzLnBhcmVudC5yZW1vdmVFbWl0dGVyKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9FbWl0dGVyLmpzIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxubGV0IHVpZCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZXtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmlkID0gdWlkKys7XHJcbiAgICAgIHRoaXMucmVzZXQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGU7XHJcbiAgICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMudi54LCAtdGhpcy52LnkpICogKDE4MCAvIE1hdGguUEkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KGluaXQpIHtcclxuICAgICAgdGhpcy5saWZlID0gSW5maW5pdHk7XHJcbiAgICAgIHRoaXMuYWdlID0gMDtcclxuICAgICAgdGhpcy5lbmVyZ3kgPSAxO1xyXG4gICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zbGVlcCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5tYXNzID0gMTtcclxuICAgICAgdGhpcy5yYWRpdXMgPSAxMDtcclxuICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgdGhpcy5jb2xvciA9IG51bGw7XHJcbiAgICAgIHRoaXMuZWFzaW5nID0gKHZhbCkgPT4gdmFsO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHt9XHJcbiAgICAgIGlmIChpbml0KSB7XHJcbiAgICAgICAgdGhpcy5wID0gbmV3IFZlY3RvcjJEKCk7XHJcbiAgICAgICAgdGhpcy52ID0gbmV3IFZlY3RvcjJEKCk7XHJcbiAgICAgICAgdGhpcy5hID0gbmV3IFZlY3RvcjJEKCk7XHJcbiAgICAgICAgdGhpcy5vbGQgPSB7XHJcbiAgICAgICAgICBwIDogbmV3IFZlY3RvcjJEKCksXHJcbiAgICAgICAgICB2IDogbmV3IFZlY3RvcjJEKCksXHJcbiAgICAgICAgICBhIDogbmV3IFZlY3RvcjJEKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRlbGV0ZSB0aGlzLnRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLnAuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMudi5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLm9sZC5wLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLm9sZC52LnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLm9sZC5hLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucmdiID0ge1xyXG4gICAgICAgIHIgOiAyNTUsXHJcbiAgICAgICAgZyA6IDI1NSxcclxuICAgICAgICBiIDogMjU1XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGluZGV4LCB0aW1lKSB7XHJcbiAgICAgIGNvbnN0IGFnZSA9IHRoaXMuYWdlICsgdGltZTtcclxuXHJcbiAgICAgIGlmKGFnZSA+PSB0aGlzLmxpZmUpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcblxyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmJlaGF2aW91cnMubGVuZ3RoO1xyXG4gICAgICBsZXQgaTtcclxuICAgICAgZm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmJlaGF2aW91cnNbaV0pe1xyXG4gICAgICAgICAgdGhpcy5iZWhhdmlvdXJzW2ldLmFwcGx5QmVoYXZpb3VyKHRoaXMsIHRpbWUsIGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzY2FsZSA9IHRoaXMuZWFzaW5nKHRoaXMuYWdlIC8gdGhpcy5saWZlKTtcclxuICAgICAgdGhpcy5lbmVyZ3kgPSBNYXRoLm1heCgxIC0gc2NhbGUsIDApO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgICB0aGlzLmJlaGF2aW91cnMucHVzaChiZWhhdmlvdXIpO1xyXG4gICAgICBpZiAoYmVoYXZpb3VyLmhhc093blByb3BlcnR5KCdwYXJlbnRzJykpe1xyXG4gICAgICAgIGJlaGF2aW91ci5wYXJlbnRzLnB1c2godGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgYmVoYXZpb3VyLmluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKSB7XHJcbiAgICAgIHZhciBsZW5ndGggPSBiZWhhdmlvdXJzLmxlbmd0aCwgaTtcclxuICAgICAgZm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYWRkQmVoYXZpb3VyKGJlaGF2aW91cnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHZhciBiZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBiZWhhdmlvdXIucGFyZW50cyA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xyXG4gICAgICB0aGlzLmJlaGF2aW91cnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc3RvcnkgdGhpcyBwYXJ0aWNsZVxyXG4gICAgICogQG1ldGhvZCBkZXN0cm95XHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xyXG4gICAgICB0aGlzLmVuZXJneSA9IDA7XHJcbiAgICAgIHRoaXMuZGVhZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1BhcnRpY2xlLmpzIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcjJEe1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4LCB5KXtcclxuICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICB9XHJcblxyXG4gIHNldCh4LCB5KSB7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzZXRYKHgpIHtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0WSh5KSB7XHJcblxyXG4gICAgdGhpcy55ID0geTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzZXRDb21wb25lbnQoaW5kZXgsIHZhbHVlKSB7XHJcblxyXG4gICAgc3dpdGNoICggaW5kZXggKSB7XHJcblxyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgdGhpcy54ID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLnkgPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRleCBpcyBvdXQgb2YgcmFuZ2U6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRHcmFkaWVudCgpIHtcclxuICAgIGlmICh0aGlzLnggIT0gMClcclxuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgZWxzZSBpZiAodGhpcy55ID4gMClcclxuICAgICAgcmV0dXJuIE1hdGguUEkgLyAyO1xyXG4gICAgZWxzZSBpZiAodGhpcy55IDwgMClcclxuICAgICAgcmV0dXJuIC1NYXRoLlBJIC8gMjtcclxuICB9XHJcblxyXG4gIGdldENvbXBvbmVudChpbmRleCkge1xyXG5cclxuICAgIHN3aXRjaCAoIGluZGV4ICkge1xyXG5cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImluZGV4IGlzIG91dCBvZiByYW5nZTogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNvcHkodikge1xyXG5cclxuICAgIHRoaXMueCA9IHYueDtcclxuICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGQodiwgdykge1xyXG5cclxuICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWRkVmVjdG9ycyh2LCB3KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ICs9IHYueDtcclxuICAgIHRoaXMueSArPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkWFkoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCArPSBhO1xyXG4gICAgdGhpcy55ICs9IGI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkVmVjdG9ycyhhLCBiKSB7XHJcblxyXG4gICAgdGhpcy54ID0gYS54ICsgYi54O1xyXG4gICAgdGhpcy55ID0gYS55ICsgYi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFNjYWxhcihzKSB7XHJcblxyXG4gICAgdGhpcy54ICs9IHM7XHJcbiAgICB0aGlzLnkgKz0gcztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzdWIodiwgdykge1xyXG5cclxuICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3ViVmVjdG9ycyh2LCB3KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54IC09IHYueDtcclxuICAgIHRoaXMueSAtPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc3ViVmVjdG9ycyhhLCBiKSB7XHJcblxyXG4gICAgdGhpcy54ID0gYS54IC0gYi54O1xyXG4gICAgdGhpcy55ID0gYS55IC0gYi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG11bHRpcGx5U2NhbGFyKHMpIHtcclxuXHJcbiAgICB0aGlzLnggKj0gcztcclxuICAgIHRoaXMueSAqPSBzO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGRpdmlkZVNjYWxhcihzKSB7XHJcblxyXG4gICAgaWYgKHMgIT09IDApIHtcclxuXHJcbiAgICAgIHRoaXMueCAvPSBzO1xyXG4gICAgICB0aGlzLnkgLz0gcztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgdGhpcy5zZXQoMCwgMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG1pbih2KSB7XHJcblxyXG4gICAgaWYgKHRoaXMueCA+IHYueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gdi54O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy55ID4gdi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG1heCh2KSB7XHJcblxyXG4gICAgaWYgKHRoaXMueCA8IHYueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gdi54O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy55IDwgdi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGNsYW1wKG1pbiwgbWF4KSB7XHJcblxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhc3N1bWVzIG1pbiA8IG1heCwgaWYgdGhpcyBhc3N1bXB0aW9uIGlzbid0IHRydWUgaXQgd2lsbCBub3Qgb3BlcmF0ZSBjb3JyZWN0bHlcclxuXHJcbiAgICBpZiAodGhpcy54IDwgbWluLngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IG1pbi54O1xyXG5cclxuICAgIH0gZWxzZSBpZiAodGhpcy54ID4gbWF4LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IG1heC54O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy55IDwgbWluLnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IG1pbi55O1xyXG5cclxuICAgIH0gZWxzZSBpZiAodGhpcy55ID4gbWF4LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IG1heC55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBuZWdhdGUoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHlTY2FsYXIoLTEpO1xyXG5cclxuICB9XHJcblxyXG4gIGRvdCh2KSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueTtcclxuXHJcbiAgfVxyXG5cclxuICBsZW5ndGhTcSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xyXG5cclxuICB9XHJcblxyXG4gIGxlbmd0aCgpIHtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcblxyXG4gIH1cclxuXHJcbiAgbm9ybWFsaXplKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcih0aGlzLmxlbmd0aCgpKTtcclxuXHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZVRvKHYpIHtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VUb1NxdWFyZWQodikpO1xyXG5cclxuICB9XHJcblxyXG4gIHJvdGF0ZSh0aGEpIHtcclxuICAgIHZhciB4ID0gdGhpcy54O1xyXG4gICAgdmFyIHkgPSB0aGlzLnk7XHJcbiAgICB0aGlzLnggPSB4ICogTWF0aC5jb3ModGhhKSArIHkgKiBNYXRoLnNpbih0aGEpO1xyXG4gICAgdGhpcy55ID0gLXggKiBNYXRoLnNpbih0aGEpICsgeSAqIE1hdGguY29zKHRoYSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGRpc3RhbmNlVG9TcXVhcmVkKHYpIHtcclxuXHJcbiAgICB2YXIgZHggPSB0aGlzLnggLSB2LngsIGR5ID0gdGhpcy55IC0gdi55O1xyXG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xyXG5cclxuICB9XHJcblxyXG4gIHNldExlbmd0aChsKSB7XHJcblxyXG4gICAgdmFyIG9sZExlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcblxyXG4gICAgaWYgKG9sZExlbmd0aCAhPT0gMCAmJiBsICE9PSBvbGRMZW5ndGgpIHtcclxuXHJcbiAgICAgIHRoaXMubXVsdGlwbHlTY2FsYXIobCAvIG9sZExlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVycCh2LCBhbHBoYSkge1xyXG5cclxuICAgIHRoaXMueCArPSAodi54IC0gdGhpcy54ICkgKiBhbHBoYTtcclxuICAgIHRoaXMueSArPSAodi55IC0gdGhpcy55ICkgKiBhbHBoYTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBlcXVhbHModikge1xyXG5cclxuICAgIHJldHVybiAoKHYueCA9PT0gdGhpcy54ICkgJiYgKHYueSA9PT0gdGhpcy55ICkgKTtcclxuXHJcbiAgfVxyXG5cclxuICB0b0FycmF5KCkge1xyXG5cclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xyXG5cclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy54ID0gMC4wO1xyXG4gICAgdGhpcy55ID0gMC4wO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjbG9uZSgpIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCwgdGhpcy55KTtcclxuXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvVmVjdG9yMkQuanMiLCJpbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0ZXtcclxuXHJcbiAgY29uc3RydWN0b3IobnVtcGFuLCB0aW1lcGFuKSB7XHJcbiAgICB0aGlzLm51bVBhbiA9IG51bXBhblxyXG4gICAgdGhpcy50aW1lUGFuID0gdGltZXBhbjtcclxuICAgIHRoaXMubnVtUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhpcy5udW1QYW4pO1xyXG4gICAgdGhpcy50aW1lUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhpcy50aW1lUGFuKTtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMubmV4dFRpbWUgPSAwO1xyXG4gICAgdGhpcy5pbml0KCk7ICBcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUodGltZSkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUgKz0gdGltZTtcclxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSA+PSB0aGlzLm5leHRUaW1lKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgICAgdGhpcy5uZXh0VGltZSA9IHRoaXMudGltZVBhbi5nZXRWYWx1ZSgpO1xyXG4gICAgICBpZiAodGhpcy5udW1QYW4uYiA9PSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtUGFuLmdldFZhbHVlKGZhbHNlKSA+IDAuNSlcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bVBhbi5nZXRWYWx1ZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvUmF0ZS5qcyIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IFNwYW4gZnJvbSAnLi4vbWF0aC9TcGFuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGRlZmF1bHQgaWYgdGhlIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgaW5pdFZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgYSBzcGVjaWZpYyB2YWx1ZSwgY291bGQgYmUgZXZlcnl0aGluZyBidXQgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IGRlZmF1bHRzIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBpbml0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBkZWZhdWx0cykge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCkgPyB2YWx1ZSA6IGRlZmF1bHRzO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBWZWN0b3IyRCAtIG9yIGNyZWF0ZXMgYSBuZXcgb25lXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgZ2V0VmVjdG9yMkRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1F1YXJrLlZlY3RvcjJEIHwgTnVtYmVyfSBwb3N0aW9uT3JYXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ldIGp1c3QgdmFsaWQgaWYgJ3Bvc3Rpb25PclgnIGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtRdWFyay5WZWN0b3IyRH1cclxuICAgICAqL1xyXG4gICAgZ2V0VmVjdG9yMkQ6IGZ1bmN0aW9uKHBvc3Rpb25PclgsIHkpIHtcclxuICAgICAgICBpZiAodHlwZW9mKHBvc3Rpb25PclgpID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3N0aW9uT3JYO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB2ZWN0b3IyZCA9IG5ldyBWZWN0b3IyRChwb3N0aW9uT3JYLCB5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZlY3RvcjJkO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBqdWRnZVZlY3RvcjJEXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgcE9CSmBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgZnVuY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcE9CSlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIGp1ZGdlVmVjdG9yMkQ6IGZ1bmN0aW9uKHBPQkopIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3gnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd5JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgncCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3Bvc2l0aW9uJykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAncCc7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3Z4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndngnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndmVsb2NpdHknKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICd2JztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdheCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2EnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdhY2NlbGVyYXRlJykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAnYSc7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2Qgc2V0VmVjdG9yMkRCeU9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHRhcmdldGBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHBPQkpgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIGZ1bmN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBPQkpcclxuICAgICAqL1xyXG4gICAgc2V0VmVjdG9yMkRCeU9iamVjdDogZnVuY3Rpb24odGFyZ2V0LCBwT0JKKSB7XHJcbiAgICAgICAgaWYocE9CSi54KSB0YXJnZXQucC54ID0gcE9CSi54O1xyXG5cclxuICAgICAgICBpZihwT0JKLnkpIHRhcmdldC5wLnkgPSBwT0JKLnk7XHJcblxyXG4gICAgICAgIGlmKHBPQkoudngpIHRhcmdldC52LnggPSBwT0JKLnZ4O1xyXG4gICAgICAgIGlmKHBPQkoudnkpIHRhcmdldC52LnkgPSBwT0JKLnZ5O1xyXG5cclxuICAgICAgICBpZihwT0JKLmF4KSB0YXJnZXQuYS54ID0gcE9CSi5heDtcclxuICAgICAgICBpZihwT0JKLmF5KSB0YXJnZXQuYS55ID0gcE9CSi5heTtcclxuICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBuZXcgUXVhcmsuU3BhbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBzZXRTcGFuVmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhLCBiIGFuZCBjIHNob3VsZCBiZSAnTWl4ZWQnIG9yICdOdW1iZXInP1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWQgfCBRdWFyay5TcGFufSBhXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGJcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9ICAgICAgICAgICAgICAgY1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1F1YXJrLlNwYW59XHJcbiAgICAgKi9cclxuICAgIHNldFNwYW5WYWx1ZTogZnVuY3Rpb24oYSwgYiwgYykge1xyXG4gICAgICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBTcGFuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhLCBiKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSwgYiwgYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgZnJvbSBhIFF1YXJrLlNwYW4sIGlmIHRoZSBwYXJhbSBpcyBub3QgYSBRdWFyay5TcGFuIGl0IHdpbGwgcmV0dXJuIHRoZSBnaXZlbiBwYXJhbWV0ZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBnZXRTcGFuVmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUXVhcmsuU3Bhbn0gcGFuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7TWl4ZWR9IHRoZSB2YWx1ZSBvZiBRdWFyay5TcGFuIE9SIHRoZSBwYXJhbWV0ZXIgaWYgaXQgaXMgbm90IGEgUXVhcmsuU3BhblxyXG4gICAgICovXHJcbiAgICBnZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKHBhbikge1xyXG4gICAgICAgIGlmIChwYW4uY29uc3RydWN0b3IgPT09IFNwYW4pXHJcbiAgICAgICAgICAgIHJldHVybiBwYW4uZ2V0VmFsdWUoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBwYW47XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGVkZWYgIHtPYmplY3R9IHJnYk9iamVjdFxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHIgcmVkIHZhbHVlXHJcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gZyBncmVlbiB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGIgYmx1ZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIGNvbnZlcnRzIGEgaGV4IHZhbHVlIHRvIGEgcmdiIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGhleFRvUkdCXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGggYW55IGhleCB2YWx1ZSwgZS5nLiAjMDAwMDAwIG9yIDAwMDAwMCBmb3IgYmxhY2tcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtyZ2JPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGhleFRvUkdCOiBmdW5jdGlvbihoKSB7XHJcbiAgICAgICAgdmFyIGhleDE2ID0gKGguY2hhckF0KDApID09IFwiI1wiKSA/IGguc3Vic3RyaW5nKDEsIDcpIDogaDtcclxuICAgICAgICB2YXIgciA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygwLCAyKSwgMTYpO1xyXG4gICAgICAgIHZhciBnID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDIsIDQpLCAxNik7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoNCwgNiksIDE2KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogcixcclxuICAgICAgICAgICAgZzogZyxcclxuICAgICAgICAgICAgYjogYlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIHJnYiB2YWx1ZSB0byBhIHJnYiBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCByZ2JUb0hleFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0IHwgUXVhcmsuaGV4VG9SR0J9IHJnYiBhIHJnYiBvYmplY3QgbGlrZSBpbiB7QGxpbmsgUXVhcmsjUXVhcmsuVXRpbC5oZXhUb1JHQn1cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJnYigpXHJcbiAgICAgKi9cclxuICAgIHJnYlRvSGV4OiBmdW5jdGlvbihyYmcpIHtcclxuICAgICAgICByZXR1cm4gJ3JnYignICsgcmJnLnIgKyAnLCAnICsgcmJnLmcgKyAnLCAnICsgcmJnLmIgKyAnKSc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9VdGlsLmpzIiwiaW1wb3J0IHsgcmFuZG9tQVRvQiwgcmFuZG9tRmxvYXRpbmcgfSBmcm9tICcuL01hdGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFue1xyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGNlbnRlciA9IGZhbHNlKSB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhKSkge1xyXG5cdFx0XHR0aGlzLmlzQXJyYXkgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmEgPSBhO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5hID0gYTtcclxuXHRcdFx0dGhpcy5iID0gYiB8fCB0aGlzLmE7XHJcblx0XHRcdHRoaXMuY2VudGVyID0gY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0VmFsdWUoSU5UKXtcclxuXHRcdGlmICh0aGlzLmlzQXJyYXkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYVtNYXRoLmZsb29yKHRoaXMuYS5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoIXRoaXMuY2VudGVyKXtcclxuXHRcdFx0XHRyZXR1cm4gcmFuZG9tQVRvQih0aGlzLmEsIHRoaXMuYiwgSU5UKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cmV0dXJuIHJhbmRvbUZsb2F0aW5nKHRoaXMuYSwgdGhpcy5iLCBJTlQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcclxuXHR9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvU3Bhbi5qcyIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21BVG9CKGEsIGIsIElOVCkge1xyXG4gIGlmICghSU5UKVxyXG4gICAgcmV0dXJuIChhICsgTWF0aC5yYW5kb20oKSAqIChiIC0gYSApKTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhKSkgKyBhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tRmxvYXRpbmcoY2VudGVyLCBmLCBJTlQpIHtcclxuICByZXR1cm4gcmFuZG9tQVRvQihjZW50ZXIgLSBmLCBjZW50ZXIgKyBmLCBJTlQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlVHJhbnNmb3JtKGEpIHtcclxuICByZXR1cm4gYSAqIE1hdGguUEkgLyAxODA7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJpbXBvcnQgeyBFVUxFUiB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtZXJpY2FsSW50ZWdyYXRpb24ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8IEVVTEVSO1xyXG5cclxuICAgIHRoaXMuaW50ZWdyYXRlID0gdGhpcy5pbnRlZ3JhdGU7XHJcbiAgICB0aGlzLmV1bGVySW50ZWdyYXRlID0gdGhpcy5ldWxlckludGVncmF0ZTtcclxuICB9XHJcblxyXG4gIGludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZykge1xyXG4gICAgdGhpcy5ldWxlckludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZyk7XHJcbiAgfVxyXG5cclxuICBldWxlckludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZykge1xyXG4gICAgaWYgKCFwYXJ0aWNsZS5zbGVlcCkge1xyXG4gICAgICBwYXJ0aWNsZS5vbGQucC5jb3B5KHBhcnRpY2xlLnApO1xyXG4gICAgICBwYXJ0aWNsZS5vbGQudi5jb3B5KHBhcnRpY2xlLnYpO1xyXG4gICAgICBwYXJ0aWNsZS5hLm11bHRpcGx5U2NhbGFyKDEgLyBwYXJ0aWNsZS5tYXNzKTtcclxuICAgICAgcGFydGljbGUudi5hZGQocGFydGljbGUuYS5tdWx0aXBseVNjYWxhcih0aW1lKSk7XHJcbiAgICAgIHBhcnRpY2xlLnAuYWRkKHBhcnRpY2xlLm9sZC52Lm11bHRpcGx5U2NhbGFyKHRpbWUpKTtcclxuICAgICAgaWYgKGRhbXBpbmcpe1xyXG4gICAgICAgIHBhcnRpY2xlLnYubXVsdGlwbHlTY2FsYXIoZGFtcGluZyk7XHJcbiAgICAgIH1cclxuICAgICAgcGFydGljbGUuYS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbi5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCB7IGRlZ3JlZVRyYW5zZm9ybSB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemVzKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gaW5pdGlhbGl6ZXMubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSBpbml0aWFsaXplc1tpXTtcclxuICAgIGlmIChpbml0aWFsaXplIGluc3RhbmNlb2YgSW5pdGlhbGl6ZSl7XHJcbiAgICAgIGluaXRpYWxpemUuaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0KGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXQoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemUpe1xyXG4gIFV0aWwuc2V0VmVjdG9yMkRCeU9iamVjdChwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcbiAgaWYgKGVtaXR0ZXIuYmluZEVtaXR0ZXIpIHtcclxuICAgIHBhcnRpY2xlLnAuYWRkKGVtaXR0ZXIucCk7XHJcbiAgICBwYXJ0aWNsZS52LmFkZChlbWl0dGVyLnYpO1xyXG4gICAgcGFydGljbGUuYS5hZGQoZW1pdHRlci5hKTtcclxuICAgIHBhcnRpY2xlLnYucm90YXRlKGRlZ3JlZVRyYW5zZm9ybShlbWl0dGVyLnJvdGF0aW9uKSk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRyZXNldCgpIHtcclxuXHJcblx0fVxyXG5cclxuXHRpbml0KGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcblx0XHRpZiAocGFydGljbGUpIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsaXplKHBhcnRpY2xlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShlbWl0dGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKSB7XHJcblxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1pbmlTaWduYWxCaW5kaW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaVNpZ25hbEJpbmRpbmcoZm4sIG9uY2UsIHRoaXNBcmcpIHtcbiAgICBpZiAob25jZSA9PT0gdW5kZWZpbmVkKSBvbmNlID0gZmFsc2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNpZ25hbEJpbmRpbmcpO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9vbmNlID0gb25jZTtcbiAgICB0aGlzLl90aGlzQXJnID0gdGhpc0FyZztcbiAgICB0aGlzLl9uZXh0ID0gdGhpcy5fcHJldiA9IHRoaXMuX293bmVyID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2lnbmFsQmluZGluZywgW3tcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgICBpZiAodGhpcy5fb3duZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX293bmVyLmRldGFjaCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsQmluZGluZztcbn0pKCk7XG5cbmZ1bmN0aW9uIF9hZGRNaW5pU2lnbmFsQmluZGluZyhzZWxmLCBub2RlKSB7XG4gIGlmICghc2VsZi5faGVhZCkge1xuICAgIHNlbGYuX2hlYWQgPSBub2RlO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuX3RhaWwuX25leHQgPSBub2RlO1xuICAgIG5vZGUuX3ByZXYgPSBzZWxmLl90YWlsO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9XG5cbiAgbm9kZS5fb3duZXIgPSBzZWxmO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgTWluaVNpZ25hbCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWwpO1xuXG4gICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbCwgW3tcbiAgICBrZXk6ICdoYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZXJzKCkge1xuICAgICAgdmFyIGV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG5cbiAgICAgIGlmIChleGlzdHMpIHJldHVybiAhIW5vZGU7XG5cbiAgICAgIHZhciBlZSA9IFtdO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBlZS5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhub2RlKSB7XG4gICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgTWluaVNpZ25hbEJpbmRpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNoYXMoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBNaW5pU2lnbmFsQmluZGluZyBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlLl9vd25lciA9PT0gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX29uY2UpIHRoaXMuZGV0YWNoKG5vZGUpO1xuICAgICAgICBub2RlLl9mbi5hcHBseShub2RlLl90aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2FkZCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIGZhbHNlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjb25jZSgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIHRydWUsIHRoaXNBcmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjZGV0YWNoKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuX293bmVyICE9PSB0aGlzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKG5vZGUuX3ByZXYpIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xuICAgICAgaWYgKG5vZGUuX25leHQpIG5vZGUuX25leHQuX3ByZXYgPSBub2RlLl9wcmV2O1xuXG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy5faGVhZCkge1xuICAgICAgICB0aGlzLl9oZWFkID0gbm9kZS5fbmV4dDtcbiAgICAgICAgaWYgKG5vZGUuX25leHQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlID09PSB0aGlzLl90YWlsKSB7XG4gICAgICAgIHRoaXMuX3RhaWwgPSBub2RlLl9wcmV2O1xuICAgICAgICB0aGlzLl90YWlsLl9uZXh0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoQWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoQWxsKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdGhpcztcblxuICAgICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSBudWxsO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBub2RlLl9vd25lciA9IG51bGw7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTaWduYWw7XG59KSgpO1xuXG5NaW5pU2lnbmFsLk1pbmlTaWduYWxCaW5kaW5nID0gTWluaVNpZ25hbEJpbmRpbmc7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1pbmlTaWduYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9taW5pLXNpZ25hbHMvbGliL21pbmktc2lnbmFscy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlJztcclxuaW1wb3J0IFZlbG9jaXR5IGZyb20gJy4vVmVsb2NpdHknO1xyXG5pbXBvcnQgTGlmZSBmcm9tICcuL0xpZmUnO1xyXG5pbXBvcnQgTWFzcyBmcm9tICcuL01hc3MnO1xyXG5pbXBvcnQgUmFkaXVzIGZyb20gJy4vUmFkaXVzJztcclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IHsgUmF0ZSwgVmVsb2NpdHksIExpZmUsIE1hc3MsIFJhZGl1cywgUG9zaXRpb24gfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9pbmRleC5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCB7IE1FQVNVUkUgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuaW1wb3J0IFBvbGFyMkQgZnJvbSAnLi4vbWF0aC9Qb2xhcjJEJztcclxuaW1wb3J0IHsgcmFuZG9tQVRvQiwgcmFuZG9tRmxvYXRpbmcgfSBmcm9tICcuLi9tYXRoL01hdGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWxvY2l0eSBleHRlbmRzIEluaXRpYWxpemV7XHJcblx0Y29uc3RydWN0b3IocnBhbiwgdGhhcGFuLCB0eXBlKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuclBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHJwYW4pO1xyXG5cdFx0dGhpcy50aGFQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGFwYW4pO1xyXG5cdFx0dGhpcy50eXBlID0gVXRpbC5pbml0VmFsdWUodHlwZSwgJ3ZlY3RvcicpO1xyXG5cclxuXHRcdC8vIHNwZWVkIG9wdGltaXphdGlvbnNcclxuXHRcdHRoaXMuUE9MQVIgPSAncG9sYXInO1xyXG5cdFx0dGhpcy5QID0gJ3AnO1xyXG5cdFx0dGhpcy5yUGFuVmFsID0gdGhpcy5yUGFuLmdldFZhbHVlKCk7XHJcblx0XHR0aGlzLm5vcm1hbGl6ZWRQSSA9IE1hdGguUEkgLyAxODA7XHJcblx0fVxyXG5cclxuXHRyZXNldChycGFuLCB0aGFwYW4sIHR5cGUpIHtcclxuXHRcdHRoaXMuclBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHJwYW4pO1xyXG5cdFx0dGhpcy50aGFQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGFwYW4pO1xyXG5cdFx0dGhpcy50eXBlID0gVXRpbC5pbml0VmFsdWUodHlwZSwgJ3ZlY3RvcicpO1xyXG5cdH1cclxuXHJcblx0bm9ybWFsaXplVmVsb2NpdHkodnIpIHtcclxuXHRcdHJldHVybiB2ciAqIE1FQVNVUkU7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHRhcmdldCkge1xyXG5cdFx0aWYgKHRoaXMudHlwZSA9PSB0aGlzLlAgfHwgdGhpcy50eXBlID09IHRoaXMuUCB8fCB0aGlzLnR5cGUgPT0gdGhpcy5QT0xBUikge1xyXG5cdFx0XHRjb25zdCB0aGFQYW5Ob3JtID0gcmFuZG9tQVRvQih0aGlzLnRoYVBhbi5hLCB0aGlzLnRoYVBhbi5iKSp0aGlzLm5vcm1hbGl6ZWRQSTtcclxuXHRcdFx0Y29uc3QgcG9sYXIyZCA9IG5ldyBQb2xhcjJEKHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy5yUGFuVmFsKSwgdGhhUGFuTm9ybSk7XHJcblx0XHRcdHRhcmdldC52LnggPSBwb2xhcjJkLmdldFgoKTtcclxuXHRcdFx0dGFyZ2V0LnYueSA9IHBvbGFyMmQuZ2V0WSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGFyZ2V0LnYueCA9IHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy5yUGFuLmdldFZhbHVlKCkpO1xyXG5cdFx0XHR0YXJnZXQudi55ID0gdGhpcy5ub3JtYWxpemVWZWxvY2l0eSh0aGlzLnRoYVBhbi5nZXRWYWx1ZSgpKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9WZWxvY2l0eS5qcyIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbGFyMkQge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyLCB0aGEpe1xyXG5cdFx0dGhpcy5yID0gTWF0aC5hYnMocikgfHwgMDtcclxuXHRcdHRoaXMudGhhID0gdGhhIHx8IDA7XHJcblx0fVxyXG5cclxuXHRzZXQociwgdGhhKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHRoaXMudGhhID0gdGhhO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0UihyKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFRoYSh0aGEpIHtcclxuXHJcblx0XHR0aGlzLnRoYSA9IHRoYTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRjb3B5KHApIHtcclxuXHJcblx0XHR0aGlzLnIgPSBwLnI7XHJcblx0XHR0aGlzLnRoYSA9IHAudGhhO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHRvVmVjdG9yKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0WCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnRoYSk7XHJcblx0fVxyXG5cclxuXHRnZXRZKCkge1xyXG5cdFx0cmV0dXJuIC10aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnRoYSk7XHJcblx0fVxyXG5cclxuXHRub3JtYWxpemUoKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gMTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0ZXF1YWxzKHYpIHtcclxuXHJcblx0XHRyZXR1cm4gKCh2LnIgPT09IHRoaXMuciApICYmICh2LnRoYSA9PT0gdGhpcy50aGEgKSApO1xyXG5cclxuXHR9XHJcblxyXG5cdHRvQXJyYXkoKSB7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLnIsIHRoaXMudGhhXTtcclxuXHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuciA9IDAuMDtcclxuXHRcdHRoaXMudGhhID0gMC4wO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRjbG9uZSgpIHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFBvbGFyMkQodGhpcy5yLCB0aGlzLnRoYSk7XHJcblxyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9Qb2xhcjJELmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZmUgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubGlmZVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdGlmICh0aGlzLmxpZmVQYW4uYSA9PSBJbmZpbml0eSl7XHJcblx0XHRcdHRhcmdldC5saWZlID0gSW5maW5pdHk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGFyZ2V0LmxpZmUgPSB0aGlzLmxpZmVQYW4uZ2V0VmFsdWUoKTtcdFxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0xpZmUuanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzcyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFzc1BhbiA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUodGFyZ2V0KSB7XHJcbiAgICAgICAgdGFyZ2V0Lm1hc3MgPSB0aGlzLm1hc3NQYW4uZ2V0VmFsdWUoKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL01hc3MuanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaXVzIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XHJcbiAgICBcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yYWRpdXMgPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldChhLCBiLCBjKXtcclxuXHRcdHRoaXMucmFkaXVzID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUucmFkaXVzID0gdGhpcy5yYWRpdXMuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5vbGRSYWRpdXMgPSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvUmFkaXVzLmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih6b25lKSB7XHJcbiAgICBcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy56b25lID0gem9uZSB8fCBuZXcgUG9pbnRab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoem9uZSl7XHJcblx0XHR0aGlzLnpvbmUgPSB6b25lIHx8IG5ldyBQb2ludFpvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHRhcmdldCkge1xyXG5cdFx0dGhpcy56b25lLmdldFBvc2l0aW9uKCk7XHJcblx0XHR0YXJnZXQucC54ID0gdGhpcy56b25lLnZlY3Rvci54O1xyXG5cdFx0dGFyZ2V0LnAueSA9IHRoaXMuem9uZS52ZWN0b3IueTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcbmltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyBNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aDtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQ7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCkge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSlcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5CT1VORCkge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzIDwgdGhpcy54KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54ICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueCAqPSAtMTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJ0aWNsZS5wLnggKyBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54ICsgdGhpcy53aWR0aCAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgLSBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5DUk9TUykge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54ICYmIHBhcnRpY2xlLnYueCA8PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGggJiYgcGFydGljbGUudi54ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54IC0gcGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSAmJiBwYXJ0aWNsZS52LnkgPD0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcGFydGljbGUudi55ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL1JlY3Rab25lLmpzIiwiaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuLi9iZWhhdmlvdXIvQ3Jvc3Nab25lJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy52ZWN0b3IgPSBuZXcgVmVjdG9yMkQoMCwgMCk7XHJcblx0XHR0aGlzLnJhbmRvbSA9IDA7XHJcblx0XHR0aGlzLmNyb3NzVHlwZSA9IENyb3NzWm9uZS5DUk9TU19UWVBFUy5ERUFEO1xyXG5cdFx0dGhpcy5hbGVydCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9ab25lLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9zc1pvbmUgZXh0ZW5kcyBCZWhhdmlvdXJ7XHJcblxyXG5cdHN0YXRpYyBDUk9TU19UWVBFUyA9IHtcclxuXHRcdENST1NTOiAxIDw8IDAsXHJcblx0XHRERUFEOiAxIDw8IDIsXHJcblx0XHRCT1VORDogMSA8PCAzXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3Ioem9uZSwgY3Jvc3NUeXBlLCBsaWZlLCBlYXNpbmcpe1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoem9uZSwgY3Jvc3NUeXBlKTtcclxuXHRcdHRoaXMubmFtZSA9ICdDcm9zc1pvbmUnO1xyXG5cclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoem9uZSwgY3Jvc3NUeXBlLCBsaWZlLCBlYXNpbmcpe1xyXG5cdFx0dGhpcy56b25lID0gem9uZTtcclxuXHRcdHRoaXMuem9uZS5jcm9zc1R5cGUgPSBVdGlsLmluaXRWYWx1ZShjcm9zc1R5cGUsIENyb3NzWm9uZS5DUk9TU19UWVBFUy5ERUFEKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHRoaXMuem9uZS5jcm9zc2luZyhwYXJ0aWNsZSk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQ3Jvc3Nab25lLmpzIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IHsgTUVBU1VSRSB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xyXG5pbXBvcnQgZ2V0RWFzaW5nQnlOYW1lIGZyb20gJy4uL21hdGgvZWFzZSc7XHJcblxyXG5cclxuY29uc3QgQkVIQVZJT1VSX0lEX0JBU0UgPSAweEZGRkZGO1xyXG5sZXQgdWlkID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGxpZmUsIGVhc2luZyA9ICdlYXNlTGluZWFyJykge1xyXG5cdFx0dGhpcy5pZCA9IEJFSEFWSU9VUl9JRF9CQVNFICsgdWlkKys7XHJcblx0XHR0aGlzLmxpZmUgPSBsaWZlIHx8IEluZmluaXR5O1xyXG5cdFx0dGhpcy5lYXNpbmcgPSBnZXRFYXNpbmdCeU5hbWUoZWFzaW5nKTtcclxuXHRcdHRoaXMuYWdlID0gMDtcclxuXHRcdHRoaXMuZW5lcmd5ID0gMTtcclxuXHRcdHRoaXMuZGVhZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wYXJlbnRzID0gW107XHJcblx0XHR0aGlzLm5hbWUgPSAnQmVoYXZpb3VyJztcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9ZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5saWZlID0gbGlmZSB8fCBJbmZpbml0eTtcclxuXHRcdHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IGdldEVhc2luZ0J5TmFtZSgnZWFzZUxpbmVhcicpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTm9ybWFsaXplIGEgZm9yY2UgYnkgMToxMDA7XHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIG5vcm1hbGl6ZUZvcmNlXHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEfSBmb3JjZSBcclxuXHQgKi9cclxuXHRub3JtYWxpemVGb3JjZShmb3JjZSkge1xyXG5cdFx0cmV0dXJuIGZvcmNlLm11bHRpcGx5U2NhbGFyKE1FQVNVUkUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTm9ybWFsaXplIGEgdmFsdWUgYnkgMToxMDA7XHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIG5vcm1hbGl6ZVZhbHVlXHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxyXG5cdCAqL1xyXG5cdG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUgKiBNRUFTVVJFO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZSB0aGUgYmVoYXZpb3VyJ3MgcGFyYW1ldGVycyBmb3IgYWxsIHBhcnRpY2xlc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBpbml0aWFsaXplXHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqL1xyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHRoaXMuYWdlICs9IHRpbWU7XHJcblx0XHRpZiAodGhpcy5hZ2UgPj0gdGhpcy5saWZlIHx8IHRoaXMuZGVhZCkge1xyXG5cdFx0XHR0aGlzLmVuZXJneSA9IDA7XHJcblx0XHRcdHRoaXMuZGVhZCA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHNjYWxlID0gdGhpcy5lYXNpbmcocGFydGljbGUuYWdlIC8gcGFydGljbGUubGlmZSk7XHJcblx0XHRcdHRoaXMuZW5lcmd5ID0gTWF0aC5tYXgoMSAtIHNjYWxlLCAwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogRGVzdG9yeSB0aGlzIGJlaGF2aW91clxyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBkZXN0cm95XHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKi9cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0dmFyIGluZGV4O1xyXG5cdFx0dmFyIGxlbmd0aCA9IHRoaXMucGFyZW50cy5sZW5ndGgsIGk7XHJcblx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMucGFyZW50c1tpXS5yZW1vdmVCZWhhdmlvdXIodGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYXJlbnRzID0gW107XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9CZWhhdmlvdXIuanMiLCJjb25zdCBlYXNpbmcgPSB7XHJcblx0ZWFzZUxpbmVhciA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluUXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5wb3codmFsdWUsIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRRdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtKE1hdGgucG93KCh2YWx1ZSAtIDEpLCAyKSAtIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dFF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCAyKTtcclxuXHRcdHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlIC0gMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluQ3ViaWMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHZhbHVlLCAzKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0Q3ViaWMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIChNYXRoLnBvdygodmFsdWUgLSAxKSwgMykgKyAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRDdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3codmFsdWUsIDMpO1xyXG5cdFx0cmV0dXJuIDAuNSAqIChNYXRoLnBvdygodmFsdWUgLSAyKSwgMykgKyAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5RdWFydCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5wb3codmFsdWUsIDQpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRRdWFydCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLShNYXRoLnBvdygodmFsdWUgLSAxKSwgNCkgLSAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRRdWFydCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3codmFsdWUsIDQpO1xyXG5cdFx0cmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogTWF0aC5wb3codmFsdWUsIDMpIC0gMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluU2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLU1hdGguY29zKHZhbHVlICogKE1hdGguUEkgLyAyKSkgKyAxO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRTaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnNpbih2YWx1ZSAqIChNYXRoLlBJIC8gMikpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dFNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICgtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkgLSAxKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluRXhwbyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKHZhbHVlID09PSAwKSA/IDAgOiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0RXhwbyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKHZhbHVlID09PSAxKSA/IDEgOiAtTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICsgMTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRFeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSA9PT0gMClcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHRpZiAodmFsdWUgPT09IDEpXHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpO1xyXG5cdFx0cmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogLS12YWx1ZSkgKyAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5DaXJjIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtKE1hdGguc3FydCgxIC0gKHZhbHVlICogdmFsdWUpKSAtIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRDaXJjIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KCh2YWx1ZSAtIDEpLCAyKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0Q2lyYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XHJcblx0XHRyZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XHJcblx0fSxcclxuXHRcclxuXHRlYXNlSW5CYWNrIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhciBzID0gMS43MDE1ODtcclxuXHRcdHJldHVybiAodmFsdWUpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dEJhY2sgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dmFyIHMgPSAxLjcwMTU4O1xyXG5cdFx0cmV0dXJuICggdmFsdWUgPSB2YWx1ZSAtIDEpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEJhY2sgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dmFyIHMgPSAxLjcwMTU4O1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdmFsdWUgLSBzKSk7XHJcblx0XHRyZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdmFsdWUgKyBzKSArIDIpO1xyXG5cdH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEVhc2luZ0J5TmFtZShuYW1lKSB7XHJcblx0cmV0dXJuIGVhc2luZ1tuYW1lXVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL2Vhc2UuanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLng7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRhbGVydCgnU29ycnkgUG9pbnRab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3NpbmcgbWV0aG9kJyk7XHJcblx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9Qb2ludFpvbmUuanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4uL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZVpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeDEsIHkxLCB4MiwgeTIsIGRpcmVjdGlvbikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoeDIgLSB4MSA+PSAwKSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MTtcclxuXHRcdFx0dGhpcy55MSA9IHkxO1xyXG5cdFx0XHR0aGlzLngyID0geDI7XHJcblx0XHRcdHRoaXMueTIgPSB5MjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MjtcclxuXHRcdFx0dGhpcy55MSA9IHkyO1xyXG5cdFx0XHR0aGlzLngyID0geDE7XHJcblx0XHRcdHRoaXMueTIgPSB5MTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZHggPSB0aGlzLngyIC0gdGhpcy54MTtcclxuXHRcdHRoaXMuZHkgPSB0aGlzLnkyIC0gdGhpcy55MTtcclxuXHRcdHRoaXMubWlueCA9IE1hdGgubWluKHRoaXMueDEsIHRoaXMueDIpO1xyXG5cdFx0dGhpcy5taW55ID0gTWF0aC5taW4odGhpcy55MSwgdGhpcy55Mik7XHJcblx0XHR0aGlzLm1heHggPSBNYXRoLm1heCh0aGlzLngxLCB0aGlzLngyKTtcclxuXHRcdHRoaXMubWF4eSA9IE1hdGgubWF4KHRoaXMueTEsIHRoaXMueTIpO1xyXG5cdFx0dGhpcy5kb3QgPSB0aGlzLngyICogdGhpcy55MSAtIHRoaXMueDEgKiB0aGlzLnkyO1xyXG5cdFx0dGhpcy54eHl5ID0gdGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keTtcclxuXHRcdHRoaXMuZ3JhZGllbnQgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCAxO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54MSArIHRoaXMucmFuZG9tICogdGhpcy5sZW5ndGggKiBNYXRoLmNvcyh0aGlzLmdyYWRpZW50KTtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkxICsgdGhpcy5yYW5kb20gKiB0aGlzLmxlbmd0aCAqIE1hdGguc2luKHRoaXMuZ3JhZGllbnQpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkRFQUQpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09IDEpIHtcclxuXHRcdFx0XHR0aGlzLmdldFJhbmdlKHBhcnRpY2xlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoIXNlbGYuZ2V0RGlyZWN0aW9uKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSlcclxuXHRcdFx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHNlbGYuZ2V0RGlzdGFuY2UocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpIDw9IHBhcnRpY2xlLnJhZGl1cykge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGYuZHggPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlbGYuZHkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS52LnkgKj0gLTE7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldFN5bW1ldHJpYyhwYXJ0aWNsZS52KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0XHRhbGVydCgnU29ycnkgbGluZVpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zcyBtZXRob2QnKTtcclxuXHRcdFx0XHR0aGlzLmFsZXJ0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldERpcmVjdGlvbih4LCB5KSB7XHJcblx0XHR2YXIgQSA9IHRoaXMuZHk7XHJcblx0XHR2YXIgQiA9IC10aGlzLmR4O1xyXG5cdFx0dmFyIEMgPSB0aGlzLmRvdDtcclxuXHRcdHZhciBEID0gQiA9PSAwID8gMSA6IEI7XHJcblx0XHRpZiAoKEEgKiB4ICsgQiAqIHkgKyBDKSAqIEQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXREaXN0YW5jZSh4LCB5KSB7XHJcblx0XHR2YXIgQSA9IHRoaXMuZHk7XHJcblx0XHR2YXIgQiA9IC10aGlzLmR4O1xyXG5cdFx0dmFyIEMgPSB0aGlzLmRvdDtcclxuXHRcdHZhciBEID0gKEEgKiB4ICsgQiAqIHkgKyBDKTtcclxuXHRcdHJldHVybiBEIC8gTWF0aC5zcXJ0KHRoaXMueHh5eSk7XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWModikge1xyXG5cdFx0dmFyIHRoYTIgPSB2LmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhMSA9IHRoaXMuZ2V0R3JhZGllbnQoKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gdi54O1xyXG5cdFx0dmFyIG9sZHkgPSB2Lnk7XHJcblx0XHR2LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0di55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHRcdHJldHVybiB2O1xyXG5cdH1cclxuXHJcblx0Z2V0R3JhZGllbnQoKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5hdGFuMih0aGlzLmR5LCB0aGlzLmR4KTtcclxuXHR9XHJcblxyXG5cdGdldFJhbmdlKHBhcnRpY2xlLCBmdW4pIHtcclxuXHRcdHZhciBhbmdsZSA9IE1hdGguYWJzKHRoaXMuZ2V0R3JhZGllbnQoKSk7XHJcblx0XHRpZiAoYW5nbGUgPD0gTWF0aC5QSSAvIDQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCA8IHRoaXMubWF4eCAmJiBwYXJ0aWNsZS5wLnggPiB0aGlzLm1pbngpIHtcclxuXHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSA8IHRoaXMubWF4eSAmJiBwYXJ0aWNsZS5wLnkgPiB0aGlzLm1pbnkpIHtcclxuXHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TGVuZ3RoKCkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmR4ICogdGhpcy5keCArIHRoaXMuZHkgKiB0aGlzLmR5KVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL0xpbmVab25lLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihpbWFnZURhdGEsIHgsIHksIGQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnJlc2V0KGltYWdlRGF0YSwgeCwgeSwgZCk7XHJcblx0fVxyXG5cclxuXHRyZXNldChpbWFnZURhdGEsIHgsIHksIGQpIHtcclxuXHRcdHRoaXMuaW1hZ2VEYXRhID0gaW1hZ2VEYXRhO1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLmQgPSBkIHx8IDI7XHJcblx0XHR0aGlzLnZlY3RvcnMgPSBbXTtcclxuXHRcdHRoaXMuc2V0VmVjdG9ycygpO1xyXG5cdH1cclxuXHJcblx0c2V0VmVjdG9ycygpIHtcclxuXHRcdHZhciBpLCBqO1xyXG5cdFx0dmFyIGxlbmd0aDEgPSB0aGlzLmltYWdlRGF0YS53aWR0aDtcclxuXHRcdHZhciBsZW5ndGgyID0gdGhpcy5pbWFnZURhdGEuaGVpZ2h0O1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGgxOyBpICs9IHRoaXMuZCkge1xyXG5cdFx0XHRmb3IgKCBqID0gMDsgaiA8IGxlbmd0aDI7IGogKz0gdGhpcy5kKSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gKChqID4+IDApICogbGVuZ3RoMSArIChpID4+IDApKSAqIDQ7XHJcblx0XHRcdFx0aWYgKHRoaXMuaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMudmVjdG9ycy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0eCA6IGkgKyB0aGlzLngsXHJcblx0XHRcdFx0XHRcdHkgOiBqICsgdGhpcy55XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGdldEJvdW5kKHgsIHkpIHtcclxuXHRcdHZhciBpbmRleCA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcclxuXHRcdGlmICh0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPiAwKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3IuY29weSh0aGlzLnZlY3RvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy52ZWN0b3JzLmxlbmd0aCldKTtcclxuXHR9XHJcblxyXG5cdGdldENvbG9yKHgsIHkpIHtcclxuXHRcdHggLT0gdGhpcy54O1xyXG5cdFx0eSAtPSB0aGlzLnk7XHJcblx0XHR2YXIgaSA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHIgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2ldLFxyXG5cdFx0XHRnIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgMV0sXHJcblx0XHRcdGIgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAyXSxcclxuXHRcdFx0YSA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDNdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImRlYWRcIikge1xyXG5cdFx0XHRpZiAodGhpcy5nZXRCb3VuZChwYXJ0aWNsZS5wLnggLSB0aGlzLngsIHBhcnRpY2xlLnAueSAtIHRoaXMueSkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gZmFsc2U7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiYm91bmRcIikge1xyXG5cdFx0XHRpZiAoIXRoaXMuZ2V0Qm91bmQocGFydGljbGUucC54IC0gdGhpcy54LCBwYXJ0aWNsZS5wLnkgLSB0aGlzLnkpKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnYubmVnYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvSW1hZ2Vab25lLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuLi9iZWhhdmlvdXIvQ3Jvc3Nab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cdFx0dGhpcy5hbmdsZSA9IDA7XHJcblx0XHR0aGlzLmNlbnRlciA9IHtcclxuXHRcdFx0eCA6IHRoaXMueCxcclxuXHRcdFx0eSA6IHRoaXMueVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyB0aGlzLnJhbmRvbSAqIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55ICsgdGhpcy5yYW5kb20gKiB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0c2V0Q2VudGVyKHgsIHkpIHtcclxuXHRcdHRoaXMuY2VudGVyLnggPSB4O1xyXG5cdFx0dGhpcy5jZW50ZXIueSA9IHk7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIGQgPSBwYXJ0aWNsZS5wLmRpc3RhbmNlVG8odGhpcy5jZW50ZXIpO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5ERUFEKSB7XHJcblx0XHRcdGlmIChkIC0gcGFydGljbGUucmFkaXVzID4gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5CT1VORCkge1xyXG5cdFx0XHRpZiAoZCArIHBhcnRpY2xlLnJhZGl1cyA+PSB0aGlzLnJhZGl1cylcclxuXHRcdFx0XHR0aGlzLmdldFN5bW1ldHJpYyhwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5DUk9TUykge1xyXG5cdFx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeSBDaXJjbGVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWMocGFydGljbGUpIHtcclxuXHRcdHZhciB0aGEyID0gcGFydGljbGUudi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KHBhcnRpY2xlKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gcGFydGljbGUudi54O1xyXG5cdFx0dmFyIG9sZHkgPSBwYXJ0aWNsZS52Lnk7XHJcblx0XHRwYXJ0aWNsZS52LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0cGFydGljbGUudi55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KHBhcnRpY2xlKSB7XHJcblx0XHRyZXR1cm4gLU1hdGguUEkgLyAyICsgTWF0aC5hdGFuMihwYXJ0aWNsZS5wLnkgLSB0aGlzLmNlbnRlci55LCBwYXJ0aWNsZS5wLnggLSB0aGlzLmNlbnRlci54KTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbHBoYSBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHJcblx0XHR0aGlzLnJlc2V0KGEsIGIsIHRoaXMubGlmZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkFscGhhXCI7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnYScgYW5kICdiJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGFcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gYlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdFx0XHR0aGlzIGJlaGF2aW91cidzIGxpZmVcclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW2Vhc2luZz1RdWFyay5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRpZiAoYiA9PSBudWxsIHx8IGIgPT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0dGhpcy5zYW1lID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hID0gVXRpbC5zZXRTcGFuVmFsdWUoYSB8fCAxKTtcclxuXHRcdHRoaXMuYiA9IFV0aWwuc2V0U3BhblZhbHVlKGIpO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgbmV3IGFscGhhIHZhbHVlIG9mIHRoZSBwYXJ0aWNsZVxyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBpbml0aWFsaXplXHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1F1YXJrLlBhcnRpY2xlfSBwYXJ0aWNsZSBBIHNpbmdsZSBRdWFyayBnZW5lcmF0ZWQgcGFydGljbGVcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBID0gdGhpcy5hLmdldFZhbHVlKCk7XHJcblx0XHRpZiAodGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQiA9IHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCID0gdGhpcy5iLmdldFZhbHVlKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtRdWFyay5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuIFx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuYWxwaGEgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCICsgKHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUEgLSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCKSAqIHRoaXMuZW5lcmd5O1xyXG5cdFx0aWYgKHBhcnRpY2xlLmFscGhhIDwgMC4wMDEpXHJcblx0XHRcdHBhcnRpY2xlLmFscGhhID0gMDtcclxuXHR9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQWxwaGEuanMiLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmFjdGlvbiBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblxyXG5cdFx0dGhpcy50YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIHx8IG5ldyBWZWN0b3IyRDtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwMDA7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSkgfHwgMTAwO1xyXG5cdFx0dGhpcy5yYWRpdXNTcSA9IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXNcclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gMDtcclxuXHRcdHRoaXMubmFtZSA9IFwiQXR0cmFjdGlvblwiO1xyXG5cdFx0XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQXR0cmFjdGlvblxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnZm9yY2UnIGFuZCAncmFkaXVzJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uVmVjdG9yMkR9IHRhcmdldFBvc2l0aW9uIHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtmb3JjZT0xMDBdXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtyYWRpdXM9MTAwMF1cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9UHJvdG9uLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldCh0YXJnZXRQb3NpdGlvbiwgZm9yY2UsIHJhZGl1cywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLnRhcmdldFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb24gfHwgbmV3IFByb3Rvbi5WZWN0b3IyRDtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwMDA7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSkgfHwgMTAwO1xyXG5cdFx0dGhpcy5yYWRpdXNTcSA9IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXNcclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gMDtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkF0dHJhY3Rpb25cclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblxyXG5cdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UuY29weSh0aGlzLnRhcmdldFBvc2l0aW9uKTtcclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLnN1YihwYXJ0aWNsZS5wKTtcclxuXHRcdHRoaXMubGVuZ3RoU3EgPSB0aGlzLmF0dHJhY3Rpb25Gb3JjZS5sZW5ndGhTcSgpO1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoU3EgPiAwLjAwMDAwNCAmJiB0aGlzLmxlbmd0aFNxIDwgdGhpcy5yYWRpdXNTcSkge1xyXG5cdFx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5ub3JtYWxpemUoKTtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UubXVsdGlwbHlTY2FsYXIoMSAtIHRoaXMubGVuZ3RoU3EgLyB0aGlzLnJhZGl1c1NxKTtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UubXVsdGlwbHlTY2FsYXIodGhpcy5mb3JjZSk7XHJcblx0XHRcdHBhcnRpY2xlLmEuYWRkKHRoaXMuYXR0cmFjdGlvbkZvcmNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9BdHRyYWN0aW9uLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbiBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGVtaXR0ZXIsIG1hc3MsIGNhbGxiYWNrLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KGVtaXR0ZXIsIG1hc3MsIGNhbGxiYWNrKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiQ29sbGlzaW9uXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5Db2xsaXNpb25cclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gdG8gbWFzc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uRW1pdHRlcn0gXHRbZW1pdHRlcj1udWxsXSBcdFx0dGhlIGF0dHJhY3Rpb24gcG9pbnQgY29vcmRpbmF0ZXNcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFx0XHRbbWFzcz10cnVlXVx0XHRcdFxyXG5cdCAqIEBwYXJhbSB7Q2FsbGJhY2t9XHQgXHRbY2FsbGJhY2s9bnVsbF1cdFx0dGhlIGNhbGxiYWNrIGFmdGVyIHRoZSBjb2xsaXNpb25cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0W2xpZmU9SW5maW5pdHldIFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9UHJvdG9uLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChlbWl0dGVyLCBtYXNzLCBjYWxsYmFjaywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyIHx8IG51bGw7XHJcblx0XHR0aGlzLm1hc3MgPSBtYXNzIHx8IHRydWU7XHJcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcclxuXHRcdHRoaXMuY29sbGlzaW9uUG9vbCA9IFtdO1xyXG5cdFx0dGhpcy5kZWx0YSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sbGlzaW9uXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRsZXQgbmV3UG9vbCA9IHRoaXMuZW1pdHRlci5wYXJ0aWNsZXMuc2xpY2UoaW5kZXgpO1xyXG5cdFx0bGV0IG90aGVyUGFydGljbGU7XHJcblx0XHRsZXQgbGVuZ3RoU3E7XHJcblx0XHRsZXQgb3ZlcmxhcDtcclxuXHRcdGxldCBhdmVyYWdlTWFzczEsIGF2ZXJhZ2VNYXNzMjtcclxuXHRcdGxldCBsZW5ndGggPSBuZXdQb29sLmxlbmd0aDtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0b3RoZXJQYXJ0aWNsZSA9IG5ld1Bvb2xbaV07XHJcblx0XHRcdGlmIChvdGhlclBhcnRpY2xlICE9PSBwYXJ0aWNsZSkge1xyXG5cdFx0XHRcdHRoaXMuZGVsdGEuY29weShvdGhlclBhcnRpY2xlLnApO1xyXG5cdFx0XHRcdHRoaXMuZGVsdGEuc3ViKHBhcnRpY2xlLnApO1xyXG5cdFx0XHRcdGxlbmd0aFNxID0gdGhpcy5kZWx0YS5sZW5ndGhTcSgpO1xyXG5cdFx0XHRcdGNvbnN0IGRpc3RhbmNlID0gcGFydGljbGUucmFkaXVzICsgb3RoZXJQYXJ0aWNsZS5yYWRpdXM7XHJcblxyXG5cdFx0XHRcdGlmIChsZW5ndGhTcSA8PSBkaXN0YW5jZSAqIGRpc3RhbmNlKSB7XHJcblx0XHRcdFx0XHRvdmVybGFwID0gZGlzdGFuY2UgLSBNYXRoLnNxcnQobGVuZ3RoU3EpO1xyXG5cdFx0XHRcdFx0b3ZlcmxhcCArPSAwLjU7XHJcblx0XHRcdFx0XHRjb25zdCB0b3RhbE1hc3MgPSBwYXJ0aWNsZS5tYXNzICsgb3RoZXJQYXJ0aWNsZS5tYXNzO1xyXG5cdFx0XHRcdFx0YXZlcmFnZU1hc3MxID0gdGhpcy5tYXNzID8gb3RoZXJQYXJ0aWNsZS5tYXNzIC8gdG90YWxNYXNzIDogMC41O1xyXG5cdFx0XHRcdFx0YXZlcmFnZU1hc3MyID0gdGhpcy5tYXNzID8gcGFydGljbGUubWFzcyAvIHRvdGFsTWFzcyA6IDAuNTtcclxuXHRcdFx0XHRcdHBhcnRpY2xlLnAuYWRkKHRoaXMuZGVsdGEuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihvdmVybGFwICogLWF2ZXJhZ2VNYXNzMSkpO1xyXG5cdFx0XHRcdFx0b3RoZXJQYXJ0aWNsZS5wLmFkZCh0aGlzLmRlbHRhLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKG92ZXJsYXAgKiBhdmVyYWdlTWFzczIpKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNhbGxiYWNrKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxsYmFjayhwYXJ0aWNsZSwgb3RoZXJQYXJ0aWNsZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9Db2xsaXNpb24uanMiLCJpbXBvcnQgQXR0cmFjdGlvbiBmcm9tICcuL0F0dHJhY3Rpb24nO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXB1bHNpb24gZXh0ZW5kcyBBdHRyYWN0aW9uIHtcclxuXHJcblx0Y29uc3RydWN0b3IodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmZvcmNlICo9IC0xO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJSZXB1bHNpb25cIjtcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIucmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmZvcmNlICo9IC0xO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvUmVwdWxzaW9uLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmNlIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZngsIGZ5LCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVGb3JjZShuZXcgVmVjdG9yMkQoZngsIGZ5KSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkZvcmNlXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGZ4LCBmeSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVGb3JjZShuZXcgVmVjdG9yMkQoZngsIGZ5KSk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmZvcmNlKTtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9Gb3JjZS5qcyIsImltcG9ydCBGb3JjZSBmcm9tICcuL0ZvcmNlJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jhdml0eSBleHRlbmRzIEZvcmNlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcigwLCBnLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5uYW1lID0gJ0dyYXZpdHknO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXI7XHJcblx0fVxyXG5cclxuXHRyZXNldChnLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyLnJlc2V0KDAsIGcsIGxpZmUsIGVhc2luZyk7XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmZvcmNlKTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0dyYXZpdHkuanMiLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Jhdml0eVdlbGwgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihjZW50ZXJQb2ludCwgZm9yY2UsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMuZGlzdGFuY2VWZWMgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdHRoaXMuY2VudGVyUG9pbnQgPSBVdGlsLmluaXRWYWx1ZShjZW50ZXJQb2ludCwgbmV3IFZlY3RvcjJEKTtcclxuXHRcdHRoaXMuZm9yY2UgPSBVdGlsLmluaXRWYWx1ZSh0aGlzLm5vcm1hbGl6ZVZhbHVlKGZvcmNlKSwgMTAwKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiR3Jhdml0eVdlbGxcIjtcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblxyXG5cdHJlc2V0KGNlbnRlclBvaW50LCBmb3JjZSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLmRpc3RhbmNlVmVjID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHR0aGlzLmNlbnRlclBvaW50ID0gVXRpbC5pbml0VmFsdWUoY2VudGVyUG9pbnQsIG5ldyBWZWN0b3IyRCk7XHJcblx0XHR0aGlzLmZvcmNlID0gVXRpbC5pbml0VmFsdWUodGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSksIDEwMCk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHR0aGlzLmRpc3RhbmNlVmVjLnNldCh0aGlzLmNlbnRlclBvaW50LnggLSBwYXJ0aWNsZS5wLngsIHRoaXMuY2VudGVyUG9pbnQueSAtIHBhcnRpY2xlLnAueSk7XHJcblx0XHRjb25zdCBkaXN0YW5jZVNxID0gdGhpcy5kaXN0YW5jZVZlYy5sZW5ndGhTcSgpO1xyXG5cdFx0aWYgKGRpc3RhbmNlU3EgIT0gMCkge1xyXG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2VWZWMubGVuZ3RoKCk7XHJcblx0XHRcdGNvbnN0IGZhY3RvciA9ICh0aGlzLmZvcmNlICogdGltZSApIC8gKGRpc3RhbmNlU3EgKiBkaXN0YW5jZSApO1xyXG5cdFx0XHRwYXJ0aWNsZS52LnggKz0gZmFjdG9yICogdGhpcy5kaXN0YW5jZVZlYy54O1xyXG5cdFx0XHRwYXJ0aWNsZS52LnkgKz0gZmFjdG9yICogdGhpcy5kaXN0YW5jZVZlYy55O1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvR3Jhdml0eVdlbGwuanMiLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgeyByYW5kb21BVG9CIH0gZnJvbSAnLi4vbWF0aC9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tRHJpZnQgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkcmlmdFgsIGRyaWZ0WSwgZGVsYXksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoZHJpZnRYLCBkcmlmdFksIGRlbGF5KTtcclxuXHRcdHRoaXMudGltZSA9IDA7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlJhbmRvbURyaWZ0XCI7XHJcblx0XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblxyXG5cdHJlc2V0KGRyaWZ0WCwgZHJpZnRZLCBkZWxheSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLnBhbkZvY2UgPSBuZXcgVmVjdG9yMkQoZHJpZnRYLCBkcmlmdFkpO1xyXG5cdFx0dGhpcy5wYW5Gb2NlID0gdGhpcy5ub3JtYWxpemVGb3JjZSh0aGlzLnBhbkZvY2UpO1xyXG5cdFx0dGhpcy5kZWxheSA9IGRlbGF5O1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRSYW5kb21EcmlmdC5fc3VwZXJfLnByb3RvdHlwZS5yZXNldC5jYWxsKHRoaXMsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHR0aGlzLnRpbWUgKz0gdGltZTtcclxuXHRcdGlmICh0aGlzLnRpbWUgPj0gdGhpcy5kZWxheSkge1x0XHRcdFxyXG5cdFx0XHRwYXJ0aWNsZS5hLmFkZFhZKHJhbmRvbUFUb0IoLXRoaXMucGFuRm9jZS54LCB0aGlzLnBhbkZvY2UueCksIHJhbmRvbUFUb0IoLXRoaXMucGFuRm9jZS55LCB0aGlzLnBhbkZvY2UueSkpO1xyXG5cdFx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdFx0fTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL1JhbmRvbURyaWZ0LmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdGF0ZSBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdHN0YXRpYyBTVFlMRVMgPSB7XHJcblx0XHRUTzogMSA8PCAwLFxyXG5cdFx0RlJPTTogMSA8PCAxXHJcblx0fTtcclxuXHJcblx0c3RhdGljIFRZUEUgPSB7XHJcblx0XHRWRUxPQ0lUWTogMSA8PCAwXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgc3R5bGUsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoYSwgYiwgc3R5bGUpO1xyXG5cdFx0dGhpcy5uYW1lID0gJ1JvdGF0ZSc7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGEsIGIsIHN0eWxlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYSA9IFV0aWwuc2V0U3BhblZhbHVlKGEgfHwgUm90YXRlLlRZUEUuVkVMT0NJVFkpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYiB8fCAwKTtcclxuXHRcdHRoaXMuc3R5bGUgPSBzdHlsZSB8fCBSb3RhdGUuU1RZTEVTLlRPO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUucm90YXRpb24gPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICghdGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0aWYgKCF0aGlzLnNhbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMuc3R5bGUgPT0gUm90YXRlLlNUWUxFUy5UTykge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnJvdGF0aW9uICs9IHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIgKyAocGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQSAtIHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIpICogdGhpcy5lbmVyZ3lcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiArPSBwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25CO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuYS5hID09IFJvdGF0ZS5UWVBFLlZFTE9DSVRZKSB7XHJcblx0XHRcdC8vYmV0YS4uLlxyXG5cdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiA9IHBhcnRpY2xlLmdldERpcmVjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvUm90YXRlLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChhLCBiKTtcclxuXHRcdHRoaXMubmFtZSA9ICdTY2FsZSc7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXI7XHJcblx0fVxyXG5cclxuXHRyZXNldChhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hID0gVXRpbC5zZXRTcGFuVmFsdWUoVXRpbC5pbml0VmFsdWUoYSwgMSkpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYik7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1b2VyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBID0gdGhpcy5hLmdldFZhbHVlKCk7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ub2xkUmFkaXVzID0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0aWYgKHRoaXMuc2FtZSl7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUIgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLnNjYWxlID0gcGFydGljbGUudHJhbnNmb3JtLnNjYWxlQiArIChwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBIC0gcGFydGljbGUudHJhbnNmb3JtLnNjYWxlQikgKiB0aGlzLmVuZXJneTtcclxuXHRcdGlmIChwYXJ0aWNsZS5zY2FsZSA8IDAuMDAwMSl7XHJcblx0XHRcdHBhcnRpY2xlLnNjYWxlID0gMDtcclxuXHRcdH1cclxuXHRcdHBhcnRpY2xlLnJhZGl1cyA9IHBhcnRpY2xlLnRyYW5zZm9ybS5vbGRSYWRpdXMgKiBwYXJ0aWNsZS5zY2FsZTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL1NjYWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==