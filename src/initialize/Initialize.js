export default class Initialize {
	constructor() {

	}

	reset() {

	}

	init(emitter, particle) {
		if (particle) {
			this.initialize(particle);
		} else {
			this.initialize(emitter);
		}
	}

	initialize() {

	}
}