import './style.css'
import p5 from 'p5'
import { setup } from './examples/math/operator-precedence'

const sketch = (p: p5) => {
  // p.preload = () => {
  //   preload(p)
  // }

  p.setup = () => {
    setup(p)
  }

  // p.draw = () => {
  //   draw(p)
  // }

  // p.mousePressed = () => {
  //   mousePressed()
  // }

  // p.mouseDragged = () => {
  //   mouseDragged(p)
  // }
}


new p5(sketch)