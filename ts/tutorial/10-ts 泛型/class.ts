// 类泛型
interface DataItem {
  name: string
}
class DataList<
    T extends string | number,
    K extends DataItem> {
  constructor(
    private data: T[],
    private item: K) {}
  getItem(index: number): T {
    return this.data[index]
  }
  getItemName(): string {
    return this.item.name
  }
}
// 实例化
const list = new DataList(['a', 'b', 'c'], { name: 'Miracle' })
console.log(list.getItem(1)) // b
console.log(list.getItemName()) // Miracle
