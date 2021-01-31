const http = require('http');

class NodeKoa {
  constructor() {
    this.middlewares = [];
  }

  _compose(middlewares) {
    return (ctx) => {
      const dispatch = (i) => {
        const fn = middlewares[i];
        try {
          Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
        } catch(err) {
          Promise.reject(err);
        }
      };
      return dispatch(0);
    };
  }

  _createContext(req, res) {
    const ctx = { req, res };
    ctx.query = req.query;
    return ctx;
  }

  _callback(req, res) {
    const fn = this._compose(this.middlewares);
    const ctx = this._createContext(req, res);
    return fn(ctx);
  }

  use(fn) {
    this.middlewares.push(fn);
    return this;
  }

  listen(...args) {
    const server = http.createServer(this._callback.bind(this));
    server.listen(...args);
  }
}

module.exports = () => {
  return new NodeKoa();
};
