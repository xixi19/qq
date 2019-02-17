import * as types from './mutation-type'

export default{
	 [types.CHANGE_NAV_TITLE](state, title) {
        state.headerTitle = title
    },
      [types.TOGGLE_SETDRAWER](state, val) {
        state.showDrawer = val
    },
        [types.RECEIVE_DATA](state, data) {
        state.data = data
    },
    [types.REFRESH_AJAX](state, status) {
        state.isAjax = status
    },
     [types.DELETD_MESSAGE](state, id) {
        let record = state.messageList.find(m => m._id === id) // 找到对应好友聊天消息数据
        if (!record) {
            return
        }
        let index = state.messageList.indexOf(record) // 获取对应消息的下标
        state.messageList.splice(index, 1) // 删除对应消息数据
    },
    [types.RECEIVE_CURRENT_USER](state,user){
        state.currentUser=user
        let record=state.messageList.find(m=>m._id===user._id)
            if(!record){
                record={
                    id:user._id,
                    list:[]
                }
                state.messageList.push(record)
            }else{
                record.list.forEach(m=>m.read=true)
            }
            state.currentMsgList = record
    },
    [types.TOGGLE_CHATVIEW](state, val) {
        state.chat = val
    },
     [types.ADD_MESSAGE](state, msg) {
        state.currentMsgList.list.push(msg)
    },
     [types.GET_NEW_MESSAGE](state, {msg, id, time}) {
        // 根据id返回对应好友的聊天消息数组
        let record = state.messageList.find(m => m._id === id)
        if (!record) {
            // 当前好友没有与用户没有聊天记录,向messageList添加一条对应的聊天记录
            record = {
                _id: id,
                list: []
            }
            state.messageList.push(record)
        }
        let read = state.currentUser._id === id && state.chat
        record.list.push({
            msg,
            time,
            read
        })
    },
     [types.TOGGLE_SEARCH_VIEW](state, val) {
        state.shearchView = val
    }
}