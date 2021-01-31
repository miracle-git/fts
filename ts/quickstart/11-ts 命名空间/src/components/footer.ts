namespace components {
  export class Footer {
    constructor() {
      const el = document.createElement('div')
      el.innerHTML = 'This is Footer'
      document.body.appendChild(el)
    }
  }
}