function User(name, age) {
  this.name = name
  this.age = age
}
User.prototype.show = function() {
  console.log(`I'm ${this.name}, ${this.age} years old.`)
}

function Admin(name, age) {
  User.call(this, name, age)
}
// Admin.prototype.__proto__ = User.prototype
// 通过Object.create()实现继承的顺序至关重要，必须保证定义原型方法或新建对象在Object.create()之后进行, 同时回填constructor
Admin.prototype = Object.create(User.prototype)
// Admin.prototype.constructor = Admin
Object.defineProperty(Admin.prototype, 'constructor', {
  value: Admin,
  enumerable: false
})

function Member(name, age) {
  User.call(this, name, age)
}
// Member.prototype.__proto__ = User.prototype
// 通过Object.create()实现继承的顺序至关重要，必须保证定义原型方法或新建对象在Object.create()之后进行, 同时回填constructor
Member.prototype = Object.create(User.prototype)
// Member.prototype.constructor = Member
Object.defineProperty(Member.prototype, 'constructor', {
  value: Member,
  enumerable: false
})

const admin = new Admin('Miracle', 35)
const member = new Member('Jack', 25)
admin.show()  // I'm Miracle, 35 years old.
member.show() // I'm Jack, 25 years old.