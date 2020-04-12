// 使用类型断言
import { Bird, Dog } from './type'
// 测试联合类型
function training(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing()
  } else {
    (animal as Dog).bark()
  }
}