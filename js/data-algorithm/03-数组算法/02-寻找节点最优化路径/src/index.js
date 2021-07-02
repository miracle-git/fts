import { findNodePath1, findNodePath2, findNodePath3 } from './find-node-path'

const data = [
  {
    "id": "1",
    "sub": [
      {
        "id": "2",
        "sub": [
          {
            "id": "3",
            "sub": null
          }
        ]
      }
    ]
  }
]

console.log(findNodePath1(data, '1'))
console.log(findNodePath1(data, '2'))
console.log(findNodePath1(data, '3'))

console.log(findNodePath2(data, '1'))
console.log(findNodePath2(data, '2'))
console.log(findNodePath2(data, '3'))

console.log(findNodePath3(data, '1'))
console.log(findNodePath3(data, '2'))
console.log(findNodePath3(data, '3'))
