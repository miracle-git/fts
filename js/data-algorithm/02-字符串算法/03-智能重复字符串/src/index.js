import { smartRepeatStringV1, smartRepeatStringV2 } from './smart-repeat-string'

console.log(smartRepeatStringV1('3[abc]'))  // abcabcabc
console.log(smartRepeatStringV1('3[2[a]2[b]]'))  // aabbaabbaabb
console.log(smartRepeatStringV1('2[1[a]3[b]2[3[c]4[d]]]'))  // abbbcccddddcccddddabbbcccddddcccdddd

console.log(smartRepeatStringV2('3[abc]'))  // abcabcabc
console.log(smartRepeatStringV2('3[2[a]2[b]]'))  // aabbaabbaabb
console.log(smartRepeatStringV2('2[1[a]3[b]2[3[c]4[d]]]'))  // abbbcccddddcccddddabbbcccddddcccdddd
