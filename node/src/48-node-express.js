const http = require('http');
const slice = Array.prototype.slice;

class NodeExpress {
  constructor() {
    this.routes = {
      all: [],
      get: [],
      post: []
    };
  }

  _register(path) {
    const result = {};
    if (typeof path === 'string') {
      result.path = path;
      result.middlewares = slice.call(arguments, 1);
    } else {
      result.path = '/';
      result.middlewares = slice.call(arguments, 0);
    }
    return result;
  }

  _match(method, url) {
    let middlewares = [];

    method = method.toLowerCase();
    url = url.toLowerCase();
    if (url === '/favicon.ico') {
      return middlewares;
    }

    let routes = [];
    routes = routes.concat(this.routes.all);
    routes = routes.concat(this.routes[method]);
    routes.forEach(item => {
      if (url.indexOf(item.path) === 0) {
        middlewares = middlewares.concat(item.middlewares);
      }
    });

    return middlewares;
  }

  // next处理逻辑
  _handle(req, res, middlewares) {
    const next = () => {
      const middleware = middlewares.shift();
      if (middleware) {
        middleware(req, res, next);
      }
    };
    next();
  }

  _callback(req, res) {
    res.json = (data) => {
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify(data));
    };
    const { method, url } = req;
    const middlewares = this._match(method, url);
    this._handle(req, res, middlewares);
  }

  use() {
    const result = this._register.apply(this, arguments);
    this.routes.all.push(result);
  }

  get() {
    const result = this._register.apply(this, arguments);
    this.routes.get.push(result);
  }

  post() {
    const result = this._register.apply(this, arguments);
    this.routes.post.push(result);
  }

  listen(...args) {
    const server = http.createServer(this._callback.bind(this));
    server.listen(...args);
  }
}

module.exports = () => {
  return new NodeExpress();
};
