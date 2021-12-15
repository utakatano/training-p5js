import './style.css'
import p5 from 'p5'
import { preload, setup, mouseDragged } from './examples/image/copy-method'

const sketch = (p: p5) => {
  p.preload = () => {
    preload(p)
  }

  p.setup = () => {
    setup(p)
  }

  // p.draw = () => {
  //   draw(p)
  // }

  // p.mousePressed = () => {
  //   mousePressed()
  // }

  p.mouseDragged = () => {
    mouseDragged(p)
  }
}


new p5(sketch)