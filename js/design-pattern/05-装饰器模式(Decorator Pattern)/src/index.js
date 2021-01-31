// webpack-dev-server
class Circle {
  draw() {
    console.log('画一个圆形')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.addRedColor()
  }
  addRedColor() {
    console.log('添加红色边框')
  }
}

const circle = new Circle()
circle.draw()
const decorator = new Decorator(circle)
decorator.draw()
