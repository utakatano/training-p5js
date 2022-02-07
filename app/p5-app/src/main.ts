import './style.css'
import p5 from 'p5'
import { setup, draw } from './examples/simulate/brownian-motion'

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

  // p.mousePressed = () => {
  //   mousePressed()
  // }

  // p.mouseReleased = () => {
  //   mouseReleased()
  // }

  // p.keyReleased = () => {
  //   keyReleased(p)
  // }

  // p.mouseDragged = () => {
  //   mouseDragged(p)
  // }
}


new p5(sketch)