<template>
<div class="contentbox">
	<div class="msg" :class="{self:msg.self}" v-for="msg in msgList" :key="msg.time">
		<div class="avatar">
			<img :src="msg.self?`${baseUrl}${self.avatar}`:`${baseUrl}${friend.avatar}`" width="100%" height="100%">
		</div>
		<div class="bubble">{{msg.msg}}</div>
	</div>
     <div ref="bottom"></div>
</div>
 </template>

 <script>
 	import {mapState} from 'vuex'
    export default {
    	computed:mapState({
    		friend:'currentUser',
    		baseUrl:'baseUrl',
    		self:state=>state.data.self,
    		msgList:state=>state.currentMsgList.list
    	})
  }
</script>

 <style>
.contentbox .msg{
    width: 100%;
    padding:5px 10px;
    box-sizing: border-box;
    font-size: 0;
}
.msg .avatar{
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
}
.msg .bubble{
    display: inline-block;
    vertical-align: top;
    margin-left: 5px;
    padding: 10px 5px 10px 10px;
    border-radius:4px;
    line-height: 20px;
    max-width:50%;
    word-wrap: break-word;
    font-size: 14px;
    background-color: #fff; 
}
.msg.self{
    text-align: right;
}
.msg.self .avatar{
    float: right;
    margin-left: 5px;
}
.msg.self .bubble{
    background-color: #57c0e7;
    text-align: left;
    color: #fff;
    padding:10px 5px 10px 10px 
}
</style>