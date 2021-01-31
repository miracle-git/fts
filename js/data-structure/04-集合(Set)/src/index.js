// webpack-dev-server
import Set from './set'

const set = new Set()
set.add('aaa')
set.add('aaa')
set.add('bbb')
set.add('ccc')
console.log(set.values())                  // ["aaa", "bbb", "ccc"]
set.remove('aaa')
set.remove('aaa')
console.log(set.values())                  // ["bbb", "ccc"]
console.log(set.has('aaa'))          // false
console.log(set.has('bbb'))          // true
console.log(set.size())                    // 2
set.clear()
console.log(set.size())                    // 0

const setA = new Set()
const setB = new Set()
setA.add('aaa')
setA.add('abc')
setA.add('acb')
setB.add('bbb')
setB.add('abc')
console.log(setA.union(setB).values())      // ["aaa", "abc", "acb", "bbb"]
console.log(setA.intersect(setB).values())  // ["abc"]
console.log(setA.diff(setB).values())       // ["aaa", "acb"]
console.log(setA.subset(setB))              // false
setA.remove('aaa')
setA.remove('acb')
console.log(setA.subset(setB))              // true