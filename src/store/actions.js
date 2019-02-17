import * as types from './mutation-type'

export default {
    async getAllData({commit}, axios) {
        let self = await axios.get('/api/self')
        self = self.data.data
        let friends = await axios.get('/api/friends')
        friends = friends.data.data
        commit(types.RECEIVE_DATA, {self, friends})
        commit(types.REFRESH_AJAX, false) //请求完毕
    },
    getNewMessage({commit},{axios,id,msg}){
        return new Promise(resolve=>{
        axios.get(`api/robot?id=${id}&msg=${msg}`).then(
            (res)=>{
               let data=JSON.parse(res.data.data)
               console.log(data.text)
                commit(types.GET_NEW_MESSAGE, {msg: data.text, id, time: new Date().getTime()})
                  resolve()
            }
            )
    })
    },
    showChat({commit},item){
    	   // 获取当前聊天用户的信息
        commit(types.RECEIVE_CURRENT_USER, item)
        // 打开聊天页面
        commit(types.TOGGLE_CHATVIEW, true)
    },
    closeChat({commit}) {
        // 打开聊天页面
        commit(types.TOGGLE_CHATVIEW, false)
    },
     sendMessage({commit}, msg) {
        commit(types.ADD_MESSAGE, msg)
    }
}