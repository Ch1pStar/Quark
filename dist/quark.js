(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Quark", [], factory);
	else if(typeof exports === 'object')
		exports["Quark"] = factory();
	else
		root["Quark"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-signals/lib/mini-signals.js":
/*!*******************************************************!*\
  !*** ./node_modules/mini-signals/lib/mini-signals.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),

/***/ "./src/behaviour/Alpha.js":
/*!********************************!*\
  !*** ./src/behaviour/Alpha.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alpha; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Alpha =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(Alpha, _Behaviour);

  function Alpha(a, b, life, easing) {
    var _this;

    _classCallCheck(this, Alpha);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Alpha).call(this, life, easing));

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
    key: "reset",
    value: function reset(a, b, life, easing) {
      if (b == null || b == undefined) {
        this.same = true;
      } else {
        this.same = false;
      }

      this.a = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(a || 1);
      this.b = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(b);

      if (life) {
        _get(_getPrototypeOf(Alpha.prototype), "reset", this).call(this, life, easing);
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
    key: "initialize",
    value: function initialize(particle) {
      particle.transform.alphaA = this.a.getValue();

      if (this.same) {
        particle.transform.alphaB = particle.transform.alphaA;
      } else {
        particle.transform.alphaB = this.b.getValue();
      }
    }
  }, {
    key: "applyBehaviour",

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
      _get(_getPrototypeOf(Alpha.prototype), "applyBehaviour", this).call(this, particle, time, index);

      particle.alpha = particle.transform.alphaB + (particle.transform.alphaA - particle.transform.alphaB) * this.energy;
      if (particle.alpha < 0.001) particle.alpha = 0;
    }
  }]);

  return Alpha;
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/behaviour/Attraction.js":
/*!*************************************!*\
  !*** ./src/behaviour/Attraction.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attraction; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Attraction =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(Attraction, _Behaviour);

  function Attraction(targetPosition, force, radius, life, easing) {
    var _this;

    _classCallCheck(this, Attraction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Attraction).call(this, life, easing));
    _this.targetPosition = targetPosition || new _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"]();
    _this.radius = radius || 1000;
    _this.force = _this.normalizeValue(force) || 100;
    _this.radiusSq = _this.radius * _this.radius;
    _this.attractionForce = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
    key: "reset",
    value: function reset(targetPosition, force, radius, life, easing) {
      this.targetPosition = targetPosition || new Proton.Vector2D();
      this.radius = radius || 1000;
      this.force = this.normalizeValue(force) || 100;
      this.radiusSq = this.radius * this.radius;
      this.attractionForce = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.lengthSq = 0;

      if (life) {
        _get(_getPrototypeOf(Attraction.prototype), "reset", this).call(this, life, easing);
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
    key: "applyBehaviour",
    value: function applyBehaviour(particle, time, index) {
      _get(_getPrototypeOf(Attraction.prototype), "applyBehaviour", this).call(this, particle, time, index);

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
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/behaviour/Behaviour.js":
/*!************************************!*\
  !*** ./src/behaviour/Behaviour.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Behaviour; });
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
/* harmony import */ var _emitter_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../emitter/const */ "./src/emitter/const.js");
/* harmony import */ var _math_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/ease */ "./src/math/ease.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var BEHAVIOUR_ID_BASE = 0xFFFFF;
var uid = 0;

var Behaviour =
/*#__PURE__*/
function () {
  function Behaviour(life) {
    var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easeLinear';

    _classCallCheck(this, Behaviour);

    this.id = BEHAVIOUR_ID_BASE + uid++;
    this.life = life || Infinity;
    this.easing = Object(_math_ease__WEBPACK_IMPORTED_MODULE_2__["default"])(easing);
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
    key: "reset",
    value: function reset(life, easing) {
      this.life = life || Infinity;
      this.easing = easing || Object(_math_ease__WEBPACK_IMPORTED_MODULE_2__["default"])('easeLinear');
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
    key: "normalizeForce",
    value: function normalizeForce(force) {
      return force.multiplyScalar(_emitter_const__WEBPACK_IMPORTED_MODULE_1__["MEASURE"]);
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
    key: "normalizeValue",
    value: function normalizeValue(value) {
      return value * _emitter_const__WEBPACK_IMPORTED_MODULE_1__["MEASURE"];
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
    key: "initialize",
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
    key: "applyBehaviour",
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
    key: "destroy",
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



/***/ }),

/***/ "./src/behaviour/Collision.js":
/*!************************************!*\
  !*** ./src/behaviour/Collision.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collision; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Collision =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(Collision, _Behaviour);

  function Collision(emitter, mass, callback, life, easing) {
    var _this;

    _classCallCheck(this, Collision);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collision).call(this, life, easing));

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
    key: "reset",
    value: function reset(emitter, mass, callback, life, easing) {
      this.emitter = emitter || null;
      this.mass = mass || true;
      this.callback = callback || null;
      this.collisionPool = [];
      this.delta = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"]();

      if (life) {
        _get(_getPrototypeOf(Collision.prototype), "reset", this).call(this, life, easing);
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
    key: "applyBehaviour",
    value: function applyBehaviour(particle, time, index) {
      var newPool = this.emitter.particles.slice(index);
      var otherParticle;
      var lengthSq;
      var overlap;
      var averageMass1, averageMass2;
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
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/behaviour/CrossZone.js":
/*!************************************!*\
  !*** ./src/behaviour/CrossZone.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrossZone; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CrossZone =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(CrossZone, _Behaviour);

  function CrossZone(zone, crossType, life, easing) {
    var _this;

    _classCallCheck(this, CrossZone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CrossZone).call(this, life, easing));

    _this.reset(zone, crossType);

    _this.name = 'CrossZone';
    _this.applyBehaviour = _this.applyBehaviour;
    return _this;
  }

  _createClass(CrossZone, [{
    key: "reset",
    value: function reset(zone, crossType, life, easing) {
      this.zone = zone;
      this.zone.crossType = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].initValue(crossType, CrossZone.CROSS_TYPES.DEAD);

      if (life) {
        _get(_getPrototypeOf(CrossZone.prototype), "reset", this).call(this, life, easing);
      }
    }
  }, {
    key: "applyBehaviour",
    value: function applyBehaviour(particle, time, index) {
      _get(_getPrototypeOf(CrossZone.prototype), "applyBehaviour", this).call(this, particle, time, index);

      this.zone.crossing(particle);
    }
  }]);

  return CrossZone;
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);


CrossZone.CROSS_TYPES = {
  CROSS: 1 << 0,
  DEAD: 1 << 2,
  BOUND: 1 << 3
};

/***/ }),

/***/ "./src/behaviour/Force.js":
/*!********************************!*\
  !*** ./src/behaviour/Force.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Force; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Force =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(Force, _Behaviour);

  function Force(fx, fy, life, easing) {
    var _this;

    _classCallCheck(this, Force);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Force).call(this, life, easing));
    _this.force = _this.normalizeForce(new _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](fx, fy));
    _this.name = "Force";
    _this.applyBehaviour = _this.applyBehaviour;
    return _this;
  }

  _createClass(Force, [{
    key: "reset",
    value: function reset(fx, fy, life, easing) {
      this.force = this.normalizeForce(new _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](fx, fy));

      if (life) {
        _get(_getPrototypeOf(Force.prototype), "reset", this).call(this, life, easing);
      }
    }
  }, {
    key: "applyBehaviour",
    value: function applyBehaviour(particle, time, index) {
      _get(_getPrototypeOf(Force.prototype), "applyBehaviour", this).call(this, particle, time, index);

      particle.a.add(this.force);
    }
  }]);

  return Force;
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/behaviour/Gravity.js":
/*!**********************************!*\
  !*** ./src/behaviour/Gravity.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gravity; });
/* harmony import */ var _Force__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Force */ "./src/behaviour/Force.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Gravity =
/*#__PURE__*/
function (_Force) {
  _inherits(Gravity, _Force);

  function Gravity(g, life, easing) {
    var _this;

    _classCallCheck(this, Gravity);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gravity).call(this, 0, g, life, easing));
    _this.name = 'Gravity';
    _this.applyBehaviour = _this.applyBehaviour;
    return _this;
  }

  _createClass(Gravity, [{
    key: "reset",
    value: function reset(g, life, easing) {
      _get(_getPrototypeOf(Gravity.prototype), "reset", this).call(this, 0, g, life, easing);
    }
  }, {
    key: "applyBehaviour",
    value: function applyBehaviour(particle, time, index) {
      _get(_getPrototypeOf(Gravity.prototype), "applyBehaviour", this).call(this, particle, time, index);

      particle.a.add(this.force);
    }
  }]);

  return Gravity;
}(_Force__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/behaviour/GravityWell.js":
/*!**************************************!*\
  !*** ./src/behaviour/GravityWell.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GravityWell; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GravityWell =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(GravityWell, _Behaviour);

  function GravityWell(centerPoint, force, life, easing) {
    var _this;

    _classCallCheck(this, GravityWell);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GravityWell).call(this, life, easing));
    _this.distanceVec = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this.centerPoint = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].initValue(centerPoint, new _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"]());
    _this.force = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].initValue(_this.normalizeValue(force), 100);
    _this.name = "GravityWell";
    _this.applyBehaviour = _this.applyBehaviour;
    return _this;
  }

  _createClass(GravityWell, [{
    key: "reset",
    value: function reset(centerPoint, force, life, easing) {
      this.distanceVec = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.centerPoint = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].initValue(centerPoint, new _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"]());
      this.force = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].initValue(this.normalizeValue(force), 100);

      if (life) {
        _get(_getPrototypeOf(GravityWell.prototype), "reset", this).call(this, life, easing);
      }
    }
  }, {
    key: "initialize",
    value: function initialize(particle) {}
  }, {
    key: "applyBehaviour",
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
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/behaviour/RandomDrift.js":
/*!**************************************!*\
  !*** ./src/behaviour/RandomDrift.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandomDrift; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var RandomDrift =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(RandomDrift, _Behaviour);

  function RandomDrift(driftX, driftY, delay, life, easing) {
    var _this;

    _classCallCheck(this, RandomDrift);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RandomDrift).call(this, life, easing));

    _this.reset(driftX, driftY, delay);

    _this.time = 0;
    _this.name = "RandomDrift";
    _this.applyBehaviour = _this.applyBehaviour;
    return _this;
  }

  _createClass(RandomDrift, [{
    key: "reset",
    value: function reset(driftX, driftY, delay, life, easing) {
      this.panFoce = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__["default"](driftX, driftY);
      this.panFoce = this.normalizeForce(this.panFoce);
      this.delay = delay;

      if (life) {
        RandomDrift._super_.prototype.reset.call(this, life, easing);
      }
    }
  }, {
    key: "applyBehaviour",
    value: function applyBehaviour(particle, time, index) {
      _get(_getPrototypeOf(RandomDrift.prototype), "applyBehaviour", this).call(this, particle, time, index);

      this.time += time;

      if (this.time >= this.delay) {
        particle.a.addXY(Object(_math_MathUtils__WEBPACK_IMPORTED_MODULE_3__["randomAToB"])(-this.panFoce.x, this.panFoce.x), Object(_math_MathUtils__WEBPACK_IMPORTED_MODULE_3__["randomAToB"])(-this.panFoce.y, this.panFoce.y));
        this.time = 0;
      }

      ;
    }
  }]);

  return RandomDrift;
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/behaviour/Repulsion.js":
/*!************************************!*\
  !*** ./src/behaviour/Repulsion.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Repulsion; });
/* harmony import */ var _Attraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attraction */ "./src/behaviour/Attraction.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Repulsion =
/*#__PURE__*/
function (_Attraction) {
  _inherits(Repulsion, _Attraction);

  function Repulsion(targetPosition, force, radius, life, easing) {
    var _this;

    _classCallCheck(this, Repulsion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Repulsion).call(this, targetPosition, force, radius, life, easing));
    _this.force *= -1;
    _this.name = "Repulsion";
    _this.applyBehaviour = _this.applyBehaviour;
    return _this;
  }

  _createClass(Repulsion, [{
    key: "reset",
    value: function reset(targetPosition, force, radius, life, easing) {
      _get(_getPrototypeOf(Repulsion.prototype), "reset", this).call(this, targetPosition, force, radius, life, easing);

      this.force *= -1;
    }
  }]);

  return Repulsion;
}(_Attraction__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/behaviour/Rotate.js":
/*!*********************************!*\
  !*** ./src/behaviour/Rotate.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rotate; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Rotate =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(Rotate, _Behaviour);

  function Rotate(a, b, style, life, easing) {
    var _this;

    _classCallCheck(this, Rotate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rotate).call(this, life, easing));

    _this.reset(a, b, style);

    _this.name = 'Rotate';
    _this.applyBehaviour = _this.applyBehaviour;
    return _this;
  }

  _createClass(Rotate, [{
    key: "reset",
    value: function reset(a, b, style, life, easing) {
      if (b == null || b == undefined) {
        this.same = true;
      } else {
        this.same = false;
      }

      this.a = _core_Util__WEBPACK_IMPORTED_MODULE_2__["default"].setSpanValue(a || Rotate.TYPE.VELOCITY);
      this.b = _core_Util__WEBPACK_IMPORTED_MODULE_2__["default"].setSpanValue(b || 0);
      this.style = style || Rotate.STYLES.TO;

      if (life) {
        _get(_getPrototypeOf(Rotate.prototype), "reset", this).call(this, life, easing);
      }
    }
  }, {
    key: "initialize",
    value: function initialize(particle) {
      particle.rotation = this.a.getValue();
      particle.transform.rotationA = this.a.getValue();

      if (!this.same) {
        particle.transform.rotationB = this.b.getValue();
      }
    }
  }, {
    key: "applyBehaviour",
    value: function applyBehaviour(particle, time, index) {
      _get(_getPrototypeOf(Rotate.prototype), "applyBehaviour", this).call(this, particle, time, index);

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
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);


Rotate.STYLES = {
  TO: 1 << 0,
  FROM: 1 << 1
};
Rotate.TYPE = {
  VELOCITY: 1 << 0
};

/***/ }),

/***/ "./src/behaviour/Scale.js":
/*!********************************!*\
  !*** ./src/behaviour/Scale.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scale; });
/* harmony import */ var _Behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Scale =
/*#__PURE__*/
function (_Behaviour) {
  _inherits(Scale, _Behaviour);

  function Scale(a, b, life, easing) {
    var _this;

    _classCallCheck(this, Scale);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scale).call(this, life, easing));

    _this.reset(a, b);

    _this.name = 'Scale';
    _this.applyBehaviour = _this.applyBehaviour;
    return _this;
  }

  _createClass(Scale, [{
    key: "reset",
    value: function reset(a, b, life, easing) {
      if (b == null || b == undefined) {
        this.same = true;
      } else {
        this.same = false;
      }

      this.a = _core_Util__WEBPACK_IMPORTED_MODULE_2__["default"].setSpanValue(_core_Util__WEBPACK_IMPORTED_MODULE_2__["default"].initValue(a, 1));
      this.b = _core_Util__WEBPACK_IMPORTED_MODULE_2__["default"].setSpanValue(b);

      if (life) {
        suoer.reset(life, easing);
      }
    }
  }, {
    key: "initialize",
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
    key: "applyBehaviour",
    value: function applyBehaviour(particle, time, index) {
      _get(_getPrototypeOf(Scale.prototype), "applyBehaviour", this).call(this, particle, time, index);

      particle.scale = particle.transform.scaleB + (particle.transform.scaleA - particle.transform.scaleB) * this.energy;

      if (particle.scale < 0.0001) {
        particle.scale = 0;
      }

      particle.radius = particle.transform.oldRadius * particle.scale;
    }
  }]);

  return Scale;
}(_Behaviour__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/core/Particle.js":
/*!******************************!*\
  !*** ./src/core/Particle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Particle; });
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var uid = 0;

var Particle =
/*#__PURE__*/
function () {
  function Particle() {
    _classCallCheck(this, Particle);

    this.id = uid++;
    this.reset(true);
    this.sprite = null;
    this.update = this.update;
    this.destroy = this.destroy;
  }

  _createClass(Particle, [{
    key: "getDirection",
    value: function getDirection() {
      return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI);
    }
  }, {
    key: "reset",
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
        this.p = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.v = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.a = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.old = {
          p: new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["default"](),
          v: new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["default"](),
          a: new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["default"]()
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
    key: "update",
    value: function update(index, time) {
      var age = this.age + time;

      if (age >= this.life) {
        this.destroy();
        return false;
      }

      this.age = age;
      var length = this.behaviours.length;
      var i;

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
    key: "addBehaviour",
    value: function addBehaviour(behaviour) {
      this.behaviours.push(behaviour);

      if (behaviour.hasOwnProperty('parents')) {
        behaviour.parents.push(this);
      }

      behaviour.initialize(this);
    }
  }, {
    key: "addBehaviours",
    value: function addBehaviours(behaviours) {
      var length = behaviours.length,
          i;

      for (i = 0; i < length; i++) {
        this.addBehaviour(behaviours[i]);
      }
    }
  }, {
    key: "removeBehaviour",
    value: function removeBehaviour(behaviour) {
      var index = this.behaviours.indexOf(behaviour);

      if (index > -1) {
        var behaviour = this.behaviours.splice(index, 1);
        behaviour.parents = null;
      }
    }
  }, {
    key: "removeAllBehaviours",
    value: function removeAllBehaviours() {
      this.behaviours.length = 0;
    }
    /**
     * Destory this particle
     * @method destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllBehaviours();
      this.energy = 0;
      this.dead = true;
      this.parent = null;
    }
  }]);

  return Particle;
}();



/***/ }),

/***/ "./src/core/Util.js":
/*!**************************!*\
  !*** ./src/core/Util.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
/* harmony import */ var _math_Span__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Span */ "./src/math/Span.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ __webpack_exports__["default"] = ({
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
    if (_typeof(postionOrX) == 'object') {
      return postionOrX;
    } else {
      var vector2d = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_0__["default"](postionOrX, y);
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
    if (a.constructor === _math_Span__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      return a;
    } else {
      if (!b) {
        return new _math_Span__WEBPACK_IMPORTED_MODULE_1__["default"](a);
      } else {
        if (!c) return new _math_Span__WEBPACK_IMPORTED_MODULE_1__["default"](a, b);else return new _math_Span__WEBPACK_IMPORTED_MODULE_1__["default"](a, b, c);
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
    if (pan.constructor === _math_Span__WEBPACK_IMPORTED_MODULE_1__["default"]) return pan.getValue();else return pan;
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
});

/***/ }),

/***/ "./src/emitter/Emitter.js":
/*!********************************!*\
  !*** ./src/emitter/Emitter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Emitter; });
/* harmony import */ var _core_Particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Particle */ "./src/core/Particle.js");
/* harmony import */ var _initialize_Rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialize/Rate */ "./src/initialize/Rate.js");
/* harmony import */ var _math_NumericalIntegration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/NumericalIntegration */ "./src/math/NumericalIntegration.js");
/* harmony import */ var _initialize_InitializeUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../initialize/InitializeUtil */ "./src/initialize/InitializeUtil.js");
/* harmony import */ var mini_signals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mini-signals */ "./node_modules/mini-signals/lib/mini-signals.js");
/* harmony import */ var mini_signals__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mini_signals__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Emitter =
/*#__PURE__*/
function (_Particle) {
  _inherits(Emitter, _Particle);

  function Emitter() {
    var _this;

    _classCallCheck(this, Emitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Emitter).call(this));
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

    _this.rate = new _initialize_Rate__WEBPACK_IMPORTED_MODULE_1__["default"](1, .1);
    _this.integrator = new _math_NumericalIntegration__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this.maxParticles = 50000;
    _this.particleCreated = new mini_signals__WEBPACK_IMPORTED_MODULE_4___default.a();
    _this.particleUpdate = new mini_signals__WEBPACK_IMPORTED_MODULE_4___default.a();
    _this.particleDead = new mini_signals__WEBPACK_IMPORTED_MODULE_4___default.a();
    _this.update = _this.update;
    _this.emitting = _this.emitting;
    _this.createParticle = _this.createParticle;
    _this.integrate = _this.integrate;
    _this.activateParticle = _this.activateParticle;
    _this.updateParticle = _this.updateParticle;
    return _this;
  }

  _createClass(Emitter, [{
    key: "createParticle",

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
    key: "activateParticle",
    value: function activateParticle(index, time) {
      var particles = this.particles;
      var particle = particles[index];

      if (!particle) {
        particles[index] = particle = new _core_Particle__WEBPACK_IMPORTED_MODULE_0__["default"]();
      }

      var initializes = this.initializes;
      var behaviours = this.behaviours;
      particle.reset();
      Object(_initialize_InitializeUtil__WEBPACK_IMPORTED_MODULE_3__["default"])(this, particle, initializes);
      particle.addBehaviours(behaviours);
      particle.update(index, time);
      this.particleCreated.dispatch(particle);
    }
  }, {
    key: "updateParticle",
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
    key: "integrate",
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
    key: "emitting",
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
    key: "emit",
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
    key: "stopEmit",
    value: function stopEmit() {
      this.emitTotalTimes = -1;
      this.emitTime = 0;
    }
    /**
     * remove current all particles
     * @method removeAllParticles
     */

  }, {
    key: "removeAllParticles",
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
    key: "addSelfInitialize",
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
    key: "addInitialize",
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
    key: "removeInitialize",
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
    key: "removeInitializers",
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
    key: "addBehaviour",
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
    key: "removeBehaviour",
    value: function removeBehaviour(behaviour) {
      var index = this.behaviours.indexOf(behaviour);
      if (index > -1) this.behaviours.splice(index, 1);
    }
    /**
     * remove all behaviours
     * @method removeAllBehaviours
     */

  }, {
    key: "removeAllBehaviours",
    value: function removeAllBehaviours() {
      this.behaviours.length = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      this.age += time;

      if (this.dead || this.age >= this.life) {
        this.destroy();
      }

      this.emitting(time);
      this.integrate(time);
    }
  }, {
    key: "destroy",

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
    key: "maxParticles",
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
}(_core_Particle__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/emitter/const.js":
/*!******************************!*\
  !*** ./src/emitter/const.js ***!
  \******************************/
/*! exports provided: POOL_MAX, TIME_STEP, USE_CLOCK, MEASURE, EULER, RK2, RK4, VERLET, PARTICLE_CREATED, PARTICLE_UPDATE, PARTICLE_SLEEP, PARTICLE_DEAD, EMITTER_ADDED, EMITTER_REMOVED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POOL_MAX", function() { return POOL_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_STEP", function() { return TIME_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_CLOCK", function() { return USE_CLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEASURE", function() { return MEASURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EULER", function() { return EULER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RK2", function() { return RK2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RK4", function() { return RK4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERLET", function() { return VERLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_CREATED", function() { return PARTICLE_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_UPDATE", function() { return PARTICLE_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_SLEEP", function() { return PARTICLE_SLEEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_DEAD", function() { return PARTICLE_DEAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMITTER_ADDED", function() { return EMITTER_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMITTER_REMOVED", function() { return EMITTER_REMOVED; });
// constants
var POOL_MAX = 1000;
var TIME_STEP = 60;
var USE_CLOCK = false;
var MEASURE = 100; // integration types

var EULER = 'euler';
var RK2 = 'runge-kutta2';
var RK4 = 'runge-kutta4';
var VERLET = 'verlet'; // events

var PARTICLE_CREATED = 'partilcleCreated';
var PARTICLE_UPDATE = 'partilcleUpdate';
var PARTICLE_SLEEP = 'particleSleep';
var PARTICLE_DEAD = 'partilcleDead';
var EMITTER_ADDED = 'emitterAdded';
var EMITTER_REMOVED = 'emitterRemoved';

/***/ }),

/***/ "./src/emitter/index.js":
/*!******************************!*\
  !*** ./src/emitter/index.js ***!
  \******************************/
/*! exports provided: Emitter, POOL_MAX, TIME_STEP, USE_CLOCK, MEASURE, EULER, RK2, RK4, VERLET, PARTICLE_CREATED, PARTICLE_UPDATE, PARTICLE_SLEEP, PARTICLE_DEAD, EMITTER_ADDED, EMITTER_REMOVED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/emitter/const.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POOL_MAX", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["POOL_MAX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIME_STEP", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["TIME_STEP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USE_CLOCK", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["USE_CLOCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEASURE", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["MEASURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EULER", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["EULER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RK2", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["RK2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RK4", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["RK4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERLET", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["VERLET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_CREATED", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["PARTICLE_CREATED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_UPDATE", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["PARTICLE_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_SLEEP", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["PARTICLE_SLEEP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_DEAD", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["PARTICLE_DEAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMITTER_ADDED", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["EMITTER_ADDED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMITTER_REMOVED", function() { return _const__WEBPACK_IMPORTED_MODULE_0__["EMITTER_REMOVED"]; });

/* harmony import */ var _Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emitter */ "./src/emitter/Emitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return _Emitter__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: getSpan, Span, RectZone, PointZone, LineZone, ImageZone, CircleZone, Alpha, Attraction, Collision, Repulsion, CrossZone, Force, Gravity, GravityWell, RandomDrift, Rotate, Scale, Emitter, Rate, Velocity, Life, Mass, Radius, Position, POOL_MAX, TIME_STEP, USE_CLOCK, MEASURE, EULER, RK2, RK4, VERLET, PARTICLE_CREATED, PARTICLE_UPDATE, PARTICLE_SLEEP, PARTICLE_DEAD, EMITTER_ADDED, EMITTER_REMOVED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpan", function() { return getSpan; });
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ "./src/emitter/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["Emitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POOL_MAX", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["POOL_MAX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TIME_STEP", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["TIME_STEP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USE_CLOCK", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["USE_CLOCK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEASURE", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["MEASURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EULER", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["EULER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RK2", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["RK2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RK4", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["RK4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERLET", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["VERLET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_CREATED", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["PARTICLE_CREATED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_UPDATE", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["PARTICLE_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_SLEEP", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["PARTICLE_SLEEP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PARTICLE_DEAD", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["PARTICLE_DEAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMITTER_ADDED", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["EMITTER_ADDED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMITTER_REMOVED", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__["EMITTER_REMOVED"]; });

/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize */ "./src/initialize/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rate", function() { return _initialize__WEBPACK_IMPORTED_MODULE_1__["Rate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Velocity", function() { return _initialize__WEBPACK_IMPORTED_MODULE_1__["Velocity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Life", function() { return _initialize__WEBPACK_IMPORTED_MODULE_1__["Life"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mass", function() { return _initialize__WEBPACK_IMPORTED_MODULE_1__["Mass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radius", function() { return _initialize__WEBPACK_IMPORTED_MODULE_1__["Radius"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _initialize__WEBPACK_IMPORTED_MODULE_1__["Position"]; });

/* harmony import */ var _math_Span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math/Span */ "./src/math/Span.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _math_Span__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _zone_RectZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zone/RectZone */ "./src/zone/RectZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectZone", function() { return _zone_RectZone__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _zone_PointZone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zone/PointZone */ "./src/zone/PointZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointZone", function() { return _zone_PointZone__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _zone_LineZone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zone/LineZone */ "./src/zone/LineZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineZone", function() { return _zone_LineZone__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _zone_ImageZone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zone/ImageZone */ "./src/zone/ImageZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageZone", function() { return _zone_ImageZone__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _zone_CircleZone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zone/CircleZone */ "./src/zone/CircleZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleZone", function() { return _zone_CircleZone__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _behaviour_Alpha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviour/Alpha */ "./src/behaviour/Alpha.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alpha", function() { return _behaviour_Alpha__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _behaviour_Attraction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviour/Attraction */ "./src/behaviour/Attraction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Attraction", function() { return _behaviour_Attraction__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _behaviour_Collision__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviour/Collision */ "./src/behaviour/Collision.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collision", function() { return _behaviour_Collision__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _behaviour_Repulsion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviour/Repulsion */ "./src/behaviour/Repulsion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Repulsion", function() { return _behaviour_Repulsion__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./behaviour/CrossZone */ "./src/behaviour/CrossZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CrossZone", function() { return _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _behaviour_Force__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviour/Force */ "./src/behaviour/Force.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Force", function() { return _behaviour_Force__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _behaviour_Gravity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./behaviour/Gravity */ "./src/behaviour/Gravity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gravity", function() { return _behaviour_Gravity__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _behaviour_GravityWell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./behaviour/GravityWell */ "./src/behaviour/GravityWell.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GravityWell", function() { return _behaviour_GravityWell__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _behaviour_RandomDrift__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./behaviour/RandomDrift */ "./src/behaviour/RandomDrift.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RandomDrift", function() { return _behaviour_RandomDrift__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _behaviour_Rotate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./behaviour/Rotate */ "./src/behaviour/Rotate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rotate", function() { return _behaviour_Rotate__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _behaviour_Scale__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./behaviour/Scale */ "./src/behaviour/Scale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scale", function() { return _behaviour_Scale__WEBPACK_IMPORTED_MODULE_18__["default"]; });




















function getSpan(a, b, center) {
  return new _math_Span__WEBPACK_IMPORTED_MODULE_2__["default"](a, b, center);
}

 // global.Quark = exports;

/***/ }),

/***/ "./src/initialize/Initialize.js":
/*!**************************************!*\
  !*** ./src/initialize/Initialize.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Initialize; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Initialize =
/*#__PURE__*/
function () {
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



/***/ }),

/***/ "./src/initialize/InitializeUtil.js":
/*!******************************************!*\
  !*** ./src/initialize/InitializeUtil.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initialize; });
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");



function initialize(emitter, particle, initializes) {
  var length = initializes.length;

  for (var i = 0; i < length; i++) {
    var _initialize = initializes[i];

    if (_initialize instanceof _Initialize__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      _initialize.init(emitter, particle);
    } else {
      init(emitter, particle, _initialize);
    }
  }

  bindEmitter(emitter, particle);
}

function init(emitter, particle, initialize) {
  _core_Util__WEBPACK_IMPORTED_MODULE_2__["default"].setVector2DByObject(particle, initialize);
}

function bindEmitter(emitter, particle) {
  if (emitter.bindEmitter) {
    particle.p.add(emitter.p);
    particle.v.add(emitter.v);
    particle.a.add(emitter.a);
    particle.v.rotate(Object(_math_MathUtils__WEBPACK_IMPORTED_MODULE_1__["degreeTransform"])(emitter.rotation));
  }
}

/***/ }),

/***/ "./src/initialize/Life.js":
/*!********************************!*\
  !*** ./src/initialize/Life.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Life; });
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Life =
/*#__PURE__*/
function (_Initialize) {
  _inherits(Life, _Initialize);

  function Life(a, b, c) {
    var _this;

    _classCallCheck(this, Life);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Life).call(this));
    _this.lifePan = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(a, b, c);
    return _this;
  }

  _createClass(Life, [{
    key: "initialize",
    value: function initialize(target) {
      if (this.lifePan.a == Infinity) {
        target.life = Infinity;
      } else {
        target.life = this.lifePan.getValue();
      }
    }
  }]);

  return Life;
}(_Initialize__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/initialize/Mass.js":
/*!********************************!*\
  !*** ./src/initialize/Mass.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mass; });
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Mass =
/*#__PURE__*/
function (_Initialize) {
  _inherits(Mass, _Initialize);

  function Mass(a, b, c) {
    var _this;

    _classCallCheck(this, Mass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mass).call(this));
    _this.massPan = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(a, b, c);
    return _this;
  }

  _createClass(Mass, [{
    key: "initialize",
    value: function initialize(target) {
      target.mass = this.massPan.getValue();
    }
  }]);

  return Mass;
}(_Initialize__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/initialize/Position.js":
/*!************************************!*\
  !*** ./src/initialize/Position.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Position; });
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Position =
/*#__PURE__*/
function (_Initialize) {
  _inherits(Position, _Initialize);

  function Position(zone) {
    var _this;

    _classCallCheck(this, Position);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Position).call(this));
    _this.zone = zone || new PointZone();
    return _this;
  }

  _createClass(Position, [{
    key: "reset",
    value: function reset(zone) {
      this.zone = zone || new PointZone();
    }
  }, {
    key: "initialize",
    value: function initialize(target) {
      this.zone.getPosition();
      target.p.x = this.zone.vector.x;
      target.p.y = this.zone.vector.y;
    }
  }]);

  return Position;
}(_Initialize__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/initialize/Radius.js":
/*!**********************************!*\
  !*** ./src/initialize/Radius.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Radius; });
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Radius =
/*#__PURE__*/
function (_Initialize) {
  _inherits(Radius, _Initialize);

  function Radius(a, b, c) {
    var _this;

    _classCallCheck(this, Radius);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Radius).call(this));
    _this.radius = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(a, b, c);
    return _this;
  }

  _createClass(Radius, [{
    key: "reset",
    value: function reset(a, b, c) {
      this.radius = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(a, b, c);
    }
  }, {
    key: "initialize",
    value: function initialize(particle) {
      particle.radius = this.radius.getValue();
      particle.transform.oldRadius = particle.radius;
    }
  }]);

  return Radius;
}(_Initialize__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/initialize/Rate.js":
/*!********************************!*\
  !*** ./src/initialize/Rate.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rate; });
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Rate =
/*#__PURE__*/
function () {
  function Rate(numpan, timepan) {
    _classCallCheck(this, Rate);

    this.numPan = numpan;
    this.timePan = timepan;
    this.numPan = _core_Util__WEBPACK_IMPORTED_MODULE_0__["default"].setSpanValue(this.numPan);
    this.timePan = _core_Util__WEBPACK_IMPORTED_MODULE_0__["default"].setSpanValue(this.timePan);
    this.startTime = 0;
    this.nextTime = 0;
    this.init();
  }

  _createClass(Rate, [{
    key: "init",
    value: function init() {
      this.startTime = 0;
      this.nextTime = this.timePan.getValue();
    }
  }, {
    key: "getValue",
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



/***/ }),

/***/ "./src/initialize/Velocity.js":
/*!************************************!*\
  !*** ./src/initialize/Velocity.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Velocity; });
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");
/* harmony import */ var _core_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");
/* harmony import */ var _emitter_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emitter/const */ "./src/emitter/const.js");
/* harmony import */ var _math_Polar2D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/Polar2D */ "./src/math/Polar2D.js");
/* harmony import */ var _math_MathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Velocity =
/*#__PURE__*/
function (_Initialize) {
  _inherits(Velocity, _Initialize);

  function Velocity(rpan, thapan, type) {
    var _this;

    _classCallCheck(this, Velocity);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Velocity).call(this));
    _this.rPan = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(rpan);
    _this.thaPan = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(thapan);
    _this.type = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].initValue(type, 'vector'); // speed optimizations

    _this.POLAR = 'polar';
    _this.P = 'p';
    _this.rPanVal = _this.rPan.getValue();
    _this.normalizedPI = Math.PI / 180;
    return _this;
  }

  _createClass(Velocity, [{
    key: "reset",
    value: function reset(rpan, thapan, type) {
      this.rPan = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(rpan);
      this.thaPan = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].setSpanValue(thapan);
      this.type = _core_Util__WEBPACK_IMPORTED_MODULE_1__["default"].initValue(type, 'vector');
    }
  }, {
    key: "normalizeVelocity",
    value: function normalizeVelocity(vr) {
      return vr * _emitter_const__WEBPACK_IMPORTED_MODULE_2__["MEASURE"];
    }
  }, {
    key: "initialize",
    value: function initialize(target) {
      if (this.type == this.P || this.type == this.P || this.type == this.POLAR) {
        var thaPanNorm = Object(_math_MathUtils__WEBPACK_IMPORTED_MODULE_4__["randomAToB"])(this.thaPan.a, this.thaPan.b) * this.normalizedPI;
        var polar2d = new _math_Polar2D__WEBPACK_IMPORTED_MODULE_3__["default"](this.normalizeVelocity(this.rPanVal), thaPanNorm);
        target.v.x = polar2d.getX();
        target.v.y = polar2d.getY();
      } else {
        target.v.x = this.normalizeVelocity(this.rPan.getValue());
        target.v.y = this.normalizeVelocity(this.thaPan.getValue());
      }
    }
  }]);

  return Velocity;
}(_Initialize__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/initialize/index.js":
/*!*********************************!*\
  !*** ./src/initialize/index.js ***!
  \*********************************/
/*! exports provided: Rate, Velocity, Life, Mass, Radius, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rate */ "./src/initialize/Rate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rate", function() { return _Rate__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Velocity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Velocity */ "./src/initialize/Velocity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Velocity", function() { return _Velocity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Life__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Life */ "./src/initialize/Life.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Life", function() { return _Life__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Mass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mass */ "./src/initialize/Mass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mass", function() { return _Mass__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Radius__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Radius */ "./src/initialize/Radius.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radius", function() { return _Radius__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Position */ "./src/initialize/Position.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _Position__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/math/MathUtils.js":
/*!*******************************!*\
  !*** ./src/math/MathUtils.js ***!
  \*******************************/
/*! exports provided: randomAToB, randomFloating, degreeTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomAToB", function() { return randomAToB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomFloating", function() { return randomFloating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreeTransform", function() { return degreeTransform; });
function randomAToB(a, b, INT) {
  if (!INT) return a + Math.random() * (b - a);else return Math.floor(Math.random() * (b - a)) + a;
}
function randomFloating(center, f, INT) {
  return randomAToB(center - f, center + f, INT);
}
function degreeTransform(a) {
  return a * Math.PI / 180;
}

/***/ }),

/***/ "./src/math/NumericalIntegration.js":
/*!******************************************!*\
  !*** ./src/math/NumericalIntegration.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumericalIntegration; });
/* harmony import */ var _emitter_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emitter/const */ "./src/emitter/const.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NumericalIntegration =
/*#__PURE__*/
function () {
  function NumericalIntegration(type) {
    _classCallCheck(this, NumericalIntegration);

    this.type = type || _emitter_const__WEBPACK_IMPORTED_MODULE_0__["EULER"];
    this.integrate = this.integrate;
    this.eulerIntegrate = this.eulerIntegrate;
  }

  _createClass(NumericalIntegration, [{
    key: "integrate",
    value: function integrate(particle, time, damping) {
      this.eulerIntegrate(particle, time, damping);
    }
  }, {
    key: "eulerIntegrate",
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



/***/ }),

/***/ "./src/math/Polar2D.js":
/*!*****************************!*\
  !*** ./src/math/Polar2D.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polar2D; });
/* harmony import */ var _Vector2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2D */ "./src/math/Vector2D.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Polar2D =
/*#__PURE__*/
function () {
  function Polar2D(r, tha) {
    _classCallCheck(this, Polar2D);

    this.r = Math.abs(r) || 0;
    this.tha = tha || 0;
  }

  _createClass(Polar2D, [{
    key: "set",
    value: function set(r, tha) {
      this.r = r;
      this.tha = tha;
      return this;
    }
  }, {
    key: "setR",
    value: function setR(r) {
      this.r = r;
      return this;
    }
  }, {
    key: "setTha",
    value: function setTha(tha) {
      this.tha = tha;
      return this;
    }
  }, {
    key: "copy",
    value: function copy(p) {
      this.r = p.r;
      this.tha = p.tha;
      return this;
    }
  }, {
    key: "toVector",
    value: function toVector() {
      return new _Vector2D__WEBPACK_IMPORTED_MODULE_0__["default"](this.getX(), this.getY());
    }
  }, {
    key: "getX",
    value: function getX() {
      return this.r * Math.sin(this.tha);
    }
  }, {
    key: "getY",
    value: function getY() {
      return -this.r * Math.cos(this.tha);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      this.r = 1;
      return this;
    }
  }, {
    key: "equals",
    value: function equals(v) {
      return v.r === this.r && v.tha === this.tha;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.r, this.tha];
    }
  }, {
    key: "clear",
    value: function clear() {
      this.r = 0.0;
      this.tha = 0.0;
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Polar2D(this.r, this.tha);
    }
  }]);

  return Polar2D;
}();



/***/ }),

/***/ "./src/math/Span.js":
/*!**************************!*\
  !*** ./src/math/Span.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Span; });
/* harmony import */ var _MathUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathUtils */ "./src/math/MathUtils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Span =
/*#__PURE__*/
function () {
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
    key: "getValue",
    value: function getValue(INT) {
      if (this.isArray) {
        return this.a[Math.floor(this.a.length * Math.random())];
      } else {
        if (!this.center) {
          return Object(_MathUtils__WEBPACK_IMPORTED_MODULE_0__["randomAToB"])(this.a, this.b, INT);
        } else {
          return Object(_MathUtils__WEBPACK_IMPORTED_MODULE_0__["randomFloating"])(this.a, this.b, INT);
        }
      }
    }
  }]);

  return Span;
}();



/***/ }),

/***/ "./src/math/Vector2D.js":
/*!******************************!*\
  !*** ./src/math/Vector2D.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2D; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector2D =
/*#__PURE__*/
function () {
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



/***/ }),

/***/ "./src/math/ease.js":
/*!**************************!*\
  !*** ./src/math/ease.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getEasingByName; });
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

/***/ }),

/***/ "./src/zone/CircleZone.js":
/*!********************************!*\
  !*** ./src/zone/CircleZone.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointZone; });
/* harmony import */ var _Zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");
/* harmony import */ var _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviour/CrossZone */ "./src/behaviour/CrossZone.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PointZone =
/*#__PURE__*/
function (_Zone) {
  _inherits(PointZone, _Zone);

  function PointZone(x, y, radius) {
    var _this;

    _classCallCheck(this, PointZone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PointZone).call(this));
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

      if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.DEAD) {
        if (d - particle.radius > this.radius) particle.dead = true;
      } else if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.BOUND) {
        if (d + particle.radius >= this.radius) this.getSymmetric(particle);
      } else if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.CROSS) {
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
}(_Zone__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/zone/ImageZone.js":
/*!*******************************!*\
  !*** ./src/zone/ImageZone.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointZone; });
/* harmony import */ var _Zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PointZone =
/*#__PURE__*/
function (_Zone) {
  _inherits(PointZone, _Zone);

  function PointZone(imageData, x, y, d) {
    var _this;

    _classCallCheck(this, PointZone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PointZone).call(this));

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
}(_Zone__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/zone/LineZone.js":
/*!******************************!*\
  !*** ./src/zone/LineZone.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineZone; });
/* harmony import */ var _Zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");
/* harmony import */ var _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviour/CrossZone */ "./src/behaviour/CrossZone.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var LineZone =
/*#__PURE__*/
function (_Zone) {
  _inherits(LineZone, _Zone);

  function LineZone(x1, y1, x2, y2, direction) {
    var _this;

    _classCallCheck(this, LineZone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineZone).call(this));

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
    key: "getPosition",
    value: function getPosition() {
      this.random = Math.random();
      this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient);
      this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient);
      return this.vector;
    }
  }, {
    key: "crossing",
    value: function crossing(particle) {
      var self = this;

      if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.DEAD) {
        if (this.direction == 1) {
          this.getRange(particle, function () {
            if (self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
          });
        } else {
          this.getRange(particle, function () {
            if (!self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
          });
        }
      } else if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.BOUND) {
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
      } else if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.CROSS) {
        if (this.alert) {
          alert('Sorry lineZone does not support cross method');
          this.alert = false;
        }
      }
    }
  }, {
    key: "getDirection",
    value: function getDirection(x, y) {
      var A = this.dy;
      var B = -this.dx;
      var C = this.dot;
      var D = B == 0 ? 1 : B;
      if ((A * x + B * y + C) * D > 0) return true;else return false;
    }
  }, {
    key: "getDistance",
    value: function getDistance(x, y) {
      var A = this.dy;
      var B = -this.dx;
      var C = this.dot;
      var D = A * x + B * y + C;
      return D / Math.sqrt(this.xxyy);
    }
  }, {
    key: "getSymmetric",
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
    key: "getGradient",
    value: function getGradient() {
      return Math.atan2(this.dy, this.dx);
    }
  }, {
    key: "getRange",
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
    key: "getLength",
    value: function getLength() {
      return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }
  }]);

  return LineZone;
}(_Zone__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/zone/PointZone.js":
/*!*******************************!*\
  !*** ./src/zone/PointZone.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointZone; });
/* harmony import */ var _Zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PointZone =
/*#__PURE__*/
function (_Zone) {
  _inherits(PointZone, _Zone);

  function PointZone(x, y) {
    var _this;

    _classCallCheck(this, PointZone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PointZone).call(this));
    _this.x = x;
    _this.y = y;
    return _this;
  }

  _createClass(PointZone, [{
    key: "getPosition",
    value: function getPosition() {
      this.vector.x = this.x;
      this.vector.y = this.y;
      return this.vector;
    }
  }, {
    key: "crossing",
    value: function crossing(particle) {
      if (this.alert) {
        alert('Sorry PointZone does not support crossing method');
        this.alert = false;
      }
    }
  }]);

  return PointZone;
}(_Zone__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/zone/RectZone.js":
/*!******************************!*\
  !*** ./src/zone/RectZone.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RectZone; });
/* harmony import */ var _Zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");
/* harmony import */ var _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../behaviour/CrossZone */ "./src/behaviour/CrossZone.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RectZone =
/*#__PURE__*/
function (_Zone) {
  _inherits(RectZone, _Zone);

  function RectZone(x, y, width, height) {
    var _this;

    _classCallCheck(this, RectZone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RectZone).call(this));
    _this.x = x;
    _this.y = y;
    _this.width = width;
    _this.height = height;
    return _this;
  }

  _createClass(RectZone, [{
    key: "getPosition",
    value: function getPosition() {
      this.vector.x = this.x + Math.random() * this.width;
      this.vector.y = this.y + Math.random() * this.height;
      return this.vector;
    }
  }, {
    key: "crossing",
    value: function crossing(particle) {
      if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.DEAD) {
        if (particle.p.x + particle.radius < this.x) particle.dead = true;else if (particle.p.x - particle.radius > this.x + this.width) particle.dead = true;
        if (particle.p.y + particle.radius < this.y) particle.dead = true;else if (particle.p.y - particle.radius > this.y + this.height) particle.dead = true;
      } else if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.BOUND) {
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
      } else if (this.crossType == _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_1__["default"].CROSS_TYPES.CROSS) {
        if (particle.p.x + particle.radius < this.x && particle.v.x <= 0) particle.p.x = this.x + this.width + particle.radius;else if (particle.p.x - particle.radius > this.x + this.width && particle.v.x >= 0) particle.p.x = this.x - particle.radius;
        if (particle.p.y + particle.radius < this.y && particle.v.y <= 0) particle.p.y = this.y + this.height + particle.radius;else if (particle.p.y - particle.radius > this.y + this.height && particle.v.y >= 0) particle.p.y = this.y - particle.radius;
      }
    }
  }]);

  return RectZone;
}(_Zone__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/zone/Zone.js":
/*!**************************!*\
  !*** ./src/zone/Zone.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Zone; });
/* harmony import */ var _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../behaviour/CrossZone */ "./src/behaviour/CrossZone.js");
/* harmony import */ var _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Zone =
/*#__PURE__*/
function () {
  function Zone() {
    _classCallCheck(this, Zone);

    this.vector = new _math_Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
    this.random = 0;
    this.crossType = _behaviour_CrossZone__WEBPACK_IMPORTED_MODULE_0__["default"].CROSS_TYPES.DEAD;
    this.alert = true;
  }

  _createClass(Zone, [{
    key: "getPosition",
    value: function getPosition() {}
  }, {
    key: "crossing",
    value: function crossing(particle) {}
  }]);

  return Zone;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9RdWFyay93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUXVhcmsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9ub2RlX21vZHVsZXMvbWluaS1zaWduYWxzL2xpYi9taW5pLXNpZ25hbHMuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvYmVoYXZpb3VyL0FscGhhLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL2JlaGF2aW91ci9BdHRyYWN0aW9uLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL2JlaGF2aW91ci9CZWhhdmlvdXIuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvYmVoYXZpb3VyL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9iZWhhdmlvdXIvQ3Jvc3Nab25lLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL2JlaGF2aW91ci9Gb3JjZS5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9iZWhhdmlvdXIvR3Jhdml0eS5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9iZWhhdmlvdXIvR3Jhdml0eVdlbGwuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvYmVoYXZpb3VyL1JhbmRvbURyaWZ0LmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL2JlaGF2aW91ci9SZXB1bHNpb24uanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvYmVoYXZpb3VyL1JvdGF0ZS5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9iZWhhdmlvdXIvU2NhbGUuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9jb3JlL1V0aWwuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvZW1pdHRlci9FbWl0dGVyLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvaW5pdGlhbGl6ZS9Jbml0aWFsaXplVXRpbC5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9pbml0aWFsaXplL0xpZmUuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL2luaXRpYWxpemUvUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvaW5pdGlhbGl6ZS9SYWRpdXMuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL2luaXRpYWxpemUvVmVsb2NpdHkuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvaW5pdGlhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9tYXRoL01hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9tYXRoL051bWVyaWNhbEludGVncmF0aW9uLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL21hdGgvUG9sYXIyRC5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9tYXRoL1NwYW4uanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvbWF0aC9WZWN0b3IyRC5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy9tYXRoL2Vhc2UuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL3pvbmUvSW1hZ2Vab25lLmpzIiwid2VicGFjazovL1F1YXJrLy4vc3JjL3pvbmUvTGluZVpvbmUuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvem9uZS9Qb2ludFpvbmUuanMiLCJ3ZWJwYWNrOi8vUXVhcmsvLi9zcmMvem9uZS9SZWN0Wm9uZS5qcyIsIndlYnBhY2s6Ly9RdWFyay8uL3NyYy96b25lL1pvbmUuanMiXSwibmFtZXMiOlsiQWxwaGEiLCJhIiwiYiIsImxpZmUiLCJlYXNpbmciLCJyZXNldCIsIm5hbWUiLCJhcHBseUJlaGF2aW91ciIsInVuZGVmaW5lZCIsInNhbWUiLCJVdGlsIiwic2V0U3BhblZhbHVlIiwicGFydGljbGUiLCJ0cmFuc2Zvcm0iLCJhbHBoYUEiLCJnZXRWYWx1ZSIsImFscGhhQiIsInRpbWUiLCJpbmRleCIsImFscGhhIiwiZW5lcmd5IiwiQmVoYXZpb3VyIiwiQXR0cmFjdGlvbiIsInRhcmdldFBvc2l0aW9uIiwiZm9yY2UiLCJyYWRpdXMiLCJWZWN0b3IyRCIsIm5vcm1hbGl6ZVZhbHVlIiwicmFkaXVzU3EiLCJhdHRyYWN0aW9uRm9yY2UiLCJsZW5ndGhTcSIsIlByb3RvbiIsImNvcHkiLCJzdWIiLCJwIiwibm9ybWFsaXplIiwibXVsdGlwbHlTY2FsYXIiLCJhZGQiLCJCRUhBVklPVVJfSURfQkFTRSIsInVpZCIsImlkIiwiSW5maW5pdHkiLCJnZXRFYXNpbmdCeU5hbWUiLCJhZ2UiLCJkZWFkIiwicGFyZW50cyIsIk1FQVNVUkUiLCJ2YWx1ZSIsImRlc3Ryb3kiLCJzY2FsZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJpIiwicmVtb3ZlQmVoYXZpb3VyIiwiQ29sbGlzaW9uIiwiZW1pdHRlciIsIm1hc3MiLCJjYWxsYmFjayIsImNvbGxpc2lvblBvb2wiLCJkZWx0YSIsIm5ld1Bvb2wiLCJwYXJ0aWNsZXMiLCJzbGljZSIsIm90aGVyUGFydGljbGUiLCJvdmVybGFwIiwiYXZlcmFnZU1hc3MxIiwiYXZlcmFnZU1hc3MyIiwiZGlzdGFuY2UiLCJzcXJ0IiwidG90YWxNYXNzIiwiY2xvbmUiLCJDcm9zc1pvbmUiLCJ6b25lIiwiY3Jvc3NUeXBlIiwiaW5pdFZhbHVlIiwiQ1JPU1NfVFlQRVMiLCJERUFEIiwiY3Jvc3NpbmciLCJDUk9TUyIsIkJPVU5EIiwiRm9yY2UiLCJmeCIsImZ5Iiwibm9ybWFsaXplRm9yY2UiLCJHcmF2aXR5IiwiZyIsIkdyYXZpdHlXZWxsIiwiY2VudGVyUG9pbnQiLCJkaXN0YW5jZVZlYyIsInNldCIsIngiLCJ5IiwiZGlzdGFuY2VTcSIsImZhY3RvciIsInYiLCJSYW5kb21EcmlmdCIsImRyaWZ0WCIsImRyaWZ0WSIsImRlbGF5IiwicGFuRm9jZSIsIl9zdXBlcl8iLCJwcm90b3R5cGUiLCJjYWxsIiwiYWRkWFkiLCJyYW5kb21BVG9CIiwiUmVwdWxzaW9uIiwiUm90YXRlIiwic3R5bGUiLCJUWVBFIiwiVkVMT0NJVFkiLCJTVFlMRVMiLCJUTyIsInJvdGF0aW9uIiwicm90YXRpb25BIiwicm90YXRpb25CIiwiZ2V0RGlyZWN0aW9uIiwiRlJPTSIsIlNjYWxlIiwic3VvZXIiLCJzY2FsZUEiLCJvbGRSYWRpdXMiLCJzY2FsZUIiLCJQYXJ0aWNsZSIsInNwcml0ZSIsInVwZGF0ZSIsImF0YW4yIiwiUEkiLCJpbml0Iiwic2xlZXAiLCJ0YXJnZXQiLCJwYXJlbnQiLCJjb2xvciIsInZhbCIsIm9sZCIsImJlaGF2aW91cnMiLCJyZW1vdmVBbGxCZWhhdmlvdXJzIiwicmdiIiwiciIsImJlaGF2aW91ciIsInB1c2giLCJoYXNPd25Qcm9wZXJ0eSIsImluaXRpYWxpemUiLCJhZGRCZWhhdmlvdXIiLCJpbmRleE9mIiwic3BsaWNlIiwiZGVmYXVsdHMiLCJnZXRWZWN0b3IyRCIsInBvc3Rpb25PclgiLCJ2ZWN0b3IyZCIsImp1ZGdlVmVjdG9yMkQiLCJwT0JKIiwicmVzdWx0Iiwic2V0VmVjdG9yMkRCeU9iamVjdCIsInZ4IiwidnkiLCJheCIsImF5IiwiYyIsImNvbnN0cnVjdG9yIiwiU3BhbiIsImdldFNwYW5WYWx1ZSIsInBhbiIsImhleFRvUkdCIiwiaCIsImhleDE2IiwiY2hhckF0Iiwic3Vic3RyaW5nIiwicGFyc2VJbnQiLCJyZ2JUb0hleCIsInJiZyIsIkVtaXR0ZXIiLCJpbml0aWFsaXplcyIsImVtaXRUaW1lIiwiZW1pdFRvdGFsVGltZXMiLCJkYW1waW5nIiwiYmluZEVtaXR0ZXIiLCJyYXRlIiwiUmF0ZSIsImludGVncmF0b3IiLCJOdW1lcmljYWxJbnRlZ3JhdGlvbiIsIm1heFBhcnRpY2xlcyIsInBhcnRpY2xlQ3JlYXRlZCIsIk1pbmlTaWduYWwiLCJwYXJ0aWNsZVVwZGF0ZSIsInBhcnRpY2xlRGVhZCIsImVtaXR0aW5nIiwiY3JlYXRlUGFydGljbGUiLCJpbnRlZ3JhdGUiLCJhY3RpdmF0ZVBhcnRpY2xlIiwidXBkYXRlUGFydGljbGUiLCJhY3RpdmVDb3VudCIsImFjdGl2ZSIsIm4iLCJpbml0aWFsaXplRm4iLCJhZGRCZWhhdmlvdXJzIiwiZGlzcGF0Y2giLCJyZXMiLCJpc05hTiIsImZvckVhY2giLCJwT2JqIiwiaW5pdEFsbCIsImFyZ3VtZW50cyIsImluaXRpYWxpemVyIiwicmVtb3ZlSW5pdGlhbGl6ZXJzIiwicmVtb3ZlRW1pdHRlciIsIkFycmF5IiwiZmlsbCIsIlBPT0xfTUFYIiwiVElNRV9TVEVQIiwiVVNFX0NMT0NLIiwiRVVMRVIiLCJSSzIiLCJSSzQiLCJWRVJMRVQiLCJQQVJUSUNMRV9DUkVBVEVEIiwiUEFSVElDTEVfVVBEQVRFIiwiUEFSVElDTEVfU0xFRVAiLCJQQVJUSUNMRV9ERUFEIiwiRU1JVFRFUl9BRERFRCIsIkVNSVRURVJfUkVNT1ZFRCIsImdldFNwYW4iLCJjZW50ZXIiLCJJbml0aWFsaXplIiwicm90YXRlIiwiZGVncmVlVHJhbnNmb3JtIiwiTGlmZSIsImxpZmVQYW4iLCJNYXNzIiwibWFzc1BhbiIsIlBvc2l0aW9uIiwiUG9pbnRab25lIiwiZ2V0UG9zaXRpb24iLCJ2ZWN0b3IiLCJSYWRpdXMiLCJudW1wYW4iLCJ0aW1lcGFuIiwibnVtUGFuIiwidGltZVBhbiIsInN0YXJ0VGltZSIsIm5leHRUaW1lIiwiVmVsb2NpdHkiLCJycGFuIiwidGhhcGFuIiwidHlwZSIsInJQYW4iLCJ0aGFQYW4iLCJQT0xBUiIsIlAiLCJyUGFuVmFsIiwibm9ybWFsaXplZFBJIiwidnIiLCJ0aGFQYW5Ob3JtIiwicG9sYXIyZCIsIlBvbGFyMkQiLCJub3JtYWxpemVWZWxvY2l0eSIsImdldFgiLCJnZXRZIiwiSU5UIiwicmFuZG9tIiwiZmxvb3IiLCJyYW5kb21GbG9hdGluZyIsImYiLCJldWxlckludGVncmF0ZSIsImNsZWFyIiwidGhhIiwiYWJzIiwic2luIiwiY29zIiwiaXNBcnJheSIsIkVycm9yIiwidyIsImFkZFZlY3RvcnMiLCJzIiwic3ViVmVjdG9ycyIsIm1pbiIsImRpdmlkZVNjYWxhciIsImRpc3RhbmNlVG9TcXVhcmVkIiwiZHgiLCJkeSIsImwiLCJvbGRMZW5ndGgiLCJlYXNlTGluZWFyIiwiZWFzZUluUXVhZCIsInBvdyIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluU2luZSIsImVhc2VPdXRTaW5lIiwiZWFzZUluT3V0U2luZSIsImVhc2VJbkV4cG8iLCJlYXNlT3V0RXhwbyIsImVhc2VJbk91dEV4cG8iLCJlYXNlSW5DaXJjIiwiZWFzZU91dENpcmMiLCJlYXNlSW5PdXRDaXJjIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsImFuZ2xlIiwiZCIsImRpc3RhbmNlVG8iLCJnZXRTeW1tZXRyaWMiLCJhbGVydCIsInRoYTIiLCJnZXRHcmFkaWVudCIsInRoYTEiLCJvbGR4Iiwib2xkeSIsIlpvbmUiLCJpbWFnZURhdGEiLCJ2ZWN0b3JzIiwic2V0VmVjdG9ycyIsImoiLCJsZW5ndGgxIiwid2lkdGgiLCJsZW5ndGgyIiwiaGVpZ2h0IiwiZGF0YSIsImdldEJvdW5kIiwibmVnYXRlIiwiTGluZVpvbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImRpcmVjdGlvbiIsIm1pbngiLCJtaW55IiwibWF4eCIsIm1heHkiLCJkb3QiLCJ4eHl5IiwiZ3JhZGllbnQiLCJnZXRMZW5ndGgiLCJzZWxmIiwiZ2V0UmFuZ2UiLCJnZXREaXN0YW5jZSIsIkEiLCJCIiwiQyIsIkQiLCJmdW4iLCJSZWN0Wm9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUNBQWlDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFbGpCLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwS0E7QUFDQTs7SUFFcUJBLEs7Ozs7O0FBRXBCLGlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLElBQWxCLEVBQXdCQyxNQUF4QixFQUFnQztBQUFBOztBQUFBOztBQUMvQiwrRUFBTUQsSUFBTixFQUFZQyxNQUFaOztBQUVBLFVBQUtDLEtBQUwsQ0FBV0osQ0FBWCxFQUFjQyxDQUFkLEVBQWlCLE1BQUtDLElBQXRCOztBQUNBLFVBQUtHLElBQUwsR0FBWSxPQUFaO0FBRUEsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUEzQjtBQU4rQjtBQU8vQjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBY01OLEMsRUFBR0MsQyxFQUFHQyxJLEVBQU1DLE0sRUFBUTtBQUN6QixVQUFJRixDQUFDLElBQUksSUFBTCxJQUFhQSxDQUFDLElBQUlNLFNBQXRCLEVBQWdDO0FBQy9CLGFBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBS0EsSUFBTCxHQUFZLEtBQVo7QUFDQTs7QUFDRCxXQUFLUixDQUFMLEdBQVNTLGtEQUFJLENBQUNDLFlBQUwsQ0FBa0JWLENBQUMsSUFBSSxDQUF2QixDQUFUO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTUSxrREFBSSxDQUFDQyxZQUFMLENBQWtCVCxDQUFsQixDQUFUOztBQUNBLFVBQUlDLElBQUosRUFBUztBQUNSLHlFQUFZQSxJQUFaLEVBQWtCQyxNQUFsQjtBQUNBO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7OytCQVNXUSxRLEVBQVU7QUFDcEJBLGNBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsTUFBbkIsR0FBNEIsS0FBS2IsQ0FBTCxDQUFPYyxRQUFQLEVBQTVCOztBQUNBLFVBQUksS0FBS04sSUFBVCxFQUFjO0FBQ2JHLGdCQUFRLENBQUNDLFNBQVQsQ0FBbUJHLE1BQW5CLEdBQTRCSixRQUFRLENBQUNDLFNBQVQsQ0FBbUJDLE1BQS9DO0FBQ0EsT0FGRCxNQUVPO0FBQ05GLGdCQUFRLENBQUNDLFNBQVQsQ0FBbUJHLE1BQW5CLEdBQTRCLEtBQUtkLENBQUwsQ0FBT2EsUUFBUCxFQUE1QjtBQUNBO0FBQ0Q7Ozs7QUFFRDs7Ozs7Ozs7O21DQVNlSCxRLEVBQVVLLEksRUFBTUMsSyxFQUFPO0FBQ3JDLGdGQUFxQk4sUUFBckIsRUFBK0JLLElBQS9CLEVBQXFDQyxLQUFyQzs7QUFDQU4sY0FBUSxDQUFDTyxLQUFULEdBQWlCUCxRQUFRLENBQUNDLFNBQVQsQ0FBbUJHLE1BQW5CLEdBQTRCLENBQUNKLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsTUFBbkIsR0FBNEJGLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkcsTUFBaEQsSUFBMEQsS0FBS0ksTUFBNUc7QUFDQSxVQUFJUixRQUFRLENBQUNPLEtBQVQsR0FBaUIsS0FBckIsRUFDQ1AsUUFBUSxDQUFDTyxLQUFULEdBQWlCLENBQWpCO0FBQ0Q7Ozs7RUF0RWlDRSxrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0huQztBQUNBOztJQUVxQkMsVTs7Ozs7QUFFcEIsc0JBQVlDLGNBQVosRUFBNEJDLEtBQTVCLEVBQW1DQyxNQUFuQyxFQUEyQ3RCLElBQTNDLEVBQWlEQyxNQUFqRCxFQUF5RDtBQUFBOztBQUFBOztBQUN4RCxvRkFBTUQsSUFBTixFQUFZQyxNQUFaO0FBRUEsVUFBS21CLGNBQUwsR0FBc0JBLGNBQWMsSUFBSSxJQUFJRyxzREFBSixFQUF4QztBQUNBLFVBQUtELE1BQUwsR0FBY0EsTUFBTSxJQUFJLElBQXhCO0FBQ0EsVUFBS0QsS0FBTCxHQUFhLE1BQUtHLGNBQUwsQ0FBb0JILEtBQXBCLEtBQThCLEdBQTNDO0FBQ0EsVUFBS0ksUUFBTCxHQUFnQixNQUFLSCxNQUFMLEdBQWMsTUFBS0EsTUFBbkM7QUFDQSxVQUFLSSxlQUFMLEdBQXVCLElBQUlILHNEQUFKLEVBQXZCO0FBQ0EsVUFBS0ksUUFBTCxHQUFnQixDQUFoQjtBQUNBLFVBQUt4QixJQUFMLEdBQVksWUFBWjtBQUVBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBM0I7QUFYd0Q7QUFZeEQ7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFlTWdCLGMsRUFBZ0JDLEssRUFBT0MsTSxFQUFRdEIsSSxFQUFNQyxNLEVBQVE7QUFDbEQsV0FBS21CLGNBQUwsR0FBc0JBLGNBQWMsSUFBSSxJQUFJUSxNQUFNLENBQUNMLFFBQVgsRUFBeEM7QUFDQSxXQUFLRCxNQUFMLEdBQWNBLE1BQU0sSUFBSSxJQUF4QjtBQUNBLFdBQUtELEtBQUwsR0FBYSxLQUFLRyxjQUFMLENBQW9CSCxLQUFwQixLQUE4QixHQUEzQztBQUNBLFdBQUtJLFFBQUwsR0FBZ0IsS0FBS0gsTUFBTCxHQUFjLEtBQUtBLE1BQW5DO0FBQ0EsV0FBS0ksZUFBTCxHQUF1QixJQUFJSCxzREFBSixFQUF2QjtBQUNBLFdBQUtJLFFBQUwsR0FBZ0IsQ0FBaEI7O0FBQ0EsVUFBSTNCLElBQUosRUFBUztBQUNSLDhFQUFZQSxJQUFaLEVBQWtCQyxNQUFsQjtBQUNBO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7bUNBV2VRLFEsRUFBVUssSSxFQUFNQyxLLEVBQU87QUFDckMscUZBQXFCTixRQUFyQixFQUErQkssSUFBL0IsRUFBcUNDLEtBQXJDOztBQUVBLFdBQUtXLGVBQUwsQ0FBcUJHLElBQXJCLENBQTBCLEtBQUtULGNBQS9CO0FBQ0EsV0FBS00sZUFBTCxDQUFxQkksR0FBckIsQ0FBeUJyQixRQUFRLENBQUNzQixDQUFsQztBQUNBLFdBQUtKLFFBQUwsR0FBZ0IsS0FBS0QsZUFBTCxDQUFxQkMsUUFBckIsRUFBaEI7O0FBQ0EsVUFBSSxLQUFLQSxRQUFMLEdBQWdCLFFBQWhCLElBQTRCLEtBQUtBLFFBQUwsR0FBZ0IsS0FBS0YsUUFBckQsRUFBK0Q7QUFDOUQsYUFBS0MsZUFBTCxDQUFxQk0sU0FBckI7QUFDQSxhQUFLTixlQUFMLENBQXFCTyxjQUFyQixDQUFvQyxJQUFJLEtBQUtOLFFBQUwsR0FBZ0IsS0FBS0YsUUFBN0Q7QUFDQSxhQUFLQyxlQUFMLENBQXFCTyxjQUFyQixDQUFvQyxLQUFLWixLQUF6QztBQUNBWixnQkFBUSxDQUFDWCxDQUFULENBQVdvQyxHQUFYLENBQWUsS0FBS1IsZUFBcEI7QUFDQTtBQUNEOzs7O0VBbEVzQ1Isa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEM7QUFDQTtBQUNBO0FBR0EsSUFBTWlCLGlCQUFpQixHQUFHLE9BQTFCO0FBQ0EsSUFBSUMsR0FBRyxHQUFHLENBQVY7O0lBRXFCbEIsUzs7O0FBRXBCLHFCQUFZbEIsSUFBWixFQUF5QztBQUFBLFFBQXZCQyxNQUF1Qix1RUFBZCxZQUFjOztBQUFBOztBQUN4QyxTQUFLb0MsRUFBTCxHQUFVRixpQkFBaUIsR0FBR0MsR0FBRyxFQUFqQztBQUNBLFNBQUtwQyxJQUFMLEdBQVlBLElBQUksSUFBSXNDLFFBQXBCO0FBQ0EsU0FBS3JDLE1BQUwsR0FBY3NDLDBEQUFlLENBQUN0QyxNQUFELENBQTdCO0FBQ0EsU0FBS3VDLEdBQUwsR0FBVyxDQUFYO0FBQ0EsU0FBS3ZCLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS3dCLElBQUwsR0FBWSxLQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLdkMsSUFBTCxHQUFZLFdBQVo7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQTNCO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7Ozs7MEJBVU1KLEksRUFBTUMsTSxFQUFRO0FBQ25CLFdBQUtELElBQUwsR0FBWUEsSUFBSSxJQUFJc0MsUUFBcEI7QUFDQSxXQUFLckMsTUFBTCxHQUFjQSxNQUFNLElBQUlzQywwREFBZSxDQUFDLFlBQUQsQ0FBdkM7QUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7bUNBU2VsQixLLEVBQU87QUFDckIsYUFBT0EsS0FBSyxDQUFDWSxjQUFOLENBQXFCVSxzREFBckIsQ0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7OzttQ0FTZUMsSyxFQUFPO0FBQ3JCLGFBQU9BLEtBQUssR0FBR0Qsc0RBQWY7QUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7K0JBU1dsQyxRLEVBQVUsQ0FDcEI7QUFFRDs7Ozs7Ozs7Ozs7Ozs7bUNBV2VBLFEsRUFBVUssSSxFQUFNQyxLLEVBQU87QUFDckMsV0FBS3lCLEdBQUwsSUFBWTFCLElBQVo7O0FBQ0EsVUFBSSxLQUFLMEIsR0FBTCxJQUFZLEtBQUt4QyxJQUFqQixJQUF5QixLQUFLeUMsSUFBbEMsRUFBd0M7QUFDdkMsYUFBS3hCLE1BQUwsR0FBYyxDQUFkO0FBQ0EsYUFBS3dCLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBS0ksT0FBTDtBQUNBLE9BSkQsTUFJTztBQUNOLFlBQUlDLEtBQUssR0FBRyxLQUFLN0MsTUFBTCxDQUFZUSxRQUFRLENBQUMrQixHQUFULEdBQWUvQixRQUFRLENBQUNULElBQXBDLENBQVo7QUFDQSxhQUFLaUIsTUFBTCxHQUFjOEIsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBSUYsS0FBYixFQUFvQixDQUFwQixDQUFkO0FBQ0E7QUFDRDtBQUVEOzs7Ozs7Ozs7OzhCQU9VO0FBQ1QsVUFBSS9CLEtBQUo7QUFDQSxVQUFJa0MsTUFBTSxHQUFHLEtBQUtQLE9BQUwsQ0FBYU8sTUFBMUI7QUFBQSxVQUFrQ0MsQ0FBbEM7O0FBQ0EsV0FBTUEsQ0FBQyxHQUFHLENBQVYsRUFBYUEsQ0FBQyxHQUFHRCxNQUFqQixFQUF5QkMsQ0FBQyxFQUExQixFQUE4QjtBQUM3QixhQUFLUixPQUFMLENBQWFRLENBQWIsRUFBZ0JDLGVBQWhCLENBQWdDLElBQWhDO0FBQ0E7O0FBRUQsV0FBS1QsT0FBTCxHQUFlLEVBQWY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhGO0FBQ0E7QUFDQTs7SUFFcUJVLFM7Ozs7O0FBRXBCLHFCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsUUFBM0IsRUFBcUN2RCxJQUFyQyxFQUEyQ0MsTUFBM0MsRUFBbUQ7QUFBQTs7QUFBQTs7QUFDbEQsbUZBQU1ELElBQU4sRUFBWUMsTUFBWjs7QUFDQSxVQUFLQyxLQUFMLENBQVdtRCxPQUFYLEVBQW9CQyxJQUFwQixFQUEwQkMsUUFBMUI7O0FBQ0EsVUFBS3BELElBQUwsR0FBWSxXQUFaO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUEzQjtBQUprRDtBQUtsRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWVNaUQsTyxFQUFTQyxJLEVBQU1DLFEsRUFBVXZELEksRUFBTUMsTSxFQUFRO0FBQzVDLFdBQUtvRCxPQUFMLEdBQWVBLE9BQU8sSUFBSSxJQUExQjtBQUNBLFdBQUtDLElBQUwsR0FBWUEsSUFBSSxJQUFJLElBQXBCO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQkEsUUFBUSxJQUFJLElBQTVCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJbEMsc0RBQUosRUFBYjs7QUFDQSxVQUFJdkIsSUFBSixFQUFTO0FBQ1IsNkVBQVlBLElBQVosRUFBa0JDLE1BQWxCO0FBQ0E7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7OzttQ0FXZVEsUSxFQUFVSyxJLEVBQU1DLEssRUFBTztBQUNyQyxVQUFJMkMsT0FBTyxHQUFHLEtBQUtMLE9BQUwsQ0FBYU0sU0FBYixDQUF1QkMsS0FBdkIsQ0FBNkI3QyxLQUE3QixDQUFkO0FBQ0EsVUFBSThDLGFBQUo7QUFDQSxVQUFJbEMsUUFBSjtBQUNBLFVBQUltQyxPQUFKO0FBQ0EsVUFBSUMsWUFBSixFQUFrQkMsWUFBbEI7QUFDQSxVQUFJZixNQUFNLEdBQUdTLE9BQU8sQ0FBQ1QsTUFBckI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxNQUFwQixFQUE0QkMsQ0FBQyxFQUE3QixFQUFpQztBQUNoQ1cscUJBQWEsR0FBR0gsT0FBTyxDQUFDUixDQUFELENBQXZCOztBQUNBLFlBQUlXLGFBQWEsS0FBS3BELFFBQXRCLEVBQWdDO0FBQy9CLGVBQUtnRCxLQUFMLENBQVc1QixJQUFYLENBQWdCZ0MsYUFBYSxDQUFDOUIsQ0FBOUI7QUFDQSxlQUFLMEIsS0FBTCxDQUFXM0IsR0FBWCxDQUFlckIsUUFBUSxDQUFDc0IsQ0FBeEI7QUFDQUosa0JBQVEsR0FBRyxLQUFLOEIsS0FBTCxDQUFXOUIsUUFBWCxFQUFYO0FBQ0EsY0FBTXNDLFFBQVEsR0FBR3hELFFBQVEsQ0FBQ2EsTUFBVCxHQUFrQnVDLGFBQWEsQ0FBQ3ZDLE1BQWpEOztBQUVBLGNBQUlLLFFBQVEsSUFBSXNDLFFBQVEsR0FBR0EsUUFBM0IsRUFBcUM7QUFDcENILG1CQUFPLEdBQUdHLFFBQVEsR0FBR2xCLElBQUksQ0FBQ21CLElBQUwsQ0FBVXZDLFFBQVYsQ0FBckI7QUFDQW1DLG1CQUFPLElBQUksR0FBWDtBQUNBLGdCQUFNSyxTQUFTLEdBQUcxRCxRQUFRLENBQUM2QyxJQUFULEdBQWdCTyxhQUFhLENBQUNQLElBQWhEO0FBQ0FTLHdCQUFZLEdBQUcsS0FBS1QsSUFBTCxHQUFZTyxhQUFhLENBQUNQLElBQWQsR0FBcUJhLFNBQWpDLEdBQTZDLEdBQTVEO0FBQ0FILHdCQUFZLEdBQUcsS0FBS1YsSUFBTCxHQUFZN0MsUUFBUSxDQUFDNkMsSUFBVCxHQUFnQmEsU0FBNUIsR0FBd0MsR0FBdkQ7QUFDQTFELG9CQUFRLENBQUNzQixDQUFULENBQVdHLEdBQVgsQ0FBZSxLQUFLdUIsS0FBTCxDQUFXVyxLQUFYLEdBQW1CcEMsU0FBbkIsR0FBK0JDLGNBQS9CLENBQThDNkIsT0FBTyxHQUFHLENBQUNDLFlBQXpELENBQWY7QUFDQUYseUJBQWEsQ0FBQzlCLENBQWQsQ0FBZ0JHLEdBQWhCLENBQW9CLEtBQUt1QixLQUFMLENBQVd6QixTQUFYLEdBQXVCQyxjQUF2QixDQUFzQzZCLE9BQU8sR0FBR0UsWUFBaEQsQ0FBcEI7O0FBQ0EsZ0JBQUksS0FBS1QsUUFBVCxFQUFrQjtBQUNqQixtQkFBS0EsUUFBTCxDQUFjOUMsUUFBZCxFQUF3Qm9ELGFBQXhCO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7QUFDRDs7OztFQTNFcUMzQyxrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdkM7QUFDQTtBQUNBOztJQUVxQm1ELFM7Ozs7O0FBRXBCLHFCQUFZQyxJQUFaLEVBQWtCQyxTQUFsQixFQUE2QnZFLElBQTdCLEVBQW1DQyxNQUFuQyxFQUEwQztBQUFBOztBQUFBOztBQUN6QyxtRkFBTUQsSUFBTixFQUFZQyxNQUFaOztBQUNBLFVBQUtDLEtBQUwsQ0FBV29FLElBQVgsRUFBaUJDLFNBQWpCOztBQUNBLFVBQUtwRSxJQUFMLEdBQVksV0FBWjtBQUVBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBM0I7QUFMeUM7QUFNekM7Ozs7MEJBRUtrRSxJLEVBQU1DLFMsRUFBV3ZFLEksRUFBTUMsTSxFQUFPO0FBQ25DLFdBQUtxRSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQSxJQUFMLENBQVVDLFNBQVYsR0FBc0JoRSxrREFBSSxDQUFDaUUsU0FBTCxDQUFlRCxTQUFmLEVBQTBCRixTQUFTLENBQUNJLFdBQVYsQ0FBc0JDLElBQWhELENBQXRCOztBQUNBLFVBQUkxRSxJQUFKLEVBQVM7QUFDUiw2RUFBWUEsSUFBWixFQUFrQkMsTUFBbEI7QUFDQTtBQUNEOzs7bUNBRWNRLFEsRUFBVUssSSxFQUFNQyxLLEVBQU87QUFDckMsb0ZBQXFCTixRQUFyQixFQUErQkssSUFBL0IsRUFBcUNDLEtBQXJDOztBQUNBLFdBQUt1RCxJQUFMLENBQVVLLFFBQVYsQ0FBbUJsRSxRQUFuQjtBQUNBOzs7O0VBckJxQ1Msa0Q7OztBQXdCdkNtRCxTQUFTLENBQUNJLFdBQVYsR0FBd0I7QUFDdkJHLE9BQUssRUFBRSxLQUFLLENBRFc7QUFFdkJGLE1BQUksRUFBRSxLQUFLLENBRlk7QUFHdkJHLE9BQUssRUFBRSxLQUFLO0FBSFcsQ0FBeEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTs7SUFFcUJDLEs7Ozs7O0FBRXBCLGlCQUFZQyxFQUFaLEVBQWdCQyxFQUFoQixFQUFvQmhGLElBQXBCLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUFBOztBQUNqQywrRUFBTUQsSUFBTixFQUFZQyxNQUFaO0FBQ0EsVUFBS29CLEtBQUwsR0FBYSxNQUFLNEQsY0FBTCxDQUFvQixJQUFJMUQsc0RBQUosQ0FBYXdELEVBQWIsRUFBaUJDLEVBQWpCLENBQXBCLENBQWI7QUFDQSxVQUFLN0UsSUFBTCxHQUFZLE9BQVo7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQTNCO0FBSmlDO0FBS2pDOzs7OzBCQUVLMkUsRSxFQUFJQyxFLEVBQUloRixJLEVBQU1DLE0sRUFBUTtBQUMzQixXQUFLb0IsS0FBTCxHQUFhLEtBQUs0RCxjQUFMLENBQW9CLElBQUkxRCxzREFBSixDQUFhd0QsRUFBYixFQUFpQkMsRUFBakIsQ0FBcEIsQ0FBYjs7QUFDQSxVQUFJaEYsSUFBSixFQUFTO0FBQ1IseUVBQVlBLElBQVosRUFBa0JDLE1BQWxCO0FBQ0E7QUFDRDs7O21DQUVjUSxRLEVBQVVLLEksRUFBTUMsSyxFQUFPO0FBQ3JDLGdGQUFxQk4sUUFBckIsRUFBK0JLLElBQS9CLEVBQXFDQyxLQUFyQzs7QUFDQU4sY0FBUSxDQUFDWCxDQUFULENBQVdvQyxHQUFYLENBQWUsS0FBS2IsS0FBcEI7QUFDQTs7OztFQW5CaUNILGtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSG5DO0FBQ0E7O0lBRXFCZ0UsTzs7Ozs7QUFFcEIsbUJBQVlDLENBQVosRUFBZW5GLElBQWYsRUFBcUJDLE1BQXJCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQzVCLGlGQUFNLENBQU4sRUFBU2tGLENBQVQsRUFBWW5GLElBQVosRUFBa0JDLE1BQWxCO0FBQ0EsVUFBS0UsSUFBTCxHQUFZLFNBQVo7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQTNCO0FBSDRCO0FBSTVCOzs7OzBCQUVLK0UsQyxFQUFHbkYsSSxFQUFNQyxNLEVBQVE7QUFDdEIseUVBQVksQ0FBWixFQUFla0YsQ0FBZixFQUFrQm5GLElBQWxCLEVBQXdCQyxNQUF4QjtBQUNBOzs7bUNBRWNRLFEsRUFBVUssSSxFQUFNQyxLLEVBQU87QUFDckMsa0ZBQXFCTixRQUFyQixFQUErQkssSUFBL0IsRUFBcUNDLEtBQXJDOztBQUNBTixjQUFRLENBQUNYLENBQVQsQ0FBV29DLEdBQVgsQ0FBZSxLQUFLYixLQUFwQjtBQUNBOzs7O0VBZm1DeUQsOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJDO0FBQ0E7QUFDQTs7SUFFcUJNLFc7Ozs7O0FBRXBCLHVCQUFZQyxXQUFaLEVBQXlCaEUsS0FBekIsRUFBZ0NyQixJQUFoQyxFQUFzQ0MsTUFBdEMsRUFBOEM7QUFBQTs7QUFBQTs7QUFDN0MscUZBQU1ELElBQU4sRUFBWUMsTUFBWjtBQUNBLFVBQUtxRixXQUFMLEdBQW1CLElBQUkvRCxzREFBSixFQUFuQjtBQUNBLFVBQUs4RCxXQUFMLEdBQW1COUUsa0RBQUksQ0FBQ2lFLFNBQUwsQ0FBZWEsV0FBZixFQUE0QixJQUFJOUQsc0RBQUosRUFBNUIsQ0FBbkI7QUFDQSxVQUFLRixLQUFMLEdBQWFkLGtEQUFJLENBQUNpRSxTQUFMLENBQWUsTUFBS2hELGNBQUwsQ0FBb0JILEtBQXBCLENBQWYsRUFBMkMsR0FBM0MsQ0FBYjtBQUNBLFVBQUtsQixJQUFMLEdBQVksYUFBWjtBQUVBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBM0I7QUFQNkM7QUFRN0M7Ozs7MEJBR0tpRixXLEVBQWFoRSxLLEVBQU9yQixJLEVBQU1DLE0sRUFBUTtBQUN2QyxXQUFLcUYsV0FBTCxHQUFtQixJQUFJL0Qsc0RBQUosRUFBbkI7QUFDQSxXQUFLOEQsV0FBTCxHQUFtQjlFLGtEQUFJLENBQUNpRSxTQUFMLENBQWVhLFdBQWYsRUFBNEIsSUFBSTlELHNEQUFKLEVBQTVCLENBQW5CO0FBQ0EsV0FBS0YsS0FBTCxHQUFhZCxrREFBSSxDQUFDaUUsU0FBTCxDQUFlLEtBQUtoRCxjQUFMLENBQW9CSCxLQUFwQixDQUFmLEVBQTJDLEdBQTNDLENBQWI7O0FBQ0EsVUFBSXJCLElBQUosRUFBUztBQUNSLCtFQUFZQSxJQUFaLEVBQWtCQyxNQUFsQjtBQUNBO0FBQ0Q7OzsrQkFFVVEsUSxFQUFVLENBRXBCOzs7bUNBRWNBLFEsRUFBVUssSSxFQUFNQyxLLEVBQU87QUFDckMsV0FBS3VFLFdBQUwsQ0FBaUJDLEdBQWpCLENBQXFCLEtBQUtGLFdBQUwsQ0FBaUJHLENBQWpCLEdBQXFCL0UsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXeUQsQ0FBckQsRUFBd0QsS0FBS0gsV0FBTCxDQUFpQkksQ0FBakIsR0FBcUJoRixRQUFRLENBQUNzQixDQUFULENBQVcwRCxDQUF4RjtBQUNBLFVBQU1DLFVBQVUsR0FBRyxLQUFLSixXQUFMLENBQWlCM0QsUUFBakIsRUFBbkI7O0FBQ0EsVUFBSStELFVBQVUsSUFBSSxDQUFsQixFQUFxQjtBQUNwQixZQUFNekIsUUFBUSxHQUFHLEtBQUtxQixXQUFMLENBQWlCckMsTUFBakIsRUFBakI7QUFDQSxZQUFNMEMsTUFBTSxHQUFJLEtBQUt0RSxLQUFMLEdBQWFQLElBQWQsSUFBd0I0RSxVQUFVLEdBQUd6QixRQUFyQyxDQUFmO0FBQ0F4RCxnQkFBUSxDQUFDbUYsQ0FBVCxDQUFXSixDQUFYLElBQWdCRyxNQUFNLEdBQUcsS0FBS0wsV0FBTCxDQUFpQkUsQ0FBMUM7QUFDQS9FLGdCQUFRLENBQUNtRixDQUFULENBQVdILENBQVgsSUFBZ0JFLE1BQU0sR0FBRyxLQUFLTCxXQUFMLENBQWlCRyxDQUExQztBQUNBO0FBQ0Q7Ozs7RUFuQ3VDdkUsa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p6QztBQUNBO0FBQ0E7QUFDQTs7SUFFcUIyRSxXOzs7OztBQUVwQix1QkFBWUMsTUFBWixFQUFvQkMsTUFBcEIsRUFBNEJDLEtBQTVCLEVBQW1DaEcsSUFBbkMsRUFBeUNDLE1BQXpDLEVBQWlEO0FBQUE7O0FBQUE7O0FBQ2hELHFGQUFNRCxJQUFOLEVBQVlDLE1BQVo7O0FBQ0EsVUFBS0MsS0FBTCxDQUFXNEYsTUFBWCxFQUFtQkMsTUFBbkIsRUFBMkJDLEtBQTNCOztBQUNBLFVBQUtsRixJQUFMLEdBQVksQ0FBWjtBQUNBLFVBQUtYLElBQUwsR0FBWSxhQUFaO0FBRUEsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUEzQjtBQU5nRDtBQU9oRDs7OzswQkFHSzBGLE0sRUFBUUMsTSxFQUFRQyxLLEVBQU9oRyxJLEVBQU1DLE0sRUFBUTtBQUMxQyxXQUFLZ0csT0FBTCxHQUFlLElBQUkxRSxzREFBSixDQUFhdUUsTUFBYixFQUFxQkMsTUFBckIsQ0FBZjtBQUNBLFdBQUtFLE9BQUwsR0FBZSxLQUFLaEIsY0FBTCxDQUFvQixLQUFLZ0IsT0FBekIsQ0FBZjtBQUNBLFdBQUtELEtBQUwsR0FBYUEsS0FBYjs7QUFDQSxVQUFJaEcsSUFBSixFQUFTO0FBQ1I2RixtQkFBVyxDQUFDSyxPQUFaLENBQW9CQyxTQUFwQixDQUE4QmpHLEtBQTlCLENBQW9Da0csSUFBcEMsQ0FBeUMsSUFBekMsRUFBK0NwRyxJQUEvQyxFQUFxREMsTUFBckQ7QUFDQTtBQUNEOzs7bUNBRWNRLFEsRUFBVUssSSxFQUFNQyxLLEVBQU87QUFDckMsc0ZBQXFCTixRQUFyQixFQUErQkssSUFBL0IsRUFBcUNDLEtBQXJDOztBQUNBLFdBQUtELElBQUwsSUFBYUEsSUFBYjs7QUFDQSxVQUFJLEtBQUtBLElBQUwsSUFBYSxLQUFLa0YsS0FBdEIsRUFBNkI7QUFDNUJ2RixnQkFBUSxDQUFDWCxDQUFULENBQVd1RyxLQUFYLENBQWlCQyxrRUFBVSxDQUFDLENBQUMsS0FBS0wsT0FBTCxDQUFhVCxDQUFmLEVBQWtCLEtBQUtTLE9BQUwsQ0FBYVQsQ0FBL0IsQ0FBM0IsRUFBOERjLGtFQUFVLENBQUMsQ0FBQyxLQUFLTCxPQUFMLENBQWFSLENBQWYsRUFBa0IsS0FBS1EsT0FBTCxDQUFhUixDQUEvQixDQUF4RTtBQUNBLGFBQUszRSxJQUFMLEdBQVksQ0FBWjtBQUNBOztBQUFBO0FBQ0Q7Ozs7RUE1QnVDSSxrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMekM7QUFDQTtBQUNBOztJQUVxQnFGLFM7Ozs7O0FBRXBCLHFCQUFZbkYsY0FBWixFQUE0QkMsS0FBNUIsRUFBbUNDLE1BQW5DLEVBQTJDdEIsSUFBM0MsRUFBaURDLE1BQWpELEVBQXlEO0FBQUE7O0FBQUE7O0FBQ3hELG1GQUFNbUIsY0FBTixFQUFzQkMsS0FBdEIsRUFBNkJDLE1BQTdCLEVBQXFDdEIsSUFBckMsRUFBMkNDLE1BQTNDO0FBQ0EsVUFBS29CLEtBQUwsSUFBYyxDQUFDLENBQWY7QUFDQSxVQUFLbEIsSUFBTCxHQUFZLFdBQVo7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQTNCO0FBSndEO0FBS3hEOzs7OzBCQUVLZ0IsYyxFQUFnQkMsSyxFQUFPQyxNLEVBQVF0QixJLEVBQU1DLE0sRUFBUTtBQUNsRCwyRUFBWW1CLGNBQVosRUFBNEJDLEtBQTVCLEVBQW1DQyxNQUFuQyxFQUEyQ3RCLElBQTNDLEVBQWlEQyxNQUFqRDs7QUFDQSxXQUFLb0IsS0FBTCxJQUFjLENBQUMsQ0FBZjtBQUNBOzs7O0VBWnFDRixtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKdkM7QUFDQTtBQUNBOztJQUVxQnFGLE07Ozs7O0FBRXBCLGtCQUFZMUcsQ0FBWixFQUFlQyxDQUFmLEVBQWtCMEcsS0FBbEIsRUFBeUJ6RyxJQUF6QixFQUErQkMsTUFBL0IsRUFBdUM7QUFBQTs7QUFBQTs7QUFDdEMsZ0ZBQU1ELElBQU4sRUFBWUMsTUFBWjs7QUFDQSxVQUFLQyxLQUFMLENBQVdKLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjBHLEtBQWpCOztBQUNBLFVBQUt0RyxJQUFMLEdBQVksUUFBWjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBM0I7QUFKc0M7QUFLdEM7Ozs7MEJBRUtOLEMsRUFBR0MsQyxFQUFHMEcsSyxFQUFPekcsSSxFQUFNQyxNLEVBQVE7QUFDaEMsVUFBSUYsQ0FBQyxJQUFJLElBQUwsSUFBYUEsQ0FBQyxJQUFJTSxTQUF0QixFQUFnQztBQUMvQixhQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLE9BRkQsTUFFSztBQUNKLGFBQUtBLElBQUwsR0FBWSxLQUFaO0FBQ0E7O0FBRUQsV0FBS1IsQ0FBTCxHQUFTUyxrREFBSSxDQUFDQyxZQUFMLENBQWtCVixDQUFDLElBQUkwRyxNQUFNLENBQUNFLElBQVAsQ0FBWUMsUUFBbkMsQ0FBVDtBQUNBLFdBQUs1RyxDQUFMLEdBQVNRLGtEQUFJLENBQUNDLFlBQUwsQ0FBa0JULENBQUMsSUFBSSxDQUF2QixDQUFUO0FBQ0EsV0FBSzBHLEtBQUwsR0FBYUEsS0FBSyxJQUFJRCxNQUFNLENBQUNJLE1BQVAsQ0FBY0MsRUFBcEM7O0FBQ0EsVUFBSTdHLElBQUosRUFBUztBQUNSLDBFQUFZQSxJQUFaLEVBQWtCQyxNQUFsQjtBQUNBO0FBQ0Q7OzsrQkFFVVEsUSxFQUFVO0FBQ3BCQSxjQUFRLENBQUNxRyxRQUFULEdBQW9CLEtBQUtoSCxDQUFMLENBQU9jLFFBQVAsRUFBcEI7QUFDQUgsY0FBUSxDQUFDQyxTQUFULENBQW1CcUcsU0FBbkIsR0FBK0IsS0FBS2pILENBQUwsQ0FBT2MsUUFBUCxFQUEvQjs7QUFDQSxVQUFJLENBQUMsS0FBS04sSUFBVixFQUFlO0FBQ2RHLGdCQUFRLENBQUNDLFNBQVQsQ0FBbUJzRyxTQUFuQixHQUErQixLQUFLakgsQ0FBTCxDQUFPYSxRQUFQLEVBQS9CO0FBQ0E7QUFDRDs7O21DQUVjSCxRLEVBQVVLLEksRUFBTUMsSyxFQUFPO0FBQ3JDLGlGQUFxQk4sUUFBckIsRUFBK0JLLElBQS9CLEVBQXFDQyxLQUFyQzs7QUFDQSxVQUFJLENBQUMsS0FBS1QsSUFBVixFQUFnQjtBQUNmLFlBQUksS0FBS21HLEtBQUwsSUFBY0QsTUFBTSxDQUFDSSxNQUFQLENBQWNDLEVBQWhDLEVBQW9DO0FBQ25DcEcsa0JBQVEsQ0FBQ3FHLFFBQVQsSUFBcUJyRyxRQUFRLENBQUNDLFNBQVQsQ0FBbUJzRyxTQUFuQixHQUErQixDQUFDdkcsUUFBUSxDQUFDQyxTQUFULENBQW1CcUcsU0FBbkIsR0FBK0J0RyxRQUFRLENBQUNDLFNBQVQsQ0FBbUJzRyxTQUFuRCxJQUFnRSxLQUFLL0YsTUFBekg7QUFDQSxTQUZELE1BRU87QUFDTlIsa0JBQVEsQ0FBQ3FHLFFBQVQsSUFBcUJyRyxRQUFRLENBQUNDLFNBQVQsQ0FBbUJzRyxTQUF4QztBQUNBO0FBQ0QsT0FORCxNQU1PLElBQUksS0FBS2xILENBQUwsQ0FBT0EsQ0FBUCxJQUFZMEcsTUFBTSxDQUFDRSxJQUFQLENBQVlDLFFBQTVCLEVBQXNDO0FBQzVDO0FBQ0FsRyxnQkFBUSxDQUFDcUcsUUFBVCxHQUFvQnJHLFFBQVEsQ0FBQ3dHLFlBQVQsRUFBcEI7QUFDQTtBQUNEOzs7O0VBNUNrQy9GLGtEOzs7QUErQ3BDc0YsTUFBTSxDQUFDSSxNQUFQLEdBQWdCO0FBQ2ZDLElBQUUsRUFBRSxLQUFLLENBRE07QUFFZkssTUFBSSxFQUFFLEtBQUs7QUFGSSxDQUFoQjtBQUtBVixNQUFNLENBQUNFLElBQVAsR0FBYztBQUNiQyxVQUFRLEVBQUUsS0FBSztBQURGLENBQWQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7QUFDQTs7SUFFcUJRLEs7Ozs7O0FBRXBCLGlCQUFZckgsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxJQUFsQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFDL0IsK0VBQU1ELElBQU4sRUFBWUMsTUFBWjs7QUFDQSxVQUFLQyxLQUFMLENBQVdKLENBQVgsRUFBY0MsQ0FBZDs7QUFDQSxVQUFLSSxJQUFMLEdBQVksT0FBWjtBQUVBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBM0I7QUFMK0I7QUFNL0I7Ozs7MEJBRUtOLEMsRUFBR0MsQyxFQUFHQyxJLEVBQU1DLE0sRUFBUTtBQUN6QixVQUFJRixDQUFDLElBQUksSUFBTCxJQUFhQSxDQUFDLElBQUlNLFNBQXRCLEVBQWdDO0FBQy9CLGFBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsT0FGRCxNQUVLO0FBQ0osYUFBS0EsSUFBTCxHQUFZLEtBQVo7QUFDQTs7QUFDRCxXQUFLUixDQUFMLEdBQVNTLGtEQUFJLENBQUNDLFlBQUwsQ0FBa0JELGtEQUFJLENBQUNpRSxTQUFMLENBQWUxRSxDQUFmLEVBQWtCLENBQWxCLENBQWxCLENBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVNRLGtEQUFJLENBQUNDLFlBQUwsQ0FBa0JULENBQWxCLENBQVQ7O0FBQ0EsVUFBSUMsSUFBSixFQUFTO0FBQ1JvSCxhQUFLLENBQUNsSCxLQUFOLENBQVlGLElBQVosRUFBa0JDLE1BQWxCO0FBQ0E7QUFDRDs7OytCQUVVUSxRLEVBQVU7QUFDcEJBLGNBQVEsQ0FBQ0MsU0FBVCxDQUFtQjJHLE1BQW5CLEdBQTRCLEtBQUt2SCxDQUFMLENBQU9jLFFBQVAsRUFBNUI7QUFDQUgsY0FBUSxDQUFDQyxTQUFULENBQW1CNEcsU0FBbkIsR0FBK0I3RyxRQUFRLENBQUNhLE1BQXhDOztBQUNBLFVBQUksS0FBS2hCLElBQVQsRUFBYztBQUNiRyxnQkFBUSxDQUFDQyxTQUFULENBQW1CNkcsTUFBbkIsR0FBNEI5RyxRQUFRLENBQUNDLFNBQVQsQ0FBbUIyRyxNQUEvQztBQUNBLE9BRkQsTUFFSztBQUNKNUcsZ0JBQVEsQ0FBQ0MsU0FBVCxDQUFtQjZHLE1BQW5CLEdBQTRCLEtBQUt4SCxDQUFMLENBQU9hLFFBQVAsRUFBNUI7QUFDQTtBQUNEOzs7bUNBRWNILFEsRUFBVUssSSxFQUFNQyxLLEVBQU87QUFDckMsZ0ZBQXFCTixRQUFyQixFQUErQkssSUFBL0IsRUFBcUNDLEtBQXJDOztBQUNBTixjQUFRLENBQUNxQyxLQUFULEdBQWlCckMsUUFBUSxDQUFDQyxTQUFULENBQW1CNkcsTUFBbkIsR0FBNEIsQ0FBQzlHLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQjJHLE1BQW5CLEdBQTRCNUcsUUFBUSxDQUFDQyxTQUFULENBQW1CNkcsTUFBaEQsSUFBMEQsS0FBS3RHLE1BQTVHOztBQUNBLFVBQUlSLFFBQVEsQ0FBQ3FDLEtBQVQsR0FBaUIsTUFBckIsRUFBNEI7QUFDM0JyQyxnQkFBUSxDQUFDcUMsS0FBVCxHQUFpQixDQUFqQjtBQUNBOztBQUNEckMsY0FBUSxDQUFDYSxNQUFULEdBQWtCYixRQUFRLENBQUNDLFNBQVQsQ0FBbUI0RyxTQUFuQixHQUErQjdHLFFBQVEsQ0FBQ3FDLEtBQTFEO0FBQ0E7Ozs7RUF4Q2lDNUIsa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5DO0FBRUEsSUFBSWtCLEdBQUcsR0FBRyxDQUFWOztJQUVxQm9GLFE7OztBQUNqQixzQkFBYztBQUFBOztBQUNaLFNBQUtuRixFQUFMLEdBQVVELEdBQUcsRUFBYjtBQUNBLFNBQUtsQyxLQUFMLENBQVcsSUFBWDtBQUNBLFNBQUt1SCxNQUFMLEdBQWMsSUFBZDtBQUVBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFuQjtBQUNBLFNBQUs3RSxPQUFMLEdBQWUsS0FBS0EsT0FBcEI7QUFDRDs7OzttQ0FFYztBQUNiLGFBQU9FLElBQUksQ0FBQzRFLEtBQUwsQ0FBVyxLQUFLL0IsQ0FBTCxDQUFPSixDQUFsQixFQUFxQixDQUFDLEtBQUtJLENBQUwsQ0FBT0gsQ0FBN0IsS0FBbUMsTUFBTTFDLElBQUksQ0FBQzZFLEVBQTlDLENBQVA7QUFDRDs7OzBCQUVLQyxJLEVBQU07QUFDVixXQUFLN0gsSUFBTCxHQUFZc0MsUUFBWjtBQUNBLFdBQUtFLEdBQUwsR0FBVyxDQUFYO0FBQ0EsV0FBS3ZCLE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS3dCLElBQUwsR0FBWSxLQUFaO0FBQ0EsV0FBS3FGLEtBQUwsR0FBYSxLQUFiO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxXQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFdBQUsxRSxJQUFMLEdBQVksQ0FBWjtBQUNBLFdBQUtoQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUtOLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBSzhCLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS2dFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxXQUFLbUIsS0FBTCxHQUFhLElBQWI7O0FBQ0EsV0FBS2hJLE1BQUwsR0FBYyxVQUFDaUksR0FBRDtBQUFBLGVBQVNBLEdBQVQ7QUFBQSxPQUFkOztBQUNBLFdBQUt4SCxTQUFMLEdBQWlCLEVBQWpCOztBQUNBLFVBQUltSCxJQUFKLEVBQVU7QUFDUixhQUFLOUYsQ0FBTCxHQUFTLElBQUlSLHNEQUFKLEVBQVQ7QUFDQSxhQUFLcUUsQ0FBTCxHQUFTLElBQUlyRSxzREFBSixFQUFUO0FBQ0EsYUFBS3pCLENBQUwsR0FBUyxJQUFJeUIsc0RBQUosRUFBVDtBQUNBLGFBQUs0RyxHQUFMLEdBQVc7QUFDVHBHLFdBQUMsRUFBRyxJQUFJUixzREFBSixFQURLO0FBRVRxRSxXQUFDLEVBQUcsSUFBSXJFLHNEQUFKLEVBRks7QUFHVHpCLFdBQUMsRUFBRyxJQUFJeUIsc0RBQUo7QUFISyxTQUFYO0FBS0EsYUFBSzZHLFVBQUwsR0FBa0IsRUFBbEI7QUFDRCxPQVZELE1BVU87QUFDTDtBQUNBLGFBQUtyRyxDQUFMLENBQU93RCxHQUFQLENBQVcsQ0FBWCxFQUFjLENBQWQ7QUFDQSxhQUFLSyxDQUFMLENBQU9MLEdBQVAsQ0FBVyxDQUFYLEVBQWMsQ0FBZDtBQUNBLGFBQUt6RixDQUFMLENBQU95RixHQUFQLENBQVcsQ0FBWCxFQUFjLENBQWQ7QUFDQSxhQUFLNEMsR0FBTCxDQUFTcEcsQ0FBVCxDQUFXd0QsR0FBWCxDQUFlLENBQWYsRUFBa0IsQ0FBbEI7QUFDQSxhQUFLNEMsR0FBTCxDQUFTdkMsQ0FBVCxDQUFXTCxHQUFYLENBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUNBLGFBQUs0QyxHQUFMLENBQVNySSxDQUFULENBQVd5RixHQUFYLENBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUNBLGFBQUs4QyxtQkFBTDtBQUNEOztBQUVELFdBQUszSCxTQUFMLENBQWU0SCxHQUFmLEdBQXFCO0FBQ25CQyxTQUFDLEVBQUcsR0FEZTtBQUVuQnBELFNBQUMsRUFBRyxHQUZlO0FBR25CcEYsU0FBQyxFQUFHO0FBSGUsT0FBckI7QUFLQSxhQUFPLElBQVA7QUFDRDs7OzJCQUVNZ0IsSyxFQUFPRCxJLEVBQU07QUFDbEIsVUFBTTBCLEdBQUcsR0FBRyxLQUFLQSxHQUFMLEdBQVcxQixJQUF2Qjs7QUFFQSxVQUFHMEIsR0FBRyxJQUFJLEtBQUt4QyxJQUFmLEVBQXFCO0FBQ25CLGFBQUs2QyxPQUFMO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsV0FBS0wsR0FBTCxHQUFXQSxHQUFYO0FBRUEsVUFBTVMsTUFBTSxHQUFHLEtBQUttRixVQUFMLENBQWdCbkYsTUFBL0I7QUFDQSxVQUFJQyxDQUFKOztBQUNBLFdBQU1BLENBQUMsR0FBRyxDQUFWLEVBQWFBLENBQUMsR0FBR0QsTUFBakIsRUFBeUJDLENBQUMsRUFBMUIsRUFBOEI7QUFDNUIsWUFBSSxLQUFLa0YsVUFBTCxDQUFnQmxGLENBQWhCLENBQUosRUFBdUI7QUFDckIsZUFBS2tGLFVBQUwsQ0FBZ0JsRixDQUFoQixFQUFtQjlDLGNBQW5CLENBQWtDLElBQWxDLEVBQXdDVSxJQUF4QyxFQUE4Q0MsS0FBOUM7QUFDRDtBQUNGOztBQUNELFVBQU0rQixLQUFLLEdBQUcsS0FBSzdDLE1BQUwsQ0FBWSxLQUFLdUMsR0FBTCxHQUFXLEtBQUt4QyxJQUE1QixDQUFkO0FBQ0EsV0FBS2lCLE1BQUwsR0FBYzhCLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQUlGLEtBQWIsRUFBb0IsQ0FBcEIsQ0FBZDtBQUVBLGFBQU8sSUFBUDtBQUNEOzs7aUNBRVkwRixTLEVBQVc7QUFDdEIsV0FBS0osVUFBTCxDQUFnQkssSUFBaEIsQ0FBcUJELFNBQXJCOztBQUNBLFVBQUlBLFNBQVMsQ0FBQ0UsY0FBVixDQUF5QixTQUF6QixDQUFKLEVBQXdDO0FBQ3RDRixpQkFBUyxDQUFDOUYsT0FBVixDQUFrQitGLElBQWxCLENBQXVCLElBQXZCO0FBQ0Q7O0FBQ0RELGVBQVMsQ0FBQ0csVUFBVixDQUFxQixJQUFyQjtBQUNEOzs7a0NBRWFQLFUsRUFBWTtBQUN4QixVQUFJbkYsTUFBTSxHQUFHbUYsVUFBVSxDQUFDbkYsTUFBeEI7QUFBQSxVQUFnQ0MsQ0FBaEM7O0FBQ0EsV0FBTUEsQ0FBQyxHQUFHLENBQVYsRUFBYUEsQ0FBQyxHQUFHRCxNQUFqQixFQUF5QkMsQ0FBQyxFQUExQixFQUE4QjtBQUM1QixhQUFLMEYsWUFBTCxDQUFrQlIsVUFBVSxDQUFDbEYsQ0FBRCxDQUE1QjtBQUNEO0FBQ0Y7OztvQ0FFZXNGLFMsRUFBVztBQUN6QixVQUFJekgsS0FBSyxHQUFHLEtBQUtxSCxVQUFMLENBQWdCUyxPQUFoQixDQUF3QkwsU0FBeEIsQ0FBWjs7QUFDQSxVQUFJekgsS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNkLFlBQUl5SCxTQUFTLEdBQUcsS0FBS0osVUFBTCxDQUFnQlUsTUFBaEIsQ0FBdUIvSCxLQUF2QixFQUE4QixDQUE5QixDQUFoQjtBQUNBeUgsaUJBQVMsQ0FBQzlGLE9BQVYsR0FBb0IsSUFBcEI7QUFDRDtBQUNGOzs7MENBRXFCO0FBQ3BCLFdBQUswRixVQUFMLENBQWdCbkYsTUFBaEIsR0FBeUIsQ0FBekI7QUFDRDtBQUVEOzs7Ozs7OzhCQUlVO0FBQ1IsV0FBS29GLG1CQUFMO0FBQ0EsV0FBS3BILE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS3dCLElBQUwsR0FBWSxJQUFaO0FBQ0EsV0FBS3VGLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhMO0FBQ0E7QUFFZTtBQUVYOzs7Ozs7Ozs7QUFTQXhELFdBQVMsRUFBRSxtQkFBUzVCLEtBQVQsRUFBZ0JtRyxRQUFoQixFQUEwQjtBQUNqQyxRQUFJbkcsS0FBSyxHQUFJQSxLQUFLLElBQUksSUFBVCxJQUFpQkEsS0FBSyxJQUFJdkMsU0FBM0IsR0FBd0N1QyxLQUF4QyxHQUFnRG1HLFFBQTVEO0FBQ0EsV0FBT25HLEtBQVA7QUFDSCxHQWRVOztBQWdCWDs7Ozs7Ozs7Ozs7QUFXQW9HLGFBQVcsRUFBRSxxQkFBU0MsVUFBVCxFQUFxQnhELENBQXJCLEVBQXdCO0FBQ2pDLFFBQUksUUFBT3dELFVBQVAsS0FBc0IsUUFBMUIsRUFBb0M7QUFDaEMsYUFBT0EsVUFBUDtBQUNILEtBRkQsTUFFTztBQUNILFVBQUlDLFFBQVEsR0FBRyxJQUFJM0gsc0RBQUosQ0FBYTBILFVBQWIsRUFBeUJ4RCxDQUF6QixDQUFmO0FBQ0EsYUFBT3lELFFBQVA7QUFDSDtBQUNKLEdBbENVOztBQW9DWDs7Ozs7Ozs7Ozs7QUFXQUMsZUFBYSxFQUFFLHVCQUFTQyxJQUFULEVBQWU7QUFDMUIsUUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxRQUFJRCxJQUFJLENBQUNWLGNBQUwsQ0FBb0IsR0FBcEIsS0FBNEJVLElBQUksQ0FBQ1YsY0FBTCxDQUFvQixHQUFwQixDQUE1QixJQUF3RFUsSUFBSSxDQUFDVixjQUFMLENBQW9CLEdBQXBCLENBQXhELElBQW9GVSxJQUFJLENBQUNWLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBeEYsRUFDSVcsTUFBTSxJQUFJLEdBQVY7QUFDSixRQUFJRCxJQUFJLENBQUNWLGNBQUwsQ0FBb0IsSUFBcEIsS0FBNkJVLElBQUksQ0FBQ1YsY0FBTCxDQUFvQixJQUFwQixDQUE3QixJQUEwRFUsSUFBSSxDQUFDVixjQUFMLENBQW9CLEdBQXBCLENBQTFELElBQXNGVSxJQUFJLENBQUNWLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBMUYsRUFDSVcsTUFBTSxJQUFJLEdBQVY7QUFDSixRQUFJRCxJQUFJLENBQUNWLGNBQUwsQ0FBb0IsSUFBcEIsS0FBNkJVLElBQUksQ0FBQ1YsY0FBTCxDQUFvQixJQUFwQixDQUE3QixJQUEwRFUsSUFBSSxDQUFDVixjQUFMLENBQW9CLEdBQXBCLENBQTFELElBQXNGVSxJQUFJLENBQUNWLGNBQUwsQ0FBb0IsWUFBcEIsQ0FBMUYsRUFDSVcsTUFBTSxJQUFJLEdBQVY7QUFFSixXQUFPQSxNQUFQO0FBQ0gsR0F6RFU7O0FBMkRYOzs7Ozs7Ozs7OztBQVdBQyxxQkFBbUIsRUFBRSw2QkFBU3ZCLE1BQVQsRUFBaUJxQixJQUFqQixFQUF1QjtBQUN4QyxRQUFHQSxJQUFJLENBQUM1RCxDQUFSLEVBQVd1QyxNQUFNLENBQUNoRyxDQUFQLENBQVN5RCxDQUFULEdBQWE0RCxJQUFJLENBQUM1RCxDQUFsQjtBQUVYLFFBQUc0RCxJQUFJLENBQUMzRCxDQUFSLEVBQVdzQyxNQUFNLENBQUNoRyxDQUFQLENBQVMwRCxDQUFULEdBQWEyRCxJQUFJLENBQUMzRCxDQUFsQjtBQUVYLFFBQUcyRCxJQUFJLENBQUNHLEVBQVIsRUFBWXhCLE1BQU0sQ0FBQ25DLENBQVAsQ0FBU0osQ0FBVCxHQUFhNEQsSUFBSSxDQUFDRyxFQUFsQjtBQUNaLFFBQUdILElBQUksQ0FBQ0ksRUFBUixFQUFZekIsTUFBTSxDQUFDbkMsQ0FBUCxDQUFTSCxDQUFULEdBQWEyRCxJQUFJLENBQUNJLEVBQWxCO0FBRVosUUFBR0osSUFBSSxDQUFDSyxFQUFSLEVBQVkxQixNQUFNLENBQUNqSSxDQUFQLENBQVMwRixDQUFULEdBQWE0RCxJQUFJLENBQUNLLEVBQWxCO0FBQ1osUUFBR0wsSUFBSSxDQUFDTSxFQUFSLEVBQVkzQixNQUFNLENBQUNqSSxDQUFQLENBQVMyRixDQUFULEdBQWEyRCxJQUFJLENBQUNNLEVBQWxCO0FBQ2YsR0FoRlU7O0FBb0ZYOzs7Ozs7Ozs7Ozs7OztBQWNBbEosY0FBWSxFQUFFLHNCQUFTVixDQUFULEVBQVlDLENBQVosRUFBZTRKLENBQWYsRUFBa0I7QUFDNUIsUUFBSTdKLENBQUMsQ0FBQzhKLFdBQUYsS0FBa0JDLGtEQUF0QixFQUE0QjtBQUN4QixhQUFPL0osQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILFVBQUksQ0FBQ0MsQ0FBTCxFQUFRO0FBQ0osZUFBTyxJQUFJOEosa0RBQUosQ0FBUy9KLENBQVQsQ0FBUDtBQUNILE9BRkQsTUFFTztBQUNILFlBQUksQ0FBQzZKLENBQUwsRUFDSSxPQUFPLElBQUlFLGtEQUFKLENBQVMvSixDQUFULEVBQVlDLENBQVosQ0FBUCxDQURKLEtBR0ksT0FBTyxJQUFJOEosa0RBQUosQ0FBUy9KLENBQVQsRUFBWUMsQ0FBWixFQUFlNEosQ0FBZixDQUFQO0FBQ1A7QUFDSjtBQUNKLEdBL0dVOztBQWlIWDs7Ozs7Ozs7OztBQVVBRyxjQUFZLEVBQUUsc0JBQVNDLEdBQVQsRUFBYztBQUN4QixRQUFJQSxHQUFHLENBQUNILFdBQUosS0FBb0JDLGtEQUF4QixFQUNJLE9BQU9FLEdBQUcsQ0FBQ25KLFFBQUosRUFBUCxDQURKLEtBR0ksT0FBT21KLEdBQVA7QUFDUCxHQWhJVTs7QUFrSVg7Ozs7Ozs7QUFNQTs7Ozs7Ozs7OztBQVVBQyxVQUFRLEVBQUUsa0JBQVNDLENBQVQsRUFBWTtBQUNsQixRQUFJQyxLQUFLLEdBQUlELENBQUMsQ0FBQ0UsTUFBRixDQUFTLENBQVQsS0FBZSxHQUFoQixHQUF1QkYsQ0FBQyxDQUFDRyxTQUFGLENBQVksQ0FBWixFQUFlLENBQWYsQ0FBdkIsR0FBMkNILENBQXZEO0FBQ0EsUUFBSTFCLENBQUMsR0FBRzhCLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDRSxTQUFOLENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQUQsRUFBd0IsRUFBeEIsQ0FBaEI7QUFDQSxRQUFJakYsQ0FBQyxHQUFHa0YsUUFBUSxDQUFDSCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBRCxFQUF3QixFQUF4QixDQUFoQjtBQUNBLFFBQUlySyxDQUFDLEdBQUdzSyxRQUFRLENBQUNILEtBQUssQ0FBQ0UsU0FBTixDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFELEVBQXdCLEVBQXhCLENBQWhCO0FBRUEsV0FBTztBQUNIN0IsT0FBQyxFQUFFQSxDQURBO0FBRUhwRCxPQUFDLEVBQUVBLENBRkE7QUFHSHBGLE9BQUMsRUFBRUE7QUFIQSxLQUFQO0FBS0gsR0E3SlU7O0FBK0pYOzs7Ozs7Ozs7O0FBVUF1SyxVQUFRLEVBQUUsa0JBQVNDLEdBQVQsRUFBYztBQUNwQixXQUFPLFNBQVNBLEdBQUcsQ0FBQ2hDLENBQWIsR0FBaUIsSUFBakIsR0FBd0JnQyxHQUFHLENBQUNwRixDQUE1QixHQUFnQyxJQUFoQyxHQUF1Q29GLEdBQUcsQ0FBQ3hLLENBQTNDLEdBQStDLEdBQXREO0FBQ0g7QUEzS1UsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCeUssTzs7Ozs7QUFDbkIscUJBQWM7QUFBQTs7QUFBQTs7QUFDWjtBQUVBLFVBQUtDLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxVQUFLckMsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtzQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixDQUFDLENBQXZCO0FBQ0E7Ozs7Ozs7QUFNQSxVQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBOzs7Ozs7O0FBTUEsVUFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBOzs7Ozs7O0FBTUEsVUFBS0MsSUFBTCxHQUFZLElBQUlDLHdEQUFKLENBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBWjtBQUVBLFVBQUtDLFVBQUwsR0FBa0IsSUFBSUMsa0VBQUosRUFBbEI7QUFFQSxVQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBR0EsVUFBS0MsZUFBTCxHQUF1QixJQUFJQyxtREFBSixFQUF2QjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsSUFBSUQsbURBQUosRUFBdEI7QUFDQSxVQUFLRSxZQUFMLEdBQW9CLElBQUlGLG1EQUFKLEVBQXBCO0FBRUEsVUFBSzFELE1BQUwsR0FBYyxNQUFLQSxNQUFuQjtBQUNBLFVBQUs2RCxRQUFMLEdBQWdCLE1BQUtBLFFBQXJCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUEzQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBdEI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBN0I7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQTNCO0FBM0NZO0FBNENiOzs7OztBQVlEOzs7Ozs7bUNBTWU3SyxJLEVBQU07QUFDbkIsVUFBSThLLFdBQVcsR0FBRyxLQUFLQSxXQUF2QjtBQUNBLFVBQUdBLFdBQVcsS0FBSyxLQUFLVixZQUF4QixFQUFzQztBQUV0QyxVQUFNVyxNQUFNLEdBQUcsS0FBS0EsTUFBcEI7O0FBQ0EsV0FBSyxJQUFJM0ksQ0FBQyxHQUFHLENBQVIsRUFBVzRJLENBQUMsR0FBR0QsTUFBTSxDQUFDNUksTUFBM0IsRUFBbUNDLENBQUMsR0FBRzRJLENBQXZDLEVBQTBDNUksQ0FBQyxFQUEzQyxFQUErQztBQUM3QyxZQUFJLENBQUMySSxNQUFNLENBQUMzSSxDQUFELENBQVgsRUFBZ0I7QUFDZCxlQUFLd0ksZ0JBQUwsQ0FBc0J4SSxDQUF0QixFQUF5QnBDLElBQXpCO0FBQ0ErSyxnQkFBTSxDQUFDM0ksQ0FBRCxDQUFOLEdBQVksSUFBWjtBQUNBLGVBQUswSSxXQUFMLEdBQW1CQSxXQUFXLEdBQUcsQ0FBakM7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7O3FDQUVnQjdLLEssRUFBT0QsSSxFQUFLO0FBQzNCLFVBQU02QyxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxVQUFJbEQsUUFBUSxHQUFHa0QsU0FBUyxDQUFDNUMsS0FBRCxDQUF4Qjs7QUFFQSxVQUFHLENBQUNOLFFBQUosRUFBYTtBQUNYa0QsaUJBQVMsQ0FBQzVDLEtBQUQsQ0FBVCxHQUFtQk4sUUFBUSxHQUFHLElBQUkrRyxzREFBSixFQUE5QjtBQUNEOztBQUVELFVBQUlpRCxXQUFXLEdBQUcsS0FBS0EsV0FBdkI7QUFDQSxVQUFJckMsVUFBVSxHQUFHLEtBQUtBLFVBQXRCO0FBRUEzSCxjQUFRLENBQUNQLEtBQVQ7QUFDQTZMLGdGQUFZLENBQUMsSUFBRCxFQUFPdEwsUUFBUCxFQUFpQmdLLFdBQWpCLENBQVo7QUFDQWhLLGNBQVEsQ0FBQ3VMLGFBQVQsQ0FBdUI1RCxVQUF2QjtBQUNBM0gsY0FBUSxDQUFDaUgsTUFBVCxDQUFnQjNHLEtBQWhCLEVBQXVCRCxJQUF2QjtBQUVBLFdBQUtxSyxlQUFMLENBQXFCYyxRQUFyQixDQUE4QnhMLFFBQTlCO0FBRUQ7OzttQ0FFY0EsUSxFQUFVTSxLLEVBQU9ELEksRUFBTThKLE8sRUFBUTtBQUM1QyxVQUFNc0IsR0FBRyxHQUFHekwsUUFBUSxDQUFDaUgsTUFBVCxDQUFnQjNHLEtBQWhCLEVBQXVCRCxJQUF2QixDQUFaO0FBRUEsV0FBS2tLLFVBQUwsQ0FBZ0JTLFNBQWhCLENBQTBCaEwsUUFBMUIsRUFBb0NLLElBQXBDLEVBQTBDOEosT0FBMUM7O0FBRUEsVUFBR3NCLEdBQUgsRUFBTztBQUNMLGFBQUtiLGNBQUwsQ0FBb0JZLFFBQXBCLENBQTZCeEwsUUFBN0I7QUFDRCxPQUZELE1BRUs7QUFDSCxhQUFLNkssWUFBTCxDQUFrQlcsUUFBbEIsQ0FBMkJ4TCxRQUEzQjtBQUNEOztBQUNELGFBQU95TCxHQUFQO0FBQ0Q7Ozs4QkFFU3BMLEksRUFBTTtBQUNkLFVBQU04SixPQUFPLEdBQUcsSUFBSSxLQUFLQSxPQUF6QjtBQUNBLFdBQUtJLFVBQUwsQ0FBZ0JTLFNBQWhCLENBQTBCLElBQTFCLEVBQWdDM0ssSUFBaEMsRUFBc0M4SixPQUF0QztBQUdBLFVBQU1pQixNQUFNLEdBQUcsS0FBS0EsTUFBcEI7QUFDQSxVQUFJRCxXQUFXLEdBQUcsS0FBS0EsV0FBdkI7QUFDQSxVQUFNakksU0FBUyxHQUFHLEtBQUtBLFNBQXZCOztBQUVBLFdBQUssSUFBSVQsQ0FBQyxHQUFHLENBQVIsRUFBVzRJLENBQUMsR0FBR0QsTUFBTSxDQUFDNUksTUFBM0IsRUFBbUNDLENBQUMsR0FBRzRJLENBQXZDLEVBQTBDNUksQ0FBQyxFQUEzQyxFQUErQztBQUM3QyxZQUFJMkksTUFBTSxDQUFDM0ksQ0FBRCxDQUFOLElBQWEsQ0FBQyxLQUFLeUksY0FBTCxDQUFvQmhJLFNBQVMsQ0FBQ1QsQ0FBRCxDQUE3QixFQUFrQ0EsQ0FBbEMsRUFBcUNwQyxJQUFyQyxFQUEyQzhKLE9BQTNDLENBQWxCLEVBQXVFO0FBQ3JFaUIsZ0JBQU0sQ0FBQzNJLENBQUQsQ0FBTixHQUFZLEtBQVo7QUFDQTBJLHFCQUFXO0FBQ1o7QUFDRjs7QUFDRCxXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUVEOzs7NkJBRVE5SyxJLEVBQU07QUFDYixXQUFLNEosUUFBTCxJQUFpQjVKLElBQWpCOztBQUNBLFVBQUcsS0FBSzRKLFFBQUwsR0FBZ0IsS0FBS0MsY0FBeEIsRUFBdUM7QUFDckMsWUFBTTFILE1BQU0sR0FBRyxLQUFLNkgsSUFBTCxDQUFVbEssUUFBVixDQUFtQkUsSUFBbkIsQ0FBZjs7QUFFQSxhQUFLLElBQUlvQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxNQUFwQixFQUE0QkMsQ0FBQyxFQUE3QixFQUFpQztBQUMvQixlQUFLc0ksY0FBTCxDQUFvQjFLLElBQXBCO0FBQ0Q7QUFDRjtBQUNGOzs7eUJBRUk0SixRLEVBQVUxSyxJLEVBQU07QUFDbkIsV0FBSzBLLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxXQUFLQyxjQUFMLEdBQXNCRCxRQUFRLElBQUlwSSxRQUFsQzs7QUFFQSxVQUFHLENBQUM2SixLQUFLLENBQUNuTSxJQUFELENBQVQsRUFBaUI7QUFDZixhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7QUFFRCxXQUFLOEssSUFBTCxDQUFVakQsSUFBVjtBQUNEO0FBRUQ7Ozs7Ozs7K0JBSVc7QUFDVCxXQUFLOEMsY0FBTCxHQUFzQixDQUFDLENBQXZCO0FBQ0EsV0FBS0QsUUFBTCxHQUFnQixDQUFoQjtBQUNEO0FBRUQ7Ozs7Ozs7eUNBSXFCO0FBQ25CLFdBQUttQixNQUFMLENBQVlPLE9BQVosQ0FBb0IsVUFBQ3RNLENBQUQ7QUFBQSxlQUFLQSxDQUFDLEdBQUMsS0FBUDtBQUFBLE9BQXBCO0FBQ0Q7QUFFRDs7Ozs7OztzQ0FJa0J1TSxJLEVBQU07QUFDdEIsVUFBSUEsSUFBSSxDQUFDLE1BQUQsQ0FBUixFQUFrQjtBQUNoQkEsWUFBSSxDQUFDeEUsSUFBTCxDQUFVLElBQVY7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLeUUsT0FBTDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7OztvQ0FPZ0I7QUFDZCxVQUFNckosTUFBTSxHQUFHc0osU0FBUyxDQUFDdEosTUFBekI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxNQUFwQixFQUE0QkMsQ0FBQyxFQUE3QixFQUFpQztBQUMvQixhQUFLdUgsV0FBTCxDQUFpQmhDLElBQWpCLENBQXNCOEQsU0FBUyxDQUFDckosQ0FBRCxDQUEvQjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7cUNBS2lCc0osVyxFQUFhO0FBQzVCLFVBQU16TCxLQUFLLEdBQUcsS0FBSzBKLFdBQUwsQ0FBaUI1QixPQUFqQixDQUF5QjJELFdBQXpCLENBQWQ7O0FBQ0EsVUFBSXpMLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7QUFDZCxhQUFLMEosV0FBTCxDQUFpQjNCLE1BQWpCLENBQXdCL0gsS0FBeEIsRUFBK0IsQ0FBL0I7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7eUNBSXFCO0FBQ25CLFdBQUswSixXQUFMLENBQWlCeEgsTUFBakIsR0FBMEIsQ0FBMUI7QUFDRDtBQUVEOzs7Ozs7Ozs7O21DQU9lO0FBQ2IsVUFBTUEsTUFBTSxHQUFHc0osU0FBUyxDQUFDdEosTUFBekI7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxNQUFwQixFQUE0QkMsQ0FBQyxFQUE3QixFQUFpQztBQUMvQixhQUFLa0YsVUFBTCxDQUFnQkssSUFBaEIsQ0FBcUI4RCxTQUFTLENBQUNySixDQUFELENBQTlCO0FBQ0EsWUFBSXFKLFNBQVMsQ0FBQ3JKLENBQUQsQ0FBVCxDQUFhd0YsY0FBYixDQUE0QixTQUE1QixDQUFKLEVBQ0U2RCxTQUFTLENBQUNySixDQUFELENBQVQsQ0FBYVIsT0FBYixDQUFxQitGLElBQXJCLENBQTBCLElBQTFCO0FBQ0g7QUFDRjtBQUVEOzs7Ozs7OztvQ0FLZ0JELFMsRUFBVztBQUN6QixVQUFNekgsS0FBSyxHQUFHLEtBQUtxSCxVQUFMLENBQWdCUyxPQUFoQixDQUF3QkwsU0FBeEIsQ0FBZDtBQUNBLFVBQUl6SCxLQUFLLEdBQUcsQ0FBQyxDQUFiLEVBQ0UsS0FBS3FILFVBQUwsQ0FBZ0JVLE1BQWhCLENBQXVCL0gsS0FBdkIsRUFBOEIsQ0FBOUI7QUFDSDtBQUVEOzs7Ozs7OzBDQUlzQjtBQUNwQixXQUFLcUgsVUFBTCxDQUFnQm5GLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0Q7OzsyQkFFTW5DLEksRUFBTTtBQUNYLFdBQUswQixHQUFMLElBQVkxQixJQUFaOztBQUNBLFVBQUksS0FBSzJCLElBQUwsSUFBYyxLQUFLRCxHQUFMLElBQVksS0FBS3hDLElBQW5DLEVBQTBDO0FBQ3hDLGFBQUs2QyxPQUFMO0FBQ0Q7O0FBRUQsV0FBSzBJLFFBQUwsQ0FBY3pLLElBQWQ7QUFDQSxXQUFLMkssU0FBTCxDQUFlM0ssSUFBZjtBQUNEOzs7O0FBRUQ7Ozs7OEJBSVU7QUFDUixXQUFLMkIsSUFBTCxHQUFZLElBQVo7QUFDQSxXQUFLa0ksY0FBTCxHQUFzQixDQUFDLENBQXZCO0FBRUEsV0FBSzhCLGtCQUFMO0FBQ0EsV0FBS3BFLG1CQUFMOztBQUVBLFVBQUksS0FBS0wsTUFBVCxFQUFnQjtBQUNkLGFBQUtBLE1BQUwsQ0FBWTBFLGFBQVosQ0FBMEIsSUFBMUI7QUFDRDtBQUNGOzs7c0JBbk9nQnhFLEcsRUFBSTtBQUNuQixXQUFLMkQsTUFBTCxHQUFjLElBQUljLEtBQUosQ0FBVXpFLEdBQVYsRUFBZTBFLElBQWYsQ0FBb0IsS0FBcEIsQ0FBZDtBQUNBLFdBQUtqSixTQUFMLEdBQWlCLElBQUlnSixLQUFKLENBQVV6RSxHQUFWLENBQWpCO0FBQ0EsV0FBSzBELFdBQUwsR0FBbUIsQ0FBbkI7QUFDRCxLO3dCQUVpQjtBQUNoQixhQUFPLEtBQUtqSSxTQUFMLENBQWVWLE1BQXRCO0FBQ0Q7Ozs7RUF2RGtDdUUsc0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sSUFBTXFGLFFBQVEsR0FBRyxJQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxLQUFsQjtBQUNBLElBQU1wSyxPQUFPLEdBQUcsR0FBaEIsQyxDQUVQOztBQUNPLElBQU1xSyxLQUFLLEdBQUcsT0FBZDtBQUNBLElBQU1DLEdBQUcsR0FBRyxjQUFaO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLGNBQVo7QUFDQSxJQUFNQyxNQUFNLEdBQUcsUUFBZixDLENBRVA7O0FBQ08sSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxlQUF2QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxjQUF0QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxnQkFBeEIsQzs7Ozs7Ozs7Ozs7O0FDbEJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0MsT0FBVCxDQUFpQjVOLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjROLE1BQXZCLEVBQStCO0FBQ2xDLFNBQU8sSUFBSTlELGtEQUFKLENBQVMvSixDQUFULEVBQVlDLENBQVosRUFBZTROLE1BQWYsQ0FBUDtBQUNIO0FBRUQ7Q0FJQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5QnFCQyxVOzs7QUFDcEIsd0JBQWM7QUFBQTtBQUViOzs7OzRCQUVPLENBRVA7Ozt5QkFFSXZLLE8sRUFBUzVDLFEsRUFBVTtBQUN2QixVQUFJQSxRQUFKLEVBQWM7QUFDYixhQUFLa0ksVUFBTCxDQUFnQmxJLFFBQWhCO0FBQ0EsT0FGRCxNQUVPO0FBQ04sYUFBS2tJLFVBQUwsQ0FBZ0J0RixPQUFoQjtBQUNBO0FBQ0Q7OztpQ0FFWSxDQUVaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNzRixVQUFULENBQW9CdEYsT0FBcEIsRUFBNkI1QyxRQUE3QixFQUF1Q2dLLFdBQXZDLEVBQW9EO0FBQ2pFLE1BQU14SCxNQUFNLEdBQUd3SCxXQUFXLENBQUN4SCxNQUEzQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELE1BQXBCLEVBQTRCQyxDQUFDLEVBQTdCLEVBQWlDO0FBQy9CLFFBQU15RixXQUFVLEdBQUc4QixXQUFXLENBQUN2SCxDQUFELENBQTlCOztBQUNBLFFBQUl5RixXQUFVLFlBQVlpRixtREFBMUIsRUFBcUM7QUFDbkNqRixpQkFBVSxDQUFDZCxJQUFYLENBQWdCeEUsT0FBaEIsRUFBeUI1QyxRQUF6QjtBQUNELEtBRkQsTUFFTztBQUNMb0gsVUFBSSxDQUFDeEUsT0FBRCxFQUFVNUMsUUFBVixFQUFvQmtJLFdBQXBCLENBQUo7QUFDRDtBQUNGOztBQUVEa0MsYUFBVyxDQUFDeEgsT0FBRCxFQUFVNUMsUUFBVixDQUFYO0FBQ0Q7O0FBR0QsU0FBU29ILElBQVQsQ0FBY3hFLE9BQWQsRUFBdUI1QyxRQUF2QixFQUFpQ2tJLFVBQWpDLEVBQTRDO0FBQzFDcEksb0RBQUksQ0FBQytJLG1CQUFMLENBQXlCN0ksUUFBekIsRUFBbUNrSSxVQUFuQztBQUNEOztBQUVELFNBQVNrQyxXQUFULENBQXFCeEgsT0FBckIsRUFBOEI1QyxRQUE5QixFQUF3QztBQUN0QyxNQUFJNEMsT0FBTyxDQUFDd0gsV0FBWixFQUF5QjtBQUN2QnBLLFlBQVEsQ0FBQ3NCLENBQVQsQ0FBV0csR0FBWCxDQUFlbUIsT0FBTyxDQUFDdEIsQ0FBdkI7QUFDQXRCLFlBQVEsQ0FBQ21GLENBQVQsQ0FBVzFELEdBQVgsQ0FBZW1CLE9BQU8sQ0FBQ3VDLENBQXZCO0FBQ0FuRixZQUFRLENBQUNYLENBQVQsQ0FBV29DLEdBQVgsQ0FBZW1CLE9BQU8sQ0FBQ3ZELENBQXZCO0FBQ0FXLFlBQVEsQ0FBQ21GLENBQVQsQ0FBV2lJLE1BQVgsQ0FBa0JDLHVFQUFlLENBQUN6SyxPQUFPLENBQUN5RCxRQUFULENBQWpDO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7O0lBRXFCaUgsSTs7Ozs7QUFFcEIsZ0JBQVlqTyxDQUFaLEVBQWVDLENBQWYsRUFBa0I0SixDQUFsQixFQUFxQjtBQUFBOztBQUFBOztBQUNwQjtBQUVBLFVBQUtxRSxPQUFMLEdBQWV6TixrREFBSSxDQUFDQyxZQUFMLENBQWtCVixDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0I0SixDQUF4QixDQUFmO0FBSG9CO0FBSXBCOzs7OytCQUVVNUIsTSxFQUFRO0FBQ2xCLFVBQUksS0FBS2lHLE9BQUwsQ0FBYWxPLENBQWIsSUFBa0J3QyxRQUF0QixFQUErQjtBQUM5QnlGLGNBQU0sQ0FBQy9ILElBQVAsR0FBY3NDLFFBQWQ7QUFDQSxPQUZELE1BRUs7QUFDSnlGLGNBQU0sQ0FBQy9ILElBQVAsR0FBYyxLQUFLZ08sT0FBTCxDQUFhcE4sUUFBYixFQUFkO0FBQ0E7QUFDRDs7OztFQWRnQ2dOLG1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbEM7QUFDQTs7SUFFcUJLLEk7Ozs7O0FBRWpCLGdCQUFZbk8sQ0FBWixFQUFlQyxDQUFmLEVBQWtCNEosQ0FBbEIsRUFBcUI7QUFBQTs7QUFBQTs7QUFDakI7QUFFQSxVQUFLdUUsT0FBTCxHQUFlM04sa0RBQUksQ0FBQ0MsWUFBTCxDQUFrQlYsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCNEosQ0FBeEIsQ0FBZjtBQUhpQjtBQUlwQjs7OzsrQkFFVTVCLE0sRUFBUTtBQUNmQSxZQUFNLENBQUN6RSxJQUFQLEdBQWMsS0FBSzRLLE9BQUwsQ0FBYXROLFFBQWIsRUFBZDtBQUNIOzs7O0VBVjZCZ04sbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hsQztBQUNBOztJQUVxQk8sUTs7Ozs7QUFFakIsb0JBQVk3SixJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2pCO0FBRUgsVUFBS0EsSUFBTCxHQUFZQSxJQUFJLElBQUksSUFBSThKLFNBQUosRUFBcEI7QUFIb0I7QUFJakI7Ozs7MEJBRUs5SixJLEVBQUs7QUFDYixXQUFLQSxJQUFMLEdBQVlBLElBQUksSUFBSSxJQUFJOEosU0FBSixFQUFwQjtBQUNHOzs7K0JBRVVyRyxNLEVBQVE7QUFDckIsV0FBS3pELElBQUwsQ0FBVStKLFdBQVY7QUFDQXRHLFlBQU0sQ0FBQ2hHLENBQVAsQ0FBU3lELENBQVQsR0FBYSxLQUFLbEIsSUFBTCxDQUFVZ0ssTUFBVixDQUFpQjlJLENBQTlCO0FBQ0F1QyxZQUFNLENBQUNoRyxDQUFQLENBQVMwRCxDQUFULEdBQWEsS0FBS25CLElBQUwsQ0FBVWdLLE1BQVYsQ0FBaUI3SSxDQUE5QjtBQUNBOzs7O0VBaEJvQ21JLG1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdEM7QUFDQTs7SUFFcUJXLE07Ozs7O0FBRWpCLGtCQUFZek8sQ0FBWixFQUFlQyxDQUFmLEVBQWtCNEosQ0FBbEIsRUFBcUI7QUFBQTs7QUFBQTs7QUFDcEI7QUFFSCxVQUFLckksTUFBTCxHQUFjZixrREFBSSxDQUFDQyxZQUFMLENBQWtCVixDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0I0SixDQUF4QixDQUFkO0FBSHVCO0FBSXBCOzs7OzBCQUVLN0osQyxFQUFHQyxDLEVBQUc0SixDLEVBQUU7QUFDaEIsV0FBS3JJLE1BQUwsR0FBY2Ysa0RBQUksQ0FBQ0MsWUFBTCxDQUFrQlYsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCNEosQ0FBeEIsQ0FBZDtBQUNHOzs7K0JBRVVsSixRLEVBQVU7QUFDdkJBLGNBQVEsQ0FBQ2EsTUFBVCxHQUFrQixLQUFLQSxNQUFMLENBQVlWLFFBQVosRUFBbEI7QUFDQUgsY0FBUSxDQUFDQyxTQUFULENBQW1CNEcsU0FBbkIsR0FBK0I3RyxRQUFRLENBQUNhLE1BQXhDO0FBQ0E7Ozs7RUFma0NzTSxtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIcEM7O0lBRXFCN0MsSTs7O0FBRW5CLGdCQUFZeUQsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0MsTUFBTCxHQUFjRixNQUFkO0FBQ0EsU0FBS0csT0FBTCxHQUFlRixPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjbk8sa0RBQUksQ0FBQ0MsWUFBTCxDQUFrQixLQUFLa08sTUFBdkIsQ0FBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZXBPLGtEQUFJLENBQUNDLFlBQUwsQ0FBa0IsS0FBS21PLE9BQXZCLENBQWY7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtoSCxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLK0csU0FBTCxHQUFpQixDQUFqQjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsS0FBS0YsT0FBTCxDQUFhL04sUUFBYixFQUFoQjtBQUNEOzs7NkJBRVFFLEksRUFBTTtBQUNiLFdBQUs4TixTQUFMLElBQWtCOU4sSUFBbEI7O0FBQ0EsVUFBSSxLQUFLOE4sU0FBTCxJQUFrQixLQUFLQyxRQUEzQixFQUFxQztBQUNuQyxhQUFLRCxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixLQUFLRixPQUFMLENBQWEvTixRQUFiLEVBQWhCOztBQUNBLFlBQUksS0FBSzhOLE1BQUwsQ0FBWTNPLENBQVosSUFBaUIsQ0FBckIsRUFBd0I7QUFDdEIsY0FBSSxLQUFLMk8sTUFBTCxDQUFZOU4sUUFBWixDQUFxQixLQUFyQixJQUE4QixHQUFsQyxFQUNFLE9BQU8sQ0FBUCxDQURGLEtBR0UsT0FBTyxDQUFQO0FBQ0gsU0FMRCxNQUtPO0FBQ0wsaUJBQU8sS0FBSzhOLE1BQUwsQ0FBWTlOLFFBQVosQ0FBcUIsSUFBckIsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsYUFBTyxDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJrTyxROzs7OztBQUNwQixvQkFBWUMsSUFBWixFQUFrQkMsTUFBbEIsRUFBMEJDLElBQTFCLEVBQWdDO0FBQUE7O0FBQUE7O0FBQy9CO0FBRUEsVUFBS0MsSUFBTCxHQUFZM08sa0RBQUksQ0FBQ0MsWUFBTCxDQUFrQnVPLElBQWxCLENBQVo7QUFDQSxVQUFLSSxNQUFMLEdBQWM1TyxrREFBSSxDQUFDQyxZQUFMLENBQWtCd08sTUFBbEIsQ0FBZDtBQUNBLFVBQUtDLElBQUwsR0FBWTFPLGtEQUFJLENBQUNpRSxTQUFMLENBQWV5SyxJQUFmLEVBQXFCLFFBQXJCLENBQVosQ0FMK0IsQ0FPL0I7O0FBQ0EsVUFBS0csS0FBTCxHQUFhLE9BQWI7QUFDQSxVQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLFVBQUtDLE9BQUwsR0FBZSxNQUFLSixJQUFMLENBQVV0TyxRQUFWLEVBQWY7QUFDQSxVQUFLMk8sWUFBTCxHQUFvQnhNLElBQUksQ0FBQzZFLEVBQUwsR0FBVSxHQUE5QjtBQVgrQjtBQVkvQjs7OzswQkFFS21ILEksRUFBTUMsTSxFQUFRQyxJLEVBQU07QUFDekIsV0FBS0MsSUFBTCxHQUFZM08sa0RBQUksQ0FBQ0MsWUFBTCxDQUFrQnVPLElBQWxCLENBQVo7QUFDQSxXQUFLSSxNQUFMLEdBQWM1TyxrREFBSSxDQUFDQyxZQUFMLENBQWtCd08sTUFBbEIsQ0FBZDtBQUNBLFdBQUtDLElBQUwsR0FBWTFPLGtEQUFJLENBQUNpRSxTQUFMLENBQWV5SyxJQUFmLEVBQXFCLFFBQXJCLENBQVo7QUFDQTs7O3NDQUVpQk8sRSxFQUFJO0FBQ3JCLGFBQU9BLEVBQUUsR0FBRzdNLHNEQUFaO0FBQ0E7OzsrQkFFVW9GLE0sRUFBUTtBQUNsQixVQUFJLEtBQUtrSCxJQUFMLElBQWEsS0FBS0ksQ0FBbEIsSUFBdUIsS0FBS0osSUFBTCxJQUFhLEtBQUtJLENBQXpDLElBQThDLEtBQUtKLElBQUwsSUFBYSxLQUFLRyxLQUFwRSxFQUEyRTtBQUMxRSxZQUFNSyxVQUFVLEdBQUduSixrRUFBVSxDQUFDLEtBQUs2SSxNQUFMLENBQVlyUCxDQUFiLEVBQWdCLEtBQUtxUCxNQUFMLENBQVlwUCxDQUE1QixDQUFWLEdBQXlDLEtBQUt3UCxZQUFqRTtBQUNBLFlBQU1HLE9BQU8sR0FBRyxJQUFJQyxxREFBSixDQUFZLEtBQUtDLGlCQUFMLENBQXVCLEtBQUtOLE9BQTVCLENBQVosRUFBa0RHLFVBQWxELENBQWhCO0FBQ0ExSCxjQUFNLENBQUNuQyxDQUFQLENBQVNKLENBQVQsR0FBYWtLLE9BQU8sQ0FBQ0csSUFBUixFQUFiO0FBQ0E5SCxjQUFNLENBQUNuQyxDQUFQLENBQVNILENBQVQsR0FBYWlLLE9BQU8sQ0FBQ0ksSUFBUixFQUFiO0FBQ0EsT0FMRCxNQUtPO0FBQ04vSCxjQUFNLENBQUNuQyxDQUFQLENBQVNKLENBQVQsR0FBYSxLQUFLb0ssaUJBQUwsQ0FBdUIsS0FBS1YsSUFBTCxDQUFVdE8sUUFBVixFQUF2QixDQUFiO0FBQ0FtSCxjQUFNLENBQUNuQyxDQUFQLENBQVNILENBQVQsR0FBYSxLQUFLbUssaUJBQUwsQ0FBdUIsS0FBS1QsTUFBTCxDQUFZdk8sUUFBWixFQUF2QixDQUFiO0FBQ0E7QUFDRDs7OztFQW5Db0NnTixtRDs7Ozs7Ozs7Ozs7Ozs7QUNOdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVN0SCxVQUFULENBQW9CeEcsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCZ1EsR0FBMUIsRUFBK0I7QUFDcEMsTUFBSSxDQUFDQSxHQUFMLEVBQ0UsT0FBUWpRLENBQUMsR0FBR2lELElBQUksQ0FBQ2lOLE1BQUwsTUFBaUJqUSxDQUFDLEdBQUdELENBQXJCLENBQVosQ0FERixLQUdFLE9BQU9pRCxJQUFJLENBQUNrTixLQUFMLENBQVdsTixJQUFJLENBQUNpTixNQUFMLE1BQWlCalEsQ0FBQyxHQUFHRCxDQUFyQixDQUFYLElBQXNDQSxDQUE3QztBQUNIO0FBRU0sU0FBU29RLGNBQVQsQ0FBd0J2QyxNQUF4QixFQUFnQ3dDLENBQWhDLEVBQW1DSixHQUFuQyxFQUF3QztBQUM3QyxTQUFPekosVUFBVSxDQUFDcUgsTUFBTSxHQUFHd0MsQ0FBVixFQUFheEMsTUFBTSxHQUFHd0MsQ0FBdEIsRUFBeUJKLEdBQXpCLENBQWpCO0FBQ0Q7QUFFTSxTQUFTakMsZUFBVCxDQUF5QmhPLENBQXpCLEVBQTRCO0FBQ2pDLFNBQU9BLENBQUMsR0FBR2lELElBQUksQ0FBQzZFLEVBQVQsR0FBYyxHQUFyQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JEOztJQUVxQnFELG9COzs7QUFFbkIsZ0NBQVlnRSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBSSxJQUFJakMsb0RBQXBCO0FBRUEsU0FBS3ZCLFNBQUwsR0FBaUIsS0FBS0EsU0FBdEI7QUFDQSxTQUFLMkUsY0FBTCxHQUFzQixLQUFLQSxjQUEzQjtBQUNEOzs7OzhCQUVTM1AsUSxFQUFVSyxJLEVBQU04SixPLEVBQVM7QUFDakMsV0FBS3dGLGNBQUwsQ0FBb0IzUCxRQUFwQixFQUE4QkssSUFBOUIsRUFBb0M4SixPQUFwQztBQUNEOzs7bUNBRWNuSyxRLEVBQVVLLEksRUFBTThKLE8sRUFBUztBQUN0QyxVQUFJLENBQUNuSyxRQUFRLENBQUNxSCxLQUFkLEVBQXFCO0FBQ25CckgsZ0JBQVEsQ0FBQzBILEdBQVQsQ0FBYXBHLENBQWIsQ0FBZUYsSUFBZixDQUFvQnBCLFFBQVEsQ0FBQ3NCLENBQTdCO0FBQ0F0QixnQkFBUSxDQUFDMEgsR0FBVCxDQUFhdkMsQ0FBYixDQUFlL0QsSUFBZixDQUFvQnBCLFFBQVEsQ0FBQ21GLENBQTdCO0FBQ0FuRixnQkFBUSxDQUFDWCxDQUFULENBQVdtQyxjQUFYLENBQTBCLElBQUl4QixRQUFRLENBQUM2QyxJQUF2QztBQUNBN0MsZ0JBQVEsQ0FBQ21GLENBQVQsQ0FBVzFELEdBQVgsQ0FBZXpCLFFBQVEsQ0FBQ1gsQ0FBVCxDQUFXbUMsY0FBWCxDQUEwQm5CLElBQTFCLENBQWY7QUFDQUwsZ0JBQVEsQ0FBQ3NCLENBQVQsQ0FBV0csR0FBWCxDQUFlekIsUUFBUSxDQUFDMEgsR0FBVCxDQUFhdkMsQ0FBYixDQUFlM0QsY0FBZixDQUE4Qm5CLElBQTlCLENBQWY7O0FBQ0EsWUFBSThKLE9BQUosRUFBWTtBQUNWbkssa0JBQVEsQ0FBQ21GLENBQVQsQ0FBVzNELGNBQVgsQ0FBMEIySSxPQUExQjtBQUNEOztBQUNEbkssZ0JBQVEsQ0FBQ1gsQ0FBVCxDQUFXdVEsS0FBWDtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCSDs7SUFFcUJWLE87OztBQUVwQixtQkFBWXBILENBQVosRUFBZStILEdBQWYsRUFBbUI7QUFBQTs7QUFDbEIsU0FBSy9ILENBQUwsR0FBU3hGLElBQUksQ0FBQ3dOLEdBQUwsQ0FBU2hJLENBQVQsS0FBZSxDQUF4QjtBQUNBLFNBQUsrSCxHQUFMLEdBQVdBLEdBQUcsSUFBSSxDQUFsQjtBQUNBOzs7O3dCQUVHL0gsQyxFQUFHK0gsRyxFQUFLO0FBRVgsV0FBSy9ILENBQUwsR0FBU0EsQ0FBVDtBQUNBLFdBQUsrSCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxhQUFPLElBQVA7QUFFQTs7O3lCQUVJL0gsQyxFQUFHO0FBRVAsV0FBS0EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsYUFBTyxJQUFQO0FBRUE7OzsyQkFFTStILEcsRUFBSztBQUVYLFdBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUVBLGFBQU8sSUFBUDtBQUVBOzs7eUJBRUl2TyxDLEVBQUc7QUFFUCxXQUFLd0csQ0FBTCxHQUFTeEcsQ0FBQyxDQUFDd0csQ0FBWDtBQUNBLFdBQUsrSCxHQUFMLEdBQVd2TyxDQUFDLENBQUN1TyxHQUFiO0FBRUEsYUFBTyxJQUFQO0FBRUE7OzsrQkFFVTtBQUNWLGFBQU8sSUFBSS9PLGlEQUFKLENBQWEsS0FBS3NPLElBQUwsRUFBYixFQUEwQixLQUFLQyxJQUFMLEVBQTFCLENBQVA7QUFDQTs7OzJCQUVNO0FBQ04sYUFBTyxLQUFLdkgsQ0FBTCxHQUFTeEYsSUFBSSxDQUFDeU4sR0FBTCxDQUFTLEtBQUtGLEdBQWQsQ0FBaEI7QUFDQTs7OzJCQUVNO0FBQ04sYUFBTyxDQUFDLEtBQUsvSCxDQUFOLEdBQVV4RixJQUFJLENBQUMwTixHQUFMLENBQVMsS0FBS0gsR0FBZCxDQUFqQjtBQUNBOzs7Z0NBRVc7QUFFWCxXQUFLL0gsQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFPLElBQVA7QUFDQTs7OzJCQUVNM0MsQyxFQUFHO0FBRVQsYUFBU0EsQ0FBQyxDQUFDMkMsQ0FBRixLQUFRLEtBQUtBLENBQWQsSUFBc0IzQyxDQUFDLENBQUMwSyxHQUFGLEtBQVUsS0FBS0EsR0FBN0M7QUFFQTs7OzhCQUVTO0FBRVQsYUFBTyxDQUFDLEtBQUsvSCxDQUFOLEVBQVMsS0FBSytILEdBQWQsQ0FBUDtBQUVBOzs7NEJBRU87QUFDUCxXQUFLL0gsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxXQUFLK0gsR0FBTCxHQUFXLEdBQVg7QUFDQSxhQUFPLElBQVA7QUFDQTs7OzRCQUVPO0FBRVAsYUFBTyxJQUFJWCxPQUFKLENBQVksS0FBS3BILENBQWpCLEVBQW9CLEtBQUsrSCxHQUF6QixDQUFQO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGRjs7SUFFcUJ6RyxJOzs7QUFDcEIsZ0JBQVkvSixDQUFaLEVBQWVDLENBQWYsRUFBa0M7QUFBQSxRQUFoQjROLE1BQWdCLHVFQUFQLEtBQU87O0FBQUE7O0FBQ2pDLFFBQUloQixLQUFLLENBQUMrRCxPQUFOLENBQWM1USxDQUFkLENBQUosRUFBc0I7QUFDckIsV0FBSzRRLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBSzVRLENBQUwsR0FBU0EsQ0FBVDtBQUNBLEtBSEQsTUFHTztBQUNOLFdBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFdBQUtDLENBQUwsR0FBU0EsQ0FBQyxJQUFJLEtBQUtELENBQW5CO0FBQ0EsV0FBSzZOLE1BQUwsR0FBY0EsTUFBZDtBQUNBO0FBQ0Q7Ozs7NkJBRVFvQyxHLEVBQUk7QUFDWixVQUFJLEtBQUtXLE9BQVQsRUFBa0I7QUFDakIsZUFBTyxLQUFLNVEsQ0FBTCxDQUFPaUQsSUFBSSxDQUFDa04sS0FBTCxDQUFXLEtBQUtuUSxDQUFMLENBQU9tRCxNQUFQLEdBQWdCRixJQUFJLENBQUNpTixNQUFMLEVBQTNCLENBQVAsQ0FBUDtBQUNBLE9BRkQsTUFFTztBQUNOLFlBQUksQ0FBQyxLQUFLckMsTUFBVixFQUFpQjtBQUNoQixpQkFBT3JILDZEQUFVLENBQUMsS0FBS3hHLENBQU4sRUFBUyxLQUFLQyxDQUFkLEVBQWlCZ1EsR0FBakIsQ0FBakI7QUFDQSxTQUZELE1BRUs7QUFDSixpQkFBT0csaUVBQWMsQ0FBQyxLQUFLcFEsQ0FBTixFQUFTLEtBQUtDLENBQWQsRUFBaUJnUSxHQUFqQixDQUFyQjtBQUNBO0FBQ0Q7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN2Qm1CeE8sUTs7O0FBRW5CLG9CQUFZaUUsQ0FBWixFQUFlQyxDQUFmLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS0QsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDRDs7Ozt3QkFFR0QsQyxFQUFHQyxDLEVBQUc7QUFFUixXQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFPLElBQVA7QUFFRDs7O3lCQUVJRCxDLEVBQUc7QUFFTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFPLElBQVA7QUFFRDs7O3lCQUVJQyxDLEVBQUc7QUFFTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFFQSxhQUFPLElBQVA7QUFFRDs7O2lDQUVZMUUsSyxFQUFPNkIsSyxFQUFPO0FBRXpCLGNBQVM3QixLQUFUO0FBRUUsYUFBSyxDQUFMO0FBQ0UsZUFBS3lFLENBQUwsR0FBUzVDLEtBQVQ7QUFDQTs7QUFDRixhQUFLLENBQUw7QUFDRSxlQUFLNkMsQ0FBTCxHQUFTN0MsS0FBVDtBQUNBOztBQUNGO0FBQ0UsZ0JBQU0sSUFBSStOLEtBQUosQ0FBVSw0QkFBNEI1UCxLQUF0QyxDQUFOO0FBVEo7QUFhRDs7O2tDQUVhO0FBQ1osVUFBSSxLQUFLeUUsQ0FBTCxJQUFVLENBQWQsRUFDRSxPQUFPekMsSUFBSSxDQUFDNEUsS0FBTCxDQUFXLEtBQUtsQyxDQUFoQixFQUFtQixLQUFLRCxDQUF4QixDQUFQLENBREYsS0FFSyxJQUFJLEtBQUtDLENBQUwsR0FBUyxDQUFiLEVBQ0gsT0FBTzFDLElBQUksQ0FBQzZFLEVBQUwsR0FBVSxDQUFqQixDQURHLEtBRUEsSUFBSSxLQUFLbkMsQ0FBTCxHQUFTLENBQWIsRUFDSCxPQUFPLENBQUMxQyxJQUFJLENBQUM2RSxFQUFOLEdBQVcsQ0FBbEI7QUFDSDs7O2lDQUVZN0csSyxFQUFPO0FBRWxCLGNBQVNBLEtBQVQ7QUFFRSxhQUFLLENBQUw7QUFDRSxpQkFBTyxLQUFLeUUsQ0FBWjs7QUFDRixhQUFLLENBQUw7QUFDRSxpQkFBTyxLQUFLQyxDQUFaOztBQUNGO0FBQ0UsZ0JBQU0sSUFBSWtMLEtBQUosQ0FBVSw0QkFBNEI1UCxLQUF0QyxDQUFOO0FBUEo7QUFXRDs7O3lCQUVJNkUsQyxFQUFHO0FBRU4sV0FBS0osQ0FBTCxHQUFTSSxDQUFDLENBQUNKLENBQVg7QUFDQSxXQUFLQyxDQUFMLEdBQVNHLENBQUMsQ0FBQ0gsQ0FBWDtBQUVBLGFBQU8sSUFBUDtBQUVEOzs7d0JBRUdHLEMsRUFBR2dMLEMsRUFBRztBQUVSLFVBQUlBLENBQUMsS0FBS3ZRLFNBQVYsRUFBcUI7QUFDbkIsZUFBTyxLQUFLd1EsVUFBTCxDQUFnQmpMLENBQWhCLEVBQW1CZ0wsQ0FBbkIsQ0FBUDtBQUVEOztBQUVELFdBQUtwTCxDQUFMLElBQVVJLENBQUMsQ0FBQ0osQ0FBWjtBQUNBLFdBQUtDLENBQUwsSUFBVUcsQ0FBQyxDQUFDSCxDQUFaO0FBRUEsYUFBTyxJQUFQO0FBRUQ7OzswQkFFSzNGLEMsRUFBR0MsQyxFQUFHO0FBRVYsV0FBS3lGLENBQUwsSUFBVTFGLENBQVY7QUFDQSxXQUFLMkYsQ0FBTCxJQUFVMUYsQ0FBVjtBQUVBLGFBQU8sSUFBUDtBQUVEOzs7K0JBRVVELEMsRUFBR0MsQyxFQUFHO0FBRWYsV0FBS3lGLENBQUwsR0FBUzFGLENBQUMsQ0FBQzBGLENBQUYsR0FBTXpGLENBQUMsQ0FBQ3lGLENBQWpCO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTM0YsQ0FBQyxDQUFDMkYsQ0FBRixHQUFNMUYsQ0FBQyxDQUFDMEYsQ0FBakI7QUFFQSxhQUFPLElBQVA7QUFFRDs7OzhCQUVTcUwsQyxFQUFHO0FBRVgsV0FBS3RMLENBQUwsSUFBVXNMLENBQVY7QUFDQSxXQUFLckwsQ0FBTCxJQUFVcUwsQ0FBVjtBQUVBLGFBQU8sSUFBUDtBQUVEOzs7d0JBRUdsTCxDLEVBQUdnTCxDLEVBQUc7QUFFUixVQUFJQSxDQUFDLEtBQUt2USxTQUFWLEVBQXFCO0FBQ25CLGVBQU8sS0FBSzBRLFVBQUwsQ0FBZ0JuTCxDQUFoQixFQUFtQmdMLENBQW5CLENBQVA7QUFFRDs7QUFFRCxXQUFLcEwsQ0FBTCxJQUFVSSxDQUFDLENBQUNKLENBQVo7QUFDQSxXQUFLQyxDQUFMLElBQVVHLENBQUMsQ0FBQ0gsQ0FBWjtBQUVBLGFBQU8sSUFBUDtBQUVEOzs7K0JBRVUzRixDLEVBQUdDLEMsRUFBRztBQUVmLFdBQUt5RixDQUFMLEdBQVMxRixDQUFDLENBQUMwRixDQUFGLEdBQU16RixDQUFDLENBQUN5RixDQUFqQjtBQUNBLFdBQUtDLENBQUwsR0FBUzNGLENBQUMsQ0FBQzJGLENBQUYsR0FBTTFGLENBQUMsQ0FBQzBGLENBQWpCO0FBRUEsYUFBTyxJQUFQO0FBRUQ7OzttQ0FFY3FMLEMsRUFBRztBQUVoQixXQUFLdEwsQ0FBTCxJQUFVc0wsQ0FBVjtBQUNBLFdBQUtyTCxDQUFMLElBQVVxTCxDQUFWO0FBRUEsYUFBTyxJQUFQO0FBRUQ7OztpQ0FFWUEsQyxFQUFHO0FBRWQsVUFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUVYLGFBQUt0TCxDQUFMLElBQVVzTCxDQUFWO0FBQ0EsYUFBS3JMLENBQUwsSUFBVXFMLENBQVY7QUFFRCxPQUxELE1BS087QUFFTCxhQUFLdkwsR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFaO0FBRUQ7O0FBRUQsYUFBTyxJQUFQO0FBRUQ7Ozt3QkFFR0ssQyxFQUFHO0FBRUwsVUFBSSxLQUFLSixDQUFMLEdBQVNJLENBQUMsQ0FBQ0osQ0FBZixFQUFrQjtBQUVoQixhQUFLQSxDQUFMLEdBQVNJLENBQUMsQ0FBQ0osQ0FBWDtBQUVEOztBQUVELFVBQUksS0FBS0MsQ0FBTCxHQUFTRyxDQUFDLENBQUNILENBQWYsRUFBa0I7QUFFaEIsYUFBS0EsQ0FBTCxHQUFTRyxDQUFDLENBQUNILENBQVg7QUFFRDs7QUFFRCxhQUFPLElBQVA7QUFFRDs7O3dCQUVHRyxDLEVBQUc7QUFFTCxVQUFJLEtBQUtKLENBQUwsR0FBU0ksQ0FBQyxDQUFDSixDQUFmLEVBQWtCO0FBRWhCLGFBQUtBLENBQUwsR0FBU0ksQ0FBQyxDQUFDSixDQUFYO0FBRUQ7O0FBRUQsVUFBSSxLQUFLQyxDQUFMLEdBQVNHLENBQUMsQ0FBQ0gsQ0FBZixFQUFrQjtBQUVoQixhQUFLQSxDQUFMLEdBQVNHLENBQUMsQ0FBQ0gsQ0FBWDtBQUVEOztBQUVELGFBQU8sSUFBUDtBQUVEOzs7MEJBRUt1TCxHLEVBQUtoTyxHLEVBQUs7QUFFZDtBQUVBLFVBQUksS0FBS3dDLENBQUwsR0FBU3dMLEdBQUcsQ0FBQ3hMLENBQWpCLEVBQW9CO0FBRWxCLGFBQUtBLENBQUwsR0FBU3dMLEdBQUcsQ0FBQ3hMLENBQWI7QUFFRCxPQUpELE1BSU8sSUFBSSxLQUFLQSxDQUFMLEdBQVN4QyxHQUFHLENBQUN3QyxDQUFqQixFQUFvQjtBQUV6QixhQUFLQSxDQUFMLEdBQVN4QyxHQUFHLENBQUN3QyxDQUFiO0FBRUQ7O0FBRUQsVUFBSSxLQUFLQyxDQUFMLEdBQVN1TCxHQUFHLENBQUN2TCxDQUFqQixFQUFvQjtBQUVsQixhQUFLQSxDQUFMLEdBQVN1TCxHQUFHLENBQUN2TCxDQUFiO0FBRUQsT0FKRCxNQUlPLElBQUksS0FBS0EsQ0FBTCxHQUFTekMsR0FBRyxDQUFDeUMsQ0FBakIsRUFBb0I7QUFFekIsYUFBS0EsQ0FBTCxHQUFTekMsR0FBRyxDQUFDeUMsQ0FBYjtBQUVEOztBQUVELGFBQU8sSUFBUDtBQUVEOzs7NkJBRVE7QUFFUCxhQUFPLEtBQUt4RCxjQUFMLENBQW9CLENBQUMsQ0FBckIsQ0FBUDtBQUVEOzs7d0JBRUcyRCxDLEVBQUc7QUFFTCxhQUFPLEtBQUtKLENBQUwsR0FBU0ksQ0FBQyxDQUFDSixDQUFYLEdBQWUsS0FBS0MsQ0FBTCxHQUFTRyxDQUFDLENBQUNILENBQWpDO0FBRUQ7OzsrQkFFVTtBQUVULGFBQU8sS0FBS0QsQ0FBTCxHQUFTLEtBQUtBLENBQWQsR0FBa0IsS0FBS0MsQ0FBTCxHQUFTLEtBQUtBLENBQXZDO0FBRUQ7Ozs2QkFFUTtBQUVQLGFBQU8xQyxJQUFJLENBQUNtQixJQUFMLENBQVUsS0FBS3NCLENBQUwsR0FBUyxLQUFLQSxDQUFkLEdBQWtCLEtBQUtDLENBQUwsR0FBUyxLQUFLQSxDQUExQyxDQUFQO0FBRUQ7OztnQ0FFVztBQUVWLGFBQU8sS0FBS3dMLFlBQUwsQ0FBa0IsS0FBS2hPLE1BQUwsRUFBbEIsQ0FBUDtBQUVEOzs7K0JBRVUyQyxDLEVBQUc7QUFFWixhQUFPN0MsSUFBSSxDQUFDbUIsSUFBTCxDQUFVLEtBQUtnTixpQkFBTCxDQUF1QnRMLENBQXZCLENBQVYsQ0FBUDtBQUVEOzs7MkJBRU0wSyxHLEVBQUs7QUFDVixVQUFJOUssQ0FBQyxHQUFHLEtBQUtBLENBQWI7QUFDQSxVQUFJQyxDQUFDLEdBQUcsS0FBS0EsQ0FBYjtBQUNBLFdBQUtELENBQUwsR0FBU0EsQ0FBQyxHQUFHekMsSUFBSSxDQUFDME4sR0FBTCxDQUFTSCxHQUFULENBQUosR0FBb0I3SyxDQUFDLEdBQUcxQyxJQUFJLENBQUN5TixHQUFMLENBQVNGLEdBQVQsQ0FBakM7QUFDQSxXQUFLN0ssQ0FBTCxHQUFTLENBQUNELENBQUQsR0FBS3pDLElBQUksQ0FBQ3lOLEdBQUwsQ0FBU0YsR0FBVCxDQUFMLEdBQXFCN0ssQ0FBQyxHQUFHMUMsSUFBSSxDQUFDME4sR0FBTCxDQUFTSCxHQUFULENBQWxDO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztzQ0FFaUIxSyxDLEVBQUc7QUFFbkIsVUFBSXVMLEVBQUUsR0FBRyxLQUFLM0wsQ0FBTCxHQUFTSSxDQUFDLENBQUNKLENBQXBCO0FBQUEsVUFBdUI0TCxFQUFFLEdBQUcsS0FBSzNMLENBQUwsR0FBU0csQ0FBQyxDQUFDSCxDQUF2QztBQUNBLGFBQU8wTCxFQUFFLEdBQUdBLEVBQUwsR0FBVUMsRUFBRSxHQUFHQSxFQUF0QjtBQUVEOzs7OEJBRVNDLEMsRUFBRztBQUVYLFVBQUlDLFNBQVMsR0FBRyxLQUFLck8sTUFBTCxFQUFoQjs7QUFFQSxVQUFJcU8sU0FBUyxLQUFLLENBQWQsSUFBbUJELENBQUMsS0FBS0MsU0FBN0IsRUFBd0M7QUFFdEMsYUFBS3JQLGNBQUwsQ0FBb0JvUCxDQUFDLEdBQUdDLFNBQXhCO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBRUQ7Ozt5QkFFSTFMLEMsRUFBRzVFLEssRUFBTztBQUViLFdBQUt3RSxDQUFMLElBQVUsQ0FBQ0ksQ0FBQyxDQUFDSixDQUFGLEdBQU0sS0FBS0EsQ0FBWixJQUFrQnhFLEtBQTVCO0FBQ0EsV0FBS3lFLENBQUwsSUFBVSxDQUFDRyxDQUFDLENBQUNILENBQUYsR0FBTSxLQUFLQSxDQUFaLElBQWtCekUsS0FBNUI7QUFFQSxhQUFPLElBQVA7QUFFRDs7OzJCQUVNNEUsQyxFQUFHO0FBRVIsYUFBU0EsQ0FBQyxDQUFDSixDQUFGLEtBQVEsS0FBS0EsQ0FBZCxJQUFzQkksQ0FBQyxDQUFDSCxDQUFGLEtBQVEsS0FBS0EsQ0FBM0M7QUFFRDs7OzhCQUVTO0FBRVIsYUFBTyxDQUFDLEtBQUtELENBQU4sRUFBUyxLQUFLQyxDQUFkLENBQVA7QUFFRDs7OzRCQUVPO0FBQ04sV0FBS0QsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7NEJBRU87QUFFTixhQUFPLElBQUlsRSxRQUFKLENBQWEsS0FBS2lFLENBQWxCLEVBQXFCLEtBQUtDLENBQTFCLENBQVA7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVVIO0FBQUE7QUFBQSxJQUFNeEYsTUFBTSxHQUFHO0FBQ2RzUixZQUFVLEVBQUcsb0JBQVMzTyxLQUFULEVBQWdCO0FBQzVCLFdBQU9BLEtBQVA7QUFDQSxHQUhhO0FBS2Q0TyxZQUFVLEVBQUcsb0JBQVM1TyxLQUFULEVBQWdCO0FBQzVCLFdBQU9HLElBQUksQ0FBQzBPLEdBQUwsQ0FBUzdPLEtBQVQsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNBLEdBUGE7QUFTZDhPLGFBQVcsRUFBRyxxQkFBUzlPLEtBQVQsRUFBZ0I7QUFDN0IsV0FBTyxFQUFFRyxJQUFJLENBQUMwTyxHQUFMLENBQVU3TyxLQUFLLEdBQUcsQ0FBbEIsRUFBc0IsQ0FBdEIsSUFBMkIsQ0FBN0IsQ0FBUDtBQUNBLEdBWGE7QUFhZCtPLGVBQWEsRUFBRyx1QkFBUy9PLEtBQVQsRUFBZ0I7QUFDL0IsUUFBSSxDQUFDQSxLQUFLLElBQUksR0FBVixJQUFpQixDQUFyQixFQUNDLE9BQU8sTUFBTUcsSUFBSSxDQUFDME8sR0FBTCxDQUFTN08sS0FBVCxFQUFnQixDQUFoQixDQUFiO0FBQ0QsV0FBTyxDQUFDLEdBQUQsSUFBUSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlQSxLQUFmLEdBQXVCLENBQS9CLENBQVA7QUFDQSxHQWpCYTtBQW1CZGdQLGFBQVcsRUFBRyxxQkFBU2hQLEtBQVQsRUFBZ0I7QUFDN0IsV0FBT0csSUFBSSxDQUFDME8sR0FBTCxDQUFTN08sS0FBVCxFQUFnQixDQUFoQixDQUFQO0FBQ0EsR0FyQmE7QUF1QmRpUCxjQUFZLEVBQUcsc0JBQVNqUCxLQUFULEVBQWdCO0FBQzlCLFdBQVFHLElBQUksQ0FBQzBPLEdBQUwsQ0FBVTdPLEtBQUssR0FBRyxDQUFsQixFQUFzQixDQUF0QixJQUEyQixDQUFuQztBQUNBLEdBekJhO0FBMkJka1AsZ0JBQWMsRUFBRyx3QkFBU2xQLEtBQVQsRUFBZ0I7QUFDaEMsUUFBSSxDQUFDQSxLQUFLLElBQUksR0FBVixJQUFpQixDQUFyQixFQUNDLE9BQU8sTUFBTUcsSUFBSSxDQUFDME8sR0FBTCxDQUFTN08sS0FBVCxFQUFnQixDQUFoQixDQUFiO0FBQ0QsV0FBTyxPQUFPRyxJQUFJLENBQUMwTyxHQUFMLENBQVU3TyxLQUFLLEdBQUcsQ0FBbEIsRUFBc0IsQ0FBdEIsSUFBMkIsQ0FBbEMsQ0FBUDtBQUNBLEdBL0JhO0FBaUNkbVAsYUFBVyxFQUFHLHFCQUFTblAsS0FBVCxFQUFnQjtBQUM3QixXQUFPRyxJQUFJLENBQUMwTyxHQUFMLENBQVM3TyxLQUFULEVBQWdCLENBQWhCLENBQVA7QUFDQSxHQW5DYTtBQXFDZG9QLGNBQVksRUFBRyxzQkFBU3BQLEtBQVQsRUFBZ0I7QUFDOUIsV0FBTyxFQUFFRyxJQUFJLENBQUMwTyxHQUFMLENBQVU3TyxLQUFLLEdBQUcsQ0FBbEIsRUFBc0IsQ0FBdEIsSUFBMkIsQ0FBN0IsQ0FBUDtBQUNBLEdBdkNhO0FBeUNkcVAsZ0JBQWMsRUFBRyx3QkFBU3JQLEtBQVQsRUFBZ0I7QUFDaEMsUUFBSSxDQUFDQSxLQUFLLElBQUksR0FBVixJQUFpQixDQUFyQixFQUNDLE9BQU8sTUFBTUcsSUFBSSxDQUFDME8sR0FBTCxDQUFTN08sS0FBVCxFQUFnQixDQUFoQixDQUFiO0FBQ0QsV0FBTyxDQUFDLEdBQUQsSUFBUSxDQUFDQSxLQUFLLElBQUksQ0FBVixJQUFlRyxJQUFJLENBQUMwTyxHQUFMLENBQVM3TyxLQUFULEVBQWdCLENBQWhCLENBQWYsR0FBb0MsQ0FBNUMsQ0FBUDtBQUNBLEdBN0NhO0FBK0Nkc1AsWUFBVSxFQUFHLG9CQUFTdFAsS0FBVCxFQUFnQjtBQUM1QixXQUFPLENBQUNHLElBQUksQ0FBQzBOLEdBQUwsQ0FBUzdOLEtBQUssSUFBSUcsSUFBSSxDQUFDNkUsRUFBTCxHQUFVLENBQWQsQ0FBZCxDQUFELEdBQW1DLENBQTFDO0FBQ0EsR0FqRGE7QUFtRGR1SyxhQUFXLEVBQUcscUJBQVN2UCxLQUFULEVBQWdCO0FBQzdCLFdBQU9HLElBQUksQ0FBQ3lOLEdBQUwsQ0FBUzVOLEtBQUssSUFBSUcsSUFBSSxDQUFDNkUsRUFBTCxHQUFVLENBQWQsQ0FBZCxDQUFQO0FBQ0EsR0FyRGE7QUF1RGR3SyxlQUFhLEVBQUcsdUJBQVN4UCxLQUFULEVBQWdCO0FBQy9CLFdBQVEsQ0FBQyxHQUFELElBQVFHLElBQUksQ0FBQzBOLEdBQUwsQ0FBUzFOLElBQUksQ0FBQzZFLEVBQUwsR0FBVWhGLEtBQW5CLElBQTRCLENBQXBDLENBQVI7QUFDQSxHQXpEYTtBQTJEZHlQLFlBQVUsRUFBRyxvQkFBU3pQLEtBQVQsRUFBZ0I7QUFDNUIsV0FBUUEsS0FBSyxLQUFLLENBQVgsR0FBZ0IsQ0FBaEIsR0FBb0JHLElBQUksQ0FBQzBPLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTTdPLEtBQUssR0FBRyxDQUFkLENBQVosQ0FBM0I7QUFDQSxHQTdEYTtBQStEZDBQLGFBQVcsRUFBRyxxQkFBUzFQLEtBQVQsRUFBZ0I7QUFDN0IsV0FBUUEsS0FBSyxLQUFLLENBQVgsR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBQ0csSUFBSSxDQUFDME8sR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsR0FBTTdPLEtBQWxCLENBQUQsR0FBNEIsQ0FBdkQ7QUFDQSxHQWpFYTtBQW1FZDJQLGVBQWEsRUFBRyx1QkFBUzNQLEtBQVQsRUFBZ0I7QUFDL0IsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFDQyxPQUFPLENBQVA7QUFDRCxRQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUNDLE9BQU8sQ0FBUDtBQUNELFFBQUksQ0FBQ0EsS0FBSyxJQUFJLEdBQVYsSUFBaUIsQ0FBckIsRUFDQyxPQUFPLE1BQU1HLElBQUksQ0FBQzBPLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTTdPLEtBQUssR0FBRyxDQUFkLENBQVosQ0FBYjtBQUNELFdBQU8sT0FBTyxDQUFDRyxJQUFJLENBQUMwTyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxHQUFNLEVBQUU3TyxLQUFwQixDQUFELEdBQThCLENBQXJDLENBQVA7QUFDQSxHQTNFYTtBQTZFZDRQLFlBQVUsRUFBRyxvQkFBUzVQLEtBQVQsRUFBZ0I7QUFDNUIsV0FBTyxFQUFFRyxJQUFJLENBQUNtQixJQUFMLENBQVUsSUFBS3RCLEtBQUssR0FBR0EsS0FBdkIsSUFBaUMsQ0FBbkMsQ0FBUDtBQUNBLEdBL0VhO0FBaUZkNlAsYUFBVyxFQUFHLHFCQUFTN1AsS0FBVCxFQUFnQjtBQUM3QixXQUFPRyxJQUFJLENBQUNtQixJQUFMLENBQVUsSUFBSW5CLElBQUksQ0FBQzBPLEdBQUwsQ0FBVTdPLEtBQUssR0FBRyxDQUFsQixFQUFzQixDQUF0QixDQUFkLENBQVA7QUFDQSxHQW5GYTtBQXFGZDhQLGVBQWEsRUFBRyx1QkFBUzlQLEtBQVQsRUFBZ0I7QUFDL0IsUUFBSSxDQUFDQSxLQUFLLElBQUksR0FBVixJQUFpQixDQUFyQixFQUNDLE9BQU8sQ0FBQyxHQUFELElBQVFHLElBQUksQ0FBQ21CLElBQUwsQ0FBVSxJQUFJdEIsS0FBSyxHQUFHQSxLQUF0QixJQUErQixDQUF2QyxDQUFQO0FBQ0QsV0FBTyxPQUFPRyxJQUFJLENBQUNtQixJQUFMLENBQVUsSUFBSSxDQUFDdEIsS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBN0IsSUFBc0MsQ0FBN0MsQ0FBUDtBQUNBLEdBekZhO0FBMkZkK1AsWUFBVSxFQUFHLG9CQUFTL1AsS0FBVCxFQUFnQjtBQUM1QixRQUFJa08sQ0FBQyxHQUFHLE9BQVI7QUFDQSxXQUFRbE8sS0FBRCxHQUFVQSxLQUFWLElBQW1CLENBQUNrTyxDQUFDLEdBQUcsQ0FBTCxJQUFVbE8sS0FBVixHQUFrQmtPLENBQXJDLENBQVA7QUFDQSxHQTlGYTtBQWdHZDhCLGFBQVcsRUFBRyxxQkFBU2hRLEtBQVQsRUFBZ0I7QUFDN0IsUUFBSWtPLENBQUMsR0FBRyxPQUFSO0FBQ0EsV0FBTyxDQUFFbE8sS0FBSyxHQUFHQSxLQUFLLEdBQUcsQ0FBbEIsSUFBdUJBLEtBQXZCLElBQWdDLENBQUNrTyxDQUFDLEdBQUcsQ0FBTCxJQUFVbE8sS0FBVixHQUFrQmtPLENBQWxELElBQXVELENBQTlEO0FBQ0EsR0FuR2E7QUFxR2QrQixlQUFhLEVBQUcsdUJBQVNqUSxLQUFULEVBQWdCO0FBQy9CLFFBQUlrTyxDQUFDLEdBQUcsT0FBUjtBQUNBLFFBQUksQ0FBQ2xPLEtBQUssSUFBSSxHQUFWLElBQWlCLENBQXJCLEVBQ0MsT0FBTyxPQUFPQSxLQUFLLEdBQUdBLEtBQVIsSUFBaUIsQ0FBQyxDQUFDa08sQ0FBQyxJQUFLLEtBQVAsSUFBaUIsQ0FBbEIsSUFBdUJsTyxLQUF2QixHQUErQmtPLENBQWhELENBQVAsQ0FBUDtBQUNELFdBQU8sT0FBTyxDQUFDbE8sS0FBSyxJQUFJLENBQVYsSUFBZUEsS0FBZixJQUF3QixDQUFDLENBQUNrTyxDQUFDLElBQUssS0FBUCxJQUFpQixDQUFsQixJQUF1QmxPLEtBQXZCLEdBQStCa08sQ0FBdkQsSUFBNEQsQ0FBbkUsQ0FBUDtBQUNBO0FBMUdhLENBQWY7QUE2R2UsU0FBU3ZPLGVBQVQsQ0FBeUJwQyxJQUF6QixFQUErQjtBQUM3QyxTQUFPRixNQUFNLENBQUNFLElBQUQsQ0FBYjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0Q7QUFDQTs7SUFFcUJpTyxTOzs7OztBQUVwQixxQkFBWTVJLENBQVosRUFBZUMsQ0FBZixFQUFrQm5FLE1BQWxCLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3pCO0FBQ0EsVUFBS2tFLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFVBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFVBQUtuRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLd1IsS0FBTCxHQUFhLENBQWI7QUFDQSxVQUFLbkYsTUFBTCxHQUFjO0FBQ2JuSSxPQUFDLEVBQUcsTUFBS0EsQ0FESTtBQUViQyxPQUFDLEVBQUcsTUFBS0E7QUFGSSxLQUFkO0FBTnlCO0FBVXpCOzs7O2tDQUVhO0FBQ2IsV0FBS3VLLE1BQUwsR0FBY2pOLElBQUksQ0FBQ2lOLE1BQUwsRUFBZDtBQUNBLFdBQUs4QyxLQUFMLEdBQWEvUCxJQUFJLENBQUM2RSxFQUFMLEdBQVUsQ0FBVixHQUFjN0UsSUFBSSxDQUFDaU4sTUFBTCxFQUEzQjtBQUNBLFdBQUsxQixNQUFMLENBQVk5SSxDQUFaLEdBQWdCLEtBQUtBLENBQUwsR0FBUyxLQUFLd0ssTUFBTCxHQUFjLEtBQUsxTyxNQUFuQixHQUE0QnlCLElBQUksQ0FBQzBOLEdBQUwsQ0FBUyxLQUFLcUMsS0FBZCxDQUFyRDtBQUNBLFdBQUt4RSxNQUFMLENBQVk3SSxDQUFaLEdBQWdCLEtBQUtBLENBQUwsR0FBUyxLQUFLdUssTUFBTCxHQUFjLEtBQUsxTyxNQUFuQixHQUE0QnlCLElBQUksQ0FBQ3lOLEdBQUwsQ0FBUyxLQUFLc0MsS0FBZCxDQUFyRDtBQUNBLGFBQU8sS0FBS3hFLE1BQVo7QUFDQTs7OzhCQUVTOUksQyxFQUFHQyxDLEVBQUc7QUFDZixXQUFLa0ksTUFBTCxDQUFZbkksQ0FBWixHQUFnQkEsQ0FBaEI7QUFDQSxXQUFLbUksTUFBTCxDQUFZbEksQ0FBWixHQUFnQkEsQ0FBaEI7QUFDQTs7OzZCQUVRaEYsUSxFQUFVO0FBQ2xCLFVBQUlzUyxDQUFDLEdBQUd0UyxRQUFRLENBQUNzQixDQUFULENBQVdpUixVQUFYLENBQXNCLEtBQUtyRixNQUEzQixDQUFSOztBQUNBLFVBQUksS0FBS3BKLFNBQUwsSUFBa0JGLDREQUFTLENBQUNJLFdBQVYsQ0FBc0JDLElBQTVDLEVBQWtEO0FBQ2pELFlBQUlxTyxDQUFDLEdBQUd0UyxRQUFRLENBQUNhLE1BQWIsR0FBc0IsS0FBS0EsTUFBL0IsRUFDQ2IsUUFBUSxDQUFDZ0MsSUFBVCxHQUFnQixJQUFoQjtBQUNELE9BSEQsTUFHTyxJQUFJLEtBQUs4QixTQUFMLElBQWtCRiw0REFBUyxDQUFDSSxXQUFWLENBQXNCSSxLQUE1QyxFQUFtRDtBQUN6RCxZQUFJa08sQ0FBQyxHQUFHdFMsUUFBUSxDQUFDYSxNQUFiLElBQXVCLEtBQUtBLE1BQWhDLEVBQ0MsS0FBSzJSLFlBQUwsQ0FBa0J4UyxRQUFsQjtBQUNELE9BSE0sTUFHQSxJQUFJLEtBQUs4RCxTQUFMLElBQWtCRiw0REFBUyxDQUFDSSxXQUFWLENBQXNCRyxLQUE1QyxFQUFtRDtBQUN6RCxZQUFJLEtBQUtzTyxLQUFULEVBQWdCO0FBQ2ZBLGVBQUssQ0FBQyxnREFBRCxDQUFMO0FBQ0EsZUFBS0EsS0FBTCxHQUFhLEtBQWI7QUFDQTtBQUNEO0FBQ0Q7OztpQ0FFWXpTLFEsRUFBVTtBQUN0QixVQUFJMFMsSUFBSSxHQUFHMVMsUUFBUSxDQUFDbUYsQ0FBVCxDQUFXd04sV0FBWCxFQUFYO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEtBQUtELFdBQUwsQ0FBaUIzUyxRQUFqQixDQUFYO0FBQ0EsVUFBSTZQLEdBQUcsR0FBRyxLQUFLK0MsSUFBSSxHQUFHRixJQUFaLENBQVY7QUFDQSxVQUFJRyxJQUFJLEdBQUc3UyxRQUFRLENBQUNtRixDQUFULENBQVdKLENBQXRCO0FBQ0EsVUFBSStOLElBQUksR0FBRzlTLFFBQVEsQ0FBQ21GLENBQVQsQ0FBV0gsQ0FBdEI7QUFDQWhGLGNBQVEsQ0FBQ21GLENBQVQsQ0FBV0osQ0FBWCxHQUFlOE4sSUFBSSxHQUFHdlEsSUFBSSxDQUFDME4sR0FBTCxDQUFTSCxHQUFULENBQVAsR0FBdUJpRCxJQUFJLEdBQUd4USxJQUFJLENBQUN5TixHQUFMLENBQVNGLEdBQVQsQ0FBN0M7QUFDQTdQLGNBQVEsQ0FBQ21GLENBQVQsQ0FBV0gsQ0FBWCxHQUFlNk4sSUFBSSxHQUFHdlEsSUFBSSxDQUFDeU4sR0FBTCxDQUFTRixHQUFULENBQVAsR0FBdUJpRCxJQUFJLEdBQUd4USxJQUFJLENBQUMwTixHQUFMLENBQVNILEdBQVQsQ0FBN0M7QUFDQTs7O2dDQUVXN1AsUSxFQUFVO0FBQ3JCLGFBQU8sQ0FBQ3NDLElBQUksQ0FBQzZFLEVBQU4sR0FBVyxDQUFYLEdBQWU3RSxJQUFJLENBQUM0RSxLQUFMLENBQVdsSCxRQUFRLENBQUNzQixDQUFULENBQVcwRCxDQUFYLEdBQWUsS0FBS2tJLE1BQUwsQ0FBWWxJLENBQXRDLEVBQXlDaEYsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXeUQsQ0FBWCxHQUFlLEtBQUttSSxNQUFMLENBQVluSSxDQUFwRSxDQUF0QjtBQUNBOzs7O0VBdkRxQ2dPLDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2Qzs7SUFFcUJwRixTOzs7OztBQUVwQixxQkFBWXFGLFNBQVosRUFBdUJqTyxDQUF2QixFQUEwQkMsQ0FBMUIsRUFBNkJzTixDQUE3QixFQUFnQztBQUFBOztBQUFBOztBQUMvQjs7QUFDQSxVQUFLN1MsS0FBTCxDQUFXdVQsU0FBWCxFQUFzQmpPLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QnNOLENBQTVCOztBQUYrQjtBQUcvQjs7OzswQkFFS1UsUyxFQUFXak8sQyxFQUFHQyxDLEVBQUdzTixDLEVBQUc7QUFDekIsV0FBS1UsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxXQUFLak8sQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS3NOLENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDQSxXQUFLVyxPQUFMLEdBQWUsRUFBZjtBQUNBLFdBQUtDLFVBQUw7QUFDQTs7O2lDQUVZO0FBQ1osVUFBSXpRLENBQUosRUFBTzBRLENBQVA7QUFDQSxVQUFJQyxPQUFPLEdBQUcsS0FBS0osU0FBTCxDQUFlSyxLQUE3QjtBQUNBLFVBQUlDLE9BQU8sR0FBRyxLQUFLTixTQUFMLENBQWVPLE1BQTdCOztBQUNBLFdBQU05USxDQUFDLEdBQUcsQ0FBVixFQUFhQSxDQUFDLEdBQUcyUSxPQUFqQixFQUEwQjNRLENBQUMsSUFBSSxLQUFLNlAsQ0FBcEMsRUFBdUM7QUFDdEMsYUFBTWEsQ0FBQyxHQUFHLENBQVYsRUFBYUEsQ0FBQyxHQUFHRyxPQUFqQixFQUEwQkgsQ0FBQyxJQUFJLEtBQUtiLENBQXBDLEVBQXVDO0FBQ3RDLGNBQUloUyxLQUFLLEdBQUcsQ0FBQyxDQUFDNlMsQ0FBQyxJQUFJLENBQU4sSUFBV0MsT0FBWCxJQUFzQjNRLENBQUMsSUFBSSxDQUEzQixDQUFELElBQWtDLENBQTlDOztBQUNBLGNBQUksS0FBS3VRLFNBQUwsQ0FBZVEsSUFBZixDQUFvQmxULEtBQUssR0FBRyxDQUE1QixJQUFpQyxDQUFyQyxFQUF3QztBQUN2QyxpQkFBSzJTLE9BQUwsQ0FBYWpMLElBQWIsQ0FBa0I7QUFDakJqRCxlQUFDLEVBQUd0QyxDQUFDLEdBQUcsS0FBS3NDLENBREk7QUFFakJDLGVBQUMsRUFBR21PLENBQUMsR0FBRyxLQUFLbk87QUFGSSxhQUFsQjtBQUlBO0FBQ0Q7QUFDRDs7QUFDRCxhQUFPLEtBQUs2SSxNQUFaO0FBQ0E7Ozs2QkFFUTlJLEMsRUFBR0MsQyxFQUFHO0FBQ2QsVUFBSTFFLEtBQUssR0FBRyxDQUFDLENBQUMwRSxDQUFDLElBQUksQ0FBTixJQUFXLEtBQUtnTyxTQUFMLENBQWVLLEtBQTFCLElBQW1DdE8sQ0FBQyxJQUFJLENBQXhDLENBQUQsSUFBK0MsQ0FBM0Q7QUFDQSxVQUFJLEtBQUtpTyxTQUFMLENBQWVRLElBQWYsQ0FBb0JsVCxLQUFLLEdBQUcsQ0FBNUIsSUFBaUMsQ0FBckMsRUFDQyxPQUFPLElBQVAsQ0FERCxLQUdDLE9BQU8sS0FBUDtBQUNEOzs7a0NBRWE7QUFDYixhQUFPLEtBQUt1TixNQUFMLENBQVl6TSxJQUFaLENBQWlCLEtBQUs2UixPQUFMLENBQWEzUSxJQUFJLENBQUNrTixLQUFMLENBQVdsTixJQUFJLENBQUNpTixNQUFMLEtBQWdCLEtBQUswRCxPQUFMLENBQWF6USxNQUF4QyxDQUFiLENBQWpCLENBQVA7QUFDQTs7OzZCQUVRdUMsQyxFQUFHQyxDLEVBQUc7QUFDZEQsT0FBQyxJQUFJLEtBQUtBLENBQVY7QUFDQUMsT0FBQyxJQUFJLEtBQUtBLENBQVY7QUFDQSxVQUFJdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQ3VDLENBQUMsSUFBSSxDQUFOLElBQVcsS0FBS2dPLFNBQUwsQ0FBZUssS0FBMUIsSUFBbUN0TyxDQUFDLElBQUksQ0FBeEMsQ0FBRCxJQUErQyxDQUF2RDtBQUNBLGFBQU87QUFDTitDLFNBQUMsRUFBRyxLQUFLa0wsU0FBTCxDQUFlUSxJQUFmLENBQW9CL1EsQ0FBcEIsQ0FERTtBQUVOaUMsU0FBQyxFQUFHLEtBQUtzTyxTQUFMLENBQWVRLElBQWYsQ0FBb0IvUSxDQUFDLEdBQUcsQ0FBeEIsQ0FGRTtBQUdObkQsU0FBQyxFQUFHLEtBQUswVCxTQUFMLENBQWVRLElBQWYsQ0FBb0IvUSxDQUFDLEdBQUcsQ0FBeEIsQ0FIRTtBQUlOcEQsU0FBQyxFQUFHLEtBQUsyVCxTQUFMLENBQWVRLElBQWYsQ0FBb0IvUSxDQUFDLEdBQUcsQ0FBeEI7QUFKRSxPQUFQO0FBTUE7Ozs2QkFFUXpDLFEsRUFBVTtBQUNsQixVQUFJLEtBQUs4RCxTQUFMLElBQWtCLE1BQXRCLEVBQThCO0FBQzdCLFlBQUksS0FBSzJQLFFBQUwsQ0FBY3pULFFBQVEsQ0FBQ3NCLENBQVQsQ0FBV3lELENBQVgsR0FBZSxLQUFLQSxDQUFsQyxFQUFxQy9FLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBVzBELENBQVgsR0FBZSxLQUFLQSxDQUF6RCxDQUFKLEVBQ0NoRixRQUFRLENBQUNnQyxJQUFULEdBQWdCLElBQWhCLENBREQsS0FHQ2hDLFFBQVEsQ0FBQ2dDLElBQVQsR0FBZ0IsS0FBaEI7QUFDRCxPQUxELE1BS08sSUFBSSxLQUFLOEIsU0FBTCxJQUFrQixPQUF0QixFQUErQjtBQUNyQyxZQUFJLENBQUMsS0FBSzJQLFFBQUwsQ0FBY3pULFFBQVEsQ0FBQ3NCLENBQVQsQ0FBV3lELENBQVgsR0FBZSxLQUFLQSxDQUFsQyxFQUFxQy9FLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBVzBELENBQVgsR0FBZSxLQUFLQSxDQUF6RCxDQUFMLEVBQ0NoRixRQUFRLENBQUNtRixDQUFULENBQVd1TyxNQUFYO0FBQ0Q7QUFDRDs7OztFQXBFcUNYLDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdkM7QUFDQTs7SUFFcUJZLFE7Ozs7O0FBRXBCLG9CQUFZQyxFQUFaLEVBQWdCQyxFQUFoQixFQUFvQkMsRUFBcEIsRUFBd0JDLEVBQXhCLEVBQTRCQyxTQUE1QixFQUF1QztBQUFBOztBQUFBOztBQUN0Qzs7QUFFQSxRQUFJRixFQUFFLEdBQUdGLEVBQUwsSUFBVyxDQUFmLEVBQWtCO0FBQ2pCLFlBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFlBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFlBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFlBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLEtBTEQsTUFLTztBQUNOLFlBQUtILEVBQUwsR0FBVUUsRUFBVjtBQUNBLFlBQUtELEVBQUwsR0FBVUUsRUFBVjtBQUNBLFlBQUtELEVBQUwsR0FBVUYsRUFBVjtBQUNBLFlBQUtHLEVBQUwsR0FBVUYsRUFBVjtBQUNBOztBQUNELFVBQUtuRCxFQUFMLEdBQVUsTUFBS29ELEVBQUwsR0FBVSxNQUFLRixFQUF6QjtBQUNBLFVBQUtqRCxFQUFMLEdBQVUsTUFBS29ELEVBQUwsR0FBVSxNQUFLRixFQUF6QjtBQUNBLFVBQUtJLElBQUwsR0FBWTNSLElBQUksQ0FBQ2lPLEdBQUwsQ0FBUyxNQUFLcUQsRUFBZCxFQUFrQixNQUFLRSxFQUF2QixDQUFaO0FBQ0EsVUFBS0ksSUFBTCxHQUFZNVIsSUFBSSxDQUFDaU8sR0FBTCxDQUFTLE1BQUtzRCxFQUFkLEVBQWtCLE1BQUtFLEVBQXZCLENBQVo7QUFDQSxVQUFLSSxJQUFMLEdBQVk3UixJQUFJLENBQUNDLEdBQUwsQ0FBUyxNQUFLcVIsRUFBZCxFQUFrQixNQUFLRSxFQUF2QixDQUFaO0FBQ0EsVUFBS00sSUFBTCxHQUFZOVIsSUFBSSxDQUFDQyxHQUFMLENBQVMsTUFBS3NSLEVBQWQsRUFBa0IsTUFBS0UsRUFBdkIsQ0FBWjtBQUNBLFVBQUtNLEdBQUwsR0FBVyxNQUFLUCxFQUFMLEdBQVUsTUFBS0QsRUFBZixHQUFvQixNQUFLRCxFQUFMLEdBQVUsTUFBS0csRUFBOUM7QUFDQSxVQUFLTyxJQUFMLEdBQVksTUFBSzVELEVBQUwsR0FBVSxNQUFLQSxFQUFmLEdBQW9CLE1BQUtDLEVBQUwsR0FBVSxNQUFLQSxFQUEvQztBQUNBLFVBQUs0RCxRQUFMLEdBQWdCLE1BQUs1QixXQUFMLEVBQWhCO0FBQ0EsVUFBS25RLE1BQUwsR0FBYyxNQUFLZ1MsU0FBTCxFQUFkO0FBQ0EsVUFBS1IsU0FBTCxHQUFpQkEsU0FBUyxJQUFJLENBQTlCO0FBeEJzQztBQXlCdEM7Ozs7a0NBRWE7QUFDYixXQUFLekUsTUFBTCxHQUFjak4sSUFBSSxDQUFDaU4sTUFBTCxFQUFkO0FBQ0EsV0FBSzFCLE1BQUwsQ0FBWTlJLENBQVosR0FBZ0IsS0FBSzZPLEVBQUwsR0FBVSxLQUFLckUsTUFBTCxHQUFjLEtBQUsvTSxNQUFuQixHQUE0QkYsSUFBSSxDQUFDME4sR0FBTCxDQUFTLEtBQUt1RSxRQUFkLENBQXREO0FBQ0EsV0FBSzFHLE1BQUwsQ0FBWTdJLENBQVosR0FBZ0IsS0FBSzZPLEVBQUwsR0FBVSxLQUFLdEUsTUFBTCxHQUFjLEtBQUsvTSxNQUFuQixHQUE0QkYsSUFBSSxDQUFDeU4sR0FBTCxDQUFTLEtBQUt3RSxRQUFkLENBQXREO0FBRUEsYUFBTyxLQUFLMUcsTUFBWjtBQUNBOzs7NkJBRVE3TixRLEVBQVU7QUFDbEIsVUFBSXlVLElBQUksR0FBRyxJQUFYOztBQUNBLFVBQUksS0FBSzNRLFNBQUwsSUFBa0JGLDREQUFTLENBQUNJLFdBQVYsQ0FBc0JDLElBQTVDLEVBQWtEO0FBQ2pELFlBQUksS0FBSytQLFNBQUwsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDeEIsZUFBS1UsUUFBTCxDQUFjMVUsUUFBZCxFQUF3QixZQUFXO0FBQ2xDLGdCQUFJeVUsSUFBSSxDQUFDak8sWUFBTCxDQUFrQnhHLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBV3lELENBQTdCLEVBQWdDL0UsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXMEQsQ0FBM0MsQ0FBSixFQUNDaEYsUUFBUSxDQUFDZ0MsSUFBVCxHQUFnQixJQUFoQjtBQUNELFdBSEQ7QUFJQSxTQUxELE1BS087QUFDTixlQUFLMFMsUUFBTCxDQUFjMVUsUUFBZCxFQUF3QixZQUFXO0FBQ2xDLGdCQUFJLENBQUN5VSxJQUFJLENBQUNqTyxZQUFMLENBQWtCeEcsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXeUQsQ0FBN0IsRUFBZ0MvRSxRQUFRLENBQUNzQixDQUFULENBQVcwRCxDQUEzQyxDQUFMLEVBQ0NoRixRQUFRLENBQUNnQyxJQUFULEdBQWdCLElBQWhCO0FBQ0QsV0FIRDtBQUlBO0FBQ0QsT0FaRCxNQVlPLElBQUksS0FBSzhCLFNBQUwsSUFBa0JGLDREQUFTLENBQUNJLFdBQVYsQ0FBc0JJLEtBQTVDLEVBQW1EO0FBQ3pELGFBQUtzUSxRQUFMLENBQWMxVSxRQUFkLEVBQXdCLFlBQVc7QUFDbEMsY0FBSXlVLElBQUksQ0FBQ0UsV0FBTCxDQUFpQjNVLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBV3lELENBQTVCLEVBQStCL0UsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXMEQsQ0FBMUMsS0FBZ0RoRixRQUFRLENBQUNhLE1BQTdELEVBQXFFO0FBQ3BFLGdCQUFJNFQsSUFBSSxDQUFDL0QsRUFBTCxJQUFXLENBQWYsRUFBa0I7QUFDakIxUSxzQkFBUSxDQUFDbUYsQ0FBVCxDQUFXSixDQUFYLElBQWdCLENBQUMsQ0FBakI7QUFDQSxhQUZELE1BRU8sSUFBSTBQLElBQUksQ0FBQzlELEVBQUwsSUFBVyxDQUFmLEVBQWtCO0FBQ3hCM1Esc0JBQVEsQ0FBQ21GLENBQVQsQ0FBV0gsQ0FBWCxJQUFnQixDQUFDLENBQWpCO0FBQ0EsYUFGTSxNQUVBO0FBQ055UCxrQkFBSSxDQUFDakMsWUFBTCxDQUFrQnhTLFFBQVEsQ0FBQ21GLENBQTNCO0FBQ0E7QUFDRDtBQUNELFNBVkQ7QUFXQSxPQVpNLE1BWUEsSUFBSSxLQUFLckIsU0FBTCxJQUFrQkYsNERBQVMsQ0FBQ0ksV0FBVixDQUFzQkcsS0FBNUMsRUFBbUQ7QUFDekQsWUFBSSxLQUFLc08sS0FBVCxFQUFnQjtBQUNmQSxlQUFLLENBQUMsOENBQUQsQ0FBTDtBQUNBLGVBQUtBLEtBQUwsR0FBYSxLQUFiO0FBQ0E7QUFDRDtBQUNEOzs7aUNBRVkxTixDLEVBQUdDLEMsRUFBRztBQUNsQixVQUFJNFAsQ0FBQyxHQUFHLEtBQUtqRSxFQUFiO0FBQ0EsVUFBSWtFLENBQUMsR0FBRyxDQUFDLEtBQUtuRSxFQUFkO0FBQ0EsVUFBSW9FLENBQUMsR0FBRyxLQUFLVCxHQUFiO0FBQ0EsVUFBSVUsQ0FBQyxHQUFHRixDQUFDLElBQUksQ0FBTCxHQUFTLENBQVQsR0FBYUEsQ0FBckI7QUFDQSxVQUFJLENBQUNELENBQUMsR0FBRzdQLENBQUosR0FBUThQLENBQUMsR0FBRzdQLENBQVosR0FBZ0I4UCxDQUFqQixJQUFzQkMsQ0FBdEIsR0FBMEIsQ0FBOUIsRUFDQyxPQUFPLElBQVAsQ0FERCxLQUdDLE9BQU8sS0FBUDtBQUNEOzs7Z0NBRVdoUSxDLEVBQUdDLEMsRUFBRztBQUNqQixVQUFJNFAsQ0FBQyxHQUFHLEtBQUtqRSxFQUFiO0FBQ0EsVUFBSWtFLENBQUMsR0FBRyxDQUFDLEtBQUtuRSxFQUFkO0FBQ0EsVUFBSW9FLENBQUMsR0FBRyxLQUFLVCxHQUFiO0FBQ0EsVUFBSVUsQ0FBQyxHQUFJSCxDQUFDLEdBQUc3UCxDQUFKLEdBQVE4UCxDQUFDLEdBQUc3UCxDQUFaLEdBQWdCOFAsQ0FBekI7QUFDQSxhQUFPQyxDQUFDLEdBQUd6UyxJQUFJLENBQUNtQixJQUFMLENBQVUsS0FBSzZRLElBQWYsQ0FBWDtBQUNBOzs7aUNBRVluUCxDLEVBQUc7QUFDZixVQUFJdU4sSUFBSSxHQUFHdk4sQ0FBQyxDQUFDd04sV0FBRixFQUFYO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEtBQUtELFdBQUwsRUFBWDtBQUNBLFVBQUk5QyxHQUFHLEdBQUcsS0FBSytDLElBQUksR0FBR0YsSUFBWixDQUFWO0FBQ0EsVUFBSUcsSUFBSSxHQUFHMU4sQ0FBQyxDQUFDSixDQUFiO0FBQ0EsVUFBSStOLElBQUksR0FBRzNOLENBQUMsQ0FBQ0gsQ0FBYjtBQUNBRyxPQUFDLENBQUNKLENBQUYsR0FBTThOLElBQUksR0FBR3ZRLElBQUksQ0FBQzBOLEdBQUwsQ0FBU0gsR0FBVCxDQUFQLEdBQXVCaUQsSUFBSSxHQUFHeFEsSUFBSSxDQUFDeU4sR0FBTCxDQUFTRixHQUFULENBQXBDO0FBQ0ExSyxPQUFDLENBQUNILENBQUYsR0FBTTZOLElBQUksR0FBR3ZRLElBQUksQ0FBQ3lOLEdBQUwsQ0FBU0YsR0FBVCxDQUFQLEdBQXVCaUQsSUFBSSxHQUFHeFEsSUFBSSxDQUFDME4sR0FBTCxDQUFTSCxHQUFULENBQXBDO0FBQ0EsYUFBTzFLLENBQVA7QUFDQTs7O2tDQUVhO0FBQ2IsYUFBTzdDLElBQUksQ0FBQzRFLEtBQUwsQ0FBVyxLQUFLeUosRUFBaEIsRUFBb0IsS0FBS0QsRUFBekIsQ0FBUDtBQUNBOzs7NkJBRVExUSxRLEVBQVVnVixHLEVBQUs7QUFDdkIsVUFBSTNDLEtBQUssR0FBRy9QLElBQUksQ0FBQ3dOLEdBQUwsQ0FBUyxLQUFLNkMsV0FBTCxFQUFULENBQVo7O0FBQ0EsVUFBSU4sS0FBSyxJQUFJL1AsSUFBSSxDQUFDNkUsRUFBTCxHQUFVLENBQXZCLEVBQTBCO0FBQ3pCLFlBQUluSCxRQUFRLENBQUNzQixDQUFULENBQVd5RCxDQUFYLEdBQWUsS0FBS29QLElBQXBCLElBQTRCblUsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXeUQsQ0FBWCxHQUFlLEtBQUtrUCxJQUFwRCxFQUEwRDtBQUN6RGUsYUFBRztBQUNIO0FBQ0QsT0FKRCxNQUlPO0FBQ04sWUFBSWhWLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBVzBELENBQVgsR0FBZSxLQUFLb1AsSUFBcEIsSUFBNEJwVSxRQUFRLENBQUNzQixDQUFULENBQVcwRCxDQUFYLEdBQWUsS0FBS2tQLElBQXBELEVBQTBEO0FBQ3pEYyxhQUFHO0FBQ0g7QUFDRDtBQUNEOzs7Z0NBRVc7QUFDWCxhQUFPMVMsSUFBSSxDQUFDbUIsSUFBTCxDQUFVLEtBQUtpTixFQUFMLEdBQVUsS0FBS0EsRUFBZixHQUFvQixLQUFLQyxFQUFMLEdBQVUsS0FBS0EsRUFBN0MsQ0FBUDtBQUNBOzs7O0VBeEhvQ29DLDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h0Qzs7SUFFcUJwRixTOzs7OztBQUVwQixxQkFBWTVJLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUFBOztBQUNqQjtBQUVBLFVBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFVBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUppQjtBQUtqQjs7OztrQ0FFYTtBQUNiLFdBQUs2SSxNQUFMLENBQVk5SSxDQUFaLEdBQWdCLEtBQUtBLENBQXJCO0FBQ0EsV0FBSzhJLE1BQUwsQ0FBWTdJLENBQVosR0FBZ0IsS0FBS0EsQ0FBckI7QUFFQSxhQUFPLEtBQUs2SSxNQUFaO0FBQ0E7Ozs2QkFFUTdOLFEsRUFBVTtBQUNsQixVQUFJLEtBQUt5UyxLQUFULEVBQWdCO0FBQ2ZBLGFBQUssQ0FBQyxrREFBRCxDQUFMO0FBQ0EsYUFBS0EsS0FBTCxHQUFhLEtBQWI7QUFDQTtBQUNEOzs7O0VBckJxQ00sNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z2QztBQUNBOztJQUVxQmtDLFE7Ozs7O0FBRXBCLG9CQUFZbFEsQ0FBWixFQUFlQyxDQUFmLEVBQWtCcU8sS0FBbEIsRUFBeUJFLE1BQXpCLEVBQWlDO0FBQUE7O0FBQUE7O0FBQ2hDO0FBRUEsVUFBS3hPLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFVBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFVBQUtxTyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFOZ0M7QUFPaEM7Ozs7a0NBRWE7QUFDYixXQUFLMUYsTUFBTCxDQUFZOUksQ0FBWixHQUFnQixLQUFLQSxDQUFMLEdBQVN6QyxJQUFJLENBQUNpTixNQUFMLEtBQWdCLEtBQUs4RCxLQUE5QztBQUNBLFdBQUt4RixNQUFMLENBQVk3SSxDQUFaLEdBQWdCLEtBQUtBLENBQUwsR0FBUzFDLElBQUksQ0FBQ2lOLE1BQUwsS0FBZ0IsS0FBS2dFLE1BQTlDO0FBRUEsYUFBTyxLQUFLMUYsTUFBWjtBQUNBOzs7NkJBRVE3TixRLEVBQVU7QUFDbEIsVUFBSSxLQUFLOEQsU0FBTCxJQUFrQkYsNERBQVMsQ0FBQ0ksV0FBVixDQUFzQkMsSUFBNUMsRUFBa0Q7QUFDakQsWUFBSWpFLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBV3lELENBQVgsR0FBZS9FLFFBQVEsQ0FBQ2EsTUFBeEIsR0FBaUMsS0FBS2tFLENBQTFDLEVBQ0MvRSxRQUFRLENBQUNnQyxJQUFULEdBQWdCLElBQWhCLENBREQsS0FFSyxJQUFJaEMsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXeUQsQ0FBWCxHQUFlL0UsUUFBUSxDQUFDYSxNQUF4QixHQUFpQyxLQUFLa0UsQ0FBTCxHQUFTLEtBQUtzTyxLQUFuRCxFQUNKclQsUUFBUSxDQUFDZ0MsSUFBVCxHQUFnQixJQUFoQjtBQUVELFlBQUloQyxRQUFRLENBQUNzQixDQUFULENBQVcwRCxDQUFYLEdBQWVoRixRQUFRLENBQUNhLE1BQXhCLEdBQWlDLEtBQUttRSxDQUExQyxFQUNDaEYsUUFBUSxDQUFDZ0MsSUFBVCxHQUFnQixJQUFoQixDQURELEtBRUssSUFBSWhDLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBVzBELENBQVgsR0FBZWhGLFFBQVEsQ0FBQ2EsTUFBeEIsR0FBaUMsS0FBS21FLENBQUwsR0FBUyxLQUFLdU8sTUFBbkQsRUFDSnZULFFBQVEsQ0FBQ2dDLElBQVQsR0FBZ0IsSUFBaEI7QUFDRCxPQVZELE1BVU8sSUFBSSxLQUFLOEIsU0FBTCxJQUFrQkYsNERBQVMsQ0FBQ0ksV0FBVixDQUFzQkksS0FBNUMsRUFBbUQ7QUFDekQsWUFBSXBFLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBV3lELENBQVgsR0FBZS9FLFFBQVEsQ0FBQ2EsTUFBeEIsR0FBaUMsS0FBS2tFLENBQTFDLEVBQTZDO0FBQzVDL0Usa0JBQVEsQ0FBQ3NCLENBQVQsQ0FBV3lELENBQVgsR0FBZSxLQUFLQSxDQUFMLEdBQVMvRSxRQUFRLENBQUNhLE1BQWpDO0FBQ0FiLGtCQUFRLENBQUNtRixDQUFULENBQVdKLENBQVgsSUFBZ0IsQ0FBQyxDQUFqQjtBQUNBLFNBSEQsTUFHTyxJQUFJL0UsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXeUQsQ0FBWCxHQUFlL0UsUUFBUSxDQUFDYSxNQUF4QixHQUFpQyxLQUFLa0UsQ0FBTCxHQUFTLEtBQUtzTyxLQUFuRCxFQUEwRDtBQUNoRXJULGtCQUFRLENBQUNzQixDQUFULENBQVd5RCxDQUFYLEdBQWUsS0FBS0EsQ0FBTCxHQUFTLEtBQUtzTyxLQUFkLEdBQXNCclQsUUFBUSxDQUFDYSxNQUE5QztBQUNBYixrQkFBUSxDQUFDbUYsQ0FBVCxDQUFXSixDQUFYLElBQWdCLENBQUMsQ0FBakI7QUFDQTs7QUFFRCxZQUFJL0UsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXMEQsQ0FBWCxHQUFlaEYsUUFBUSxDQUFDYSxNQUF4QixHQUFpQyxLQUFLbUUsQ0FBMUMsRUFBNkM7QUFDNUNoRixrQkFBUSxDQUFDc0IsQ0FBVCxDQUFXMEQsQ0FBWCxHQUFlLEtBQUtBLENBQUwsR0FBU2hGLFFBQVEsQ0FBQ2EsTUFBakM7QUFDQWIsa0JBQVEsQ0FBQ21GLENBQVQsQ0FBV0gsQ0FBWCxJQUFnQixDQUFDLENBQWpCO0FBQ0EsU0FIRCxNQUdPLElBQUloRixRQUFRLENBQUNzQixDQUFULENBQVcwRCxDQUFYLEdBQWVoRixRQUFRLENBQUNhLE1BQXhCLEdBQWlDLEtBQUttRSxDQUFMLEdBQVMsS0FBS3VPLE1BQW5ELEVBQTJEO0FBQ2pFdlQsa0JBQVEsQ0FBQ3NCLENBQVQsQ0FBVzBELENBQVgsR0FBZSxLQUFLQSxDQUFMLEdBQVMsS0FBS3VPLE1BQWQsR0FBdUJ2VCxRQUFRLENBQUNhLE1BQS9DO0FBQ0FiLGtCQUFRLENBQUNtRixDQUFULENBQVdILENBQVgsSUFBZ0IsQ0FBQyxDQUFqQjtBQUNBO0FBQ0QsT0FoQk0sTUFnQkEsSUFBSSxLQUFLbEIsU0FBTCxJQUFrQkYsNERBQVMsQ0FBQ0ksV0FBVixDQUFzQkcsS0FBNUMsRUFBbUQ7QUFDekQsWUFBSW5FLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBV3lELENBQVgsR0FBZS9FLFFBQVEsQ0FBQ2EsTUFBeEIsR0FBaUMsS0FBS2tFLENBQXRDLElBQTJDL0UsUUFBUSxDQUFDbUYsQ0FBVCxDQUFXSixDQUFYLElBQWdCLENBQS9ELEVBQ0MvRSxRQUFRLENBQUNzQixDQUFULENBQVd5RCxDQUFYLEdBQWUsS0FBS0EsQ0FBTCxHQUFTLEtBQUtzTyxLQUFkLEdBQXNCclQsUUFBUSxDQUFDYSxNQUE5QyxDQURELEtBRUssSUFBSWIsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXeUQsQ0FBWCxHQUFlL0UsUUFBUSxDQUFDYSxNQUF4QixHQUFpQyxLQUFLa0UsQ0FBTCxHQUFTLEtBQUtzTyxLQUEvQyxJQUF3RHJULFFBQVEsQ0FBQ21GLENBQVQsQ0FBV0osQ0FBWCxJQUFnQixDQUE1RSxFQUNKL0UsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXeUQsQ0FBWCxHQUFlLEtBQUtBLENBQUwsR0FBUy9FLFFBQVEsQ0FBQ2EsTUFBakM7QUFFRCxZQUFJYixRQUFRLENBQUNzQixDQUFULENBQVcwRCxDQUFYLEdBQWVoRixRQUFRLENBQUNhLE1BQXhCLEdBQWlDLEtBQUttRSxDQUF0QyxJQUEyQ2hGLFFBQVEsQ0FBQ21GLENBQVQsQ0FBV0gsQ0FBWCxJQUFnQixDQUEvRCxFQUNDaEYsUUFBUSxDQUFDc0IsQ0FBVCxDQUFXMEQsQ0FBWCxHQUFlLEtBQUtBLENBQUwsR0FBUyxLQUFLdU8sTUFBZCxHQUF1QnZULFFBQVEsQ0FBQ2EsTUFBL0MsQ0FERCxLQUVLLElBQUliLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBVzBELENBQVgsR0FBZWhGLFFBQVEsQ0FBQ2EsTUFBeEIsR0FBaUMsS0FBS21FLENBQUwsR0FBUyxLQUFLdU8sTUFBL0MsSUFBeUR2VCxRQUFRLENBQUNtRixDQUFULENBQVdILENBQVgsSUFBZ0IsQ0FBN0UsRUFDSmhGLFFBQVEsQ0FBQ3NCLENBQVQsQ0FBVzBELENBQVgsR0FBZSxLQUFLQSxDQUFMLEdBQVNoRixRQUFRLENBQUNhLE1BQWpDO0FBQ0Q7QUFDRDs7OztFQXhEb0NrUyw2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHRDO0FBQ0E7O0lBRXFCQSxJOzs7QUFFcEIsa0JBQWM7QUFBQTs7QUFDYixTQUFLbEYsTUFBTCxHQUFjLElBQUkvTSxzREFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNBLFNBQUt5TyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUt6TCxTQUFMLEdBQWlCRiw0REFBUyxDQUFDSSxXQUFWLENBQXNCQyxJQUF2QztBQUNBLFNBQUt3TyxLQUFMLEdBQWEsSUFBYjtBQUNBOzs7O2tDQUVhLENBRWI7Ozs2QkFFUXpTLFEsRUFBVSxDQUVsQiIsImZpbGUiOiJxdWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUXVhcmtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUXVhcmtcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUXVhcmtcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBNaW5pU2lnbmFsQmluZGluZyA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWxCaW5kaW5nKGZuLCBvbmNlLCB0aGlzQXJnKSB7XG4gICAgaWYgKG9uY2UgPT09IHVuZGVmaW5lZCkgb25jZSA9IGZhbHNlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWxCaW5kaW5nKTtcblxuICAgIHRoaXMuX2ZuID0gZm47XG4gICAgdGhpcy5fb25jZSA9IG9uY2U7XG4gICAgdGhpcy5fdGhpc0FyZyA9IHRoaXNBcmc7XG4gICAgdGhpcy5fbmV4dCA9IHRoaXMuX3ByZXYgPSB0aGlzLl9vd25lciA9IG51bGw7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbEJpbmRpbmcsIFt7XG4gICAga2V5OiAnZGV0YWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgICAgaWYgKHRoaXMuX293bmVyID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aGlzLl9vd25lci5kZXRhY2godGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWluaVNpZ25hbEJpbmRpbmc7XG59KSgpO1xuXG5mdW5jdGlvbiBfYWRkTWluaVNpZ25hbEJpbmRpbmcoc2VsZiwgbm9kZSkge1xuICBpZiAoIXNlbGYuX2hlYWQpIHtcbiAgICBzZWxmLl9oZWFkID0gbm9kZTtcbiAgICBzZWxmLl90YWlsID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBzZWxmLl90YWlsLl9uZXh0ID0gbm9kZTtcbiAgICBub2RlLl9wcmV2ID0gc2VsZi5fdGFpbDtcbiAgICBzZWxmLl90YWlsID0gbm9kZTtcbiAgfVxuXG4gIG5vZGUuX293bmVyID0gc2VsZjtcblxuICByZXR1cm4gbm9kZTtcbn1cblxudmFyIE1pbmlTaWduYWwgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNaW5pU2lnbmFsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaW5pU2lnbmFsKTtcblxuICAgIHRoaXMuX2hlYWQgPSB0aGlzLl90YWlsID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1pbmlTaWduYWwsIFt7XG4gICAga2V5OiAnaGFuZGxlcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVycygpIHtcbiAgICAgIHZhciBleGlzdHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoZXhpc3RzKSByZXR1cm4gISFub2RlO1xuXG4gICAgICB2YXIgZWUgPSBbXTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgZWUucHVzaChub2RlKTtcbiAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoYXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjaGFzKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZS5fb3duZXIgPT09IHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzcGF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcblxuICAgICAgaWYgKCFub2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl9vbmNlKSB0aGlzLmRldGFjaChub2RlKTtcbiAgICAgICAgbm9kZS5fZm4uYXBwbHkobm9kZS5fdGhpc0FyZywgYXJndW1lbnRzKTtcbiAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChmbikge1xuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNhZGQoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBGdW5jdGlvbi4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYWRkTWluaVNpZ25hbEJpbmRpbmcodGhpcywgbmV3IE1pbmlTaWduYWxCaW5kaW5nKGZuLCBmYWxzZSwgdGhpc0FyZykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI29uY2UoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBGdW5jdGlvbi4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfYWRkTWluaVNpZ25hbEJpbmRpbmcodGhpcywgbmV3IE1pbmlTaWduYWxCaW5kaW5nKGZuLCB0cnVlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBNaW5pU2lnbmFsQmluZGluZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2RldGFjaCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIE1pbmlTaWduYWxCaW5kaW5nIG9iamVjdC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLl9vd25lciAhPT0gdGhpcykgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChub2RlLl9wcmV2KSBub2RlLl9wcmV2Ll9uZXh0ID0gbm9kZS5fbmV4dDtcbiAgICAgIGlmIChub2RlLl9uZXh0KSBub2RlLl9uZXh0Ll9wcmV2ID0gbm9kZS5fcHJldjtcblxuICAgICAgaWYgKG5vZGUgPT09IHRoaXMuX2hlYWQpIHtcbiAgICAgICAgdGhpcy5faGVhZCA9IG5vZGUuX25leHQ7XG4gICAgICAgIGlmIChub2RlLl9uZXh0ID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fdGFpbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZSA9PT0gdGhpcy5fdGFpbCkge1xuICAgICAgICB0aGlzLl90YWlsID0gbm9kZS5fcHJldjtcbiAgICAgICAgdGhpcy5fdGFpbC5fbmV4dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX293bmVyID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaEFsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaEFsbCgpIHtcbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcbiAgICAgIGlmICghbm9kZSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIHRoaXMuX2hlYWQgPSB0aGlzLl90YWlsID0gbnVsbDtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsO1xufSkoKTtcblxuTWluaVNpZ25hbC5NaW5pU2lnbmFsQmluZGluZyA9IE1pbmlTaWduYWxCaW5kaW5nO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBNaW5pU2lnbmFsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFscGhhIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cclxuXHRcdHRoaXMucmVzZXQoYSwgYiwgdGhpcy5saWZlKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiQWxwaGFcIjtcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yICdhJyBhbmQgJ2InXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gYVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBiXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVF1YXJrLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zYW1lID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLmEgPSBVdGlsLnNldFNwYW5WYWx1ZShhIHx8IDEpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYik7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBuZXcgYWxwaGEgdmFsdWUgb2YgdGhlIHBhcnRpY2xlXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGluaXRpYWxpemVcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UXVhcmsuUGFydGljbGV9IHBhcnRpY2xlIEEgc2luZ2xlIFF1YXJrIGdlbmVyYXRlZCBwYXJ0aWNsZVxyXG5cdCAqL1xyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICh0aGlzLnNhbWUpe1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCID0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1F1YXJrLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG4gXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRwYXJ0aWNsZS5hbHBoYSA9IHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgKyAocGFydGljbGUudHJhbnNmb3JtLmFscGhhQSAtIHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIpICogdGhpcy5lbmVyZ3k7XHJcblx0XHRpZiAocGFydGljbGUuYWxwaGEgPCAwLjAwMSlcclxuXHRcdFx0cGFydGljbGUuYWxwaGEgPSAwO1xyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJhY3Rpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YXJnZXRQb3NpdGlvbiwgZm9yY2UsIHJhZGl1cywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbiB8fCBuZXcgVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkF0dHJhY3Rpb25cIjtcclxuXHRcdFxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkF0dHJhY3Rpb25cclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2ZvcmNlJyBhbmQgJ3JhZGl1cydcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEfSB0YXJnZXRQb3NpdGlvbiB0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZm9yY2U9MTAwXVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcmFkaXVzPTEwMDBdXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy50YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIHx8IG5ldyBQcm90b24uVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5BdHRyYWN0aW9uXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLmNvcHkodGhpcy50YXJnZXRQb3NpdGlvbik7XHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5zdWIocGFydGljbGUucCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gdGhpcy5hdHRyYWN0aW9uRm9yY2UubGVuZ3RoU3EoKTtcclxuXHRcdGlmICh0aGlzLmxlbmd0aFNxID4gMC4wMDAwMDQgJiYgdGhpcy5sZW5ndGhTcSA8IHRoaXMucmFkaXVzU3EpIHtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2Uubm9ybWFsaXplKCk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKDEgLSB0aGlzLmxlbmd0aFNxIC8gdGhpcy5yYWRpdXNTcSk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKHRoaXMuZm9yY2UpO1xyXG5cdFx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmF0dHJhY3Rpb25Gb3JjZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCB7IE1FQVNVUkUgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuaW1wb3J0IGdldEVhc2luZ0J5TmFtZSBmcm9tICcuLi9tYXRoL2Vhc2UnO1xyXG5cclxuXHJcbmNvbnN0IEJFSEFWSU9VUl9JRF9CQVNFID0gMHhGRkZGRjtcclxubGV0IHVpZCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihsaWZlLCBlYXNpbmcgPSAnZWFzZUxpbmVhcicpIHtcclxuXHRcdHRoaXMuaWQgPSBCRUhBVklPVVJfSURfQkFTRSArIHVpZCsrO1xyXG5cdFx0dGhpcy5saWZlID0gbGlmZSB8fCBJbmZpbml0eTtcclxuXHRcdHRoaXMuZWFzaW5nID0gZ2V0RWFzaW5nQnlOYW1lKGVhc2luZyk7XHJcblx0XHR0aGlzLmFnZSA9IDA7XHJcblx0XHR0aGlzLmVuZXJneSA9IDE7XHJcblx0XHR0aGlzLmRlYWQgPSBmYWxzZTtcclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5uYW1lID0gJ0JlaGF2aW91cic7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMubGlmZSA9IGxpZmUgfHwgSW5maW5pdHk7XHJcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBnZXRFYXNpbmdCeU5hbWUoJ2Vhc2VMaW5lYXInKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIGZvcmNlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVGb3JjZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gZm9yY2UgXHJcblx0ICovXHJcblx0bm9ybWFsaXplRm9yY2UoZm9yY2UpIHtcclxuXHRcdHJldHVybiBmb3JjZS5tdWx0aXBseVNjYWxhcihNRUFTVVJFKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIHZhbHVlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVWYWx1ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcclxuXHQgKi9cclxuXHRub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlICogTUVBU1VSRTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgdGhlIGJlaGF2aW91cidzIHBhcmFtZXRlcnMgZm9yIGFsbCBwYXJ0aWNsZXNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHR0aGlzLmFnZSArPSB0aW1lO1xyXG5cdFx0aWYgKHRoaXMuYWdlID49IHRoaXMubGlmZSB8fCB0aGlzLmRlYWQpIHtcclxuXHRcdFx0dGhpcy5lbmVyZ3kgPSAwO1xyXG5cdFx0XHR0aGlzLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBzY2FsZSA9IHRoaXMuZWFzaW5nKHBhcnRpY2xlLmFnZSAvIHBhcnRpY2xlLmxpZmUpO1xyXG5cdFx0XHR0aGlzLmVuZXJneSA9IE1hdGgubWF4KDEgLSBzY2FsZSwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIERlc3RvcnkgdGhpcyBiZWhhdmlvdXJcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgZGVzdHJveVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICovXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHZhciBpbmRleDtcclxuXHRcdHZhciBsZW5ndGggPSB0aGlzLnBhcmVudHMubGVuZ3RoLCBpO1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLnBhcmVudHNbaV0ucmVtb3ZlQmVoYXZpb3VyKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdH1cclxufSIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbWl0dGVyLCBtYXNzLCBjYWxsYmFjaywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChlbWl0dGVyLCBtYXNzLCBjYWxsYmFjayk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkNvbGxpc2lvblwiO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sbGlzaW9uXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIHRvIG1hc3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLkVtaXR0ZXJ9IFx0W2VtaXR0ZXI9bnVsbF0gXHRcdHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBcdFx0W21hc3M9dHJ1ZV1cdFx0XHRcclxuXHQgKiBAcGFyYW0ge0NhbGxiYWNrfVx0IFx0W2NhbGxiYWNrPW51bGxdXHRcdHRoZSBjYWxsYmFjayBhZnRlciB0aGUgY29sbGlzaW9uXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdFtsaWZlPUluZmluaXR5XSBcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQoZW1pdHRlciwgbWFzcywgY2FsbGJhY2ssIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5lbWl0dGVyID0gZW1pdHRlciB8fCBudWxsO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcyB8fCB0cnVlO1xyXG5cdFx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XHJcblx0XHR0aGlzLmNvbGxpc2lvblBvb2wgPSBbXTtcclxuXHRcdHRoaXMuZGVsdGEgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0bGV0IG5ld1Bvb2wgPSB0aGlzLmVtaXR0ZXIucGFydGljbGVzLnNsaWNlKGluZGV4KTtcclxuXHRcdGxldCBvdGhlclBhcnRpY2xlO1xyXG5cdFx0bGV0IGxlbmd0aFNxO1xyXG5cdFx0bGV0IG92ZXJsYXA7XHJcblx0XHRsZXQgYXZlcmFnZU1hc3MxLCBhdmVyYWdlTWFzczI7XHJcblx0XHRsZXQgbGVuZ3RoID0gbmV3UG9vbC5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG90aGVyUGFydGljbGUgPSBuZXdQb29sW2ldO1xyXG5cdFx0XHRpZiAob3RoZXJQYXJ0aWNsZSAhPT0gcGFydGljbGUpIHtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLmNvcHkob3RoZXJQYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLnN1YihwYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHRsZW5ndGhTcSA9IHRoaXMuZGVsdGEubGVuZ3RoU3EoKTtcclxuXHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHBhcnRpY2xlLnJhZGl1cyArIG90aGVyUGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0XHRpZiAobGVuZ3RoU3EgPD0gZGlzdGFuY2UgKiBkaXN0YW5jZSkge1xyXG5cdFx0XHRcdFx0b3ZlcmxhcCA9IGRpc3RhbmNlIC0gTWF0aC5zcXJ0KGxlbmd0aFNxKTtcclxuXHRcdFx0XHRcdG92ZXJsYXAgKz0gMC41O1xyXG5cdFx0XHRcdFx0Y29uc3QgdG90YWxNYXNzID0gcGFydGljbGUubWFzcyArIG90aGVyUGFydGljbGUubWFzcztcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMSA9IHRoaXMubWFzcyA/IG90aGVyUGFydGljbGUubWFzcyAvIHRvdGFsTWFzcyA6IDAuNTtcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMiA9IHRoaXMubWFzcyA/IHBhcnRpY2xlLm1hc3MgLyB0b3RhbE1hc3MgOiAwLjU7XHJcblx0XHRcdFx0XHRwYXJ0aWNsZS5wLmFkZCh0aGlzLmRlbHRhLmNsb25lKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIC1hdmVyYWdlTWFzczEpKTtcclxuXHRcdFx0XHRcdG90aGVyUGFydGljbGUucC5hZGQodGhpcy5kZWx0YS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihvdmVybGFwICogYXZlcmFnZU1hc3MyKSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jYWxsYmFjayl7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FsbGJhY2socGFydGljbGUsIG90aGVyUGFydGljbGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9zc1pvbmUgZXh0ZW5kcyBCZWhhdmlvdXJ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KHpvbmUsIGNyb3NzVHlwZSk7XHJcblx0XHR0aGlzLm5hbWUgPSAnQ3Jvc3Nab25lJztcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHRoaXMuem9uZSA9IHpvbmU7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NUeXBlID0gVXRpbC5pbml0VmFsdWUoY3Jvc3NUeXBlLCBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NpbmcocGFydGljbGUpO1xyXG5cdH1cclxufVxyXG5cclxuQ3Jvc3Nab25lLkNST1NTX1RZUEVTID0ge1xyXG5cdENST1NTOiAxIDw8IDAsXHJcblx0REVBRDogMSA8PCAyLFxyXG5cdEJPVU5EOiAxIDw8IDNcclxufTtcclxuIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmNlIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZngsIGZ5LCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVGb3JjZShuZXcgVmVjdG9yMkQoZngsIGZ5KSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkZvcmNlXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGZ4LCBmeSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVGb3JjZShuZXcgVmVjdG9yMkQoZngsIGZ5KSk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmZvcmNlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEZvcmNlIGZyb20gJy4vRm9yY2UnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF2aXR5IGV4dGVuZHMgRm9yY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihnLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKDAsIGcsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLm5hbWUgPSAnR3Jhdml0eSc7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGcsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIucmVzZXQoMCwgZywgbGlmZSwgZWFzaW5nKTtcclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLmEuYWRkKHRoaXMuZm9yY2UpO1xyXG5cdH1cclxufSIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF2aXR5V2VsbCBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNlbnRlclBvaW50LCBmb3JjZSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5kaXN0YW5jZVZlYyA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5jZW50ZXJQb2ludCA9IFV0aWwuaW5pdFZhbHVlKGNlbnRlclBvaW50LCBuZXcgVmVjdG9yMkQpO1xyXG5cdFx0dGhpcy5mb3JjZSA9IFV0aWwuaW5pdFZhbHVlKHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpLCAxMDApO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJHcmF2aXR5V2VsbFwiO1xyXG5cclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHJcblx0cmVzZXQoY2VudGVyUG9pbnQsIGZvcmNlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMuZGlzdGFuY2VWZWMgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdHRoaXMuY2VudGVyUG9pbnQgPSBVdGlsLmluaXRWYWx1ZShjZW50ZXJQb2ludCwgbmV3IFZlY3RvcjJEKTtcclxuXHRcdHRoaXMuZm9yY2UgPSBVdGlsLmluaXRWYWx1ZSh0aGlzLm5vcm1hbGl6ZVZhbHVlKGZvcmNlKSwgMTAwKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHRoaXMuZGlzdGFuY2VWZWMuc2V0KHRoaXMuY2VudGVyUG9pbnQueCAtIHBhcnRpY2xlLnAueCwgdGhpcy5jZW50ZXJQb2ludC55IC0gcGFydGljbGUucC55KTtcclxuXHRcdGNvbnN0IGRpc3RhbmNlU3EgPSB0aGlzLmRpc3RhbmNlVmVjLmxlbmd0aFNxKCk7XHJcblx0XHRpZiAoZGlzdGFuY2VTcSAhPSAwKSB7XHJcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZVZlYy5sZW5ndGgoKTtcclxuXHRcdFx0Y29uc3QgZmFjdG9yID0gKHRoaXMuZm9yY2UgKiB0aW1lICkgLyAoZGlzdGFuY2VTcSAqIGRpc3RhbmNlICk7XHJcblx0XHRcdHBhcnRpY2xlLnYueCArPSBmYWN0b3IgKiB0aGlzLmRpc3RhbmNlVmVjLng7XHJcblx0XHRcdHBhcnRpY2xlLnYueSArPSBmYWN0b3IgKiB0aGlzLmRpc3RhbmNlVmVjLnk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IHsgcmFuZG9tQVRvQiB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbURyaWZ0IGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZHJpZnRYLCBkcmlmdFksIGRlbGF5LCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KGRyaWZ0WCwgZHJpZnRZLCBkZWxheSk7XHJcblx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJSYW5kb21EcmlmdFwiO1xyXG5cdFxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cclxuXHRyZXNldChkcmlmdFgsIGRyaWZ0WSwgZGVsYXksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5wYW5Gb2NlID0gbmV3IFZlY3RvcjJEKGRyaWZ0WCwgZHJpZnRZKTtcclxuXHRcdHRoaXMucGFuRm9jZSA9IHRoaXMubm9ybWFsaXplRm9yY2UodGhpcy5wYW5Gb2NlKTtcclxuXHRcdHRoaXMuZGVsYXkgPSBkZWxheTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0UmFuZG9tRHJpZnQuX3N1cGVyXy5wcm90b3R5cGUucmVzZXQuY2FsbCh0aGlzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0dGhpcy50aW1lICs9IHRpbWU7XHJcblx0XHRpZiAodGhpcy50aW1lID49IHRoaXMuZGVsYXkpIHtcdFx0XHRcclxuXHRcdFx0cGFydGljbGUuYS5hZGRYWShyYW5kb21BVG9CKC10aGlzLnBhbkZvY2UueCwgdGhpcy5wYW5Gb2NlLngpLCByYW5kb21BVG9CKC10aGlzLnBhbkZvY2UueSwgdGhpcy5wYW5Gb2NlLnkpKTtcclxuXHRcdFx0dGhpcy50aW1lID0gMDtcclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IEF0dHJhY3Rpb24gZnJvbSAnLi9BdHRyYWN0aW9uJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwdWxzaW9uIGV4dGVuZHMgQXR0cmFjdGlvbiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSAqPSAtMTtcclxuXHRcdHRoaXMubmFtZSA9IFwiUmVwdWxzaW9uXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyLnJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSAqPSAtMTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRlIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgc3R5bGUsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoYSwgYiwgc3R5bGUpO1xyXG5cdFx0dGhpcy5uYW1lID0gJ1JvdGF0ZSc7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGEsIGIsIHN0eWxlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYSA9IFV0aWwuc2V0U3BhblZhbHVlKGEgfHwgUm90YXRlLlRZUEUuVkVMT0NJVFkpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYiB8fCAwKTtcclxuXHRcdHRoaXMuc3R5bGUgPSBzdHlsZSB8fCBSb3RhdGUuU1RZTEVTLlRPO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUucm90YXRpb24gPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICghdGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0aWYgKCF0aGlzLnNhbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMuc3R5bGUgPT0gUm90YXRlLlNUWUxFUy5UTykge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnJvdGF0aW9uICs9IHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIgKyAocGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQSAtIHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIpICogdGhpcy5lbmVyZ3lcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiArPSBwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25CO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuYS5hID09IFJvdGF0ZS5UWVBFLlZFTE9DSVRZKSB7XHJcblx0XHRcdC8vYmV0YS4uLlxyXG5cdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiA9IHBhcnRpY2xlLmdldERpcmVjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuUm90YXRlLlNUWUxFUyA9IHtcclxuXHRUTzogMSA8PCAwLFxyXG5cdEZST006IDEgPDwgMVxyXG59O1xyXG5cclxuUm90YXRlLlRZUEUgPSB7XHJcblx0VkVMT0NJVFk6IDEgPDwgMFxyXG59O1xyXG4iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGUgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KGEsIGIpO1xyXG5cdFx0dGhpcy5uYW1lID0gJ1NjYWxlJztcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0aWYgKGIgPT0gbnVsbCB8fCBiID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdHRoaXMuc2FtZSA9IHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zYW1lID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLmEgPSBVdGlsLnNldFNwYW5WYWx1ZShVdGlsLmluaXRWYWx1ZShhLCAxKSk7XHJcblx0XHR0aGlzLmIgPSBVdGlsLnNldFNwYW5WYWx1ZShiKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VvZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5vbGRSYWRpdXMgPSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRpZiAodGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLnNjYWxlQiA9IHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUE7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLnNjYWxlQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuc2NhbGUgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVCICsgKHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUEgLSBwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVCKSAqIHRoaXMuZW5lcmd5O1xyXG5cdFx0aWYgKHBhcnRpY2xlLnNjYWxlIDwgMC4wMDAxKXtcclxuXHRcdFx0cGFydGljbGUuc2NhbGUgPSAwO1xyXG5cdFx0fVxyXG5cdFx0cGFydGljbGUucmFkaXVzID0gcGFydGljbGUudHJhbnNmb3JtLm9sZFJhZGl1cyAqIHBhcnRpY2xlLnNjYWxlO1xyXG5cdH1cclxufSIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmxldCB1aWQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGV7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5pZCA9IHVpZCsrO1xyXG4gICAgICB0aGlzLnJlc2V0KHRydWUpO1xyXG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3k7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnYueCwgLXRoaXMudi55KSAqICgxODAgLyBNYXRoLlBJKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldChpbml0KSB7XHJcbiAgICAgIHRoaXMubGlmZSA9IEluZmluaXR5O1xyXG4gICAgICB0aGlzLmFnZSA9IDA7XHJcbiAgICAgIHRoaXMuZW5lcmd5ID0gMTtcclxuICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2xlZXAgPSBmYWxzZTtcclxuICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gMTA7XHJcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICB0aGlzLnNjYWxlID0gMTtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuY29sb3IgPSBudWxsO1xyXG4gICAgICB0aGlzLmVhc2luZyA9ICh2YWwpID0+IHZhbDtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7fVxyXG4gICAgICBpZiAoaW5pdCkge1xyXG4gICAgICAgIHRoaXMucCA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMudiA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMuYSA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMub2xkID0ge1xyXG4gICAgICAgICAgcCA6IG5ldyBWZWN0b3IyRCgpLFxyXG4gICAgICAgICAgdiA6IG5ldyBWZWN0b3IyRCgpLFxyXG4gICAgICAgICAgYSA6IG5ldyBWZWN0b3IyRCgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJlaGF2aW91cnMgPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkZWxldGUgdGhpcy50cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5wLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLnYuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMuYS5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQucC5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQudi5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQuYS5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnJnYiA9IHtcclxuICAgICAgICByIDogMjU1LFxyXG4gICAgICAgIGcgOiAyNTUsXHJcbiAgICAgICAgYiA6IDI1NVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShpbmRleCwgdGltZSkge1xyXG4gICAgICBjb25zdCBhZ2UgPSB0aGlzLmFnZSArIHRpbWU7XHJcblxyXG4gICAgICBpZihhZ2UgPj0gdGhpcy5saWZlKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWdlID0gYWdlO1xyXG5cclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5iZWhhdmlvdXJzLmxlbmd0aDtcclxuICAgICAgbGV0IGk7XHJcbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5iZWhhdmlvdXJzW2ldKXtcclxuICAgICAgICAgIHRoaXMuYmVoYXZpb3Vyc1tpXS5hcHBseUJlaGF2aW91cih0aGlzLCB0aW1lLCBpbmRleClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmVhc2luZyh0aGlzLmFnZSAvIHRoaXMubGlmZSk7XHJcbiAgICAgIHRoaXMuZW5lcmd5ID0gTWF0aC5tYXgoMSAtIHNjYWxlLCAwKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJlaGF2aW91cihiZWhhdmlvdXIpIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYmVoYXZpb3VyKTtcclxuICAgICAgaWYgKGJlaGF2aW91ci5oYXNPd25Qcm9wZXJ0eSgncGFyZW50cycpKXtcclxuICAgICAgICBiZWhhdmlvdXIucGFyZW50cy5wdXNoKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGJlaGF2aW91ci5pbml0aWFsaXplKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJlaGF2aW91cnMoYmVoYXZpb3Vycykge1xyXG4gICAgICB2YXIgbGVuZ3RoID0gYmVoYXZpb3Vycy5sZW5ndGgsIGk7XHJcbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFkZEJlaGF2aW91cihiZWhhdmlvdXJzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5iZWhhdmlvdXJzLmluZGV4T2YoYmVoYXZpb3VyKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICB2YXIgYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgYmVoYXZpb3VyLnBhcmVudHMgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0b3J5IHRoaXMgcGFydGljbGVcclxuICAgICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuICAgICAgdGhpcy5lbmVyZ3kgPSAwO1xyXG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcbmltcG9ydCBTcGFuIGZyb20gJy4uL21hdGgvU3Bhbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGluaXRWYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIGEgc3BlY2lmaWMgdmFsdWUsIGNvdWxkIGJlIGV2ZXJ5dGhpbmcgYnV0IG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSBkZWZhdWx0cyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgaW5pdFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgZGVmYXVsdHMpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpID8gdmFsdWUgOiBkZWZhdWx0cztcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgVmVjdG9yMkQgLSBvciBjcmVhdGVzIGEgbmV3IG9uZVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGdldFZlY3RvcjJEXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtRdWFyay5WZWN0b3IyRCB8IE51bWJlcn0gcG9zdGlvbk9yWFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt5XSBqdXN0IHZhbGlkIGlmICdwb3N0aW9uT3JYJyBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7UXVhcmsuVmVjdG9yMkR9XHJcbiAgICAgKi9cclxuICAgIGdldFZlY3RvcjJEOiBmdW5jdGlvbihwb3N0aW9uT3JYLCB5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihwb3N0aW9uT3JYKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGlvbk9yWDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdmVjdG9yMmQgPSBuZXcgVmVjdG9yMkQocG9zdGlvbk9yWCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3IyZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QganVkZ2VWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHBPQkpgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIGZ1bmN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBPQkpcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBqdWRnZVZlY3RvcjJEOiBmdW5jdGlvbihwT0JKKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgneScpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3AnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdwb3NpdGlvbicpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ3AnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2eCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3Z4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndicpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3ZlbG9jaXR5JykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAndic7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdhJykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZScpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ2EnO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFZlY3RvcjJEQnlPYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGB0YXJnZXRgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGBwT0JKYFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwT0JKXHJcbiAgICAgKi9cclxuICAgIHNldFZlY3RvcjJEQnlPYmplY3Q6IGZ1bmN0aW9uKHRhcmdldCwgcE9CSikge1xyXG4gICAgICAgIGlmKHBPQkoueCkgdGFyZ2V0LnAueCA9IHBPQkoueDtcclxuXHJcbiAgICAgICAgaWYocE9CSi55KSB0YXJnZXQucC55ID0gcE9CSi55O1xyXG5cclxuICAgICAgICBpZihwT0JKLnZ4KSB0YXJnZXQudi54ID0gcE9CSi52eDtcclxuICAgICAgICBpZihwT0JKLnZ5KSB0YXJnZXQudi55ID0gcE9CSi52eTtcclxuXHJcbiAgICAgICAgaWYocE9CSi5heCkgdGFyZ2V0LmEueCA9IHBPQkouYXg7XHJcbiAgICAgICAgaWYocE9CSi5heSkgdGFyZ2V0LmEueSA9IHBPQkouYXk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbmV3IFF1YXJrLlNwYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2Qgc2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYSwgYiBhbmQgYyBzaG91bGQgYmUgJ01peGVkJyBvciAnTnVtYmVyJz9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUXVhcmsuU3Bhbn0gYVxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gICAgICAgICAgICAgICBiXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtRdWFyay5TcGFufVxyXG4gICAgICovXHJcbiAgICBzZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gU3Bhbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghYylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSwgYik7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIsIGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGZyb20gYSBRdWFyay5TcGFuLCBpZiB0aGUgcGFyYW0gaXMgbm90IGEgUXVhcmsuU3BhbiBpdCB3aWxsIHJldHVybiB0aGUgZ2l2ZW4gcGFyYW1ldGVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgZ2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZCB8IFF1YXJrLlNwYW59IHBhblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge01peGVkfSB0aGUgdmFsdWUgb2YgUXVhcmsuU3BhbiBPUiB0aGUgcGFyYW1ldGVyIGlmIGl0IGlzIG5vdCBhIFF1YXJrLlNwYW5cclxuICAgICAqL1xyXG4gICAgZ2V0U3BhblZhbHVlOiBmdW5jdGlvbihwYW4pIHtcclxuICAgICAgICBpZiAocGFuLmNvbnN0cnVjdG9yID09PSBTcGFuKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuLmdldFZhbHVlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlZGVmICB7T2JqZWN0fSByZ2JPYmplY3RcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByIHJlZCB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGcgZ3JlZW4gdmFsdWVcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBiIGJsdWUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIHJnYiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBoZXhUb1JHQlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoIGFueSBoZXggdmFsdWUsIGUuZy4gIzAwMDAwMCBvciAwMDAwMDAgZm9yIGJsYWNrXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7cmdiT2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBoZXhUb1JHQjogZnVuY3Rpb24oaCkge1xyXG4gICAgICAgIHZhciBoZXgxNiA9IChoLmNoYXJBdCgwKSA9PSBcIiNcIikgPyBoLnN1YnN0cmluZygxLCA3KSA6IGg7XHJcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoMCwgMiksIDE2KTtcclxuICAgICAgICB2YXIgZyA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygyLCA0KSwgMTYpO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDQsIDYpLCAxNik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IHIsXHJcbiAgICAgICAgICAgIGc6IGcsXHJcbiAgICAgICAgICAgIGI6IGJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29udmVydHMgYSByZ2IgdmFsdWUgdG8gYSByZ2Igc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgcmdiVG9IZXhcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdCB8IFF1YXJrLmhleFRvUkdCfSByZ2IgYSByZ2Igb2JqZWN0IGxpa2UgaW4ge0BsaW5rIFF1YXJrI1F1YXJrLlV0aWwuaGV4VG9SR0J9XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZ2IoKVxyXG4gICAgICovXHJcbiAgICByZ2JUb0hleDogZnVuY3Rpb24ocmJnKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJiZy5yICsgJywgJyArIHJiZy5nICsgJywgJyArIHJiZy5iICsgJyknO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4uL2NvcmUvUGFydGljbGUnO1xyXG5pbXBvcnQgUmF0ZSBmcm9tICcuLi9pbml0aWFsaXplL1JhdGUnO1xyXG5pbXBvcnQgTnVtZXJpY2FsSW50ZWdyYXRpb24gZnJvbSAnLi4vbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbic7XHJcbmltcG9ydCBpbml0aWFsaXplRm4gZnJvbSAnLi4vaW5pdGlhbGl6ZS9Jbml0aWFsaXplVXRpbCc7XHJcbmltcG9ydCBNaW5pU2lnbmFsIGZyb20gJ21pbmktc2lnbmFscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIGV4dGVuZHMgUGFydGljbGV7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZXMgPSBbXTtcclxuICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gLTE7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmcmljdGlvbiBjb2VmZmljaWVudCBmb3IgYWxsIHBhcnRpY2xlIGVtaXQgYnkgVGhpcztcclxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQGRlZmF1bHQgMC4wMDZcclxuICAgICAqL1xyXG4gICAgdGhpcy5kYW1waW5nID0gLjAwNjtcclxuICAgIC8qKlxyXG4gICAgICogSWYgYmluZEVtaXR0ZXIgdGhlIHBhcnRpY2xlcyBjYW4gYmluZCB0aGlzIGVtaXR0ZXIncyBwcm9wZXJ0eTtcclxuICAgICAqIEBwcm9wZXJ0eSBiaW5kRW1pdHRlclxyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmluZEVtaXR0ZXIgPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyBwZXIgc2Vjb25kIGVtaXQgKGEgW3BhcnRpY2xlXS9iIFtzXSk7XHJcbiAgICAgKiBAcHJvcGVydHkgcmF0ZVxyXG4gICAgICogQHR5cGUge1F1YXJrLlJhdGV9XHJcbiAgICAgKiBAZGVmYXVsdCBRdWFyay5SYXRlKDEsIC4xKVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJhdGUgPSBuZXcgUmF0ZSgxLCAuMSk7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdG9yID0gbmV3IE51bWVyaWNhbEludGVncmF0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5tYXhQYXJ0aWNsZXMgPSA1MDAwMDtcclxuXHJcblxyXG4gICAgdGhpcy5wYXJ0aWNsZUNyZWF0ZWQgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZVVwZGF0ZSA9IG5ldyBNaW5pU2lnbmFsKCk7XHJcbiAgICB0aGlzLnBhcnRpY2xlRGVhZCA9IG5ldyBNaW5pU2lnbmFsKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZTtcclxuICAgIHRoaXMuZW1pdHRpbmcgPSB0aGlzLmVtaXR0aW5nO1xyXG4gICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSA9IHRoaXMuY3JlYXRlUGFydGljbGU7XHJcbiAgICB0aGlzLmludGVncmF0ZSA9IHRoaXMuaW50ZWdyYXRlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVBhcnRpY2xlID0gdGhpcy5hY3RpdmF0ZVBhcnRpY2xlO1xyXG4gICAgdGhpcy51cGRhdGVQYXJ0aWNsZSA9IHRoaXMudXBkYXRlUGFydGljbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4UGFydGljbGVzKHZhbCl7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IG5ldyBBcnJheSh2YWwpLmZpbGwoZmFsc2UpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBuZXcgQXJyYXkodmFsKTtcclxuICAgIHRoaXMuYWN0aXZlQ291bnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1heFBhcnRpY2xlcygpe1xyXG4gICAgcmV0dXJuIHRoaXMucGFydGljbGVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNyZWF0ZSBzaW5nbGUgcGFydGljbGU7XHJcbiAgICogXHJcbiAgICogY2FuIHVzZSBlbWl0KHt4OjEwfSxuZXcgR3Jhdml0eSgxMCkseydwYXJ0aWNsZVVwZGF0ZScsZnVufSkgb3IgZW1pdChbe3g6MTB9LG5ldyBJbml0aWFsaXplXSxuZXcgR3Jhdml0eSgxMCkseydwYXJ0aWNsZVVwZGF0ZScsZnVufSlcclxuICAgKiBAbWV0aG9kIHJlbW92ZUFsbFBhcnRpY2xlc1xyXG4gICAqL1xyXG4gIGNyZWF0ZVBhcnRpY2xlKHRpbWUpIHtcclxuICAgIGxldCBhY3RpdmVDb3VudCA9IHRoaXMuYWN0aXZlQ291bnQ7XHJcbiAgICBpZihhY3RpdmVDb3VudCA9PT0gdGhpcy5tYXhQYXJ0aWNsZXMpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYWN0aXZlLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBpZiAoIWFjdGl2ZVtpXSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVQYXJ0aWNsZShpLCB0aW1lKTtcclxuICAgICAgICBhY3RpdmVbaV0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ291bnQgPSBhY3RpdmVDb3VudCArIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlUGFydGljbGUoaW5kZXgsIHRpbWUpe1xyXG4gICAgY29uc3QgcGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXM7XHJcbiAgICBsZXQgcGFydGljbGUgPSBwYXJ0aWNsZXNbaW5kZXhdO1xyXG5cclxuICAgIGlmKCFwYXJ0aWNsZSl7XHJcbiAgICAgIHBhcnRpY2xlc1tpbmRleF0gPSBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbml0aWFsaXplcyA9IHRoaXMuaW5pdGlhbGl6ZXM7XHJcbiAgICBsZXQgYmVoYXZpb3VycyA9IHRoaXMuYmVoYXZpb3VycztcclxuXHJcbiAgICBwYXJ0aWNsZS5yZXNldCgpO1xyXG4gICAgaW5pdGlhbGl6ZUZuKHRoaXMsIHBhcnRpY2xlLCBpbml0aWFsaXplcyk7XHJcbiAgICBwYXJ0aWNsZS5hZGRCZWhhdmlvdXJzKGJlaGF2aW91cnMpO1xyXG4gICAgcGFydGljbGUudXBkYXRlKGluZGV4LCB0aW1lKTtcclxuXHJcbiAgICB0aGlzLnBhcnRpY2xlQ3JlYXRlZC5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFydGljbGUocGFydGljbGUsIGluZGV4LCB0aW1lLCBkYW1waW5nKXtcclxuICAgIGNvbnN0IHJlcyA9IHBhcnRpY2xlLnVwZGF0ZShpbmRleCwgdGltZSk7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdG9yLmludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZyk7XHJcblxyXG4gICAgaWYocmVzKXtcclxuICAgICAgdGhpcy5wYXJ0aWNsZVVwZGF0ZS5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5wYXJ0aWNsZURlYWQuZGlzcGF0Y2gocGFydGljbGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGludGVncmF0ZSh0aW1lKSB7XHJcbiAgICBjb25zdCBkYW1waW5nID0gMSAtIHRoaXMuZGFtcGluZztcclxuICAgIHRoaXMuaW50ZWdyYXRvci5pbnRlZ3JhdGUodGhpcywgdGltZSwgZGFtcGluZyk7XHJcblxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xyXG4gICAgbGV0IGFjdGl2ZUNvdW50ID0gdGhpcy5hY3RpdmVDb3VudDtcclxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYWN0aXZlLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBpZiAoYWN0aXZlW2ldICYmICF0aGlzLnVwZGF0ZVBhcnRpY2xlKHBhcnRpY2xlc1tpXSwgaSwgdGltZSwgZGFtcGluZykpIHtcclxuICAgICAgICBhY3RpdmVbaV0gPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVDb3VudC0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjdGl2ZUNvdW50ID0gYWN0aXZlQ291bnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgZW1pdHRpbmcodGltZSkge1xyXG4gICAgdGhpcy5lbWl0VGltZSArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5lbWl0VGltZSA8IHRoaXMuZW1pdFRvdGFsVGltZXMpe1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnJhdGUuZ2V0VmFsdWUodGltZSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSh0aW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdChlbWl0VGltZSwgbGlmZSkge1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gZW1pdFRpbWUgfHwgSW5maW5pdHk7XHJcblxyXG4gICAgaWYoIWlzTmFOKGxpZmUpKSB7XHJcbiAgICAgIHRoaXMubGlmZSA9IGxpZmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yYXRlLmluaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHN0b3AgZW1pdGluZ1xyXG4gICAqIEBtZXRob2Qgc3RvcEVtaXRcclxuICAgKi9cclxuICBzdG9wRW1pdCgpIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcclxuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGN1cnJlbnQgYWxsIHBhcnRpY2xlc1xyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsUGFydGljbGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmUuZm9yRWFjaCgoYSk9PmE9ZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIGluaXRpYWxpemUgdG8gdGhpcyBlbWl0dGVyXHJcbiAgICogQG1ldGhvZCBhZGRTZWxmSW5pdGlhbGl6ZVxyXG4gICAqL1xyXG4gIGFkZFNlbGZJbml0aWFsaXplKHBPYmopIHtcclxuICAgIGlmIChwT2JqWydpbml0J10pIHtcclxuICAgICAgcE9iai5pbml0KHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0QWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEluaXRpYWxpemUgdG8gcGFydGljbGVzO1xyXG4gICAqIFxyXG4gICAqIHlvdSBjYW4gdXNlIGluaXRpYWxpemVzIGFycmF5OmZvciBleGFtcGxlIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShpbml0aWFsaXplMSxpbml0aWFsaXplMixpbml0aWFsaXplMyk7XHJcbiAgICogQG1ldGhvZCBhZGRJbml0aWFsaXplXHJcbiAgICogQHBhcmFtIHtRdWFyay5Jbml0aWFsaXplfSBpbml0aWFsaXplIGxpa2UgdGhpcyBuZXcgUXVhcmsuUmFkaXVzKDEsIDEyKVxyXG4gICAqL1xyXG4gIGFkZEluaXRpYWxpemUoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgSW5pdGlhbGl6ZVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZVxyXG4gICAqIEBwYXJhbSB7UXVhcmsuSW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBhIGluaXRpYWxpemVcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplKGluaXRpYWxpemVyKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5pdGlhbGl6ZXMuaW5kZXhPZihpbml0aWFsaXplcik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYWxsIEluaXRpYWxpemVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVJbml0aWFsaXplcnNcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplcnMoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEJlaGF2aW91ciB0byBwYXJ0aWNsZXM7XHJcbiAgICogXHJcbiAgICogeW91IGNhbiB1c2UgQmVoYXZpb3VycyBhcnJheTplbWl0dGVyLmFkZEJlaGF2aW91cihCZWhhdmlvdXIxLEJlaGF2aW91cjIsQmVoYXZpb3VyMyk7XHJcbiAgICogQG1ldGhvZCBhZGRCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGxpa2UgdGhpcyBuZXcgUXVhcmsuQ29sb3IoJ3JhbmRvbScpXHJcbiAgICovXHJcbiAgYWRkQmVoYXZpb3VyKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShcInBhcmVudHNcIikpXHJcbiAgICAgICAgYXJndW1lbnRzW2ldLnBhcmVudHMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgQmVoYXZpb3VyXHJcbiAgICogQG1ldGhvZCByZW1vdmVCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGEgYmVoYXZpb3VyXHJcbiAgICovXHJcbiAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpXHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGFsbCBiZWhhdmlvdXJzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxCZWhhdmlvdXJzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcclxuICAgIHRoaXMuYmVoYXZpb3Vycy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIHRoaXMuYWdlICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWFkIHx8ICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUpKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW1pdHRpbmcodGltZSk7XHJcbiAgICB0aGlzLmludGVncmF0ZSh0aW1lKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxyXG4gICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlSW5pdGlhbGl6ZXJzKCk7XHJcbiAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJlbnQpe1xyXG4gICAgICB0aGlzLnBhcmVudC5yZW1vdmVFbWl0dGVyKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iLCIvLyBjb25zdGFudHNcclxuZXhwb3J0IGNvbnN0IFBPT0xfTUFYID0gMTAwMDtcclxuZXhwb3J0IGNvbnN0IFRJTUVfU1RFUCA9IDYwO1xyXG5leHBvcnQgY29uc3QgVVNFX0NMT0NLID0gZmFsc2U7XHJcbmV4cG9ydCBjb25zdCBNRUFTVVJFID0gMTAwO1xyXG5cclxuLy8gaW50ZWdyYXRpb24gdHlwZXNcclxuZXhwb3J0IGNvbnN0IEVVTEVSID0gJ2V1bGVyJztcclxuZXhwb3J0IGNvbnN0IFJLMiA9ICdydW5nZS1rdXR0YTInO1xyXG5leHBvcnQgY29uc3QgUks0ID0gJ3J1bmdlLWt1dHRhNCc7XHJcbmV4cG9ydCBjb25zdCBWRVJMRVQgPSAndmVybGV0JztcclxuXHJcbi8vIGV2ZW50c1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfQ1JFQVRFRCA9ICdwYXJ0aWxjbGVDcmVhdGVkJztcclxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX1VQREFURSA9ICdwYXJ0aWxjbGVVcGRhdGUnO1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfU0xFRVAgPSAncGFydGljbGVTbGVlcCc7XHJcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9ERUFEID0gJ3BhcnRpbGNsZURlYWQnO1xyXG5leHBvcnQgY29uc3QgRU1JVFRFUl9BRERFRCA9ICdlbWl0dGVyQWRkZWQnO1xyXG5leHBvcnQgY29uc3QgRU1JVFRFUl9SRU1PVkVEID0gJ2VtaXR0ZXJSZW1vdmVkJztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jb25zdCc7XHJcblxyXG5pbXBvcnQgRW1pdHRlciBmcm9tICcuL0VtaXR0ZXInO1xyXG5cclxuZXhwb3J0IHtFbWl0dGVyfTsiLCJleHBvcnQgKiBmcm9tICcuL2VtaXR0ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2luaXRpYWxpemUnO1xyXG5pbXBvcnQgU3BhbiBmcm9tICcuL21hdGgvU3Bhbic7XHJcblxyXG5pbXBvcnQgUmVjdFpvbmUgZnJvbSAnLi96b25lL1JlY3Rab25lJztcclxuaW1wb3J0IFBvaW50Wm9uZSBmcm9tICcuL3pvbmUvUG9pbnRab25lJztcclxuaW1wb3J0IExpbmVab25lIGZyb20gJy4vem9uZS9MaW5lWm9uZSc7XHJcbmltcG9ydCBJbWFnZVpvbmUgZnJvbSAnLi96b25lL0ltYWdlWm9uZSc7XHJcbmltcG9ydCBDaXJjbGVab25lIGZyb20gJy4vem9uZS9DaXJjbGVab25lJztcclxuXHJcbmltcG9ydCBBbHBoYSBmcm9tICcuL2JlaGF2aW91ci9BbHBoYSc7XHJcbmltcG9ydCBBdHRyYWN0aW9uIGZyb20gJy4vYmVoYXZpb3VyL0F0dHJhY3Rpb24nO1xyXG5pbXBvcnQgQ29sbGlzaW9uIGZyb20gJy4vYmVoYXZpb3VyL0NvbGxpc2lvbic7XHJcbmltcG9ydCBSZXB1bHNpb24gZnJvbSAnLi9iZWhhdmlvdXIvUmVwdWxzaW9uJztcclxuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5pbXBvcnQgRm9yY2UgZnJvbSAnLi9iZWhhdmlvdXIvRm9yY2UnO1xyXG5pbXBvcnQgR3Jhdml0eSBmcm9tICcuL2JlaGF2aW91ci9HcmF2aXR5JztcclxuaW1wb3J0IEdyYXZpdHlXZWxsIGZyb20gJy4vYmVoYXZpb3VyL0dyYXZpdHlXZWxsJztcclxuaW1wb3J0IFJhbmRvbURyaWZ0IGZyb20gJy4vYmVoYXZpb3VyL1JhbmRvbURyaWZ0JztcclxuaW1wb3J0IFJvdGF0ZSBmcm9tICcuL2JlaGF2aW91ci9Sb3RhdGUnO1xyXG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9iZWhhdmlvdXIvU2NhbGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwYW4oYSwgYiwgY2VudGVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFNwYW4oYSwgYiwgY2VudGVyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgU3BhbiwgUmVjdFpvbmUsIFBvaW50Wm9uZSwgTGluZVpvbmUsIEltYWdlWm9uZSwgQ2lyY2xlWm9uZSB9O1xyXG5cclxuZXhwb3J0IHsgQWxwaGEsIEF0dHJhY3Rpb24sIENvbGxpc2lvbiwgUmVwdWxzaW9uLCBDcm9zc1pvbmUsIEZvcmNlLCBHcmF2aXR5LCBHcmF2aXR5V2VsbCwgUmFuZG9tRHJpZnQsIFJvdGF0ZSwgU2NhbGUgfTtcclxuXHJcbi8vIGdsb2JhbC5RdWFyayA9IGV4cG9ydHM7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdGlhbGl6ZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cmVzZXQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0aW5pdChlbWl0dGVyLCBwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHBhcnRpY2xlKSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxpemUoZW1pdHRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCkge1xyXG5cclxuXHR9XHJcbn0iLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgeyBkZWdyZWVUcmFuc2Zvcm0gfSBmcm9tICcuLi9tYXRoL01hdGhVdGlscyc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplcykge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGluaXRpYWxpemVzLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gaW5pdGlhbGl6ZXNbaV07XHJcbiAgICBpZiAoaW5pdGlhbGl6ZSBpbnN0YW5jZW9mIEluaXRpYWxpemUpe1xyXG4gICAgICBpbml0aWFsaXplLmluaXQoZW1pdHRlciwgcGFydGljbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kRW1pdHRlcihlbWl0dGVyLCBwYXJ0aWNsZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplKXtcclxuICBVdGlsLnNldFZlY3RvcjJEQnlPYmplY3QocGFydGljbGUsIGluaXRpYWxpemUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kRW1pdHRlcihlbWl0dGVyLCBwYXJ0aWNsZSkge1xyXG4gIGlmIChlbWl0dGVyLmJpbmRFbWl0dGVyKSB7XHJcbiAgICBwYXJ0aWNsZS5wLmFkZChlbWl0dGVyLnApO1xyXG4gICAgcGFydGljbGUudi5hZGQoZW1pdHRlci52KTtcclxuICAgIHBhcnRpY2xlLmEuYWRkKGVtaXR0ZXIuYSk7XHJcbiAgICBwYXJ0aWNsZS52LnJvdGF0ZShkZWdyZWVUcmFuc2Zvcm0oZW1pdHRlci5yb3RhdGlvbikpO1xyXG4gIH1cclxufSIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWZlIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgYykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmxpZmVQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHRpZiAodGhpcy5saWZlUGFuLmEgPT0gSW5maW5pdHkpe1xyXG5cdFx0XHR0YXJnZXQubGlmZSA9IEluZmluaXR5O1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRhcmdldC5saWZlID0gdGhpcy5saWZlUGFuLmdldFZhbHVlKCk7XHRcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzcyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFzc1BhbiA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUodGFyZ2V0KSB7XHJcbiAgICAgICAgdGFyZ2V0Lm1hc3MgPSB0aGlzLm1hc3NQYW4uZ2V0VmFsdWUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioem9uZSkge1xyXG4gICAgXHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuem9uZSA9IHpvbmUgfHwgbmV3IFBvaW50Wm9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KHpvbmUpe1xyXG5cdFx0dGhpcy56b25lID0gem9uZSB8fCBuZXcgUG9pbnRab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdHRoaXMuem9uZS5nZXRQb3NpdGlvbigpO1xyXG5cdFx0dGFyZ2V0LnAueCA9IHRoaXMuem9uZS52ZWN0b3IueDtcclxuXHRcdHRhcmdldC5wLnkgPSB0aGlzLnpvbmUudmVjdG9yLnk7XHJcblx0fVxyXG59IiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGl1cyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgXHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucmFkaXVzID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoYSwgYiwgYyl7XHJcblx0XHR0aGlzLnJhZGl1cyA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnJhZGl1cyA9IHRoaXMucmFkaXVzLmdldFZhbHVlKCk7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ub2xkUmFkaXVzID0gcGFydGljbGUucmFkaXVzO1xyXG5cdH1cclxufSIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXRle1xyXG5cclxuICBjb25zdHJ1Y3RvcihudW1wYW4sIHRpbWVwYW4pIHtcclxuICAgIHRoaXMubnVtUGFuID0gbnVtcGFuXHJcbiAgICB0aGlzLnRpbWVQYW4gPSB0aW1lcGFuO1xyXG4gICAgdGhpcy5udW1QYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGlzLm51bVBhbik7XHJcbiAgICB0aGlzLnRpbWVQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGlzLnRpbWVQYW4pO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5uZXh0VGltZSA9IDA7XHJcbiAgICB0aGlzLmluaXQoKTsgIFxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMubmV4dFRpbWUgPSB0aGlzLnRpbWVQYW4uZ2V0VmFsdWUoKTsgXHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSh0aW1lKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSArPSB0aW1lO1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lID49IHRoaXMubmV4dFRpbWUpIHtcclxuICAgICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7XHJcbiAgICAgIGlmICh0aGlzLm51bVBhbi5iID09IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5udW1QYW4uZ2V0VmFsdWUoZmFsc2UpID4gMC41KVxyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtUGFuLmdldFZhbHVlKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn0iLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgeyBNRUFTVVJFIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XHJcbmltcG9ydCBQb2xhcjJEIGZyb20gJy4uL21hdGgvUG9sYXIyRCc7XHJcbmltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi4vbWF0aC9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cdGNvbnN0cnVjdG9yKHJwYW4sIHRoYXBhbiwgdHlwZSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHJcblx0XHQvLyBzcGVlZCBvcHRpbWl6YXRpb25zXHJcblx0XHR0aGlzLlBPTEFSID0gJ3BvbGFyJztcclxuXHRcdHRoaXMuUCA9ICdwJztcclxuXHRcdHRoaXMuclBhblZhbCA9IHRoaXMuclBhbi5nZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5ub3JtYWxpemVkUEkgPSBNYXRoLlBJIC8gMTgwO1xyXG5cdH1cclxuXHJcblx0cmVzZXQocnBhbiwgdGhhcGFuLCB0eXBlKSB7XHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHR9XHJcblxyXG5cdG5vcm1hbGl6ZVZlbG9jaXR5KHZyKSB7XHJcblx0XHRyZXR1cm4gdnIgKiBNRUFTVVJFO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdGlmICh0aGlzLnR5cGUgPT0gdGhpcy5QIHx8IHRoaXMudHlwZSA9PSB0aGlzLlAgfHwgdGhpcy50eXBlID09IHRoaXMuUE9MQVIpIHtcclxuXHRcdFx0Y29uc3QgdGhhUGFuTm9ybSA9IHJhbmRvbUFUb0IodGhpcy50aGFQYW4uYSwgdGhpcy50aGFQYW4uYikqdGhpcy5ub3JtYWxpemVkUEk7XHJcblx0XHRcdGNvbnN0IHBvbGFyMmQgPSBuZXcgUG9sYXIyRCh0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhblZhbCksIHRoYVBhbk5vcm0pO1xyXG5cdFx0XHR0YXJnZXQudi54ID0gcG9sYXIyZC5nZXRYKCk7XHJcblx0XHRcdHRhcmdldC52LnkgPSBwb2xhcjJkLmdldFkoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhcmdldC52LnggPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhbi5nZXRWYWx1ZSgpKTtcclxuXHRcdFx0dGFyZ2V0LnYueSA9IHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy50aGFQYW4uZ2V0VmFsdWUoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlJztcclxuaW1wb3J0IFZlbG9jaXR5IGZyb20gJy4vVmVsb2NpdHknO1xyXG5pbXBvcnQgTGlmZSBmcm9tICcuL0xpZmUnO1xyXG5pbXBvcnQgTWFzcyBmcm9tICcuL01hc3MnO1xyXG5pbXBvcnQgUmFkaXVzIGZyb20gJy4vUmFkaXVzJztcclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IHsgUmF0ZSwgVmVsb2NpdHksIExpZmUsIE1hc3MsIFJhZGl1cywgUG9zaXRpb24gfTsiLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tQVRvQihhLCBiLCBJTlQpIHtcclxuICBpZiAoIUlOVClcclxuICAgIHJldHVybiAoYSArIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKSk7XHJcbiAgZWxzZVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChiIC0gYSkpICsgYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0aW5nKGNlbnRlciwgZiwgSU5UKSB7XHJcbiAgcmV0dXJuIHJhbmRvbUFUb0IoY2VudGVyIC0gZiwgY2VudGVyICsgZiwgSU5UKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZVRyYW5zZm9ybShhKSB7XHJcbiAgcmV0dXJuIGEgKiBNYXRoLlBJIC8gMTgwO1xyXG59IiwiaW1wb3J0IHsgRVVMRVIgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNhbEludGVncmF0aW9uIHtcclxuXHJcbiAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCBFVUxFUjtcclxuXHJcbiAgICB0aGlzLmludGVncmF0ZSA9IHRoaXMuaW50ZWdyYXRlO1xyXG4gICAgdGhpcy5ldWxlckludGVncmF0ZSA9IHRoaXMuZXVsZXJJbnRlZ3JhdGU7XHJcbiAgfVxyXG5cclxuICBpbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcclxuICAgIHRoaXMuZXVsZXJJbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpO1xyXG4gIH1cclxuXHJcbiAgZXVsZXJJbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcclxuICAgIGlmICghcGFydGljbGUuc2xlZXApIHtcclxuICAgICAgcGFydGljbGUub2xkLnAuY29weShwYXJ0aWNsZS5wKTtcclxuICAgICAgcGFydGljbGUub2xkLnYuY29weShwYXJ0aWNsZS52KTtcclxuICAgICAgcGFydGljbGUuYS5tdWx0aXBseVNjYWxhcigxIC8gcGFydGljbGUubWFzcyk7XHJcbiAgICAgIHBhcnRpY2xlLnYuYWRkKHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIodGltZSkpO1xyXG4gICAgICBwYXJ0aWNsZS5wLmFkZChwYXJ0aWNsZS5vbGQudi5tdWx0aXBseVNjYWxhcih0aW1lKSk7XHJcbiAgICAgIGlmIChkYW1waW5nKXtcclxuICAgICAgICBwYXJ0aWNsZS52Lm11bHRpcGx5U2NhbGFyKGRhbXBpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHBhcnRpY2xlLmEuY2xlYXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4vVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9sYXIyRCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHIsIHRoYSl7XHJcblx0XHR0aGlzLnIgPSBNYXRoLmFicyhyKSB8fCAwO1xyXG5cdFx0dGhpcy50aGEgPSB0aGEgfHwgMDtcclxuXHR9XHJcblxyXG5cdHNldChyLCB0aGEpIHtcclxuXHJcblx0XHR0aGlzLnIgPSByO1xyXG5cdFx0dGhpcy50aGEgPSB0aGE7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRSKHIpIHtcclxuXHJcblx0XHR0aGlzLnIgPSByO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0VGhhKHRoYSkge1xyXG5cclxuXHRcdHRoaXMudGhhID0gdGhhO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvcHkocCkge1xyXG5cclxuXHRcdHRoaXMuciA9IHAucjtcclxuXHRcdHRoaXMudGhhID0gcC50aGE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0dG9WZWN0b3IoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMuZ2V0WCgpLCB0aGlzLmdldFkoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRYKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuciAqIE1hdGguc2luKHRoaXMudGhhKTtcclxuXHR9XHJcblxyXG5cdGdldFkoKSB7XHJcblx0XHRyZXR1cm4gLXRoaXMuciAqIE1hdGguY29zKHRoaXMudGhhKTtcclxuXHR9XHJcblxyXG5cdG5vcm1hbGl6ZSgpIHtcclxuXHJcblx0XHR0aGlzLnIgPSAxO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRlcXVhbHModikge1xyXG5cclxuXHRcdHJldHVybiAoKHYuciA9PT0gdGhpcy5yICkgJiYgKHYudGhhID09PSB0aGlzLnRoYSApICk7XHJcblxyXG5cdH1cclxuXHJcblx0dG9BcnJheSgpIHtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuciwgdGhpcy50aGFdO1xyXG5cclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0dGhpcy5yID0gMC4wO1xyXG5cdFx0dGhpcy50aGEgPSAwLjA7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGNsb25lKCkge1xyXG5cclxuXHRcdHJldHVybiBuZXcgUG9sYXIyRCh0aGlzLnIsIHRoaXMudGhhKTtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhbntcclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBjZW50ZXIgPSBmYWxzZSkge1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcclxuXHRcdFx0dGhpcy5pc0FycmF5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5hID0gYTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYSA9IGE7XHJcblx0XHRcdHRoaXMuYiA9IGIgfHwgdGhpcy5hO1xyXG5cdFx0XHR0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFZhbHVlKElOVCl7XHJcblx0XHRpZiAodGhpcy5pc0FycmF5KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmFbTWF0aC5mbG9vcih0aGlzLmEubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCF0aGlzLmNlbnRlcil7XHJcblx0XHRcdFx0cmV0dXJuIHJhbmRvbUFUb0IodGhpcy5hLCB0aGlzLmIsIElOVCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHJldHVybiByYW5kb21GbG9hdGluZyh0aGlzLmEsIHRoaXMuYiwgSU5UKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRHtcclxuXHJcbiAgY29uc3RydWN0b3IoeCwgeSl7XHJcbiAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgfVxyXG5cclxuICBzZXQoeCwgeSkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0WCh4KSB7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFkoeSkge1xyXG5cclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0Q29tcG9uZW50KGluZGV4LCB2YWx1ZSkge1xyXG5cclxuICAgIHN3aXRjaCAoIGluZGV4ICkge1xyXG5cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHRoaXMueCA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0R3JhZGllbnQoKSB7XHJcbiAgICBpZiAodGhpcy54ICE9IDApXHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA+IDApXHJcbiAgICAgIHJldHVybiBNYXRoLlBJIC8gMjtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA8IDApXHJcbiAgICAgIHJldHVybiAtTWF0aC5QSSAvIDI7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnQoaW5kZXgpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRleCBpcyBvdXQgb2YgcmFuZ2U6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb3B5KHYpIHtcclxuXHJcbiAgICB0aGlzLnggPSB2Lng7XHJcbiAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFkZFZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICB0aGlzLnkgKz0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFhZKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gYTtcclxuICAgIHRoaXMueSArPSBiO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCArIGIueDtcclxuICAgIHRoaXMueSA9IGEueSArIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCArPSBzO1xyXG4gICAgdGhpcy55ICs9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc3ViKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1YlZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICB0aGlzLnkgLT0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1YlZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCAtIGIueDtcclxuICAgIHRoaXMueSA9IGEueSAtIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtdWx0aXBseVNjYWxhcihzKSB7XHJcblxyXG4gICAgdGhpcy54ICo9IHM7XHJcbiAgICB0aGlzLnkgKj0gcztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBkaXZpZGVTY2FsYXIocykge1xyXG5cclxuICAgIGlmIChzICE9PSAwKSB7XHJcblxyXG4gICAgICB0aGlzLnggLz0gcztcclxuICAgICAgdGhpcy55IC89IHM7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHRoaXMuc2V0KDAsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtaW4odikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPiB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA+IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtYXgodikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPCB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBjbGFtcChtaW4sIG1heCkge1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyBtaW4gPCBtYXgsIGlmIHRoaXMgYXNzdW1wdGlvbiBpc24ndCB0cnVlIGl0IHdpbGwgbm90IG9wZXJhdGUgY29ycmVjdGx5XHJcblxyXG4gICAgaWYgKHRoaXMueCA8IG1pbi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtaW4ueDtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueCA+IG1heC54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtYXgueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IG1pbi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtaW4ueTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueSA+IG1heC55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtYXgueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbmVnYXRlKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKC0xKTtcclxuXHJcbiAgfVxyXG5cclxuICBkb3Qodikge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoU3EoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcclxuXHJcbiAgfVxyXG5cclxuICBsZW5ndGgoKSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG5cclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUbyh2KSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlVG9TcXVhcmVkKHYpKTtcclxuXHJcbiAgfVxyXG5cclxuICByb3RhdGUodGhhKSB7XHJcbiAgICB2YXIgeCA9IHRoaXMueDtcclxuICAgIHZhciB5ID0gdGhpcy55O1xyXG4gICAgdGhpcy54ID0geCAqIE1hdGguY29zKHRoYSkgKyB5ICogTWF0aC5zaW4odGhhKTtcclxuICAgIHRoaXMueSA9IC14ICogTWF0aC5zaW4odGhhKSArIHkgKiBNYXRoLmNvcyh0aGEpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZVRvU3F1YXJlZCh2KSB7XHJcblxyXG4gICAgdmFyIGR4ID0gdGhpcy54IC0gdi54LCBkeSA9IHRoaXMueSAtIHYueTtcclxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRMZW5ndGgobCkge1xyXG5cclxuICAgIHZhciBvbGRMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG5cclxuICAgIGlmIChvbGRMZW5ndGggIT09IDAgJiYgbCAhPT0gb2xkTGVuZ3RoKSB7XHJcblxyXG4gICAgICB0aGlzLm11bHRpcGx5U2NhbGFyKGwgLyBvbGRMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGxlcnAodiwgYWxwaGEpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gKHYueCAtIHRoaXMueCApICogYWxwaGE7XHJcbiAgICB0aGlzLnkgKz0gKHYueSAtIHRoaXMueSApICogYWxwaGE7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZXF1YWxzKHYpIHtcclxuXHJcbiAgICByZXR1cm4gKCh2LnggPT09IHRoaXMueCApICYmICh2LnkgPT09IHRoaXMueSApICk7XHJcblxyXG4gIH1cclxuXHJcbiAgdG9BcnJheSgpIHtcclxuXHJcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMueCA9IDAuMDtcclxuICAgIHRoaXMueSA9IDAuMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XHJcblxyXG4gIH1cclxufSIsImNvbnN0IGVhc2luZyA9IHtcclxuXHRlYXNlTGluZWFyIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5RdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5wb3coKHZhbHVlIC0gMSksIDIpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0UXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3codmFsdWUsIDIpO1xyXG5cdFx0cmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgLSAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5DdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5wb3codmFsdWUsIDMpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRDdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKE1hdGgucG93KCh2YWx1ZSAtIDEpLCAzKSArIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgMyk7XHJcblx0XHRyZXR1cm4gMC41ICogKE1hdGgucG93KCh2YWx1ZSAtIDIpLCAzKSArIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgNCk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtKE1hdGgucG93KCh2YWx1ZSAtIDEpLCA0KSAtIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dFF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgNCk7XHJcblx0XHRyZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiBNYXRoLnBvdyh2YWx1ZSwgMykgLSAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5TaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtTWF0aC5jb3ModmFsdWUgKiAoTWF0aC5QSSAvIDIpKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguc2luKHZhbHVlICogKE1hdGguUEkgLyAyKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0U2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSAtIDEpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5FeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPT09IDApID8gMCA6IE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRFeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPT09IDEpID8gMSA6IC1NYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKyAxO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdGlmICh2YWx1ZSA9PT0gMSlcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSk7XHJcblx0XHRyZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXZhbHVlKSArIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkNpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSAodmFsdWUgKiB2YWx1ZSkpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dENpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coKHZhbHVlIC0gMSksIDIpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRDaXJjIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcclxuXHRcdHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcclxuXHR9LFxyXG5cdFxyXG5cdGVhc2VJbkJhY2sgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dmFyIHMgPSAxLjcwMTU4O1xyXG5cdFx0cmV0dXJuICh2YWx1ZSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0QmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gKCB2YWx1ZSA9IHZhbHVlIC0gMSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0QmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB2YWx1ZSAtIHMpKTtcclxuXHRcdHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XHJcblx0fSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RWFzaW5nQnlOYW1lKG5hbWUpIHtcclxuXHRyZXR1cm4gZWFzaW5nW25hbWVdXHJcbn1cclxuIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuLi9iZWhhdmlvdXIvQ3Jvc3Nab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cdFx0dGhpcy5hbmdsZSA9IDA7XHJcblx0XHR0aGlzLmNlbnRlciA9IHtcclxuXHRcdFx0eCA6IHRoaXMueCxcclxuXHRcdFx0eSA6IHRoaXMueVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyB0aGlzLnJhbmRvbSAqIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55ICsgdGhpcy5yYW5kb20gKiB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0c2V0Q2VudGVyKHgsIHkpIHtcclxuXHRcdHRoaXMuY2VudGVyLnggPSB4O1xyXG5cdFx0dGhpcy5jZW50ZXIueSA9IHk7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIGQgPSBwYXJ0aWNsZS5wLmRpc3RhbmNlVG8odGhpcy5jZW50ZXIpO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5ERUFEKSB7XHJcblx0XHRcdGlmIChkIC0gcGFydGljbGUucmFkaXVzID4gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5CT1VORCkge1xyXG5cdFx0XHRpZiAoZCArIHBhcnRpY2xlLnJhZGl1cyA+PSB0aGlzLnJhZGl1cylcclxuXHRcdFx0XHR0aGlzLmdldFN5bW1ldHJpYyhwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5DUk9TUykge1xyXG5cdFx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeSBDaXJjbGVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWMocGFydGljbGUpIHtcclxuXHRcdHZhciB0aGEyID0gcGFydGljbGUudi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KHBhcnRpY2xlKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gcGFydGljbGUudi54O1xyXG5cdFx0dmFyIG9sZHkgPSBwYXJ0aWNsZS52Lnk7XHJcblx0XHRwYXJ0aWNsZS52LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0cGFydGljbGUudi55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KHBhcnRpY2xlKSB7XHJcblx0XHRyZXR1cm4gLU1hdGguUEkgLyAyICsgTWF0aC5hdGFuMihwYXJ0aWNsZS5wLnkgLSB0aGlzLmNlbnRlci55LCBwYXJ0aWNsZS5wLnggLSB0aGlzLmNlbnRlci54KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGltYWdlRGF0YSwgeCwgeSwgZCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMucmVzZXQoaW1hZ2VEYXRhLCB4LCB5LCBkKTtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGltYWdlRGF0YSwgeCwgeSwgZCkge1xyXG5cdFx0dGhpcy5pbWFnZURhdGEgPSBpbWFnZURhdGE7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMuZCA9IGQgfHwgMjtcclxuXHRcdHRoaXMudmVjdG9ycyA9IFtdO1xyXG5cdFx0dGhpcy5zZXRWZWN0b3JzKCk7XHJcblx0fVxyXG5cclxuXHRzZXRWZWN0b3JzKCkge1xyXG5cdFx0dmFyIGksIGo7XHJcblx0XHR2YXIgbGVuZ3RoMSA9IHRoaXMuaW1hZ2VEYXRhLndpZHRoO1xyXG5cdFx0dmFyIGxlbmd0aDIgPSB0aGlzLmltYWdlRGF0YS5oZWlnaHQ7XHJcblx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDE7IGkgKz0gdGhpcy5kKSB7XHJcblx0XHRcdGZvciAoIGogPSAwOyBqIDwgbGVuZ3RoMjsgaiArPSB0aGlzLmQpIHtcclxuXHRcdFx0XHR2YXIgaW5kZXggPSAoKGogPj4gMCkgKiBsZW5ndGgxICsgKGkgPj4gMCkpICogNDtcclxuXHRcdFx0XHRpZiAodGhpcy5pbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy52ZWN0b3JzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHR4IDogaSArIHRoaXMueCxcclxuXHRcdFx0XHRcdFx0eSA6IGogKyB0aGlzLnlcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Z2V0Qm91bmQoeCwgeSkge1xyXG5cdFx0dmFyIGluZGV4ID0gKCh5ID4+IDApICogdGhpcy5pbWFnZURhdGEud2lkdGggKyAoeCA+PiAwKSkgKiA0O1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA+IDApXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnZlY3Rvci5jb3B5KHRoaXMudmVjdG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnZlY3RvcnMubGVuZ3RoKV0pO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29sb3IoeCwgeSkge1xyXG5cdFx0eCAtPSB0aGlzLng7XHJcblx0XHR5IC09IHRoaXMueTtcclxuXHRcdHZhciBpID0gKCh5ID4+IDApICogdGhpcy5pbWFnZURhdGEud2lkdGggKyAoeCA+PiAwKSkgKiA0O1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ciA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaV0sXHJcblx0XHRcdGcgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAxXSxcclxuXHRcdFx0YiA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDJdLFxyXG5cdFx0XHRhIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgM11cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiZGVhZFwiKSB7XHJcblx0XHRcdGlmICh0aGlzLmdldEJvdW5kKHBhcnRpY2xlLnAueCAtIHRoaXMueCwgcGFydGljbGUucC55IC0gdGhpcy55KSlcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSBmYWxzZTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJib3VuZFwiKSB7XHJcblx0XHRcdGlmICghdGhpcy5nZXRCb3VuZChwYXJ0aWNsZS5wLnggLSB0aGlzLngsIHBhcnRpY2xlLnAueSAtIHRoaXMueSkpXHJcblx0XHRcdFx0cGFydGljbGUudi5uZWdhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4uL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZVpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeDEsIHkxLCB4MiwgeTIsIGRpcmVjdGlvbikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoeDIgLSB4MSA+PSAwKSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MTtcclxuXHRcdFx0dGhpcy55MSA9IHkxO1xyXG5cdFx0XHR0aGlzLngyID0geDI7XHJcblx0XHRcdHRoaXMueTIgPSB5MjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MjtcclxuXHRcdFx0dGhpcy55MSA9IHkyO1xyXG5cdFx0XHR0aGlzLngyID0geDE7XHJcblx0XHRcdHRoaXMueTIgPSB5MTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZHggPSB0aGlzLngyIC0gdGhpcy54MTtcclxuXHRcdHRoaXMuZHkgPSB0aGlzLnkyIC0gdGhpcy55MTtcclxuXHRcdHRoaXMubWlueCA9IE1hdGgubWluKHRoaXMueDEsIHRoaXMueDIpO1xyXG5cdFx0dGhpcy5taW55ID0gTWF0aC5taW4odGhpcy55MSwgdGhpcy55Mik7XHJcblx0XHR0aGlzLm1heHggPSBNYXRoLm1heCh0aGlzLngxLCB0aGlzLngyKTtcclxuXHRcdHRoaXMubWF4eSA9IE1hdGgubWF4KHRoaXMueTEsIHRoaXMueTIpO1xyXG5cdFx0dGhpcy5kb3QgPSB0aGlzLngyICogdGhpcy55MSAtIHRoaXMueDEgKiB0aGlzLnkyO1xyXG5cdFx0dGhpcy54eHl5ID0gdGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keTtcclxuXHRcdHRoaXMuZ3JhZGllbnQgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCAxO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54MSArIHRoaXMucmFuZG9tICogdGhpcy5sZW5ndGggKiBNYXRoLmNvcyh0aGlzLmdyYWRpZW50KTtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkxICsgdGhpcy5yYW5kb20gKiB0aGlzLmxlbmd0aCAqIE1hdGguc2luKHRoaXMuZ3JhZGllbnQpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkRFQUQpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09IDEpIHtcclxuXHRcdFx0XHR0aGlzLmdldFJhbmdlKHBhcnRpY2xlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoIXNlbGYuZ2V0RGlyZWN0aW9uKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSlcclxuXHRcdFx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHNlbGYuZ2V0RGlzdGFuY2UocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpIDw9IHBhcnRpY2xlLnJhZGl1cykge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGYuZHggPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlbGYuZHkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS52LnkgKj0gLTE7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldFN5bW1ldHJpYyhwYXJ0aWNsZS52KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0XHRhbGVydCgnU29ycnkgbGluZVpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zcyBtZXRob2QnKTtcclxuXHRcdFx0XHR0aGlzLmFsZXJ0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldERpcmVjdGlvbih4LCB5KSB7XHJcblx0XHR2YXIgQSA9IHRoaXMuZHk7XHJcblx0XHR2YXIgQiA9IC10aGlzLmR4O1xyXG5cdFx0dmFyIEMgPSB0aGlzLmRvdDtcclxuXHRcdHZhciBEID0gQiA9PSAwID8gMSA6IEI7XHJcblx0XHRpZiAoKEEgKiB4ICsgQiAqIHkgKyBDKSAqIEQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXREaXN0YW5jZSh4LCB5KSB7XHJcblx0XHR2YXIgQSA9IHRoaXMuZHk7XHJcblx0XHR2YXIgQiA9IC10aGlzLmR4O1xyXG5cdFx0dmFyIEMgPSB0aGlzLmRvdDtcclxuXHRcdHZhciBEID0gKEEgKiB4ICsgQiAqIHkgKyBDKTtcclxuXHRcdHJldHVybiBEIC8gTWF0aC5zcXJ0KHRoaXMueHh5eSk7XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWModikge1xyXG5cdFx0dmFyIHRoYTIgPSB2LmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhMSA9IHRoaXMuZ2V0R3JhZGllbnQoKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gdi54O1xyXG5cdFx0dmFyIG9sZHkgPSB2Lnk7XHJcblx0XHR2LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0di55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHRcdHJldHVybiB2O1xyXG5cdH1cclxuXHJcblx0Z2V0R3JhZGllbnQoKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5hdGFuMih0aGlzLmR5LCB0aGlzLmR4KTtcclxuXHR9XHJcblxyXG5cdGdldFJhbmdlKHBhcnRpY2xlLCBmdW4pIHtcclxuXHRcdHZhciBhbmdsZSA9IE1hdGguYWJzKHRoaXMuZ2V0R3JhZGllbnQoKSk7XHJcblx0XHRpZiAoYW5nbGUgPD0gTWF0aC5QSSAvIDQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCA8IHRoaXMubWF4eCAmJiBwYXJ0aWNsZS5wLnggPiB0aGlzLm1pbngpIHtcclxuXHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSA8IHRoaXMubWF4eSAmJiBwYXJ0aWNsZS5wLnkgPiB0aGlzLm1pbnkpIHtcclxuXHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TGVuZ3RoKCkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmR4ICogdGhpcy5keCArIHRoaXMuZHkgKiB0aGlzLmR5KVxyXG5cdH1cclxufSIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueDtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdGFsZXJ0KCdTb3JyeSBQb2ludFpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zc2luZyBtZXRob2QnKTtcclxuXHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcbmltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyBNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aDtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQ7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCkge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSlcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5CT1VORCkge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzIDwgdGhpcy54KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54ICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueCAqPSAtMTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJ0aWNsZS5wLnggKyBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54ICsgdGhpcy53aWR0aCAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgLSBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5DUk9TUykge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54ICYmIHBhcnRpY2xlLnYueCA8PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGggJiYgcGFydGljbGUudi54ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54IC0gcGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSAmJiBwYXJ0aWNsZS52LnkgPD0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcGFydGljbGUudi55ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMudmVjdG9yID0gbmV3IFZlY3RvcjJEKDAsIDApO1xyXG5cdFx0dGhpcy5yYW5kb20gPSAwO1xyXG5cdFx0dGhpcy5jcm9zc1R5cGUgPSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRDtcclxuXHRcdHRoaXMuYWxlcnQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblxyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==