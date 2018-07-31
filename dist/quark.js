(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/behaviour/Alpha.js":
/*!********************************!*\
  !*** ./src/behaviour/Alpha.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

/***/ }),

/***/ "./src/behaviour/Attraction.js":
/*!*************************************!*\
  !*** ./src/behaviour/Attraction.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

/***/ }),

/***/ "./src/behaviour/Behaviour.js":
/*!************************************!*\
  !*** ./src/behaviour/Behaviour.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _const = __webpack_require__(/*! ../emitter/const */ "./src/emitter/const.js");

var _ease = __webpack_require__(/*! ../math/ease */ "./src/math/ease.js");

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

/***/ }),

/***/ "./src/behaviour/Collision.js":
/*!************************************!*\
  !*** ./src/behaviour/Collision.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

/***/ }),

/***/ "./src/behaviour/CrossZone.js":
/*!************************************!*\
  !*** ./src/behaviour/CrossZone.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

exports.default = CrossZone;


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

/***/ }),

/***/ "./src/behaviour/Gravity.js":
/*!**********************************!*\
  !*** ./src/behaviour/Gravity.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Force2 = __webpack_require__(/*! ./Force */ "./src/behaviour/Force.js");

var _Force3 = _interopRequireDefault(_Force2);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

/***/ }),

/***/ "./src/behaviour/GravityWell.js":
/*!**************************************!*\
  !*** ./src/behaviour/GravityWell.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

/***/ }),

/***/ "./src/behaviour/RandomDrift.js":
/*!**************************************!*\
  !*** ./src/behaviour/RandomDrift.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.js");

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

/***/ }),

/***/ "./src/behaviour/Repulsion.js":
/*!************************************!*\
  !*** ./src/behaviour/Repulsion.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Attraction2 = __webpack_require__(/*! ./Attraction */ "./src/behaviour/Attraction.js");

var _Attraction3 = _interopRequireDefault(_Attraction2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

/***/ }),

/***/ "./src/behaviour/Rotate.js":
/*!*********************************!*\
  !*** ./src/behaviour/Rotate.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

exports.default = Rotate;


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Behaviour2 = __webpack_require__(/*! ./Behaviour */ "./src/behaviour/Behaviour.js");

var _Behaviour3 = _interopRequireDefault(_Behaviour2);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

/***/ }),

/***/ "./src/core/Particle.js":
/*!******************************!*\
  !*** ./src/core/Particle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

/***/ }),

/***/ "./src/core/Util.js":
/*!**************************!*\
  !*** ./src/core/Util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

var _Vector2D2 = _interopRequireDefault(_Vector2D);

var _Span = __webpack_require__(/*! ../math/Span */ "./src/math/Span.js");

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

/***/ }),

/***/ "./src/emitter/Emitter.js":
/*!********************************!*\
  !*** ./src/emitter/Emitter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Particle2 = __webpack_require__(/*! ../core/Particle */ "./src/core/Particle.js");

var _Particle3 = _interopRequireDefault(_Particle2);

var _Rate = __webpack_require__(/*! ../initialize/Rate */ "./src/initialize/Rate.js");

var _Rate2 = _interopRequireDefault(_Rate);

var _NumericalIntegration = __webpack_require__(/*! ../math/NumericalIntegration */ "./src/math/NumericalIntegration.js");

var _NumericalIntegration2 = _interopRequireDefault(_NumericalIntegration);

var _InitializeUtil = __webpack_require__(/*! ../initialize/InitializeUtil */ "./src/initialize/InitializeUtil.js");

var _InitializeUtil2 = _interopRequireDefault(_InitializeUtil);

var _miniSignals = __webpack_require__(/*! mini-signals */ "./node_modules/mini-signals/lib/mini-signals.js");

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

/***/ }),

/***/ "./src/emitter/const.js":
/*!******************************!*\
  !*** ./src/emitter/const.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),

/***/ "./src/emitter/index.js":
/*!******************************!*\
  !*** ./src/emitter/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Emitter = undefined;

var _const = __webpack_require__(/*! ./const */ "./src/emitter/const.js");

Object.keys(_const).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _const[key];
    }
  });
});

var _Emitter = __webpack_require__(/*! ./Emitter */ "./src/emitter/Emitter.js");

var _Emitter2 = _interopRequireDefault(_Emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Emitter = _Emitter2.default;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Scale = exports.Rotate = exports.RandomDrift = exports.GravityWell = exports.Gravity = exports.Force = exports.CrossZone = exports.Repulsion = exports.Collision = exports.Attraction = exports.Alpha = exports.CircleZone = exports.ImageZone = exports.LineZone = exports.PointZone = exports.RectZone = exports.Span = undefined;

var _emitter = __webpack_require__(/*! ./emitter */ "./src/emitter/index.js");

Object.keys(_emitter).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _emitter[key];
        }
    });
});

var _initialize = __webpack_require__(/*! ./initialize */ "./src/initialize/index.js");

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

var _Span = __webpack_require__(/*! ./math/Span */ "./src/math/Span.js");

var _Span2 = _interopRequireDefault(_Span);

var _RectZone = __webpack_require__(/*! ./zone/RectZone */ "./src/zone/RectZone.js");

var _RectZone2 = _interopRequireDefault(_RectZone);

var _PointZone = __webpack_require__(/*! ./zone/PointZone */ "./src/zone/PointZone.js");

var _PointZone2 = _interopRequireDefault(_PointZone);

var _LineZone = __webpack_require__(/*! ./zone/LineZone */ "./src/zone/LineZone.js");

var _LineZone2 = _interopRequireDefault(_LineZone);

var _ImageZone = __webpack_require__(/*! ./zone/ImageZone */ "./src/zone/ImageZone.js");

var _ImageZone2 = _interopRequireDefault(_ImageZone);

var _CircleZone = __webpack_require__(/*! ./zone/CircleZone */ "./src/zone/CircleZone.js");

var _CircleZone2 = _interopRequireDefault(_CircleZone);

var _Alpha = __webpack_require__(/*! ./behaviour/Alpha */ "./src/behaviour/Alpha.js");

var _Alpha2 = _interopRequireDefault(_Alpha);

var _Attraction = __webpack_require__(/*! ./behaviour/Attraction */ "./src/behaviour/Attraction.js");

var _Attraction2 = _interopRequireDefault(_Attraction);

var _Collision = __webpack_require__(/*! ./behaviour/Collision */ "./src/behaviour/Collision.js");

var _Collision2 = _interopRequireDefault(_Collision);

var _Repulsion = __webpack_require__(/*! ./behaviour/Repulsion */ "./src/behaviour/Repulsion.js");

var _Repulsion2 = _interopRequireDefault(_Repulsion);

var _CrossZone = __webpack_require__(/*! ./behaviour/CrossZone */ "./src/behaviour/CrossZone.js");

var _CrossZone2 = _interopRequireDefault(_CrossZone);

var _Force = __webpack_require__(/*! ./behaviour/Force */ "./src/behaviour/Force.js");

var _Force2 = _interopRequireDefault(_Force);

var _Gravity = __webpack_require__(/*! ./behaviour/Gravity */ "./src/behaviour/Gravity.js");

var _Gravity2 = _interopRequireDefault(_Gravity);

var _GravityWell = __webpack_require__(/*! ./behaviour/GravityWell */ "./src/behaviour/GravityWell.js");

var _GravityWell2 = _interopRequireDefault(_GravityWell);

var _RandomDrift = __webpack_require__(/*! ./behaviour/RandomDrift */ "./src/behaviour/RandomDrift.js");

var _RandomDrift2 = _interopRequireDefault(_RandomDrift);

var _Rotate = __webpack_require__(/*! ./behaviour/Rotate */ "./src/behaviour/Rotate.js");

var _Rotate2 = _interopRequireDefault(_Rotate);

var _Scale = __webpack_require__(/*! ./behaviour/Scale */ "./src/behaviour/Scale.js");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/initialize/Initialize.js":
/*!**************************************!*\
  !*** ./src/initialize/Initialize.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/initialize/InitializeUtil.js":
/*!******************************************!*\
  !*** ./src/initialize/InitializeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _Initialize = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");

var _Initialize2 = _interopRequireDefault(_Initialize);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.js");

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

/***/ }),

/***/ "./src/initialize/Life.js":
/*!********************************!*\
  !*** ./src/initialize/Life.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Initialize2 = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");

var _Initialize3 = _interopRequireDefault(_Initialize2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

/***/ }),

/***/ "./src/initialize/Mass.js":
/*!********************************!*\
  !*** ./src/initialize/Mass.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Initialize2 = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");

var _Initialize3 = _interopRequireDefault(_Initialize2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

/***/ }),

/***/ "./src/initialize/Position.js":
/*!************************************!*\
  !*** ./src/initialize/Position.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Initialize2 = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");

var _Initialize3 = _interopRequireDefault(_Initialize2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

/***/ }),

/***/ "./src/initialize/Radius.js":
/*!**********************************!*\
  !*** ./src/initialize/Radius.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Initialize2 = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");

var _Initialize3 = _interopRequireDefault(_Initialize2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

/***/ }),

/***/ "./src/initialize/Rate.js":
/*!********************************!*\
  !*** ./src/initialize/Rate.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

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

/***/ }),

/***/ "./src/initialize/Velocity.js":
/*!************************************!*\
  !*** ./src/initialize/Velocity.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Initialize2 = __webpack_require__(/*! ./Initialize */ "./src/initialize/Initialize.js");

var _Initialize3 = _interopRequireDefault(_Initialize2);

var _Util = __webpack_require__(/*! ../core/Util */ "./src/core/Util.js");

var _Util2 = _interopRequireDefault(_Util);

var _const = __webpack_require__(/*! ../emitter/const */ "./src/emitter/const.js");

var _Polar2D = __webpack_require__(/*! ../math/Polar2D */ "./src/math/Polar2D.js");

var _Polar2D2 = _interopRequireDefault(_Polar2D);

var _MathUtils = __webpack_require__(/*! ../math/MathUtils */ "./src/math/MathUtils.js");

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

/***/ }),

/***/ "./src/initialize/index.js":
/*!*********************************!*\
  !*** ./src/initialize/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Position = exports.Radius = exports.Mass = exports.Life = exports.Velocity = exports.Rate = undefined;

var _Rate = __webpack_require__(/*! ./Rate */ "./src/initialize/Rate.js");

var _Rate2 = _interopRequireDefault(_Rate);

var _Velocity = __webpack_require__(/*! ./Velocity */ "./src/initialize/Velocity.js");

var _Velocity2 = _interopRequireDefault(_Velocity);

var _Life = __webpack_require__(/*! ./Life */ "./src/initialize/Life.js");

var _Life2 = _interopRequireDefault(_Life);

var _Mass = __webpack_require__(/*! ./Mass */ "./src/initialize/Mass.js");

var _Mass2 = _interopRequireDefault(_Mass);

var _Radius = __webpack_require__(/*! ./Radius */ "./src/initialize/Radius.js");

var _Radius2 = _interopRequireDefault(_Radius);

var _Position = __webpack_require__(/*! ./Position */ "./src/initialize/Position.js");

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Rate = _Rate2.default;
exports.Velocity = _Velocity2.default;
exports.Life = _Life2.default;
exports.Mass = _Mass2.default;
exports.Radius = _Radius2.default;
exports.Position = _Position2.default;

/***/ }),

/***/ "./src/math/MathUtils.js":
/*!*******************************!*\
  !*** ./src/math/MathUtils.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/math/NumericalIntegration.js":
/*!******************************************!*\
  !*** ./src/math/NumericalIntegration.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(/*! ../emitter/const */ "./src/emitter/const.js");

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

/***/ }),

/***/ "./src/math/Polar2D.js":
/*!*****************************!*\
  !*** ./src/math/Polar2D.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Vector2D = __webpack_require__(/*! ./Vector2D */ "./src/math/Vector2D.js");

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

/***/ }),

/***/ "./src/math/Span.js":
/*!**************************!*\
  !*** ./src/math/Span.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MathUtils = __webpack_require__(/*! ./MathUtils */ "./src/math/MathUtils.js");

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

/***/ }),

/***/ "./src/math/Vector2D.js":
/*!******************************!*\
  !*** ./src/math/Vector2D.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/math/ease.js":
/*!**************************!*\
  !*** ./src/math/ease.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ "./src/zone/CircleZone.js":
/*!********************************!*\
  !*** ./src/zone/CircleZone.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Zone2 = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");

var _Zone3 = _interopRequireDefault(_Zone2);

var _CrossZone = __webpack_require__(/*! ../behaviour/CrossZone */ "./src/behaviour/CrossZone.js");

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

/***/ }),

/***/ "./src/zone/ImageZone.js":
/*!*******************************!*\
  !*** ./src/zone/ImageZone.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Zone2 = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");

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

/***/ }),

/***/ "./src/zone/LineZone.js":
/*!******************************!*\
  !*** ./src/zone/LineZone.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Zone2 = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");

var _Zone3 = _interopRequireDefault(_Zone2);

var _CrossZone = __webpack_require__(/*! ../behaviour/CrossZone */ "./src/behaviour/CrossZone.js");

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

/***/ }),

/***/ "./src/zone/PointZone.js":
/*!*******************************!*\
  !*** ./src/zone/PointZone.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Zone2 = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");

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

/***/ }),

/***/ "./src/zone/RectZone.js":
/*!******************************!*\
  !*** ./src/zone/RectZone.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Zone2 = __webpack_require__(/*! ./Zone */ "./src/zone/Zone.js");

var _Zone3 = _interopRequireDefault(_Zone2);

var _CrossZone = __webpack_require__(/*! ../behaviour/CrossZone */ "./src/behaviour/CrossZone.js");

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

/***/ }),

/***/ "./src/zone/Zone.js":
/*!**************************!*\
  !*** ./src/zone/Zone.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CrossZone = __webpack_require__(/*! ../behaviour/CrossZone */ "./src/behaviour/CrossZone.js");

var _CrossZone2 = _interopRequireDefault(_CrossZone);

var _Vector2D = __webpack_require__(/*! ../math/Vector2D */ "./src/math/Vector2D.js");

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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWluaS1zaWduYWxzL2xpYi9taW5pLXNpZ25hbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQXR0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0JlaGF2aW91ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0Nyb3NzWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0ZvcmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvR3Jhdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0dyYXZpdHlXZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvUmFuZG9tRHJpZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9SZXB1bHNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9Sb3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9TY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9VdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbWl0dGVyL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL01hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9Qb2xhcjJELmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1NwYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvVmVjdG9yMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0ltYWdlWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9MaW5lWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9Qb2ludFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvUmVjdFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvWm9uZS5qcyJdLCJuYW1lcyI6WyJBbHBoYSIsImEiLCJiIiwibGlmZSIsImVhc2luZyIsInJlc2V0IiwibmFtZSIsImFwcGx5QmVoYXZpb3VyIiwidW5kZWZpbmVkIiwic2FtZSIsIlV0aWwiLCJzZXRTcGFuVmFsdWUiLCJwYXJ0aWNsZSIsInRyYW5zZm9ybSIsImFscGhhQSIsImdldFZhbHVlIiwiYWxwaGFCIiwidGltZSIsImluZGV4IiwiYWxwaGEiLCJlbmVyZ3kiLCJCZWhhdmlvdXIiLCJBdHRyYWN0aW9uIiwidGFyZ2V0UG9zaXRpb24iLCJmb3JjZSIsInJhZGl1cyIsIlZlY3RvcjJEIiwibm9ybWFsaXplVmFsdWUiLCJyYWRpdXNTcSIsImF0dHJhY3Rpb25Gb3JjZSIsImxlbmd0aFNxIiwiUHJvdG9uIiwiY29weSIsInN1YiIsInAiLCJub3JtYWxpemUiLCJtdWx0aXBseVNjYWxhciIsImFkZCIsIkJFSEFWSU9VUl9JRF9CQVNFIiwidWlkIiwiaWQiLCJJbmZpbml0eSIsImFnZSIsImRlYWQiLCJwYXJlbnRzIiwiTUVBU1VSRSIsInZhbHVlIiwiZGVzdHJveSIsInNjYWxlIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsImkiLCJyZW1vdmVCZWhhdmlvdXIiLCJDb2xsaXNpb24iLCJlbWl0dGVyIiwibWFzcyIsImNhbGxiYWNrIiwiY29sbGlzaW9uUG9vbCIsImRlbHRhIiwibmV3UG9vbCIsInBhcnRpY2xlcyIsInNsaWNlIiwib3RoZXJQYXJ0aWNsZSIsIm92ZXJsYXAiLCJhdmVyYWdlTWFzczEiLCJhdmVyYWdlTWFzczIiLCJkaXN0YW5jZSIsInNxcnQiLCJ0b3RhbE1hc3MiLCJjbG9uZSIsIkNyb3NzWm9uZSIsInpvbmUiLCJjcm9zc1R5cGUiLCJpbml0VmFsdWUiLCJDUk9TU19UWVBFUyIsIkRFQUQiLCJjcm9zc2luZyIsIkNST1NTIiwiQk9VTkQiLCJGb3JjZSIsImZ4IiwiZnkiLCJub3JtYWxpemVGb3JjZSIsIkdyYXZpdHkiLCJnIiwiR3Jhdml0eVdlbGwiLCJjZW50ZXJQb2ludCIsImRpc3RhbmNlVmVjIiwic2V0IiwieCIsInkiLCJkaXN0YW5jZVNxIiwiZmFjdG9yIiwidiIsIlJhbmRvbURyaWZ0IiwiZHJpZnRYIiwiZHJpZnRZIiwiZGVsYXkiLCJwYW5Gb2NlIiwiX3N1cGVyXyIsInByb3RvdHlwZSIsImNhbGwiLCJhZGRYWSIsIlJlcHVsc2lvbiIsIlJvdGF0ZSIsInN0eWxlIiwiVFlQRSIsIlZFTE9DSVRZIiwiU1RZTEVTIiwiVE8iLCJyb3RhdGlvbiIsInJvdGF0aW9uQSIsInJvdGF0aW9uQiIsImdldERpcmVjdGlvbiIsIkZST00iLCJTY2FsZSIsInN1b2VyIiwic2NhbGVBIiwib2xkUmFkaXVzIiwic2NhbGVCIiwiUGFydGljbGUiLCJzcHJpdGUiLCJ1cGRhdGUiLCJhdGFuMiIsIlBJIiwiaW5pdCIsInNsZWVwIiwidGFyZ2V0IiwicGFyZW50IiwiY29sb3IiLCJ2YWwiLCJvbGQiLCJiZWhhdmlvdXJzIiwicmVtb3ZlQWxsQmVoYXZpb3VycyIsInJnYiIsInIiLCJiZWhhdmlvdXIiLCJwdXNoIiwiaGFzT3duUHJvcGVydHkiLCJpbml0aWFsaXplIiwiYWRkQmVoYXZpb3VyIiwiaW5kZXhPZiIsInNwbGljZSIsImRlZmF1bHRzIiwiZ2V0VmVjdG9yMkQiLCJwb3N0aW9uT3JYIiwidmVjdG9yMmQiLCJqdWRnZVZlY3RvcjJEIiwicE9CSiIsInJlc3VsdCIsInNldFZlY3RvcjJEQnlPYmplY3QiLCJ2eCIsInZ5IiwiYXgiLCJheSIsImMiLCJjb25zdHJ1Y3RvciIsIlNwYW4iLCJnZXRTcGFuVmFsdWUiLCJwYW4iLCJoZXhUb1JHQiIsImgiLCJoZXgxNiIsImNoYXJBdCIsInN1YnN0cmluZyIsInBhcnNlSW50IiwicmdiVG9IZXgiLCJyYmciLCJFbWl0dGVyIiwiaW5pdGlhbGl6ZXMiLCJlbWl0VGltZSIsImVtaXRUb3RhbFRpbWVzIiwiZGFtcGluZyIsImJpbmRFbWl0dGVyIiwicmF0ZSIsIlJhdGUiLCJpbnRlZ3JhdG9yIiwiTnVtZXJpY2FsSW50ZWdyYXRpb24iLCJtYXhQYXJ0aWNsZXMiLCJwYXJ0aWNsZUNyZWF0ZWQiLCJNaW5pU2lnbmFsIiwicGFydGljbGVVcGRhdGUiLCJwYXJ0aWNsZURlYWQiLCJlbWl0dGluZyIsImNyZWF0ZVBhcnRpY2xlIiwiaW50ZWdyYXRlIiwiYWN0aXZhdGVQYXJ0aWNsZSIsInVwZGF0ZVBhcnRpY2xlIiwiYWN0aXZlQ291bnQiLCJhY3RpdmUiLCJuIiwiYWRkQmVoYXZpb3VycyIsImRpc3BhdGNoIiwicmVzIiwiaXNOYU4iLCJmb3JFYWNoIiwicE9iaiIsImluaXRBbGwiLCJhcmd1bWVudHMiLCJpbml0aWFsaXplciIsInJlbW92ZUluaXRpYWxpemVycyIsInJlbW92ZUVtaXR0ZXIiLCJBcnJheSIsImZpbGwiLCJQT09MX01BWCIsIlRJTUVfU1RFUCIsIlVTRV9DTE9DSyIsIkVVTEVSIiwiUksyIiwiUks0IiwiVkVSTEVUIiwiUEFSVElDTEVfQ1JFQVRFRCIsIlBBUlRJQ0xFX1VQREFURSIsIlBBUlRJQ0xFX1NMRUVQIiwiUEFSVElDTEVfREVBRCIsIkVNSVRURVJfQURERUQiLCJFTUlUVEVSX1JFTU9WRUQiLCJnZXRTcGFuIiwiY2VudGVyIiwiUmVjdFpvbmUiLCJQb2ludFpvbmUiLCJMaW5lWm9uZSIsIkltYWdlWm9uZSIsIkNpcmNsZVpvbmUiLCJnbG9iYWwiLCJRdWFyayIsImV4cG9ydHMiLCJJbml0aWFsaXplIiwicm90YXRlIiwiTGlmZSIsImxpZmVQYW4iLCJNYXNzIiwibWFzc1BhbiIsIlBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJ2ZWN0b3IiLCJSYWRpdXMiLCJudW1wYW4iLCJ0aW1lcGFuIiwibnVtUGFuIiwidGltZVBhbiIsInN0YXJ0VGltZSIsIm5leHRUaW1lIiwiVmVsb2NpdHkiLCJycGFuIiwidGhhcGFuIiwidHlwZSIsInJQYW4iLCJ0aGFQYW4iLCJQT0xBUiIsIlAiLCJyUGFuVmFsIiwibm9ybWFsaXplZFBJIiwidnIiLCJ0aGFQYW5Ob3JtIiwicG9sYXIyZCIsIlBvbGFyMkQiLCJub3JtYWxpemVWZWxvY2l0eSIsImdldFgiLCJnZXRZIiwicmFuZG9tQVRvQiIsInJhbmRvbUZsb2F0aW5nIiwiZGVncmVlVHJhbnNmb3JtIiwiSU5UIiwicmFuZG9tIiwiZmxvb3IiLCJmIiwiZXVsZXJJbnRlZ3JhdGUiLCJjbGVhciIsInRoYSIsImFicyIsInNpbiIsImNvcyIsImlzQXJyYXkiLCJFcnJvciIsInciLCJhZGRWZWN0b3JzIiwicyIsInN1YlZlY3RvcnMiLCJtaW4iLCJkaXZpZGVTY2FsYXIiLCJkaXN0YW5jZVRvU3F1YXJlZCIsImR4IiwiZHkiLCJsIiwib2xkTGVuZ3RoIiwiZ2V0RWFzaW5nQnlOYW1lIiwiZWFzZUxpbmVhciIsImVhc2VJblF1YWQiLCJwb3ciLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5DdWJpYyIsImVhc2VPdXRDdWJpYyIsImVhc2VJbk91dEN1YmljIiwiZWFzZUluUXVhcnQiLCJlYXNlT3V0UXVhcnQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJblNpbmUiLCJlYXNlT3V0U2luZSIsImVhc2VJbk91dFNpbmUiLCJlYXNlSW5FeHBvIiwiZWFzZU91dEV4cG8iLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluQ2lyYyIsImVhc2VPdXRDaXJjIiwiZWFzZUluT3V0Q2lyYyIsImVhc2VJbkJhY2siLCJlYXNlT3V0QmFjayIsImVhc2VJbk91dEJhY2siLCJhbmdsZSIsImQiLCJkaXN0YW5jZVRvIiwiZ2V0U3ltbWV0cmljIiwiYWxlcnQiLCJ0aGEyIiwiZ2V0R3JhZGllbnQiLCJ0aGExIiwib2xkeCIsIm9sZHkiLCJab25lIiwiaW1hZ2VEYXRhIiwidmVjdG9ycyIsInNldFZlY3RvcnMiLCJqIiwibGVuZ3RoMSIsIndpZHRoIiwibGVuZ3RoMiIsImhlaWdodCIsImRhdGEiLCJnZXRCb3VuZCIsIm5lZ2F0ZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiZGlyZWN0aW9uIiwibWlueCIsIm1pbnkiLCJtYXh4IiwibWF4eSIsImRvdCIsInh4eXkiLCJncmFkaWVudCIsImdldExlbmd0aCIsInNlbGYiLCJnZXRSYW5nZSIsImdldERpc3RhbmNlIiwiQSIsIkIiLCJDIiwiRCIsImZ1biJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZDtBQUNBLE9BQUtoTSxTQUFMLEdBQWlCRixvQkFBVUksV0FBVixDQUFzQkMsSUFBdkM7QUFDQSxPQUFLK08sS0FBTCxHQUFhLElBQWI7QUFDQTs7OztnQ0FFYSxDQUViOzs7MkJBRVEvUyxRLEVBQVUsQ0FFbEI7Ozs7OztrQkFmbUJxVCxJIiwiZmlsZSI6InF1YXJrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIE1pbmlTaWduYWxCaW5kaW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaVNpZ25hbEJpbmRpbmcoZm4sIG9uY2UsIHRoaXNBcmcpIHtcbiAgICBpZiAob25jZSA9PT0gdW5kZWZpbmVkKSBvbmNlID0gZmFsc2U7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNpZ25hbEJpbmRpbmcpO1xuXG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgICB0aGlzLl9vbmNlID0gb25jZTtcbiAgICB0aGlzLl90aGlzQXJnID0gdGhpc0FyZztcbiAgICB0aGlzLl9uZXh0ID0gdGhpcy5fcHJldiA9IHRoaXMuX293bmVyID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2lnbmFsQmluZGluZywgW3tcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgICBpZiAodGhpcy5fb3duZXIgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIHRoaXMuX293bmVyLmRldGFjaCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaW5pU2lnbmFsQmluZGluZztcbn0pKCk7XG5cbmZ1bmN0aW9uIF9hZGRNaW5pU2lnbmFsQmluZGluZyhzZWxmLCBub2RlKSB7XG4gIGlmICghc2VsZi5faGVhZCkge1xuICAgIHNlbGYuX2hlYWQgPSBub2RlO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuX3RhaWwuX25leHQgPSBub2RlO1xuICAgIG5vZGUuX3ByZXYgPSBzZWxmLl90YWlsO1xuICAgIHNlbGYuX3RhaWwgPSBub2RlO1xuICB9XG5cbiAgbm9kZS5fb3duZXIgPSBzZWxmO1xuXG4gIHJldHVybiBub2RlO1xufVxuXG52YXIgTWluaVNpZ25hbCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmlTaWduYWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1pbmlTaWduYWwpO1xuXG4gICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWluaVNpZ25hbCwgW3tcbiAgICBrZXk6ICdoYW5kbGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZXJzKCkge1xuICAgICAgdmFyIGV4aXN0cyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG5cbiAgICAgIGlmIChleGlzdHMpIHJldHVybiAhIW5vZGU7XG5cbiAgICAgIHZhciBlZSA9IFtdO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBlZS5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhcyhub2RlKSB7XG4gICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgTWluaVNpZ25hbEJpbmRpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNoYXMoKTogRmlyc3QgYXJnIG11c3QgYmUgYSBNaW5pU2lnbmFsQmluZGluZyBvYmplY3QuJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlLl9vd25lciA9PT0gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuXG4gICAgICBpZiAoIW5vZGUpIHJldHVybiBmYWxzZTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuX29uY2UpIHRoaXMuZGV0YWNoKG5vZGUpO1xuICAgICAgICBub2RlLl9mbi5hcHBseShub2RlLl90aGlzQXJnLCBhcmd1bWVudHMpO1xuICAgICAgICBub2RlID0gbm9kZS5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKGZuKSB7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2FkZCgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIGZhbHNlLCB0aGlzQXJnKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjb25jZSgpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIEZ1bmN0aW9uLicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9hZGRNaW5pU2lnbmFsQmluZGluZyh0aGlzLCBuZXcgTWluaVNpZ25hbEJpbmRpbmcoZm4sIHRydWUsIHRoaXNBcmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgICAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIE1pbmlTaWduYWxCaW5kaW5nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjZGV0YWNoKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgTWluaVNpZ25hbEJpbmRpbmcgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuX293bmVyICE9PSB0aGlzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKG5vZGUuX3ByZXYpIG5vZGUuX3ByZXYuX25leHQgPSBub2RlLl9uZXh0O1xuICAgICAgaWYgKG5vZGUuX25leHQpIG5vZGUuX25leHQuX3ByZXYgPSBub2RlLl9wcmV2O1xuXG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy5faGVhZCkge1xuICAgICAgICB0aGlzLl9oZWFkID0gbm9kZS5fbmV4dDtcbiAgICAgICAgaWYgKG5vZGUuX25leHQgPT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlID09PSB0aGlzLl90YWlsKSB7XG4gICAgICAgIHRoaXMuX3RhaWwgPSBub2RlLl9wcmV2O1xuICAgICAgICB0aGlzLl90YWlsLl9uZXh0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbm9kZS5fb3duZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGV0YWNoQWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0YWNoQWxsKCkge1xuICAgICAgdmFyIG5vZGUgPSB0aGlzLl9oZWFkO1xuICAgICAgaWYgKCFub2RlKSByZXR1cm4gdGhpcztcblxuICAgICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSBudWxsO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBub2RlLl9vd25lciA9IG51bGw7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTaWduYWw7XG59KSgpO1xuXG5NaW5pU2lnbmFsLk1pbmlTaWduYWxCaW5kaW5nID0gTWluaVNpZ25hbEJpbmRpbmc7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IE1pbmlTaWduYWw7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFscGhhIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cclxuXHRcdHRoaXMucmVzZXQoYSwgYiwgdGhpcy5saWZlKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiQWxwaGFcIjtcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yICdhJyBhbmQgJ2InXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gYVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBiXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVF1YXJrLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zYW1lID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLmEgPSBVdGlsLnNldFNwYW5WYWx1ZShhIHx8IDEpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYik7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBuZXcgYWxwaGEgdmFsdWUgb2YgdGhlIHBhcnRpY2xlXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIGluaXRpYWxpemVcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UXVhcmsuUGFydGljbGV9IHBhcnRpY2xlIEEgc2luZ2xlIFF1YXJrIGdlbmVyYXRlZCBwYXJ0aWNsZVxyXG5cdCAqL1xyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICh0aGlzLnNhbWUpe1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFCID0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLkFscGhhXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1F1YXJrLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG4gXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRwYXJ0aWNsZS5hbHBoYSA9IHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgKyAocGFydGljbGUudHJhbnNmb3JtLmFscGhhQSAtIHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIpICogdGhpcy5lbmVyZ3k7XHJcblx0XHRpZiAocGFydGljbGUuYWxwaGEgPCAwLjAwMSlcclxuXHRcdFx0cGFydGljbGUuYWxwaGEgPSAwO1xyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJhY3Rpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0YXJnZXRQb3NpdGlvbiwgZm9yY2UsIHJhZGl1cywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbiB8fCBuZXcgVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkF0dHJhY3Rpb25cIjtcclxuXHRcdFxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkF0dHJhY3Rpb25cclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2ZvcmNlJyBhbmQgJ3JhZGl1cydcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEfSB0YXJnZXRQb3NpdGlvbiB0aGUgYXR0cmFjdGlvbiBwb2ludCBjb29yZGluYXRlc1xyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZm9yY2U9MTAwXVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcmFkaXVzPTEwMDBdXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0XHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy50YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIHx8IG5ldyBQcm90b24uVmVjdG9yMkQ7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMDAwO1xyXG5cdFx0dGhpcy5mb3JjZSA9IHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpIHx8IDEwMDtcclxuXHRcdHRoaXMucmFkaXVzU3EgPSB0aGlzLnJhZGl1cyAqIHRoaXMucmFkaXVzXHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5sZW5ndGhTcSA9IDA7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSB0aGlzIGJlaGF2aW91ciBmb3IgYWxsIHBhcnRpY2xlcyBldmVyeSB0aW1lXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5BdHRyYWN0aW9uXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLmNvcHkodGhpcy50YXJnZXRQb3NpdGlvbik7XHJcblx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5zdWIocGFydGljbGUucCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gdGhpcy5hdHRyYWN0aW9uRm9yY2UubGVuZ3RoU3EoKTtcclxuXHRcdGlmICh0aGlzLmxlbmd0aFNxID4gMC4wMDAwMDQgJiYgdGhpcy5sZW5ndGhTcSA8IHRoaXMucmFkaXVzU3EpIHtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2Uubm9ybWFsaXplKCk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKDEgLSB0aGlzLmxlbmd0aFNxIC8gdGhpcy5yYWRpdXNTcSk7XHJcblx0XHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLm11bHRpcGx5U2NhbGFyKHRoaXMuZm9yY2UpO1xyXG5cdFx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmF0dHJhY3Rpb25Gb3JjZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCB7IE1FQVNVUkUgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuaW1wb3J0IGdldEVhc2luZ0J5TmFtZSBmcm9tICcuLi9tYXRoL2Vhc2UnO1xyXG5cclxuXHJcbmNvbnN0IEJFSEFWSU9VUl9JRF9CQVNFID0gMHhGRkZGRjtcclxubGV0IHVpZCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihsaWZlLCBlYXNpbmcgPSAnZWFzZUxpbmVhcicpIHtcclxuXHRcdHRoaXMuaWQgPSBCRUhBVklPVVJfSURfQkFTRSArIHVpZCsrO1xyXG5cdFx0dGhpcy5saWZlID0gbGlmZSB8fCBJbmZpbml0eTtcclxuXHRcdHRoaXMuZWFzaW5nID0gZ2V0RWFzaW5nQnlOYW1lKGVhc2luZyk7XHJcblx0XHR0aGlzLmFnZSA9IDA7XHJcblx0XHR0aGlzLmVuZXJneSA9IDE7XHJcblx0XHR0aGlzLmRlYWQgPSBmYWxzZTtcclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5uYW1lID0gJ0JlaGF2aW91cic7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbbGlmZT1JbmZpbml0eV0gXHRcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPWVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMubGlmZSA9IGxpZmUgfHwgSW5maW5pdHk7XHJcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBnZXRFYXNpbmdCeU5hbWUoJ2Vhc2VMaW5lYXInKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIGZvcmNlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVGb3JjZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5WZWN0b3IyRH0gZm9yY2UgXHJcblx0ICovXHJcblx0bm9ybWFsaXplRm9yY2UoZm9yY2UpIHtcclxuXHRcdHJldHVybiBmb3JjZS5tdWx0aXBseVNjYWxhcihNRUFTVVJFKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vcm1hbGl6ZSBhIHZhbHVlIGJ5IDE6MTAwO1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBub3JtYWxpemVWYWx1ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcclxuXHQgKi9cclxuXHRub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlICogTUVBU1VSRTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemUgdGhlIGJlaGF2aW91cidzIHBhcmFtZXRlcnMgZm9yIGFsbCBwYXJ0aWNsZXNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKi9cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHR0aGlzLmFnZSArPSB0aW1lO1xyXG5cdFx0aWYgKHRoaXMuYWdlID49IHRoaXMubGlmZSB8fCB0aGlzLmRlYWQpIHtcclxuXHRcdFx0dGhpcy5lbmVyZ3kgPSAwO1xyXG5cdFx0XHR0aGlzLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBzY2FsZSA9IHRoaXMuZWFzaW5nKHBhcnRpY2xlLmFnZSAvIHBhcnRpY2xlLmxpZmUpO1xyXG5cdFx0XHR0aGlzLmVuZXJneSA9IE1hdGgubWF4KDEgLSBzY2FsZSwgMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIERlc3RvcnkgdGhpcyBiZWhhdmlvdXJcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgZGVzdHJveVxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICovXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHZhciBpbmRleDtcclxuXHRcdHZhciBsZW5ndGggPSB0aGlzLnBhcmVudHMubGVuZ3RoLCBpO1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHR0aGlzLnBhcmVudHNbaV0ucmVtb3ZlQmVoYXZpb3VyKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdH1cclxufSIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb24gZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihlbWl0dGVyLCBtYXNzLCBjYWxsYmFjaywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChlbWl0dGVyLCBtYXNzLCBjYWxsYmFjayk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkNvbGxpc2lvblwiO1xyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoaXMgYmVoYXZpb3VyJ3MgcGFyYW1ldGVyc1xyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sbGlzaW9uXHJcblx0ICogQG1ldGhvZCByZXNldFxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIHRvIG1hc3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLkVtaXR0ZXJ9IFx0W2VtaXR0ZXI9bnVsbF0gXHRcdHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtCb29sZWFufSBcdFx0W21hc3M9dHJ1ZV1cdFx0XHRcclxuXHQgKiBAcGFyYW0ge0NhbGxiYWNrfVx0IFx0W2NhbGxiYWNrPW51bGxdXHRcdHRoZSBjYWxsYmFjayBhZnRlciB0aGUgY29sbGlzaW9uXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdFtsaWZlPUluZmluaXR5XSBcdHRoaXMgYmVoYXZpb3VyJ3MgbGlmZVxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWFzaW5nPVByb3Rvbi5lYXNlTGluZWFyXSBcdHRoaXMgYmVoYXZpb3VyJ3MgZWFzaW5nXHJcblx0ICovXHJcblx0cmVzZXQoZW1pdHRlciwgbWFzcywgY2FsbGJhY2ssIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5lbWl0dGVyID0gZW1pdHRlciB8fCBudWxsO1xyXG5cdFx0dGhpcy5tYXNzID0gbWFzcyB8fCB0cnVlO1xyXG5cdFx0dGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XHJcblx0XHR0aGlzLmNvbGxpc2lvblBvb2wgPSBbXTtcclxuXHRcdHRoaXMuZGVsdGEgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkNvbGxpc2lvblxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBcdFx0XHR0aW1lIHRoZSBpbnRlZ3JhdGUgdGltZSAxL21zXHJcblx0ICogQHBhcmFtIHtJbnR9IFx0XHRcdGluZGV4IHRoZSBwYXJ0aWNsZSBpbmRleFxyXG5cdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0bGV0IG5ld1Bvb2wgPSB0aGlzLmVtaXR0ZXIucGFydGljbGVzLnNsaWNlKGluZGV4KTtcclxuXHRcdGxldCBvdGhlclBhcnRpY2xlO1xyXG5cdFx0bGV0IGxlbmd0aFNxO1xyXG5cdFx0bGV0IG92ZXJsYXA7XHJcblx0XHRsZXQgYXZlcmFnZU1hc3MxLCBhdmVyYWdlTWFzczI7XHJcblx0XHRsZXQgbGVuZ3RoID0gbmV3UG9vbC5sZW5ndGg7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG90aGVyUGFydGljbGUgPSBuZXdQb29sW2ldO1xyXG5cdFx0XHRpZiAob3RoZXJQYXJ0aWNsZSAhPT0gcGFydGljbGUpIHtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLmNvcHkob3RoZXJQYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHR0aGlzLmRlbHRhLnN1YihwYXJ0aWNsZS5wKTtcclxuXHRcdFx0XHRsZW5ndGhTcSA9IHRoaXMuZGVsdGEubGVuZ3RoU3EoKTtcclxuXHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHBhcnRpY2xlLnJhZGl1cyArIG90aGVyUGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0XHRpZiAobGVuZ3RoU3EgPD0gZGlzdGFuY2UgKiBkaXN0YW5jZSkge1xyXG5cdFx0XHRcdFx0b3ZlcmxhcCA9IGRpc3RhbmNlIC0gTWF0aC5zcXJ0KGxlbmd0aFNxKTtcclxuXHRcdFx0XHRcdG92ZXJsYXAgKz0gMC41O1xyXG5cdFx0XHRcdFx0Y29uc3QgdG90YWxNYXNzID0gcGFydGljbGUubWFzcyArIG90aGVyUGFydGljbGUubWFzcztcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMSA9IHRoaXMubWFzcyA/IG90aGVyUGFydGljbGUubWFzcyAvIHRvdGFsTWFzcyA6IDAuNTtcclxuXHRcdFx0XHRcdGF2ZXJhZ2VNYXNzMiA9IHRoaXMubWFzcyA/IHBhcnRpY2xlLm1hc3MgLyB0b3RhbE1hc3MgOiAwLjU7XHJcblx0XHRcdFx0XHRwYXJ0aWNsZS5wLmFkZCh0aGlzLmRlbHRhLmNsb25lKCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIob3ZlcmxhcCAqIC1hdmVyYWdlTWFzczEpKTtcclxuXHRcdFx0XHRcdG90aGVyUGFydGljbGUucC5hZGQodGhpcy5kZWx0YS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihvdmVybGFwICogYXZlcmFnZU1hc3MyKSk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5jYWxsYmFjayl7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2FsbGJhY2socGFydGljbGUsIG90aGVyUGFydGljbGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9zc1pvbmUgZXh0ZW5kcyBCZWhhdmlvdXJ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KHpvbmUsIGNyb3NzVHlwZSk7XHJcblx0XHR0aGlzLm5hbWUgPSAnQ3Jvc3Nab25lJztcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHRoaXMuem9uZSA9IHpvbmU7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NUeXBlID0gVXRpbC5pbml0VmFsdWUoY3Jvc3NUeXBlLCBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NpbmcocGFydGljbGUpO1xyXG5cdH1cclxufVxyXG5cclxuQ3Jvc3Nab25lLkNST1NTX1RZUEVTID0ge1xyXG5cdENST1NTOiAxIDw8IDAsXHJcblx0REVBRDogMSA8PCAyLFxyXG5cdEJPVU5EOiAxIDw8IDNcclxufTtcclxuIiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmNlIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZngsIGZ5LCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVGb3JjZShuZXcgVmVjdG9yMkQoZngsIGZ5KSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkZvcmNlXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGZ4LCBmeSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVGb3JjZShuZXcgVmVjdG9yMkQoZngsIGZ5KSk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRwYXJ0aWNsZS5hLmFkZCh0aGlzLmZvcmNlKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IEZvcmNlIGZyb20gJy4vRm9yY2UnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF2aXR5IGV4dGVuZHMgRm9yY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihnLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKDAsIGcsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLm5hbWUgPSAnR3Jhdml0eSc7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGcsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIucmVzZXQoMCwgZywgbGlmZSwgZWFzaW5nKTtcclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLmEuYWRkKHRoaXMuZm9yY2UpO1xyXG5cdH1cclxufSIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF2aXR5V2VsbCBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGNlbnRlclBvaW50LCBmb3JjZSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5kaXN0YW5jZVZlYyA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5jZW50ZXJQb2ludCA9IFV0aWwuaW5pdFZhbHVlKGNlbnRlclBvaW50LCBuZXcgVmVjdG9yMkQpO1xyXG5cdFx0dGhpcy5mb3JjZSA9IFV0aWwuaW5pdFZhbHVlKHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpLCAxMDApO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJHcmF2aXR5V2VsbFwiO1xyXG5cclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHJcblx0cmVzZXQoY2VudGVyUG9pbnQsIGZvcmNlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMuZGlzdGFuY2VWZWMgPSBuZXcgVmVjdG9yMkQoKTtcclxuXHRcdHRoaXMuY2VudGVyUG9pbnQgPSBVdGlsLmluaXRWYWx1ZShjZW50ZXJQb2ludCwgbmV3IFZlY3RvcjJEKTtcclxuXHRcdHRoaXMuZm9yY2UgPSBVdGlsLmluaXRWYWx1ZSh0aGlzLm5vcm1hbGl6ZVZhbHVlKGZvcmNlKSwgMTAwKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHRoaXMuZGlzdGFuY2VWZWMuc2V0KHRoaXMuY2VudGVyUG9pbnQueCAtIHBhcnRpY2xlLnAueCwgdGhpcy5jZW50ZXJQb2ludC55IC0gcGFydGljbGUucC55KTtcclxuXHRcdGNvbnN0IGRpc3RhbmNlU3EgPSB0aGlzLmRpc3RhbmNlVmVjLmxlbmd0aFNxKCk7XHJcblx0XHRpZiAoZGlzdGFuY2VTcSAhPSAwKSB7XHJcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZVZlYy5sZW5ndGgoKTtcclxuXHRcdFx0Y29uc3QgZmFjdG9yID0gKHRoaXMuZm9yY2UgKiB0aW1lICkgLyAoZGlzdGFuY2VTcSAqIGRpc3RhbmNlICk7XHJcblx0XHRcdHBhcnRpY2xlLnYueCArPSBmYWN0b3IgKiB0aGlzLmRpc3RhbmNlVmVjLng7XHJcblx0XHRcdHBhcnRpY2xlLnYueSArPSBmYWN0b3IgKiB0aGlzLmRpc3RhbmNlVmVjLnk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IHsgcmFuZG9tQVRvQiB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbURyaWZ0IGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoZHJpZnRYLCBkcmlmdFksIGRlbGF5LCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KGRyaWZ0WCwgZHJpZnRZLCBkZWxheSk7XHJcblx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJSYW5kb21EcmlmdFwiO1xyXG5cdFxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cclxuXHRyZXNldChkcmlmdFgsIGRyaWZ0WSwgZGVsYXksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5wYW5Gb2NlID0gbmV3IFZlY3RvcjJEKGRyaWZ0WCwgZHJpZnRZKTtcclxuXHRcdHRoaXMucGFuRm9jZSA9IHRoaXMubm9ybWFsaXplRm9yY2UodGhpcy5wYW5Gb2NlKTtcclxuXHRcdHRoaXMuZGVsYXkgPSBkZWxheTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0UmFuZG9tRHJpZnQuX3N1cGVyXy5wcm90b3R5cGUucmVzZXQuY2FsbCh0aGlzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0dGhpcy50aW1lICs9IHRpbWU7XHJcblx0XHRpZiAodGhpcy50aW1lID49IHRoaXMuZGVsYXkpIHtcdFx0XHRcclxuXHRcdFx0cGFydGljbGUuYS5hZGRYWShyYW5kb21BVG9CKC10aGlzLnBhbkZvY2UueCwgdGhpcy5wYW5Gb2NlLngpLCByYW5kb21BVG9CKC10aGlzLnBhbkZvY2UueSwgdGhpcy5wYW5Gb2NlLnkpKTtcclxuXHRcdFx0dGhpcy50aW1lID0gMDtcclxuXHRcdH07XHJcblx0fVxyXG59IiwiaW1wb3J0IEF0dHJhY3Rpb24gZnJvbSAnLi9BdHRyYWN0aW9uJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwdWxzaW9uIGV4dGVuZHMgQXR0cmFjdGlvbiB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSAqPSAtMTtcclxuXHRcdHRoaXMubmFtZSA9IFwiUmVwdWxzaW9uXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyLnJlc2V0KHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5mb3JjZSAqPSAtMTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm90YXRlIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgc3R5bGUsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoYSwgYiwgc3R5bGUpO1xyXG5cdFx0dGhpcy5uYW1lID0gJ1JvdGF0ZSc7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGEsIGIsIHN0eWxlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYSA9IFV0aWwuc2V0U3BhblZhbHVlKGEgfHwgUm90YXRlLlRZUEUuVkVMT0NJVFkpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYiB8fCAwKTtcclxuXHRcdHRoaXMuc3R5bGUgPSBzdHlsZSB8fCBSb3RhdGUuU1RZTEVTLlRPO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUucm90YXRpb24gPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICghdGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0aWYgKCF0aGlzLnNhbWUpIHtcclxuXHRcdFx0aWYgKHRoaXMuc3R5bGUgPT0gUm90YXRlLlNUWUxFUy5UTykge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnJvdGF0aW9uICs9IHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIgKyAocGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQSAtIHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkIpICogdGhpcy5lbmVyZ3lcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiArPSBwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25CO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuYS5hID09IFJvdGF0ZS5UWVBFLlZFTE9DSVRZKSB7XHJcblx0XHRcdC8vYmV0YS4uLlxyXG5cdFx0XHRwYXJ0aWNsZS5yb3RhdGlvbiA9IHBhcnRpY2xlLmdldERpcmVjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuUm90YXRlLlNUWUxFUyA9IHtcclxuXHRUTzogMSA8PCAwLFxyXG5cdEZST006IDEgPDwgMVxyXG59O1xyXG5cclxuUm90YXRlLlRZUEUgPSB7XHJcblx0VkVMT0NJVFk6IDEgPDwgMFxyXG59O1xyXG4iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGUgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KGEsIGIpO1xyXG5cdFx0dGhpcy5uYW1lID0gJ1NjYWxlJztcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0aWYgKGIgPT0gbnVsbCB8fCBiID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdHRoaXMuc2FtZSA9IHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zYW1lID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLmEgPSBVdGlsLnNldFNwYW5WYWx1ZShVdGlsLmluaXRWYWx1ZShhLCAxKSk7XHJcblx0XHR0aGlzLmIgPSBVdGlsLnNldFNwYW5WYWx1ZShiKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VvZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUEgPSB0aGlzLmEuZ2V0VmFsdWUoKTtcclxuXHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5vbGRSYWRpdXMgPSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRpZiAodGhpcy5zYW1lKXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLnNjYWxlQiA9IHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUE7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLnNjYWxlQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuc2NhbGUgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVCICsgKHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUEgLSBwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVCKSAqIHRoaXMuZW5lcmd5O1xyXG5cdFx0aWYgKHBhcnRpY2xlLnNjYWxlIDwgMC4wMDAxKXtcclxuXHRcdFx0cGFydGljbGUuc2NhbGUgPSAwO1xyXG5cdFx0fVxyXG5cdFx0cGFydGljbGUucmFkaXVzID0gcGFydGljbGUudHJhbnNmb3JtLm9sZFJhZGl1cyAqIHBhcnRpY2xlLnNjYWxlO1xyXG5cdH1cclxufSIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmxldCB1aWQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGV7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5pZCA9IHVpZCsrO1xyXG4gICAgICB0aGlzLnJlc2V0KHRydWUpO1xyXG4gICAgICB0aGlzLnNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlO1xyXG4gICAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3k7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnYueCwgLXRoaXMudi55KSAqICgxODAgLyBNYXRoLlBJKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldChpbml0KSB7XHJcbiAgICAgIHRoaXMubGlmZSA9IEluZmluaXR5O1xyXG4gICAgICB0aGlzLmFnZSA9IDA7XHJcbiAgICAgIHRoaXMuZW5lcmd5ID0gMTtcclxuICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2xlZXAgPSBmYWxzZTtcclxuICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gMTA7XHJcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICB0aGlzLnNjYWxlID0gMTtcclxuICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuY29sb3IgPSBudWxsO1xyXG4gICAgICB0aGlzLmVhc2luZyA9ICh2YWwpID0+IHZhbDtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7fVxyXG4gICAgICBpZiAoaW5pdCkge1xyXG4gICAgICAgIHRoaXMucCA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMudiA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMuYSA9IG5ldyBWZWN0b3IyRCgpO1xyXG4gICAgICAgIHRoaXMub2xkID0ge1xyXG4gICAgICAgICAgcCA6IG5ldyBWZWN0b3IyRCgpLFxyXG4gICAgICAgICAgdiA6IG5ldyBWZWN0b3IyRCgpLFxyXG4gICAgICAgICAgYSA6IG5ldyBWZWN0b3IyRCgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJlaGF2aW91cnMgPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBkZWxldGUgdGhpcy50cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy5wLnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLnYuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMuYS5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQucC5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQudi5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5vbGQuYS5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnJnYiA9IHtcclxuICAgICAgICByIDogMjU1LFxyXG4gICAgICAgIGcgOiAyNTUsXHJcbiAgICAgICAgYiA6IDI1NVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShpbmRleCwgdGltZSkge1xyXG4gICAgICBjb25zdCBhZ2UgPSB0aGlzLmFnZSArIHRpbWU7XHJcblxyXG4gICAgICBpZihhZ2UgPj0gdGhpcy5saWZlKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWdlID0gYWdlO1xyXG5cclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5iZWhhdmlvdXJzLmxlbmd0aDtcclxuICAgICAgbGV0IGk7XHJcbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5iZWhhdmlvdXJzW2ldKXtcclxuICAgICAgICAgIHRoaXMuYmVoYXZpb3Vyc1tpXS5hcHBseUJlaGF2aW91cih0aGlzLCB0aW1lLCBpbmRleClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmVhc2luZyh0aGlzLmFnZSAvIHRoaXMubGlmZSk7XHJcbiAgICAgIHRoaXMuZW5lcmd5ID0gTWF0aC5tYXgoMSAtIHNjYWxlLCAwKTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJlaGF2aW91cihiZWhhdmlvdXIpIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYmVoYXZpb3VyKTtcclxuICAgICAgaWYgKGJlaGF2aW91ci5oYXNPd25Qcm9wZXJ0eSgncGFyZW50cycpKXtcclxuICAgICAgICBiZWhhdmlvdXIucGFyZW50cy5wdXNoKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGJlaGF2aW91ci5pbml0aWFsaXplKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEJlaGF2aW91cnMoYmVoYXZpb3Vycykge1xyXG4gICAgICB2YXIgbGVuZ3RoID0gYmVoYXZpb3Vycy5sZW5ndGgsIGk7XHJcbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmFkZEJlaGF2aW91cihiZWhhdmlvdXJzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJlaGF2aW91cihiZWhhdmlvdXIpIHtcclxuICAgICAgdmFyIGluZGV4ID0gdGhpcy5iZWhhdmlvdXJzLmluZGV4T2YoYmVoYXZpb3VyKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICB2YXIgYmVoYXZpb3VyID0gdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgYmVoYXZpb3VyLnBhcmVudHMgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0b3J5IHRoaXMgcGFydGljbGVcclxuICAgICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAgICovXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuICAgICAgdGhpcy5lbmVyZ3kgPSAwO1xyXG4gICAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcbmltcG9ydCBTcGFuIGZyb20gJy4uL21hdGgvU3Bhbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGluaXRWYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlIGEgc3BlY2lmaWMgdmFsdWUsIGNvdWxkIGJlIGV2ZXJ5dGhpbmcgYnV0IG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSBkZWZhdWx0cyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgaW5pdFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgZGVmYXVsdHMpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPSB1bmRlZmluZWQpID8gdmFsdWUgOiBkZWZhdWx0cztcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgVmVjdG9yMkQgLSBvciBjcmVhdGVzIGEgbmV3IG9uZVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGdldFZlY3RvcjJEXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtRdWFyay5WZWN0b3IyRCB8IE51bWJlcn0gcG9zdGlvbk9yWFxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFt5XSBqdXN0IHZhbGlkIGlmICdwb3N0aW9uT3JYJyBpcyBub3QgYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7UXVhcmsuVmVjdG9yMkR9XHJcbiAgICAgKi9cclxuICAgIGdldFZlY3RvcjJEOiBmdW5jdGlvbihwb3N0aW9uT3JYLCB5KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZihwb3N0aW9uT3JYKSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGlvbk9yWDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdmVjdG9yMmQgPSBuZXcgVmVjdG9yMkQocG9zdGlvbk9yWCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWN0b3IyZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QganVkZ2VWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgcGFyYW0gYHBPQkpgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIGZ1bmN0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBPQkpcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBqdWRnZVZlY3RvcjJEOiBmdW5jdGlvbihwT0JKKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgneScpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3AnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdwb3NpdGlvbicpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ3AnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCd2eCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3Z4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgndicpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3ZlbG9jaXR5JykpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSAndic7XHJcbiAgICAgICAgaWYgKHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYXgnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdhJykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYWNjZWxlcmF0ZScpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ2EnO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFZlY3RvcjJEQnlPYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGB0YXJnZXRgXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGBwT0JKYFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwT0JKXHJcbiAgICAgKi9cclxuICAgIHNldFZlY3RvcjJEQnlPYmplY3Q6IGZ1bmN0aW9uKHRhcmdldCwgcE9CSikge1xyXG4gICAgICAgIGlmKHBPQkoueCkgdGFyZ2V0LnAueCA9IHBPQkoueDtcclxuXHJcbiAgICAgICAgaWYocE9CSi55KSB0YXJnZXQucC55ID0gcE9CSi55O1xyXG5cclxuICAgICAgICBpZihwT0JKLnZ4KSB0YXJnZXQudi54ID0gcE9CSi52eDtcclxuICAgICAgICBpZihwT0JKLnZ5KSB0YXJnZXQudi55ID0gcE9CSi52eTtcclxuXHJcbiAgICAgICAgaWYocE9CSi5heCkgdGFyZ2V0LmEueCA9IHBPQkouYXg7XHJcbiAgICAgICAgaWYocE9CSi5heSkgdGFyZ2V0LmEueSA9IHBPQkouYXk7XHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbmV3IFF1YXJrLlNwYW4gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2Qgc2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYSwgYiBhbmQgYyBzaG91bGQgYmUgJ01peGVkJyBvciAnTnVtYmVyJz9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkIHwgUXVhcmsuU3Bhbn0gYVxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gICAgICAgICAgICAgICBiXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSAgICAgICAgICAgICAgIGNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtRdWFyay5TcGFufVxyXG4gICAgICovXHJcbiAgICBzZXRTcGFuVmFsdWU6IGZ1bmN0aW9uKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoYS5jb25zdHJ1Y3RvciA9PT0gU3Bhbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghYylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSwgYik7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIsIGMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIGZyb20gYSBRdWFyay5TcGFuLCBpZiB0aGUgcGFyYW0gaXMgbm90IGEgUXVhcmsuU3BhbiBpdCB3aWxsIHJldHVybiB0aGUgZ2l2ZW4gcGFyYW1ldGVyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgZ2V0U3BhblZhbHVlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZCB8IFF1YXJrLlNwYW59IHBhblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge01peGVkfSB0aGUgdmFsdWUgb2YgUXVhcmsuU3BhbiBPUiB0aGUgcGFyYW1ldGVyIGlmIGl0IGlzIG5vdCBhIFF1YXJrLlNwYW5cclxuICAgICAqL1xyXG4gICAgZ2V0U3BhblZhbHVlOiBmdW5jdGlvbihwYW4pIHtcclxuICAgICAgICBpZiAocGFuLmNvbnN0cnVjdG9yID09PSBTcGFuKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuLmdldFZhbHVlKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gcGFuO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlZGVmICB7T2JqZWN0fSByZ2JPYmplY3RcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSByIHJlZCB2YWx1ZVxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IGcgZ3JlZW4gdmFsdWVcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBiIGJsdWUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb252ZXJ0cyBhIGhleCB2YWx1ZSB0byBhIHJnYiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBoZXhUb1JHQlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoIGFueSBoZXggdmFsdWUsIGUuZy4gIzAwMDAwMCBvciAwMDAwMDAgZm9yIGJsYWNrXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7cmdiT2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBoZXhUb1JHQjogZnVuY3Rpb24oaCkge1xyXG4gICAgICAgIHZhciBoZXgxNiA9IChoLmNoYXJBdCgwKSA9PSBcIiNcIikgPyBoLnN1YnN0cmluZygxLCA3KSA6IGg7XHJcbiAgICAgICAgdmFyIHIgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoMCwgMiksIDE2KTtcclxuICAgICAgICB2YXIgZyA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZygyLCA0KSwgMTYpO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDQsIDYpLCAxNik7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IHIsXHJcbiAgICAgICAgICAgIGc6IGcsXHJcbiAgICAgICAgICAgIGI6IGJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29udmVydHMgYSByZ2IgdmFsdWUgdG8gYSByZ2Igc3RyaW5nXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgcmdiVG9IZXhcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdCB8IFF1YXJrLmhleFRvUkdCfSByZ2IgYSByZ2Igb2JqZWN0IGxpa2UgaW4ge0BsaW5rIFF1YXJrI1F1YXJrLlV0aWwuaGV4VG9SR0J9XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZ2IoKVxyXG4gICAgICovXHJcbiAgICByZ2JUb0hleDogZnVuY3Rpb24ocmJnKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJiZy5yICsgJywgJyArIHJiZy5nICsgJywgJyArIHJiZy5iICsgJyknO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiLy8gaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4uL2NvcmUvUGFydGljbGUnO1xyXG5pbXBvcnQgUGFydGljbGUgZnJvbSAnLi4vY29yZS9QYXJ0aWNsZSc7XHJcbmltcG9ydCBSYXRlIGZyb20gJy4uL2luaXRpYWxpemUvUmF0ZSc7XHJcbmltcG9ydCBOdW1lcmljYWxJbnRlZ3JhdGlvbiBmcm9tICcuLi9tYXRoL051bWVyaWNhbEludGVncmF0aW9uJztcclxuaW1wb3J0IGluaXRpYWxpemVGbiBmcm9tICcuLi9pbml0aWFsaXplL0luaXRpYWxpemVVdGlsJztcclxuaW1wb3J0IE1pbmlTaWduYWwgZnJvbSAnbWluaS1zaWduYWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtaXR0ZXIgZXh0ZW5kcyBQYXJ0aWNsZXtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplcyA9IFtdO1xyXG4gICAgdGhpcy5iZWhhdmlvdXJzID0gW107XHJcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZyaWN0aW9uIGNvZWZmaWNpZW50IGZvciBhbGwgcGFydGljbGUgZW1pdCBieSBUaGlzO1xyXG4gICAgICogQHByb3BlcnR5IGRhbXBpbmdcclxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XHJcbiAgICAgKiBAZGVmYXVsdCAwLjAwNlxyXG4gICAgICovXHJcbiAgICB0aGlzLmRhbXBpbmcgPSAuMDA2O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBiaW5kRW1pdHRlciB0aGUgcGFydGljbGVzIGNhbiBiaW5kIHRoaXMgZW1pdHRlcidzIHByb3BlcnR5O1xyXG4gICAgICogQHByb3BlcnR5IGJpbmRFbWl0dGVyXHJcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cclxuICAgICAqIEBkZWZhdWx0IHRydWVcclxuICAgICAqL1xyXG4gICAgdGhpcy5iaW5kRW1pdHRlciA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBudW1iZXIgb2YgcGFydGljbGVzIHBlciBzZWNvbmQgZW1pdCAoYSBbcGFydGljbGVdL2IgW3NdKTtcclxuICAgICAqIEBwcm9wZXJ0eSByYXRlXHJcbiAgICAgKiBAdHlwZSB7UXVhcmsuUmF0ZX1cclxuICAgICAqIEBkZWZhdWx0IFF1YXJrLlJhdGUoMSwgLjEpXHJcbiAgICAgKi9cclxuICAgIHRoaXMucmF0ZSA9IG5ldyBSYXRlKDEsIC4xKTtcclxuXHJcbiAgICB0aGlzLmludGVncmF0b3IgPSBuZXcgTnVtZXJpY2FsSW50ZWdyYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLm1heFBhcnRpY2xlcyA9IDUwMDAwO1xyXG5cclxuXHJcbiAgICB0aGlzLnBhcnRpY2xlQ3JlYXRlZCA9IG5ldyBNaW5pU2lnbmFsKCk7XHJcbiAgICB0aGlzLnBhcnRpY2xlVXBkYXRlID0gbmV3IE1pbmlTaWduYWwoKTtcclxuICAgIHRoaXMucGFydGljbGVEZWFkID0gbmV3IE1pbmlTaWduYWwoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlO1xyXG4gICAgdGhpcy5lbWl0dGluZyA9IHRoaXMuZW1pdHRpbmc7XHJcbiAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlID0gdGhpcy5jcmVhdGVQYXJ0aWNsZTtcclxuICAgIHRoaXMuaW50ZWdyYXRlID0gdGhpcy5pbnRlZ3JhdGU7XHJcbiAgICB0aGlzLmFjdGl2YXRlUGFydGljbGUgPSB0aGlzLmFjdGl2YXRlUGFydGljbGU7XHJcbiAgICB0aGlzLnVwZGF0ZVBhcnRpY2xlID0gdGhpcy51cGRhdGVQYXJ0aWNsZTtcclxuICB9XHJcblxyXG4gIHNldCBtYXhQYXJ0aWNsZXModmFsKXtcclxuICAgIHRoaXMuYWN0aXZlID0gbmV3IEFycmF5KHZhbCkuZmlsbChmYWxzZSk7XHJcbiAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheSh2YWwpO1xyXG4gICAgdGhpcy5hY3RpdmVDb3VudCA9IDA7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4UGFydGljbGVzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY3JlYXRlIHNpbmdsZSBwYXJ0aWNsZTtcclxuICAgKiBcclxuICAgKiBjYW4gdXNlIGVtaXQoe3g6MTB9LG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KSBvciBlbWl0KFt7eDoxMH0sbmV3IEluaXRpYWxpemVdLG5ldyBHcmF2aXR5KDEwKSx7J3BhcnRpY2xlVXBkYXRlJyxmdW59KVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXHJcbiAgICovXHJcbiAgY3JlYXRlUGFydGljbGUodGltZSkge1xyXG4gICAgbGV0IGFjdGl2ZUNvdW50ID0gdGhpcy5hY3RpdmVDb3VudDtcclxuICAgIGlmKGFjdGl2ZUNvdW50ID09PSB0aGlzLm1heFBhcnRpY2xlcykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBhY3RpdmUubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGlmICghYWN0aXZlW2ldKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVBhcnRpY2xlKGksIHRpbWUpO1xyXG4gICAgICAgIGFjdGl2ZVtpXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDb3VudCA9IGFjdGl2ZUNvdW50ICsgMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGVQYXJ0aWNsZShpbmRleCwgdGltZSl7XHJcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcztcclxuICAgIGxldCBwYXJ0aWNsZSA9IHBhcnRpY2xlc1tpbmRleF07XHJcblxyXG4gICAgaWYoIXBhcnRpY2xlKXtcclxuICAgICAgcGFydGljbGVzW2luZGV4XSA9IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluaXRpYWxpemVzID0gdGhpcy5pbml0aWFsaXplcztcclxuICAgIGxldCBiZWhhdmlvdXJzID0gdGhpcy5iZWhhdmlvdXJzO1xyXG5cclxuICAgIHBhcnRpY2xlLnJlc2V0KCk7XHJcbiAgICBpbml0aWFsaXplRm4odGhpcywgcGFydGljbGUsIGluaXRpYWxpemVzKTtcclxuICAgIHBhcnRpY2xlLmFkZEJlaGF2aW91cnMoYmVoYXZpb3Vycyk7XHJcbiAgICBwYXJ0aWNsZS51cGRhdGUoaW5kZXgsIHRpbWUpO1xyXG5cclxuICAgIHRoaXMucGFydGljbGVDcmVhdGVkLmRpc3BhdGNoKHBhcnRpY2xlKTtcclxuXHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYXJ0aWNsZShwYXJ0aWNsZSwgaW5kZXgsIHRpbWUsIGRhbXBpbmcpe1xyXG4gICAgY29uc3QgcmVzID0gcGFydGljbGUudXBkYXRlKGluZGV4LCB0aW1lKTtcclxuXHJcbiAgICB0aGlzLmludGVncmF0b3IuaW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKTtcclxuXHJcbiAgICBpZihyZXMpe1xyXG4gICAgICB0aGlzLnBhcnRpY2xlVXBkYXRlLmRpc3BhdGNoKHBhcnRpY2xlKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnBhcnRpY2xlRGVhZC5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgaW50ZWdyYXRlKHRpbWUpIHtcclxuICAgIGNvbnN0IGRhbXBpbmcgPSAxIC0gdGhpcy5kYW1waW5nO1xyXG4gICAgdGhpcy5pbnRlZ3JhdG9yLmludGVncmF0ZSh0aGlzLCB0aW1lLCBkYW1waW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmU7XHJcbiAgICBsZXQgYWN0aXZlQ291bnQgPSB0aGlzLmFjdGl2ZUNvdW50O1xyXG4gICAgY29uc3QgcGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXM7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBhY3RpdmUubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgIGlmIChhY3RpdmVbaV0gJiYgIXRoaXMudXBkYXRlUGFydGljbGUocGFydGljbGVzW2ldLCBpLCB0aW1lLCBkYW1waW5nKSkge1xyXG4gICAgICAgIGFjdGl2ZVtpXSA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZUNvdW50LS07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuYWN0aXZlQ291bnQgPSBhY3RpdmVDb3VudDtcclxuXHJcbiAgfVxyXG5cclxuICBlbWl0dGluZyh0aW1lKSB7XHJcbiAgICB0aGlzLmVtaXRUaW1lICs9IHRpbWU7XHJcbiAgICBpZih0aGlzLmVtaXRUaW1lIDwgdGhpcy5lbWl0VG90YWxUaW1lcyl7XHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMucmF0ZS5nZXRWYWx1ZSh0aW1lKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlKHRpbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWl0KGVtaXRUaW1lLCBsaWZlKSB7XHJcbiAgICB0aGlzLmVtaXRUaW1lID0gMDtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSBlbWl0VGltZSB8fCBJbmZpbml0eTtcclxuXHJcbiAgICBpZighaXNOYU4obGlmZSkpIHtcclxuICAgICAgdGhpcy5saWZlID0gbGlmZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJhdGUuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc3RvcCBlbWl0aW5nXHJcbiAgICogQG1ldGhvZCBzdG9wRW1pdFxyXG4gICAqL1xyXG4gIHN0b3BFbWl0KCkge1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgY3VycmVudCBhbGwgcGFydGljbGVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxQYXJ0aWNsZXNcclxuICAgKi9cclxuICByZW1vdmVBbGxQYXJ0aWNsZXMoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZS5mb3JFYWNoKChhKT0+YT1mYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgaW5pdGlhbGl6ZSB0byB0aGlzIGVtaXR0ZXJcclxuICAgKiBAbWV0aG9kIGFkZFNlbGZJbml0aWFsaXplXHJcbiAgICovXHJcbiAgYWRkU2VsZkluaXRpYWxpemUocE9iaikge1xyXG4gICAgaWYgKHBPYmpbJ2luaXQnXSkge1xyXG4gICAgICBwT2JqLmluaXQodGhpcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluaXRBbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZCB0aGUgSW5pdGlhbGl6ZSB0byBwYXJ0aWNsZXM7XHJcbiAgICogXHJcbiAgICogeW91IGNhbiB1c2UgaW5pdGlhbGl6ZXMgYXJyYXk6Zm9yIGV4YW1wbGUgZW1pdHRlci5hZGRJbml0aWFsaXplKGluaXRpYWxpemUxLGluaXRpYWxpemUyLGluaXRpYWxpemUzKTtcclxuICAgKiBAbWV0aG9kIGFkZEluaXRpYWxpemVcclxuICAgKiBAcGFyYW0ge1F1YXJrLkluaXRpYWxpemV9IGluaXRpYWxpemUgbGlrZSB0aGlzIG5ldyBRdWFyay5SYWRpdXMoMSwgMTIpXHJcbiAgICovXHJcbiAgYWRkSW5pdGlhbGl6ZSgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZXMucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIHRoZSBJbml0aWFsaXplXHJcbiAgICogQG1ldGhvZCByZW1vdmVJbml0aWFsaXplXHJcbiAgICogQHBhcmFtIHtRdWFyay5Jbml0aWFsaXplfSBpbml0aWFsaXplIGEgaW5pdGlhbGl6ZVxyXG4gICAqL1xyXG4gIHJlbW92ZUluaXRpYWxpemUoaW5pdGlhbGl6ZXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbml0aWFsaXplcy5pbmRleE9mKGluaXRpYWxpemVyKTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSBhbGwgSW5pdGlhbGl6ZXNcclxuICAgKiBAbWV0aG9kIHJlbW92ZUluaXRpYWxpemVyc1xyXG4gICAqL1xyXG4gIHJlbW92ZUluaXRpYWxpemVycygpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZXMubGVuZ3RoID0gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZCB0aGUgQmVoYXZpb3VyIHRvIHBhcnRpY2xlcztcclxuICAgKiBcclxuICAgKiB5b3UgY2FuIHVzZSBCZWhhdmlvdXJzIGFycmF5OmVtaXR0ZXIuYWRkQmVoYXZpb3VyKEJlaGF2aW91cjEsQmVoYXZpb3VyMixCZWhhdmlvdXIzKTtcclxuICAgKiBAbWV0aG9kIGFkZEJlaGF2aW91clxyXG4gICAqIEBwYXJhbSB7UXVhcmsuQmVoYXZpb3VyfSBiZWhhdmlvdXIgbGlrZSB0aGlzIG5ldyBRdWFyay5Db2xvcigncmFuZG9tJylcclxuICAgKi9cclxuICBhZGRCZWhhdmlvdXIoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmJlaGF2aW91cnMucHVzaChhcmd1bWVudHNbaV0pO1xyXG4gICAgICBpZiAoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KFwicGFyZW50c1wiKSlcclxuICAgICAgICBhcmd1bWVudHNbaV0ucGFyZW50cy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIHRoZSBCZWhhdmlvdXJcclxuICAgKiBAbWV0aG9kIHJlbW92ZUJlaGF2aW91clxyXG4gICAqIEBwYXJhbSB7UXVhcmsuQmVoYXZpb3VyfSBiZWhhdmlvdXIgYSBiZWhhdmlvdXJcclxuICAgKi9cclxuICByZW1vdmVCZWhhdmlvdXIoYmVoYXZpb3VyKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuYmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSlcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYWxsIGJlaGF2aW91cnNcclxuICAgKiBAbWV0aG9kIHJlbW92ZUFsbEJlaGF2aW91cnNcclxuICAgKi9cclxuICByZW1vdmVBbGxCZWhhdmlvdXJzKCkge1xyXG4gICAgdGhpcy5iZWhhdmlvdXJzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgdGhpcy5hZ2UgKz0gdGltZTtcclxuICAgIGlmICh0aGlzLmRlYWQgfHwgKHRoaXMuYWdlID49IHRoaXMubGlmZSkpIHtcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbWl0dGluZyh0aW1lKTtcclxuICAgIHRoaXMuaW50ZWdyYXRlKHRpbWUpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc3RvcnkgdGhpcyBFbWl0dGVyXHJcbiAgICogQG1ldGhvZCBkZXN0cm95XHJcbiAgICovXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVhZCA9IHRydWU7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gLTE7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVJbml0aWFsaXplcnMoKTtcclxuICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmVudCl7XHJcbiAgICAgIHRoaXMucGFyZW50LnJlbW92ZUVtaXR0ZXIodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSIsImV4cG9ydCBjb25zdCBQT09MX01BWCA9IDEwMDA7XHJcbmV4cG9ydCBjb25zdCBUSU1FX1NURVAgPSA2MDtcclxuZXhwb3J0IGNvbnN0IFVTRV9DTE9DSyA9IGZhbHNlO1xyXG5leHBvcnQgY29uc3QgTUVBU1VSRSA9IDEwMDtcclxuZXhwb3J0IGNvbnN0IEVVTEVSID0gJ2V1bGVyJztcclxuZXhwb3J0IGNvbnN0IFJLMiA9ICdydW5nZS1rdXR0YTInO1xyXG5leHBvcnQgY29uc3QgUks0ID0gJ3J1bmdlLWt1dHRhNCc7XHJcbmV4cG9ydCBjb25zdCBWRVJMRVQgPSAndmVybGV0JztcclxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX0NSRUFURUQgPSAncGFydGlsY2xlQ3JlYXRlZCc7XHJcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9VUERBVEUgPSAncGFydGlsY2xlVXBkYXRlJztcclxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX1NMRUVQID0gJ3BhcnRpY2xlU2xlZXAnO1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfREVBRCA9ICdwYXJ0aWxjbGVEZWFkJztcclxuZXhwb3J0IGNvbnN0IEVNSVRURVJfQURERUQgPSAnZW1pdHRlckFkZGVkJztcclxuZXhwb3J0IGNvbnN0IEVNSVRURVJfUkVNT1ZFRCA9ICdlbWl0dGVyUmVtb3ZlZCc7IiwiZXhwb3J0ICogZnJvbSAnLi9jb25zdCc7XHJcblxyXG5pbXBvcnQgRW1pdHRlciBmcm9tICcuL0VtaXR0ZXInO1xyXG5cclxuZXhwb3J0IHtFbWl0dGVyfTsiLCJleHBvcnQgKiBmcm9tICcuL2VtaXR0ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2luaXRpYWxpemUnO1xyXG5pbXBvcnQgU3BhbiBmcm9tICcuL21hdGgvU3Bhbic7XHJcblxyXG5pbXBvcnQgUmVjdFpvbmUgZnJvbSAnLi96b25lL1JlY3Rab25lJztcclxuaW1wb3J0IFBvaW50Wm9uZSBmcm9tICcuL3pvbmUvUG9pbnRab25lJztcclxuaW1wb3J0IExpbmVab25lIGZyb20gJy4vem9uZS9MaW5lWm9uZSc7XHJcbmltcG9ydCBJbWFnZVpvbmUgZnJvbSAnLi96b25lL0ltYWdlWm9uZSc7XHJcbmltcG9ydCBDaXJjbGVab25lIGZyb20gJy4vem9uZS9DaXJjbGVab25lJztcclxuXHJcbmltcG9ydCBBbHBoYSBmcm9tICcuL2JlaGF2aW91ci9BbHBoYSc7XHJcbmltcG9ydCBBdHRyYWN0aW9uIGZyb20gJy4vYmVoYXZpb3VyL0F0dHJhY3Rpb24nO1xyXG5pbXBvcnQgQ29sbGlzaW9uIGZyb20gJy4vYmVoYXZpb3VyL0NvbGxpc2lvbic7XHJcbmltcG9ydCBSZXB1bHNpb24gZnJvbSAnLi9iZWhhdmlvdXIvUmVwdWxzaW9uJztcclxuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5pbXBvcnQgRm9yY2UgZnJvbSAnLi9iZWhhdmlvdXIvRm9yY2UnO1xyXG5pbXBvcnQgR3Jhdml0eSBmcm9tICcuL2JlaGF2aW91ci9HcmF2aXR5JztcclxuaW1wb3J0IEdyYXZpdHlXZWxsIGZyb20gJy4vYmVoYXZpb3VyL0dyYXZpdHlXZWxsJztcclxuaW1wb3J0IFJhbmRvbURyaWZ0IGZyb20gJy4vYmVoYXZpb3VyL1JhbmRvbURyaWZ0JztcclxuaW1wb3J0IFJvdGF0ZSBmcm9tICcuL2JlaGF2aW91ci9Sb3RhdGUnO1xyXG5pbXBvcnQgU2NhbGUgZnJvbSAnLi9iZWhhdmlvdXIvU2NhbGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwYW4oYSwgYiwgY2VudGVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFNwYW4oYSwgYiwgY2VudGVyKTtcclxufVxyXG5cclxuZXhwb3J0IHsgU3BhbiwgUmVjdFpvbmUsIFBvaW50Wm9uZSwgTGluZVpvbmUsIEltYWdlWm9uZSwgQ2lyY2xlWm9uZSB9O1xyXG5cclxuZXhwb3J0IHsgQWxwaGEsIEF0dHJhY3Rpb24sIENvbGxpc2lvbiwgUmVwdWxzaW9uLCBDcm9zc1pvbmUsIEZvcmNlLCBHcmF2aXR5LCBHcmF2aXR5V2VsbCwgUmFuZG9tRHJpZnQsIFJvdGF0ZSwgU2NhbGUgfTtcclxuXHJcbmdsb2JhbC5RdWFyayA9IGV4cG9ydHM7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5pdGlhbGl6ZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0cmVzZXQoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0aW5pdChlbWl0dGVyLCBwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHBhcnRpY2xlKSB7XHJcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZShwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxpemUoZW1pdHRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCkge1xyXG5cclxuXHR9XHJcbn0iLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgeyBkZWdyZWVUcmFuc2Zvcm0gfSBmcm9tICcuLi9tYXRoL01hdGhVdGlscyc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplKGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplcykge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGluaXRpYWxpemVzLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBpbml0aWFsaXplID0gaW5pdGlhbGl6ZXNbaV07XHJcbiAgICBpZiAoaW5pdGlhbGl6ZSBpbnN0YW5jZW9mIEluaXRpYWxpemUpe1xyXG4gICAgICBpbml0aWFsaXplLmluaXQoZW1pdHRlciwgcGFydGljbGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kRW1pdHRlcihlbWl0dGVyLCBwYXJ0aWNsZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0KGVtaXR0ZXIsIHBhcnRpY2xlLCBpbml0aWFsaXplKXtcclxuICBVdGlsLnNldFZlY3RvcjJEQnlPYmplY3QocGFydGljbGUsIGluaXRpYWxpemUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kRW1pdHRlcihlbWl0dGVyLCBwYXJ0aWNsZSkge1xyXG4gIGlmIChlbWl0dGVyLmJpbmRFbWl0dGVyKSB7XHJcbiAgICBwYXJ0aWNsZS5wLmFkZChlbWl0dGVyLnApO1xyXG4gICAgcGFydGljbGUudi5hZGQoZW1pdHRlci52KTtcclxuICAgIHBhcnRpY2xlLmEuYWRkKGVtaXR0ZXIuYSk7XHJcbiAgICBwYXJ0aWNsZS52LnJvdGF0ZShkZWdyZWVUcmFuc2Zvcm0oZW1pdHRlci5yb3RhdGlvbikpO1xyXG4gIH1cclxufSIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWZlIGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgYykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmxpZmVQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHRpZiAodGhpcy5saWZlUGFuLmEgPT0gSW5maW5pdHkpe1xyXG5cdFx0XHR0YXJnZXQubGlmZSA9IEluZmluaXR5O1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRhcmdldC5saWZlID0gdGhpcy5saWZlUGFuLmdldFZhbHVlKCk7XHRcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzcyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubWFzc1BhbiA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUodGFyZ2V0KSB7XHJcbiAgICAgICAgdGFyZ2V0Lm1hc3MgPSB0aGlzLm1hc3NQYW4uZ2V0VmFsdWUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3NpdGlvbiBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioem9uZSkge1xyXG4gICAgXHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuem9uZSA9IHpvbmUgfHwgbmV3IFBvaW50Wm9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KHpvbmUpe1xyXG5cdFx0dGhpcy56b25lID0gem9uZSB8fCBuZXcgUG9pbnRab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdHRoaXMuem9uZS5nZXRQb3NpdGlvbigpO1xyXG5cdFx0dGFyZ2V0LnAueCA9IHRoaXMuem9uZS52ZWN0b3IueDtcclxuXHRcdHRhcmdldC5wLnkgPSB0aGlzLnpvbmUudmVjdG9yLnk7XHJcblx0fVxyXG59IiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGl1cyBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xyXG4gICAgXHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucmFkaXVzID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoYSwgYiwgYyl7XHJcblx0XHR0aGlzLnJhZGl1cyA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHRcdHBhcnRpY2xlLnJhZGl1cyA9IHRoaXMucmFkaXVzLmdldFZhbHVlKCk7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ub2xkUmFkaXVzID0gcGFydGljbGUucmFkaXVzO1xyXG5cdH1cclxufSIsImltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXRle1xyXG5cclxuICBjb25zdHJ1Y3RvcihudW1wYW4sIHRpbWVwYW4pIHtcclxuICAgIHRoaXMubnVtUGFuID0gbnVtcGFuXHJcbiAgICB0aGlzLnRpbWVQYW4gPSB0aW1lcGFuO1xyXG4gICAgdGhpcy5udW1QYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGlzLm51bVBhbik7XHJcbiAgICB0aGlzLnRpbWVQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZSh0aGlzLnRpbWVQYW4pO1xyXG4gICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgdGhpcy5uZXh0VGltZSA9IDA7XHJcbiAgICB0aGlzLmluaXQoKTsgIFxyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMubmV4dFRpbWUgPSB0aGlzLnRpbWVQYW4uZ2V0VmFsdWUoKTsgXHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSh0aW1lKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSArPSB0aW1lO1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUaW1lID49IHRoaXMubmV4dFRpbWUpIHtcclxuICAgICAgdGhpcy5zdGFydFRpbWUgPSAwO1xyXG4gICAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7XHJcbiAgICAgIGlmICh0aGlzLm51bVBhbi5iID09IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5udW1QYW4uZ2V0VmFsdWUoZmFsc2UpID4gMC41KVxyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtUGFuLmdldFZhbHVlKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbn0iLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgeyBNRUFTVVJFIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XHJcbmltcG9ydCBQb2xhcjJEIGZyb20gJy4uL21hdGgvUG9sYXIyRCc7XHJcbmltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi4vbWF0aC9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHkgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cdGNvbnN0cnVjdG9yKHJwYW4sIHRoYXBhbiwgdHlwZSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHJcblx0XHQvLyBzcGVlZCBvcHRpbWl6YXRpb25zXHJcblx0XHR0aGlzLlBPTEFSID0gJ3BvbGFyJztcclxuXHRcdHRoaXMuUCA9ICdwJztcclxuXHRcdHRoaXMuclBhblZhbCA9IHRoaXMuclBhbi5nZXRWYWx1ZSgpO1xyXG5cdFx0dGhpcy5ub3JtYWxpemVkUEkgPSBNYXRoLlBJIC8gMTgwO1xyXG5cdH1cclxuXHJcblx0cmVzZXQocnBhbiwgdGhhcGFuLCB0eXBlKSB7XHJcblx0XHR0aGlzLnJQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShycGFuKTtcclxuXHRcdHRoaXMudGhhUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhhcGFuKTtcclxuXHRcdHRoaXMudHlwZSA9IFV0aWwuaW5pdFZhbHVlKHR5cGUsICd2ZWN0b3InKTtcclxuXHR9XHJcblxyXG5cdG5vcm1hbGl6ZVZlbG9jaXR5KHZyKSB7XHJcblx0XHRyZXR1cm4gdnIgKiBNRUFTVVJFO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSh0YXJnZXQpIHtcclxuXHRcdGlmICh0aGlzLnR5cGUgPT0gdGhpcy5QIHx8IHRoaXMudHlwZSA9PSB0aGlzLlAgfHwgdGhpcy50eXBlID09IHRoaXMuUE9MQVIpIHtcclxuXHRcdFx0Y29uc3QgdGhhUGFuTm9ybSA9IHJhbmRvbUFUb0IodGhpcy50aGFQYW4uYSwgdGhpcy50aGFQYW4uYikqdGhpcy5ub3JtYWxpemVkUEk7XHJcblx0XHRcdGNvbnN0IHBvbGFyMmQgPSBuZXcgUG9sYXIyRCh0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhblZhbCksIHRoYVBhbk5vcm0pO1xyXG5cdFx0XHR0YXJnZXQudi54ID0gcG9sYXIyZC5nZXRYKCk7XHJcblx0XHRcdHRhcmdldC52LnkgPSBwb2xhcjJkLmdldFkoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRhcmdldC52LnggPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMuclBhbi5nZXRWYWx1ZSgpKTtcclxuXHRcdFx0dGFyZ2V0LnYueSA9IHRoaXMubm9ybWFsaXplVmVsb2NpdHkodGhpcy50aGFQYW4uZ2V0VmFsdWUoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlJztcclxuaW1wb3J0IFZlbG9jaXR5IGZyb20gJy4vVmVsb2NpdHknO1xyXG5pbXBvcnQgTGlmZSBmcm9tICcuL0xpZmUnO1xyXG5pbXBvcnQgTWFzcyBmcm9tICcuL01hc3MnO1xyXG5pbXBvcnQgUmFkaXVzIGZyb20gJy4vUmFkaXVzJztcclxuaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nO1xyXG5cclxuZXhwb3J0IHsgUmF0ZSwgVmVsb2NpdHksIExpZmUsIE1hc3MsIFJhZGl1cywgUG9zaXRpb24gfTsiLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tQVRvQihhLCBiLCBJTlQpIHtcclxuICBpZiAoIUlOVClcclxuICAgIHJldHVybiAoYSArIE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKSk7XHJcbiAgZWxzZVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChiIC0gYSkpICsgYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUZsb2F0aW5nKGNlbnRlciwgZiwgSU5UKSB7XHJcbiAgcmV0dXJuIHJhbmRvbUFUb0IoY2VudGVyIC0gZiwgY2VudGVyICsgZiwgSU5UKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZ3JlZVRyYW5zZm9ybShhKSB7XHJcbiAgcmV0dXJuIGEgKiBNYXRoLlBJIC8gMTgwO1xyXG59IiwiaW1wb3J0IHsgRVVMRVIgfSBmcm9tICcuLi9lbWl0dGVyL2NvbnN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNhbEludGVncmF0aW9uIHtcclxuXHJcbiAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCBFVUxFUjtcclxuXHJcbiAgICB0aGlzLmludGVncmF0ZSA9IHRoaXMuaW50ZWdyYXRlO1xyXG4gICAgdGhpcy5ldWxlckludGVncmF0ZSA9IHRoaXMuZXVsZXJJbnRlZ3JhdGU7XHJcbiAgfVxyXG5cclxuICBpbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcclxuICAgIHRoaXMuZXVsZXJJbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpO1xyXG4gIH1cclxuXHJcbiAgZXVsZXJJbnRlZ3JhdGUocGFydGljbGUsIHRpbWUsIGRhbXBpbmcpIHtcclxuICAgIGlmICghcGFydGljbGUuc2xlZXApIHtcclxuICAgICAgcGFydGljbGUub2xkLnAuY29weShwYXJ0aWNsZS5wKTtcclxuICAgICAgcGFydGljbGUub2xkLnYuY29weShwYXJ0aWNsZS52KTtcclxuICAgICAgcGFydGljbGUuYS5tdWx0aXBseVNjYWxhcigxIC8gcGFydGljbGUubWFzcyk7XHJcbiAgICAgIHBhcnRpY2xlLnYuYWRkKHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIodGltZSkpO1xyXG4gICAgICBwYXJ0aWNsZS5wLmFkZChwYXJ0aWNsZS5vbGQudi5tdWx0aXBseVNjYWxhcih0aW1lKSk7XHJcbiAgICAgIGlmIChkYW1waW5nKXtcclxuICAgICAgICBwYXJ0aWNsZS52Lm11bHRpcGx5U2NhbGFyKGRhbXBpbmcpO1xyXG4gICAgICB9XHJcbiAgICAgIHBhcnRpY2xlLmEuY2xlYXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4vVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9sYXIyRCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHIsIHRoYSl7XHJcblx0XHR0aGlzLnIgPSBNYXRoLmFicyhyKSB8fCAwO1xyXG5cdFx0dGhpcy50aGEgPSB0aGEgfHwgMDtcclxuXHR9XHJcblxyXG5cdHNldChyLCB0aGEpIHtcclxuXHJcblx0XHR0aGlzLnIgPSByO1xyXG5cdFx0dGhpcy50aGEgPSB0aGE7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRSKHIpIHtcclxuXHJcblx0XHR0aGlzLnIgPSByO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0VGhhKHRoYSkge1xyXG5cclxuXHRcdHRoaXMudGhhID0gdGhhO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvcHkocCkge1xyXG5cclxuXHRcdHRoaXMuciA9IHAucjtcclxuXHRcdHRoaXMudGhhID0gcC50aGE7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0dG9WZWN0b3IoKSB7XHJcblx0XHRyZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMuZ2V0WCgpLCB0aGlzLmdldFkoKSk7XHJcblx0fVxyXG5cclxuXHRnZXRYKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuciAqIE1hdGguc2luKHRoaXMudGhhKTtcclxuXHR9XHJcblxyXG5cdGdldFkoKSB7XHJcblx0XHRyZXR1cm4gLXRoaXMuciAqIE1hdGguY29zKHRoaXMudGhhKTtcclxuXHR9XHJcblxyXG5cdG5vcm1hbGl6ZSgpIHtcclxuXHJcblx0XHR0aGlzLnIgPSAxO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRlcXVhbHModikge1xyXG5cclxuXHRcdHJldHVybiAoKHYuciA9PT0gdGhpcy5yICkgJiYgKHYudGhhID09PSB0aGlzLnRoYSApICk7XHJcblxyXG5cdH1cclxuXHJcblx0dG9BcnJheSgpIHtcclxuXHJcblx0XHRyZXR1cm4gW3RoaXMuciwgdGhpcy50aGFdO1xyXG5cclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0dGhpcy5yID0gMC4wO1xyXG5cdFx0dGhpcy50aGEgPSAwLjA7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGNsb25lKCkge1xyXG5cclxuXHRcdHJldHVybiBuZXcgUG9sYXIyRCh0aGlzLnIsIHRoaXMudGhhKTtcclxuXHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IHJhbmRvbUFUb0IsIHJhbmRvbUZsb2F0aW5nIH0gZnJvbSAnLi9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhbntcclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBjZW50ZXIgPSBmYWxzZSkge1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcclxuXHRcdFx0dGhpcy5pc0FycmF5ID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5hID0gYTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYSA9IGE7XHJcblx0XHRcdHRoaXMuYiA9IGIgfHwgdGhpcy5hO1xyXG5cdFx0XHR0aGlzLmNlbnRlciA9IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldFZhbHVlKElOVCl7XHJcblx0XHRpZiAodGhpcy5pc0FycmF5KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmFbTWF0aC5mbG9vcih0aGlzLmEubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCF0aGlzLmNlbnRlcil7XHJcblx0XHRcdFx0cmV0dXJuIHJhbmRvbUFUb0IodGhpcy5hLCB0aGlzLmIsIElOVCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHJldHVybiByYW5kb21GbG9hdGluZyh0aGlzLmEsIHRoaXMuYiwgSU5UKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHJcblx0fVxyXG5cclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRHtcclxuXHJcbiAgY29uc3RydWN0b3IoeCwgeSl7XHJcbiAgICB0aGlzLnggPSB4IHx8IDA7XHJcbiAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgfVxyXG5cclxuICBzZXQoeCwgeSkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0WCh4KSB7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFkoeSkge1xyXG5cclxuICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0Q29tcG9uZW50KGluZGV4LCB2YWx1ZSkge1xyXG5cclxuICAgIHN3aXRjaCAoIGluZGV4ICkge1xyXG5cclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHRoaXMueCA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0R3JhZGllbnQoKSB7XHJcbiAgICBpZiAodGhpcy54ICE9IDApXHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA+IDApXHJcbiAgICAgIHJldHVybiBNYXRoLlBJIC8gMjtcclxuICAgIGVsc2UgaWYgKHRoaXMueSA8IDApXHJcbiAgICAgIHJldHVybiAtTWF0aC5QSSAvIDI7XHJcbiAgfVxyXG5cclxuICBnZXRDb21wb25lbnQoaW5kZXgpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRleCBpcyBvdXQgb2YgcmFuZ2U6IFwiICsgaW5kZXgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb3B5KHYpIHtcclxuXHJcbiAgICB0aGlzLnggPSB2Lng7XHJcbiAgICB0aGlzLnkgPSB2Lnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFkZFZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICB0aGlzLnkgKz0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFhZKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gYTtcclxuICAgIHRoaXMueSArPSBiO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZFZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCArIGIueDtcclxuICAgIHRoaXMueSA9IGEueSArIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCArPSBzO1xyXG4gICAgdGhpcy55ICs9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgc3ViKHYsIHcpIHtcclxuXHJcbiAgICBpZiAodyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1YlZlY3RvcnModiwgdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICB0aGlzLnkgLT0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1YlZlY3RvcnMoYSwgYikge1xyXG5cclxuICAgIHRoaXMueCA9IGEueCAtIGIueDtcclxuICAgIHRoaXMueSA9IGEueSAtIGIueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtdWx0aXBseVNjYWxhcihzKSB7XHJcblxyXG4gICAgdGhpcy54ICo9IHM7XHJcbiAgICB0aGlzLnkgKj0gcztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBkaXZpZGVTY2FsYXIocykge1xyXG5cclxuICAgIGlmIChzICE9PSAwKSB7XHJcblxyXG4gICAgICB0aGlzLnggLz0gcztcclxuICAgICAgdGhpcy55IC89IHM7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHRoaXMuc2V0KDAsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtaW4odikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPiB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA+IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBtYXgodikge1xyXG5cclxuICAgIGlmICh0aGlzLnggPCB2LngpIHtcclxuXHJcbiAgICAgIHRoaXMueCA9IHYueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IHYueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBjbGFtcChtaW4sIG1heCkge1xyXG5cclxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyBtaW4gPCBtYXgsIGlmIHRoaXMgYXNzdW1wdGlvbiBpc24ndCB0cnVlIGl0IHdpbGwgbm90IG9wZXJhdGUgY29ycmVjdGx5XHJcblxyXG4gICAgaWYgKHRoaXMueCA8IG1pbi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtaW4ueDtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueCA+IG1heC54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSBtYXgueDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSA8IG1pbi55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtaW4ueTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMueSA+IG1heC55KSB7XHJcblxyXG4gICAgICB0aGlzLnkgPSBtYXgueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbmVnYXRlKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLm11bHRpcGx5U2NhbGFyKC0xKTtcclxuXHJcbiAgfVxyXG5cclxuICBkb3Qodikge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2Lnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoU3EoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcclxuXHJcbiAgfVxyXG5cclxuICBsZW5ndGgoKSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xyXG5cclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIodGhpcy5sZW5ndGgoKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUbyh2KSB7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlVG9TcXVhcmVkKHYpKTtcclxuXHJcbiAgfVxyXG5cclxuICByb3RhdGUodGhhKSB7XHJcbiAgICB2YXIgeCA9IHRoaXMueDtcclxuICAgIHZhciB5ID0gdGhpcy55O1xyXG4gICAgdGhpcy54ID0geCAqIE1hdGguY29zKHRoYSkgKyB5ICogTWF0aC5zaW4odGhhKTtcclxuICAgIHRoaXMueSA9IC14ICogTWF0aC5zaW4odGhhKSArIHkgKiBNYXRoLmNvcyh0aGEpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkaXN0YW5jZVRvU3F1YXJlZCh2KSB7XHJcblxyXG4gICAgdmFyIGR4ID0gdGhpcy54IC0gdi54LCBkeSA9IHRoaXMueSAtIHYueTtcclxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRMZW5ndGgobCkge1xyXG5cclxuICAgIHZhciBvbGRMZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xyXG5cclxuICAgIGlmIChvbGRMZW5ndGggIT09IDAgJiYgbCAhPT0gb2xkTGVuZ3RoKSB7XHJcblxyXG4gICAgICB0aGlzLm11bHRpcGx5U2NhbGFyKGwgLyBvbGRMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGxlcnAodiwgYWxwaGEpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gKHYueCAtIHRoaXMueCApICogYWxwaGE7XHJcbiAgICB0aGlzLnkgKz0gKHYueSAtIHRoaXMueSApICogYWxwaGE7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZXF1YWxzKHYpIHtcclxuXHJcbiAgICByZXR1cm4gKCh2LnggPT09IHRoaXMueCApICYmICh2LnkgPT09IHRoaXMueSApICk7XHJcblxyXG4gIH1cclxuXHJcbiAgdG9BcnJheSgpIHtcclxuXHJcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuXHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMueCA9IDAuMDtcclxuICAgIHRoaXMueSA9IDAuMDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKSB7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XHJcblxyXG4gIH1cclxufSIsImNvbnN0IGVhc2luZyA9IHtcclxuXHRlYXNlTGluZWFyIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5RdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5wb3coKHZhbHVlIC0gMSksIDIpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0UXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3codmFsdWUsIDIpO1xyXG5cdFx0cmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgLSAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5DdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5wb3codmFsdWUsIDMpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRDdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKE1hdGgucG93KCh2YWx1ZSAtIDEpLCAzKSArIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEN1YmljIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgMyk7XHJcblx0XHRyZXR1cm4gMC41ICogKE1hdGgucG93KCh2YWx1ZSAtIDIpLCAzKSArIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJblF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgNCk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtKE1hdGgucG93KCh2YWx1ZSAtIDEpLCA0KSAtIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dFF1YXJ0IDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAwLjUgKiBNYXRoLnBvdyh2YWx1ZSwgNCk7XHJcblx0XHRyZXR1cm4gLTAuNSAqICgodmFsdWUgLT0gMikgKiBNYXRoLnBvdyh2YWx1ZSwgMykgLSAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5TaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtTWF0aC5jb3ModmFsdWUgKiAoTWF0aC5QSSAvIDIpKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dFNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguc2luKHZhbHVlICogKE1hdGguUEkgLyAyKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0U2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHZhbHVlKSAtIDEpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5FeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPT09IDApID8gMCA6IE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRFeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPT09IDEpID8gMSA6IC1NYXRoLnBvdygyLCAtMTAgKiB2YWx1ZSkgKyAxO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEV4cG8gOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlID09PSAwKVxyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdGlmICh2YWx1ZSA9PT0gMSlcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3coMiwgMTAgKiAodmFsdWUgLSAxKSk7XHJcblx0XHRyZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiAtLXZhbHVlKSArIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbkNpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSAodmFsdWUgKiB2YWx1ZSkpIC0gMSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dENpcmMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coKHZhbHVlIC0gMSksIDIpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRDaXJjIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICgodmFsdWUgLz0gMC41KSA8IDEpXHJcblx0XHRcdHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdmFsdWUgKiB2YWx1ZSkgLSAxKTtcclxuXHRcdHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodmFsdWUgLT0gMikgKiB2YWx1ZSkgKyAxKTtcclxuXHR9LFxyXG5cdFxyXG5cdGVhc2VJbkJhY2sgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dmFyIHMgPSAxLjcwMTU4O1xyXG5cdFx0cmV0dXJuICh2YWx1ZSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgLSBzKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0QmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRyZXR1cm4gKCB2YWx1ZSA9IHZhbHVlIC0gMSkgKiB2YWx1ZSAqICgocyArIDEpICogdmFsdWUgKyBzKSArIDE7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0QmFjayA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHR2YXIgcyA9IDEuNzAxNTg7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogKHZhbHVlICogdmFsdWUgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB2YWx1ZSAtIHMpKTtcclxuXHRcdHJldHVybiAwLjUgKiAoKHZhbHVlIC09IDIpICogdmFsdWUgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB2YWx1ZSArIHMpICsgMik7XHJcblx0fSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RWFzaW5nQnlOYW1lKG5hbWUpIHtcclxuXHRyZXR1cm4gZWFzaW5nW25hbWVdXHJcbn1cclxuIiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuLi9iZWhhdmlvdXIvQ3Jvc3Nab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG5cdFx0dGhpcy5hbmdsZSA9IDA7XHJcblx0XHR0aGlzLmNlbnRlciA9IHtcclxuXHRcdFx0eCA6IHRoaXMueCxcclxuXHRcdFx0eSA6IHRoaXMueVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy5hbmdsZSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyB0aGlzLnJhbmRvbSAqIHRoaXMucmFkaXVzICogTWF0aC5jb3ModGhpcy5hbmdsZSk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55ICsgdGhpcy5yYW5kb20gKiB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHRoaXMuYW5nbGUpO1xyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0c2V0Q2VudGVyKHgsIHkpIHtcclxuXHRcdHRoaXMuY2VudGVyLnggPSB4O1xyXG5cdFx0dGhpcy5jZW50ZXIueSA9IHk7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIGQgPSBwYXJ0aWNsZS5wLmRpc3RhbmNlVG8odGhpcy5jZW50ZXIpO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5ERUFEKSB7XHJcblx0XHRcdGlmIChkIC0gcGFydGljbGUucmFkaXVzID4gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5CT1VORCkge1xyXG5cdFx0XHRpZiAoZCArIHBhcnRpY2xlLnJhZGl1cyA+PSB0aGlzLnJhZGl1cylcclxuXHRcdFx0XHR0aGlzLmdldFN5bW1ldHJpYyhwYXJ0aWNsZSk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5DUk9TUykge1xyXG5cdFx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRcdGFsZXJ0KCdTb3JyeSBDaXJjbGVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWMocGFydGljbGUpIHtcclxuXHRcdHZhciB0aGEyID0gcGFydGljbGUudi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KHBhcnRpY2xlKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gcGFydGljbGUudi54O1xyXG5cdFx0dmFyIG9sZHkgPSBwYXJ0aWNsZS52Lnk7XHJcblx0XHRwYXJ0aWNsZS52LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0cGFydGljbGUudi55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KHBhcnRpY2xlKSB7XHJcblx0XHRyZXR1cm4gLU1hdGguUEkgLyAyICsgTWF0aC5hdGFuMihwYXJ0aWNsZS5wLnkgLSB0aGlzLmNlbnRlci55LCBwYXJ0aWNsZS5wLnggLSB0aGlzLmNlbnRlci54KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGltYWdlRGF0YSwgeCwgeSwgZCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMucmVzZXQoaW1hZ2VEYXRhLCB4LCB5LCBkKTtcclxuXHR9XHJcblxyXG5cdHJlc2V0KGltYWdlRGF0YSwgeCwgeSwgZCkge1xyXG5cdFx0dGhpcy5pbWFnZURhdGEgPSBpbWFnZURhdGE7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMuZCA9IGQgfHwgMjtcclxuXHRcdHRoaXMudmVjdG9ycyA9IFtdO1xyXG5cdFx0dGhpcy5zZXRWZWN0b3JzKCk7XHJcblx0fVxyXG5cclxuXHRzZXRWZWN0b3JzKCkge1xyXG5cdFx0dmFyIGksIGo7XHJcblx0XHR2YXIgbGVuZ3RoMSA9IHRoaXMuaW1hZ2VEYXRhLndpZHRoO1xyXG5cdFx0dmFyIGxlbmd0aDIgPSB0aGlzLmltYWdlRGF0YS5oZWlnaHQ7XHJcblx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDE7IGkgKz0gdGhpcy5kKSB7XHJcblx0XHRcdGZvciAoIGogPSAwOyBqIDwgbGVuZ3RoMjsgaiArPSB0aGlzLmQpIHtcclxuXHRcdFx0XHR2YXIgaW5kZXggPSAoKGogPj4gMCkgKiBsZW5ndGgxICsgKGkgPj4gMCkpICogNDtcclxuXHRcdFx0XHRpZiAodGhpcy5pbWFnZURhdGEuZGF0YVtpbmRleCArIDNdID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy52ZWN0b3JzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHR4IDogaSArIHRoaXMueCxcclxuXHRcdFx0XHRcdFx0eSA6IGogKyB0aGlzLnlcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Z2V0Qm91bmQoeCwgeSkge1xyXG5cdFx0dmFyIGluZGV4ID0gKCh5ID4+IDApICogdGhpcy5pbWFnZURhdGEud2lkdGggKyAoeCA+PiAwKSkgKiA0O1xyXG5cdFx0aWYgKHRoaXMuaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA+IDApXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnZlY3Rvci5jb3B5KHRoaXMudmVjdG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnZlY3RvcnMubGVuZ3RoKV0pO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29sb3IoeCwgeSkge1xyXG5cdFx0eCAtPSB0aGlzLng7XHJcblx0XHR5IC09IHRoaXMueTtcclxuXHRcdHZhciBpID0gKCh5ID4+IDApICogdGhpcy5pbWFnZURhdGEud2lkdGggKyAoeCA+PiAwKSkgKiA0O1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ciA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaV0sXHJcblx0XHRcdGcgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAxXSxcclxuXHRcdFx0YiA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDJdLFxyXG5cdFx0XHRhIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgM11cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiZGVhZFwiKSB7XHJcblx0XHRcdGlmICh0aGlzLmdldEJvdW5kKHBhcnRpY2xlLnAueCAtIHRoaXMueCwgcGFydGljbGUucC55IC0gdGhpcy55KSlcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSBmYWxzZTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gXCJib3VuZFwiKSB7XHJcblx0XHRcdGlmICghdGhpcy5nZXRCb3VuZChwYXJ0aWNsZS5wLnggLSB0aGlzLngsIHBhcnRpY2xlLnAueSAtIHRoaXMueSkpXHJcblx0XHRcdFx0cGFydGljbGUudi5uZWdhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4uL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZVpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeDEsIHkxLCB4MiwgeTIsIGRpcmVjdGlvbikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoeDIgLSB4MSA+PSAwKSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MTtcclxuXHRcdFx0dGhpcy55MSA9IHkxO1xyXG5cdFx0XHR0aGlzLngyID0geDI7XHJcblx0XHRcdHRoaXMueTIgPSB5MjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMueDEgPSB4MjtcclxuXHRcdFx0dGhpcy55MSA9IHkyO1xyXG5cdFx0XHR0aGlzLngyID0geDE7XHJcblx0XHRcdHRoaXMueTIgPSB5MTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZHggPSB0aGlzLngyIC0gdGhpcy54MTtcclxuXHRcdHRoaXMuZHkgPSB0aGlzLnkyIC0gdGhpcy55MTtcclxuXHRcdHRoaXMubWlueCA9IE1hdGgubWluKHRoaXMueDEsIHRoaXMueDIpO1xyXG5cdFx0dGhpcy5taW55ID0gTWF0aC5taW4odGhpcy55MSwgdGhpcy55Mik7XHJcblx0XHR0aGlzLm1heHggPSBNYXRoLm1heCh0aGlzLngxLCB0aGlzLngyKTtcclxuXHRcdHRoaXMubWF4eSA9IE1hdGgubWF4KHRoaXMueTEsIHRoaXMueTIpO1xyXG5cdFx0dGhpcy5kb3QgPSB0aGlzLngyICogdGhpcy55MSAtIHRoaXMueDEgKiB0aGlzLnkyO1xyXG5cdFx0dGhpcy54eHl5ID0gdGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keTtcclxuXHRcdHRoaXMuZ3JhZGllbnQgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR0aGlzLmxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XHJcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCAxO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54MSArIHRoaXMucmFuZG9tICogdGhpcy5sZW5ndGggKiBNYXRoLmNvcyh0aGlzLmdyYWRpZW50KTtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkxICsgdGhpcy5yYW5kb20gKiB0aGlzLmxlbmd0aCAqIE1hdGguc2luKHRoaXMuZ3JhZGllbnQpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkRFQUQpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09IDEpIHtcclxuXHRcdFx0XHR0aGlzLmdldFJhbmdlKHBhcnRpY2xlLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoIXNlbGYuZ2V0RGlyZWN0aW9uKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSlcclxuXHRcdFx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHNlbGYuZ2V0RGlzdGFuY2UocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpIDw9IHBhcnRpY2xlLnJhZGl1cykge1xyXG5cdFx0XHRcdFx0aWYgKHNlbGYuZHggPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNlbGYuZHkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS52LnkgKj0gLTE7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxmLmdldFN5bW1ldHJpYyhwYXJ0aWNsZS52KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0XHRhbGVydCgnU29ycnkgbGluZVpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zcyBtZXRob2QnKTtcclxuXHRcdFx0XHR0aGlzLmFsZXJ0ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldERpcmVjdGlvbih4LCB5KSB7XHJcblx0XHR2YXIgQSA9IHRoaXMuZHk7XHJcblx0XHR2YXIgQiA9IC10aGlzLmR4O1xyXG5cdFx0dmFyIEMgPSB0aGlzLmRvdDtcclxuXHRcdHZhciBEID0gQiA9PSAwID8gMSA6IEI7XHJcblx0XHRpZiAoKEEgKiB4ICsgQiAqIHkgKyBDKSAqIEQgPiAwKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXREaXN0YW5jZSh4LCB5KSB7XHJcblx0XHR2YXIgQSA9IHRoaXMuZHk7XHJcblx0XHR2YXIgQiA9IC10aGlzLmR4O1xyXG5cdFx0dmFyIEMgPSB0aGlzLmRvdDtcclxuXHRcdHZhciBEID0gKEEgKiB4ICsgQiAqIHkgKyBDKTtcclxuXHRcdHJldHVybiBEIC8gTWF0aC5zcXJ0KHRoaXMueHh5eSk7XHJcblx0fVxyXG5cclxuXHRnZXRTeW1tZXRyaWModikge1xyXG5cdFx0dmFyIHRoYTIgPSB2LmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhMSA9IHRoaXMuZ2V0R3JhZGllbnQoKTtcclxuXHRcdHZhciB0aGEgPSAyICogKHRoYTEgLSB0aGEyKTtcclxuXHRcdHZhciBvbGR4ID0gdi54O1xyXG5cdFx0dmFyIG9sZHkgPSB2Lnk7XHJcblx0XHR2LnggPSBvbGR4ICogTWF0aC5jb3ModGhhKSAtIG9sZHkgKiBNYXRoLnNpbih0aGEpO1xyXG5cdFx0di55ID0gb2xkeCAqIE1hdGguc2luKHRoYSkgKyBvbGR5ICogTWF0aC5jb3ModGhhKTtcclxuXHRcdHJldHVybiB2O1xyXG5cdH1cclxuXHJcblx0Z2V0R3JhZGllbnQoKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5hdGFuMih0aGlzLmR5LCB0aGlzLmR4KTtcclxuXHR9XHJcblxyXG5cdGdldFJhbmdlKHBhcnRpY2xlLCBmdW4pIHtcclxuXHRcdHZhciBhbmdsZSA9IE1hdGguYWJzKHRoaXMuZ2V0R3JhZGllbnQoKSk7XHJcblx0XHRpZiAoYW5nbGUgPD0gTWF0aC5QSSAvIDQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCA8IHRoaXMubWF4eCAmJiBwYXJ0aWNsZS5wLnggPiB0aGlzLm1pbngpIHtcclxuXHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSA8IHRoaXMubWF4eSAmJiBwYXJ0aWNsZS5wLnkgPiB0aGlzLm1pbnkpIHtcclxuXHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TGVuZ3RoKCkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmR4ICogdGhpcy5keCArIHRoaXMuZHkgKiB0aGlzLmR5KVxyXG5cdH1cclxufSIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueDtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnk7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdGFsZXJ0KCdTb3JyeSBQb2ludFpvbmUgZG9lcyBub3Qgc3VwcG9ydCBjcm9zc2luZyBtZXRob2QnKTtcclxuXHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcbmltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLnggKyBNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aDtcclxuXHRcdHRoaXMudmVjdG9yLnkgPSB0aGlzLnkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQ7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudmVjdG9yO1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCkge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRlbHNlIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSlcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5CT1VORCkge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzIDwgdGhpcy54KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54ICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueCAqPSAtMTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJ0aWNsZS5wLnggKyBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54ICsgdGhpcy53aWR0aCAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgLSBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkpIHtcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5DUk9TUykge1xyXG5cdFx0XHRpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzIDwgdGhpcy54ICYmIHBhcnRpY2xlLnYueCA8PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueCArIHRoaXMud2lkdGggJiYgcGFydGljbGUudi54ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC54ID0gdGhpcy54IC0gcGFydGljbGUucmFkaXVzO1xyXG5cclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueSArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueSAmJiBwYXJ0aWNsZS52LnkgPD0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oZWlnaHQgJiYgcGFydGljbGUudi55ID49IDApXHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMudmVjdG9yID0gbmV3IFZlY3RvcjJEKDAsIDApO1xyXG5cdFx0dGhpcy5yYW5kb20gPSAwO1xyXG5cdFx0dGhpcy5jcm9zc1R5cGUgPSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRDtcclxuXHRcdHRoaXMuYWxlcnQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblxyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==