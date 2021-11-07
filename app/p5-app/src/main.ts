import './style.css'
import p5 from 'p5'

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400)
  }

  p.draw = () => {
    if (p.mouseIsPressed) {
      p.fill(0)
    } else {
      p.fill(255)
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80)
  }
}


new p5(sketch)