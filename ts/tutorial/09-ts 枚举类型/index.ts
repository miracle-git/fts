// 枚举类型
enum Season {
  Spring = 1,
  Summer,
  Autumn,
  Winter
}
// 根据类型获取值以及根据值获取类型
console.log(Season.Spring, Season[1])
console.log(Season.Summer, Season[2])
console.log(Season.Autumn, Season[3])
console.log(Season.Winter, Season[4])
// 实际应用
function getSeason(season: Season): string {
  switch (season) {
    case Season.Spring:
      return '春天'
    case Season.Summer:
      return '夏天'
    case Season.Autumn:
      return '秋天'
    case Season.Winter:
      return '冬天'
    default:
      return ''
  }
}
// 调用
const season = getSeason(Season.Summer)
console.log(season)
