// webpack-dev-server
import LinkedList from './linked-list'

const list = new LinkedList()
list.append('aaa')
list.append('bbb')
list.append('ccc')
console.log(list.toString())            // aaa->bbb->ccc
list.insert(0, 'ddd')
list.insert(3, 'eee')
list.insert(5, 'fff')
console.log(list.toString())            // ddd->aaa->bbb->eee->ccc->fff
console.log(list.get(0))                // ddd
console.log(list.get(3))                // eee
console.log(list.get(5))                // fff
console.log(list.indexOf('ddd'))  // 0
console.log(list.indexOf('eee'))  // 3
console.log(list.indexOf('fff'))  // 5
console.log(list.indexOf('abc'))  // -1
list.update(2, 'abc')
console.log(list.toString())            // ddd->aaa->abc->eee->ccc->fff
list.removeAt(2)
console.log(list.toString())            // ddd->aaa->eee->ccc->fff
list.remove('ccc')
console.log(list.toString())            // ddd->aaa->eee->fff