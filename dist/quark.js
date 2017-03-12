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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMGZmM2FlYWExMDdiMmUwMGNjNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvRW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvU3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21pbmktc2lnbmFscy9saWIvbWluaS1zaWduYWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1BvbGFyMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9Qb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9SZWN0Wm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9ab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL1BvaW50Wm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9MaW5lWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9JbWFnZVpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvQ2lyY2xlWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQmVoYXZpb3VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9BdHRyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQ29sbGlzaW9uLmpzIl0sIm5hbWVzIjpbImdldFNwYW4iLCJhIiwiYiIsImNlbnRlciIsIlNwYW4iLCJSZWN0Wm9uZSIsIlBvaW50Wm9uZSIsIkxpbmVab25lIiwiSW1hZ2Vab25lIiwiQ2lyY2xlWm9uZSIsIkFscGhhIiwiQXR0cmFjdGlvbiIsIkNvbGxpc2lvbiIsImdsb2JhbCIsIlF1YXJrIiwiZXhwb3J0cyIsIkVtaXR0ZXIiLCJQT09MX01BWCIsIlRJTUVfU1RFUCIsIlVTRV9DTE9DSyIsIk1FQVNVUkUiLCJFVUxFUiIsIlJLMiIsIlJLNCIsIlZFUkxFVCIsIlBBUlRJQ0xFX0NSRUFURUQiLCJQQVJUSUNMRV9VUERBVEUiLCJQQVJUSUNMRV9TTEVFUCIsIlBBUlRJQ0xFX0RFQUQiLCJFTUlUVEVSX0FEREVEIiwiRU1JVFRFUl9SRU1PVkVEIiwiaW5pdGlhbGl6ZXMiLCJiZWhhdmlvdXJzIiwiZW1pdFRpbWUiLCJlbWl0VG90YWxUaW1lcyIsImRhbXBpbmciLCJiaW5kRW1pdHRlciIsInJhdGUiLCJpbnRlZ3JhdG9yIiwibWF4UGFydGljbGVzIiwibWluUGFydGljbGVzIiwiYWN0aXZlIiwiQXJyYXkiLCJmaWxsIiwicGFydGljbGVzIiwiYWN0aXZlQ291bnQiLCJ1cGRhdGUiLCJlbWl0dGluZyIsImNyZWF0ZVBhcnRpY2xlIiwiaW50ZWdyYXRlIiwiYWN0aXZhdGVQYXJ0aWNsZSIsInVwZGF0ZVBhcnRpY2xlIiwidGltZSIsImkiLCJuIiwibGVuZ3RoIiwiaW5kZXgiLCJwYXJ0aWNsZSIsInJlc2V0IiwicGFydGljbGVDcmVhdGVkIiwiZGlzcGF0Y2giLCJyZXMiLCJwYXJ0aWNsZVVwZGF0ZSIsInBhcnRpY2xlRGVhZCIsImdldFZhbHVlIiwibGlmZSIsIkluZmluaXR5IiwiaXNOYU4iLCJpbml0IiwiX3RhaWxQYXJ0aWNsZSIsIl9wb29sSGVhZCIsInBPYmoiLCJpbml0QWxsIiwiYXJndW1lbnRzIiwicHVzaCIsImluaXRpYWxpemVyIiwiaW5kZXhPZiIsInNwbGljZSIsImhhc093blByb3BlcnR5IiwicGFyZW50cyIsImJlaGF2aW91ciIsImFnZSIsImRlYWQiLCJkZXN0cm95IiwicmVtb3ZlSW5pdGlhbGl6ZXJzIiwicmVtb3ZlQWxsQmVoYXZpb3VycyIsInBhcmVudCIsInJlbW92ZUVtaXR0ZXIiLCJ1aWQiLCJQYXJ0aWNsZSIsImlkIiwic3ByaXRlIiwiTWF0aCIsImF0YW4yIiwidiIsIngiLCJ5IiwiUEkiLCJlbmVyZ3kiLCJzbGVlcCIsInRhcmdldCIsIm1hc3MiLCJyYWRpdXMiLCJhbHBoYSIsInNjYWxlIiwicm90YXRpb24iLCJjb2xvciIsImVhc2luZyIsInZhbCIsInRyYW5zZm9ybSIsInAiLCJvbGQiLCJzZXQiLCJyZ2IiLCJyIiwiZyIsImFwcGx5QmVoYXZpb3VyIiwibWF4IiwiaW5pdGlhbGl6ZSIsImFkZEJlaGF2aW91ciIsIlZlY3RvcjJEIiwidmFsdWUiLCJFcnJvciIsInciLCJ1bmRlZmluZWQiLCJhZGRWZWN0b3JzIiwicyIsInN1YlZlY3RvcnMiLCJtaW4iLCJtdWx0aXBseVNjYWxhciIsInNxcnQiLCJkaXZpZGVTY2FsYXIiLCJkaXN0YW5jZVRvU3F1YXJlZCIsInRoYSIsImNvcyIsInNpbiIsImR4IiwiZHkiLCJsIiwib2xkTGVuZ3RoIiwiUmF0ZSIsIm51bXBhbiIsInRpbWVwYW4iLCJudW1QYW4iLCJ0aW1lUGFuIiwic2V0U3BhblZhbHVlIiwic3RhcnRUaW1lIiwibmV4dFRpbWUiLCJpbml0VmFsdWUiLCJkZWZhdWx0cyIsImdldFZlY3RvcjJEIiwicG9zdGlvbk9yWCIsInZlY3RvcjJkIiwianVkZ2VWZWN0b3IyRCIsInBPQkoiLCJyZXN1bHQiLCJzZXRWZWN0b3IyREJ5T2JqZWN0IiwidngiLCJ2eSIsImF4IiwiYXkiLCJjIiwiY29uc3RydWN0b3IiLCJnZXRTcGFuVmFsdWUiLCJwYW4iLCJoZXhUb1JHQiIsImgiLCJoZXgxNiIsImNoYXJBdCIsInN1YnN0cmluZyIsInBhcnNlSW50IiwicmdiVG9IZXgiLCJyYmciLCJpc0FycmF5IiwiSU5UIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21BVG9CIiwicmFuZG9tRmxvYXRpbmciLCJkZWdyZWVUcmFuc2Zvcm0iLCJmIiwiTnVtZXJpY2FsSW50ZWdyYXRpb24iLCJ0eXBlIiwiZXVsZXJJbnRlZ3JhdGUiLCJjb3B5IiwiYWRkIiwiY2xlYXIiLCJlbWl0dGVyIiwicm90YXRlIiwiSW5pdGlhbGl6ZSIsIlZlbG9jaXR5IiwiTGlmZSIsIk1hc3MiLCJSYWRpdXMiLCJQb3NpdGlvbiIsInJwYW4iLCJ0aGFwYW4iLCJyUGFuIiwidGhhUGFuIiwiUE9MQVIiLCJQIiwiclBhblZhbCIsIm5vcm1hbGl6ZWRQSSIsInZyIiwidGhhUGFuTm9ybSIsInBvbGFyMmQiLCJub3JtYWxpemVWZWxvY2l0eSIsImdldFgiLCJnZXRZIiwiUG9sYXIyRCIsImFicyIsImxpZmVQYW4iLCJtYXNzUGFuIiwib2xkUmFkaXVzIiwiem9uZSIsImdldFBvc2l0aW9uIiwidmVjdG9yIiwid2lkdGgiLCJoZWlnaHQiLCJjcm9zc1R5cGUiLCJab25lIiwiUHJvdG9uIiwiYWxlcnQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImRpcmVjdGlvbiIsIm1pbngiLCJtaW55IiwibWF4eCIsIm1heHkiLCJkb3QiLCJ4eHl5IiwiZ3JhZGllbnQiLCJnZXRHcmFkaWVudCIsImdldExlbmd0aCIsInNlbGYiLCJnZXRSYW5nZSIsImdldERpcmVjdGlvbiIsImdldERpc3RhbmNlIiwiZ2V0U3ltbWV0cmljIiwiQSIsIkIiLCJDIiwiRCIsInRoYTIiLCJ0aGExIiwib2xkeCIsIm9sZHkiLCJmdW4iLCJhbmdsZSIsImltYWdlRGF0YSIsImQiLCJ2ZWN0b3JzIiwic2V0VmVjdG9ycyIsImoiLCJsZW5ndGgxIiwibGVuZ3RoMiIsImRhdGEiLCJnZXRCb3VuZCIsIm5lZ2F0ZSIsImRpc3RhbmNlVG8iLCJuYW1lIiwic2FtZSIsImFscGhhQSIsImFscGhhQiIsIkJFSEFWSU9VUl9JRF9CQVNFIiwiQmVoYXZpb3VyIiwiZm9yY2UiLCJyZW1vdmVCZWhhdmlvdXIiLCJnZXRFYXNpbmdCeU5hbWUiLCJlYXNlTGluZWFyIiwiZWFzZUluUXVhZCIsInBvdyIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluU2luZSIsImVhc2VPdXRTaW5lIiwiZWFzZUluT3V0U2luZSIsImVhc2VJbkV4cG8iLCJlYXNlT3V0RXhwbyIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5DaXJjIiwiZWFzZU91dENpcmMiLCJlYXNlSW5PdXRDaXJjIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsInRhcmdldFBvc2l0aW9uIiwibm9ybWFsaXplVmFsdWUiLCJyYWRpdXNTcSIsImF0dHJhY3Rpb25Gb3JjZSIsImxlbmd0aFNxIiwic3ViIiwibm9ybWFsaXplIiwiY2FsbGJhY2siLCJjb2xsaXNpb25Qb29sIiwiZGVsdGEiLCJuZXdQb29sIiwic2xpY2UiLCJvdGhlclBhcnRpY2xlIiwib3ZlcmxhcCIsImF2ZXJhZ2VNYXNzMSIsImF2ZXJhZ2VNYXNzMiIsImRpc3RhbmNlIiwidG90YWxNYXNzIiwiY2xvbmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7U0FhZ0JBLE8sR0FBQUEsTzs7QUFaaEI7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxVQUFTQSxPQUFULENBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUJDLE1BQXZCLEVBQStCO0FBQ2xDLFlBQU8sbUJBQVNGLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxNQUFmLENBQVA7QUFDSDs7U0FFUUMsSTtTQUFNQyxRO1NBQVVDLFM7U0FBV0MsUTtTQUFVQyxTO1NBQVdDLFU7U0FFaERDLEs7U0FBT0MsVTtTQUFZQyxTOzs7QUFFNUJDLFFBQU9DLEtBQVAsR0FBZUMsT0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTs7Ozs7O1NBRVFDLE87Ozs7Ozs7Ozs7O0FDSkQsS0FBTUMsOEJBQVcsSUFBakI7QUFDQSxLQUFNQyxnQ0FBWSxFQUFsQjtBQUNB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RDtBQUNEO0FBQ0Q7Ozs7OzttQkEzRW1CdlMsUyIsImZpbGUiOiJxdWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDBmZjNhZWFhMTA3YjJlMDBjYzQiLCJleHBvcnQgKiBmcm9tICcuL2VtaXR0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbml0aWFsaXplJztcbmltcG9ydCBTcGFuIGZyb20gJy4vbWF0aC9TcGFuJztcblxuaW1wb3J0IFJlY3Rab25lIGZyb20gJy4vem9uZS9SZWN0Wm9uZSc7XG5pbXBvcnQgUG9pbnRab25lIGZyb20gJy4vem9uZS9Qb2ludFpvbmUnO1xuaW1wb3J0IExpbmVab25lIGZyb20gJy4vem9uZS9MaW5lWm9uZSc7XG5pbXBvcnQgSW1hZ2Vab25lIGZyb20gJy4vem9uZS9JbWFnZVpvbmUnO1xuaW1wb3J0IENpcmNsZVpvbmUgZnJvbSAnLi96b25lL0NpcmNsZVpvbmUnO1xuXG5pbXBvcnQgQWxwaGEgZnJvbSAnLi9iZWhhdmlvdXIvQWxwaGEnO1xuaW1wb3J0IEF0dHJhY3Rpb24gZnJvbSAnLi9iZWhhdmlvdXIvQXR0cmFjdGlvbic7XG5pbXBvcnQgQ29sbGlzaW9uIGZyb20gJy4vYmVoYXZpb3VyL0NvbGxpc2lvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGFuKGEsIGIsIGNlbnRlcikge1xuICAgIHJldHVybiBuZXcgU3BhbihhLCBiLCBjZW50ZXIpO1xufVxuXG5leHBvcnQgeyBTcGFuLCBSZWN0Wm9uZSwgUG9pbnRab25lLCBMaW5lWm9uZSwgSW1hZ2Vab25lLCBDaXJjbGVab25lIH07XG5cbmV4cG9ydCB7IEFscGhhLCBBdHRyYWN0aW9uLCBDb2xsaXNpb24gfTtcblxuZ2xvYmFsLlF1YXJrID0gZXhwb3J0cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJleHBvcnQgKiBmcm9tICcuL2NvbnN0JztcblxuaW1wb3J0IEVtaXR0ZXIgZnJvbSAnLi9FbWl0dGVyJztcblxuZXhwb3J0IHtFbWl0dGVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBQT09MX01BWCA9IDEwMDA7XG5leHBvcnQgY29uc3QgVElNRV9TVEVQID0gNjA7XG5leHBvcnQgY29uc3QgVVNFX0NMT0NLID0gZmFsc2U7XG5leHBvcnQgY29uc3QgTUVBU1VSRSA9IDEwMDtcbmV4cG9ydCBjb25zdCBFVUxFUiA9ICdldWxlcic7XG5leHBvcnQgY29uc3QgUksyID0gJ3J1bmdlLWt1dHRhMic7XG5leHBvcnQgY29uc3QgUks0ID0gJ3J1bmdlLWt1dHRhNCc7XG5leHBvcnQgY29uc3QgVkVSTEVUID0gJ3ZlcmxldCc7XG5leHBvcnQgY29uc3QgUEFSVElDTEVfQ1JFQVRFRCA9ICdwYXJ0aWxjbGVDcmVhdGVkJztcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9VUERBVEUgPSAncGFydGlsY2xlVXBkYXRlJztcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9TTEVFUCA9ICdwYXJ0aWNsZVNsZWVwJztcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9ERUFEID0gJ3BhcnRpbGNsZURlYWQnO1xuZXhwb3J0IGNvbnN0IEVNSVRURVJfQURERUQgPSAnZW1pdHRlckFkZGVkJztcbmV4cG9ydCBjb25zdCBFTUlUVEVSX1JFTU9WRUQgPSAnZW1pdHRlclJlbW92ZWQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbWl0dGVyL2NvbnN0LmpzIiwiLy8gaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4uL2NvcmUvUGFydGljbGUnO1xyXG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi4vY29yZS9QYXJ0aWNsZSc7XHJcbmltcG9ydCBSYXRlIGZyb20gJy4uL2luaXRpYWxpemUvUmF0ZSc7XHJcbmltcG9ydCBOdW1lcmljYWxJbnRlZ3JhdGlvbiBmcm9tICcuLi9tYXRoL051bWVyaWNhbEludGVncmF0aW9uJztcclxuaW1wb3J0IGluaXRpYWxpemVGbiBmcm9tICcuLi9pbml0aWFsaXplL0luaXRpYWxpemVVdGlsJztcclxuaW1wb3J0IE1pbmlTaWduYWwgZnJvbSAnbWluaS1zaWduYWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIgZXh0ZW5kcyBQYXJ0aWNsZXtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplcyA9IFtdO1xyXG4gICAgdGhpcy5iZWhhdmlvdXJzID0gW107XHJcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZyaWN0aW9uIGNvZWZmaWNpZW50IGZvciBhbGwgcGFydGljbGUgZW1pdCBieSBUaGlzO1xyXG4gICAgICogQHByb3BlcnR5IGRhbXBpbmdcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKiBAZGVmYXVsdCAwLjAwNlxyXG4gICAgICovXHJcbiAgICB0aGlzLmRhbXBpbmcgPSAuMDA2O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBiaW5kRW1pdHRlciB0aGUgcGFydGljbGVzIGNhbiBiaW5kIHRoaXMgZW1pdHRlcidzIHByb3BlcnR5O1xyXG4gICAgICogQHByb3BlcnR5IGJpbmRFbWl0dGVyXHJcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqL1xyXG4gICAgdGhpcy5iaW5kRW1pdHRlciA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgcGFydGljbGVzIHBlciBzZWNvbmQgZW1pdCAoYSBbcGFydGljbGVdL2IgW3NdKTtcclxuICAgICAqIEBwcm9wZXJ0eSByYXRlXHJcbiAgICAgKiBAdHlwZSB7UXVhcmsuUmF0ZX1cclxuICAgICAqIEBkZWZhdWx0IFF1YXJrLlJhdGUoMSwgLjEpXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmF0ZSA9IG5ldyBSYXRlKDEsIC4xKTtcclxuXHJcbiAgICB0aGlzLmludGVncmF0b3IgPSBuZXcgTnVtZXJpY2FsSW50ZWdyYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLm1heFBhcnRpY2xlcyA9IHRoaXMubWluUGFydGljbGVzID0gNTAwMDA7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IG5ldyBBcnJheSh0aGlzLm1heFBhcnRpY2xlcykuZmlsbChmYWxzZSk7XHJcbiAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheSh0aGlzLm1heFBhcnRpY2xlcyk7XHJcbiAgICB0aGlzLmFjdGl2ZUNvdW50ID0gMDtcclxuXHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZTtcclxuICAgIHRoaXMuZW1pdHRpbmcgPSB0aGlzLmVtaXR0aW5nO1xyXG4gICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSA9IHRoaXMuY3JlYXRlUGFydGljbGU7XHJcbiAgICB0aGlzLmludGVncmF0ZSA9IHRoaXMuaW50ZWdyYXRlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVBhcnRpY2xlID0gdGhpcy5hY3RpdmF0ZVBhcnRpY2xlO1xyXG4gICAgdGhpcy51cGRhdGVQYXJ0aWNsZSA9IHRoaXMudXBkYXRlUGFydGljbGU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlIHNpbmdsZSBwYXJ0aWNsZTtcclxuICAgKiBcclxuICAgKiBjYW4gdXNlIGVtaXQoe3g6MTB9LG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KSBvciBlbWl0KFt7eDoxMH0sbmV3IEluaXRpYWxpemVdLG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXHJcbiAgICovXHJcbiAgY3JlYXRlUGFydGljbGUodGltZSkge1xyXG4gICAgbGV0IGFjdGl2ZUNvdW50ID0gdGhpcy5hY3RpdmVDb3VudDtcclxuICAgIGlmKGFjdGl2ZUNvdW50ID09PSB0aGlzLm1heFBhcnRpY2xlcykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBhY3RpdmUubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGlmICghYWN0aXZlW2ldKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVBhcnRpY2xlKGksIHRpbWUpO1xyXG4gICAgICAgIGFjdGl2ZVtpXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDb3VudCA9IGFjdGl2ZUNvdW50ICsgMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGVQYXJ0aWNsZShpbmRleCwgdGltZSl7XHJcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcztcclxuICAgIGxldCBwYXJ0aWNsZSA9IHBhcnRpY2xlc1tpbmRleF07XHJcblxyXG4gICAgaWYoIXBhcnRpY2xlKXtcclxuICAgICAgcGFydGljbGVzW2luZGV4XSA9IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemVzID0gdGhpcy5pbml0aWFsaXplcztcclxuICAgIGxldCBiZWhhdmlvdXJzID0gdGhpcy5iZWhhdmlvdXJzO1xyXG5cclxuICAgIHBhcnRpY2xlLnJlc2V0KCk7XHJcbiAgICBpbml0aWFsaXplRm4odGhpcywgcGFydGljbGUsIGluaXRpYWxpemVzKTtcclxuICAgIHBhcnRpY2xlLnVwZGF0ZShpbmRleCwgdGltZSk7XHJcblxyXG4gICAgdGhpcy5wYXJ0aWNsZUNyZWF0ZWQuZGlzcGF0Y2gocGFydGljbGUpO1xyXG5cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhcnRpY2xlKHBhcnRpY2xlLCBpbmRleCwgdGltZSwgZGFtcGluZyl7XHJcbiAgICBjb25zdCByZXMgPSBwYXJ0aWNsZS51cGRhdGUoaW5kZXgsIHRpbWUpO1xyXG5cclxuICAgIHRoaXMuaW50ZWdyYXRvci5pbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpO1xyXG5cclxuICAgIGlmKHJlcyl7XHJcbiAgICAgIHRoaXMucGFydGljbGVVcGRhdGUuZGlzcGF0Y2gocGFydGljbGUpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMucGFydGljbGVEZWFkLmRpc3BhdGNoKHBhcnRpY2xlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbiAgfVxyXG5cclxuICBpbnRlZ3JhdGUodGltZSkge1xyXG4gICAgY29uc3QgZGFtcGluZyA9IDEgLSB0aGlzLmRhbXBpbmc7XHJcbiAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHRoaXMsIHRpbWUsIGRhbXBpbmcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZTtcclxuICAgIGxldCBhY3RpdmVDb3VudCA9IHRoaXMuYWN0aXZlQ291bnQ7XHJcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGFjdGl2ZS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgaWYgKGFjdGl2ZVtpXSAmJiAhdGhpcy51cGRhdGVQYXJ0aWNsZShwYXJ0aWNsZXNbaV0sIGksIHRpbWUsIGRhbXBpbmcpKSB7XHJcbiAgICAgICAgYWN0aXZlW2ldID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aXZlQ291bnQtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5hY3RpdmVDb3VudCA9IGFjdGl2ZUNvdW50O1xyXG5cclxuICB9XHJcblxyXG4gIGVtaXR0aW5nKHRpbWUpIHtcclxuICAgIHRoaXMuZW1pdFRpbWUgKz0gdGltZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucmF0ZS5nZXRWYWx1ZSh0aW1lKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlUGFydGljbGUodGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWl0KGVtaXRUaW1lLCBsaWZlKSB7XHJcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSBlbWl0VGltZSB8fCBJbmZpbml0eTtcclxuXHJcbiAgICBpZighaXNOYU4obGlmZSkpIHtcclxuICAgICAgdGhpcy5saWZlID0gbGlmZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJhdGUuaW5pdCgpO1xyXG5cclxuICAgIHRoaXMucGFydGljbGVDcmVhdGVkID0gbmV3IE1pbmlTaWduYWwoKTtcclxuICAgIHRoaXMucGFydGljbGVVcGRhdGUgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZURlYWQgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc3RvcCBlbWl0aW5nXHJcbiAgICogQG1ldGhvZCBzdG9wRW1pdFxyXG4gICAqL1xyXG4gIHN0b3BFbWl0KCkge1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgY3VycmVudCBhbGwgcGFydGljbGVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcclxuICAgKi9cclxuICByZW1vdmVBbGxQYXJ0aWNsZXMoKSB7XHJcbiAgICB0aGlzLl90YWlsUGFydGljbGUgPSBudWxsO1xyXG4gICAgdGhpcy5fcG9vbEhlYWQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIGluaXRpYWxpemUgdG8gdGhpcyBlbWl0dGVyXHJcbiAgICogQG1ldGhvZCBhZGRTZWxmSW5pdGlhbGl6ZVxyXG4gICAqL1xyXG4gIGFkZFNlbGZJbml0aWFsaXplKHBPYmopIHtcclxuICAgIGlmIChwT2JqWydpbml0J10pIHtcclxuICAgICAgcE9iai5pbml0KHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0QWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEluaXRpYWxpemUgdG8gcGFydGljbGVzO1xyXG4gICAqIFxyXG4gICAqIHlvdSBjYW4gdXNlIGluaXRpYWxpemVzIGFycmF5OmZvciBleGFtcGxlIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShpbml0aWFsaXplMSxpbml0aWFsaXplMixpbml0aWFsaXplMyk7XHJcbiAgICogQG1ldGhvZCBhZGRJbml0aWFsaXplXHJcbiAgICogQHBhcmFtIHtRdWFyay5Jbml0aWFsaXplfSBpbml0aWFsaXplIGxpa2UgdGhpcyBuZXcgUXVhcmsuUmFkaXVzKDEsIDEyKVxyXG4gICAqL1xyXG4gIGFkZEluaXRpYWxpemUoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgSW5pdGlhbGl6ZVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZVxyXG4gICAqIEBwYXJhbSB7UXVhcmsuSW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBhIGluaXRpYWxpemVcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplKGluaXRpYWxpemVyKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5pdGlhbGl6ZXMuaW5kZXhPZihpbml0aWFsaXplcik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYWxsIEluaXRpYWxpemVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVJbml0aWFsaXplcnNcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplcnMoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEJlaGF2aW91ciB0byBwYXJ0aWNsZXM7XHJcbiAgICogXHJcbiAgICogeW91IGNhbiB1c2UgQmVoYXZpb3VycyBhcnJheTplbWl0dGVyLmFkZEJlaGF2aW91cihCZWhhdmlvdXIxLEJlaGF2aW91cjIsQmVoYXZpb3VyMyk7XHJcbiAgICogQG1ldGhvZCBhZGRCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGxpa2UgdGhpcyBuZXcgUXVhcmsuQ29sb3IoJ3JhbmRvbScpXHJcbiAgICovXHJcbiAgYWRkQmVoYXZpb3VyKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShcInBhcmVudHNcIikpXHJcbiAgICAgICAgYXJndW1lbnRzW2ldLnBhcmVudHMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgQmVoYXZpb3VyXHJcbiAgICogQG1ldGhvZCByZW1vdmVCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGEgYmVoYXZpb3VyXHJcbiAgICovXHJcbiAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpXHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGFsbCBiZWhhdmlvdXJzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxCZWhhdmlvdXJzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcclxuICAgIHRoaXMuYmVoYXZpb3Vycy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIHRoaXMuYWdlICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWFkIHx8ICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUpKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW1pdHRpbmcodGltZSk7XHJcbiAgICB0aGlzLmludGVncmF0ZSh0aW1lKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxyXG4gICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG5cclxuICAgIGlmKHRoaXMuX3RhaWxQYXJ0aWNsZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUluaXRpYWxpemVycygpO1xyXG4gICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVFbWl0dGVyKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW1pdHRlci9FbWl0dGVyLmpzIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xuXG5sZXQgdWlkID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGV7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmlkID0gdWlkKys7XG4gICAgICB0aGlzLnJlc2V0KHRydWUpO1xuICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlO1xuICAgICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95O1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbigpIHtcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMudi54LCAtdGhpcy52LnkpICogKDE4MCAvIE1hdGguUEkpO1xuICAgIH1cblxuICAgIHJlc2V0KGluaXQpIHtcbiAgICAgIHRoaXMubGlmZSA9IEluZmluaXR5O1xuICAgICAgdGhpcy5hZ2UgPSAwO1xuICAgICAgdGhpcy5lbmVyZ3kgPSAxO1xuICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgICB0aGlzLnNsZWVwID0gZmFsc2U7XG4gICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICB0aGlzLm1hc3MgPSAxO1xuICAgICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICAgIHRoaXMuY29sb3IgPSBudWxsO1xuICAgICAgdGhpcy5lYXNpbmcgPSAodmFsKSA9PiB2YWw7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHt9XG4gICAgICBpZiAoaW5pdCkge1xuICAgICAgICB0aGlzLnAgPSBuZXcgVmVjdG9yMkQoKTtcbiAgICAgICAgdGhpcy52ID0gbmV3IFZlY3RvcjJEKCk7XG4gICAgICAgIHRoaXMuYSA9IG5ldyBWZWN0b3IyRCgpO1xuICAgICAgICB0aGlzLm9sZCA9IHtcbiAgICAgICAgICBwIDogbmV3IFZlY3RvcjJEKCksXG4gICAgICAgICAgdiA6IG5ldyBWZWN0b3IyRCgpLFxuICAgICAgICAgIGEgOiBuZXcgVmVjdG9yMkQoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJlaGF2aW91cnMgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlbGV0ZSB0aGlzLnRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5wLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy52LnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5hLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5vbGQucC5zZXQoMCwgMCk7XG4gICAgICAgIHRoaXMub2xkLnYuc2V0KDAsIDApO1xuICAgICAgICB0aGlzLm9sZC5hLnNldCgwLCAwKTtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhbnNmb3JtLnJnYiA9IHtcbiAgICAgICAgciA6IDI1NSxcbiAgICAgICAgZyA6IDI1NSxcbiAgICAgICAgYiA6IDI1NVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdXBkYXRlKGluZGV4LCB0aW1lKSB7XG4gICAgICBjb25zdCBhZ2UgPSB0aGlzLmFnZSArIHRpbWU7XG5cbiAgICAgIGlmKGFnZSA+PSB0aGlzLmxpZmUpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWdlID0gYWdlO1xuXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmJlaGF2aW91cnMubGVuZ3RoO1xuICAgICAgbGV0IGk7XG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmJlaGF2aW91cnNbaV0pe1xuICAgICAgICAgIHRoaXMuYmVoYXZpb3Vyc1tpXS5hcHBseUJlaGF2aW91cih0aGlzLCB0aW1lLCBpbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmVhc2luZyh0aGlzLmFnZSAvIHRoaXMubGlmZSk7XG4gICAgICB0aGlzLmVuZXJneSA9IE1hdGgubWF4KDEgLSBzY2FsZSwgMCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGFkZEJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5wdXNoKGJlaGF2aW91cik7XG4gICAgICBpZiAoYmVoYXZpb3VyLmhhc093blByb3BlcnR5KCdwYXJlbnRzJykpe1xuICAgICAgICBiZWhhdmlvdXIucGFyZW50cy5wdXNoKHRoaXMpO1xuICAgICAgfVxuICAgICAgYmVoYXZpb3VyLmluaXRpYWxpemUodGhpcyk7XG4gICAgfVxuXG4gICAgYWRkQmVoYXZpb3VycyhiZWhhdmlvdXJzKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gYmVoYXZpb3Vycy5sZW5ndGgsIGk7XG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYWRkQmVoYXZpb3VyKGJlaGF2aW91cnNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuYmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGJlaGF2aW91ci5wYXJlbnRzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xuICAgICAgdGhpcy5iZWhhdmlvdXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdG9yeSB0aGlzIHBhcnRpY2xlXG4gICAgICogQG1ldGhvZCBkZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xuICAgICAgdGhpcy5lbmVyZ3kgPSAwO1xuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUvUGFydGljbGUuanMiLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHgsIHkpe1xyXG4gICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgdGhpcy55ID0geSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgc2V0KHgsIHkpIHtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFgoeCkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzZXRZKHkpIHtcclxuXHJcbiAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldENvbXBvbmVudChpbmRleCwgdmFsdWUpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLnggPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMueSA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImluZGV4IGlzIG91dCBvZiByYW5nZTogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldEdyYWRpZW50KCkge1xyXG4gICAgaWYgKHRoaXMueCAhPSAwKVxyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgICBlbHNlIGlmICh0aGlzLnkgPiAwKVxyXG4gICAgICByZXR1cm4gTWF0aC5QSSAvIDI7XHJcbiAgICBlbHNlIGlmICh0aGlzLnkgPCAwKVxyXG4gICAgICByZXR1cm4gLU1hdGguUEkgLyAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KGluZGV4KSB7XHJcblxyXG4gICAgc3dpdGNoICggaW5kZXggKSB7XHJcblxyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29weSh2KSB7XHJcblxyXG4gICAgdGhpcy54ID0gdi54O1xyXG4gICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZCh2LCB3KSB7XHJcblxyXG4gICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hZGRWZWN0b3JzKHYsIHcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggKz0gdi54O1xyXG4gICAgdGhpcy55ICs9IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRYWShhLCBiKSB7XHJcblxyXG4gICAgdGhpcy54ICs9IGE7XHJcbiAgICB0aGlzLnkgKz0gYjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRWZWN0b3JzKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggPSBhLnggKyBiLng7XHJcbiAgICB0aGlzLnkgPSBhLnkgKyBiLnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkU2NhbGFyKHMpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gcztcclxuICAgIHRoaXMueSArPSBzO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1Yih2LCB3KSB7XHJcblxyXG4gICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJWZWN0b3JzKHYsIHcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggLT0gdi54O1xyXG4gICAgdGhpcy55IC09IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzdWJWZWN0b3JzKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggPSBhLnggLSBiLng7XHJcbiAgICB0aGlzLnkgPSBhLnkgLSBiLnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbXVsdGlwbHlTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCAqPSBzO1xyXG4gICAgdGhpcy55ICo9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZGl2aWRlU2NhbGFyKHMpIHtcclxuXHJcbiAgICBpZiAocyAhPT0gMCkge1xyXG5cclxuICAgICAgdGhpcy54IC89IHM7XHJcbiAgICAgIHRoaXMueSAvPSBzO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICB0aGlzLnNldCgwLCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbWluKHYpIHtcclxuXHJcbiAgICBpZiAodGhpcy54ID4gdi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSB2Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPiB2LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbWF4KHYpIHtcclxuXHJcbiAgICBpZiAodGhpcy54IDwgdi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSB2Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPCB2LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xhbXAobWluLCBtYXgpIHtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgbWluIDwgbWF4LCBpZiB0aGlzIGFzc3VtcHRpb24gaXNuJ3QgdHJ1ZSBpdCB3aWxsIG5vdCBvcGVyYXRlIGNvcnJlY3RseVxyXG5cclxuICAgIGlmICh0aGlzLnggPCBtaW4ueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gbWluLng7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnggPiBtYXgueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gbWF4Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPCBtaW4ueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gbWluLnk7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnkgPiBtYXgueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gbWF4Lnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG5lZ2F0ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigtMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZG90KHYpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55O1xyXG5cclxuICB9XHJcblxyXG4gIGxlbmd0aFNxKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoKCkge1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuXHJcbiAgfVxyXG5cclxuICBub3JtYWxpemUoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKHRoaXMubGVuZ3RoKCkpO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3RhbmNlVG8odikge1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVRvU3F1YXJlZCh2KSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcm90YXRlKHRoYSkge1xyXG4gICAgdmFyIHggPSB0aGlzLng7XHJcbiAgICB2YXIgeSA9IHRoaXMueTtcclxuICAgIHRoaXMueCA9IHggKiBNYXRoLmNvcyh0aGEpICsgeSAqIE1hdGguc2luKHRoYSk7XHJcbiAgICB0aGlzLnkgPSAteCAqIE1hdGguc2luKHRoYSkgKyB5ICogTWF0aC5jb3ModGhhKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUb1NxdWFyZWQodikge1xyXG5cclxuICAgIHZhciBkeCA9IHRoaXMueCAtIHYueCwgZHkgPSB0aGlzLnkgLSB2Lnk7XHJcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0TGVuZ3RoKGwpIHtcclxuXHJcbiAgICB2YXIgb2xkTGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuXHJcbiAgICBpZiAob2xkTGVuZ3RoICE9PSAwICYmIGwgIT09IG9sZExlbmd0aCkge1xyXG5cclxuICAgICAgdGhpcy5tdWx0aXBseVNjYWxhcihsIC8gb2xkTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBsZXJwKHYsIGFscGhhKSB7XHJcblxyXG4gICAgdGhpcy54ICs9ICh2LnggLSB0aGlzLnggKSAqIGFscGhhO1xyXG4gICAgdGhpcy55ICs9ICh2LnkgLSB0aGlzLnkgKSAqIGFscGhhO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGVxdWFscyh2KSB7XHJcblxyXG4gICAgcmV0dXJuICgodi54ID09PSB0aGlzLnggKSAmJiAodi55ID09PSB0aGlzLnkgKSApO1xyXG5cclxuICB9XHJcblxyXG4gIHRvQXJyYXkoKSB7XHJcblxyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnggPSAwLjA7XHJcbiAgICB0aGlzLnkgPSAwLjA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsb25lKCkge1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpO1xyXG5cclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXRle1xyXG5cclxuICBjb25zdHJ1Y3RvcihudW1wYW4sIHRpbWVwYW4pIHtcclxuICAgIHRoaXMubnVtUGFuID0gbnVtcGFuXHJcbiAgICB0aGlzLnRpbWVQYW4gPSB0aW1lcGFuO1xyXG4gICAgdGhpcy5udW1QYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGlzLm51bVBhbik7XHJcbiAgICB0aGlzLnRpbWVQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGlzLnRpbWVQYW4pO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5uZXh0VGltZSA9IDA7XHJcbiAgICB0aGlzLmluaXQoKTsgIFxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMubmV4dFRpbWUgPSB0aGlzLnRpbWVQYW4uZ2V0VmFsdWUoKTsgXHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSh0aW1lKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSArPSB0aW1lO1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lID49IHRoaXMubmV4dFRpbWUpIHtcclxuICAgICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7XHJcbiAgICAgIGlmICh0aGlzLm51bVBhbi5iID09IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5udW1QYW4uZ2V0VmFsdWUoZmFsc2UpID4gMC41KVxyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtUGFuLmdldFZhbHVlKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgU3BhbiBmcm9tICcuLi9tYXRoL1NwYW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBpbml0VmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBhIHNwZWNpZmljIHZhbHVlLCBjb3VsZCBiZSBldmVyeXRoaW5nIGJ1dCBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gZGVmYXVsdHMgdGhlIGRlZmF1bHQgaWYgdGhlIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIGluaXRWYWx1ZTogZnVuY3Rpb24odmFsdWUsIGRlZmF1bHRzKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKSA/IHZhbHVlIDogZGVmYXVsdHM7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFZlY3RvcjJEIC0gb3IgY3JlYXRlcyBhIG5ldyBvbmVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBnZXRWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UXVhcmsuVmVjdG9yMkQgfCBOdW1iZXJ9IHBvc3Rpb25PclhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbeV0ganVzdCB2YWxpZCBpZiAncG9zdGlvbk9yWCcgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1F1YXJrLlZlY3RvcjJEfVxyXG4gICAgICovXHJcbiAgICBnZXRWZWN0b3IyRDogZnVuY3Rpb24ocG9zdGlvbk9yWCwgeSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YocG9zdGlvbk9yWCkgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3Rpb25Pclg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHZlY3RvcjJkID0gbmV3IFZlY3RvcjJEKHBvc3Rpb25PclgsIHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yMmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGp1ZGdlVmVjdG9yMkRcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGBwT0JKYFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwT0JKXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZXN1bHRcclxuICAgICAqL1xyXG4gICAganVkZ2VWZWN0b3IyRDogZnVuY3Rpb24ocE9CSikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgneCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3knKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdwJykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgncG9zaXRpb24nKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICdwJztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgndngnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2eCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3YnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2ZWxvY2l0eScpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ3YnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdheCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYScpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2FjY2VsZXJhdGUnKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICdhJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBzZXRWZWN0b3IyREJ5T2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgdGFyZ2V0YFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgcE9CSmBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgZnVuY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcE9CSlxyXG4gICAgICovXHJcbiAgICBzZXRWZWN0b3IyREJ5T2JqZWN0OiBmdW5jdGlvbih0YXJnZXQsIHBPQkopIHtcclxuICAgICAgICBpZihwT0JKLngpIHRhcmdldC5wLnggPSBwT0JKLng7XHJcblxyXG4gICAgICAgIGlmKHBPQkoueSkgdGFyZ2V0LnAueSA9IHBPQkoueTtcclxuXHJcbiAgICAgICAgaWYocE9CSi52eCkgdGFyZ2V0LnYueCA9IHBPQkoudng7XHJcbiAgICAgICAgaWYocE9CSi52eSkgdGFyZ2V0LnYueSA9IHBPQkoudnk7XHJcblxyXG4gICAgICAgIGlmKHBPQkouYXgpIHRhcmdldC5hLnggPSBwT0JKLmF4O1xyXG4gICAgICAgIGlmKHBPQkouYXkpIHRhcmdldC5hLnkgPSBwT0JKLmF5O1xyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBRdWFyay5TcGFuIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFNwYW5WYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGEsIGIgYW5kIGMgc2hvdWxkIGJlICdNaXhlZCcgb3IgJ051bWJlcic/XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZCB8IFF1YXJrLlNwYW59IGFcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9ICAgICAgICAgICAgICAgYlxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gICAgICAgICAgICAgICBjXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7UXVhcmsuU3Bhbn1cclxuICAgICAqL1xyXG4gICAgc2V0U3BhblZhbHVlOiBmdW5jdGlvbihhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFNwYW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhLCBiLCBjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIGEgUXVhcmsuU3BhbiwgaWYgdGhlIHBhcmFtIGlzIG5vdCBhIFF1YXJrLlNwYW4gaXQgd2lsbCByZXR1cm4gdGhlIGdpdmVuIHBhcmFtZXRlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGdldFNwYW5WYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWQgfCBRdWFyay5TcGFufSBwYW5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtNaXhlZH0gdGhlIHZhbHVlIG9mIFF1YXJrLlNwYW4gT1IgdGhlIHBhcmFtZXRlciBpZiBpdCBpcyBub3QgYSBRdWFyay5TcGFuXHJcbiAgICAgKi9cclxuICAgIGdldFNwYW5WYWx1ZTogZnVuY3Rpb24ocGFuKSB7XHJcbiAgICAgICAgaWYgKHBhbi5jb25zdHJ1Y3RvciA9PT0gU3BhbilcclxuICAgICAgICAgICAgcmV0dXJuIHBhbi5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHBhbjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZWRlZiAge09iamVjdH0gcmdiT2JqZWN0XHJcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gciByZWQgdmFsdWVcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBnIGdyZWVuIHZhbHVlXHJcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gYiBibHVlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICogY29udmVydHMgYSBoZXggdmFsdWUgdG8gYSByZ2Igb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgaGV4VG9SR0JcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaCBhbnkgaGV4IHZhbHVlLCBlLmcuICMwMDAwMDAgb3IgMDAwMDAwIGZvciBibGFja1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3JnYk9iamVjdH1cclxuICAgICAqL1xyXG4gICAgaGV4VG9SR0I6IGZ1bmN0aW9uKGgpIHtcclxuICAgICAgICB2YXIgaGV4MTYgPSAoaC5jaGFyQXQoMCkgPT0gXCIjXCIpID8gaC5zdWJzdHJpbmcoMSwgNykgOiBoO1xyXG4gICAgICAgIHZhciByID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDAsIDIpLCAxNik7XHJcbiAgICAgICAgdmFyIGcgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoMiwgNCksIDE2KTtcclxuICAgICAgICB2YXIgYiA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZyg0LCA2KSwgMTYpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiByLFxyXG4gICAgICAgICAgICBnOiBnLFxyXG4gICAgICAgICAgICBiOiBiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnZlcnRzIGEgcmdiIHZhbHVlIHRvIGEgcmdiIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHJnYlRvSGV4XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3QgfCBRdWFyay5oZXhUb1JHQn0gcmdiIGEgcmdiIG9iamVjdCBsaWtlIGluIHtAbGluayBRdWFyayNRdWFyay5VdGlsLmhleFRvUkdCfVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmdiKClcclxuICAgICAqL1xyXG4gICAgcmdiVG9IZXg6IGZ1bmN0aW9uKHJiZykge1xyXG4gICAgICAgIHJldHVybiAncmdiKCcgKyByYmcuciArICcsICcgKyByYmcuZyArICcsICcgKyByYmcuYiArICcpJztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlL1V0aWwuanMiLCJpbXBvcnQgeyByYW5kb21BVG9CLCByYW5kb21GbG9hdGluZyB9IGZyb20gJy4vTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYW57XHJcblx0Y29uc3RydWN0b3IoYSwgYiwgY2VudGVyID0gZmFsc2UpIHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KGEpKSB7XHJcblx0XHRcdHRoaXMuaXNBcnJheSA9IHRydWU7XHJcblx0XHRcdHRoaXMuYSA9IGE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmEgPSBhO1xyXG5cdFx0XHR0aGlzLmIgPSBiIHx8IHRoaXMuYTtcclxuXHRcdFx0dGhpcy5jZW50ZXIgPSBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRWYWx1ZShJTlQpe1xyXG5cdFx0aWYgKHRoaXMuaXNBcnJheSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hW01hdGguZmxvb3IodGhpcy5hLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghdGhpcy5jZW50ZXIpe1xyXG5cdFx0XHRcdHJldHVybiByYW5kb21BVG9CKHRoaXMuYSwgdGhpcy5iLCBJTlQpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXR1cm4gcmFuZG9tRmxvYXRpbmcodGhpcy5hLCB0aGlzLmIsIElOVCk7XHJcblx0XHRcdH1cclxuXHRcdH1cdFxyXG5cdH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9TcGFuLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUFUb0IoYSwgYiwgSU5UKSB7XHJcbiAgaWYgKCFJTlQpXHJcbiAgICByZXR1cm4gKGEgKyBNYXRoLnJhbmRvbSgpICogKGIgLSBhICkpPDwwO1xyXG4gIGVsc2VcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpKSArIGE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21GbG9hdGluZyhjZW50ZXIsIGYsIElOVCkge1xyXG4gIHJldHVybiByYW5kb21BVG9CKGNlbnRlciAtIGYsIGNlbnRlciArIGYsIElOVCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUcmFuc2Zvcm0oYSkge1xyXG4gIHJldHVybiBhICogTWF0aC5QSSAvIDE4MDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL01hdGhVdGlscy5qcyIsImltcG9ydCB7IEVVTEVSIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNhbEludGVncmF0aW9uIHtcblxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCBFVUxFUjtcblxuICAgIHRoaXMuaW50ZWdyYXRlID0gdGhpcy5pbnRlZ3JhdGU7XG4gICAgdGhpcy5ldWxlckludGVncmF0ZSA9IHRoaXMuZXVsZXJJbnRlZ3JhdGU7XG4gIH1cblxuICBpbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcbiAgICB0aGlzLmV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKTtcbiAgfVxuXG4gIGV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKSB7XG4gICAgaWYgKCFwYXJ0aWNsZS5zbGVlcCkge1xuICAgICAgcGFydGljbGUub2xkLnAuY29weShwYXJ0aWNsZS5wKTtcbiAgICAgIHBhcnRpY2xlLm9sZC52LmNvcHkocGFydGljbGUudik7XG4gICAgICBwYXJ0aWNsZS5hLm11bHRpcGx5U2NhbGFyKDEgLyBwYXJ0aWNsZS5tYXNzKTtcbiAgICAgIHBhcnRpY2xlLnYuYWRkKHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIodGltZSkpO1xuICAgICAgcGFydGljbGUucC5hZGQocGFydGljbGUub2xkLnYubXVsdGlwbHlTY2FsYXIodGltZSkpO1xuICAgICAgaWYgKGRhbXBpbmcpe1xuICAgICAgICBwYXJ0aWNsZS52Lm11bHRpcGx5U2NhbGFyKGRhbXBpbmcpO1xuICAgICAgfVxuICAgICAgcGFydGljbGUuYS5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvTnVtZXJpY2FsSW50ZWdyYXRpb24uanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgeyBkZWdyZWVUcmFuc2Zvcm0gfSBmcm9tICcuLi9tYXRoL01hdGhVdGlscyc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplcykge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGluaXRpYWxpemVzLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gaW5pdGlhbGl6ZXNbaV07XHJcbiAgICBpZiAoaW5pdGlhbGl6ZSBpbnN0YW5jZW9mIEluaXRpYWxpemUpe1xyXG4gICAgICBpbml0aWFsaXplLmluaXQoZW1pdHRlciwgcGFydGljbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kRW1pdHRlcihlbWl0dGVyLCBwYXJ0aWNsZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplKXtcclxuICBVdGlsLnNldFZlY3RvcjJEQnlPYmplY3QocGFydGljbGUsIGluaXRpYWxpemUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kRW1pdHRlcihlbWl0dGVyLCBwYXJ0aWNsZSkge1xyXG4gIGlmIChlbWl0dGVyLmJpbmRFbWl0dGVyKSB7XHJcbiAgICBwYXJ0aWNsZS5wLmFkZChlbWl0dGVyLnApO1xyXG4gICAgcGFydGljbGUudi5hZGQoZW1pdHRlci52KTtcclxuICAgIHBhcnRpY2xlLmEuYWRkKGVtaXR0ZXIuYSk7XHJcbiAgICBwYXJ0aWNsZS52LnJvdGF0ZShkZWdyZWVUcmFuc2Zvcm0oZW1pdHRlci5yb3RhdGlvbikpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemVVdGlsLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdGlhbGl6ZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cmVzZXQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0aW5pdChlbWl0dGVyLCBwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHBhcnRpY2xlKSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxpemUoZW1pdHRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCkge1xyXG5cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9Jbml0aWFsaXplLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBNaW5pU2lnbmFsQmluZGluZyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWxCaW5kaW5nKGZuLCBvbmNlLCB0aGlzQXJnKSB7XG4gICAgaWYgKG9uY2UgPT09IHVuZGVmaW5lZCkgb25jZSA9IGZhbHNlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWxCaW5kaW5nKTtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fb25jZSA9IG9uY2U7XG4gICAgdGhpcy5fdGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgdGhpcy5fbmV4dCA9IHRoaXMuX3ByZXYgPSB0aGlzLl9vd25lciA9IG51bGw7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbEJpbmRpbmcsIFt7XG4gICAga2V5OiAnZGV0YWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgICAgaWYgKHRoaXMuX293bmVyID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLl9vd25lci5kZXRhY2godGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWluaVNpZ25hbEJpbmRpbmc7XG59KSgpO1xuXG5mdW5jdGlvbiBfYWRkTWluaVNpZ25hbEJpbmRpbmcoc2VsZiwgbm9kZSkge1xuICBpZiAoIXNlbGYuX2hlYWQpIHtcbiAgICBzZWxmLl9oZWFkID0gbm9kZTtcbiAgICBzZWxmLl90YWlsID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLl90YWlsLl9uZXh0ID0gbm9kZTtcbiAgICBub2RlLl9wcmV2ID0gc2VsZi5fdGFpbDtcbiAgICBzZWxmLl90YWlsID0gbm9kZTtcbiAgfVxuXG4gIG5vZGUuX293bmVyID0gc2VsZjtcblxuICByZXR1cm4gbm9kZTtcbn1cblxudmFyIE1pbmlTaWduYWwgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNaW5pU2lnbmFsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaW5pU2lnbmFsKTtcblxuICAgIHRoaXMuX2hlYWQgPSB0aGlzLl90YWlsID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1pbmlTaWduYWwsIFt7XG4gICAga2V5OiAnaGFuZGxlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVycygpIHtcbiAgICAgIHZhciBleGlzdHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoZXhpc3RzKSByZXR1cm4gISFub2RlO1xuXG4gICAgICB2YXIgZWUgPSBbXTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgZWUucHVzaChub2RlKTtcbiAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjaGFzKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZS5fb3duZXIgPT09IHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzcGF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcblxuICAgICAgaWYgKCFub2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl9vbmNlKSB0aGlzLmRldGFjaChub2RlKTtcbiAgICAgICAgbm9kZS5fZm4uYXBwbHkobm9kZS5fdGhpc0FyZywgYXJndW1lbnRzKTtcbiAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChmbikge1xuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNhZGQoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBGdW5jdGlvbi4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYWRkTWluaVNpZ25hbEJpbmRpbmcodGhpcywgbmV3IE1pbmlTaWduYWxCaW5kaW5nKGZuLCBmYWxzZSwgdGhpc0FyZykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI29uY2UoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBGdW5jdGlvbi4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYWRkTWluaVNpZ25hbEJpbmRpbmcodGhpcywgbmV3IE1pbmlTaWduYWxCaW5kaW5nKGZuLCB0cnVlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBNaW5pU2lnbmFsQmluZGluZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2RldGFjaCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIE1pbmlTaWduYWxCaW5kaW5nIG9iamVjdC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLl9vd25lciAhPT0gdGhpcykgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChub2RlLl9wcmV2KSBub2RlLl9wcmV2Ll9uZXh0ID0gbm9kZS5fbmV4dDtcbiAgICAgIGlmIChub2RlLl9uZXh0KSBub2RlLl9uZXh0Ll9wcmV2ID0gbm9kZS5fcHJldjtcblxuICAgICAgaWYgKG5vZGUgPT09IHRoaXMuX2hlYWQpIHtcbiAgICAgICAgdGhpcy5faGVhZCA9IG5vZGUuX25leHQ7XG4gICAgICAgIGlmIChub2RlLl9uZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fdGFpbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZSA9PT0gdGhpcy5fdGFpbCkge1xuICAgICAgICB0aGlzLl90YWlsID0gbm9kZS5fcHJldjtcbiAgICAgICAgdGhpcy5fdGFpbC5fbmV4dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX293bmVyID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaEFsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaEFsbCgpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcbiAgICAgIGlmICghbm9kZSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIHRoaXMuX2hlYWQgPSB0aGlzLl90YWlsID0gbnVsbDtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsO1xufSkoKTtcblxuTWluaVNpZ25hbC5NaW5pU2lnbmFsQmluZGluZyA9IE1pbmlTaWduYWxCaW5kaW5nO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNaW5pU2lnbmFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWluaS1zaWduYWxzL2xpYi9taW5pLXNpZ25hbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSYXRlIGZyb20gJy4vUmF0ZSc7XG5pbXBvcnQgVmVsb2NpdHkgZnJvbSAnLi9WZWxvY2l0eSc7XG5pbXBvcnQgTGlmZSBmcm9tICcuL0xpZmUnO1xuaW1wb3J0IE1hc3MgZnJvbSAnLi9NYXNzJztcbmltcG9ydCBSYWRpdXMgZnJvbSAnLi9SYWRpdXMnO1xuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xuXG5leHBvcnQgeyBSYXRlLCBWZWxvY2l0eSwgTGlmZSwgTWFzcywgUmFkaXVzLCBQb3NpdGlvbiB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IHsgTUVBU1VSRSB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xyXG5pbXBvcnQgUG9sYXIyRCBmcm9tICcuLi9tYXRoL1BvbGFyMkQnO1xyXG5pbXBvcnQgeyByYW5kb21BVG9CLCByYW5kb21GbG9hdGluZyB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlbG9jaXR5IGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHRjb25zdHJ1Y3RvcihycGFuLCB0aGFwYW4sIHR5cGUpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUocnBhbik7XHJcblx0XHR0aGlzLnRoYVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoYXBhbik7XHJcblx0XHR0aGlzLnR5cGUgPSBVdGlsLmluaXRWYWx1ZSh0eXBlLCAndmVjdG9yJyk7XHJcblxyXG5cdFx0Ly8gc3BlZWQgb3B0aW1pemF0aW9uc1xyXG5cdFx0dGhpcy5QT0xBUiA9ICdwb2xhcic7XHJcblx0XHR0aGlzLlAgPSAncCc7XHJcblx0XHR0aGlzLnJQYW5WYWwgPSB0aGlzLnJQYW4uZ2V0VmFsdWUoKTtcclxuXHRcdHRoaXMubm9ybWFsaXplZFBJID0gTWF0aC5QSSAvIDE4MDtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHJwYW4sIHRoYXBhbiwgdHlwZSkge1xyXG5cdFx0dGhpcy5yUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUocnBhbik7XHJcblx0XHR0aGlzLnRoYVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoYXBhbik7XHJcblx0XHR0aGlzLnR5cGUgPSBVdGlsLmluaXRWYWx1ZSh0eXBlLCAndmVjdG9yJyk7XHJcblx0fVxyXG5cclxuXHRub3JtYWxpemVWZWxvY2l0eSh2cikge1xyXG5cdFx0cmV0dXJuIHZyICogTUVBU1VSRTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHRpZiAodGhpcy50eXBlID09IHRoaXMuUCB8fCB0aGlzLnR5cGUgPT0gdGhpcy5QIHx8IHRoaXMudHlwZSA9PSB0aGlzLlBPTEFSKSB7XHJcblx0XHRcdGNvbnN0IHRoYVBhbk5vcm0gPSByYW5kb21BVG9CKHRoaXMudGhhUGFuLmEsIHRoaXMudGhhUGFuLmIpKnRoaXMubm9ybWFsaXplZFBJO1xyXG5cdFx0XHRjb25zdCBwb2xhcjJkID0gbmV3IFBvbGFyMkQodGhpcy5ub3JtYWxpemVWZWxvY2l0eSh0aGlzLnJQYW5WYWwpLCB0aGFQYW5Ob3JtKTtcclxuXHRcdFx0dGFyZ2V0LnYueCA9IHBvbGFyMmQuZ2V0WCgpO1xyXG5cdFx0XHR0YXJnZXQudi55ID0gcG9sYXIyZC5nZXRZKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0YXJnZXQudi54ID0gdGhpcy5ub3JtYWxpemVWZWxvY2l0eSh0aGlzLnJQYW4uZ2V0VmFsdWUoKSk7XHJcblx0XHRcdHRhcmdldC52LnkgPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMudGhhUGFuLmdldFZhbHVlKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4vVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9sYXIyRCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHIsIHRoYSl7XHJcblx0XHR0aGlzLnIgPSBNYXRoLmFicyhyKSB8fCAwO1xyXG5cdFx0dGhpcy50aGEgPSB0aGEgfHwgMDtcclxuXHR9XHJcblxyXG5cdHNldChyLCB0aGEpIHtcclxuXHJcblx0XHR0aGlzLnIgPSByO1xyXG5cdFx0dGhpcy50aGEgPSB0aGE7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRSKHIpIHtcclxuXHJcblx0XHR0aGlzLnIgPSByO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0VGhhKHRoYSkge1xyXG5cclxuXHRcdHRoaXMudGhhID0gdGhhO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvcHkocCkge1xyXG5cclxuXHRcdHRoaXMuciA9IHAucjtcclxuXHRcdHRoaXMudGhhID0gcC50aGE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0dG9WZWN0b3IoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMuZ2V0WCgpLCB0aGlzLmdldFkoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRYKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuciAqIE1hdGguc2luKHRoaXMudGhhKTtcclxuXHR9XHJcblxyXG5cdGdldFkoKSB7XHJcblx0XHRyZXR1cm4gLXRoaXMuciAqIE1hdGguY29zKHRoaXMudGhhKTtcclxuXHR9XHJcblxyXG5cdG5vcm1hbGl6ZSgpIHtcclxuXHJcblx0XHR0aGlzLnIgPSAxO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRlcXVhbHModikge1xyXG5cclxuXHRcdHJldHVybiAoKHYuciA9PT0gdGhpcy5yICkgJiYgKHYudGhhID09PSB0aGlzLnRoYSApICk7XHJcblxyXG5cdH1cclxuXHJcblx0dG9BcnJheSgpIHtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuciwgdGhpcy50aGFdO1xyXG5cclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0dGhpcy5yID0gMC4wO1xyXG5cdFx0dGhpcy50aGEgPSAwLjA7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGNsb25lKCkge1xyXG5cclxuXHRcdHJldHVybiBuZXcgUG9sYXIyRCh0aGlzLnIsIHRoaXMudGhhKTtcclxuXHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL1BvbGFyMkQuanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZSBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGMpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5saWZlUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHRhcmdldCkge1xyXG5cdFx0aWYgKHRoaXMubGlmZVBhbi5hID09IEluZmluaXR5KXtcclxuXHRcdFx0dGFyZ2V0LmxpZmUgPSBJbmZpbml0eTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0YXJnZXQubGlmZSA9IHRoaXMubGlmZVBhbi5nZXRWYWx1ZSgpO1x0XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNzIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhLCBiLCBjKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNzUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuICAgICAgICB0YXJnZXQubWFzcyA9IHRoaXMubWFzc1Bhbi5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luaXRpYWxpemUvTWFzcy5qcyIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpdXMgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGEsIGIsIGMpIHtcclxuICAgIFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJhZGl1cyA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KGEsIGIsIGMpe1xyXG5cdFx0dGhpcy5yYWRpdXMgPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS5yYWRpdXMgPSB0aGlzLnJhZGl1cy5nZXRWYWx1ZSgpO1xyXG5cdFx0cGFydGljbGUudHJhbnNmb3JtLm9sZFJhZGl1cyA9IHBhcnRpY2xlLnJhZGl1cztcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5pdGlhbGl6ZS9SYWRpdXMuanMiLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHpvbmUpIHtcclxuICAgIFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnpvbmUgPSB6b25lIHx8IG5ldyBQb2ludFpvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCh6b25lKXtcclxuXHRcdHRoaXMuem9uZSA9IHpvbmUgfHwgbmV3IFBvaW50Wm9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHR0aGlzLnpvbmUuZ2V0UG9zaXRpb24oKTtcclxuXHRcdHRhcmdldC5wLnggPSB0aGlzLnpvbmUudmVjdG9yLng7XHJcblx0XHR0YXJnZXQucC55ID0gdGhpcy56b25lLnZlY3Rvci55O1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbml0aWFsaXplL1Bvc2l0aW9uLmpzIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Rab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueCArIE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoO1xyXG5cdFx0dGhpcy52ZWN0b3IueSA9IHRoaXMueSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodDtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09ICdkZWFkJykge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSlcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09ICdib3VuZCcpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdH0gZWxzZSBpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzIDwgdGhpcy55KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSAnY3Jvc3MnKSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnggKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnggJiYgcGFydGljbGUudi54IDw9IDApXHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54ICsgdGhpcy53aWR0aCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aCAmJiBwYXJ0aWNsZS52LnggPj0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnggPSB0aGlzLnggLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblxyXG5cdFx0XHRpZiAocGFydGljbGUucC55ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy55ICYmIHBhcnRpY2xlLnYueSA8PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0ICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRlbHNlIGlmIChwYXJ0aWNsZS5wLnkgLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCAmJiBwYXJ0aWNsZS52LnkgPj0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvUmVjdFpvbmUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnZlY3RvciA9IG5ldyBQcm90b24uVmVjdG9yMkQoMCwgMCk7XHJcblx0XHR0aGlzLnJhbmRvbSA9IDA7XHJcblx0XHR0aGlzLmNyb3NzVHlwZSA9ICdkZWFkJztcclxuXHRcdHRoaXMuYWxlcnQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblxyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvWm9uZS5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueDtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdGFsZXJ0KCdTb3JyeSBQb2ludFpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zc2luZyBtZXRob2QnKTtcclxuXHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL1BvaW50Wm9uZS5qcyIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lWm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4MSwgeTEsIHgyLCB5MiwgZGlyZWN0aW9uKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGlmICh4MiAtIHgxID49IDApIHtcclxuXHRcdFx0dGhpcy54MSA9IHgxO1xyXG5cdFx0XHR0aGlzLnkxID0geTE7XHJcblx0XHRcdHRoaXMueDIgPSB4MjtcclxuXHRcdFx0dGhpcy55MiA9IHkyO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy54MSA9IHgyO1xyXG5cdFx0XHR0aGlzLnkxID0geTI7XHJcblx0XHRcdHRoaXMueDIgPSB4MTtcclxuXHRcdFx0dGhpcy55MiA9IHkxO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5keCA9IHRoaXMueDIgLSB0aGlzLngxO1xyXG5cdFx0dGhpcy5keSA9IHRoaXMueTIgLSB0aGlzLnkxO1xyXG5cdFx0dGhpcy5taW54ID0gTWF0aC5taW4odGhpcy54MSwgdGhpcy54Mik7XHJcblx0XHR0aGlzLm1pbnkgPSBNYXRoLm1pbih0aGlzLnkxLCB0aGlzLnkyKTtcclxuXHRcdHRoaXMubWF4eCA9IE1hdGgubWF4KHRoaXMueDEsIHRoaXMueDIpO1xyXG5cdFx0dGhpcy5tYXh5ID0gTWF0aC5tYXgodGhpcy55MSwgdGhpcy55Mik7XHJcblx0XHR0aGlzLmRvdCA9IHRoaXMueDIgKiB0aGlzLnkxIC0gdGhpcy54MSAqIHRoaXMueTI7XHJcblx0XHR0aGlzLnh4eXkgPSB0aGlzLmR4ICogdGhpcy5keCArIHRoaXMuZHkgKiB0aGlzLmR5O1xyXG5cdFx0dGhpcy5ncmFkaWVudCA9IHRoaXMuZ2V0R3JhZGllbnQoKTtcclxuXHRcdHRoaXMubGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcclxuXHRcdHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8ICc+JztcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueDEgKyB0aGlzLnJhbmRvbSAqIHRoaXMubGVuZ3RoICogTWF0aC5jb3ModGhpcy5ncmFkaWVudCk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55MSArIHRoaXMucmFuZG9tICogdGhpcy5sZW5ndGggKiBNYXRoLnNpbih0aGlzLmdyYWRpZW50KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiZGVhZFwiKSB7XHJcblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PSBcIj5cIiB8fCB0aGlzLmRpcmVjdGlvbiA9PSBcIlJcIiB8fCB0aGlzLmRpcmVjdGlvbiA9PSBcInJpZ2h0XCIgfHwgdGhpcy5kaXJlY3Rpb24gPT0gXCJkb3duXCIpIHtcclxuXHRcdFx0XHR0aGlzLmdldFJhbmdlKHBhcnRpY2xlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoIXNlbGYuZ2V0RGlyZWN0aW9uKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSlcclxuXHRcdFx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImJvdW5kXCIpIHtcclxuXHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHNlbGYuZ2V0RGlzdGFuY2UocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpIDw9IHBhcnRpY2xlLnJhZGl1cykge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGYuZHggPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlbGYuZHkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS52LnkgKj0gLTE7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldFN5bW1ldHJpYyhwYXJ0aWNsZS52KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImNyb3NzXCIpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0XHRhbGVydCgnU29ycnkgbGluZVpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zcyBtZXRob2QnKTtcclxuXHRcdFx0XHR0aGlzLmFsZXJ0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldERpcmVjdGlvbih4LCB5KSB7XHJcblx0XHR2YXIgQSA9IHRoaXMuZHk7XHJcblx0XHR2YXIgQiA9IC10aGlzLmR4O1xyXG5cdFx0dmFyIEMgPSB0aGlzLmRvdDtcclxuXHRcdHZhciBEID0gQiA9PSAwID8gMSA6IEI7XHJcblx0XHRpZiAoKEEgKiB4ICsgQiAqIHkgKyBDKSAqIEQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXREaXN0YW5jZSh4LCB5KSB7XHJcblx0XHR2YXIgQSA9IHRoaXMuZHk7XHJcblx0XHR2YXIgQiA9IC10aGlzLmR4O1xyXG5cdFx0dmFyIEMgPSB0aGlzLmRvdDtcclxuXHRcdHZhciBEID0gKEEgKiB4ICsgQiAqIHkgKyBDKTtcclxuXHRcdHJldHVybiBEIC8gTWF0aC5zcXJ0KHRoaXMueHh5eSk7XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWModikge1xyXG5cdFx0dmFyIHRoYTIgPSB2LmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhMSA9IHRoaXMuZ2V0R3JhZGllbnQoKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gdi54O1xyXG5cdFx0dmFyIG9sZHkgPSB2Lnk7XHJcblx0XHR2LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0di55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHRcdHJldHVybiB2O1xyXG5cdH1cclxuXHJcblx0Z2V0R3JhZGllbnQoKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5hdGFuMih0aGlzLmR5LCB0aGlzLmR4KTtcclxuXHR9XHJcblxyXG5cdGdldFJhbmdlKHBhcnRpY2xlLCBmdW4pIHtcclxuXHRcdHZhciBhbmdsZSA9IE1hdGguYWJzKHRoaXMuZ2V0R3JhZGllbnQoKSk7XHJcblx0XHRpZiAoYW5nbGUgPD0gTWF0aC5QSSAvIDQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCA8IHRoaXMubWF4eCAmJiBwYXJ0aWNsZS5wLnggPiB0aGlzLm1pbngpIHtcclxuXHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSA8IHRoaXMubWF4eSAmJiBwYXJ0aWNsZS5wLnkgPiB0aGlzLm1pbnkpIHtcclxuXHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TGVuZ3RoKCkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmR4ICogdGhpcy5keCArIHRoaXMuZHkgKiB0aGlzLmR5KVxyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImRlYWRcIikge1xyXG5cdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT0gXCI+XCIgfHwgdGhpcy5kaXJlY3Rpb24gPT0gXCJSXCIgfHwgdGhpcy5kaXJlY3Rpb24gPT0gXCJyaWdodFwiIHx8IHRoaXMuZGlyZWN0aW9uID09IFwiZG93blwiKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJib3VuZFwiKSB7XHJcblx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChzZWxmLmdldERpc3RhbmNlKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSA8PSBwYXJ0aWNsZS5yYWRpdXMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmR4ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLmR5ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5nZXRTeW1tZXRyaWMocGFydGljbGUudik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJjcm9zc1wiKSB7XHJcblx0XHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5IGxpbmVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3pvbmUvTGluZVpvbmUuanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGltYWdlRGF0YSwgeCwgeSwgZCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMucmVzZXQoaW1hZ2VEYXRhLCB4LCB5LCBkKTtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGltYWdlRGF0YSwgeCwgeSwgZCkge1xyXG5cdFx0dGhpcy5pbWFnZURhdGEgPSBpbWFnZURhdGE7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMuZCA9IGQgfHwgMjtcclxuXHRcdHRoaXMudmVjdG9ycyA9IFtdO1xyXG5cdFx0dGhpcy5zZXRWZWN0b3JzKCk7XHJcblx0fVxyXG5cclxuXHRzZXRWZWN0b3JzKCkge1xyXG5cdFx0dmFyIGksIGo7XHJcblx0XHR2YXIgbGVuZ3RoMSA9IHRoaXMuaW1hZ2VEYXRhLndpZHRoO1xyXG5cdFx0dmFyIGxlbmd0aDIgPSB0aGlzLmltYWdlRGF0YS5oZWlnaHQ7XHJcblx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDE7IGkgKz0gdGhpcy5kKSB7XHJcblx0XHRcdGZvciAoIGogPSAwOyBqIDwgbGVuZ3RoMjsgaiArPSB0aGlzLmQpIHtcclxuXHRcdFx0XHR2YXIgaW5kZXggPSAoKGogPj4gMCkgKiBsZW5ndGgxICsgKGkgPj4gMCkpICogNDtcclxuXHRcdFx0XHRpZiAodGhpcy5pbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy52ZWN0b3JzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHR4IDogaSArIHRoaXMueCxcclxuXHRcdFx0XHRcdFx0eSA6IGogKyB0aGlzLnlcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Z2V0Qm91bmQoeCwgeSkge1xyXG5cdFx0dmFyIGluZGV4ID0gKCh5ID4+IDApICogdGhpcy5pbWFnZURhdGEud2lkdGggKyAoeCA+PiAwKSkgKiA0O1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA+IDApXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnZlY3Rvci5jb3B5KHRoaXMudmVjdG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnZlY3RvcnMubGVuZ3RoKV0pO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29sb3IoeCwgeSkge1xyXG5cdFx0eCAtPSB0aGlzLng7XHJcblx0XHR5IC09IHRoaXMueTtcclxuXHRcdHZhciBpID0gKCh5ID4+IDApICogdGhpcy5pbWFnZURhdGEud2lkdGggKyAoeCA+PiAwKSkgKiA0O1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ciA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaV0sXHJcblx0XHRcdGcgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAxXSxcclxuXHRcdFx0YiA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDJdLFxyXG5cdFx0XHRhIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgM11cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiZGVhZFwiKSB7XHJcblx0XHRcdGlmICh0aGlzLmdldEJvdW5kKHBhcnRpY2xlLnAueCAtIHRoaXMueCwgcGFydGljbGUucC55IC0gdGhpcy55KSlcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSBmYWxzZTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJib3VuZFwiKSB7XHJcblx0XHRcdGlmICghdGhpcy5nZXRCb3VuZChwYXJ0aWNsZS5wLnggLSB0aGlzLngsIHBhcnRpY2xlLnAueSAtIHRoaXMueSkpXHJcblx0XHRcdFx0cGFydGljbGUudi5uZWdhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvem9uZS9JbWFnZVpvbmUuanMiLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgsIHksIHJhZGl1cykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcblx0XHR0aGlzLmFuZ2xlID0gMDtcclxuXHRcdHRoaXMuY2VudGVyID0ge1xyXG5cdFx0XHR4IDogdGhpcy54LFxyXG5cdFx0XHR5IDogdGhpcy55XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHR0aGlzLmFuZ2xlID0gTWF0aC5QSSAqIDIgKiBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueCArIHRoaXMucmFuZG9tICogdGhpcy5yYWRpdXMgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkgKyB0aGlzLnJhbmRvbSAqIHRoaXMucmFkaXVzICogTWF0aC5zaW4odGhpcy5hbmdsZSk7XHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRzZXRDZW50ZXIoeCwgeSkge1xyXG5cdFx0dGhpcy5jZW50ZXIueCA9IHg7XHJcblx0XHR0aGlzLmNlbnRlci55ID0geTtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgZCA9IHBhcnRpY2xlLnAuZGlzdGFuY2VUbyh0aGlzLmNlbnRlcik7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJkZWFkXCIpIHtcclxuXHRcdFx0aWYgKGQgLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnJhZGl1cylcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJib3VuZFwiKSB7XHJcblx0XHRcdGlmIChkICsgcGFydGljbGUucmFkaXVzID49IHRoaXMucmFkaXVzKVxyXG5cdFx0XHRcdHRoaXMuZ2V0U3ltbWV0cmljKHBhcnRpY2xlKTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJjcm9zc1wiKSB7XHJcblx0XHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5IENpcmNsZVpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zcyBtZXRob2QnKTtcclxuXHRcdFx0XHR0aGlzLmFsZXJ0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFN5bW1ldHJpYyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIHRoYTIgPSBwYXJ0aWNsZS52LmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhMSA9IHRoaXMuZ2V0R3JhZGllbnQocGFydGljbGUpO1xyXG5cdFx0dmFyIHRoYSA9IDIgKiAodGhhMSAtIHRoYTIpO1xyXG5cdFx0dmFyIG9sZHggPSBwYXJ0aWNsZS52Lng7XHJcblx0XHR2YXIgb2xkeSA9IHBhcnRpY2xlLnYueTtcclxuXHRcdHBhcnRpY2xlLnYueCA9IG9sZHggKiBNYXRoLmNvcyh0aGEpIC0gb2xkeSAqIE1hdGguc2luKHRoYSk7XHJcblx0XHRwYXJ0aWNsZS52LnkgPSBvbGR4ICogTWF0aC5zaW4odGhhKSArIG9sZHkgKiBNYXRoLmNvcyh0aGEpO1xyXG5cdH1cclxuXHJcblx0Z2V0R3JhZGllbnQocGFydGljbGUpIHtcclxuXHRcdHJldHVybiAtTWF0aC5QSSAvIDIgKyBNYXRoLmF0YW4yKHBhcnRpY2xlLnAueSAtIHRoaXMuY2VudGVyLnksIHBhcnRpY2xlLnAueCAtIHRoaXMuY2VudGVyLngpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy96b25lL0NpcmNsZVpvbmUuanMiLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFscGhhIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cclxuXHRcdHRoaXMucmVzZXQoYSwgYiwgdGhpcy5saWZlKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiQWxwaGFcIjtcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yICdhJyBhbmQgJ2InXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gYVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBiXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVF1YXJrLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zYW1lID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLmEgPSBVdGlsLnNldFNwYW5WYWx1ZShhIHx8IDEpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYik7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBuZXcgYWxwaGEgdmFsdWUgb2YgdGhlIHBhcnRpY2xlXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGluaXRpYWxpemVcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UXVhcmsuUGFydGljbGV9IHBhcnRpY2xlIEEgc2luZ2xlIFF1YXJrIGdlbmVyYXRlZCBwYXJ0aWNsZVxyXG5cdCAqL1xyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICh0aGlzLnNhbWUpe1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCID0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1F1YXJrLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG4gXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRwYXJ0aWNsZS5hbHBoYSA9IHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgKyAocGFydGljbGUudHJhbnNmb3JtLmFscGhhQSAtIHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIpICogdGhpcy5lbmVyZ3k7XHJcblx0XHRpZiAocGFydGljbGUuYWxwaGEgPCAwLjAwMSlcclxuXHRcdFx0cGFydGljbGUuYWxwaGEgPSAwO1xyXG5cdH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW91ci9BbHBoYS5qcyIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCB7IE1FQVNVUkUgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuaW1wb3J0IGdldEVhc2luZ0J5TmFtZSBmcm9tICcuLi9tYXRoL2Vhc2UnO1xyXG5cclxuXHJcbmNvbnN0IEJFSEFWSU9VUl9JRF9CQVNFID0gMHhGRkZGRjtcclxubGV0IHVpZCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihsaWZlLCBlYXNpbmcgPSAnZWFzZUxpbmVhcicpIHtcclxuXHRcdHRoaXMuaWQgPSBCRUhBVklPVVJfSURfQkFTRSArIHVpZCsrO1xyXG5cdFx0dGhpcy5saWZlID0gbGlmZSB8fCBJbmZpbml0eTtcclxuXHRcdHRoaXMuZWFzaW5nID0gZ2V0RWFzaW5nQnlOYW1lKGVhc2luZyk7XHJcblx0XHR0aGlzLmFnZSA9IDA7XHJcblx0XHR0aGlzLmVuZXJneSA9IDE7XHJcblx0XHR0aGlzLmRlYWQgPSBmYWxzZTtcclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5uYW1lID0gJ0JlaGF2aW91cic7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMubGlmZSA9IGxpZmUgfHwgSW5maW5pdHk7XHJcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBnZXRFYXNpbmdCeU5hbWUoJ2Vhc2VMaW5lYXInKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIGZvcmNlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVGb3JjZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gZm9yY2UgXHJcblx0ICovXHJcblx0bm9ybWFsaXplRm9yY2UoZm9yY2UpIHtcclxuXHRcdHJldHVybiBmb3JjZS5tdWx0aXBseVNjYWxhcihNRUFTVVJFKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIHZhbHVlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVWYWx1ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcclxuXHQgKi9cclxuXHRub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlICogTUVBU1VSRTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgdGhlIGJlaGF2aW91cidzIHBhcmFtZXRlcnMgZm9yIGFsbCBwYXJ0aWNsZXNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHR0aGlzLmFnZSArPSB0aW1lO1xyXG5cdFx0aWYgKHRoaXMuYWdlID49IHRoaXMubGlmZSB8fCB0aGlzLmRlYWQpIHtcclxuXHRcdFx0dGhpcy5lbmVyZ3kgPSAwO1xyXG5cdFx0XHR0aGlzLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBzY2FsZSA9IHRoaXMuZWFzaW5nKHBhcnRpY2xlLmFnZSAvIHBhcnRpY2xlLmxpZmUpO1xyXG5cdFx0XHR0aGlzLmVuZXJneSA9IE1hdGgubWF4KDEgLSBzY2FsZSwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIERlc3RvcnkgdGhpcyBiZWhhdmlvdXJcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgZGVzdHJveVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICovXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHZhciBpbmRleDtcclxuXHRcdHZhciBsZW5ndGggPSB0aGlzLnBhcmVudHMubGVuZ3RoLCBpO1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLnBhcmVudHNbaV0ucmVtb3ZlQmVoYXZpb3VyKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQmVoYXZpb3VyLmpzIiwiY29uc3QgZWFzaW5nID0ge1xyXG5cdGVhc2VMaW5lYXIgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHZhbHVlLCAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0UXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLShNYXRoLnBvdygodmFsdWUgLSAxKSwgMikgLSAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRRdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgMik7XHJcblx0XHRyZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAtIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMyk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dEN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAoTWF0aC5wb3coKHZhbHVlIC0gMSksIDMpICsgMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0Q3ViaWMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCAzKTtcclxuXHRcdHJldHVybiAwLjUgKiAoTWF0aC5wb3coKHZhbHVlIC0gMiksIDMpICsgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluUXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHZhbHVlLCA0KTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0UXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5wb3coKHZhbHVlIC0gMSksIDQpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0UXVhcnQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCA0KTtcclxuXHRcdHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIE1hdGgucG93KHZhbHVlLCAzKSAtIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC1NYXRoLmNvcyh2YWx1ZSAqIChNYXRoLlBJIC8gMikpICsgMTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0U2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zaW4odmFsdWUgKiAoTWF0aC5QSSAvIDIpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRTaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAoLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogdmFsdWUpIC0gMSkpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICh2YWx1ZSA9PT0gMCkgPyAwIDogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dEV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICh2YWx1ZSA9PT0gMSkgPyAxIDogLU1hdGgucG93KDIsIC0xMCAqIHZhbHVlKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0RXhwbyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUgPT09IDApXHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0aWYgKHZhbHVlID09PSAxKVxyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKTtcclxuXHRcdHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdmFsdWUpICsgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluQ2lyYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLShNYXRoLnNxcnQoMSAtICh2YWx1ZSAqIHZhbHVlKSkgLSAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0Q2lyYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdygodmFsdWUgLSAxKSwgMikpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dENpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB2YWx1ZSAqIHZhbHVlKSAtIDEpO1xyXG5cdFx0cmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh2YWx1ZSAtPSAyKSAqIHZhbHVlKSArIDEpO1xyXG5cdH0sXHJcblx0XHJcblx0ZWFzZUluQmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gKHZhbHVlKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSAtIHMpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRCYWNrIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhciBzID0gMS43MDE1ODtcclxuXHRcdHJldHVybiAoIHZhbHVlID0gdmFsdWUgLSAxKSAqIHZhbHVlICogKChzICsgMSkgKiB2YWx1ZSArIHMpICsgMTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRCYWNrIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhciBzID0gMS43MDE1ODtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiAodmFsdWUgKiB2YWx1ZSAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHZhbHVlIC0gcykpO1xyXG5cdFx0cmV0dXJuIDAuNSAqICgodmFsdWUgLT0gMikgKiB2YWx1ZSAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHZhbHVlICsgcykgKyAyKTtcclxuXHR9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRFYXNpbmdCeU5hbWUobmFtZSkge1xyXG5cdHJldHVybiBlYXNpbmdbbmFtZV1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9lYXNlLmpzIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJhY3Rpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YXJnZXRQb3NpdGlvbiwgZm9yY2UsIHJhZGl1cywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbiB8fCBuZXcgVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkF0dHJhY3Rpb25cIjtcclxuXHRcdFxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkF0dHJhY3Rpb25cclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2ZvcmNlJyBhbmQgJ3JhZGl1cydcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEfSB0YXJnZXRQb3NpdGlvbiB0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZm9yY2U9MTAwXVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcmFkaXVzPTEwMDBdXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy50YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIHx8IG5ldyBQcm90b24uVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5BdHRyYWN0aW9uXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLmNvcHkodGhpcy50YXJnZXRQb3NpdGlvbik7XHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5zdWIocGFydGljbGUucCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gdGhpcy5hdHRyYWN0aW9uRm9yY2UubGVuZ3RoU3EoKTtcclxuXHRcdGlmICh0aGlzLmxlbmd0aFNxID4gMC4wMDAwMDQgJiYgdGhpcy5sZW5ndGhTcSA8IHRoaXMucmFkaXVzU3EpIHtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2Uubm9ybWFsaXplKCk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKDEgLSB0aGlzLmxlbmd0aFNxIC8gdGhpcy5yYWRpdXNTcSk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKHRoaXMuZm9yY2UpO1xyXG5cdFx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmF0dHJhY3Rpb25Gb3JjZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQXR0cmFjdGlvbi5qcyIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbWl0dGVyLCBtYXNzLCBjYWxsYmFjaywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChlbWl0dGVyLCBtYXNzLCBjYWxsYmFjayk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkNvbGxpc2lvblwiO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sbGlzaW9uXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIHRvIG1hc3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLkVtaXR0ZXJ9IFx0W2VtaXR0ZXI9bnVsbF0gXHRcdHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBcdFx0W21hc3M9dHJ1ZV1cdFx0XHRcclxuXHQgKiBAcGFyYW0ge0NhbGxiYWNrfVx0IFx0W2NhbGxiYWNrPW51bGxdXHRcdHRoZSBjYWxsYmFjayBhZnRlciB0aGUgY29sbGlzaW9uXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdFtsaWZlPUluZmluaXR5XSBcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQoZW1pdHRlciwgbWFzcywgY2FsbGJhY2ssIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5lbWl0dGVyID0gZW1pdHRlciB8fCBudWxsO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcyB8fCB0cnVlO1xyXG5cdFx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XHJcblx0XHR0aGlzLmNvbGxpc2lvblBvb2wgPSBbXTtcclxuXHRcdHRoaXMuZGVsdGEgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0bGV0IG5ld1Bvb2wgPSB0aGlzLmVtaXR0ZXIucGFydGljbGVzLnNsaWNlKGluZGV4KTtcclxuXHRcdGxldCBvdGhlclBhcnRpY2xlO1xyXG5cdFx0bGV0IGxlbmd0aFNxO1xyXG5cdFx0bGV0IG92ZXJsYXA7XHJcblx0XHRsZXQgYXZlcmFnZU1hc3MxLCBhdmVyYWdlTWFzczI7XHJcblx0XHRsZXQgbGVuZ3RoID0gbmV3UG9vbC5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG90aGVyUGFydGljbGUgPSBuZXdQb29sW2ldO1xyXG5cdFx0XHRpZiAob3RoZXJQYXJ0aWNsZSAhPT0gcGFydGljbGUpIHtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLmNvcHkob3RoZXJQYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLnN1YihwYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHRsZW5ndGhTcSA9IHRoaXMuZGVsdGEubGVuZ3RoU3EoKTtcclxuXHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHBhcnRpY2xlLnJhZGl1cyArIG90aGVyUGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0XHRpZiAobGVuZ3RoU3EgPD0gZGlzdGFuY2UgKiBkaXN0YW5jZSkge1xyXG5cdFx0XHRcdFx0b3ZlcmxhcCA9IGRpc3RhbmNlIC0gTWF0aC5zcXJ0KGxlbmd0aFNxKTtcclxuXHRcdFx0XHRcdG92ZXJsYXAgKz0gMC41O1xyXG5cdFx0XHRcdFx0Y29uc3QgdG90YWxNYXNzID0gcGFydGljbGUubWFzcyArIG90aGVyUGFydGljbGUubWFzcztcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMSA9IHRoaXMubWFzcyA/IG90aGVyUGFydGljbGUubWFzcyAvIHRvdGFsTWFzcyA6IDAuNTtcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMiA9IHRoaXMubWFzcyA/IHBhcnRpY2xlLm1hc3MgLyB0b3RhbE1hc3MgOiAwLjU7XHJcblx0XHRcdFx0XHRwYXJ0aWNsZS5wLmFkZCh0aGlzLmRlbHRhLmNsb25lKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIC1hdmVyYWdlTWFzczEpKTtcclxuXHRcdFx0XHRcdG90aGVyUGFydGljbGUucC5hZGQodGhpcy5kZWx0YS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihvdmVybGFwICogYXZlcmFnZU1hc3MyKSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jYWxsYmFjayl7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FsbGJhY2socGFydGljbGUsIG90aGVyUGFydGljbGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvdXIvQ29sbGlzaW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==