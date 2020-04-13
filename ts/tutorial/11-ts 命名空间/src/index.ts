/// <reference path="./components/header.ts"/>
/// <reference path="./components/content.ts"/>
/// <reference path="./components/footer.ts"/>

namespace home {
  export class Page {
    constructor() {
      new components.Header()
      new components.Content()
      new components.Footer()
    }
  }
  // 定义子命名空间
  export namespace sub {
    export const name = 'Miracle'
  }
}
