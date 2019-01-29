// constants
export const POOL_MAX = 1000;
export const TIME_STEP = 60;
export const USE_CLOCK = false;
export const MEASURE = 100;

// integration types
export const EULER = 'euler';
export const RK2 = 'runge-kutta2';
export const RK4 = 'runge-kutta4';
export const VERLET = 'verlet';

// events
export const PARTICLE_CREATED = 'partilcleCreated';
export const PARTICLE_UPDATE = 'partilcleUpdate';
export const PARTICLE_SLEEP = 'particleSleep';
export const PARTICLE_DEAD = 'partilcleDead';
export const EMITTER_ADDED = 'emitterAdded';
export const EMITTER_REMOVED = 'emitterRemoved';
