import './style.css'
import p5 from 'p5'
import { setup } from './examples/form-shape-primitives'

const sketch = (p: p5) => {
  p.setup = () => {
    setup(p)
  }

  // p.draw = () => {
  //   draw(p)
  // }

  // p.mousePressed = () => {
  //   mousePressed(p)
  // }
}


new p5(sketch)