import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { dynamicRoutes } from '@/router/dynamic'

export default {
  computed: {
    // isLogin() {
    //   return this.$store.state.user.isLogin
    // }
    ...mapState('user', ['isLogin']),
    ...mapGetters('user', ['welcome'])
  },
  methods: {
    login() {
      // const promise = this.$store.dispatch('user/login', 'admin')
      const promise = this['user/login']('admin')
      promise.then(() => {
        // 添加动态路由
        this.$router.addRoutes(dynamicRoutes)
        this.$router.push(this.$route.query.redirect)
      }).catch(() => console.log('用户名或密码错误，请重试'))
      // this.$store.commit('user/login', 'admin')
    },
    logout() {
      // this.$store.commit('user/logout')
      this['user/logout']()
      // this.$store.state.user.isLogin = false
      this.$router.push('/')
    },
    ...mapMutations(['user/logout']),
    ...mapActions(['user/login'])
  }
}
