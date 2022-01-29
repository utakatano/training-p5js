import p5 from "p5";
import { Boid } from "./classes/Boid";
import { Flock } from "./classes/Flock";

let flock: Flock

export const setup = (p: p5) => {
  p.createCanvas(640, 360)
  p.createP('Drag the mouse to generate new boids')

  flock = new Flock()
  for (let i = 0; i < 100; i++) {
    const b = new Boid(p, p.width / 2, p.height / 2)
    flock.addBoid(b)
  }
}

export const draw = (p: p5) => {
  p.background(51)
  flock.run()
}