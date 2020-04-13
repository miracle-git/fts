declare module 'jquery' {
  // 定义函数
  interface JQueryInstance {
    html: (html: string) => JQueryInstance
  }
  function $(readyFunc: () => void): void
  function $(selector: string): JQueryInstance
  // 定义类及对象
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $
}
