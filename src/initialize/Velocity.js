import Initialize from './Initialize';
import Util from '../core/Util';
import { MEASURE } from '../emitter/const';
import Polar2D from '../math/Polar2D';
import { randomAToB, randomFloating } from '../math/MathUtils';

export default class Velocity extends Initialize{
	constructor(rpan, thapan, type) {
		super();

		this.rPan = Util.setSpanValue(rpan);
		this.thaPan = Util.setSpanValue(thapan);
		this.type = Util.initValue(type, 'vector');

		// speed optimizations
		this.POLAR = 'polar';
		this.P = 'p';
		this.rPanVal = this.rPan.getValue();
		this.normalizedPI = Math.PI / 180;
	}

	reset(rpan, thapan, type) {
		this.rPan = Util.setSpanValue(rpan);
		this.thaPan = Util.setSpanValue(thapan);
		this.type = Util.initValue(type, 'vector');
	}

	normalizeVelocity(vr) {
		return vr * MEASURE;
	}

	initialize(target) {
		if (this.type == this.P || this.type == this.P || this.type == this.POLAR) {
			const thaPanNorm = randomAToB(this.thaPan.a, this.thaPan.b)*this.normalizedPI;
			const polar2d = new Polar2D(this.normalizeVelocity(this.rPanVal), thaPanNorm);
			target.v.x = polar2d.getX();
			target.v.y = polar2d.getY();
		} else {
			target.v.x = this.normalizeVelocity(this.rPan.getValue());
			target.v.y = this.normalizeVelocity(this.thaPan.getValue());
		}
	}
}