export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    request(promise) {
      if (!(promise instanceof Promise)) return
      this.loading = true
      return promise.finally(() => this.loading = false)
    }
  }
}
