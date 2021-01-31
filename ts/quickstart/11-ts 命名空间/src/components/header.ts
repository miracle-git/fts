namespace components {
  export class Header {
    constructor() {
      const el = document.createElement('div')
      el.innerHTML = 'This is Header'
      document.body.appendChild(el)
    }
  }
}