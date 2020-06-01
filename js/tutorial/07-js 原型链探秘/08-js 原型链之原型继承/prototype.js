function User() {}
User.prototype.show = function() {
  console.log('user.show')
}

function Admin() {}
// Admin.prototype.__proto__ = User.prototype
// 通过Object.create()实现继承的顺序至关重要，必须保证定义原型方法或新建对象在Object.create()之后进行, 同时回填constructor
Admin.prototype = Object.create(User.prototype)
// Admin.prototype.constructor = Admin
Object.defineProperty(Admin.prototype, 'constructor', {
  value: Admin,
  enumerable: false
})
Admin.prototype.role = function() {
  console.log('admin.role')
}

function Member() {}
// Member.prototype.__proto__ = User.prototype
// 通过Object.create()实现继承的顺序至关重要，必须保证定义原型方法或新建对象在Object.create()之后进行, 同时回填constructor
Member.prototype = Object.create(User.prototype)
// Member.prototype.constructor = Member
Object.defineProperty(Member.prototype, 'constructor', {
  value: Member,
  enumerable: false
})
Member.prototype.role = function() {
  console.log('member.role')
}

const admin = new Admin()
console.log(admin)
admin.show()  // user.show
admin.role()  // admin.role
for(const key in admin) {
  console.log(key)
}