import p5 from "p5";

export class MRect {
  p: p5
  w: number
  xpos: number
  h: number
  ypos: number
  d: number
  t: number

  constructor(p: p5, iw: number, ixp: number, ih: number, iyp: number, id: number, it: number) {
    this.p = p
    this.w = iw
    this.xpos = ixp
    this.h = ih
    this.ypos = iyp
    this.d = id
    this.t = it
  }

  move(posX: number, posY: number, damping: number) {
    let dif = this.ypos - posY
    if (this.p.abs(dif) > 1) {
      this.ypos -= dif / damping
    }
    dif = this.xpos - posX
    if (this.p.abs(dif) > 1) {
      this.xpos -= dif / damping
    }
  }

  display() {
    for(let i = 0; i < this.t; i++) {
      this.p.rect(
        this.xpos + i * (this.d + this.w),
        this.ypos,
        this.w,
        this.p.height * this.h
      )
    }
  }
}