import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueTouch from 'vue-touch'
import Muse from './muse-ui.config'

Vue.use(Muse)
Vue.use(VueAxios, axios)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 网络请求获取全部数据
store.dispatch('getAllData', axios)

// 全局路由守卫监听页面跳转修改navTitle
router.beforeEach((to, from, next) => {
    store.commit('CHANGE_NAV_TITLE', to.name)
    next()
})

// 自动跳转至message页面
router.replace('/message')
