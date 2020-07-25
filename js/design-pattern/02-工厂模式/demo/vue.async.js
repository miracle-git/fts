Vue.component('async-comp', function (resolve, reject) {
  setTimeout(() => {
    resolve({
      template: '<div>this is an async component</div>'
    })
  }, 100)
})