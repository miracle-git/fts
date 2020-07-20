const loadImg = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.style.width = '100%'
    img.onload = () => resolve(img)
    img.onerror = reject
  })
}

const promise = loadImg('../img/bg.jpg')
promise.then(res => {
  console.log(`width: ${res.width}, height: ${res.height}`)
  return res
}).then(res => {
  document.body.appendChild(res)
}).catch(err => {
  console.log(err.message || err)
})
