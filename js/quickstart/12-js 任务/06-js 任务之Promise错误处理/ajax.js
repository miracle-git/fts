class ParamError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ParamError'
  }
}
class HttpError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'HttpError'
  }
}

function ajax(url) {
  return new Promise((resolve, reject) => {
    if (!/^http/.test(url)) {
      throw new ParamError('请求地址格式错误')
    }
    const loading = document.querySelector('.loading')
    loading.style.display = 'flex'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(JSON.parse(this.response))
      } else if (this.status === 404) {
        reject(new HttpError('当前请求不存在'))
      } else {
        reject('fail')
      }
    }
  })
}