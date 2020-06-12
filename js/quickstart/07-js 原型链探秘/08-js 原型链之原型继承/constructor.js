function User() {}
User.prototype.show = function() {
  console.log('user.show')
}

function Admin() {}
Admin.prototype = User.prototype
Admin.prototype.role = function() {
  console.log('admin.role')
}

function Member() {}
Member.prototype = User.prototype
Member.prototype.role = function() {
  console.log('member.role')
}

const admin = new Admin()
admin.show()  // user.show
admin.role()  // member.role