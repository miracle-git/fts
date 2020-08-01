// webpack-dev-server
class ImgServer {
  constructor(fileName) {
    this.fileName = fileName
  }
  display() {
    this.loadImg()
    console.log(`显示图片: ${this.fileName}`)
  }
  loadImg() {
    console.log(`图片加载中...`)
  }
}

class ProxyServer {
  constructor(fileName) {
    this.img = new ImgServer(fileName)
  }
  display() {
    this.img.display()
  }
}

const proxy = new ProxyServer('logo.png')
proxy.display()