// webpack-dev-server
import Hashtable from './hashtable'

const hashtable = new Hashtable()
hashtable.put('name', 'miracle')
hashtable.put('age', 35)
hashtable.put('gender', 'male')
console.log(hashtable.get('name'))    // miracle
hashtable.put('name', 'miracle he')
console.log(hashtable.get('name'))    // miracle he
console.log(hashtable.get('gender'))  // male
console.log(hashtable.size())         // 3
hashtable.remove('gender')
console.log(hashtable.get('gender'))  // null
console.log(hashtable.size())         // 2