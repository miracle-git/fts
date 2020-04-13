namespace components {
  export class Content {
    constructor() {
      const el = document.createElement('div')
      el.innerHTML = 'This is Content'
      document.body.appendChild(el)
    }
  }
}