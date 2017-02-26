import Initialize from './Initialize';
import Util from '../core/Util';

export default class Mass extends Initialize{

    constructor(a, b, c) {
        super();

        this.massPan = Util.setSpanValue(a, b, c);
    }

    initialize(target) {
        target.mass = this.massPan.getValue();
    }
}