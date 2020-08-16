// webpack-dev-server
import Dictionary from './dictionary'

const dict = new Dictionary()
dict.set('name', 'miracle')
dict.set('age', 36)
dict.set('gender', 'male')
console.log(dict.keys())           // ["name", "age", "gender"]
console.log(dict.values())         // ["miracle", 36, "male"]
console.log(dict.size())           // 3
console.log(dict.has('name')) // true
console.log(dict.get('name'))      // miracle
dict.remove('gender')
console.log(dict.size())           // 2
dict.clear()
console.log(dict.size())           // 0