// webpack-dev-server
const list = document.querySelector('.list')
list.addEventListener('click', function (e) {
  const target = e.target
  if (target.tagName === 'LI') {
    alert(target.innerHTML)
  }
})