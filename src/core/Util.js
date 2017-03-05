import Vector2D from '../math/Vector2D';
import Span from '../math/Span';

export default {

    /**
     * Returns the default if the value is null or undefined
     *
     * @memberof Quark#Quark.Util
     * @method initValue
     *
     * @param {Mixed} value a specific value, could be everything but null or undefined
     * @param {Mixed} defaults the default if the value is null or undefined
     */
    initValue: function(value, defaults) {
        var value = (value != null && value != undefined) ? value : defaults;
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
    getVector2D: function(postionOrX, y) {
        if (typeof(postionOrX) == 'object') {
            return postionOrX;
        } else {
            var vector2d = new Vector2D(postionOrX, y);
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
    judgeVector2D: function(pOBJ) {
        var result = '';
        if (pOBJ.hasOwnProperty('x') || pOBJ.hasOwnProperty('y') || pOBJ.hasOwnProperty('p') || pOBJ.hasOwnProperty('position'))
            result += 'p';
        if (pOBJ.hasOwnProperty('vx') || pOBJ.hasOwnProperty('vx') || pOBJ.hasOwnProperty('v') || pOBJ.hasOwnProperty('velocity'))
            result += 'v';
        if (pOBJ.hasOwnProperty('ax') || pOBJ.hasOwnProperty('ax') || pOBJ.hasOwnProperty('a') || pOBJ.hasOwnProperty('accelerate'))
            result += 'a';

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
    setVector2DByObject: function(target, pOBJ) {
        if (pOBJ.hasOwnProperty('x'))
            target.p.x = pOBJ['x'];

        if (pOBJ.hasOwnProperty('y'))
            target.p.y = pOBJ['y'];

        if (pOBJ.hasOwnProperty('vx'))
            target.v.x = pOBJ['vx'];

        if (pOBJ.hasOwnProperty('vy'))
            target.v.y = pOBJ['vy'];

        if (pOBJ.hasOwnProperty('ax'))
            target.a.x = pOBJ['ax'];

        if (pOBJ.hasOwnProperty('ay'))
            target.a.y = pOBJ['ay'];

        if (pOBJ.hasOwnProperty('p'))
            particle.p.copy(pOBJ['p']);

        if (pOBJ.hasOwnProperty('v'))
            particle.v.copy(pOBJ['v']);

        if (pOBJ.hasOwnProperty('a'))
            particle.a.copy(pOBJ['a']);

        if (pOBJ.hasOwnProperty('position'))
            particle.p.copy(pOBJ['position']);

        if (pOBJ.hasOwnProperty('velocity'))
            particle.v.copy(pOBJ['velocity']);

        if (pOBJ.hasOwnProperty('accelerate'))
            particle.a.copy(pOBJ['accelerate']);
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
    setSpanValue: function(a, b, c) {
        if (a.constructor === Span) {
            return a;
        } else {
            if (!b) {
                return new Span(a);
            } else {
                if (!c)
                    return new Span(a, b);
                else
                    return new Span(a, b, c);
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
    getSpanValue: function(pan) {
        if (pan.constructor === Span)
            return pan.getValue();
        else
            return pan;
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
    hexToRGB: function(h) {
        var hex16 = (h.charAt(0) == "#") ? h.substring(1, 7) : h;
        var r = parseInt(hex16.substring(0, 2), 16);
        var g = parseInt(hex16.substring(2, 4), 16);
        var b = parseInt(hex16.substring(4, 6), 16);

        return {
            r: r,
            g: g,
            b: b
        }
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
    rgbToHex: function(rbg) {
        return 'rgb(' + rbg.r + ', ' + rbg.g + ', ' + rbg.b + ')';
    }
}


