import p5 from "p5"
import { Mover } from "./Mover"

export class Liquid {
  p: p5
  x: number
  y: number
  w: number
  h: number
  c: number

  constructor(p: p5, x: number, y: number, w: number, h: number, c: number) {
    this.p = p
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c
  }
  contains(m: Mover) {
    const l = m.position
    return l.x > this.x && l.x < this.x + this.w &&
           l.y > this.y && l.y < this.y + this.h
  }
  calculateDrag(m: Mover) {
    const speed = m.velocity.mag()
    const dragMagnitude = this.c * speed * speed

    const dragForce = m.velocity.copy()
    dragForce.mult(-1)

    dragForce.normalize()
    dragForce.mult(dragMagnitude)
    return dragForce
  }
  display() {
    this.p.noStroke()
    this.p.fill(50)
    this.p.rect(this.x, this.y, this.w, this.h)
  }
}