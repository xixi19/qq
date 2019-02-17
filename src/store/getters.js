const navTitleObj = {
    message: '消息',
    friends: '联系人',
    discover: '发现'
}

export const navTitle = state => navTitleObj[state.headerTitle]
// 根据state消息数据生成,message页面列表数据,包含头像,用户名,未读消息等
export const msgViewList = state => {
    let result = []
    let friends = state.data.friends
    if (!friends.length) {
        // 无好友,网络请求好友列表还未请求成功
        return result
    }
    state.messageList.forEach(item => {
        // 根据id获取好友信息
        let friendData = friends.find(f => f._id === item._id)
        let unreadNum = 0
        let lastMessaage = {}
        item.list.forEach(m => {
            if (!m.read) {
                unreadNum++
            }
            lastMessaage = m
        })
        result.push({
            ...friendData,
            unreadNum,
            lastMessaage
        })
    })
    return result
}