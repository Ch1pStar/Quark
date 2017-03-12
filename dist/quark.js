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
	
	    _this.maxParticles = _this.minParticles = 50000;
	    _this.active = new Array(_this.maxParticles).fill(false);
	    _this.particles = new Array(_this.maxParticles);
	    _this.activeCount = 0;
	
	    _this.update = _this.update;
	    _this.emitting = _this.emitting;
	    _this.createParticle = _this.createParticle;
	    _this.integrate = _this.integrate;
	    _this.activateParticle = _this.activateParticle;
	    _this.updateParticle = _this.updateParticle;
	    return _this;
	  }
	
	  /**
	   * create single particle;
	   * 
	   * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
	   * @method removeAllParticles
	   */
	
	
	  _createClass(Emitter, [{
	    key: 'createParticle',
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
	
	      if (this._tailParticle === null) {
	        this.removeInitializers();
	        this.removeAllBehaviours();
	
	        if (this.parent) this.parent.removeEmitter(this);
	      }
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
	
	var _MathUtils2 = _interopRequireDefault(_MathUtils);
	
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
					particle.a.addXY((0, _MathUtils2.default)(-this.panFoce.x, this.panFoce.x), (0, _MathUtils2.default)(-this.panFoce.y, this.panFoce.y));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ODk1ZjRmNjE5OTY2NzI5ZGM0MCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvU3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21pbmktc2lnbmFscy9saWIvbWluaS1zaWduYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1BvbGFyMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9SZWN0Wm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9ab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQ3Jvc3Nab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQmVoYXZpb3VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvUG9pbnRab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0xpbmVab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0ltYWdlWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9BdHRyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQ29sbGlzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvUmVwdWxzaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvRm9yY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9HcmF2aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvR3Jhdml0eVdlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9SYW5kb21EcmlmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL1JvdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL1NjYWxlLmpzIl0sIm5hbWVzIjpbImdldFNwYW4iLCJhIiwiYiIsImNlbnRlciIsIlNwYW4iLCJSZWN0Wm9uZSIsIlBvaW50Wm9uZSIsIkxpbmVab25lIiwiSW1hZ2Vab25lIiwiQ2lyY2xlWm9uZSIsIkFscGhhIiwiQXR0cmFjdGlvbiIsIkNvbGxpc2lvbiIsIlJlcHVsc2lvbiIsIkNyb3NzWm9uZSIsIkZvcmNlIiwiR3Jhdml0eSIsIkdyYXZpdHlXZWxsIiwiUmFuZG9tRHJpZnQiLCJSb3RhdGUiLCJTY2FsZSIsImdsb2JhbCIsIlF1YXJrIiwiZXhwb3J0cyIsIkVtaXR0ZXIiLCJQT09MX01BWCIsIlRJTUVfU1RFUCIsIlVTRV9DTE9DSyIsIk1FQVNVUkUiLCJFVUxFUiIsIlJLMiIsIlJLNCIsIlZFUkxFVCIsIlBBUlRJQ0xFX0NSRUFURUQiLCJQQVJUSUNMRV9VUERBVEUiLCJQQVJUSUNMRV9TTEVFUCIsIlBBUlRJQ0xFX0RFQUQiLCJFTUlUVEVSX0FEREVEIiwiRU1JVFRFUl9SRU1PVkVEIiwiaW5pdGlhbGl6ZXMiLCJiZWhhdmlvdXJzIiwiZW1pdFRpbWUiLCJlbWl0VG90YWxUaW1lcyIsImRhbXBpbmciLCJiaW5kRW1pdHRlciIsInJhdGUiLCJpbnRlZ3JhdG9yIiwibWF4UGFydGljbGVzIiwibWluUGFydGljbGVzIiwiYWN0aXZlIiwiQXJyYXkiLCJmaWxsIiwicGFydGljbGVzIiwiYWN0aXZlQ291bnQiLCJ1cGRhdGUiLCJlbWl0dGluZyIsImNyZWF0ZVBhcnRpY2xlIiwiaW50ZWdyYXRlIiwiYWN0aXZhdGVQYXJ0aWNsZSIsInVwZGF0ZVBhcnRpY2xlIiwidGltZSIsImkiLCJuIiwibGVuZ3RoIiwiaW5kZXgiLCJwYXJ0aWNsZSIsInJlc2V0IiwiYWRkQmVoYXZpb3VycyIsInBhcnRpY2xlQ3JlYXRlZCIsImRpc3BhdGNoIiwicmVzIiwicGFydGljbGVVcGRhdGUiLCJwYXJ0aWNsZURlYWQiLCJnZXRWYWx1ZSIsImxpZmUiLCJJbmZpbml0eSIsImlzTmFOIiwiaW5pdCIsIl90YWlsUGFydGljbGUiLCJfcG9vbEhlYWQiLCJwT2JqIiwiaW5pdEFsbCIsImFyZ3VtZW50cyIsInB1c2giLCJpbml0aWFsaXplciIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcmVudHMiLCJiZWhhdmlvdXIiLCJhZ2UiLCJkZWFkIiwiZGVzdHJveSIsInJlbW92ZUluaXRpYWxpemVycyIsInJlbW92ZUFsbEJlaGF2aW91cnMiLCJwYXJlbnQiLCJyZW1vdmVFbWl0dGVyIiwidWlkIiwiUGFydGljbGUiLCJpZCIsInNwcml0ZSIsIk1hdGgiLCJhdGFuMiIsInYiLCJ4IiwieSIsIlBJIiwiZW5lcmd5Iiwic2xlZXAiLCJ0YXJnZXQiLCJtYXNzIiwicmFkaXVzIiwiYWxwaGEiLCJzY2FsZSIsInJvdGF0aW9uIiwiY29sb3IiLCJlYXNpbmciLCJ2YWwiLCJ0cmFuc2Zvcm0iLCJwIiwib2xkIiwic2V0IiwicmdiIiwiciIsImciLCJhcHBseUJlaGF2aW91ciIsIm1heCIsImluaXRpYWxpemUiLCJhZGRCZWhhdmlvdXIiLCJWZWN0b3IyRCIsInZhbHVlIiwiRXJyb3IiLCJ3IiwidW5kZWZpbmVkIiwiYWRkVmVjdG9ycyIsInMiLCJzdWJWZWN0b3JzIiwibWluIiwibXVsdGlwbHlTY2FsYXIiLCJzcXJ0IiwiZGl2aWRlU2NhbGFyIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJ0aGEiLCJjb3MiLCJzaW4iLCJkeCIsImR5IiwibCIsIm9sZExlbmd0aCIsIlJhdGUiLCJudW1wYW4iLCJ0aW1lcGFuIiwibnVtUGFuIiwidGltZVBhbiIsInNldFNwYW5WYWx1ZSIsInN0YXJ0VGltZSIsIm5leHRUaW1lIiwiaW5pdFZhbHVlIiwiZGVmYXVsdHMiLCJnZXRWZWN0b3IyRCIsInBvc3Rpb25PclgiLCJ2ZWN0b3IyZCIsImp1ZGdlVmVjdG9yMkQiLCJwT0JKIiwicmVzdWx0Iiwic2V0VmVjdG9yMkRCeU9iamVjdCIsInZ4IiwidnkiLCJheCIsImF5IiwiYyIsImNvbnN0cnVjdG9yIiwiZ2V0U3BhblZhbHVlIiwicGFuIiwiaGV4VG9SR0IiLCJoIiwiaGV4MTYiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJwYXJzZUludCIsInJnYlRvSGV4IiwicmJnIiwiaXNBcnJheSIsIklOVCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tQVRvQiIsInJhbmRvbUZsb2F0aW5nIiwiZGVncmVlVHJhbnNmb3JtIiwiZiIsIk51bWVyaWNhbEludGVncmF0aW9uIiwidHlwZSIsImV1bGVySW50ZWdyYXRlIiwiY29weSIsImFkZCIsImNsZWFyIiwiZW1pdHRlciIsInJvdGF0ZSIsIkluaXRpYWxpemUiLCJWZWxvY2l0eSIsIkxpZmUiLCJNYXNzIiwiUmFkaXVzIiwiUG9zaXRpb24iLCJycGFuIiwidGhhcGFuIiwiclBhbiIsInRoYVBhbiIsIlBPTEFSIiwiUCIsInJQYW5WYWwiLCJub3JtYWxpemVkUEkiLCJ2ciIsInRoYVBhbk5vcm0iLCJwb2xhcjJkIiwibm9ybWFsaXplVmVsb2NpdHkiLCJnZXRYIiwiZ2V0WSIsIlBvbGFyMkQiLCJhYnMiLCJsaWZlUGFuIiwibWFzc1BhbiIsIm9sZFJhZGl1cyIsInpvbmUiLCJnZXRQb3NpdGlvbiIsInZlY3RvciIsIndpZHRoIiwiaGVpZ2h0IiwiY3Jvc3NUeXBlIiwiQ1JPU1NfVFlQRVMiLCJERUFEIiwiQk9VTkQiLCJDUk9TUyIsIlpvbmUiLCJhbGVydCIsIm5hbWUiLCJjcm9zc2luZyIsIkJFSEFWSU9VUl9JRF9CQVNFIiwiQmVoYXZpb3VyIiwiZm9yY2UiLCJyZW1vdmVCZWhhdmlvdXIiLCJnZXRFYXNpbmdCeU5hbWUiLCJlYXNlTGluZWFyIiwiZWFzZUluUXVhZCIsInBvdyIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluU2luZSIsImVhc2VPdXRTaW5lIiwiZWFzZUluT3V0U2luZSIsImVhc2VJbkV4cG8iLCJlYXNlT3V0RXhwbyIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5DaXJjIiwiZWFzZU91dENpcmMiLCJlYXNlSW5PdXRDaXJjIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsIngxIiwieTEiLCJ4MiIsInkyIiwiZGlyZWN0aW9uIiwibWlueCIsIm1pbnkiLCJtYXh4IiwibWF4eSIsImRvdCIsInh4eXkiLCJncmFkaWVudCIsImdldEdyYWRpZW50IiwiZ2V0TGVuZ3RoIiwic2VsZiIsImdldFJhbmdlIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RGlzdGFuY2UiLCJnZXRTeW1tZXRyaWMiLCJBIiwiQiIsIkMiLCJEIiwidGhhMiIsInRoYTEiLCJvbGR4Iiwib2xkeSIsImZ1biIsImFuZ2xlIiwiaW1hZ2VEYXRhIiwiZCIsInZlY3RvcnMiLCJzZXRWZWN0b3JzIiwiaiIsImxlbmd0aDEiLCJsZW5ndGgyIiwiZGF0YSIsImdldEJvdW5kIiwibmVnYXRlIiwiZGlzdGFuY2VUbyIsInNhbWUiLCJhbHBoYUEiLCJhbHBoYUIiLCJ0YXJnZXRQb3NpdGlvbiIsIm5vcm1hbGl6ZVZhbHVlIiwicmFkaXVzU3EiLCJhdHRyYWN0aW9uRm9yY2UiLCJsZW5ndGhTcSIsIlByb3RvbiIsInN1YiIsIm5vcm1hbGl6ZSIsImNhbGxiYWNrIiwiY29sbGlzaW9uUG9vbCIsImRlbHRhIiwibmV3UG9vbCIsInNsaWNlIiwib3RoZXJQYXJ0aWNsZSIsIm92ZXJsYXAiLCJhdmVyYWdlTWFzczEiLCJhdmVyYWdlTWFzczIiLCJkaXN0YW5jZSIsInRvdGFsTWFzcyIsImNsb25lIiwiZngiLCJmeSIsIm5vcm1hbGl6ZUZvcmNlIiwiY2VudGVyUG9pbnQiLCJkaXN0YW5jZVZlYyIsImRpc3RhbmNlU3EiLCJmYWN0b3IiLCJkcmlmdFgiLCJkcmlmdFkiLCJkZWxheSIsInBhbkZvY2UiLCJfc3VwZXJfIiwicHJvdG90eXBlIiwiY2FsbCIsImFkZFhZIiwic3R5bGUiLCJUWVBFIiwiVkVMT0NJVFkiLCJTVFlMRVMiLCJUTyIsInJvdGF0aW9uQSIsInJvdGF0aW9uQiIsIkZST00iLCJzdW9lciIsInNjYWxlQSIsInNjYWxlQiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNE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RSxRQUFQLEVBQTVCO0FBQ0E7QUFDRDs7O2tDQUVjUixRLEVBQVVMLEksRUFBTUksSyxFQUFPO0FBQ3JDLGlIQUFxQkMsUUFBckIsRUFBK0JMLElBQS9CLEVBQXFDSSxLQUFyQztBQUNBQyxhQUFTZ0QsS0FBVCxHQUFpQmhELFNBQVNxRCxTQUFULENBQW1CMk8sTUFBbkIsR0FBNEIsQ0FBQ2hTLFNBQVNxRCxTQUFULENBQW1CME8sTUFBbkIsR0FBNEIvUixTQUFTcUQsU0FBVCxDQUFtQjJPLE1BQWhELElBQTBELEtBQUt0UCxNQUE1RztBQUNBLFFBQUkxQyxTQUFTZ0QsS0FBVCxHQUFpQixNQUFyQixFQUE0QjtBQUMzQmhELGNBQVNnRCxLQUFULEdBQWlCLENBQWpCO0FBQ0E7QUFDRGhELGFBQVM4QyxNQUFULEdBQWtCOUMsU0FBU3FELFNBQVQsQ0FBbUJ3RyxTQUFuQixHQUErQjdKLFNBQVNnRCxLQUExRDtBQUNBOzs7Ozs7bUJBeENtQjdGLEsiLCJmaWxlIjoicXVhcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU4OTVmNGY2MTk5NjY3MjlkYzQwIiwiZXhwb3J0ICogZnJvbSAnLi9lbWl0dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5pdGlhbGl6ZSc7XG5pbXBvcnQgU3BhbiBmcm9tICcuL21hdGgvU3Bhbic7XG5cbmltcG9ydCBSZWN0Wm9uZSBmcm9tICcuL3pvbmUvUmVjdFpvbmUnO1xuaW1wb3J0IFBvaW50Wm9uZSBmcm9tICcuL3pvbmUvUG9pbnRab25lJztcbmltcG9ydCBMaW5lWm9uZSBmcm9tICcuL3pvbmUvTGluZVpvbmUnO1xuaW1wb3J0IEltYWdlWm9uZSBmcm9tICcuL3pvbmUvSW1hZ2Vab25lJztcbmltcG9ydCBDaXJjbGVab25lIGZyb20gJy4vem9uZS9DaXJjbGVab25lJztcblxuaW1wb3J0IEFscGhhIGZyb20gJy4vYmVoYXZpb3VyL0FscGhhJztcbmltcG9ydCBBdHRyYWN0aW9uIGZyb20gJy4vYmVoYXZpb3VyL0F0dHJhY3Rpb24nO1xuaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL2JlaGF2aW91ci9Db2xsaXNpb24nO1xuaW1wb3J0IFJlcHVsc2lvbiBmcm9tICcuL2JlaGF2aW91ci9SZXB1bHNpb24nO1xuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xuaW1wb3J0IEZvcmNlIGZyb20gJy4vYmVoYXZpb3VyL0ZvcmNlJztcbmltcG9ydCBHcmF2aXR5IGZyb20gJy4vYmVoYXZpb3VyL0dyYXZpdHknO1xuaW1wb3J0IEdyYXZpdHlXZWxsIGZyb20gJy4vYmVoYXZpb3VyL0dyYXZpdHlXZWxsJztcbmltcG9ydCBSYW5kb21EcmlmdCBmcm9tICcuL2JlaGF2aW91ci9SYW5kb21EcmlmdCc7XG5pbXBvcnQgUm90YXRlIGZyb20gJy4vYmVoYXZpb3VyL1JvdGF0ZSc7XG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9iZWhhdmlvdXIvU2NhbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BhbihhLCBiLCBjZW50ZXIpIHtcbiAgICByZXR1cm4gbmV3IFNwYW4oYSwgYiwgY2VudGVyKTtcbn1cblxuZXhwb3J0IHsgU3BhbiwgUmVjdFpvbmUsIFBvaW50Wm9uZSwgTGluZVpvbmUsIEltYWdlWm9uZSwgQ2lyY2xlWm9uZSB9O1xuXG5leHBvcnQgeyBBbHBoYSwgQXR0cmFjdGlvbiwgQ29sbGlzaW9uLCBSZXB1bHNpb24sIENyb3NzWm9uZSwgRm9yY2UsIEdyYXZpdHksIEdyYXZpdHlXZWxsLCBSYW5kb21EcmlmdCwgUm90YXRlLCBTY2FsZSB9O1xuXG5nbG9iYWwuUXVhcmsgPSBleHBvcnRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImV4cG9ydCAqIGZyb20gJy4vY29uc3QnO1xuXG5pbXBvcnQgRW1pdHRlciBmcm9tICcuL0VtaXR0ZXInO1xuXG5leHBvcnQge0VtaXR0ZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbWl0dGVyL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IFBPT0xfTUFYID0gMTAwMDtcbmV4cG9ydCBjb25zdCBUSU1FX1NURVAgPSA2MDtcbmV4cG9ydCBjb25zdCBVU0VfQ0xPQ0sgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBNRUFTVVJFID0gMTAwO1xuZXhwb3J0IGNvbnN0IEVVTEVSID0gJ2V1bGVyJztcbmV4cG9ydCBjb25zdCBSSzIgPSAncnVuZ2Uta3V0dGEyJztcbmV4cG9ydCBjb25zdCBSSzQgPSAncnVuZ2Uta3V0dGE0JztcbmV4cG9ydCBjb25zdCBWRVJMRVQgPSAndmVybGV0JztcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9DUkVBVEVEID0gJ3BhcnRpbGNsZUNyZWF0ZWQnO1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX1VQREFURSA9ICdwYXJ0aWxjbGVVcGRhdGUnO1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX1NMRUVQID0gJ3BhcnRpY2xlU2xlZXAnO1xuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX0RFQUQgPSAncGFydGlsY2xlRGVhZCc7XG5leHBvcnQgY29uc3QgRU1JVFRFUl9BRERFRCA9ICdlbWl0dGVyQWRkZWQnO1xuZXhwb3J0IGNvbnN0IEVNSVRURVJfUkVNT1ZFRCA9ICdlbWl0dGVyUmVtb3ZlZCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCIvLyBpbXBvcnQgUGFydGljbGUgZnJvbSAnLi4vY29yZS9QYXJ0aWNsZSc7XHJcbmltcG9ydCBQYXJ0aWNsZSBmcm9tICcuLi9jb3JlL1BhcnRpY2xlJztcclxuaW1wb3J0IFJhdGUgZnJvbSAnLi4vaW5pdGlhbGl6ZS9SYXRlJztcclxuaW1wb3J0IE51bWVyaWNhbEludGVncmF0aW9uIGZyb20gJy4uL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24nO1xyXG5pbXBvcnQgaW5pdGlhbGl6ZUZuIGZyb20gJy4uL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwnO1xyXG5pbXBvcnQgTWluaVNpZ25hbCBmcm9tICdtaW5pLXNpZ25hbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1pdHRlciBleHRlbmRzIFBhcnRpY2xle1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemVzID0gW107XHJcbiAgICB0aGlzLmJlaGF2aW91cnMgPSBbXTtcclxuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZnJpY3Rpb24gY29lZmZpY2llbnQgZm9yIGFsbCBwYXJ0aWNsZSBlbWl0IGJ5IFRoaXM7XHJcbiAgICAgKiBAcHJvcGVydHkgZGFtcGluZ1xyXG4gICAgICogQHR5cGUge051bWJlcn1cclxuICAgICAqIEBkZWZhdWx0IDAuMDA2XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGFtcGluZyA9IC4wMDY7XHJcbiAgICAvKipcclxuICAgICAqIElmIGJpbmRFbWl0dGVyIHRoZSBwYXJ0aWNsZXMgY2FuIGJpbmQgdGhpcyBlbWl0dGVyJ3MgcHJvcGVydHk7XHJcbiAgICAgKiBAcHJvcGVydHkgYmluZEVtaXR0ZXJcclxuICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAgICovXHJcbiAgICB0aGlzLmJpbmRFbWl0dGVyID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBwYXJ0aWNsZXMgcGVyIHNlY29uZCBlbWl0IChhIFtwYXJ0aWNsZV0vYiBbc10pO1xyXG4gICAgICogQHByb3BlcnR5IHJhdGVcclxuICAgICAqIEB0eXBlIHtRdWFyay5SYXRlfVxyXG4gICAgICogQGRlZmF1bHQgUXVhcmsuUmF0ZSgxLCAuMSlcclxuICAgICAqL1xyXG4gICAgdGhpcy5yYXRlID0gbmV3IFJhdGUoMSwgLjEpO1xyXG5cclxuICAgIHRoaXMuaW50ZWdyYXRvciA9IG5ldyBOdW1lcmljYWxJbnRlZ3JhdGlvbigpO1xyXG5cclxuICAgIHRoaXMubWF4UGFydGljbGVzID0gdGhpcy5taW5QYXJ0aWNsZXMgPSA1MDAwMDtcclxuICAgIHRoaXMuYWN0aXZlID0gbmV3IEFycmF5KHRoaXMubWF4UGFydGljbGVzKS5maWxsKGZhbHNlKTtcclxuICAgIHRoaXMucGFydGljbGVzID0gbmV3IEFycmF5KHRoaXMubWF4UGFydGljbGVzKTtcclxuICAgIHRoaXMuYWN0aXZlQ291bnQgPSAwO1xyXG5cclxuXHJcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlO1xyXG4gICAgdGhpcy5lbWl0dGluZyA9IHRoaXMuZW1pdHRpbmc7XHJcbiAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlID0gdGhpcy5jcmVhdGVQYXJ0aWNsZTtcclxuICAgIHRoaXMuaW50ZWdyYXRlID0gdGhpcy5pbnRlZ3JhdGU7XHJcbiAgICB0aGlzLmFjdGl2YXRlUGFydGljbGUgPSB0aGlzLmFjdGl2YXRlUGFydGljbGU7XHJcbiAgICB0aGlzLnVwZGF0ZVBhcnRpY2xlID0gdGhpcy51cGRhdGVQYXJ0aWNsZTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBjcmVhdGUgc2luZ2xlIHBhcnRpY2xlO1xyXG4gICAqIFxyXG4gICAqIGNhbiB1c2UgZW1pdCh7eDoxMH0sbmV3IEdyYXZpdHkoMTApLHsncGFydGljbGVVcGRhdGUnLGZ1bn0pIG9yIGVtaXQoW3t4OjEwfSxuZXcgSW5pdGlhbGl6ZV0sbmV3IEdyYXZpdHkoMTApLHsncGFydGljbGVVcGRhdGUnLGZ1bn0pXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcclxuICAgKi9cclxuICBjcmVhdGVQYXJ0aWNsZSh0aW1lKSB7XHJcbiAgICBsZXQgYWN0aXZlQ291bnQgPSB0aGlzLmFjdGl2ZUNvdW50O1xyXG4gICAgaWYoYWN0aXZlQ291bnQgPT09IHRoaXMubWF4UGFydGljbGVzKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmU7XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGFjdGl2ZS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgaWYgKCFhY3RpdmVbaV0pIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlUGFydGljbGUoaSwgdGltZSk7XHJcbiAgICAgICAgYWN0aXZlW2ldID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNvdW50ID0gYWN0aXZlQ291bnQgKyAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZVBhcnRpY2xlKGluZGV4LCB0aW1lKXtcclxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzO1xyXG4gICAgbGV0IHBhcnRpY2xlID0gcGFydGljbGVzW2luZGV4XTtcclxuXHJcbiAgICBpZighcGFydGljbGUpe1xyXG4gICAgICBwYXJ0aWNsZXNbaW5kZXhdID0gcGFydGljbGUgPSBuZXcgUGFydGljbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5pdGlhbGl6ZXMgPSB0aGlzLmluaXRpYWxpemVzO1xyXG4gICAgbGV0IGJlaGF2aW91cnMgPSB0aGlzLmJlaGF2aW91cnM7XHJcblxyXG4gICAgcGFydGljbGUucmVzZXQoKTtcclxuICAgIGluaXRpYWxpemVGbih0aGlzLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZXMpO1xyXG4gICAgcGFydGljbGUuYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKTtcclxuICAgIHBhcnRpY2xlLnVwZGF0ZShpbmRleCwgdGltZSk7XHJcblxyXG4gICAgdGhpcy5wYXJ0aWNsZUNyZWF0ZWQuZGlzcGF0Y2gocGFydGljbGUpO1xyXG5cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhcnRpY2xlKHBhcnRpY2xlLCBpbmRleCwgdGltZSwgZGFtcGluZyl7XHJcbiAgICBjb25zdCByZXMgPSBwYXJ0aWNsZS51cGRhdGUoaW5kZXgsIHRpbWUpO1xyXG5cclxuICAgIHRoaXMuaW50ZWdyYXRvci5pbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpO1xyXG5cclxuICAgIGlmKHJlcyl7XHJcbiAgICAgIHRoaXMucGFydGljbGVVcGRhdGUuZGlzcGF0Y2gocGFydGljbGUpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMucGFydGljbGVEZWFkLmRpc3BhdGNoKHBhcnRpY2xlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBpbnRlZ3JhdGUodGltZSkge1xyXG4gICAgY29uc3QgZGFtcGluZyA9IDEgLSB0aGlzLmRhbXBpbmc7XHJcbiAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHRoaXMsIHRpbWUsIGRhbXBpbmcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZTtcclxuICAgIGxldCBhY3RpdmVDb3VudCA9IHRoaXMuYWN0aXZlQ291bnQ7XHJcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGFjdGl2ZS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgaWYgKGFjdGl2ZVtpXSAmJiAhdGhpcy51cGRhdGVQYXJ0aWNsZShwYXJ0aWNsZXNbaV0sIGksIHRpbWUsIGRhbXBpbmcpKSB7XHJcbiAgICAgICAgYWN0aXZlW2ldID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aXZlQ291bnQtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY3RpdmVDb3VudCA9IGFjdGl2ZUNvdW50O1xyXG5cclxuICB9XHJcblxyXG4gIGVtaXR0aW5nKHRpbWUpIHtcclxuICAgIHRoaXMuZW1pdFRpbWUgKz0gdGltZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucmF0ZS5nZXRWYWx1ZSh0aW1lKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlUGFydGljbGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWl0KGVtaXRUaW1lLCBsaWZlKSB7XHJcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSBlbWl0VGltZSB8fCBJbmZpbml0eTtcclxuXHJcbiAgICBpZighaXNOYU4obGlmZSkpIHtcclxuICAgICAgdGhpcy5saWZlID0gbGlmZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJhdGUuaW5pdCgpO1xyXG5cclxuICAgIHRoaXMucGFydGljbGVDcmVhdGVkID0gbmV3IE1pbmlTaWduYWwoKTtcclxuICAgIHRoaXMucGFydGljbGVVcGRhdGUgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZURlYWQgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc3RvcCBlbWl0aW5nXHJcbiAgICogQG1ldGhvZCBzdG9wRW1pdFxyXG4gICAqL1xyXG4gIHN0b3BFbWl0KCkge1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgY3VycmVudCBhbGwgcGFydGljbGVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcclxuICAgKi9cclxuICByZW1vdmVBbGxQYXJ0aWNsZXMoKSB7XHJcbiAgICB0aGlzLl90YWlsUGFydGljbGUgPSBudWxsO1xyXG4gICAgdGhpcy5fcG9vbEhlYWQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIGluaXRpYWxpemUgdG8gdGhpcyBlbWl0dGVyXHJcbiAgICogQG1ldGhvZCBhZGRTZWxmSW5pdGlhbGl6ZVxyXG4gICAqL1xyXG4gIGFkZFNlbGZJbml0aWFsaXplKHBPYmopIHtcclxuICAgIGlmIChwT2JqWydpbml0J10pIHtcclxuICAgICAgcE9iai5pbml0KHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0QWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEluaXRpYWxpemUgdG8gcGFydGljbGVzO1xyXG4gICAqIFxyXG4gICAqIHlvdSBjYW4gdXNlIGluaXRpYWxpemVzIGFycmF5OmZvciBleGFtcGxlIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShpbml0aWFsaXplMSxpbml0aWFsaXplMixpbml0aWFsaXplMyk7XHJcbiAgICogQG1ldGhvZCBhZGRJbml0aWFsaXplXHJcbiAgICogQHBhcmFtIHtRdWFyay5Jbml0aWFsaXplfSBpbml0aWFsaXplIGxpa2UgdGhpcyBuZXcgUXVhcmsuUmFkaXVzKDEsIDEyKVxyXG4gICAqL1xyXG4gIGFkZEluaXRpYWxpemUoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgSW5pdGlhbGl6ZVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZVxyXG4gICAqIEBwYXJhbSB7UXVhcmsuSW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBhIGluaXRpYWxpemVcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplKGluaXRpYWxpemVyKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5pdGlhbGl6ZXMuaW5kZXhPZihpbml0aWFsaXplcik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYWxsIEluaXRpYWxpemVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVJbml0aWFsaXplcnNcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplcnMoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEJlaGF2aW91ciB0byBwYXJ0aWNsZXM7XHJcbiAgICogXHJcbiAgICogeW91IGNhbiB1c2UgQmVoYXZpb3VycyBhcnJheTplbWl0dGVyLmFkZEJlaGF2aW91cihCZWhhdmlvdXIxLEJlaGF2aW91cjIsQmVoYXZpb3VyMyk7XHJcbiAgICogQG1ldGhvZCBhZGRCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGxpa2UgdGhpcyBuZXcgUXVhcmsuQ29sb3IoJ3JhbmRvbScpXHJcbiAgICovXHJcbiAgYWRkQmVoYXZpb3VyKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShcInBhcmVudHNcIikpXHJcbiAgICAgICAgYXJndW1lbnRzW2ldLnBhcmVudHMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgQmVoYXZpb3VyXHJcbiAgICogQG1ldGhvZCByZW1vdmVCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGEgYmVoYXZpb3VyXHJcbiAgICovXHJcbiAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpXHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGFsbCBiZWhhdmlvdXJzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxCZWhhdmlvdXJzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcclxuICAgIHRoaXMuYmVoYXZpb3Vycy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIHRoaXMuYWdlICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWFkIHx8ICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUpKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW1pdHRpbmcodGltZSk7XHJcbiAgICB0aGlzLmludGVncmF0ZSh0aW1lKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxyXG4gICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG5cclxuICAgIGlmKHRoaXMuX3RhaWxQYXJ0aWNsZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUluaXRpYWxpemVycygpO1xyXG4gICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVFbWl0dGVyKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9FbWl0dGVyLmpzIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxubGV0IHVpZCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZXtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLmlkID0gdWlkKys7XHJcbiAgICAgIHRoaXMucmVzZXQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGU7XHJcbiAgICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMudi54LCAtdGhpcy52LnkpICogKDE4MCAvIE1hdGguUEkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KGluaXQpIHtcclxuICAgICAgdGhpcy5saWZlID0gSW5maW5pdHk7XHJcbiAgICAgIHRoaXMuYWdlID0gMDtcclxuICAgICAgdGhpcy5lbmVyZ3kgPSAxO1xyXG4gICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zbGVlcCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRhcmdldCA9IG51bGw7XHJcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5tYXNzID0gMTtcclxuICAgICAgdGhpcy5yYWRpdXMgPSAxMDtcclxuICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgIHRoaXMuc2NhbGUgPSAxO1xyXG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuICAgICAgdGhpcy5jb2xvciA9IG51bGw7XHJcbiAgICAgIHRoaXMuZWFzaW5nID0gKHZhbCkgPT4gdmFsO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHt9XHJcbiAgICAgIGlmIChpbml0KSB7XHJcbiAgICAgICAgdGhpcy5wID0gbmV3IFZlY3RvcjJEKCk7XHJcbiAgICAgICAgdGhpcy52ID0gbmV3IFZlY3RvcjJEKCk7XHJcbiAgICAgICAgdGhpcy5hID0gbmV3IFZlY3RvcjJEKCk7XHJcbiAgICAgICAgdGhpcy5vbGQgPSB7XHJcbiAgICAgICAgICBwIDogbmV3IFZlY3RvcjJEKCksXHJcbiAgICAgICAgICB2IDogbmV3IFZlY3RvcjJEKCksXHJcbiAgICAgICAgICBhIDogbmV3IFZlY3RvcjJEKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRlbGV0ZSB0aGlzLnRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLnAuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMudi5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLm9sZC5wLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLm9sZC52LnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLm9sZC5hLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucmdiID0ge1xyXG4gICAgICAgIHIgOiAyNTUsXHJcbiAgICAgICAgZyA6IDI1NSxcclxuICAgICAgICBiIDogMjU1XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGluZGV4LCB0aW1lKSB7XHJcbiAgICAgIGNvbnN0IGFnZSA9IHRoaXMuYWdlICsgdGltZTtcclxuXHJcbiAgICAgIGlmKGFnZSA+PSB0aGlzLmxpZmUpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcblxyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmJlaGF2aW91cnMubGVuZ3RoO1xyXG4gICAgICBsZXQgaTtcclxuICAgICAgZm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmJlaGF2aW91cnNbaV0pe1xyXG4gICAgICAgICAgdGhpcy5iZWhhdmlvdXJzW2ldLmFwcGx5QmVoYXZpb3VyKHRoaXMsIHRpbWUsIGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzY2FsZSA9IHRoaXMuZWFzaW5nKHRoaXMuYWdlIC8gdGhpcy5saWZlKTtcclxuICAgICAgdGhpcy5lbmVyZ3kgPSBNYXRoLm1heCgxIC0gc2NhbGUsIDApO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgICB0aGlzLmJlaGF2aW91cnMucHVzaChiZWhhdmlvdXIpO1xyXG4gICAgICBpZiAoYmVoYXZpb3VyLmhhc093blByb3BlcnR5KCdwYXJlbnRzJykpe1xyXG4gICAgICAgIGJlaGF2aW91ci5wYXJlbnRzLnB1c2godGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgYmVoYXZpb3VyLmluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKSB7XHJcbiAgICAgIHZhciBsZW5ndGggPSBiZWhhdmlvdXJzLmxlbmd0aCwgaTtcclxuICAgICAgZm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYWRkQmVoYXZpb3VyKGJlaGF2aW91cnNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHZhciBiZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91cnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBiZWhhdmlvdXIucGFyZW50cyA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xyXG4gICAgICB0aGlzLmJlaGF2aW91cnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc3RvcnkgdGhpcyBwYXJ0aWNsZVxyXG4gICAgICogQG1ldGhvZCBkZXN0cm95XHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xyXG4gICAgICB0aGlzLmVuZXJneSA9IDA7XHJcbiAgICAgIHRoaXMuZGVhZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1BhcnRpY2xlLmpzIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcjJEe1xyXG5cclxuICBjb25zdHJ1Y3Rvcih4LCB5KXtcclxuICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICB9XHJcblxyXG4gIHNldCh4LCB5KSB7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzZXRYKHgpIHtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0WSh5KSB7XHJcblxyXG4gICAgdGhpcy55ID0geTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzZXRDb21wb25lbnQoaW5kZXgsIHZhbHVlKSB7XHJcblxyXG4gICAgc3dpdGNoICggaW5kZXggKSB7XHJcblxyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgdGhpcy54ID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICB0aGlzLnkgPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRleCBpcyBvdXQgb2YgcmFuZ2U6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRHcmFkaWVudCgpIHtcclxuICAgIGlmICh0aGlzLnggIT0gMClcclxuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICAgZWxzZSBpZiAodGhpcy55ID4gMClcclxuICAgICAgcmV0dXJuIE1hdGguUEkgLyAyO1xyXG4gICAgZWxzZSBpZiAodGhpcy55IDwgMClcclxuICAgICAgcmV0dXJuIC1NYXRoLlBJIC8gMjtcclxuICB9XHJcblxyXG4gIGdldENvbXBvbmVudChpbmRleCkge1xyXG5cclxuICAgIHN3aXRjaCAoIGluZGV4ICkge1xyXG5cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImluZGV4IGlzIG91dCBvZiByYW5nZTogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNvcHkodikge1xyXG5cclxuICAgIHRoaXMueCA9IHYueDtcclxuICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGQodiwgdykge1xyXG5cclxuICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWRkVmVjdG9ycyh2LCB3KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54ICs9IHYueDtcclxuICAgIHRoaXMueSArPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkWFkoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCArPSBhO1xyXG4gICAgdGhpcy55ICs9IGI7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkVmVjdG9ycyhhLCBiKSB7XHJcblxyXG4gICAgdGhpcy54ID0gYS54ICsgYi54O1xyXG4gICAgdGhpcy55ID0gYS55ICsgYi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFNjYWxhcihzKSB7XHJcblxyXG4gICAgdGhpcy54ICs9IHM7XHJcbiAgICB0aGlzLnkgKz0gcztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzdWIodiwgdykge1xyXG5cclxuICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3ViVmVjdG9ycyh2LCB3KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy54IC09IHYueDtcclxuICAgIHRoaXMueSAtPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc3ViVmVjdG9ycyhhLCBiKSB7XHJcblxyXG4gICAgdGhpcy54ID0gYS54IC0gYi54O1xyXG4gICAgdGhpcy55ID0gYS55IC0gYi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG11bHRpcGx5U2NhbGFyKHMpIHtcclxuXHJcbiAgICB0aGlzLnggKj0gcztcclxuICAgIHRoaXMueSAqPSBzO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGRpdmlkZVNjYWxhcihzKSB7XHJcblxyXG4gICAgaWYgKHMgIT09IDApIHtcclxuXHJcbiAgICAgIHRoaXMueCAvPSBzO1xyXG4gICAgICB0aGlzLnkgLz0gcztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgdGhpcy5zZXQoMCwgMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG1pbih2KSB7XHJcblxyXG4gICAgaWYgKHRoaXMueCA+IHYueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gdi54O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy55ID4gdi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG1heCh2KSB7XHJcblxyXG4gICAgaWYgKHRoaXMueCA8IHYueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gdi54O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy55IDwgdi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGNsYW1wKG1pbiwgbWF4KSB7XHJcblxyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhc3N1bWVzIG1pbiA8IG1heCwgaWYgdGhpcyBhc3N1bXB0aW9uIGlzbid0IHRydWUgaXQgd2lsbCBub3Qgb3BlcmF0ZSBjb3JyZWN0bHlcclxuXHJcbiAgICBpZiAodGhpcy54IDwgbWluLngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IG1pbi54O1xyXG5cclxuICAgIH0gZWxzZSBpZiAodGhpcy54ID4gbWF4LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IG1heC54O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy55IDwgbWluLnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IG1pbi55O1xyXG5cclxuICAgIH0gZWxzZSBpZiAodGhpcy55ID4gbWF4LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IG1heC55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBuZWdhdGUoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHlTY2FsYXIoLTEpO1xyXG5cclxuICB9XHJcblxyXG4gIGRvdCh2KSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMueCAqIHYueCArIHRoaXMueSAqIHYueTtcclxuXHJcbiAgfVxyXG5cclxuICBsZW5ndGhTcSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xyXG5cclxuICB9XHJcblxyXG4gIGxlbmd0aCgpIHtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcblxyXG4gIH1cclxuXHJcbiAgbm9ybWFsaXplKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLmRpdmlkZVNjYWxhcih0aGlzLmxlbmd0aCgpKTtcclxuXHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZVRvKHYpIHtcclxuXHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VUb1NxdWFyZWQodikpO1xyXG5cclxuICB9XHJcblxyXG4gIHJvdGF0ZSh0aGEpIHtcclxuICAgIHZhciB4ID0gdGhpcy54O1xyXG4gICAgdmFyIHkgPSB0aGlzLnk7XHJcbiAgICB0aGlzLnggPSB4ICogTWF0aC5jb3ModGhhKSArIHkgKiBNYXRoLnNpbih0aGEpO1xyXG4gICAgdGhpcy55ID0gLXggKiBNYXRoLnNpbih0aGEpICsgeSAqIE1hdGguY29zKHRoYSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGRpc3RhbmNlVG9TcXVhcmVkKHYpIHtcclxuXHJcbiAgICB2YXIgZHggPSB0aGlzLnggLSB2LngsIGR5ID0gdGhpcy55IC0gdi55O1xyXG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xyXG5cclxuICB9XHJcblxyXG4gIHNldExlbmd0aChsKSB7XHJcblxyXG4gICAgdmFyIG9sZExlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XHJcblxyXG4gICAgaWYgKG9sZExlbmd0aCAhPT0gMCAmJiBsICE9PSBvbGRMZW5ndGgpIHtcclxuXHJcbiAgICAgIHRoaXMubXVsdGlwbHlTY2FsYXIobCAvIG9sZExlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVycCh2LCBhbHBoYSkge1xyXG5cclxuICAgIHRoaXMueCArPSAodi54IC0gdGhpcy54ICkgKiBhbHBoYTtcclxuICAgIHRoaXMueSArPSAodi55IC0gdGhpcy55ICkgKiBhbHBoYTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBlcXVhbHModikge1xyXG5cclxuICAgIHJldHVybiAoKHYueCA9PT0gdGhpcy54ICkgJiYgKHYueSA9PT0gdGhpcy55ICkgKTtcclxuXHJcbiAgfVxyXG5cclxuICB0b0FycmF5KCkge1xyXG5cclxuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xyXG5cclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy54ID0gMC4wO1xyXG4gICAgdGhpcy55ID0gMC4wO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjbG9uZSgpIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCwgdGhpcy55KTtcclxuXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvVmVjdG9yMkQuanMiLCJpbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0ZXtcclxuXHJcbiAgY29uc3RydWN0b3IobnVtcGFuLCB0aW1lcGFuKSB7XHJcbiAgICB0aGlzLm51bVBhbiA9IG51bXBhblxyXG4gICAgdGhpcy50aW1lUGFuID0gdGltZXBhbjtcclxuICAgIHRoaXMubnVtUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhpcy5udW1QYW4pO1xyXG4gICAgdGhpcy50aW1lUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhpcy50aW1lUGFuKTtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMubmV4dFRpbWUgPSAwO1xyXG4gICAgdGhpcy5pbml0KCk7ICBcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUodGltZSkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUgKz0gdGltZTtcclxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSA+PSB0aGlzLm5leHRUaW1lKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgICAgdGhpcy5uZXh0VGltZSA9IHRoaXMudGltZVBhbi5nZXRWYWx1ZSgpO1xyXG4gICAgICBpZiAodGhpcy5udW1QYW4uYiA9PSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtUGFuLmdldFZhbHVlKGZhbHNlKSA+IDAuNSlcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bVBhbi5nZXRWYWx1ZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvUmF0ZS5qcyIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IFNwYW4gZnJvbSAnLi4vbWF0aC9TcGFuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGRlZmF1bHQgaWYgdGhlIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgaW5pdFZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gdmFsdWUgYSBzcGVjaWZpYyB2YWx1ZSwgY291bGQgYmUgZXZlcnl0aGluZyBidXQgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IGRlZmF1bHRzIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICovXHJcbiAgICBpbml0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBkZWZhdWx0cykge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IHVuZGVmaW5lZCkgPyB2YWx1ZSA6IGRlZmF1bHRzO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBWZWN0b3IyRCAtIG9yIGNyZWF0ZXMgYSBuZXcgb25lXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgZ2V0VmVjdG9yMkRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1F1YXJrLlZlY3RvcjJEIHwgTnVtYmVyfSBwb3N0aW9uT3JYXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ldIGp1c3QgdmFsaWQgaWYgJ3Bvc3Rpb25PclgnIGlzIG5vdCBhbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtRdWFyay5WZWN0b3IyRH1cclxuICAgICAqL1xyXG4gICAgZ2V0VmVjdG9yMkQ6IGZ1bmN0aW9uKHBvc3Rpb25PclgsIHkpIHtcclxuICAgICAgICBpZiAodHlwZW9mKHBvc3Rpb25PclgpID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3N0aW9uT3JYO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB2ZWN0b3IyZCA9IG5ldyBWZWN0b3IyRChwb3N0aW9uT3JYLCB5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZlY3RvcjJkO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBqdWRnZVZlY3RvcjJEXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgcE9CSmBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgZnVuY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcE9CSlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIGp1ZGdlVmVjdG9yMkQ6IGZ1bmN0aW9uKHBPQkopIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3gnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd5JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgncCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3Bvc2l0aW9uJykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAncCc7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ3Z4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndngnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndmVsb2NpdHknKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICd2JztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdheCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2EnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdhY2NlbGVyYXRlJykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAnYSc7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2Qgc2V0VmVjdG9yMkRCeU9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHRhcmdldGBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHBPQkpgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIGZ1bmN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBPQkpcclxuICAgICAqL1xyXG4gICAgc2V0VmVjdG9yMkRCeU9iamVjdDogZnVuY3Rpb24odGFyZ2V0LCBwT0JKKSB7XHJcbiAgICAgICAgaWYocE9CSi54KSB0YXJnZXQucC54ID0gcE9CSi54O1xyXG5cclxuICAgICAgICBpZihwT0JKLnkpIHRhcmdldC5wLnkgPSBwT0JKLnk7XHJcblxyXG4gICAgICAgIGlmKHBPQkoudngpIHRhcmdldC52LnggPSBwT0JKLnZ4O1xyXG4gICAgICAgIGlmKHBPQkoudnkpIHRhcmdldC52LnkgPSBwT0JKLnZ5O1xyXG5cclxuICAgICAgICBpZihwT0JKLmF4KSB0YXJnZXQuYS54ID0gcE9CSi5heDtcclxuICAgICAgICBpZihwT0JKLmF5KSB0YXJnZXQuYS55ID0gcE9CSi5heTtcclxuICAgIH0sXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBuZXcgUXVhcmsuU3BhbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBzZXRTcGFuVmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhLCBiIGFuZCBjIHNob3VsZCBiZSAnTWl4ZWQnIG9yICdOdW1iZXInP1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWQgfCBRdWFyay5TcGFufSBhXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGJcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9ICAgICAgICAgICAgICAgY1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1F1YXJrLlNwYW59XHJcbiAgICAgKi9cclxuICAgIHNldFNwYW5WYWx1ZTogZnVuY3Rpb24oYSwgYiwgYykge1xyXG4gICAgICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBTcGFuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhLCBiKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSwgYiwgYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgZnJvbSBhIFF1YXJrLlNwYW4sIGlmIHRoZSBwYXJhbSBpcyBub3QgYSBRdWFyay5TcGFuIGl0IHdpbGwgcmV0dXJuIHRoZSBnaXZlbiBwYXJhbWV0ZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBnZXRTcGFuVmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUXVhcmsuU3Bhbn0gcGFuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7TWl4ZWR9IHRoZSB2YWx1ZSBvZiBRdWFyay5TcGFuIE9SIHRoZSBwYXJhbWV0ZXIgaWYgaXQgaXMgbm90IGEgUXVhcmsuU3BhblxyXG4gICAgICovXHJcbiAgICBnZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKHBhbikge1xyXG4gICAgICAgIGlmIChwYW4uY29uc3RydWN0b3IgPT09IFNwYW4pXHJcbiAgICAgICAgICAgIHJldHVybiBwYW4uZ2V0VmFsdWUoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBwYW47XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGVkZWYgIHtPYmplY3R9IHJnYk9iamVjdFxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHIgcmVkIHZhbHVlXHJcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gZyBncmVlbiB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGIgYmx1ZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICAvKipcclxuICAgICAqIGNvbnZlcnRzIGEgaGV4IHZhbHVlIHRvIGEgcmdiIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGhleFRvUkdCXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGggYW55IGhleCB2YWx1ZSwgZS5nLiAjMDAwMDAwIG9yIDAwMDAwMCBmb3IgYmxhY2tcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtyZ2JPYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGhleFRvUkdCOiBmdW5jdGlvbihoKSB7XHJcbiAgICAgICAgdmFyIGhleDE2ID0gKGguY2hhckF0KDApID09IFwiI1wiKSA/IGguc3Vic3RyaW5nKDEsIDcpIDogaDtcclxuICAgICAgICB2YXIgciA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygwLCAyKSwgMTYpO1xyXG4gICAgICAgIHZhciBnID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDIsIDQpLCAxNik7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoNCwgNiksIDE2KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogcixcclxuICAgICAgICAgICAgZzogZyxcclxuICAgICAgICAgICAgYjogYlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIHJnYiB2YWx1ZSB0byBhIHJnYiBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCByZ2JUb0hleFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0IHwgUXVhcmsuaGV4VG9SR0J9IHJnYiBhIHJnYiBvYmplY3QgbGlrZSBpbiB7QGxpbmsgUXVhcmsjUXVhcmsuVXRpbC5oZXhUb1JHQn1cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJnYigpXHJcbiAgICAgKi9cclxuICAgIHJnYlRvSGV4OiBmdW5jdGlvbihyYmcpIHtcclxuICAgICAgICByZXR1cm4gJ3JnYignICsgcmJnLnIgKyAnLCAnICsgcmJnLmcgKyAnLCAnICsgcmJnLmIgKyAnKSc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS9VdGlsLmpzIiwiaW1wb3J0IHsgcmFuZG9tQVRvQiwgcmFuZG9tRmxvYXRpbmcgfSBmcm9tICcuL01hdGhVdGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFue1xyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGNlbnRlciA9IGZhbHNlKSB7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhKSkge1xyXG5cdFx0XHR0aGlzLmlzQXJyYXkgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmEgPSBhO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5hID0gYTtcclxuXHRcdFx0dGhpcy5iID0gYiB8fCB0aGlzLmE7XHJcblx0XHRcdHRoaXMuY2VudGVyID0gY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0VmFsdWUoSU5UKXtcclxuXHRcdGlmICh0aGlzLmlzQXJyYXkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuYVtNYXRoLmZsb29yKHRoaXMuYS5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoIXRoaXMuY2VudGVyKXtcclxuXHRcdFx0XHRyZXR1cm4gcmFuZG9tQVRvQih0aGlzLmEsIHRoaXMuYiwgSU5UKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cmV0dXJuIHJhbmRvbUZsb2F0aW5nKHRoaXMuYSwgdGhpcy5iLCBJTlQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcclxuXHR9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvU3Bhbi5qcyIsImV4cG9ydCBmdW5jdGlvbiByYW5kb21BVG9CKGEsIGIsIElOVCkge1xyXG4gIGlmICghSU5UKVxyXG4gICAgcmV0dXJuIChhICsgTWF0aC5yYW5kb20oKSAqIChiIC0gYSApKTw8MDtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhKSkgKyBhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tRmxvYXRpbmcoY2VudGVyLCBmLCBJTlQpIHtcclxuICByZXR1cm4gcmFuZG9tQVRvQihjZW50ZXIgLSBmLCBjZW50ZXIgKyBmLCBJTlQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlVHJhbnNmb3JtKGEpIHtcclxuICByZXR1cm4gYSAqIE1hdGguUEkgLyAxODA7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJpbXBvcnQgeyBFVUxFUiB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTnVtZXJpY2FsSW50ZWdyYXRpb24ge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlIHx8IEVVTEVSO1xyXG5cclxuICAgIHRoaXMuaW50ZWdyYXRlID0gdGhpcy5pbnRlZ3JhdGU7XHJcbiAgICB0aGlzLmV1bGVySW50ZWdyYXRlID0gdGhpcy5ldWxlckludGVncmF0ZTtcclxuICB9XHJcblxyXG4gIGludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZykge1xyXG4gICAgdGhpcy5ldWxlckludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZyk7XHJcbiAgfVxyXG5cclxuICBldWxlckludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZykge1xyXG4gICAgaWYgKCFwYXJ0aWNsZS5zbGVlcCkge1xyXG4gICAgICBwYXJ0aWNsZS5vbGQucC5jb3B5KHBhcnRpY2xlLnApO1xyXG4gICAgICBwYXJ0aWNsZS5vbGQudi5jb3B5KHBhcnRpY2xlLnYpO1xyXG4gICAgICBwYXJ0aWNsZS5hLm11bHRpcGx5U2NhbGFyKDEgLyBwYXJ0aWNsZS5tYXNzKTtcclxuICAgICAgcGFydGljbGUudi5hZGQocGFydGljbGUuYS5tdWx0aXBseVNjYWxhcih0aW1lKSk7XHJcbiAgICAgIHBhcnRpY2xlLnAuYWRkKHBhcnRpY2xlLm9sZC52Lm11bHRpcGx5U2NhbGFyKHRpbWUpKTtcclxuICAgICAgaWYgKGRhbXBpbmcpe1xyXG4gICAgICAgIHBhcnRpY2xlLnYubXVsdGlwbHlTY2FsYXIoZGFtcGluZyk7XHJcbiAgICAgIH1cclxuICAgICAgcGFydGljbGUuYS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbi5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCB7IGRlZ3JlZVRyYW5zZm9ybSB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemUoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemVzKSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gaW5pdGlhbGl6ZXMubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGluaXRpYWxpemUgPSBpbml0aWFsaXplc1tpXTtcclxuICAgIGlmIChpbml0aWFsaXplIGluc3RhbmNlb2YgSW5pdGlhbGl6ZSl7XHJcbiAgICAgIGluaXRpYWxpemUuaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0KGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXQoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemUpe1xyXG4gIFV0aWwuc2V0VmVjdG9yMkRCeU9iamVjdChwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRFbWl0dGVyKGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcbiAgaWYgKGVtaXR0ZXIuYmluZEVtaXR0ZXIpIHtcclxuICAgIHBhcnRpY2xlLnAuYWRkKGVtaXR0ZXIucCk7XHJcbiAgICBwYXJ0aWNsZS52LmFkZChlbWl0dGVyLnYpO1xyXG4gICAgcGFydGljbGUuYS5hZGQoZW1pdHRlci5hKTtcclxuICAgIHBhcnRpY2xlLnYucm90YXRlKGRlZ3JlZVRyYW5zZm9ybShlbWl0dGVyLnJvdGF0aW9uKSk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0aWFsaXplIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG5cclxuXHRyZXNldCgpIHtcclxuXHJcblx0fVxyXG5cclxuXHRpbml0KGVtaXR0ZXIsIHBhcnRpY2xlKSB7XHJcblx0XHRpZiAocGFydGljbGUpIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsaXplKHBhcnRpY2xlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShlbWl0dGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKSB7XHJcblxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1pbmlTaWduYWxCaW5kaW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaVNpZ25hbEJpbmRpbmcoZm4sIG9uY2UsIHRoaXNBcmcpIHtcbiAgICBpZiAob25jZSA9PT0gdW5kZWZpbmVkKSBvbmNlID0gZmFsc2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNpZ25hbEJpbmRpbmcpO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9vbmNlID0gb25jZTtcbiAgICB0aGlzLl90aGlzQXJnID0gdGhpc0FyZztcbiAgICB0aGlzLl9uZXh0ID0gdGhpcy5fcHJldiA9IHRoaXMuX293bmVyID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2lnbmFsQmluZGluZywgW3tcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgICBpZiAodGhpcy5fb3duZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX293bmVyLmRldGFjaCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsQmluZGluZztcbn0pKCk7XG5cbmZ1bmN0aW9uIF9hZGRNaW5pU2lnbmFsQmluZGluZyhzZWxmLCBub2RlKSB7XG4gIGlmICghc2VsZi5faGVhZCkge1xuICAgIHNlbGYuX2hlYWQgPSBub2RlO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuX3RhaWwuX25leHQgPSBub2RlO1xuICAgIG5vZGUuX3ByZXYgPSBzZWxmLl90YWlsO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9XG5cbiAgbm9kZS5fb3duZXIgPSBzZWxmO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgTWluaVNpZ25hbCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWwpO1xuXG4gICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbCwgW3tcbiAgICBrZXk6ICdoYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZXJzKCkge1xuICAgICAgdmFyIGV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG5cbiAgICAgIGlmIChleGlzdHMpIHJldHVybiAhIW5vZGU7XG5cbiAgICAgIHZhciBlZSA9IFtdO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBlZS5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhub2RlKSB7XG4gICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgTWluaVNpZ25hbEJpbmRpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNoYXMoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBNaW5pU2lnbmFsQmluZGluZyBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlLl9vd25lciA9PT0gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX29uY2UpIHRoaXMuZGV0YWNoKG5vZGUpO1xuICAgICAgICBub2RlLl9mbi5hcHBseShub2RlLl90aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2FkZCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIGZhbHNlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjb25jZSgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIHRydWUsIHRoaXNBcmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjZGV0YWNoKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuX293bmVyICE9PSB0aGlzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKG5vZGUuX3ByZXYpIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xuICAgICAgaWYgKG5vZGUuX25leHQpIG5vZGUuX25leHQuX3ByZXYgPSBub2RlLl9wcmV2O1xuXG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy5faGVhZCkge1xuICAgICAgICB0aGlzLl9oZWFkID0gbm9kZS5fbmV4dDtcbiAgICAgICAgaWYgKG5vZGUuX25leHQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlID09PSB0aGlzLl90YWlsKSB7XG4gICAgICAgIHRoaXMuX3RhaWwgPSBub2RlLl9wcmV2O1xuICAgICAgICB0aGlzLl90YWlsLl9uZXh0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoQWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoQWxsKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdGhpcztcblxuICAgICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSBudWxsO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBub2RlLl9vd25lciA9IG51bGw7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTaWduYWw7XG59KSgpO1xuXG5NaW5pU2lnbmFsLk1pbmlTaWduYWxCaW5kaW5nID0gTWluaVNpZ25hbEJpbmRpbmc7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1pbmlTaWduYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9taW5pLXNpZ25hbHMvbGliL21pbmktc2lnbmFscy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlJztcbmltcG9ydCBWZWxvY2l0eSBmcm9tICcuL1ZlbG9jaXR5JztcbmltcG9ydCBMaWZlIGZyb20gJy4vTGlmZSc7XG5pbXBvcnQgTWFzcyBmcm9tICcuL01hc3MnO1xuaW1wb3J0IFJhZGl1cyBmcm9tICcuL1JhZGl1cyc7XG5pbXBvcnQgUG9zaXRpb24gZnJvbSAnLi9Qb3NpdGlvbic7XG5cbmV4cG9ydCB7IFJhdGUsIFZlbG9jaXR5LCBMaWZlLCBNYXNzLCBSYWRpdXMsIFBvc2l0aW9uIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvaW5kZXguanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgeyBNRUFTVVJFIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XHJcbmltcG9ydCBQb2xhcjJEIGZyb20gJy4uL21hdGgvUG9sYXIyRCc7XHJcbmltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi4vbWF0aC9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cdGNvbnN0cnVjdG9yKHJwYW4sIHRoYXBhbiwgdHlwZSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHJcblx0XHQvLyBzcGVlZCBvcHRpbWl6YXRpb25zXHJcblx0XHR0aGlzLlBPTEFSID0gJ3BvbGFyJztcclxuXHRcdHRoaXMuUCA9ICdwJztcclxuXHRcdHRoaXMuclBhblZhbCA9IHRoaXMuclBhbi5nZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5ub3JtYWxpemVkUEkgPSBNYXRoLlBJIC8gMTgwO1xyXG5cdH1cclxuXHJcblx0cmVzZXQocnBhbiwgdGhhcGFuLCB0eXBlKSB7XHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHR9XHJcblxyXG5cdG5vcm1hbGl6ZVZlbG9jaXR5KHZyKSB7XHJcblx0XHRyZXR1cm4gdnIgKiBNRUFTVVJFO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdGlmICh0aGlzLnR5cGUgPT0gdGhpcy5QIHx8IHRoaXMudHlwZSA9PSB0aGlzLlAgfHwgdGhpcy50eXBlID09IHRoaXMuUE9MQVIpIHtcclxuXHRcdFx0Y29uc3QgdGhhUGFuTm9ybSA9IHJhbmRvbUFUb0IodGhpcy50aGFQYW4uYSwgdGhpcy50aGFQYW4uYikqdGhpcy5ub3JtYWxpemVkUEk7XHJcblx0XHRcdGNvbnN0IHBvbGFyMmQgPSBuZXcgUG9sYXIyRCh0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhblZhbCksIHRoYVBhbk5vcm0pO1xyXG5cdFx0XHR0YXJnZXQudi54ID0gcG9sYXIyZC5nZXRYKCk7XHJcblx0XHRcdHRhcmdldC52LnkgPSBwb2xhcjJkLmdldFkoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhcmdldC52LnggPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhbi5nZXRWYWx1ZSgpKTtcclxuXHRcdFx0dGFyZ2V0LnYueSA9IHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy50aGFQYW4uZ2V0VmFsdWUoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvVmVsb2NpdHkuanMiLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2xhcjJEIHtcclxuXHJcblx0Y29uc3RydWN0b3IociwgdGhhKXtcclxuXHRcdHRoaXMuciA9IE1hdGguYWJzKHIpIHx8IDA7XHJcblx0XHR0aGlzLnRoYSA9IHRoYSB8fCAwO1xyXG5cdH1cclxuXHJcblx0c2V0KHIsIHRoYSkge1xyXG5cclxuXHRcdHRoaXMuciA9IHI7XHJcblx0XHR0aGlzLnRoYSA9IHRoYTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFIocikge1xyXG5cclxuXHRcdHRoaXMuciA9IHI7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRUaGEodGhhKSB7XHJcblxyXG5cdFx0dGhpcy50aGEgPSB0aGE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0Y29weShwKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcC5yO1xyXG5cdFx0dGhpcy50aGEgPSBwLnRoYTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHR0b1ZlY3RvcigpIHtcclxuXHRcdHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy5nZXRYKCksIHRoaXMuZ2V0WSgpKTtcclxuXHR9XHJcblxyXG5cdGdldFgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yICogTWF0aC5zaW4odGhpcy50aGEpO1xyXG5cdH1cclxuXHJcblx0Z2V0WSgpIHtcclxuXHRcdHJldHVybiAtdGhpcy5yICogTWF0aC5jb3ModGhpcy50aGEpO1xyXG5cdH1cclxuXHJcblx0bm9ybWFsaXplKCkge1xyXG5cclxuXHRcdHRoaXMuciA9IDE7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGVxdWFscyh2KSB7XHJcblxyXG5cdFx0cmV0dXJuICgodi5yID09PSB0aGlzLnIgKSAmJiAodi50aGEgPT09IHRoaXMudGhhICkgKTtcclxuXHJcblx0fVxyXG5cclxuXHR0b0FycmF5KCkge1xyXG5cclxuXHRcdHJldHVybiBbdGhpcy5yLCB0aGlzLnRoYV07XHJcblxyXG5cdH1cclxuXHJcblx0Y2xlYXIoKSB7XHJcblx0XHR0aGlzLnIgPSAwLjA7XHJcblx0XHR0aGlzLnRoYSA9IDAuMDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Y2xvbmUoKSB7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBQb2xhcjJEKHRoaXMuciwgdGhpcy50aGEpO1xyXG5cclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvUG9sYXIyRC5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWZlIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgYykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmxpZmVQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHRpZiAodGhpcy5saWZlUGFuLmEgPT0gSW5maW5pdHkpe1xyXG5cdFx0XHR0YXJnZXQubGlmZSA9IEluZmluaXR5O1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRhcmdldC5saWZlID0gdGhpcy5saWZlUGFuLmdldFZhbHVlKCk7XHRcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9MaWZlLmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc3MgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGEsIGIsIGMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc3NQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHRhcmdldCkge1xyXG4gICAgICAgIHRhcmdldC5tYXNzID0gdGhpcy5tYXNzUGFuLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGl1cyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgXHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucmFkaXVzID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoYSwgYiwgYyl7XHJcblx0XHR0aGlzLnJhZGl1cyA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnJhZGl1cyA9IHRoaXMucmFkaXVzLmdldFZhbHVlKCk7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ub2xkUmFkaXVzID0gcGFydGljbGUucmFkaXVzO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioem9uZSkge1xyXG4gICAgXHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuem9uZSA9IHpvbmUgfHwgbmV3IFBvaW50Wm9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KHpvbmUpe1xyXG5cdFx0dGhpcy56b25lID0gem9uZSB8fCBuZXcgUG9pbnRab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdHRoaXMuem9uZS5nZXRQb3NpdGlvbigpO1xyXG5cdFx0dGFyZ2V0LnAueCA9IHRoaXMuem9uZS52ZWN0b3IueDtcclxuXHRcdHRhcmdldC5wLnkgPSB0aGlzLnpvbmUudmVjdG9yLnk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvUG9zaXRpb24uanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4uL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGg7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkRFQUQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdH0gZWxzZSBpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzIDwgdGhpcy55KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueCAmJiBwYXJ0aWNsZS52LnggPD0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnggPSB0aGlzLnggKyB0aGlzLndpZHRoICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRlbHNlIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBhcnRpY2xlLnYueCA+PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkgJiYgcGFydGljbGUudi55IDw9IDApXHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmIHBhcnRpY2xlLnYueSA+PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9SZWN0Wm9uZS5qcyIsImltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMudmVjdG9yID0gbmV3IFZlY3RvcjJEKDAsIDApO1xyXG5cdFx0dGhpcy5yYW5kb20gPSAwO1xyXG5cdFx0dGhpcy5jcm9zc1R5cGUgPSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRDtcclxuXHRcdHRoaXMuYWxlcnQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblxyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvWm9uZS5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3Jvc3Nab25lIGV4dGVuZHMgQmVoYXZpb3Vye1xyXG5cclxuXHRzdGF0aWMgQ1JPU1NfVFlQRVMgPSB7XHJcblx0XHRDUk9TUzogMSA8PCAwLFxyXG5cdFx0REVBRDogMSA8PCAyLFxyXG5cdFx0Qk9VTkQ6IDEgPDwgM1xyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KHpvbmUsIGNyb3NzVHlwZSk7XHJcblx0XHR0aGlzLm5hbWUgPSAnQ3Jvc3Nab25lJztcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHRoaXMuem9uZSA9IHpvbmU7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NUeXBlID0gVXRpbC5pbml0VmFsdWUoY3Jvc3NUeXBlLCBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NpbmcocGFydGljbGUpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0Nyb3NzWm9uZS5qcyIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCB7IE1FQVNVUkUgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuaW1wb3J0IGdldEVhc2luZ0J5TmFtZSBmcm9tICcuLi9tYXRoL2Vhc2UnO1xyXG5cclxuXHJcbmNvbnN0IEJFSEFWSU9VUl9JRF9CQVNFID0gMHhGRkZGRjtcclxubGV0IHVpZCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihsaWZlLCBlYXNpbmcgPSAnZWFzZUxpbmVhcicpIHtcclxuXHRcdHRoaXMuaWQgPSBCRUhBVklPVVJfSURfQkFTRSArIHVpZCsrO1xyXG5cdFx0dGhpcy5saWZlID0gbGlmZSB8fCBJbmZpbml0eTtcclxuXHRcdHRoaXMuZWFzaW5nID0gZ2V0RWFzaW5nQnlOYW1lKGVhc2luZyk7XHJcblx0XHR0aGlzLmFnZSA9IDA7XHJcblx0XHR0aGlzLmVuZXJneSA9IDE7XHJcblx0XHR0aGlzLmRlYWQgPSBmYWxzZTtcclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5uYW1lID0gJ0JlaGF2aW91cic7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMubGlmZSA9IGxpZmUgfHwgSW5maW5pdHk7XHJcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBnZXRFYXNpbmdCeU5hbWUoJ2Vhc2VMaW5lYXInKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIGZvcmNlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVGb3JjZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gZm9yY2UgXHJcblx0ICovXHJcblx0bm9ybWFsaXplRm9yY2UoZm9yY2UpIHtcclxuXHRcdHJldHVybiBmb3JjZS5tdWx0aXBseVNjYWxhcihNRUFTVVJFKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIHZhbHVlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVWYWx1ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcclxuXHQgKi9cclxuXHRub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlICogTUVBU1VSRTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgdGhlIGJlaGF2aW91cidzIHBhcmFtZXRlcnMgZm9yIGFsbCBwYXJ0aWNsZXNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHR0aGlzLmFnZSArPSB0aW1lO1xyXG5cdFx0aWYgKHRoaXMuYWdlID49IHRoaXMubGlmZSB8fCB0aGlzLmRlYWQpIHtcclxuXHRcdFx0dGhpcy5lbmVyZ3kgPSAwO1xyXG5cdFx0XHR0aGlzLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBzY2FsZSA9IHRoaXMuZWFzaW5nKHBhcnRpY2xlLmFnZSAvIHBhcnRpY2xlLmxpZmUpO1xyXG5cdFx0XHR0aGlzLmVuZXJneSA9IE1hdGgubWF4KDEgLSBzY2FsZSwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIERlc3RvcnkgdGhpcyBiZWhhdmlvdXJcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgZGVzdHJveVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICovXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHZhciBpbmRleDtcclxuXHRcdHZhciBsZW5ndGggPSB0aGlzLnBhcmVudHMubGVuZ3RoLCBpO1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLnBhcmVudHNbaV0ucmVtb3ZlQmVoYXZpb3VyKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQmVoYXZpb3VyLmpzIiwiY29uc3QgZWFzaW5nID0ge1xyXG5cdGVhc2VMaW5lYXIgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHZhbHVlLCAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0UXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLShNYXRoLnBvdygodmFsdWUgLSAxKSwgMikgLSAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRRdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgMik7XHJcblx0XHRyZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAtIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMyk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dEN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAoTWF0aC5wb3coKHZhbHVlIC0gMSksIDMpICsgMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0Q3ViaWMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCAzKTtcclxuXHRcdHJldHVybiAwLjUgKiAoTWF0aC5wb3coKHZhbHVlIC0gMiksIDMpICsgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluUXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHZhbHVlLCA0KTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0UXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5wb3coKHZhbHVlIC0gMSksIDQpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0UXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCA0KTtcclxuXHRcdHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIE1hdGgucG93KHZhbHVlLCAzKSAtIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC1NYXRoLmNvcyh2YWx1ZSAqIChNYXRoLlBJIC8gMikpICsgMTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0U2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zaW4odmFsdWUgKiAoTWF0aC5QSSAvIDIpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRTaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAoLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpIC0gMSkpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICh2YWx1ZSA9PT0gMCkgPyAwIDogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dEV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICh2YWx1ZSA9PT0gMSkgPyAxIDogLU1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0RXhwbyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUgPT09IDApXHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0aWYgKHZhbHVlID09PSAxKVxyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKTtcclxuXHRcdHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdmFsdWUpICsgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluQ2lyYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLShNYXRoLnNxcnQoMSAtICh2YWx1ZSAqIHZhbHVlKSkgLSAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0Q2lyYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygodmFsdWUgLSAxKSwgMikpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dENpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xyXG5cdFx0cmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xyXG5cdH0sXHJcblx0XHJcblx0ZWFzZUluQmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gKHZhbHVlKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRCYWNrIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhciBzID0gMS43MDE1ODtcclxuXHRcdHJldHVybiAoIHZhbHVlID0gdmFsdWUgLSAxKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRCYWNrIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhciBzID0gMS43MDE1ODtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHZhbHVlIC0gcykpO1xyXG5cdFx0cmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcclxuXHR9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRFYXNpbmdCeU5hbWUobmFtZSkge1xyXG5cdHJldHVybiBlYXNpbmdbbmFtZV1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9lYXNlLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54O1xyXG5cdFx0dGhpcy52ZWN0b3IueSA9IHRoaXMueTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0YWxlcnQoJ1NvcnJ5IFBvaW50Wm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzaW5nIG1ldGhvZCcpO1xyXG5cdFx0XHR0aGlzLmFsZXJ0ID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvUG9pbnRab25lLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuLi9iZWhhdmlvdXIvQ3Jvc3Nab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgxLCB5MSwgeDIsIHkyLCBkaXJlY3Rpb24pIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0aWYgKHgyIC0geDEgPj0gMCkge1xyXG5cdFx0XHR0aGlzLngxID0geDE7XHJcblx0XHRcdHRoaXMueTEgPSB5MTtcclxuXHRcdFx0dGhpcy54MiA9IHgyO1xyXG5cdFx0XHR0aGlzLnkyID0geTI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLngxID0geDI7XHJcblx0XHRcdHRoaXMueTEgPSB5MjtcclxuXHRcdFx0dGhpcy54MiA9IHgxO1xyXG5cdFx0XHR0aGlzLnkyID0geTE7XHJcblx0XHR9XHJcblx0XHR0aGlzLmR4ID0gdGhpcy54MiAtIHRoaXMueDE7XHJcblx0XHR0aGlzLmR5ID0gdGhpcy55MiAtIHRoaXMueTE7XHJcblx0XHR0aGlzLm1pbnggPSBNYXRoLm1pbih0aGlzLngxLCB0aGlzLngyKTtcclxuXHRcdHRoaXMubWlueSA9IE1hdGgubWluKHRoaXMueTEsIHRoaXMueTIpO1xyXG5cdFx0dGhpcy5tYXh4ID0gTWF0aC5tYXgodGhpcy54MSwgdGhpcy54Mik7XHJcblx0XHR0aGlzLm1heHkgPSBNYXRoLm1heCh0aGlzLnkxLCB0aGlzLnkyKTtcclxuXHRcdHRoaXMuZG90ID0gdGhpcy54MiAqIHRoaXMueTEgLSB0aGlzLngxICogdGhpcy55MjtcclxuXHRcdHRoaXMueHh5eSA9IHRoaXMuZHggKiB0aGlzLmR4ICsgdGhpcy5keSAqIHRoaXMuZHk7XHJcblx0XHR0aGlzLmdyYWRpZW50ID0gdGhpcy5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xyXG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgMTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueDEgKyB0aGlzLnJhbmRvbSAqIHRoaXMubGVuZ3RoICogTWF0aC5jb3ModGhpcy5ncmFkaWVudCk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55MSArIHRoaXMucmFuZG9tICogdGhpcy5sZW5ndGggKiBNYXRoLnNpbih0aGlzLmdyYWRpZW50KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5ERUFEKSB7XHJcblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkJPVU5EKSB7XHJcblx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChzZWxmLmdldERpc3RhbmNlKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSA8PSBwYXJ0aWNsZS5yYWRpdXMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmR4ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLmR5ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5nZXRTeW1tZXRyaWMocGFydGljbGUudik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkNST1NTKSB7XHJcblx0XHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5IGxpbmVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXREaXJlY3Rpb24oeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IEIgPT0gMCA/IDEgOiBCO1xyXG5cdFx0aWYgKChBICogeCArIEIgKiB5ICsgQykgKiBEID4gMClcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGlzdGFuY2UoeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IChBICogeCArIEIgKiB5ICsgQyk7XHJcblx0XHRyZXR1cm4gRCAvIE1hdGguc3FydCh0aGlzLnh4eXkpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3ltbWV0cmljKHYpIHtcclxuXHRcdHZhciB0aGEyID0gdi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhID0gMiAqICh0aGExIC0gdGhhMik7XHJcblx0XHR2YXIgb2xkeCA9IHYueDtcclxuXHRcdHZhciBvbGR5ID0gdi55O1xyXG5cdFx0di54ID0gb2xkeCAqIE1hdGguY29zKHRoYSkgLSBvbGR5ICogTWF0aC5zaW4odGhhKTtcclxuXHRcdHYueSA9IG9sZHggKiBNYXRoLnNpbih0aGEpICsgb2xkeSAqIE1hdGguY29zKHRoYSk7XHJcblx0XHRyZXR1cm4gdjtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KCkge1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIodGhpcy5keSwgdGhpcy5keCk7XHJcblx0fVxyXG5cclxuXHRnZXRSYW5nZShwYXJ0aWNsZSwgZnVuKSB7XHJcblx0XHR2YXIgYW5nbGUgPSBNYXRoLmFicyh0aGlzLmdldEdyYWRpZW50KCkpO1xyXG5cdFx0aWYgKGFuZ2xlIDw9IE1hdGguUEkgLyA0KSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnggPCB0aGlzLm1heHggJiYgcGFydGljbGUucC54ID4gdGhpcy5taW54KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgPCB0aGlzLm1heHkgJiYgcGFydGljbGUucC55ID4gdGhpcy5taW55KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldExlbmd0aCgpIHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keSlcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9MaW5lWm9uZS5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoaW1hZ2VEYXRhLCB4LCB5LCBkKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5yZXNldChpbWFnZURhdGEsIHgsIHksIGQpO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoaW1hZ2VEYXRhLCB4LCB5LCBkKSB7XHJcblx0XHR0aGlzLmltYWdlRGF0YSA9IGltYWdlRGF0YTtcclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy5kID0gZCB8fCAyO1xyXG5cdFx0dGhpcy52ZWN0b3JzID0gW107XHJcblx0XHR0aGlzLnNldFZlY3RvcnMoKTtcclxuXHR9XHJcblxyXG5cdHNldFZlY3RvcnMoKSB7XHJcblx0XHR2YXIgaSwgajtcclxuXHRcdHZhciBsZW5ndGgxID0gdGhpcy5pbWFnZURhdGEud2lkdGg7XHJcblx0XHR2YXIgbGVuZ3RoMiA9IHRoaXMuaW1hZ2VEYXRhLmhlaWdodDtcclxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoMTsgaSArPSB0aGlzLmQpIHtcclxuXHRcdFx0Zm9yICggaiA9IDA7IGogPCBsZW5ndGgyOyBqICs9IHRoaXMuZCkge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9ICgoaiA+PiAwKSAqIGxlbmd0aDEgKyAoaSA+PiAwKSkgKiA0O1xyXG5cdFx0XHRcdGlmICh0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLnZlY3RvcnMucHVzaCh7XHJcblx0XHRcdFx0XHRcdHggOiBpICsgdGhpcy54LFxyXG5cdFx0XHRcdFx0XHR5IDogaiArIHRoaXMueVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRnZXRCb3VuZCh4LCB5KSB7XHJcblx0XHR2YXIgaW5kZXggPSAoKHkgPj4gMCkgKiB0aGlzLmltYWdlRGF0YS53aWR0aCArICh4ID4+IDApKSAqIDQ7XHJcblx0XHRpZiAodGhpcy5pbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID4gMClcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yLmNvcHkodGhpcy52ZWN0b3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudmVjdG9ycy5sZW5ndGgpXSk7XHJcblx0fVxyXG5cclxuXHRnZXRDb2xvcih4LCB5KSB7XHJcblx0XHR4IC09IHRoaXMueDtcclxuXHRcdHkgLT0gdGhpcy55O1xyXG5cdFx0dmFyIGkgPSAoKHkgPj4gMCkgKiB0aGlzLmltYWdlRGF0YS53aWR0aCArICh4ID4+IDApKSAqIDQ7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpXSxcclxuXHRcdFx0ZyA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDFdLFxyXG5cdFx0XHRiIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgMl0sXHJcblx0XHRcdGEgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAzXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJkZWFkXCIpIHtcclxuXHRcdFx0aWYgKHRoaXMuZ2V0Qm91bmQocGFydGljbGUucC54IC0gdGhpcy54LCBwYXJ0aWNsZS5wLnkgLSB0aGlzLnkpKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImJvdW5kXCIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmdldEJvdW5kKHBhcnRpY2xlLnAueCAtIHRoaXMueCwgcGFydGljbGUucC55IC0gdGhpcy55KSlcclxuXHRcdFx0XHRwYXJ0aWNsZS52Lm5lZ2F0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL0ltYWdlWm9uZS5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcbmltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSwgcmFkaXVzKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuXHRcdHRoaXMuYW5nbGUgPSAwO1xyXG5cdFx0dGhpcy5jZW50ZXIgPSB7XHJcblx0XHRcdHggOiB0aGlzLngsXHJcblx0XHRcdHkgOiB0aGlzLnlcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMucmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMuYW5nbGUgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54ICsgdGhpcy5yYW5kb20gKiB0aGlzLnJhZGl1cyAqIE1hdGguY29zKHRoaXMuYW5nbGUpO1xyXG5cdFx0dGhpcy52ZWN0b3IueSA9IHRoaXMueSArIHRoaXMucmFuZG9tICogdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdHNldENlbnRlcih4LCB5KSB7XHJcblx0XHR0aGlzLmNlbnRlci54ID0geDtcclxuXHRcdHRoaXMuY2VudGVyLnkgPSB5O1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdHZhciBkID0gcGFydGljbGUucC5kaXN0YW5jZVRvKHRoaXMuY2VudGVyKTtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCkge1xyXG5cdFx0XHRpZiAoZCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMucmFkaXVzKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0aWYgKGQgKyBwYXJ0aWNsZS5yYWRpdXMgPj0gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0dGhpcy5nZXRTeW1tZXRyaWMocGFydGljbGUpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0XHRhbGVydCgnU29ycnkgQ2lyY2xlWm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG1ldGhvZCcpO1xyXG5cdFx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0U3ltbWV0cmljKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgdGhhMiA9IHBhcnRpY2xlLnYuZ2V0R3JhZGllbnQoKTtcclxuXHRcdHZhciB0aGExID0gdGhpcy5nZXRHcmFkaWVudChwYXJ0aWNsZSk7XHJcblx0XHR2YXIgdGhhID0gMiAqICh0aGExIC0gdGhhMik7XHJcblx0XHR2YXIgb2xkeCA9IHBhcnRpY2xlLnYueDtcclxuXHRcdHZhciBvbGR5ID0gcGFydGljbGUudi55O1xyXG5cdFx0cGFydGljbGUudi54ID0gb2xkeCAqIE1hdGguY29zKHRoYSkgLSBvbGR5ICogTWF0aC5zaW4odGhhKTtcclxuXHRcdHBhcnRpY2xlLnYueSA9IG9sZHggKiBNYXRoLnNpbih0aGEpICsgb2xkeSAqIE1hdGguY29zKHRoYSk7XHJcblx0fVxyXG5cclxuXHRnZXRHcmFkaWVudChwYXJ0aWNsZSkge1xyXG5cdFx0cmV0dXJuIC1NYXRoLlBJIC8gMiArIE1hdGguYXRhbjIocGFydGljbGUucC55IC0gdGhpcy5jZW50ZXIueSwgcGFydGljbGUucC54IC0gdGhpcy5jZW50ZXIueCk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvQ2lyY2xlWm9uZS5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxwaGEgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblxyXG5cdFx0dGhpcy5yZXNldChhLCBiLCB0aGlzLmxpZmUpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJBbHBoYVwiO1xyXG5cclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2EnIGFuZCAnYidcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGJcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9UXVhcmsuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0aWYgKGIgPT0gbnVsbCB8fCBiID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdHRoaXMuc2FtZSA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNhbWUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYSA9IFV0aWwuc2V0U3BhblZhbHVlKGEgfHwgMSk7XHJcblx0XHR0aGlzLmIgPSBVdGlsLnNldFNwYW5WYWx1ZShiKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIG5ldyBhbHBoYSB2YWx1ZSBvZiB0aGUgcGFydGljbGVcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtRdWFyay5QYXJ0aWNsZX0gcGFydGljbGUgQSBzaW5nbGUgUXVhcmsgZ2VuZXJhdGVkIHBhcnRpY2xlXHJcblx0ICovXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQSA9IHRoaXMuYS5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYgKHRoaXMuc2FtZSl7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UXVhcmsuUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcbiBcdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLmFscGhhID0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQiArIChwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBIC0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQikgKiB0aGlzLmVuZXJneTtcclxuXHRcdGlmIChwYXJ0aWNsZS5hbHBoYSA8IDAuMDAxKVxyXG5cdFx0XHRwYXJ0aWNsZS5hbHBoYSA9IDA7XHJcblx0fTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0FscGhhLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJhY3Rpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YXJnZXRQb3NpdGlvbiwgZm9yY2UsIHJhZGl1cywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbiB8fCBuZXcgVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkF0dHJhY3Rpb25cIjtcclxuXHRcdFxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkF0dHJhY3Rpb25cclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2ZvcmNlJyBhbmQgJ3JhZGl1cydcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEfSB0YXJnZXRQb3NpdGlvbiB0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZm9yY2U9MTAwXVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcmFkaXVzPTEwMDBdXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy50YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIHx8IG5ldyBQcm90b24uVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5BdHRyYWN0aW9uXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLmNvcHkodGhpcy50YXJnZXRQb3NpdGlvbik7XHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5zdWIocGFydGljbGUucCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gdGhpcy5hdHRyYWN0aW9uRm9yY2UubGVuZ3RoU3EoKTtcclxuXHRcdGlmICh0aGlzLmxlbmd0aFNxID4gMC4wMDAwMDQgJiYgdGhpcy5sZW5ndGhTcSA8IHRoaXMucmFkaXVzU3EpIHtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2Uubm9ybWFsaXplKCk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKDEgLSB0aGlzLmxlbmd0aFNxIC8gdGhpcy5yYWRpdXNTcSk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKHRoaXMuZm9yY2UpO1xyXG5cdFx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmF0dHJhY3Rpb25Gb3JjZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQXR0cmFjdGlvbi5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbWl0dGVyLCBtYXNzLCBjYWxsYmFjaywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChlbWl0dGVyLCBtYXNzLCBjYWxsYmFjayk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkNvbGxpc2lvblwiO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sbGlzaW9uXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIHRvIG1hc3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLkVtaXR0ZXJ9IFx0W2VtaXR0ZXI9bnVsbF0gXHRcdHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBcdFx0W21hc3M9dHJ1ZV1cdFx0XHRcclxuXHQgKiBAcGFyYW0ge0NhbGxiYWNrfVx0IFx0W2NhbGxiYWNrPW51bGxdXHRcdHRoZSBjYWxsYmFjayBhZnRlciB0aGUgY29sbGlzaW9uXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdFtsaWZlPUluZmluaXR5XSBcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQoZW1pdHRlciwgbWFzcywgY2FsbGJhY2ssIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5lbWl0dGVyID0gZW1pdHRlciB8fCBudWxsO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcyB8fCB0cnVlO1xyXG5cdFx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XHJcblx0XHR0aGlzLmNvbGxpc2lvblBvb2wgPSBbXTtcclxuXHRcdHRoaXMuZGVsdGEgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0bGV0IG5ld1Bvb2wgPSB0aGlzLmVtaXR0ZXIucGFydGljbGVzLnNsaWNlKGluZGV4KTtcclxuXHRcdGxldCBvdGhlclBhcnRpY2xlO1xyXG5cdFx0bGV0IGxlbmd0aFNxO1xyXG5cdFx0bGV0IG92ZXJsYXA7XHJcblx0XHRsZXQgYXZlcmFnZU1hc3MxLCBhdmVyYWdlTWFzczI7XHJcblx0XHRsZXQgbGVuZ3RoID0gbmV3UG9vbC5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG90aGVyUGFydGljbGUgPSBuZXdQb29sW2ldO1xyXG5cdFx0XHRpZiAob3RoZXJQYXJ0aWNsZSAhPT0gcGFydGljbGUpIHtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLmNvcHkob3RoZXJQYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLnN1YihwYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHRsZW5ndGhTcSA9IHRoaXMuZGVsdGEubGVuZ3RoU3EoKTtcclxuXHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHBhcnRpY2xlLnJhZGl1cyArIG90aGVyUGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0XHRpZiAobGVuZ3RoU3EgPD0gZGlzdGFuY2UgKiBkaXN0YW5jZSkge1xyXG5cdFx0XHRcdFx0b3ZlcmxhcCA9IGRpc3RhbmNlIC0gTWF0aC5zcXJ0KGxlbmd0aFNxKTtcclxuXHRcdFx0XHRcdG92ZXJsYXAgKz0gMC41O1xyXG5cdFx0XHRcdFx0Y29uc3QgdG90YWxNYXNzID0gcGFydGljbGUubWFzcyArIG90aGVyUGFydGljbGUubWFzcztcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMSA9IHRoaXMubWFzcyA/IG90aGVyUGFydGljbGUubWFzcyAvIHRvdGFsTWFzcyA6IDAuNTtcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMiA9IHRoaXMubWFzcyA/IHBhcnRpY2xlLm1hc3MgLyB0b3RhbE1hc3MgOiAwLjU7XHJcblx0XHRcdFx0XHRwYXJ0aWNsZS5wLmFkZCh0aGlzLmRlbHRhLmNsb25lKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIC1hdmVyYWdlTWFzczEpKTtcclxuXHRcdFx0XHRcdG90aGVyUGFydGljbGUucC5hZGQodGhpcy5kZWx0YS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihvdmVybGFwICogYXZlcmFnZU1hc3MyKSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jYWxsYmFjayl7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FsbGJhY2socGFydGljbGUsIG90aGVyUGFydGljbGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQ29sbGlzaW9uLmpzIiwiaW1wb3J0IEF0dHJhY3Rpb24gZnJvbSAnLi9BdHRyYWN0aW9uJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwdWxzaW9uIGV4dGVuZHMgQXR0cmFjdGlvbiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSAqPSAtMTtcclxuXHRcdHRoaXMubmFtZSA9IFwiUmVwdWxzaW9uXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyLnJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSAqPSAtMTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL1JlcHVsc2lvbi5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JjZSBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGZ4LCBmeSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplRm9yY2UobmV3IFZlY3RvcjJEKGZ4LCBmeSkpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJGb3JjZVwiO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXI7XHJcblx0fVxyXG5cclxuXHRyZXNldChmeCwgZnksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplRm9yY2UobmV3IFZlY3RvcjJEKGZ4LCBmeSkpO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuYS5hZGQodGhpcy5mb3JjZSk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvRm9yY2UuanMiLCJpbXBvcnQgRm9yY2UgZnJvbSAnLi9Gb3JjZSc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXZpdHkgZXh0ZW5kcyBGb3JjZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGcsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIoMCwgZywgbGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMubmFtZSA9ICdHcmF2aXR5JztcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoZywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlci5yZXNldCgwLCBnLCBsaWZlLCBlYXNpbmcpO1xyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuYS5hZGQodGhpcy5mb3JjZSk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9HcmF2aXR5LmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXZpdHlXZWxsIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY2VudGVyUG9pbnQsIGZvcmNlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmRpc3RhbmNlVmVjID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHR0aGlzLmNlbnRlclBvaW50ID0gVXRpbC5pbml0VmFsdWUoY2VudGVyUG9pbnQsIG5ldyBWZWN0b3IyRCk7XHJcblx0XHR0aGlzLmZvcmNlID0gVXRpbC5pbml0VmFsdWUodGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSksIDEwMCk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkdyYXZpdHlXZWxsXCI7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cclxuXHRyZXNldChjZW50ZXJQb2ludCwgZm9yY2UsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5kaXN0YW5jZVZlYyA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5jZW50ZXJQb2ludCA9IFV0aWwuaW5pdFZhbHVlKGNlbnRlclBvaW50LCBuZXcgVmVjdG9yMkQpO1xyXG5cdFx0dGhpcy5mb3JjZSA9IFV0aWwuaW5pdFZhbHVlKHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpLCAxMDApO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0dGhpcy5kaXN0YW5jZVZlYy5zZXQodGhpcy5jZW50ZXJQb2ludC54IC0gcGFydGljbGUucC54LCB0aGlzLmNlbnRlclBvaW50LnkgLSBwYXJ0aWNsZS5wLnkpO1xyXG5cdFx0Y29uc3QgZGlzdGFuY2VTcSA9IHRoaXMuZGlzdGFuY2VWZWMubGVuZ3RoU3EoKTtcclxuXHRcdGlmIChkaXN0YW5jZVNxICE9IDApIHtcclxuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlVmVjLmxlbmd0aCgpO1xyXG5cdFx0XHRjb25zdCBmYWN0b3IgPSAodGhpcy5mb3JjZSAqIHRpbWUgKSAvIChkaXN0YW5jZVNxICogZGlzdGFuY2UgKTtcclxuXHRcdFx0cGFydGljbGUudi54ICs9IGZhY3RvciAqIHRoaXMuZGlzdGFuY2VWZWMueDtcclxuXHRcdFx0cGFydGljbGUudi55ICs9IGZhY3RvciAqIHRoaXMuZGlzdGFuY2VWZWMueTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL0dyYXZpdHlXZWxsLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IHJhbmRvbUFUb0IgZnJvbSAnLi4vbWF0aC9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tRHJpZnQgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkcmlmdFgsIGRyaWZ0WSwgZGVsYXksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoZHJpZnRYLCBkcmlmdFksIGRlbGF5KTtcclxuXHRcdHRoaXMudGltZSA9IDA7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlJhbmRvbURyaWZ0XCI7XHJcblx0XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblxyXG5cdHJlc2V0KGRyaWZ0WCwgZHJpZnRZLCBkZWxheSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLnBhbkZvY2UgPSBuZXcgVmVjdG9yMkQoZHJpZnRYLCBkcmlmdFkpO1xyXG5cdFx0dGhpcy5wYW5Gb2NlID0gdGhpcy5ub3JtYWxpemVGb3JjZSh0aGlzLnBhbkZvY2UpO1xyXG5cdFx0dGhpcy5kZWxheSA9IGRlbGF5O1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRSYW5kb21EcmlmdC5fc3VwZXJfLnByb3RvdHlwZS5yZXNldC5jYWxsKHRoaXMsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHR0aGlzLnRpbWUgKz0gdGltZTtcclxuXHRcdGlmICh0aGlzLnRpbWUgPj0gdGhpcy5kZWxheSkge1x0XHRcdFxyXG5cdFx0XHRwYXJ0aWNsZS5hLmFkZFhZKHJhbmRvbUFUb0IoLXRoaXMucGFuRm9jZS54LCB0aGlzLnBhbkZvY2UueCksIHJhbmRvbUFUb0IoLXRoaXMucGFuRm9jZS55LCB0aGlzLnBhbkZvY2UueSkpO1xyXG5cdFx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdFx0fTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL1JhbmRvbURyaWZ0LmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdGF0ZSBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdHN0YXRpYyBTVFlMRVMgPSB7XHJcblx0XHRUTzogMSA8PCAwLFxyXG5cdFx0RlJPTTogMSA8PCAxXHJcblx0fTtcclxuXHJcblx0c3RhdGljIFRZUEUgPSB7XHJcblx0XHRWRUxPQ0lUWTogMSA8PCAwXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgc3R5bGUsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoYSwgYiwgc3R5bGUpO1xyXG5cdFx0dGhpcy5uYW1lID0gJ1JvdGF0ZSc7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGEsIGIsIHN0eWxlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYSA9IFV0aWwuc2V0U3BhblZhbHVlKGEgfHwgUm90YXRlLlRZUEUuVkVMT0NJVFkpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYiB8fCAwKTtcclxuXHRcdHRoaXMuc3R5bGUgPSBzdHlsZSB8fCBSb3RhdGUuU1RZTEVTLlRPO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUucm90YXRpb24gPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICghdGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0aWYgKCF0aGlzLnNhbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMuc3R5bGUgPT0gUm90YXRlLlNUWUxFUy5UTykge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnJvdGF0aW9uICs9IHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIgKyAocGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQSAtIHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIpICogdGhpcy5lbmVyZ3lcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiArPSBwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25CO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuYS5hID09IFJvdGF0ZS5UWVBFLlZFTE9DSVRZKSB7XHJcblx0XHRcdC8vYmV0YS4uLlxyXG5cdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiA9IHBhcnRpY2xlLmdldERpcmVjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvUm90YXRlLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChhLCBiKTtcclxuXHRcdHRoaXMubmFtZSA9ICdTY2FsZSc7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXI7XHJcblx0fVxyXG5cclxuXHRyZXNldChhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hID0gVXRpbC5zZXRTcGFuVmFsdWUoVXRpbC5pbml0VmFsdWUoYSwgMSkpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYik7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1b2VyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBID0gdGhpcy5hLmdldFZhbHVlKCk7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ub2xkUmFkaXVzID0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0aWYgKHRoaXMuc2FtZSl7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUIgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLnNjYWxlID0gcGFydGljbGUudHJhbnNmb3JtLnNjYWxlQiArIChwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBIC0gcGFydGljbGUudHJhbnNmb3JtLnNjYWxlQikgKiB0aGlzLmVuZXJneTtcclxuXHRcdGlmIChwYXJ0aWNsZS5zY2FsZSA8IDAuMDAwMSl7XHJcblx0XHRcdHBhcnRpY2xlLnNjYWxlID0gMDtcclxuXHRcdH1cclxuXHRcdHBhcnRpY2xlLnJhZGl1cyA9IHBhcnRpY2xlLnRyYW5zZm9ybS5vbGRSYWRpdXMgKiBwYXJ0aWNsZS5zY2FsZTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVoYXZpb3VyL1NjYWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==