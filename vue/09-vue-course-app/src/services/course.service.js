import axios from 'axios'

// export const getCourseList = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve({
//       data: [
//         { name: 'vue', price: 800 },
//         { name: 'react', price: 600 },
//         { name: 'node', price: 500 }
//       ]
//     }), 1000)
//   })
// }

export const getCourseList = () => axios.get('/api/courses')
