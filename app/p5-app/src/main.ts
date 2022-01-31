import './style.css'
import p5 from 'p5'
import { setup, draw, mousePressed } from './examples/simulate/game-of-life'

const sketch = (p: p5) => {
  // p.preload = () => {
  //   preload(p)
  // }

  p.setup = () => {
    setup(p)
  }

  p.draw = () => {
    draw(p)
  }

  p.mousePressed = () => {
    mousePressed(p)
  }

  // p.mouseDragged = () => {
  //   mouseDragged(p)
  // }
}


new p5(sketch)