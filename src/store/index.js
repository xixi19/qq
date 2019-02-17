import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      headerTitle: '',
        baseUrl: process.env.BASE_URL,
        currentUser:{},
        currentMsgList:{},
        showDrawer: false, // 展示侧边栏
        chat:false,//展示聊天页面
        shearchView: false, //搜索页面
        data: {
            self: {},
            friends: []
        },
     isAjax: false,
        // 消息列表
        messageList: [
            {
                _id: 1,
                list: [
                    {msg: '你可以和我聊天', time: 1541051132303, read: false},
                    {msg: '你今年几岁?', time: 1541051432303, read: false},
                    {msg: '我今天80你呢?', time: 1541051832303, read: false}
                ]
            }, // 五天以前 展示 日期 10-12
            {
                _id: 2, list: [
                    {msg: '我会讲笑话', time: 1542002394524, read: true},
                    {msg: '表达?', time: 1541051832303, read: true, self: true}
                ]
            }, // 昨天
            {_id: 3, list: [{msg: '在吗?', time: 1542072369522, read: false}]}, // 当前 展示时间          上午7:03
            {_id: 4, list: [{msg: '吃了吗?', time: 1541900394524, read: false}]} // 五天以内 展示星期几      星期天
        ]
    },
    getters,
    mutations,
    actions
})