import { EULER } from '../emitter/const';

export default class NumericalIntegration {

  constructor(type) {
    this.type = type || EULER;
  }

  integrate(particle, time, damping) {
    this.eulerIntegrate(particle, time, damping);
  }

  eulerIntegrate(particle, time, damping) {
    if (!particle.sleep) {
      particle.old.p.copy(particle.p);
      particle.old.v.copy(particle.v);
      particle.a.multiplyScalar(1 / particle.mass);
      particle.v.add(particle.a.multiplyScalar(time));
      particle.p.add(particle.old.v.multiplyScalar(time));
      if (damping){
        particle.v.multiplyScalar(damping);
      }
      particle.a.clear();
    }
  }
}
