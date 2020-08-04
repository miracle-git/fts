// webpack-dev-server
class Memento {
  constructor(content) {
    this.content = content
  }
  getContent() {
    return this.content
  }
}

class MementoList {
  constructor() {
    this.list = []
  }
  add(memento) {
    this.list.push(memento)
  }
  get(index) {
    return this.list[index]
  }
}

class Editor {
  constructor() {
    this.content = ''
  }
  getContent() {
    return this.content
  }
  setContent(content) {
    this.content = content
  }
  saveContentToMemento() {
    return new Memento(this.content)
  }
  getContentFromMemento(memento) {
    this.content = memento.getContent()
  }
}

const editor = new Editor()
const mementos = new MementoList()

editor.setContent('111')
editor.setContent('222')
mementos.add(editor.saveContentToMemento())
editor.setContent('333')
mementos.add(editor.saveContentToMemento())
editor.setContent('444')

console.log(editor.getContent())
editor.getContentFromMemento(mementos.get(1))
console.log(editor.getContent())
editor.getContentFromMemento(mementos.get(0))
console.log(editor.getContent())
