import Initialize from './Initialize';
import { degreeTransform } from '../math/MathUtils';
import Util from '../core/Util';

export default function initialize(emitter, particle, initializes) {
  const length = initializes.length;
  for (let i = 0; i < length; i++) {
    const initialize = initializes[i];
    if (initialize instanceof Initialize){
      initialize.init(emitter, particle);
    } else {
      init(emitter, particle, initialize);
    }
  }

  bindEmitter(emitter, particle);
}


function init(emitter, particle, initialize){
  Util.setVector2DByObject(particle, initialize);
}

function bindEmitter(emitter, particle) {
  if (emitter.bindEmitter) {
    particle.p.add(emitter.p);
    particle.v.add(emitter.v);
    particle.a.add(emitter.a);
    particle.v.rotate(degreeTransform(emitter.rotation));
  }
}