import p5 from "p5";

export class Spring {
  p: p5
  x_pos: number
  y_pos: number
  size: number
  over = false
  move = false
  mass: number
  k: number
  damp: number
  reset_posx: number
  reset_posy: number
  velx = 0.0
  vely = 0.0
  accel = 0
  force = 0
  friends: Spring[]
  id: number

  static num = 3

  constructor(
    p: p5, 
    _x: number, 
    _y: number,
    _s: number,
    _d: number,
    _m: number,
    _k_in: number,
    _others: Spring[],
    _id: number
  ) {
    this.p = p
    this.x_pos = _x
    this.y_pos = _y
    this.size = _s
    this.mass = _m
    this.k = _k_in
    this.damp = _d
    this.reset_posx = _x
    this.reset_posy = _y
    this.friends = _others
    this.id = _id
  }

  update() {
    if (this.move) {
      this.reset_posy = this.p.mouseY
      this.reset_posx = this.p.mouseX
    }
    this.force = -this.k * (this.y_pos - this.reset_posy)
    this.accel = this.force / this.mass
    this.vely = this.damp * (this.vely + this.accel)
    this.y_pos += this.vely

    this.force = -this.k * (this.x_pos - this.reset_posx)
    this.accel = this.force / this.mass
    this.velx = this.damp * (this.velx + this.accel)
    this.x_pos += this.velx

    if ((this.overEvent() || this.move) && !(this.otherOver())) {
      this.over = true
    } else {
      this.over = false
    }
  }

  overEvent() {
    const disX = this.x_pos - this.p.mouseX
    const disY = this.y_pos - this.p.mouseY
    const dis = this.p.createVector(disX, disY)
    if (dis.mag() < this.size / 2) {
      return true
    }
    return false
  }

  otherOver() {
    for (let i = 0; i < Spring.num; i++) {
      if (i !== this.id) {
        if (this.friends[i].over === true) {
          return true
        }
      }
    }
    return false
  }

  display() {
    this.p.fill(this.over ? 153 : 255)
    this.p.ellipse(this.x_pos, this.y_pos, this.size, this.size)
  }

  pressed() {
    this.move = this.over ? true : false
  }

  released() {
    this.move = false
    this.reset_posx = this.y_pos
    this.reset_posy = this.y_pos
  }
}