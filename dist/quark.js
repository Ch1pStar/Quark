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

CrossZone.CROSS_TYPES = {
	CROSS: 1 << 0,
	DEAD: 1 << 2,
	BOUND: 1 << 3
};

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

Rotate.STYLES = {
	TO: 1 << 0,
	FROM: 1 << 1
};

Rotate.TYPE = {
	VELOCITY: 1 << 0
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWluaS1zaWduYWxzL2xpYi9taW5pLXNpZ25hbHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvQXR0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0JlaGF2aW91ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0NvbGxpc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0Nyb3NzWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0ZvcmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvR3Jhdml0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3VyL0dyYXZpdHlXZWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvdXIvUmFuZG9tRHJpZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9SZXB1bHNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9Sb3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW91ci9TY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9QYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9VdGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbWl0dGVyL0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL0luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvSW5pdGlhbGl6ZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWxpemUvTGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9NYXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1JhZGl1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZS9SYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL1ZlbG9jaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0aWFsaXplL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL01hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9Qb2xhcjJELmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL1NwYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvVmVjdG9yMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvZWFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9DaXJjbGVab25lLmpzIiwid2VicGFjazovLy8uL3NyYy96b25lL0ltYWdlWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9MaW5lWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvem9uZS9Qb2ludFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvUmVjdFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvbmUvWm9uZS5qcyJdLCJuYW1lcyI6WyJBbHBoYSIsImEiLCJiIiwibGlmZSIsImVhc2luZyIsInJlc2V0IiwibmFtZSIsImFwcGx5QmVoYXZpb3VyIiwidW5kZWZpbmVkIiwic2FtZSIsIlV0aWwiLCJzZXRTcGFuVmFsdWUiLCJwYXJ0aWNsZSIsInRyYW5zZm9ybSIsImFscGhhQSIsImdldFZhbHVlIiwiYWxwaGFCIiwidGltZSIsImluZGV4IiwiYWxwaGEiLCJlbmVyZ3kiLCJCZWhhdmlvdXIiLCJBdHRyYWN0aW9uIiwidGFyZ2V0UG9zaXRpb24iLCJmb3JjZSIsInJhZGl1cyIsIlZlY3RvcjJEIiwibm9ybWFsaXplVmFsdWUiLCJyYWRpdXNTcSIsImF0dHJhY3Rpb25Gb3JjZSIsImxlbmd0aFNxIiwiUHJvdG9uIiwiY29weSIsInN1YiIsInAiLCJub3JtYWxpemUiLCJtdWx0aXBseVNjYWxhciIsImFkZCIsIkJFSEFWSU9VUl9JRF9CQVNFIiwidWlkIiwiaWQiLCJJbmZpbml0eSIsImFnZSIsImRlYWQiLCJwYXJlbnRzIiwiTUVBU1VSRSIsInZhbHVlIiwiZGVzdHJveSIsInNjYWxlIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsImkiLCJyZW1vdmVCZWhhdmlvdXIiLCJDb2xsaXNpb24iLCJlbWl0dGVyIiwibWFzcyIsImNhbGxiYWNrIiwiY29sbGlzaW9uUG9vbCIsImRlbHRhIiwibmV3UG9vbCIsInBhcnRpY2xlcyIsInNsaWNlIiwib3RoZXJQYXJ0aWNsZSIsIm92ZXJsYXAiLCJhdmVyYWdlTWFzczEiLCJhdmVyYWdlTWFzczIiLCJkaXN0YW5jZSIsInNxcnQiLCJ0b3RhbE1hc3MiLCJjbG9uZSIsIkNyb3NzWm9uZSIsIkNST1NTX1RZUEVTIiwiQ1JPU1MiLCJERUFEIiwiQk9VTkQiLCJ6b25lIiwiY3Jvc3NUeXBlIiwiaW5pdFZhbHVlIiwiY3Jvc3NpbmciLCJGb3JjZSIsImZ4IiwiZnkiLCJub3JtYWxpemVGb3JjZSIsIkdyYXZpdHkiLCJnIiwiR3Jhdml0eVdlbGwiLCJjZW50ZXJQb2ludCIsImRpc3RhbmNlVmVjIiwic2V0IiwieCIsInkiLCJkaXN0YW5jZVNxIiwiZmFjdG9yIiwidiIsIlJhbmRvbURyaWZ0IiwiZHJpZnRYIiwiZHJpZnRZIiwiZGVsYXkiLCJwYW5Gb2NlIiwiX3N1cGVyXyIsInByb3RvdHlwZSIsImNhbGwiLCJhZGRYWSIsIlJlcHVsc2lvbiIsIlJvdGF0ZSIsIlNUWUxFUyIsIlRPIiwiRlJPTSIsIlRZUEUiLCJWRUxPQ0lUWSIsInN0eWxlIiwicm90YXRpb24iLCJyb3RhdGlvbkEiLCJyb3RhdGlvbkIiLCJnZXREaXJlY3Rpb24iLCJTY2FsZSIsInN1b2VyIiwic2NhbGVBIiwib2xkUmFkaXVzIiwic2NhbGVCIiwiUGFydGljbGUiLCJzcHJpdGUiLCJ1cGRhdGUiLCJhdGFuMiIsIlBJIiwiaW5pdCIsInNsZWVwIiwidGFyZ2V0IiwicGFyZW50IiwiY29sb3IiLCJ2YWwiLCJvbGQiLCJiZWhhdmlvdXJzIiwicmVtb3ZlQWxsQmVoYXZpb3VycyIsInJnYiIsInIiLCJiZWhhdmlvdXIiLCJwdXNoIiwiaGFzT3duUHJvcGVydHkiLCJpbml0aWFsaXplIiwiYWRkQmVoYXZpb3VyIiwiaW5kZXhPZiIsInNwbGljZSIsImRlZmF1bHRzIiwiZ2V0VmVjdG9yMkQiLCJwb3N0aW9uT3JYIiwidmVjdG9yMmQiLCJqdWRnZVZlY3RvcjJEIiwicE9CSiIsInJlc3VsdCIsInNldFZlY3RvcjJEQnlPYmplY3QiLCJ2eCIsInZ5IiwiYXgiLCJheSIsImMiLCJjb25zdHJ1Y3RvciIsIlNwYW4iLCJnZXRTcGFuVmFsdWUiLCJwYW4iLCJoZXhUb1JHQiIsImgiLCJoZXgxNiIsImNoYXJBdCIsInN1YnN0cmluZyIsInBhcnNlSW50IiwicmdiVG9IZXgiLCJyYmciLCJFbWl0dGVyIiwiaW5pdGlhbGl6ZXMiLCJlbWl0VGltZSIsImVtaXRUb3RhbFRpbWVzIiwiZGFtcGluZyIsImJpbmRFbWl0dGVyIiwicmF0ZSIsIlJhdGUiLCJpbnRlZ3JhdG9yIiwiTnVtZXJpY2FsSW50ZWdyYXRpb24iLCJtYXhQYXJ0aWNsZXMiLCJwYXJ0aWNsZUNyZWF0ZWQiLCJNaW5pU2lnbmFsIiwicGFydGljbGVVcGRhdGUiLCJwYXJ0aWNsZURlYWQiLCJlbWl0dGluZyIsImNyZWF0ZVBhcnRpY2xlIiwiaW50ZWdyYXRlIiwiYWN0aXZhdGVQYXJ0aWNsZSIsInVwZGF0ZVBhcnRpY2xlIiwiYWN0aXZlQ291bnQiLCJhY3RpdmUiLCJuIiwiYWRkQmVoYXZpb3VycyIsImRpc3BhdGNoIiwicmVzIiwiaXNOYU4iLCJmb3JFYWNoIiwicE9iaiIsImluaXRBbGwiLCJhcmd1bWVudHMiLCJpbml0aWFsaXplciIsInJlbW92ZUluaXRpYWxpemVycyIsInJlbW92ZUVtaXR0ZXIiLCJBcnJheSIsImZpbGwiLCJQT09MX01BWCIsIlRJTUVfU1RFUCIsIlVTRV9DTE9DSyIsIkVVTEVSIiwiUksyIiwiUks0IiwiVkVSTEVUIiwiUEFSVElDTEVfQ1JFQVRFRCIsIlBBUlRJQ0xFX1VQREFURSIsIlBBUlRJQ0xFX1NMRUVQIiwiUEFSVElDTEVfREVBRCIsIkVNSVRURVJfQURERUQiLCJFTUlUVEVSX1JFTU9WRUQiLCJnZXRTcGFuIiwiY2VudGVyIiwiUmVjdFpvbmUiLCJQb2ludFpvbmUiLCJMaW5lWm9uZSIsIkltYWdlWm9uZSIsIkNpcmNsZVpvbmUiLCJnbG9iYWwiLCJRdWFyayIsImV4cG9ydHMiLCJJbml0aWFsaXplIiwicm90YXRlIiwiTGlmZSIsImxpZmVQYW4iLCJNYXNzIiwibWFzc1BhbiIsIlBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJ2ZWN0b3IiLCJSYWRpdXMiLCJudW1wYW4iLCJ0aW1lcGFuIiwibnVtUGFuIiwidGltZVBhbiIsInN0YXJ0VGltZSIsIm5leHRUaW1lIiwiVmVsb2NpdHkiLCJycGFuIiwidGhhcGFuIiwidHlwZSIsInJQYW4iLCJ0aGFQYW4iLCJQT0xBUiIsIlAiLCJyUGFuVmFsIiwibm9ybWFsaXplZFBJIiwidnIiLCJ0aGFQYW5Ob3JtIiwicG9sYXIyZCIsIlBvbGFyMkQiLCJub3JtYWxpemVWZWxvY2l0eSIsImdldFgiLCJnZXRZIiwicmFuZG9tQVRvQiIsInJhbmRvbUZsb2F0aW5nIiwiZGVncmVlVHJhbnNmb3JtIiwiSU5UIiwicmFuZG9tIiwiZmxvb3IiLCJmIiwiZXVsZXJJbnRlZ3JhdGUiLCJjbGVhciIsInRoYSIsImFicyIsInNpbiIsImNvcyIsImlzQXJyYXkiLCJFcnJvciIsInciLCJhZGRWZWN0b3JzIiwicyIsInN1YlZlY3RvcnMiLCJtaW4iLCJkaXZpZGVTY2FsYXIiLCJkaXN0YW5jZVRvU3F1YXJlZCIsImR4IiwiZHkiLCJsIiwib2xkTGVuZ3RoIiwiZ2V0RWFzaW5nQnlOYW1lIiwiZWFzZUxpbmVhciIsImVhc2VJblF1YWQiLCJwb3ciLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5DdWJpYyIsImVhc2VPdXRDdWJpYyIsImVhc2VJbk91dEN1YmljIiwiZWFzZUluUXVhcnQiLCJlYXNlT3V0UXVhcnQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJblNpbmUiLCJlYXNlT3V0U2luZSIsImVhc2VJbk91dFNpbmUiLCJlYXNlSW5FeHBvIiwiZWFzZU91dEV4cG8iLCJlYXNlSW5PdXRFeHBvIiwiZWFzZUluQ2lyYyIsImVhc2VPdXRDaXJjIiwiZWFzZUluT3V0Q2lyYyIsImVhc2VJbkJhY2siLCJlYXNlT3V0QmFjayIsImVhc2VJbk91dEJhY2siLCJhbmdsZSIsImQiLCJkaXN0YW5jZVRvIiwiZ2V0U3ltbWV0cmljIiwiYWxlcnQiLCJ0aGEyIiwiZ2V0R3JhZGllbnQiLCJ0aGExIiwib2xkeCIsIm9sZHkiLCJab25lIiwiaW1hZ2VEYXRhIiwidmVjdG9ycyIsInNldFZlY3RvcnMiLCJqIiwibGVuZ3RoMSIsIndpZHRoIiwibGVuZ3RoMiIsImhlaWdodCIsImRhdGEiLCJnZXRCb3VuZCIsIm5lZ2F0ZSIsIngxIiwieTEiLCJ4MiIsInkyIiwiZGlyZWN0aW9uIiwibWlueCIsIm1pbnkiLCJtYXh4IiwibWF4eSIsImRvdCIsInh4eXkiLCJncmFkaWVudCIsImdldExlbmd0aCIsInNlbGYiLCJnZXRSYW5nZSIsImdldERpc3RhbmNlIiwiQSIsIkIiLCJDIiwiRCIsImZ1biJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LFNBQUwsR0FBaUJOLG9CQUFVQyxXQUFWLENBQXNCRSxJQUF2QztBQUNBLE9BQUtpUCxLQUFMLEdBQWEsSUFBYjtBQUNBOzs7O2dDQUVhLENBRWI7OzsyQkFFUS9TLFEsRUFBVSxDQUVsQjs7Ozs7O2tCQWZtQnFULEkiLCJmaWxlIjoicXVhcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG52YXIgTWluaVNpZ25hbEJpbmRpbmcgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNaW5pU2lnbmFsQmluZGluZyhmbiwgb25jZSwgdGhpc0FyZykge1xuICAgIGlmIChvbmNlID09PSB1bmRlZmluZWQpIG9uY2UgPSBmYWxzZTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaW5pU2lnbmFsQmluZGluZyk7XG5cbiAgICB0aGlzLl9mbiA9IGZuO1xuICAgIHRoaXMuX29uY2UgPSBvbmNlO1xuICAgIHRoaXMuX3RoaXNBcmcgPSB0aGlzQXJnO1xuICAgIHRoaXMuX25leHQgPSB0aGlzLl9wcmV2ID0gdGhpcy5fb3duZXIgPSBudWxsO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1pbmlTaWduYWxCaW5kaW5nLCBbe1xuICAgIGtleTogJ2RldGFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgIGlmICh0aGlzLl9vd25lciA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhpcy5fb3duZXIuZGV0YWNoKHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1pbmlTaWduYWxCaW5kaW5nO1xufSkoKTtcblxuZnVuY3Rpb24gX2FkZE1pbmlTaWduYWxCaW5kaW5nKHNlbGYsIG5vZGUpIHtcbiAgaWYgKCFzZWxmLl9oZWFkKSB7XG4gICAgc2VsZi5faGVhZCA9IG5vZGU7XG4gICAgc2VsZi5fdGFpbCA9IG5vZGU7XG4gIH0gZWxzZSB7XG4gICAgc2VsZi5fdGFpbC5fbmV4dCA9IG5vZGU7XG4gICAgbm9kZS5fcHJldiA9IHNlbGYuX3RhaWw7XG4gICAgc2VsZi5fdGFpbCA9IG5vZGU7XG4gIH1cblxuICBub2RlLl9vd25lciA9IHNlbGY7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbnZhciBNaW5pU2lnbmFsID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWluaVNpZ25hbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNpZ25hbCk7XG5cbiAgICB0aGlzLl9oZWFkID0gdGhpcy5fdGFpbCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaW5pU2lnbmFsLCBbe1xuICAgIGtleTogJ2hhbmRsZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlcnMoKSB7XG4gICAgICB2YXIgZXhpc3RzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcblxuICAgICAgaWYgKGV4aXN0cykgcmV0dXJuICEhbm9kZTtcblxuICAgICAgdmFyIGVlID0gW107XG5cbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIGVlLnB1c2gobm9kZSk7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKG5vZGUpIHtcbiAgICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiBNaW5pU2lnbmFsQmluZGluZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaW5pU2lnbmFsI2hhcygpOiBGaXJzdCBhcmcgbXVzdCBiZSBhIE1pbmlTaWduYWxCaW5kaW5nIG9iamVjdC4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGUuX293bmVyID09PSB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc3BhdGNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG5cbiAgICAgIGlmICghbm9kZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5fb25jZSkgdGhpcy5kZXRhY2gobm9kZSk7XG4gICAgICAgIG5vZGUuX2ZuLmFwcGx5KG5vZGUuX3RoaXNBcmcsIGFyZ3VtZW50cyk7XG4gICAgICAgIG5vZGUgPSBub2RlLl9uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhZGQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoZm4pIHtcbiAgICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pbmlTaWduYWwjYWRkKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgRnVuY3Rpb24uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2FkZE1pbmlTaWduYWxCaW5kaW5nKHRoaXMsIG5ldyBNaW5pU2lnbmFsQmluZGluZyhmbiwgZmFsc2UsIHRoaXNBcmcpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25jZShmbikge1xuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNvbmNlKCk6IEZpcnN0IGFyZyBtdXN0IGJlIGEgRnVuY3Rpb24uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2FkZE1pbmlTaWduYWxCaW5kaW5nKHRoaXMsIG5ldyBNaW5pU2lnbmFsQmluZGluZyhmbiwgdHJ1ZSwgdGhpc0FyZykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RldGFjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgICBpZiAoIShub2RlIGluc3RhbmNlb2YgTWluaVNpZ25hbEJpbmRpbmcpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWluaVNpZ25hbCNkZXRhY2goKTogRmlyc3QgYXJnIG11c3QgYmUgYSBNaW5pU2lnbmFsQmluZGluZyBvYmplY3QuJyk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5fb3duZXIgIT09IHRoaXMpIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobm9kZS5fcHJldikgbm9kZS5fcHJldi5fbmV4dCA9IG5vZGUuX25leHQ7XG4gICAgICBpZiAobm9kZS5fbmV4dCkgbm9kZS5fbmV4dC5fcHJldiA9IG5vZGUuX3ByZXY7XG5cbiAgICAgIGlmIChub2RlID09PSB0aGlzLl9oZWFkKSB7XG4gICAgICAgIHRoaXMuX2hlYWQgPSBub2RlLl9uZXh0O1xuICAgICAgICBpZiAobm9kZS5fbmV4dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3RhaWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUgPT09IHRoaXMuX3RhaWwpIHtcbiAgICAgICAgdGhpcy5fdGFpbCA9IG5vZGUuX3ByZXY7XG4gICAgICAgIHRoaXMuX3RhaWwuX25leHQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9vd25lciA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXRhY2hBbGwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRhY2hBbGwoKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG4gICAgICBpZiAoIW5vZGUpIHJldHVybiB0aGlzO1xuXG4gICAgICB0aGlzLl9oZWFkID0gdGhpcy5fdGFpbCA9IG51bGw7XG5cbiAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgIG5vZGUuX293bmVyID0gbnVsbDtcbiAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWluaVNpZ25hbDtcbn0pKCk7XG5cbk1pbmlTaWduYWwuTWluaVNpZ25hbEJpbmRpbmcgPSBNaW5pU2lnbmFsQmluZGluZztcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTWluaVNpZ25hbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxwaGEgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblxyXG5cdFx0dGhpcy5yZXNldChhLCBiLCB0aGlzLmxpZmUpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJBbHBoYVwiO1xyXG5cclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgJ2EnIGFuZCAnYidcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBhXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IGJcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9UXVhcmsuZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KGEsIGIsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0aWYgKGIgPT0gbnVsbCB8fCBiID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdHRoaXMuc2FtZSA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNhbWUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYSA9IFV0aWwuc2V0U3BhblZhbHVlKGEgfHwgMSk7XHJcblx0XHR0aGlzLmIgPSBVdGlsLnNldFNwYW5WYWx1ZShiKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIG5ldyBhbHBoYSB2YWx1ZSBvZiB0aGUgcGFydGljbGVcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG5cdCAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5BbHBoYVxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtRdWFyay5QYXJ0aWNsZX0gcGFydGljbGUgQSBzaW5nbGUgUXVhcmsgZ2VuZXJhdGVkIHBhcnRpY2xlXHJcblx0ICovXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQSA9IHRoaXMuYS5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYgKHRoaXMuc2FtZSl7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5hbHBoYUIgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFydGljbGUudHJhbnNmb3JtLmFscGhhQiA9IHRoaXMuYi5nZXRWYWx1ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBtZXRob2QgYXBwbHlCZWhhdmlvdXJcclxuXHQgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuQWxwaGFcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UXVhcmsuUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcbiBcdCAqL1xyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLmFscGhhID0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQiArIChwYXJ0aWNsZS50cmFuc2Zvcm0uYWxwaGFBIC0gcGFydGljbGUudHJhbnNmb3JtLmFscGhhQikgKiB0aGlzLmVuZXJneTtcclxuXHRcdGlmIChwYXJ0aWNsZS5hbHBoYSA8IDAuMDAxKVxyXG5cdFx0XHRwYXJ0aWNsZS5hbHBoYSA9IDA7XHJcblx0fTtcclxufVxyXG4iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmFjdGlvbiBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHRhcmdldFBvc2l0aW9uLCBmb3JjZSwgcmFkaXVzLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblxyXG5cdFx0dGhpcy50YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIHx8IG5ldyBWZWN0b3IyRDtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwMDA7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSkgfHwgMTAwO1xyXG5cdFx0dGhpcy5yYWRpdXNTcSA9IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXNcclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gMDtcclxuXHRcdHRoaXMubmFtZSA9IFwiQXR0cmFjdGlvblwiO1xyXG5cdFx0XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQXR0cmFjdGlvblxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciAnZm9yY2UnIGFuZCAncmFkaXVzJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uVmVjdG9yMkR9IHRhcmdldFBvc2l0aW9uIHRoZSBhdHRyYWN0aW9uIHBvaW50IGNvb3JkaW5hdGVzXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtmb3JjZT0xMDBdXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtyYWRpdXM9MTAwMF1cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2xpZmU9SW5maW5pdHldIFx0XHRcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9UHJvdG9uLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldCh0YXJnZXRQb3NpdGlvbiwgZm9yY2UsIHJhZGl1cywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLnRhcmdldFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb24gfHwgbmV3IFByb3Rvbi5WZWN0b3IyRDtcclxuXHRcdHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwMDA7XHJcblx0XHR0aGlzLmZvcmNlID0gdGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSkgfHwgMTAwO1xyXG5cdFx0dGhpcy5yYWRpdXNTcSA9IHRoaXMucmFkaXVzICogdGhpcy5yYWRpdXNcclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHR0aGlzLmxlbmd0aFNxID0gMDtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFwcGx5IHRoaXMgYmVoYXZpb3VyIGZvciBhbGwgcGFydGljbGVzIGV2ZXJ5IHRpbWVcclxuXHQgKlxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24jUHJvdG9uLkF0dHJhY3Rpb25cclxuXHQgKiBAbWV0aG9kIGFwcGx5QmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblxyXG5cdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UuY29weSh0aGlzLnRhcmdldFBvc2l0aW9uKTtcclxuXHRcdHRoaXMuYXR0cmFjdGlvbkZvcmNlLnN1YihwYXJ0aWNsZS5wKTtcclxuXHRcdHRoaXMubGVuZ3RoU3EgPSB0aGlzLmF0dHJhY3Rpb25Gb3JjZS5sZW5ndGhTcSgpO1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoU3EgPiAwLjAwMDAwNCAmJiB0aGlzLmxlbmd0aFNxIDwgdGhpcy5yYWRpdXNTcSkge1xyXG5cdFx0XHR0aGlzLmF0dHJhY3Rpb25Gb3JjZS5ub3JtYWxpemUoKTtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UubXVsdGlwbHlTY2FsYXIoMSAtIHRoaXMubGVuZ3RoU3EgLyB0aGlzLnJhZGl1c1NxKTtcclxuXHRcdFx0dGhpcy5hdHRyYWN0aW9uRm9yY2UubXVsdGlwbHlTY2FsYXIodGhpcy5mb3JjZSk7XHJcblx0XHRcdHBhcnRpY2xlLmEuYWRkKHRoaXMuYXR0cmFjdGlvbkZvcmNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59IiwiaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IHsgTUVBU1VSRSB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xyXG5pbXBvcnQgZ2V0RWFzaW5nQnlOYW1lIGZyb20gJy4uL21hdGgvZWFzZSc7XHJcblxyXG5cclxuY29uc3QgQkVIQVZJT1VSX0lEX0JBU0UgPSAweEZGRkZGO1xyXG5sZXQgdWlkID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGxpZmUsIGVhc2luZyA9ICdlYXNlTGluZWFyJykge1xyXG5cdFx0dGhpcy5pZCA9IEJFSEFWSU9VUl9JRF9CQVNFICsgdWlkKys7XHJcblx0XHR0aGlzLmxpZmUgPSBsaWZlIHx8IEluZmluaXR5O1xyXG5cdFx0dGhpcy5lYXNpbmcgPSBnZXRFYXNpbmdCeU5hbWUoZWFzaW5nKTtcclxuXHRcdHRoaXMuYWdlID0gMDtcclxuXHRcdHRoaXMuZW5lcmd5ID0gMTtcclxuXHRcdHRoaXMuZGVhZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wYXJlbnRzID0gW107XHJcblx0XHR0aGlzLm5hbWUgPSAnQmVoYXZpb3VyJztcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXNldCB0aGlzIGJlaGF2aW91cidzIHBhcmFtZXRlcnNcclxuXHQgKlxyXG5cdCAqIEBtZXRob2QgcmVzZXRcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uLkJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtsaWZlPUluZmluaXR5XSBcdFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9ZWFzZUxpbmVhcl0gXHR0aGlzIGJlaGF2aW91cidzIGVhc2luZ1xyXG5cdCAqL1xyXG5cdHJlc2V0KGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5saWZlID0gbGlmZSB8fCBJbmZpbml0eTtcclxuXHRcdHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IGdldEVhc2luZ0J5TmFtZSgnZWFzZUxpbmVhcicpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTm9ybWFsaXplIGEgZm9yY2UgYnkgMToxMDA7XHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIG5vcm1hbGl6ZUZvcmNlXHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlZlY3RvcjJEfSBmb3JjZSBcclxuXHQgKi9cclxuXHRub3JtYWxpemVGb3JjZShmb3JjZSkge1xyXG5cdFx0cmV0dXJuIGZvcmNlLm11bHRpcGx5U2NhbGFyKE1FQVNVUkUpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTm9ybWFsaXplIGEgdmFsdWUgYnkgMToxMDA7XHJcblx0ICpcclxuXHQgKiBAbWV0aG9kIG5vcm1hbGl6ZVZhbHVlXHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxyXG5cdCAqL1xyXG5cdG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUgKiBNRUFTVVJFO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogSW5pdGlhbGl6ZSB0aGUgYmVoYXZpb3VyJ3MgcGFyYW1ldGVycyBmb3IgYWxsIHBhcnRpY2xlc1xyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBpbml0aWFsaXplXHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7UHJvdG9uLlBhcnRpY2xlfSBwYXJ0aWNsZVxyXG5cdCAqL1xyXG5cdGluaXRpYWxpemUocGFydGljbGUpIHtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBtZW1iZXJvZiBQcm90b24uQmVoYXZpb3VyXHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge1Byb3Rvbi5QYXJ0aWNsZX0gcGFydGljbGVcclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0dGltZSB0aGUgaW50ZWdyYXRlIHRpbWUgMS9tc1xyXG5cdCAqIEBwYXJhbSB7SW50fSBcdFx0XHRpbmRleCB0aGUgcGFydGljbGUgaW5kZXhcclxuXHQgKi9cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHRoaXMuYWdlICs9IHRpbWU7XHJcblx0XHRpZiAodGhpcy5hZ2UgPj0gdGhpcy5saWZlIHx8IHRoaXMuZGVhZCkge1xyXG5cdFx0XHR0aGlzLmVuZXJneSA9IDA7XHJcblx0XHRcdHRoaXMuZGVhZCA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHNjYWxlID0gdGhpcy5lYXNpbmcocGFydGljbGUuYWdlIC8gcGFydGljbGUubGlmZSk7XHJcblx0XHRcdHRoaXMuZW5lcmd5ID0gTWF0aC5tYXgoMSAtIHNjYWxlLCAwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogRGVzdG9yeSB0aGlzIGJlaGF2aW91clxyXG5cdCAqXHJcblx0ICogQG1ldGhvZCBkZXN0cm95XHJcblx0ICogQG1lbWJlcm9mIFByb3Rvbi5CZWhhdmlvdXJcclxuXHQgKiBAaW5zdGFuY2VcclxuXHQgKi9cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0dmFyIGluZGV4O1xyXG5cdFx0dmFyIGxlbmd0aCA9IHRoaXMucGFyZW50cy5sZW5ndGgsIGk7XHJcblx0XHRmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRoaXMucGFyZW50c1tpXS5yZW1vdmVCZWhhdmlvdXIodGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYXJlbnRzID0gW107XHJcblx0fVxyXG59IiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvbiBleHRlbmRzIEJlaGF2aW91ciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGVtaXR0ZXIsIG1hc3MsIGNhbGxiYWNrLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KGVtaXR0ZXIsIG1hc3MsIGNhbGxiYWNrKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiQ29sbGlzaW9uXCI7XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVzZXQgdGhpcyBiZWhhdmlvdXIncyBwYXJhbWV0ZXJzXHJcblx0ICpcclxuXHQgKiBAbWVtYmVyb2YgUHJvdG9uI1Byb3Rvbi5Db2xsaXNpb25cclxuXHQgKiBAbWV0aG9kIHJlc2V0XHJcblx0ICogQGluc3RhbmNlXHJcblx0ICpcclxuXHQgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gdG8gbWFzc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uRW1pdHRlcn0gXHRbZW1pdHRlcj1udWxsXSBcdFx0dGhlIGF0dHJhY3Rpb24gcG9pbnQgY29vcmRpbmF0ZXNcclxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFx0XHRbbWFzcz10cnVlXVx0XHRcdFxyXG5cdCAqIEBwYXJhbSB7Q2FsbGJhY2t9XHQgXHRbY2FsbGJhY2s9bnVsbF1cdFx0dGhlIGNhbGxiYWNrIGFmdGVyIHRoZSBjb2xsaXNpb25cclxuXHQgKiBAcGFyYW0ge051bWJlcn0gXHRcdFx0W2xpZmU9SW5maW5pdHldIFx0dGhpcyBiZWhhdmlvdXIncyBsaWZlXHJcblx0ICogQHBhcmFtIHtTdHJpbmd9IFtlYXNpbmc9UHJvdG9uLmVhc2VMaW5lYXJdIFx0dGhpcyBiZWhhdmlvdXIncyBlYXNpbmdcclxuXHQgKi9cclxuXHRyZXNldChlbWl0dGVyLCBtYXNzLCBjYWxsYmFjaywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyIHx8IG51bGw7XHJcblx0XHR0aGlzLm1hc3MgPSBtYXNzIHx8IHRydWU7XHJcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcclxuXHRcdHRoaXMuY29sbGlzaW9uUG9vbCA9IFtdO1xyXG5cdFx0dGhpcy5kZWx0YSA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgdGhpcyBiZWhhdmlvdXIgZm9yIGFsbCBwYXJ0aWNsZXMgZXZlcnkgdGltZVxyXG5cdCAqXHJcblx0ICogQG1lbWJlcm9mIFByb3RvbiNQcm90b24uQ29sbGlzaW9uXHJcblx0ICogQG1ldGhvZCBhcHBseUJlaGF2aW91clxyXG5cdCAqIEBpbnN0YW5jZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtQcm90b24uUGFydGljbGV9IHBhcnRpY2xlXHJcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFx0XHRcdHRpbWUgdGhlIGludGVncmF0ZSB0aW1lIDEvbXNcclxuXHQgKiBAcGFyYW0ge0ludH0gXHRcdFx0aW5kZXggdGhlIHBhcnRpY2xlIGluZGV4XHJcblx0ICovXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRsZXQgbmV3UG9vbCA9IHRoaXMuZW1pdHRlci5wYXJ0aWNsZXMuc2xpY2UoaW5kZXgpO1xyXG5cdFx0bGV0IG90aGVyUGFydGljbGU7XHJcblx0XHRsZXQgbGVuZ3RoU3E7XHJcblx0XHRsZXQgb3ZlcmxhcDtcclxuXHRcdGxldCBhdmVyYWdlTWFzczEsIGF2ZXJhZ2VNYXNzMjtcclxuXHRcdGxldCBsZW5ndGggPSBuZXdQb29sLmxlbmd0aDtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0b3RoZXJQYXJ0aWNsZSA9IG5ld1Bvb2xbaV07XHJcblx0XHRcdGlmIChvdGhlclBhcnRpY2xlICE9PSBwYXJ0aWNsZSkge1xyXG5cdFx0XHRcdHRoaXMuZGVsdGEuY29weShvdGhlclBhcnRpY2xlLnApO1xyXG5cdFx0XHRcdHRoaXMuZGVsdGEuc3ViKHBhcnRpY2xlLnApO1xyXG5cdFx0XHRcdGxlbmd0aFNxID0gdGhpcy5kZWx0YS5sZW5ndGhTcSgpO1xyXG5cdFx0XHRcdGNvbnN0IGRpc3RhbmNlID0gcGFydGljbGUucmFkaXVzICsgb3RoZXJQYXJ0aWNsZS5yYWRpdXM7XHJcblxyXG5cdFx0XHRcdGlmIChsZW5ndGhTcSA8PSBkaXN0YW5jZSAqIGRpc3RhbmNlKSB7XHJcblx0XHRcdFx0XHRvdmVybGFwID0gZGlzdGFuY2UgLSBNYXRoLnNxcnQobGVuZ3RoU3EpO1xyXG5cdFx0XHRcdFx0b3ZlcmxhcCArPSAwLjU7XHJcblx0XHRcdFx0XHRjb25zdCB0b3RhbE1hc3MgPSBwYXJ0aWNsZS5tYXNzICsgb3RoZXJQYXJ0aWNsZS5tYXNzO1xyXG5cdFx0XHRcdFx0YXZlcmFnZU1hc3MxID0gdGhpcy5tYXNzID8gb3RoZXJQYXJ0aWNsZS5tYXNzIC8gdG90YWxNYXNzIDogMC41O1xyXG5cdFx0XHRcdFx0YXZlcmFnZU1hc3MyID0gdGhpcy5tYXNzID8gcGFydGljbGUubWFzcyAvIHRvdGFsTWFzcyA6IDAuNTtcclxuXHRcdFx0XHRcdHBhcnRpY2xlLnAuYWRkKHRoaXMuZGVsdGEuY2xvbmUoKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcihvdmVybGFwICogLWF2ZXJhZ2VNYXNzMSkpO1xyXG5cdFx0XHRcdFx0b3RoZXJQYXJ0aWNsZS5wLmFkZCh0aGlzLmRlbHRhLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKG92ZXJsYXAgKiBhdmVyYWdlTWFzczIpKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmNhbGxiYWNrKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYWxsYmFjayhwYXJ0aWNsZSwgb3RoZXJQYXJ0aWNsZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbkNyb3NzWm9uZS5DUk9TU19UWVBFUyA9IHtcclxuXHRDUk9TUzogMSA8PCAwLFxyXG5cdERFQUQ6IDEgPDwgMixcclxuXHRCT1VORDogMSA8PCAzXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9zc1pvbmUgZXh0ZW5kcyBCZWhhdmlvdXJ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLnJlc2V0KHpvbmUsIGNyb3NzVHlwZSk7XHJcblx0XHR0aGlzLm5hbWUgPSAnQ3Jvc3Nab25lJztcclxuXHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91cjtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHpvbmUsIGNyb3NzVHlwZSwgbGlmZSwgZWFzaW5nKXtcclxuXHRcdHRoaXMuem9uZSA9IHpvbmU7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NUeXBlID0gVXRpbC5pbml0VmFsdWUoY3Jvc3NUeXBlLCBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCk7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHR0aGlzLnpvbmUuY3Jvc3NpbmcocGFydGljbGUpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yY2UgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihmeCwgZnksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMuZm9yY2UgPSB0aGlzLm5vcm1hbGl6ZUZvcmNlKG5ldyBWZWN0b3IyRChmeCwgZnkpKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiRm9yY2VcIjtcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoZngsIGZ5LCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHRoaXMuZm9yY2UgPSB0aGlzLm5vcm1hbGl6ZUZvcmNlKG5ldyBWZWN0b3IyRChmeCwgZnkpKTtcclxuXHRcdGlmIChsaWZlKXtcclxuXHRcdFx0c3VwZXIucmVzZXQobGlmZSwgZWFzaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLmEuYWRkKHRoaXMuZm9yY2UpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgRm9yY2UgZnJvbSAnLi9Gb3JjZSc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXZpdHkgZXh0ZW5kcyBGb3JjZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGcsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIoMCwgZywgbGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMubmFtZSA9ICdHcmF2aXR5JztcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoZywgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlci5yZXNldCgwLCBnLCBsaWZlLCBlYXNpbmcpO1xyXG5cdH1cclxuXHJcblx0YXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KSB7XHJcblx0XHRzdXBlci5hcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpO1xyXG5cdFx0cGFydGljbGUuYS5hZGQodGhpcy5mb3JjZSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXZpdHlXZWxsIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY2VudGVyUG9pbnQsIGZvcmNlLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdHN1cGVyKGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmRpc3RhbmNlVmVjID0gbmV3IFZlY3RvcjJEKCk7XHJcblx0XHR0aGlzLmNlbnRlclBvaW50ID0gVXRpbC5pbml0VmFsdWUoY2VudGVyUG9pbnQsIG5ldyBWZWN0b3IyRCk7XHJcblx0XHR0aGlzLmZvcmNlID0gVXRpbC5pbml0VmFsdWUodGhpcy5ub3JtYWxpemVWYWx1ZShmb3JjZSksIDEwMCk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkdyYXZpdHlXZWxsXCI7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXJcclxuXHR9XHJcblxyXG5cclxuXHRyZXNldChjZW50ZXJQb2ludCwgZm9yY2UsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0dGhpcy5kaXN0YW5jZVZlYyA9IG5ldyBWZWN0b3IyRCgpO1xyXG5cdFx0dGhpcy5jZW50ZXJQb2ludCA9IFV0aWwuaW5pdFZhbHVlKGNlbnRlclBvaW50LCBuZXcgVmVjdG9yMkQpO1xyXG5cdFx0dGhpcy5mb3JjZSA9IFV0aWwuaW5pdFZhbHVlKHRoaXMubm9ybWFsaXplVmFsdWUoZm9yY2UpLCAxMDApO1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZShwYXJ0aWNsZSkge1xyXG5cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0dGhpcy5kaXN0YW5jZVZlYy5zZXQodGhpcy5jZW50ZXJQb2ludC54IC0gcGFydGljbGUucC54LCB0aGlzLmNlbnRlclBvaW50LnkgLSBwYXJ0aWNsZS5wLnkpO1xyXG5cdFx0Y29uc3QgZGlzdGFuY2VTcSA9IHRoaXMuZGlzdGFuY2VWZWMubGVuZ3RoU3EoKTtcclxuXHRcdGlmIChkaXN0YW5jZVNxICE9IDApIHtcclxuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlVmVjLmxlbmd0aCgpO1xyXG5cdFx0XHRjb25zdCBmYWN0b3IgPSAodGhpcy5mb3JjZSAqIHRpbWUgKSAvIChkaXN0YW5jZVNxICogZGlzdGFuY2UgKTtcclxuXHRcdFx0cGFydGljbGUudi54ICs9IGZhY3RvciAqIHRoaXMuZGlzdGFuY2VWZWMueDtcclxuXHRcdFx0cGFydGljbGUudi55ICs9IGZhY3RvciAqIHRoaXMuZGlzdGFuY2VWZWMueTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgeyByYW5kb21BVG9CIH0gZnJvbSAnLi4vbWF0aC9NYXRoVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tRHJpZnQgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkcmlmdFgsIGRyaWZ0WSwgZGVsYXksIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIobGlmZSwgZWFzaW5nKTtcclxuXHRcdHRoaXMucmVzZXQoZHJpZnRYLCBkcmlmdFksIGRlbGF5KTtcclxuXHRcdHRoaXMudGltZSA9IDA7XHJcblx0XHR0aGlzLm5hbWUgPSBcIlJhbmRvbURyaWZ0XCI7XHJcblx0XHJcblx0XHR0aGlzLmFwcGx5QmVoYXZpb3VyID0gdGhpcy5hcHBseUJlaGF2aW91clxyXG5cdH1cclxuXHJcblxyXG5cdHJlc2V0KGRyaWZ0WCwgZHJpZnRZLCBkZWxheSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHR0aGlzLnBhbkZvY2UgPSBuZXcgVmVjdG9yMkQoZHJpZnRYLCBkcmlmdFkpO1xyXG5cdFx0dGhpcy5wYW5Gb2NlID0gdGhpcy5ub3JtYWxpemVGb3JjZSh0aGlzLnBhbkZvY2UpO1xyXG5cdFx0dGhpcy5kZWxheSA9IGRlbGF5O1xyXG5cdFx0aWYgKGxpZmUpe1xyXG5cdFx0XHRSYW5kb21EcmlmdC5fc3VwZXJfLnByb3RvdHlwZS5yZXNldC5jYWxsKHRoaXMsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHR0aGlzLnRpbWUgKz0gdGltZTtcclxuXHRcdGlmICh0aGlzLnRpbWUgPj0gdGhpcy5kZWxheSkge1x0XHRcdFxyXG5cdFx0XHRwYXJ0aWNsZS5hLmFkZFhZKHJhbmRvbUFUb0IoLXRoaXMucGFuRm9jZS54LCB0aGlzLnBhbkZvY2UueCksIHJhbmRvbUFUb0IoLXRoaXMucGFuRm9jZS55LCB0aGlzLnBhbkZvY2UueSkpO1xyXG5cdFx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgQXR0cmFjdGlvbiBmcm9tICcuL0F0dHJhY3Rpb24nO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXB1bHNpb24gZXh0ZW5kcyBBdHRyYWN0aW9uIHtcclxuXHJcblx0Y29uc3RydWN0b3IodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmZvcmNlICo9IC0xO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJSZXB1bHNpb25cIjtcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0c3VwZXIucmVzZXQodGFyZ2V0UG9zaXRpb24sIGZvcmNlLCByYWRpdXMsIGxpZmUsIGVhc2luZyk7XHJcblx0XHR0aGlzLmZvcmNlICo9IC0xO1xyXG5cdH1cclxufSIsImltcG9ydCBCZWhhdmlvdXIgZnJvbSAnLi9CZWhhdmlvdXInO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5Sb3RhdGUuU1RZTEVTID0ge1xyXG5cdFRPOiAxIDw8IDAsXHJcblx0RlJPTTogMSA8PCAxXHJcbn07XHJcblxyXG5Sb3RhdGUuVFlQRSA9IHtcclxuXHRWRUxPQ0lUWTogMSA8PCAwXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3RhdGUgZXh0ZW5kcyBCZWhhdmlvdXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhLCBiLCBzdHlsZSwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChhLCBiLCBzdHlsZSk7XHJcblx0XHR0aGlzLm5hbWUgPSAnUm90YXRlJztcclxuXHRcdHRoaXMuYXBwbHlCZWhhdmlvdXIgPSB0aGlzLmFwcGx5QmVoYXZpb3VyO1xyXG5cdH1cclxuXHJcblx0cmVzZXQoYSwgYiwgc3R5bGUsIGxpZmUsIGVhc2luZykge1xyXG5cdFx0aWYgKGIgPT0gbnVsbCB8fCBiID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdHRoaXMuc2FtZSA9IHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zYW1lID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hID0gVXRpbC5zZXRTcGFuVmFsdWUoYSB8fCBSb3RhdGUuVFlQRS5WRUxPQ0lUWSk7XHJcblx0XHR0aGlzLmIgPSBVdGlsLnNldFNwYW5WYWx1ZShiIHx8IDApO1xyXG5cdFx0dGhpcy5zdHlsZSA9IHN0eWxlIHx8IFJvdGF0ZS5TVFlMRVMuVE87XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1cGVyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS5yb3RhdGlvbiA9IHRoaXMuYS5nZXRWYWx1ZSgpO1xyXG5cdFx0cGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQSA9IHRoaXMuYS5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYgKCF0aGlzLnNhbWUpe1xyXG5cdFx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25CID0gdGhpcy5iLmdldFZhbHVlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhcHBseUJlaGF2aW91cihwYXJ0aWNsZSwgdGltZSwgaW5kZXgpIHtcclxuXHRcdHN1cGVyLmFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCk7XHJcblx0XHRpZiAoIXRoaXMuc2FtZSkge1xyXG5cdFx0XHRpZiAodGhpcy5zdHlsZSA9PSBSb3RhdGUuU1RZTEVTLlRPKSB7XHJcblx0XHRcdFx0cGFydGljbGUucm90YXRpb24gKz0gcGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQiArIChwYXJ0aWNsZS50cmFuc2Zvcm0ucm90YXRpb25BIC0gcGFydGljbGUudHJhbnNmb3JtLnJvdGF0aW9uQikgKiB0aGlzLmVuZXJneVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnJvdGF0aW9uICs9IHBhcnRpY2xlLnRyYW5zZm9ybS5yb3RhdGlvbkI7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5hLmEgPT0gUm90YXRlLlRZUEUuVkVMT0NJVFkpIHtcclxuXHRcdFx0Ly9iZXRhLi4uXHJcblx0XHRcdHBhcnRpY2xlLnJvdGF0aW9uID0gcGFydGljbGUuZ2V0RGlyZWN0aW9uKCk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IEJlaGF2aW91ciBmcm9tICcuL0JlaGF2aW91cic7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjJEJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlIGV4dGVuZHMgQmVoYXZpb3VyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoYSwgYiwgbGlmZSwgZWFzaW5nKSB7XHJcblx0XHRzdXBlcihsaWZlLCBlYXNpbmcpO1xyXG5cdFx0dGhpcy5yZXNldChhLCBiKTtcclxuXHRcdHRoaXMubmFtZSA9ICdTY2FsZSc7XHJcblxyXG5cdFx0dGhpcy5hcHBseUJlaGF2aW91ciA9IHRoaXMuYXBwbHlCZWhhdmlvdXI7XHJcblx0fVxyXG5cclxuXHRyZXNldChhLCBiLCBsaWZlLCBlYXNpbmcpIHtcclxuXHRcdGlmIChiID09IG51bGwgfHwgYiA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnNhbWUgPSB0cnVlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2FtZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hID0gVXRpbC5zZXRTcGFuVmFsdWUoVXRpbC5pbml0VmFsdWUoYSwgMSkpO1xyXG5cdFx0dGhpcy5iID0gVXRpbC5zZXRTcGFuVmFsdWUoYik7XHJcblx0XHRpZiAobGlmZSl7XHJcblx0XHRcdHN1b2VyLnJlc2V0KGxpZmUsIGVhc2luZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBID0gdGhpcy5hLmdldFZhbHVlKCk7XHJcblx0XHRwYXJ0aWNsZS50cmFuc2Zvcm0ub2xkUmFkaXVzID0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0aWYgKHRoaXMuc2FtZSl7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUIgPSBwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHBhcnRpY2xlLnRyYW5zZm9ybS5zY2FsZUIgPSB0aGlzLmIuZ2V0VmFsdWUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFwcGx5QmVoYXZpb3VyKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xyXG5cdFx0c3VwZXIuYXBwbHlCZWhhdmlvdXIocGFydGljbGUsIHRpbWUsIGluZGV4KTtcclxuXHRcdHBhcnRpY2xlLnNjYWxlID0gcGFydGljbGUudHJhbnNmb3JtLnNjYWxlQiArIChwYXJ0aWNsZS50cmFuc2Zvcm0uc2NhbGVBIC0gcGFydGljbGUudHJhbnNmb3JtLnNjYWxlQikgKiB0aGlzLmVuZXJneTtcclxuXHRcdGlmIChwYXJ0aWNsZS5zY2FsZSA8IDAuMDAwMSl7XHJcblx0XHRcdHBhcnRpY2xlLnNjYWxlID0gMDtcclxuXHRcdH1cclxuXHRcdHBhcnRpY2xlLnJhZGl1cyA9IHBhcnRpY2xlLnRyYW5zZm9ybS5vbGRSYWRpdXMgKiBwYXJ0aWNsZS5zY2FsZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5sZXQgdWlkID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xle1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuaWQgPSB1aWQrKztcclxuICAgICAgdGhpcy5yZXNldCh0cnVlKTtcclxuICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZTtcclxuICAgICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95O1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGlvbigpIHtcclxuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy52LngsIC10aGlzLnYueSkgKiAoMTgwIC8gTWF0aC5QSSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoaW5pdCkge1xyXG4gICAgICB0aGlzLmxpZmUgPSBJbmZpbml0eTtcclxuICAgICAgdGhpcy5hZ2UgPSAwO1xyXG4gICAgICB0aGlzLmVuZXJneSA9IDE7XHJcbiAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNsZWVwID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLm1hc3MgPSAxO1xyXG4gICAgICB0aGlzLnJhZGl1cyA9IDEwO1xyXG4gICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgdGhpcy5zY2FsZSA9IDE7XHJcbiAgICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG4gICAgICB0aGlzLmNvbG9yID0gbnVsbDtcclxuICAgICAgdGhpcy5lYXNpbmcgPSAodmFsKSA9PiB2YWw7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0ge31cclxuICAgICAgaWYgKGluaXQpIHtcclxuICAgICAgICB0aGlzLnAgPSBuZXcgVmVjdG9yMkQoKTtcclxuICAgICAgICB0aGlzLnYgPSBuZXcgVmVjdG9yMkQoKTtcclxuICAgICAgICB0aGlzLmEgPSBuZXcgVmVjdG9yMkQoKTtcclxuICAgICAgICB0aGlzLm9sZCA9IHtcclxuICAgICAgICAgIHAgOiBuZXcgVmVjdG9yMkQoKSxcclxuICAgICAgICAgIHYgOiBuZXcgVmVjdG9yMkQoKSxcclxuICAgICAgICAgIGEgOiBuZXcgVmVjdG9yMkQoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvdXJzID0gW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZGVsZXRlIHRoaXMudHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMucC5zZXQoMCwgMCk7XHJcbiAgICAgICAgdGhpcy52LnNldCgwLCAwKTtcclxuICAgICAgICB0aGlzLmEuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMub2xkLnAuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMub2xkLnYuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMub2xkLmEuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQmVoYXZpb3VycygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5yZ2IgPSB7XHJcbiAgICAgICAgciA6IDI1NSxcclxuICAgICAgICBnIDogMjU1LFxyXG4gICAgICAgIGIgOiAyNTVcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoaW5kZXgsIHRpbWUpIHtcclxuICAgICAgY29uc3QgYWdlID0gdGhpcy5hZ2UgKyB0aW1lO1xyXG5cclxuICAgICAgaWYoYWdlID49IHRoaXMubGlmZSkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFnZSA9IGFnZTtcclxuXHJcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYmVoYXZpb3Vycy5sZW5ndGg7XHJcbiAgICAgIGxldCBpO1xyXG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmVoYXZpb3Vyc1tpXSl7XHJcbiAgICAgICAgICB0aGlzLmJlaGF2aW91cnNbaV0uYXBwbHlCZWhhdmlvdXIodGhpcywgdGltZSwgaW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5lYXNpbmcodGhpcy5hZ2UgLyB0aGlzLmxpZmUpO1xyXG4gICAgICB0aGlzLmVuZXJneSA9IE1hdGgubWF4KDEgLSBzY2FsZSwgMCk7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCZWhhdmlvdXIoYmVoYXZpb3VyKSB7XHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5wdXNoKGJlaGF2aW91cik7XHJcbiAgICAgIGlmIChiZWhhdmlvdXIuaGFzT3duUHJvcGVydHkoJ3BhcmVudHMnKSl7XHJcbiAgICAgICAgYmVoYXZpb3VyLnBhcmVudHMucHVzaCh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICBiZWhhdmlvdXIuaW5pdGlhbGl6ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCZWhhdmlvdXJzKGJlaGF2aW91cnMpIHtcclxuICAgICAgdmFyIGxlbmd0aCA9IGJlaGF2aW91cnMubGVuZ3RoLCBpO1xyXG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5hZGRCZWhhdmlvdXIoYmVoYXZpb3Vyc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVCZWhhdmlvdXIoYmVoYXZpb3VyKSB7XHJcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuYmVoYXZpb3Vycy5pbmRleE9mKGJlaGF2aW91cik7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgdmFyIGJlaGF2aW91ciA9IHRoaXMuYmVoYXZpb3Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIGJlaGF2aW91ci5wYXJlbnRzID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFsbEJlaGF2aW91cnMoKSB7XHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzdG9yeSB0aGlzIHBhcnRpY2xlXHJcbiAgICAgKiBAbWV0aG9kIGRlc3Ryb3lcclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgdGhpcy5yZW1vdmVBbGxCZWhhdmlvdXJzKCk7XHJcbiAgICAgIHRoaXMuZW5lcmd5ID0gMDtcclxuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4uL21hdGgvVmVjdG9yMkQnO1xyXG5pbXBvcnQgU3BhbiBmcm9tICcuLi9tYXRoL1NwYW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBpbml0VmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge01peGVkfSB2YWx1ZSBhIHNwZWNpZmljIHZhbHVlLCBjb3VsZCBiZSBldmVyeXRoaW5nIGJ1dCBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gZGVmYXVsdHMgdGhlIGRlZmF1bHQgaWYgdGhlIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICAgKi9cclxuICAgIGluaXRWYWx1ZTogZnVuY3Rpb24odmFsdWUsIGRlZmF1bHRzKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT0gdW5kZWZpbmVkKSA/IHZhbHVlIDogZGVmYXVsdHM7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFZlY3RvcjJEIC0gb3IgY3JlYXRlcyBhIG5ldyBvbmVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBnZXRWZWN0b3IyRFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UXVhcmsuVmVjdG9yMkQgfCBOdW1iZXJ9IHBvc3Rpb25PclhcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbeV0ganVzdCB2YWxpZCBpZiAncG9zdGlvbk9yWCcgaXMgbm90IGFuIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1F1YXJrLlZlY3RvcjJEfVxyXG4gICAgICovXHJcbiAgICBnZXRWZWN0b3IyRDogZnVuY3Rpb24ocG9zdGlvbk9yWCwgeSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YocG9zdGlvbk9yWCkgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3Rpb25Pclg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHZlY3RvcjJkID0gbmV3IFZlY3RvcjJEKHBvc3Rpb25PclgsIHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdmVjdG9yMmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGp1ZGdlVmVjdG9yMkRcclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyBhZGQgZGVzY3JpcHRpb24gZm9yIHBhcmFtIGBwT0JKYFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBmdW5jdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwT0JKXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfSByZXN1bHRcclxuICAgICAqL1xyXG4gICAganVkZ2VWZWN0b3IyRDogZnVuY3Rpb24ocE9CSikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgneCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3knKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCdwJykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgncG9zaXRpb24nKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICdwJztcclxuICAgICAgICBpZiAocE9CSi5oYXNPd25Qcm9wZXJ0eSgndngnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2eCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ3YnKSB8fCBwT0JKLmhhc093blByb3BlcnR5KCd2ZWxvY2l0eScpKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gJ3YnO1xyXG4gICAgICAgIGlmIChwT0JKLmhhc093blByb3BlcnR5KCdheCcpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2F4JykgfHwgcE9CSi5oYXNPd25Qcm9wZXJ0eSgnYScpIHx8IHBPQkouaGFzT3duUHJvcGVydHkoJ2FjY2VsZXJhdGUnKSlcclxuICAgICAgICAgICAgcmVzdWx0ICs9ICdhJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWVtYmVyb2YgUXVhcmsjUXVhcmsuVXRpbFxyXG4gICAgICogQG1ldGhvZCBzZXRWZWN0b3IyREJ5T2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgdGFyZ2V0YFxyXG4gICAgICogQHRvZG8gYWRkIGRlc2NyaXB0aW9uIGZvciBwYXJhbSBgcE9CSmBcclxuICAgICAqIEB0b2RvIGFkZCBkZXNjcmlwdGlvbiBmb3IgZnVuY3Rpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcE9CSlxyXG4gICAgICovXHJcbiAgICBzZXRWZWN0b3IyREJ5T2JqZWN0OiBmdW5jdGlvbih0YXJnZXQsIHBPQkopIHtcclxuICAgICAgICBpZihwT0JKLngpIHRhcmdldC5wLnggPSBwT0JKLng7XHJcblxyXG4gICAgICAgIGlmKHBPQkoueSkgdGFyZ2V0LnAueSA9IHBPQkoueTtcclxuXHJcbiAgICAgICAgaWYocE9CSi52eCkgdGFyZ2V0LnYueCA9IHBPQkoudng7XHJcbiAgICAgICAgaWYocE9CSi52eSkgdGFyZ2V0LnYueSA9IHBPQkoudnk7XHJcblxyXG4gICAgICAgIGlmKHBPQkouYXgpIHRhcmdldC5hLnggPSBwT0JKLmF4O1xyXG4gICAgICAgIGlmKHBPQkouYXkpIHRhcmdldC5hLnkgPSBwT0JKLmF5O1xyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBRdWFyay5TcGFuIG9iamVjdFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHNldFNwYW5WYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEB0b2RvIGEsIGIgYW5kIGMgc2hvdWxkIGJlICdNaXhlZCcgb3IgJ051bWJlcic/XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtNaXhlZCB8IFF1YXJrLlNwYW59IGFcclxuICAgICAqIEBwYXJhbSB7TWl4ZWR9ICAgICAgICAgICAgICAgYlxyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gICAgICAgICAgICAgICBjXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7UXVhcmsuU3Bhbn1cclxuICAgICAqL1xyXG4gICAgc2V0U3BhblZhbHVlOiBmdW5jdGlvbihhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFNwYW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oYSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3BhbihhLCBiLCBjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIGEgUXVhcmsuU3BhbiwgaWYgdGhlIHBhcmFtIGlzIG5vdCBhIFF1YXJrLlNwYW4gaXQgd2lsbCByZXR1cm4gdGhlIGdpdmVuIHBhcmFtZXRlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIGdldFNwYW5WYWx1ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TWl4ZWQgfCBRdWFyay5TcGFufSBwYW5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtNaXhlZH0gdGhlIHZhbHVlIG9mIFF1YXJrLlNwYW4gT1IgdGhlIHBhcmFtZXRlciBpZiBpdCBpcyBub3QgYSBRdWFyay5TcGFuXHJcbiAgICAgKi9cclxuICAgIGdldFNwYW5WYWx1ZTogZnVuY3Rpb24ocGFuKSB7XHJcbiAgICAgICAgaWYgKHBhbi5jb25zdHJ1Y3RvciA9PT0gU3BhbilcclxuICAgICAgICAgICAgcmV0dXJuIHBhbi5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHBhbjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdHlwZWRlZiAge09iamVjdH0gcmdiT2JqZWN0XHJcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gciByZWQgdmFsdWVcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBnIGdyZWVuIHZhbHVlXHJcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gYiBibHVlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIC8qKlxyXG4gICAgICogY29udmVydHMgYSBoZXggdmFsdWUgdG8gYSByZ2Igb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIFF1YXJrI1F1YXJrLlV0aWxcclxuICAgICAqIEBtZXRob2QgaGV4VG9SR0JcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaCBhbnkgaGV4IHZhbHVlLCBlLmcuICMwMDAwMDAgb3IgMDAwMDAwIGZvciBibGFja1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge3JnYk9iamVjdH1cclxuICAgICAqL1xyXG4gICAgaGV4VG9SR0I6IGZ1bmN0aW9uKGgpIHtcclxuICAgICAgICB2YXIgaGV4MTYgPSAoaC5jaGFyQXQoMCkgPT0gXCIjXCIpID8gaC5zdWJzdHJpbmcoMSwgNykgOiBoO1xyXG4gICAgICAgIHZhciByID0gcGFyc2VJbnQoaGV4MTYuc3Vic3RyaW5nKDAsIDIpLCAxNik7XHJcbiAgICAgICAgdmFyIGcgPSBwYXJzZUludChoZXgxNi5zdWJzdHJpbmcoMiwgNCksIDE2KTtcclxuICAgICAgICB2YXIgYiA9IHBhcnNlSW50KGhleDE2LnN1YnN0cmluZyg0LCA2KSwgMTYpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByOiByLFxyXG4gICAgICAgICAgICBnOiBnLFxyXG4gICAgICAgICAgICBiOiBiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbnZlcnRzIGEgcmdiIHZhbHVlIHRvIGEgcmdiIHN0cmluZ1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBRdWFyayNRdWFyay5VdGlsXHJcbiAgICAgKiBAbWV0aG9kIHJnYlRvSGV4XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3QgfCBRdWFyay5oZXhUb1JHQn0gcmdiIGEgcmdiIG9iamVjdCBsaWtlIGluIHtAbGluayBRdWFyayNRdWFyay5VdGlsLmhleFRvUkdCfVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gcmdiKClcclxuICAgICAqL1xyXG4gICAgcmdiVG9IZXg6IGZ1bmN0aW9uKHJiZykge1xyXG4gICAgICAgIHJldHVybiAncmdiKCcgKyByYmcuciArICcsICcgKyByYmcuZyArICcsICcgKyByYmcuYiArICcpJztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIi8vIGltcG9ydCBQYXJ0aWNsZSBmcm9tICcuLi9jb3JlL1BhcnRpY2xlJztcclxuaW1wb3J0IFBhcnRpY2xlIGZyb20gJy4uL2NvcmUvUGFydGljbGUnO1xyXG5pbXBvcnQgUmF0ZSBmcm9tICcuLi9pbml0aWFsaXplL1JhdGUnO1xyXG5pbXBvcnQgTnVtZXJpY2FsSW50ZWdyYXRpb24gZnJvbSAnLi4vbWF0aC9OdW1lcmljYWxJbnRlZ3JhdGlvbic7XHJcbmltcG9ydCBpbml0aWFsaXplRm4gZnJvbSAnLi4vaW5pdGlhbGl6ZS9Jbml0aWFsaXplVXRpbCc7XHJcbmltcG9ydCBNaW5pU2lnbmFsIGZyb20gJ21pbmktc2lnbmFscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWl0dGVyIGV4dGVuZHMgUGFydGljbGV7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZXMgPSBbXTtcclxuICAgIHRoaXMuYmVoYXZpb3VycyA9IFtdO1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gLTE7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmcmljdGlvbiBjb2VmZmljaWVudCBmb3IgYWxsIHBhcnRpY2xlIGVtaXQgYnkgVGhpcztcclxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXHJcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxyXG4gICAgICogQGRlZmF1bHQgMC4wMDZcclxuICAgICAqL1xyXG4gICAgdGhpcy5kYW1waW5nID0gLjAwNjtcclxuICAgIC8qKlxyXG4gICAgICogSWYgYmluZEVtaXR0ZXIgdGhlIHBhcnRpY2xlcyBjYW4gYmluZCB0aGlzIGVtaXR0ZXIncyBwcm9wZXJ0eTtcclxuICAgICAqIEBwcm9wZXJ0eSBiaW5kRW1pdHRlclxyXG4gICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICAgKi9cclxuICAgIHRoaXMuYmluZEVtaXR0ZXIgPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHBhcnRpY2xlcyBwZXIgc2Vjb25kIGVtaXQgKGEgW3BhcnRpY2xlXS9iIFtzXSk7XHJcbiAgICAgKiBAcHJvcGVydHkgcmF0ZVxyXG4gICAgICogQHR5cGUge1F1YXJrLlJhdGV9XHJcbiAgICAgKiBAZGVmYXVsdCBRdWFyay5SYXRlKDEsIC4xKVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJhdGUgPSBuZXcgUmF0ZSgxLCAuMSk7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdG9yID0gbmV3IE51bWVyaWNhbEludGVncmF0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5tYXhQYXJ0aWNsZXMgPSA1MDAwMDtcclxuXHJcblxyXG4gICAgdGhpcy5wYXJ0aWNsZUNyZWF0ZWQgPSBuZXcgTWluaVNpZ25hbCgpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZVVwZGF0ZSA9IG5ldyBNaW5pU2lnbmFsKCk7XHJcbiAgICB0aGlzLnBhcnRpY2xlRGVhZCA9IG5ldyBNaW5pU2lnbmFsKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZTtcclxuICAgIHRoaXMuZW1pdHRpbmcgPSB0aGlzLmVtaXR0aW5nO1xyXG4gICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSA9IHRoaXMuY3JlYXRlUGFydGljbGU7XHJcbiAgICB0aGlzLmludGVncmF0ZSA9IHRoaXMuaW50ZWdyYXRlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVBhcnRpY2xlID0gdGhpcy5hY3RpdmF0ZVBhcnRpY2xlO1xyXG4gICAgdGhpcy51cGRhdGVQYXJ0aWNsZSA9IHRoaXMudXBkYXRlUGFydGljbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4UGFydGljbGVzKHZhbCl7XHJcbiAgICB0aGlzLmFjdGl2ZSA9IG5ldyBBcnJheSh2YWwpLmZpbGwoZmFsc2UpO1xyXG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBuZXcgQXJyYXkodmFsKTtcclxuICAgIHRoaXMuYWN0aXZlQ291bnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1heFBhcnRpY2xlcygpe1xyXG4gICAgcmV0dXJuIHRoaXMucGFydGljbGVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNyZWF0ZSBzaW5nbGUgcGFydGljbGU7XHJcbiAgICogXHJcbiAgICogY2FuIHVzZSBlbWl0KHt4OjEwfSxuZXcgR3Jhdml0eSgxMCkseydwYXJ0aWNsZVVwZGF0ZScsZnVufSkgb3IgZW1pdChbe3g6MTB9LG5ldyBJbml0aWFsaXplXSxuZXcgR3Jhdml0eSgxMCkseydwYXJ0aWNsZVVwZGF0ZScsZnVufSlcclxuICAgKiBAbWV0aG9kIHJlbW92ZUFsbFBhcnRpY2xlc1xyXG4gICAqL1xyXG4gIGNyZWF0ZVBhcnRpY2xlKHRpbWUpIHtcclxuICAgIGxldCBhY3RpdmVDb3VudCA9IHRoaXMuYWN0aXZlQ291bnQ7XHJcbiAgICBpZihhY3RpdmVDb3VudCA9PT0gdGhpcy5tYXhQYXJ0aWNsZXMpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZTtcclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYWN0aXZlLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBpZiAoIWFjdGl2ZVtpXSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVQYXJ0aWNsZShpLCB0aW1lKTtcclxuICAgICAgICBhY3RpdmVbaV0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQ291bnQgPSBhY3RpdmVDb3VudCArIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlUGFydGljbGUoaW5kZXgsIHRpbWUpe1xyXG4gICAgY29uc3QgcGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXM7XHJcbiAgICBsZXQgcGFydGljbGUgPSBwYXJ0aWNsZXNbaW5kZXhdO1xyXG5cclxuICAgIGlmKCFwYXJ0aWNsZSl7XHJcbiAgICAgIHBhcnRpY2xlc1tpbmRleF0gPSBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbml0aWFsaXplcyA9IHRoaXMuaW5pdGlhbGl6ZXM7XHJcbiAgICBsZXQgYmVoYXZpb3VycyA9IHRoaXMuYmVoYXZpb3VycztcclxuXHJcbiAgICBwYXJ0aWNsZS5yZXNldCgpO1xyXG4gICAgaW5pdGlhbGl6ZUZuKHRoaXMsIHBhcnRpY2xlLCBpbml0aWFsaXplcyk7XHJcbiAgICBwYXJ0aWNsZS5hZGRCZWhhdmlvdXJzKGJlaGF2aW91cnMpO1xyXG4gICAgcGFydGljbGUudXBkYXRlKGluZGV4LCB0aW1lKTtcclxuXHJcbiAgICB0aGlzLnBhcnRpY2xlQ3JlYXRlZC5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFydGljbGUocGFydGljbGUsIGluZGV4LCB0aW1lLCBkYW1waW5nKXtcclxuICAgIGNvbnN0IHJlcyA9IHBhcnRpY2xlLnVwZGF0ZShpbmRleCwgdGltZSk7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdG9yLmludGVncmF0ZShwYXJ0aWNsZSwgdGltZSwgZGFtcGluZyk7XHJcblxyXG4gICAgaWYocmVzKXtcclxuICAgICAgdGhpcy5wYXJ0aWNsZVVwZGF0ZS5kaXNwYXRjaChwYXJ0aWNsZSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5wYXJ0aWNsZURlYWQuZGlzcGF0Y2gocGFydGljbGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIGludGVncmF0ZSh0aW1lKSB7XHJcbiAgICBjb25zdCBkYW1waW5nID0gMSAtIHRoaXMuZGFtcGluZztcclxuICAgIHRoaXMuaW50ZWdyYXRvci5pbnRlZ3JhdGUodGhpcywgdGltZSwgZGFtcGluZyk7XHJcblxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xyXG4gICAgbGV0IGFjdGl2ZUNvdW50ID0gdGhpcy5hY3RpdmVDb3VudDtcclxuICAgIGNvbnN0IHBhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gYWN0aXZlLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICBpZiAoYWN0aXZlW2ldICYmICF0aGlzLnVwZGF0ZVBhcnRpY2xlKHBhcnRpY2xlc1tpXSwgaSwgdGltZSwgZGFtcGluZykpIHtcclxuICAgICAgICBhY3RpdmVbaV0gPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVDb3VudC0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmFjdGl2ZUNvdW50ID0gYWN0aXZlQ291bnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgZW1pdHRpbmcodGltZSkge1xyXG4gICAgdGhpcy5lbWl0VGltZSArPSB0aW1lO1xyXG4gICAgaWYodGhpcy5lbWl0VGltZSA8IHRoaXMuZW1pdFRvdGFsVGltZXMpe1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnJhdGUuZ2V0VmFsdWUodGltZSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYXJ0aWNsZSh0aW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1pdChlbWl0VGltZSwgbGlmZSkge1xyXG4gICAgdGhpcy5lbWl0VGltZSA9IDA7XHJcbiAgICB0aGlzLmVtaXRUb3RhbFRpbWVzID0gZW1pdFRpbWUgfHwgSW5maW5pdHk7XHJcblxyXG4gICAgaWYoIWlzTmFOKGxpZmUpKSB7XHJcbiAgICAgIHRoaXMubGlmZSA9IGxpZmU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yYXRlLmluaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHN0b3AgZW1pdGluZ1xyXG4gICAqIEBtZXRob2Qgc3RvcEVtaXRcclxuICAgKi9cclxuICBzdG9wRW1pdCgpIHtcclxuICAgIHRoaXMuZW1pdFRvdGFsVGltZXMgPSAtMTtcclxuICAgIHRoaXMuZW1pdFRpbWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGN1cnJlbnQgYWxsIHBhcnRpY2xlc1xyXG4gICAqIEBtZXRob2QgcmVtb3ZlQWxsUGFydGljbGVzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsUGFydGljbGVzKCkge1xyXG4gICAgdGhpcy5hY3RpdmUuZm9yRWFjaCgoYSk9PmE9ZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkIGluaXRpYWxpemUgdG8gdGhpcyBlbWl0dGVyXHJcbiAgICogQG1ldGhvZCBhZGRTZWxmSW5pdGlhbGl6ZVxyXG4gICAqL1xyXG4gIGFkZFNlbGZJbml0aWFsaXplKHBPYmopIHtcclxuICAgIGlmIChwT2JqWydpbml0J10pIHtcclxuICAgICAgcE9iai5pbml0KHRoaXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0QWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEluaXRpYWxpemUgdG8gcGFydGljbGVzO1xyXG4gICAqIFxyXG4gICAqIHlvdSBjYW4gdXNlIGluaXRpYWxpemVzIGFycmF5OmZvciBleGFtcGxlIGVtaXR0ZXIuYWRkSW5pdGlhbGl6ZShpbml0aWFsaXplMSxpbml0aWFsaXplMixpbml0aWFsaXplMyk7XHJcbiAgICogQG1ldGhvZCBhZGRJbml0aWFsaXplXHJcbiAgICogQHBhcmFtIHtRdWFyay5Jbml0aWFsaXplfSBpbml0aWFsaXplIGxpa2UgdGhpcyBuZXcgUXVhcmsuUmFkaXVzKDEsIDEyKVxyXG4gICAqL1xyXG4gIGFkZEluaXRpYWxpemUoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgSW5pdGlhbGl6ZVxyXG4gICAqIEBtZXRob2QgcmVtb3ZlSW5pdGlhbGl6ZVxyXG4gICAqIEBwYXJhbSB7UXVhcmsuSW5pdGlhbGl6ZX0gaW5pdGlhbGl6ZSBhIGluaXRpYWxpemVcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplKGluaXRpYWxpemVyKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5pdGlhbGl6ZXMuaW5kZXhPZihpbml0aWFsaXplcik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYWxsIEluaXRpYWxpemVzXHJcbiAgICogQG1ldGhvZCByZW1vdmVJbml0aWFsaXplcnNcclxuICAgKi9cclxuICByZW1vdmVJbml0aWFsaXplcnMoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgdGhlIEJlaGF2aW91ciB0byBwYXJ0aWNsZXM7XHJcbiAgICogXHJcbiAgICogeW91IGNhbiB1c2UgQmVoYXZpb3VycyBhcnJheTplbWl0dGVyLmFkZEJlaGF2aW91cihCZWhhdmlvdXIxLEJlaGF2aW91cjIsQmVoYXZpb3VyMyk7XHJcbiAgICogQG1ldGhvZCBhZGRCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGxpa2UgdGhpcyBuZXcgUXVhcmsuQ29sb3IoJ3JhbmRvbScpXHJcbiAgICovXHJcbiAgYWRkQmVoYXZpb3VyKCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5iZWhhdmlvdXJzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShcInBhcmVudHNcIikpXHJcbiAgICAgICAgYXJndW1lbnRzW2ldLnBhcmVudHMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbW92ZSB0aGUgQmVoYXZpb3VyXHJcbiAgICogQG1ldGhvZCByZW1vdmVCZWhhdmlvdXJcclxuICAgKiBAcGFyYW0ge1F1YXJrLkJlaGF2aW91cn0gYmVoYXZpb3VyIGEgYmVoYXZpb3VyXHJcbiAgICovXHJcbiAgcmVtb3ZlQmVoYXZpb3VyKGJlaGF2aW91cikge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmJlaGF2aW91cnMuaW5kZXhPZihiZWhhdmlvdXIpO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpXHJcbiAgICAgIHRoaXMuYmVoYXZpb3Vycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVtb3ZlIGFsbCBiZWhhdmlvdXJzXHJcbiAgICogQG1ldGhvZCByZW1vdmVBbGxCZWhhdmlvdXJzXHJcbiAgICovXHJcbiAgcmVtb3ZlQWxsQmVoYXZpb3VycygpIHtcclxuICAgIHRoaXMuYmVoYXZpb3Vycy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIHRoaXMuYWdlICs9IHRpbWU7XHJcbiAgICBpZiAodGhpcy5kZWFkIHx8ICh0aGlzLmFnZSA+PSB0aGlzLmxpZmUpKSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW1pdHRpbmcodGltZSk7XHJcbiAgICB0aGlzLmludGVncmF0ZSh0aW1lKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBEZXN0b3J5IHRoaXMgRW1pdHRlclxyXG4gICAqIEBtZXRob2QgZGVzdHJveVxyXG4gICAqL1xyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xyXG4gICAgdGhpcy5lbWl0VG90YWxUaW1lcyA9IC0xO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlSW5pdGlhbGl6ZXJzKCk7XHJcbiAgICB0aGlzLnJlbW92ZUFsbEJlaGF2aW91cnMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYXJlbnQpe1xyXG4gICAgICB0aGlzLnBhcmVudC5yZW1vdmVFbWl0dGVyKHRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iLCJleHBvcnQgY29uc3QgUE9PTF9NQVggPSAxMDAwO1xyXG5leHBvcnQgY29uc3QgVElNRV9TVEVQID0gNjA7XHJcbmV4cG9ydCBjb25zdCBVU0VfQ0xPQ0sgPSBmYWxzZTtcclxuZXhwb3J0IGNvbnN0IE1FQVNVUkUgPSAxMDA7XHJcbmV4cG9ydCBjb25zdCBFVUxFUiA9ICdldWxlcic7XHJcbmV4cG9ydCBjb25zdCBSSzIgPSAncnVuZ2Uta3V0dGEyJztcclxuZXhwb3J0IGNvbnN0IFJLNCA9ICdydW5nZS1rdXR0YTQnO1xyXG5leHBvcnQgY29uc3QgVkVSTEVUID0gJ3ZlcmxldCc7XHJcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9DUkVBVEVEID0gJ3BhcnRpbGNsZUNyZWF0ZWQnO1xyXG5leHBvcnQgY29uc3QgUEFSVElDTEVfVVBEQVRFID0gJ3BhcnRpbGNsZVVwZGF0ZSc7XHJcbmV4cG9ydCBjb25zdCBQQVJUSUNMRV9TTEVFUCA9ICdwYXJ0aWNsZVNsZWVwJztcclxuZXhwb3J0IGNvbnN0IFBBUlRJQ0xFX0RFQUQgPSAncGFydGlsY2xlRGVhZCc7XHJcbmV4cG9ydCBjb25zdCBFTUlUVEVSX0FEREVEID0gJ2VtaXR0ZXJBZGRlZCc7XHJcbmV4cG9ydCBjb25zdCBFTUlUVEVSX1JFTU9WRUQgPSAnZW1pdHRlclJlbW92ZWQnOyIsImV4cG9ydCAqIGZyb20gJy4vY29uc3QnO1xyXG5cclxuaW1wb3J0IEVtaXR0ZXIgZnJvbSAnLi9FbWl0dGVyJztcclxuXHJcbmV4cG9ydCB7RW1pdHRlcn07IiwiZXhwb3J0ICogZnJvbSAnLi9lbWl0dGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9pbml0aWFsaXplJztcclxuaW1wb3J0IFNwYW4gZnJvbSAnLi9tYXRoL1NwYW4nO1xyXG5cclxuaW1wb3J0IFJlY3Rab25lIGZyb20gJy4vem9uZS9SZWN0Wm9uZSc7XHJcbmltcG9ydCBQb2ludFpvbmUgZnJvbSAnLi96b25lL1BvaW50Wm9uZSc7XHJcbmltcG9ydCBMaW5lWm9uZSBmcm9tICcuL3pvbmUvTGluZVpvbmUnO1xyXG5pbXBvcnQgSW1hZ2Vab25lIGZyb20gJy4vem9uZS9JbWFnZVpvbmUnO1xyXG5pbXBvcnQgQ2lyY2xlWm9uZSBmcm9tICcuL3pvbmUvQ2lyY2xlWm9uZSc7XHJcblxyXG5pbXBvcnQgQWxwaGEgZnJvbSAnLi9iZWhhdmlvdXIvQWxwaGEnO1xyXG5pbXBvcnQgQXR0cmFjdGlvbiBmcm9tICcuL2JlaGF2aW91ci9BdHRyYWN0aW9uJztcclxuaW1wb3J0IENvbGxpc2lvbiBmcm9tICcuL2JlaGF2aW91ci9Db2xsaXNpb24nO1xyXG5pbXBvcnQgUmVwdWxzaW9uIGZyb20gJy4vYmVoYXZpb3VyL1JlcHVsc2lvbic7XHJcbmltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi9iZWhhdmlvdXIvQ3Jvc3Nab25lJztcclxuaW1wb3J0IEZvcmNlIGZyb20gJy4vYmVoYXZpb3VyL0ZvcmNlJztcclxuaW1wb3J0IEdyYXZpdHkgZnJvbSAnLi9iZWhhdmlvdXIvR3Jhdml0eSc7XHJcbmltcG9ydCBHcmF2aXR5V2VsbCBmcm9tICcuL2JlaGF2aW91ci9HcmF2aXR5V2VsbCc7XHJcbmltcG9ydCBSYW5kb21EcmlmdCBmcm9tICcuL2JlaGF2aW91ci9SYW5kb21EcmlmdCc7XHJcbmltcG9ydCBSb3RhdGUgZnJvbSAnLi9iZWhhdmlvdXIvUm90YXRlJztcclxuaW1wb3J0IFNjYWxlIGZyb20gJy4vYmVoYXZpb3VyL1NjYWxlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGFuKGEsIGIsIGNlbnRlcikge1xyXG4gICAgcmV0dXJuIG5ldyBTcGFuKGEsIGIsIGNlbnRlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNwYW4sIFJlY3Rab25lLCBQb2ludFpvbmUsIExpbmVab25lLCBJbWFnZVpvbmUsIENpcmNsZVpvbmUgfTtcclxuXHJcbmV4cG9ydCB7IEFscGhhLCBBdHRyYWN0aW9uLCBDb2xsaXNpb24sIFJlcHVsc2lvbiwgQ3Jvc3Nab25lLCBGb3JjZSwgR3Jhdml0eSwgR3Jhdml0eVdlbGwsIFJhbmRvbURyaWZ0LCBSb3RhdGUsIFNjYWxlIH07XHJcblxyXG5nbG9iYWwuUXVhcmsgPSBleHBvcnRzOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRpYWxpemUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHJlc2V0KCkge1xyXG5cclxuXHR9XHJcblxyXG5cdGluaXQoZW1pdHRlciwgcGFydGljbGUpIHtcclxuXHRcdGlmIChwYXJ0aWNsZSkge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxpemUocGFydGljbGUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsaXplKGVtaXR0ZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpIHtcclxuXHJcblx0fVxyXG59IiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IHsgZGVncmVlVHJhbnNmb3JtIH0gZnJvbSAnLi4vbWF0aC9NYXRoVXRpbHMnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZShlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZXMpIHtcclxuICBjb25zdCBsZW5ndGggPSBpbml0aWFsaXplcy5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgaW5pdGlhbGl6ZSA9IGluaXRpYWxpemVzW2ldO1xyXG4gICAgaWYgKGluaXRpYWxpemUgaW5zdGFuY2VvZiBJbml0aWFsaXplKXtcclxuICAgICAgaW5pdGlhbGl6ZS5pbml0KGVtaXR0ZXIsIHBhcnRpY2xlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXQoZW1pdHRlciwgcGFydGljbGUsIGluaXRpYWxpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZEVtaXR0ZXIoZW1pdHRlciwgcGFydGljbGUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdChlbWl0dGVyLCBwYXJ0aWNsZSwgaW5pdGlhbGl6ZSl7XHJcbiAgVXRpbC5zZXRWZWN0b3IyREJ5T2JqZWN0KHBhcnRpY2xlLCBpbml0aWFsaXplKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZEVtaXR0ZXIoZW1pdHRlciwgcGFydGljbGUpIHtcclxuICBpZiAoZW1pdHRlci5iaW5kRW1pdHRlcikge1xyXG4gICAgcGFydGljbGUucC5hZGQoZW1pdHRlci5wKTtcclxuICAgIHBhcnRpY2xlLnYuYWRkKGVtaXR0ZXIudik7XHJcbiAgICBwYXJ0aWNsZS5hLmFkZChlbWl0dGVyLmEpO1xyXG4gICAgcGFydGljbGUudi5yb3RhdGUoZGVncmVlVHJhbnNmb3JtKGVtaXR0ZXIucm90YXRpb24pKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZSBleHRlbmRzIEluaXRpYWxpemV7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGEsIGIsIGMpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5saWZlUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUoYSwgYiwgYyk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKHRhcmdldCkge1xyXG5cdFx0aWYgKHRoaXMubGlmZVBhbi5hID09IEluZmluaXR5KXtcclxuXHRcdFx0dGFyZ2V0LmxpZmUgPSBJbmZpbml0eTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0YXJnZXQubGlmZSA9IHRoaXMubGlmZVBhbi5nZXRWYWx1ZSgpO1x0XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc3MgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGEsIGIsIGMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc3NQYW4gPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHRhcmdldCkge1xyXG4gICAgICAgIHRhcmdldC5tYXNzID0gdGhpcy5tYXNzUGFuLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgSW5pdGlhbGl6ZSBmcm9tICcuL0luaXRpYWxpemUnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHpvbmUpIHtcclxuICAgIFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnpvbmUgPSB6b25lIHx8IG5ldyBQb2ludFpvbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCh6b25lKXtcclxuXHRcdHRoaXMuem9uZSA9IHpvbmUgfHwgbmV3IFBvaW50Wm9uZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHR0aGlzLnpvbmUuZ2V0UG9zaXRpb24oKTtcclxuXHRcdHRhcmdldC5wLnggPSB0aGlzLnpvbmUudmVjdG9yLng7XHJcblx0XHR0YXJnZXQucC55ID0gdGhpcy56b25lLnZlY3Rvci55O1xyXG5cdH1cclxufSIsImltcG9ydCBJbml0aWFsaXplIGZyb20gJy4vSW5pdGlhbGl6ZSc7XHJcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvcmUvVXRpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpdXMgZXh0ZW5kcyBJbml0aWFsaXple1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGEsIGIsIGMpIHtcclxuICAgIFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnJhZGl1cyA9IFV0aWwuc2V0U3BhblZhbHVlKGEsIGIsIGMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KGEsIGIsIGMpe1xyXG5cdFx0dGhpcy5yYWRpdXMgPSBVdGlsLnNldFNwYW5WYWx1ZShhLCBiLCBjKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKHBhcnRpY2xlKSB7XHJcblx0XHRwYXJ0aWNsZS5yYWRpdXMgPSB0aGlzLnJhZGl1cy5nZXRWYWx1ZSgpO1xyXG5cdFx0cGFydGljbGUudHJhbnNmb3JtLm9sZFJhZGl1cyA9IHBhcnRpY2xlLnJhZGl1cztcclxuXHR9XHJcbn0iLCJpbXBvcnQgVXRpbCBmcm9tICcuLi9jb3JlL1V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0ZXtcclxuXHJcbiAgY29uc3RydWN0b3IobnVtcGFuLCB0aW1lcGFuKSB7XHJcbiAgICB0aGlzLm51bVBhbiA9IG51bXBhblxyXG4gICAgdGhpcy50aW1lUGFuID0gdGltZXBhbjtcclxuICAgIHRoaXMubnVtUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhpcy5udW1QYW4pO1xyXG4gICAgdGhpcy50aW1lUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUodGhpcy50aW1lUGFuKTtcclxuICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIHRoaXMubmV4dFRpbWUgPSAwO1xyXG4gICAgdGhpcy5pbml0KCk7ICBcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB0aGlzLm5leHRUaW1lID0gdGhpcy50aW1lUGFuLmdldFZhbHVlKCk7IFxyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUodGltZSkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUgKz0gdGltZTtcclxuICAgIGlmICh0aGlzLnN0YXJ0VGltZSA+PSB0aGlzLm5leHRUaW1lKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgICAgdGhpcy5uZXh0VGltZSA9IHRoaXMudGltZVBhbi5nZXRWYWx1ZSgpO1xyXG4gICAgICBpZiAodGhpcy5udW1QYW4uYiA9PSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtUGFuLmdldFZhbHVlKGZhbHNlKSA+IDAuNSlcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bVBhbi5nZXRWYWx1ZSh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEluaXRpYWxpemUgZnJvbSAnLi9Jbml0aWFsaXplJztcclxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29yZS9VdGlsJztcclxuaW1wb3J0IHsgTUVBU1VSRSB9IGZyb20gJy4uL2VtaXR0ZXIvY29uc3QnO1xyXG5pbXBvcnQgUG9sYXIyRCBmcm9tICcuLi9tYXRoL1BvbGFyMkQnO1xyXG5pbXBvcnQgeyByYW5kb21BVG9CLCByYW5kb21GbG9hdGluZyB9IGZyb20gJy4uL21hdGgvTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlbG9jaXR5IGV4dGVuZHMgSW5pdGlhbGl6ZXtcclxuXHRjb25zdHJ1Y3RvcihycGFuLCB0aGFwYW4sIHR5cGUpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5yUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUocnBhbik7XHJcblx0XHR0aGlzLnRoYVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoYXBhbik7XHJcblx0XHR0aGlzLnR5cGUgPSBVdGlsLmluaXRWYWx1ZSh0eXBlLCAndmVjdG9yJyk7XHJcblxyXG5cdFx0Ly8gc3BlZWQgb3B0aW1pemF0aW9uc1xyXG5cdFx0dGhpcy5QT0xBUiA9ICdwb2xhcic7XHJcblx0XHR0aGlzLlAgPSAncCc7XHJcblx0XHR0aGlzLnJQYW5WYWwgPSB0aGlzLnJQYW4uZ2V0VmFsdWUoKTtcclxuXHRcdHRoaXMubm9ybWFsaXplZFBJID0gTWF0aC5QSSAvIDE4MDtcclxuXHR9XHJcblxyXG5cdHJlc2V0KHJwYW4sIHRoYXBhbiwgdHlwZSkge1xyXG5cdFx0dGhpcy5yUGFuID0gVXRpbC5zZXRTcGFuVmFsdWUocnBhbik7XHJcblx0XHR0aGlzLnRoYVBhbiA9IFV0aWwuc2V0U3BhblZhbHVlKHRoYXBhbik7XHJcblx0XHR0aGlzLnR5cGUgPSBVdGlsLmluaXRWYWx1ZSh0eXBlLCAndmVjdG9yJyk7XHJcblx0fVxyXG5cclxuXHRub3JtYWxpemVWZWxvY2l0eSh2cikge1xyXG5cdFx0cmV0dXJuIHZyICogTUVBU1VSRTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUodGFyZ2V0KSB7XHJcblx0XHRpZiAodGhpcy50eXBlID09IHRoaXMuUCB8fCB0aGlzLnR5cGUgPT0gdGhpcy5QIHx8IHRoaXMudHlwZSA9PSB0aGlzLlBPTEFSKSB7XHJcblx0XHRcdGNvbnN0IHRoYVBhbk5vcm0gPSByYW5kb21BVG9CKHRoaXMudGhhUGFuLmEsIHRoaXMudGhhUGFuLmIpKnRoaXMubm9ybWFsaXplZFBJO1xyXG5cdFx0XHRjb25zdCBwb2xhcjJkID0gbmV3IFBvbGFyMkQodGhpcy5ub3JtYWxpemVWZWxvY2l0eSh0aGlzLnJQYW5WYWwpLCB0aGFQYW5Ob3JtKTtcclxuXHRcdFx0dGFyZ2V0LnYueCA9IHBvbGFyMmQuZ2V0WCgpO1xyXG5cdFx0XHR0YXJnZXQudi55ID0gcG9sYXIyZC5nZXRZKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0YXJnZXQudi54ID0gdGhpcy5ub3JtYWxpemVWZWxvY2l0eSh0aGlzLnJQYW4uZ2V0VmFsdWUoKSk7XHJcblx0XHRcdHRhcmdldC52LnkgPSB0aGlzLm5vcm1hbGl6ZVZlbG9jaXR5KHRoaXMudGhhUGFuLmdldFZhbHVlKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImltcG9ydCBSYXRlIGZyb20gJy4vUmF0ZSc7XHJcbmltcG9ydCBWZWxvY2l0eSBmcm9tICcuL1ZlbG9jaXR5JztcclxuaW1wb3J0IExpZmUgZnJvbSAnLi9MaWZlJztcclxuaW1wb3J0IE1hc3MgZnJvbSAnLi9NYXNzJztcclxuaW1wb3J0IFJhZGl1cyBmcm9tICcuL1JhZGl1cyc7XHJcbmltcG9ydCBQb3NpdGlvbiBmcm9tICcuL1Bvc2l0aW9uJztcclxuXHJcbmV4cG9ydCB7IFJhdGUsIFZlbG9jaXR5LCBMaWZlLCBNYXNzLCBSYWRpdXMsIFBvc2l0aW9uIH07IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUFUb0IoYSwgYiwgSU5UKSB7XHJcbiAgaWYgKCFJTlQpXHJcbiAgICByZXR1cm4gKGEgKyBNYXRoLnJhbmRvbSgpICogKGIgLSBhICkpO1xyXG4gIGVsc2VcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYiAtIGEpKSArIGE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21GbG9hdGluZyhjZW50ZXIsIGYsIElOVCkge1xyXG4gIHJldHVybiByYW5kb21BVG9CKGNlbnRlciAtIGYsIGNlbnRlciArIGYsIElOVCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUcmFuc2Zvcm0oYSkge1xyXG4gIHJldHVybiBhICogTWF0aC5QSSAvIDE4MDtcclxufSIsImltcG9ydCB7IEVVTEVSIH0gZnJvbSAnLi4vZW1pdHRlci9jb25zdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1lcmljYWxJbnRlZ3JhdGlvbiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgRVVMRVI7XHJcblxyXG4gICAgdGhpcy5pbnRlZ3JhdGUgPSB0aGlzLmludGVncmF0ZTtcclxuICAgIHRoaXMuZXVsZXJJbnRlZ3JhdGUgPSB0aGlzLmV1bGVySW50ZWdyYXRlO1xyXG4gIH1cclxuXHJcbiAgaW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKSB7XHJcbiAgICB0aGlzLmV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKTtcclxuICB9XHJcblxyXG4gIGV1bGVySW50ZWdyYXRlKHBhcnRpY2xlLCB0aW1lLCBkYW1waW5nKSB7XHJcbiAgICBpZiAoIXBhcnRpY2xlLnNsZWVwKSB7XHJcbiAgICAgIHBhcnRpY2xlLm9sZC5wLmNvcHkocGFydGljbGUucCk7XHJcbiAgICAgIHBhcnRpY2xlLm9sZC52LmNvcHkocGFydGljbGUudik7XHJcbiAgICAgIHBhcnRpY2xlLmEubXVsdGlwbHlTY2FsYXIoMSAvIHBhcnRpY2xlLm1hc3MpO1xyXG4gICAgICBwYXJ0aWNsZS52LmFkZChwYXJ0aWNsZS5hLm11bHRpcGx5U2NhbGFyKHRpbWUpKTtcclxuICAgICAgcGFydGljbGUucC5hZGQocGFydGljbGUub2xkLnYubXVsdGlwbHlTY2FsYXIodGltZSkpO1xyXG4gICAgICBpZiAoZGFtcGluZyl7XHJcbiAgICAgICAgcGFydGljbGUudi5tdWx0aXBseVNjYWxhcihkYW1waW5nKTtcclxuICAgICAgfVxyXG4gICAgICBwYXJ0aWNsZS5hLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBWZWN0b3IyRCBmcm9tICcuL1ZlY3RvcjJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbGFyMkQge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihyLCB0aGEpe1xyXG5cdFx0dGhpcy5yID0gTWF0aC5hYnMocikgfHwgMDtcclxuXHRcdHRoaXMudGhhID0gdGhhIHx8IDA7XHJcblx0fVxyXG5cclxuXHRzZXQociwgdGhhKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHRoaXMudGhhID0gdGhhO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblxyXG5cdH1cclxuXHJcblx0c2V0UihyKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gcjtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHNldFRoYSh0aGEpIHtcclxuXHJcblx0XHR0aGlzLnRoYSA9IHRoYTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0fVxyXG5cclxuXHRjb3B5KHApIHtcclxuXHJcblx0XHR0aGlzLnIgPSBwLnI7XHJcblx0XHR0aGlzLnRoYSA9IHAudGhhO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHR9XHJcblxyXG5cdHRvVmVjdG9yKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLmdldFgoKSwgdGhpcy5nZXRZKCkpO1xyXG5cdH1cclxuXHJcblx0Z2V0WCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnIgKiBNYXRoLnNpbih0aGlzLnRoYSk7XHJcblx0fVxyXG5cclxuXHRnZXRZKCkge1xyXG5cdFx0cmV0dXJuIC10aGlzLnIgKiBNYXRoLmNvcyh0aGlzLnRoYSk7XHJcblx0fVxyXG5cclxuXHRub3JtYWxpemUoKSB7XHJcblxyXG5cdFx0dGhpcy5yID0gMTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0ZXF1YWxzKHYpIHtcclxuXHJcblx0XHRyZXR1cm4gKCh2LnIgPT09IHRoaXMuciApICYmICh2LnRoYSA9PT0gdGhpcy50aGEgKSApO1xyXG5cclxuXHR9XHJcblxyXG5cdHRvQXJyYXkoKSB7XHJcblxyXG5cdFx0cmV0dXJuIFt0aGlzLnIsIHRoaXMudGhhXTtcclxuXHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuciA9IDAuMDtcclxuXHRcdHRoaXMudGhhID0gMC4wO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRjbG9uZSgpIHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFBvbGFyMkQodGhpcy5yLCB0aGlzLnRoYSk7XHJcblxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyByYW5kb21BVG9CLCByYW5kb21GbG9hdGluZyB9IGZyb20gJy4vTWF0aFV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYW57XHJcblx0Y29uc3RydWN0b3IoYSwgYiwgY2VudGVyID0gZmFsc2UpIHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KGEpKSB7XHJcblx0XHRcdHRoaXMuaXNBcnJheSA9IHRydWU7XHJcblx0XHRcdHRoaXMuYSA9IGE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmEgPSBhO1xyXG5cdFx0XHR0aGlzLmIgPSBiIHx8IHRoaXMuYTtcclxuXHRcdFx0dGhpcy5jZW50ZXIgPSBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRWYWx1ZShJTlQpe1xyXG5cdFx0aWYgKHRoaXMuaXNBcnJheSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hW01hdGguZmxvb3IodGhpcy5hLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghdGhpcy5jZW50ZXIpe1xyXG5cdFx0XHRcdHJldHVybiByYW5kb21BVG9CKHRoaXMuYSwgdGhpcy5iLCBJTlQpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXR1cm4gcmFuZG9tRmxvYXRpbmcodGhpcy5hLCB0aGlzLmIsIElOVCk7XHJcblx0XHRcdH1cclxuXHRcdH1cdFxyXG5cdH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkR7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHgsIHkpe1xyXG4gICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgdGhpcy55ID0geSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgc2V0KHgsIHkpIHtcclxuXHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFgoeCkge1xyXG5cclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzZXRZKHkpIHtcclxuXHJcbiAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHNldENvbXBvbmVudChpbmRleCwgdmFsdWUpIHtcclxuXHJcbiAgICBzd2l0Y2ggKCBpbmRleCApIHtcclxuXHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0aGlzLnggPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMueSA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImluZGV4IGlzIG91dCBvZiByYW5nZTogXCIgKyBpbmRleCk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldEdyYWRpZW50KCkge1xyXG4gICAgaWYgKHRoaXMueCAhPSAwKVxyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgICBlbHNlIGlmICh0aGlzLnkgPiAwKVxyXG4gICAgICByZXR1cm4gTWF0aC5QSSAvIDI7XHJcbiAgICBlbHNlIGlmICh0aGlzLnkgPCAwKVxyXG4gICAgICByZXR1cm4gLU1hdGguUEkgLyAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tcG9uZW50KGluZGV4KSB7XHJcblxyXG4gICAgc3dpdGNoICggaW5kZXggKSB7XHJcblxyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW5kZXggaXMgb3V0IG9mIHJhbmdlOiBcIiArIGluZGV4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29weSh2KSB7XHJcblxyXG4gICAgdGhpcy54ID0gdi54O1xyXG4gICAgdGhpcy55ID0gdi55O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGFkZCh2LCB3KSB7XHJcblxyXG4gICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hZGRWZWN0b3JzKHYsIHcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggKz0gdi54O1xyXG4gICAgdGhpcy55ICs9IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRYWShhLCBiKSB7XHJcblxyXG4gICAgdGhpcy54ICs9IGE7XHJcbiAgICB0aGlzLnkgKz0gYjtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBhZGRWZWN0b3JzKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggPSBhLnggKyBiLng7XHJcbiAgICB0aGlzLnkgPSBhLnkgKyBiLnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgYWRkU2NhbGFyKHMpIHtcclxuXHJcbiAgICB0aGlzLnggKz0gcztcclxuICAgIHRoaXMueSArPSBzO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIHN1Yih2LCB3KSB7XHJcblxyXG4gICAgaWYgKHcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJWZWN0b3JzKHYsIHcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnggLT0gdi54O1xyXG4gICAgdGhpcy55IC09IHYueTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBzdWJWZWN0b3JzKGEsIGIpIHtcclxuXHJcbiAgICB0aGlzLnggPSBhLnggLSBiLng7XHJcbiAgICB0aGlzLnkgPSBhLnkgLSBiLnk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbXVsdGlwbHlTY2FsYXIocykge1xyXG5cclxuICAgIHRoaXMueCAqPSBzO1xyXG4gICAgdGhpcy55ICo9IHM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgZGl2aWRlU2NhbGFyKHMpIHtcclxuXHJcbiAgICBpZiAocyAhPT0gMCkge1xyXG5cclxuICAgICAgdGhpcy54IC89IHM7XHJcbiAgICAgIHRoaXMueSAvPSBzO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICB0aGlzLnNldCgwLCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbWluKHYpIHtcclxuXHJcbiAgICBpZiAodGhpcy54ID4gdi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSB2Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPiB2LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgbWF4KHYpIHtcclxuXHJcbiAgICBpZiAodGhpcy54IDwgdi54KSB7XHJcblxyXG4gICAgICB0aGlzLnggPSB2Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPCB2LnkpIHtcclxuXHJcbiAgICAgIHRoaXMueSA9IHYueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xhbXAobWluLCBtYXgpIHtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgbWluIDwgbWF4LCBpZiB0aGlzIGFzc3VtcHRpb24gaXNuJ3QgdHJ1ZSBpdCB3aWxsIG5vdCBvcGVyYXRlIGNvcnJlY3RseVxyXG5cclxuICAgIGlmICh0aGlzLnggPCBtaW4ueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gbWluLng7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnggPiBtYXgueCkge1xyXG5cclxuICAgICAgdGhpcy54ID0gbWF4Lng7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnkgPCBtaW4ueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gbWluLnk7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnkgPiBtYXgueSkge1xyXG5cclxuICAgICAgdGhpcy55ID0gbWF4Lnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIG5lZ2F0ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhcigtMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZG90KHYpIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55O1xyXG5cclxuICB9XHJcblxyXG4gIGxlbmd0aFNxKCkge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XHJcblxyXG4gIH1cclxuXHJcbiAgbGVuZ3RoKCkge1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcclxuXHJcbiAgfVxyXG5cclxuICBub3JtYWxpemUoKSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZGl2aWRlU2NhbGFyKHRoaXMubGVuZ3RoKCkpO1xyXG5cclxuICB9XHJcblxyXG4gIGRpc3RhbmNlVG8odikge1xyXG5cclxuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVRvU3F1YXJlZCh2KSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcm90YXRlKHRoYSkge1xyXG4gICAgdmFyIHggPSB0aGlzLng7XHJcbiAgICB2YXIgeSA9IHRoaXMueTtcclxuICAgIHRoaXMueCA9IHggKiBNYXRoLmNvcyh0aGEpICsgeSAqIE1hdGguc2luKHRoYSk7XHJcbiAgICB0aGlzLnkgPSAteCAqIE1hdGguc2luKHRoYSkgKyB5ICogTWF0aC5jb3ModGhhKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGlzdGFuY2VUb1NxdWFyZWQodikge1xyXG5cclxuICAgIHZhciBkeCA9IHRoaXMueCAtIHYueCwgZHkgPSB0aGlzLnkgLSB2Lnk7XHJcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0TGVuZ3RoKGwpIHtcclxuXHJcbiAgICB2YXIgb2xkTGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcclxuXHJcbiAgICBpZiAob2xkTGVuZ3RoICE9PSAwICYmIGwgIT09IG9sZExlbmd0aCkge1xyXG5cclxuICAgICAgdGhpcy5tdWx0aXBseVNjYWxhcihsIC8gb2xkTGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgfVxyXG5cclxuICBsZXJwKHYsIGFscGhhKSB7XHJcblxyXG4gICAgdGhpcy54ICs9ICh2LnggLSB0aGlzLnggKSAqIGFscGhhO1xyXG4gICAgdGhpcy55ICs9ICh2LnkgLSB0aGlzLnkgKSAqIGFscGhhO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG5cclxuICB9XHJcblxyXG4gIGVxdWFscyh2KSB7XHJcblxyXG4gICAgcmV0dXJuICgodi54ID09PSB0aGlzLnggKSAmJiAodi55ID09PSB0aGlzLnkgKSApO1xyXG5cclxuICB9XHJcblxyXG4gIHRvQXJyYXkoKSB7XHJcblxyXG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XHJcblxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLnggPSAwLjA7XHJcbiAgICB0aGlzLnkgPSAwLjA7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsb25lKCkge1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54LCB0aGlzLnkpO1xyXG5cclxuICB9XHJcbn0iLCJjb25zdCBlYXNpbmcgPSB7XHJcblx0ZWFzZUxpbmVhciA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluUXVhZCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5wb3codmFsdWUsIDIpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRRdWFkIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtKE1hdGgucG93KCh2YWx1ZSAtIDEpLCAyKSAtIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dFF1YWQgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KHZhbHVlLCAyKTtcclxuXHRcdHJldHVybiAtMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlIC0gMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluQ3ViaWMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIE1hdGgucG93KHZhbHVlLCAzKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0Q3ViaWMgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIChNYXRoLnBvdygodmFsdWUgLSAxKSwgMykgKyAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRDdWJpYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3codmFsdWUsIDMpO1xyXG5cdFx0cmV0dXJuIDAuNSAqIChNYXRoLnBvdygodmFsdWUgLSAyKSwgMykgKyAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5RdWFydCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gTWF0aC5wb3codmFsdWUsIDQpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRRdWFydCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLShNYXRoLnBvdygodmFsdWUgLSAxKSwgNCkgLSAxKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRRdWFydCA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gMC41ICogTWF0aC5wb3codmFsdWUsIDQpO1xyXG5cdFx0cmV0dXJuIC0wLjUgKiAoKHZhbHVlIC09IDIpICogTWF0aC5wb3codmFsdWUsIDMpIC0gMik7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluU2luZSA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gLU1hdGguY29zKHZhbHVlICogKE1hdGguUEkgLyAyKSkgKyAxO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRTaW5lIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnNpbih2YWx1ZSAqIChNYXRoLlBJIC8gMikpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dFNpbmUgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICgtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiB2YWx1ZSkgLSAxKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluRXhwbyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKHZhbHVlID09PSAwKSA/IDAgOiBNYXRoLnBvdygyLCAxMCAqICh2YWx1ZSAtIDEpKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlT3V0RXhwbyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKHZhbHVlID09PSAxKSA/IDEgOiAtTWF0aC5wb3coMiwgLTEwICogdmFsdWUpICsgMTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5PdXRFeHBvIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSA9PT0gMClcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHRpZiAodmFsdWUgPT09IDEpXHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIDEwICogKHZhbHVlIC0gMSkpO1xyXG5cdFx0cmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogLS12YWx1ZSkgKyAyKTtcclxuXHR9LFxyXG5cclxuXHRlYXNlSW5DaXJjIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiAtKE1hdGguc3FydCgxIC0gKHZhbHVlICogdmFsdWUpKSAtIDEpO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VPdXRDaXJjIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KCh2YWx1ZSAtIDEpLCAyKSk7XHJcblx0fSxcclxuXHJcblx0ZWFzZUluT3V0Q2lyYyA6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRpZiAoKHZhbHVlIC89IDAuNSkgPCAxKVxyXG5cdFx0XHRyZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHZhbHVlICogdmFsdWUpIC0gMSk7XHJcblx0XHRyZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHZhbHVlIC09IDIpICogdmFsdWUpICsgMSk7XHJcblx0fSxcclxuXHRcclxuXHRlYXNlSW5CYWNrIDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdHZhciBzID0gMS43MDE1ODtcclxuXHRcdHJldHVybiAodmFsdWUpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlIC0gcyk7XHJcblx0fSxcclxuXHJcblx0ZWFzZU91dEJhY2sgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dmFyIHMgPSAxLjcwMTU4O1xyXG5cdFx0cmV0dXJuICggdmFsdWUgPSB2YWx1ZSAtIDEpICogdmFsdWUgKiAoKHMgKyAxKSAqIHZhbHVlICsgcykgKyAxO1xyXG5cdH0sXHJcblxyXG5cdGVhc2VJbk91dEJhY2sgOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0dmFyIHMgPSAxLjcwMTU4O1xyXG5cdFx0aWYgKCh2YWx1ZSAvPSAwLjUpIDwgMSlcclxuXHRcdFx0cmV0dXJuIDAuNSAqICh2YWx1ZSAqIHZhbHVlICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdmFsdWUgLSBzKSk7XHJcblx0XHRyZXR1cm4gMC41ICogKCh2YWx1ZSAtPSAyKSAqIHZhbHVlICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdmFsdWUgKyBzKSArIDIpO1xyXG5cdH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEVhc2luZ0J5TmFtZShuYW1lKSB7XHJcblx0cmV0dXJuIGVhc2luZ1tuYW1lXVxyXG59XHJcbiIsImltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XHJcbmltcG9ydCBDcm9zc1pvbmUgZnJvbSAnLi4vYmVoYXZpb3VyL0Nyb3NzWm9uZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSwgcmFkaXVzKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuXHRcdHRoaXMuYW5nbGUgPSAwO1xyXG5cdFx0dGhpcy5jZW50ZXIgPSB7XHJcblx0XHRcdHggOiB0aGlzLngsXHJcblx0XHRcdHkgOiB0aGlzLnlcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMucmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHRoaXMuYW5nbGUgPSBNYXRoLlBJICogMiAqIE1hdGgucmFuZG9tKCk7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54ICsgdGhpcy5yYW5kb20gKiB0aGlzLnJhZGl1cyAqIE1hdGguY29zKHRoaXMuYW5nbGUpO1xyXG5cdFx0dGhpcy52ZWN0b3IueSA9IHRoaXMueSArIHRoaXMucmFuZG9tICogdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKTtcclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdHNldENlbnRlcih4LCB5KSB7XHJcblx0XHR0aGlzLmNlbnRlci54ID0geDtcclxuXHRcdHRoaXMuY2VudGVyLnkgPSB5O1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdHZhciBkID0gcGFydGljbGUucC5kaXN0YW5jZVRvKHRoaXMuY2VudGVyKTtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuREVBRCkge1xyXG5cdFx0XHRpZiAoZCAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMucmFkaXVzKVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0aWYgKGQgKyBwYXJ0aWNsZS5yYWRpdXMgPj0gdGhpcy5yYWRpdXMpXHJcblx0XHRcdFx0dGhpcy5nZXRTeW1tZXRyaWMocGFydGljbGUpO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHRoaXMuYWxlcnQpIHtcclxuXHRcdFx0XHRhbGVydCgnU29ycnkgQ2lyY2xlWm9uZSBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG1ldGhvZCcpO1xyXG5cdFx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0U3ltbWV0cmljKHBhcnRpY2xlKSB7XHJcblx0XHR2YXIgdGhhMiA9IHBhcnRpY2xlLnYuZ2V0R3JhZGllbnQoKTtcclxuXHRcdHZhciB0aGExID0gdGhpcy5nZXRHcmFkaWVudChwYXJ0aWNsZSk7XHJcblx0XHR2YXIgdGhhID0gMiAqICh0aGExIC0gdGhhMik7XHJcblx0XHR2YXIgb2xkeCA9IHBhcnRpY2xlLnYueDtcclxuXHRcdHZhciBvbGR5ID0gcGFydGljbGUudi55O1xyXG5cdFx0cGFydGljbGUudi54ID0gb2xkeCAqIE1hdGguY29zKHRoYSkgLSBvbGR5ICogTWF0aC5zaW4odGhhKTtcclxuXHRcdHBhcnRpY2xlLnYueSA9IG9sZHggKiBNYXRoLnNpbih0aGEpICsgb2xkeSAqIE1hdGguY29zKHRoYSk7XHJcblx0fVxyXG5cclxuXHRnZXRHcmFkaWVudChwYXJ0aWNsZSkge1xyXG5cdFx0cmV0dXJuIC1NYXRoLlBJIC8gMiArIE1hdGguYXRhbjIocGFydGljbGUucC55IC0gdGhpcy5jZW50ZXIueSwgcGFydGljbGUucC54IC0gdGhpcy5jZW50ZXIueCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50Wm9uZSBleHRlbmRzIFpvbmUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihpbWFnZURhdGEsIHgsIHksIGQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnJlc2V0KGltYWdlRGF0YSwgeCwgeSwgZCk7XHJcblx0fVxyXG5cclxuXHRyZXNldChpbWFnZURhdGEsIHgsIHksIGQpIHtcclxuXHRcdHRoaXMuaW1hZ2VEYXRhID0gaW1hZ2VEYXRhO1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLmQgPSBkIHx8IDI7XHJcblx0XHR0aGlzLnZlY3RvcnMgPSBbXTtcclxuXHRcdHRoaXMuc2V0VmVjdG9ycygpO1xyXG5cdH1cclxuXHJcblx0c2V0VmVjdG9ycygpIHtcclxuXHRcdHZhciBpLCBqO1xyXG5cdFx0dmFyIGxlbmd0aDEgPSB0aGlzLmltYWdlRGF0YS53aWR0aDtcclxuXHRcdHZhciBsZW5ndGgyID0gdGhpcy5pbWFnZURhdGEuaGVpZ2h0O1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW5ndGgxOyBpICs9IHRoaXMuZCkge1xyXG5cdFx0XHRmb3IgKCBqID0gMDsgaiA8IGxlbmd0aDI7IGogKz0gdGhpcy5kKSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gKChqID4+IDApICogbGVuZ3RoMSArIChpID4+IDApKSAqIDQ7XHJcblx0XHRcdFx0aWYgKHRoaXMuaW1hZ2VEYXRhLmRhdGFbaW5kZXggKyAzXSA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMudmVjdG9ycy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0eCA6IGkgKyB0aGlzLngsXHJcblx0XHRcdFx0XHRcdHkgOiBqICsgdGhpcy55XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGdldEJvdW5kKHgsIHkpIHtcclxuXHRcdHZhciBpbmRleCA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcclxuXHRcdGlmICh0aGlzLmltYWdlRGF0YS5kYXRhW2luZGV4ICsgM10gPiAwKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3IuY29weSh0aGlzLnZlY3RvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy52ZWN0b3JzLmxlbmd0aCldKTtcclxuXHR9XHJcblxyXG5cdGdldENvbG9yKHgsIHkpIHtcclxuXHRcdHggLT0gdGhpcy54O1xyXG5cdFx0eSAtPSB0aGlzLnk7XHJcblx0XHR2YXIgaSA9ICgoeSA+PiAwKSAqIHRoaXMuaW1hZ2VEYXRhLndpZHRoICsgKHggPj4gMCkpICogNDtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHIgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2ldLFxyXG5cdFx0XHRnIDogdGhpcy5pbWFnZURhdGEuZGF0YVtpICsgMV0sXHJcblx0XHRcdGIgOiB0aGlzLmltYWdlRGF0YS5kYXRhW2kgKyAyXSxcclxuXHRcdFx0YSA6IHRoaXMuaW1hZ2VEYXRhLmRhdGFbaSArIDNdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y3Jvc3NpbmcocGFydGljbGUpIHtcclxuXHRcdGlmICh0aGlzLmNyb3NzVHlwZSA9PSBcImRlYWRcIikge1xyXG5cdFx0XHRpZiAodGhpcy5nZXRCb3VuZChwYXJ0aWNsZS5wLnggLSB0aGlzLngsIHBhcnRpY2xlLnAueSAtIHRoaXMueSkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gZmFsc2U7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3Jvc3NUeXBlID09IFwiYm91bmRcIikge1xyXG5cdFx0XHRpZiAoIXRoaXMuZ2V0Qm91bmQocGFydGljbGUucC54IC0gdGhpcy54LCBwYXJ0aWNsZS5wLnkgLSB0aGlzLnkpKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnYubmVnYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcclxuaW1wb3J0IENyb3NzWm9uZSBmcm9tICcuLi9iZWhhdmlvdXIvQ3Jvc3Nab25lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgxLCB5MSwgeDIsIHkyLCBkaXJlY3Rpb24pIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0aWYgKHgyIC0geDEgPj0gMCkge1xyXG5cdFx0XHR0aGlzLngxID0geDE7XHJcblx0XHRcdHRoaXMueTEgPSB5MTtcclxuXHRcdFx0dGhpcy54MiA9IHgyO1xyXG5cdFx0XHR0aGlzLnkyID0geTI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLngxID0geDI7XHJcblx0XHRcdHRoaXMueTEgPSB5MjtcclxuXHRcdFx0dGhpcy54MiA9IHgxO1xyXG5cdFx0XHR0aGlzLnkyID0geTE7XHJcblx0XHR9XHJcblx0XHR0aGlzLmR4ID0gdGhpcy54MiAtIHRoaXMueDE7XHJcblx0XHR0aGlzLmR5ID0gdGhpcy55MiAtIHRoaXMueTE7XHJcblx0XHR0aGlzLm1pbnggPSBNYXRoLm1pbih0aGlzLngxLCB0aGlzLngyKTtcclxuXHRcdHRoaXMubWlueSA9IE1hdGgubWluKHRoaXMueTEsIHRoaXMueTIpO1xyXG5cdFx0dGhpcy5tYXh4ID0gTWF0aC5tYXgodGhpcy54MSwgdGhpcy54Mik7XHJcblx0XHR0aGlzLm1heHkgPSBNYXRoLm1heCh0aGlzLnkxLCB0aGlzLnkyKTtcclxuXHRcdHRoaXMuZG90ID0gdGhpcy54MiAqIHRoaXMueTEgLSB0aGlzLngxICogdGhpcy55MjtcclxuXHRcdHRoaXMueHh5eSA9IHRoaXMuZHggKiB0aGlzLmR4ICsgdGhpcy5keSAqIHRoaXMuZHk7XHJcblx0XHR0aGlzLmdyYWRpZW50ID0gdGhpcy5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dGhpcy5sZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xyXG5cdFx0dGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgMTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cdFx0dGhpcy5yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0dGhpcy52ZWN0b3IueCA9IHRoaXMueDEgKyB0aGlzLnJhbmRvbSAqIHRoaXMubGVuZ3RoICogTWF0aC5jb3ModGhpcy5ncmFkaWVudCk7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55MSArIHRoaXMucmFuZG9tICogdGhpcy5sZW5ndGggKiBNYXRoLnNpbih0aGlzLmdyYWRpZW50KTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy52ZWN0b3I7XHJcblx0fVxyXG5cclxuXHRjcm9zc2luZyhwYXJ0aWNsZSkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0aWYgKHRoaXMuY3Jvc3NUeXBlID09IENyb3NzWm9uZS5DUk9TU19UWVBFUy5ERUFEKSB7XHJcblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PSAxKSB7XHJcblx0XHRcdFx0dGhpcy5nZXRSYW5nZShwYXJ0aWNsZSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VsZi5nZXREaXJlY3Rpb24ocGFydGljbGUucC54LCBwYXJ0aWNsZS5wLnkpKVxyXG5cdFx0XHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCFzZWxmLmdldERpcmVjdGlvbihwYXJ0aWNsZS5wLngsIHBhcnRpY2xlLnAueSkpXHJcblx0XHRcdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkJPVU5EKSB7XHJcblx0XHRcdHRoaXMuZ2V0UmFuZ2UocGFydGljbGUsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmIChzZWxmLmdldERpc3RhbmNlKHBhcnRpY2xlLnAueCwgcGFydGljbGUucC55KSA8PSBwYXJ0aWNsZS5yYWRpdXMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxmLmR4ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzZWxmLmR5ID09IDApIHtcclxuXHRcdFx0XHRcdFx0cGFydGljbGUudi55ICo9IC0xO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZi5nZXRTeW1tZXRyaWMocGFydGljbGUudik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkNST1NTKSB7XHJcblx0XHRcdGlmICh0aGlzLmFsZXJ0KSB7XHJcblx0XHRcdFx0YWxlcnQoJ1NvcnJ5IGxpbmVab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3MgbWV0aG9kJyk7XHJcblx0XHRcdFx0dGhpcy5hbGVydCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXREaXJlY3Rpb24oeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IEIgPT0gMCA/IDEgOiBCO1xyXG5cdFx0aWYgKChBICogeCArIEIgKiB5ICsgQykgKiBEID4gMClcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0RGlzdGFuY2UoeCwgeSkge1xyXG5cdFx0dmFyIEEgPSB0aGlzLmR5O1xyXG5cdFx0dmFyIEIgPSAtdGhpcy5keDtcclxuXHRcdHZhciBDID0gdGhpcy5kb3Q7XHJcblx0XHR2YXIgRCA9IChBICogeCArIEIgKiB5ICsgQyk7XHJcblx0XHRyZXR1cm4gRCAvIE1hdGguc3FydCh0aGlzLnh4eXkpO1xyXG5cdH1cclxuXHJcblx0Z2V0U3ltbWV0cmljKHYpIHtcclxuXHRcdHZhciB0aGEyID0gdi5nZXRHcmFkaWVudCgpO1xyXG5cdFx0dmFyIHRoYTEgPSB0aGlzLmdldEdyYWRpZW50KCk7XHJcblx0XHR2YXIgdGhhID0gMiAqICh0aGExIC0gdGhhMik7XHJcblx0XHR2YXIgb2xkeCA9IHYueDtcclxuXHRcdHZhciBvbGR5ID0gdi55O1xyXG5cdFx0di54ID0gb2xkeCAqIE1hdGguY29zKHRoYSkgLSBvbGR5ICogTWF0aC5zaW4odGhhKTtcclxuXHRcdHYueSA9IG9sZHggKiBNYXRoLnNpbih0aGEpICsgb2xkeSAqIE1hdGguY29zKHRoYSk7XHJcblx0XHRyZXR1cm4gdjtcclxuXHR9XHJcblxyXG5cdGdldEdyYWRpZW50KCkge1xyXG5cdFx0cmV0dXJuIE1hdGguYXRhbjIodGhpcy5keSwgdGhpcy5keCk7XHJcblx0fVxyXG5cclxuXHRnZXRSYW5nZShwYXJ0aWNsZSwgZnVuKSB7XHJcblx0XHR2YXIgYW5nbGUgPSBNYXRoLmFicyh0aGlzLmdldEdyYWRpZW50KCkpO1xyXG5cdFx0aWYgKGFuZ2xlIDw9IE1hdGguUEkgLyA0KSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnggPCB0aGlzLm1heHggJiYgcGFydGljbGUucC54ID4gdGhpcy5taW54KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgPCB0aGlzLm1heHkgJiYgcGFydGljbGUucC55ID4gdGhpcy5taW55KSB7XHJcblx0XHRcdFx0ZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldExlbmd0aCgpIHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keSlcclxuXHR9XHJcbn0iLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRab25lIGV4dGVuZHMgWm9uZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbigpIHtcclxuXHRcdHRoaXMudmVjdG9yLnggPSB0aGlzLng7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5hbGVydCkge1xyXG5cdFx0XHRhbGVydCgnU29ycnkgUG9pbnRab25lIGRvZXMgbm90IHN1cHBvcnQgY3Jvc3NpbmcgbWV0aG9kJyk7XHJcblx0XHRcdHRoaXMuYWxlcnQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgWm9uZSBmcm9tICcuL1pvbmUnO1xyXG5pbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4uL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdFpvbmUgZXh0ZW5kcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdH1cclxuXHJcblx0Z2V0UG9zaXRpb24oKSB7XHJcblx0XHR0aGlzLnZlY3Rvci54ID0gdGhpcy54ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGg7XHJcblx0XHR0aGlzLnZlY3Rvci55ID0gdGhpcy55ICsgTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnZlY3RvcjtcclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblx0XHRpZiAodGhpcy5jcm9zc1R5cGUgPT0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkRFQUQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHRcdFx0ZWxzZSBpZiAocGFydGljbGUucC54IC0gcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aClcclxuXHRcdFx0XHRwYXJ0aWNsZS5kZWFkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkpXHJcblx0XHRcdFx0cGFydGljbGUuZGVhZCA9IHRydWU7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KVxyXG5cdFx0XHRcdHBhcnRpY2xlLmRlYWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQk9VTkQpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCAtIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdFx0XHRwYXJ0aWNsZS52LnggKj0gLTE7XHJcblx0XHRcdH0gZWxzZSBpZiAocGFydGljbGUucC54ICsgcGFydGljbGUucmFkaXVzID4gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCArIHRoaXMud2lkdGggLSBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdFx0cGFydGljbGUudi54ICo9IC0xO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocGFydGljbGUucC55IC0gcGFydGljbGUucmFkaXVzIDwgdGhpcy55KSB7XHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0IC0gcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRcdHBhcnRpY2xlLnYueSAqPSAtMTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmNyb3NzVHlwZSA9PSBDcm9zc1pvbmUuQ1JPU1NfVFlQRVMuQ1JPU1MpIHtcclxuXHRcdFx0aWYgKHBhcnRpY2xlLnAueCArIHBhcnRpY2xlLnJhZGl1cyA8IHRoaXMueCAmJiBwYXJ0aWNsZS52LnggPD0gMClcclxuXHRcdFx0XHRwYXJ0aWNsZS5wLnggPSB0aGlzLnggKyB0aGlzLndpZHRoICsgcGFydGljbGUucmFkaXVzO1xyXG5cdFx0XHRlbHNlIGlmIChwYXJ0aWNsZS5wLnggLSBwYXJ0aWNsZS5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLndpZHRoICYmIHBhcnRpY2xlLnYueCA+PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueCA9IHRoaXMueCAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHJcblx0XHRcdGlmIChwYXJ0aWNsZS5wLnkgKyBwYXJ0aWNsZS5yYWRpdXMgPCB0aGlzLnkgJiYgcGFydGljbGUudi55IDw9IDApXHJcblx0XHRcdFx0cGFydGljbGUucC55ID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgKyBwYXJ0aWNsZS5yYWRpdXM7XHJcblx0XHRcdGVsc2UgaWYgKHBhcnRpY2xlLnAueSAtIHBhcnRpY2xlLnJhZGl1cyA+IHRoaXMueSArIHRoaXMuaGVpZ2h0ICYmIHBhcnRpY2xlLnYueSA+PSAwKVxyXG5cdFx0XHRcdHBhcnRpY2xlLnAueSA9IHRoaXMueSAtIHBhcnRpY2xlLnJhZGl1cztcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJpbXBvcnQgQ3Jvc3Nab25lIGZyb20gJy4uL2JlaGF2aW91ci9Dcm9zc1pvbmUnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi4vbWF0aC9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab25lIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnZlY3RvciA9IG5ldyBWZWN0b3IyRCgwLCAwKTtcclxuXHRcdHRoaXMucmFuZG9tID0gMDtcclxuXHRcdHRoaXMuY3Jvc3NUeXBlID0gQ3Jvc3Nab25lLkNST1NTX1RZUEVTLkRFQUQ7XHJcblx0XHR0aGlzLmFsZXJ0ID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdGNyb3NzaW5nKHBhcnRpY2xlKSB7XHJcblxyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=