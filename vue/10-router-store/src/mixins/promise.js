export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    async request(promise) {
      if (!promise instanceof Promise) return
      this.loading = true
      return await promise.finally(() => this.loading = false)
    }
  }
}
