/**
 * 有这么一个数据结构:
 * const data = [
 * {
 *    "id": "1",
 *    "sub": [{
 *        "id": "2",
 *        "sub": [
 *          { "id": "3", "sub": null },
 *          {
 *             "id": "4", "sub": [
 *                { "id": "6", "sub": null }
 *             ]
 *          },
 *          { "id": "5", "sub": null }
 *        ]
 *      }
 *    ]
 *  },
 *  {
 *    "id": "7",
 *    "sub": [{
 *        "id": "8", "sub": [
 *           { "id": "9", "sub": null }
 *        ]
 *      }
 *    ]
 *  },
 *  { "id": "10", "sub": null }
 *]
 现在给定一个id，要求实现一个函数

 findNodePath(data, id) {}
 返回给定id在 data 里的路径

 示例:
 id = "1" => ["1"]
 id = "9" => ["7", "8", "9"]
 id = "100"=> []
 PS: id 全局唯一，无序
 */
export const findNodePath1 = (data, id) => {
  let arr = [], exist = false;

  (function find($data) {
    for (let item of $data) {
      if (exist) return arr
      exist = item.id === id
      if (exist) return arr.push(item.id)

      if (Array.isArray(item.sub)) {
        arr.push(item.id)
        find(item.sub, id)
        !exist && arr.pop()
      }
    }
  })(data)

  return arr
}

export const findNodePath2 = (data, id) => {
  let arr = [];

  (function find($data, $path) {
    if (!Array.isArray($data)) return []
    if (!Array.isArray($path)) $path = []

    for (let item of $data) {
      if (item.id === id) {
        $path.push(item.id)
        arr = $path
        return arr
      }

      find(item.sub, [...$path, item.id])
    }
  })(data)

  return arr
}

export const findNodePath3 = (data, id) => {
  if (!Array.isArray(data)) return []

  for (let item of data) {
    if (item.id === id) {
      return [item.id]
    } else if (Array.isArray(item.sub)) {
      const arr = findNodePath3(item.sub, id)
      arr.unshift(item.id)
      return arr
    }
  }

  return []
}
