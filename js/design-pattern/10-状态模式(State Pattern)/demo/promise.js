
const StateMachine = require('javascript-state-machine')

const machine = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'resolved'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    onResolve(state, promise) {
      promise.successList.forEach(item => item())
    },
    onReject(state, promise) {
      promise.failureList.forEach(item => item())
    }
  }
})

export default class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failureList = []
    fn(() => {
      machine.resolve(this)
    }, () => {
      machine.reject(this)
    })
  }
  then(success, failure) {
    this.successList.push(success)
    failure && this.failureList.push(failure)
  }
}