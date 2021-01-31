// 使用in语法
import { Bird, Dog } from './type'
// 测试联合类型
function training(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing()
  } else {
    animal.bark()
  }
}