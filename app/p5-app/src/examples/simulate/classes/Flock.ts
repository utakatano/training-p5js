import { Boid } from "./Boid";

export class Flock {
  boids: Boid[] = []
  constructor() {}
  run() {
    for (let i = 0; i < this.boids.length; i++) {
      this.boids[i].run(this.boids)
    }
  }
  addBoid(boid: Boid) {
    this.boids.push(boid)
  }
}