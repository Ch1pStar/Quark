const {Life, Emitter, Velocity, getSpan} = window.Quark
const {Application, Texture, Container, Sprite} = window.PIXI;

class Demo {

	constructor() {
		const stage = new Container();
		const particleContainer = new Container();
		const txt = Texture.fromImage('../_assets/p4.png');
		const app = new Application({
			backgroundColor: 0x666666,
		});

		stage.addChild(particleContainer);

		document.body.appendChild(app.view);
		this.app = app;
		this.stage = stage;
		this.txt = txt;
		this.particleContainer = particleContainer;

		this.createEmitter();

		this.draw = this.draw.bind(this);
		this.draw();
	}

	createEmitter() {
		const emitter = new Emitter();

		window.emitter = emitter;
		emitter.p.x = 400;
		emitter.p.y = 300;

		emitter.addInitialize(new Velocity(2, getSpan(0, 360), 'polar'));
		emitter.emit();

		emitter.particleCreated.add((particle) => {
		  const sp = new Sprite(this.txt);

		  particle.sprite = sp;
		  this.particleContainer.addChild(sp);
		});

		emitter.particleUpdate.add((particle) => {
		  const sp = particle.sprite;
		  sp.position.x = particle.p.x;
		  sp.position.y = particle.p.y;
		  // sp.scale.x = particle.scale/2;
		  // sp.scale.y = particle.scale/2;
		  // sp.anchor.x = 0.5;
		  // sp.anchor.y = 0.5;
		  // sp.alpha = particle.alpha;
		  // sp.rotation = particle.rotation*Math.PI/180;
		});

		emitter.particleDead.add((particle) => {
			this.particleContainer.removeChild(particle.sprite);
		});

		this.emitter = emitter;
	}

	draw(t){
		requestAnimationFrame(this.draw);
		this.app.renderer.render(this.stage);
    	if(this.emitter) this.emitter.update(0.0167);

		// particleCountText.text = particleContainer.children.length;
	}

}


document.addEventListener('DOMContentLoaded', () => window.demo = new Demo);