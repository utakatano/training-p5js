import p5 from "p5";
import { MRect } from "./classes/MRect";

let r1: MRect
let r2: MRect
let r3: MRect
let r4: MRect

export const setup = (p: p5) => {
  p.createCanvas(710, 400)
  p.fill(255, 204)
  p.noStroke()
  r1 = new MRect(p, 1, 134.0, 0.532, 0.1 * p.height, 10.0, 60.0)
  r2 = new MRect(p, 2,  44.0, 0.166, 0.3 * p.height,  5.0, 50.0)
  r3 = new MRect(p, 2,  58.0, 0.332, 0.4 * p.height, 10.0, 35.0)
  r4 = new MRect(p, 1, 120.0, 0.0498, 0.9 * p.height, 15.0, 60.0)
}

export const draw = (p: p5) => {
  p.background(0)

  r1.display()
  r2.display()
  r3.display()
  r4.display()

  r1.move(p.mouseX - p.width / 2, p.mouseY + p.height * 0.1, 30)
  r2.move((p.mouseX + p.width * 0.05) % p.width, p.mouseY + p.height * 0.025, 20)
  r3.move(p.mouseX / 4, p.mouseY - p.height * 0.025, 40)
  r4.move(p.mouseX - p.width / 2, p.height - p.mouseY, 50)
}