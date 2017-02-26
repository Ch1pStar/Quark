import Initialize from './Initialize';
import Util from '../core/Util';

export default class Life extends Initialize{

	constructor(a, b, c) {
		super();

		this.lifePan = Util.setSpanValue(a, b, c);
	}

	initialize(target) {
		if (this.lifePan.a == Infinity){
			target.life = Infinity;
		}else{
			target.life = this.lifePan.getValue();	
		}
	}
}