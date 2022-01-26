import p5 from "p5"
import { Liquid } from "./classes/Liquid"
import { Mover } from "./classes/Mover"

const movers: Mover[] = []
let liquid: Liquid

const reset = (p: p5) => {
  for (let i = 0; i < 9; i++) {
    movers[i] = new Mover(p, p.random(0.5, 3), 40 + i * 70, 0)
  }
}

export const setup = (p: p5) => {
  p.createCanvas(640, 360)
  reset(p)
  liquid = new Liquid(p, 0, p.height / 2, p.width, p.height / 2, 0.1)
}

export const draw = (p: p5) => {
  p.background(127)
  liquid.display()

  for(let i = 0; i < movers.length; i++) {
    if (liquid.contains(movers[i])) {
      const dragForce = liquid.calculateDrag(movers[i])
      movers[i].applyForce(dragForce)
    }

    const gravity = p.createVector(0, 0.1 * movers[i].mass)
    movers[i].applyForce(gravity)

    movers[i].update()
    movers[i].display()
    movers[i].checkEdges()
  }
}