import Vector2D from '../math/Vector2D';

let uid = 0;

export default class Particle{
    constructor() {
      this.id = uid++;
      this.reset(true);
      this.sprite = null;

      this.update = this.update;
      this.destroy = this.destroy;
    }

    getDirection() {
      return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI);
    }

    reset(init) {
      this.life = Infinity;
      this.age = 0;
      this.energy = 1;
      this.dead = false;
      this.sleep = false;
      this.target = null;
      this.parent = null;
      this.mass = 1;
      this.radius = 10;
      this.alpha = 1;
      this.scale = 1;
      this.rotation = 0;
      this.color = null;
      this.easing = (val) => val;
      this.transform = {}
      if (init) {
        this.p = new Vector2D();
        this.v = new Vector2D();
        this.a = new Vector2D();
        this.old = {
          p : new Vector2D(),
          v : new Vector2D(),
          a : new Vector2D()
        };
        this.behaviours = [];
      } else {
        // delete this.transform;
        this.p.set(0, 0);
        this.v.set(0, 0);
        this.a.set(0, 0);
        this.old.p.set(0, 0);
        this.old.v.set(0, 0);
        this.old.a.set(0, 0);
        this.removeAllBehaviours();
      }

      this.transform.rgb = {
        r : 255,
        g : 255,
        b : 255
      }
      return this;
    }

    update(index, time) {
      const age = this.age + time;

      if(age >= this.life) {
        this.destroy();
        return false;
      }
      this.age = age;

      const length = this.behaviours.length;
      let i;
      for ( i = 0; i < length; i++) {
        if (this.behaviours[i]){
          this.behaviours[i].applyBehaviour(this, time, index)
        }
      }
      const scale = this.easing(this.age / this.life);
      this.energy = Math.max(1 - scale, 0);

      return true;
    }

    addBehaviour(behaviour) {
      this.behaviours.push(behaviour);
      if (behaviour.hasOwnProperty('parents')){
        behaviour.parents.push(this);
      }
      behaviour.initialize(this);
    }

    addBehaviours(behaviours) {
      var length = behaviours.length, i;
      for ( i = 0; i < length; i++) {
        this.addBehaviour(behaviours[i]);
      }
    }

    removeBehaviour(behaviour) {
      var index = this.behaviours.indexOf(behaviour);
      if (index > -1) {
        var behaviour = this.behaviours.splice(index, 1);
        behaviour.parents = null;
      }
    }

    removeAllBehaviours() {
      this.behaviours.length = 0;
    }

    /**
     * Destory this particle
     * @method destroy
     */
    destroy() {
      this.removeAllBehaviours();
      this.energy = 0;
      this.dead = true;
      this.parent = null;
    }
}