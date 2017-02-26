import Initialize from './Initialize';
import Util from '../core/Util';

export default class Radius extends Initialize{

    constructor(a, b, c) {
    	super();

		this.radius = Util.setSpanValue(a, b, c);
    }

    reset(a, b, c){
		this.radius = Util.setSpanValue(a, b, c);
    }

    initialize(particle) {
		particle.radius = this.radius.getValue();
		particle.transform.oldRadius = particle.radius;
	}
}