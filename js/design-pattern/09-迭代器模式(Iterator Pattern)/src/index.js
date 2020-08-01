class Container {
  constructor(list) {
    this.list = list
  }
  getIterator() {
    return new Iterator(this)
  }
}

class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  hasNext() {
    return this.index < this.list.length
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++]
    }
    return null
  }
}

const container = new Container([1, 2, 3, 4, 5])
const iterator = new Iterator(container)

while (iterator.hasNext()) {
  console.log(iterator.next())
}
