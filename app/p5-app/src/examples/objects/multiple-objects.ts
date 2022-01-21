import p5 from "p5";
import { Jitter } from "./classes/Jitter";

let bug1: Jitter
let bug2: Jitter
let bug3: Jitter
let bug4: Jitter

export const setup = (p: p5) => {
  p.createCanvas(710, 400)  
  bug1 = new Jitter(p)
  bug2 = new Jitter(p)
  bug3 = new Jitter(p)
  bug4 = new Jitter(p)
}

export const draw = (p: p5) => {
  p.background(50, 89, 100)

  const bugArray = [bug1, bug2, bug3, bug4]
  bugArray.forEach((bug) => {
    bug.move()
    bug.display()  
  })
}