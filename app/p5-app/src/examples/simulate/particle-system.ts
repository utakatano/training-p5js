import p5 from "p5";
import { ParticleSystem } from "./classes/ParticleSystem";

let system: ParticleSystem

export const setup = (p: p5) => {
  p.createCanvas(720, 400)
  system = new ParticleSystem(p, p.createVector(p.width / 2, 50))
}

export const draw = (p: p5) => {
  p.background(51)
  system.addParticle()
  system.run()
}