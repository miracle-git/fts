// webpack-dev-server
import Hashtable from './hashtable'

const dict = new Hashtable()
dict.put('name', 'miracle')
dict.put('age', 36)
dict.put('gender', 'male')
console.log(dict.keys())           // ["name", "age", "gender"]
console.log(dict.values())         // ["miracle", 36, "male"]
console.log(dict.size())           // 3
console.log(dict.has('name')) // true
console.log(dict.get('name'))      // miracle
dict.remove('gender')
console.log(dict.size())           // 2
dict.clear()
console.log(dict.size())           // 0