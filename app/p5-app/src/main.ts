import './style.css'
import p5 from 'p5'
import {setup, draw} from './examples/setup-and-draw'

const sketch = (p: p5) => {
  p.setup = () => {
    setup(p)
  }

  p.draw = () => {
    draw(p)
  }
}


new p5(sketch)