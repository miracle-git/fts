export default {
  data() {
    return {
      fromPath: ''
    }
  },
  methods: {
    goBack(from) {
      if (this.fromPath === from) {
        this.$router.back()
      } else {
        this.$router.push(from)
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fromPath = from.path)
  }
}
