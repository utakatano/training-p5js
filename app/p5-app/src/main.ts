import './style.css'
import p5 from 'p5'
import { setup, draw, mousePressed } from './examples/control/logical-operators-2'

const sketch = (p: p5) => {
  p.setup = () => {
    setup(p)
  }

  p.draw = () => {
    draw(p)
  }

  p.mousePressed = () => {
    mousePressed()
  }
}


new p5(sketch)