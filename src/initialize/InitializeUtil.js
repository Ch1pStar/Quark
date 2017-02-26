import Initialize from './Initialize';
import { degreeTransform } from '../math/MathUtils';
import * as Util from '../core/Util';

export default function initialize(emitter, particle, initializes) {
  const length = initializes.length;
  for (let i = 0; i < length; i++) {
    if (initializes[i] instanceof Initialize){
      initializes[i].init(emitter, particle);
    } else {
      init(emitter, particle, initializes[i]);
    }
  }

  bindEmitter(emitter, particle);
}


function init(emitter, particle, initialize){
  Util.setPrototypeByObject(particle, initialize);
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