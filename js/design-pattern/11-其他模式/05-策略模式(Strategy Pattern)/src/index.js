// webpack-dev-server
// class User {
//   constructor(type) {
//     this.type = type
//   }
//   buy() {
//     if (this.type === 'ordinary') {
//       console.log('普通用户购买')
//     } else if (this.type === 'member') {
//       console.log('会员用户购买')
//     } else if (this.type === 'vip') {
//       console.log('Vip用户购买')
//     }
//   }
// }
//
// const user1 = new User('ordinary')
// const user2 = new User('member')
// const user3 = new User('vip')
// user1.buy()
// user2.buy()
// user3.buy()

class OrdinaryUser {
  buy() {
    console.log('普通用户购买')
  }
}
class MemberUser {
  buy() {
    console.log('会员用户购买')
  }
}
class VipUser {
  buy() {
    console.log('Vip用户购买')
  }
}

const user1 = new OrdinaryUser()
const user2 = new MemberUser()
const user3 = new VipUser()
user1.buy()
user2.buy()
user3.buy()
