import Initialize from './Initialize';
import Util from '../core/Util';
import { MEASURE } from '../emitter/const';
import Polar2D from '../math/Polar2D';

export default class Velocity extends Initialize{
	constructor(rpan, thapan, type) {
		super();

		this.rPan = Util.setSpanValue(rpan);
		this.thaPan = Util.setSpanValue(thapan);
		this.type = Util.initValue(type, 'vector');
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
		if (this.type == 'p' || this.type == 'P' || this.type == 'polar') {
			const polar2d = new Polar2D(this.normalizeVelocity(this.rPan.getValue()), this.thaPan.getValue() * Math.PI / 180);
			target.v.x = polar2d.getX();
			target.v.y = polar2d.getY();
		} else {
			target.v.x = this.normalizeVelocity(this.rPan.getValue());
			target.v.y = this.normalizeVelocity(this.thaPan.getValue());
		}
	}
}