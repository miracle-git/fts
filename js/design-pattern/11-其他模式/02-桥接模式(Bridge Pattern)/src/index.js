// webpack-dev-server
class Color {
  constructor(name) {
    this.name = name
  }
}

class Shape {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  draw() {
    console.log(`${this.color.name} ${this.name}`)
  }
}

const red = new Color('红色')
const yellow = new Color('绿色')
const circle = new Shape('圆形', red)
circle.draw()
const triangle = new Shape('三角形', yellow)
triangle.draw()
