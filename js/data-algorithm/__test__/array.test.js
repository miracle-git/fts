import { findNodePath1, findNodePath2, findNodePath3 } from '../03-数组算法/02-寻找节点最优化路径/src/find-node-path'

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
          },
          {
            "id": "4",
            "sub": [
              {
                "id": "6",
                "sub": null
              }
            ]
          },
          {
            "id": "5",
            "sub": null
          }
        ]
      }
    ]
  },
  {
    "id": "7",
    "sub": [
      {
        "id": "8",
        "sub": [
          {
            "id": "9",
            "sub": null
          }
        ]
      }
    ]
  },
  {
    "id": "10",
    "sub": null
  }
]

test('测试：需要节点为1-10的节点路径(方法一)', () => {
  expect(findNodePath1(data, '1')).toEqual(['1'])
  expect(findNodePath1(data, '2')).toEqual(['1', '2'])
  expect(findNodePath1(data, '3')).toEqual(['1', '2', '3'])
  expect(findNodePath1(data, '4')).toEqual(['1', '2', '4'])
  expect(findNodePath1(data, '5')).toEqual(['1', '2', '5'])
  expect(findNodePath1(data, '6')).toEqual(['1', '2', '4', '6'])
  expect(findNodePath1(data, '7')).toEqual(['7'])
  expect(findNodePath1(data, '8')).toEqual(['7', '8'])
  expect(findNodePath1(data, '9')).toEqual(['7', '8', '9'])
  expect(findNodePath1(data, '10')).toEqual(['10'])
  expect(findNodePath1(data, '100')).toEqual([])
})

test('测试：需要节点为1-10的节点路径(方法二)', () => {
  expect(findNodePath2(data, '1')).toEqual(['1'])
  expect(findNodePath2(data, '2')).toEqual(['1', '2'])
  expect(findNodePath2(data, '3')).toEqual(['1', '2', '3'])
  expect(findNodePath2(data, '4')).toEqual(['1', '2', '4'])
  expect(findNodePath2(data, '5')).toEqual(['1', '2', '5'])
  expect(findNodePath2(data, '6')).toEqual(['1', '2', '4', '6'])
  expect(findNodePath2(data, '7')).toEqual(['7'])
  expect(findNodePath2(data, '8')).toEqual(['7', '8'])
  expect(findNodePath2(data, '9')).toEqual(['7', '8', '9'])
  expect(findNodePath2(data, '10')).toEqual(['10'])
  expect(findNodePath2(data, '100')).toEqual([])
})

test('测试：需要节点为1-10的节点路径(方法三)', () => {
  expect(findNodePath3(data, '1')).toEqual(['1'])
  expect(findNodePath3(data, '2')).toEqual(['1', '2'])
  expect(findNodePath3(data, '3')).toEqual(['1', '2', '3'])
  expect(findNodePath3(data, '4')).toEqual(['1', '2', '4'])
  expect(findNodePath3(data, '5')).toEqual(['1', '2', '5'])
  expect(findNodePath3(data, '6')).toEqual(['1', '2', '4', '6'])
  expect(findNodePath3(data, '7')).toEqual(['7'])
  expect(findNodePath3(data, '8')).toEqual(['7', '8'])
  expect(findNodePath3(data, '9')).toEqual(['7', '8', '9'])
  expect(findNodePath3(data, '10')).toEqual(['10'])
  expect(findNodePath3(data, '100')).toEqual([])
})
