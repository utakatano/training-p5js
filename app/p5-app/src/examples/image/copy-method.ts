import p5 from "p5";

let draft: p5.Image
let ready: p5.Image

export const preload = (p: p5) => {
  ready = p.loadImage('/assets/parrot-color.png')  
  draft = p.loadImage('/assets/parrot-bw.png')  
}

export const setup = (p: p5) => {
  p.createCanvas(600, 400)
  p.noCursor()
  p.cursor('/assets/brush.png', 20, -10)
  p.image(ready, 0, 0)
  p.image(draft, 0, 0)
}

export const mouseDragged = (p: p5) => {
  p.copy(ready, p.mouseX, p.mouseY, 20, 20, p.mouseX, p.mouseY, 20, 20)
}