import Vue from 'vue'
import Router from 'vue-router'
import Message from '../views/Message'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/message',
            name: 'message',
            component: Message
        },
        {
            path: '/friends',
            name: 'friends',
            // which is lazy-loaded when the route is visited.
            //懒加载
            component: () => import('../views/Friends/Friends')
        },
        {
            path: '/discover',
            name: 'discover',
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Discover.vue')
        }
    ]
})
