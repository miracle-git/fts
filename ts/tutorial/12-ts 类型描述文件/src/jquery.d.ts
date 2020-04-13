// 定义函数
interface JQueryInstance {
  html: (html: string) => JQueryInstance
}
declare function $(readyFunc: () => void): void
declare function $(selector: string): JQueryInstance
// 定义类及对象
declare namespace $ {
  namespace fn {
    class init {}
  }
}
// 使用interface实现重载
/*
interface JQuery {
  (readyFunc: () => void): void
  (selector: string): JQueryInstance
}
// 定义变量
declare var $: JQuery
*/
