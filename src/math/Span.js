import { randomAToB, randomFloating } from './MathUtils';

export default class Span{
	constructor(a, b, center = false) {
		if (Array.isArray(a)) {
			this.isArray = true;
			this.a = a;
		} else {
			this.a = a;
			this.b = b || this.a;
			this.center = center;
		}
	}

	getValue(INT){
		if (this.isArray) {
			return this.a[Math.floor(this.a.length * Math.random())];
		} else {
			if (!this.center){
				return randomAToB(this.a, this.b, INT);
			}else{
				return randomFloating(this.a, this.b, INT);
			}
		}	
	}

}