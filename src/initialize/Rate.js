import Util from '../core/Util';

export default class Rate{

  constructor(numpan, timepan) {
    this.numPan = numpan
    this.timePan = timepan;
    this.numPan = Util.setSpanValue(this.numPan);
    this.timePan = Util.setSpanValue(this.timePan);
    this.startTime = 0;
    this.nextTime = 0;
    this.init();  
  }

  init() {
    this.startTime = 0;
    this.nextTime = this.timePan.getValue(); 
  }

  getValue(time) {
    this.startTime += time;
    if (this.startTime >= this.nextTime) {
      this.startTime = 0;
      this.nextTime = this.timePan.getValue();
      if (this.numPan.b == 1) {
        if (this.numPan.getValue(false) > 0.5)
          return 1;
        else
          return 0;
      } else {
        return this.numPan.getValue(true);
      }
    }
    return 0;
  }
}