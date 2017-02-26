import Initialize from './Initialize';
import Util from '../core/Util';

export default class Position extends Initialize{

    constructor(zone) {
    	super();

		this.zone = zone || new PointZone();
    }

    reset(zone){
		this.zone = zone || new PointZone();
    }

    initialize(target) {
		this.zone.getPosition();
		target.p.x = this.zone.vector.x;
		target.p.y = this.zone.vector.y;
	}
}