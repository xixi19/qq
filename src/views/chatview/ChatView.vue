<template>
    <div class="chat">
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon slot="left" @click='closeChat'>
                <mu-icon value="arrow_back"></mu-icon>
            </mu-button>
            <div class="nav-title">{{currentUser.name}}</div>
            <div slot="right">
                <mu-button icon>
                    <mu-icon value="call"></mu-icon>
                </mu-button>
                <mu-button icon>
                    <mu-icon value="person"></mu-icon>
                </mu-button>
            </div>
        </mu-appbar>
        <div class="content" ref="msgView">
            <chat-content ref="ChatCon"></chat-content>
        </div>
        <div class="footer">
            <div class="top">
                <div class="input-wrapper">
                    <mu-text-field class="input" full-width v-model="value"></mu-text-field>
                </div>
                <mu-button icon @click="sendMsg">
                    <mu-icon value="send"></mu-icon>
                </mu-button>
            </div>
            <div class="bottom">
                <mu-icon class="icon" value="settings_voice"></mu-icon>
                <mu-icon class="icon" value="photo_size_select_actual"></mu-icon>
                <mu-icon class="icon" value="touch_app"></mu-icon>
                <mu-icon class="icon" value="camera_alt"></mu-icon>
                <mu-icon class="icon" value="videocam"></mu-icon>
                <mu-icon class="icon" value="tag_faces"></mu-icon>
                <mu-icon class="icon" value="add_circle_outline"></mu-icon>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapState} from 'vuex'
    import ChatContent from './ChatContent'
    import BScroll from 'better-scroll'

    export default {
        name: 'ChatView',
        data() {
            return {
                value: ''
            }
        },
         created(){
            this.$nextTick(() => {
                this._initMsgViewScroll()
            })
        },
         computed:mapState(['currentUser',]),
        methods:{
           _initMsgViewScroll() {
                if (!this.msgScroll) {
                    this.msgScroll = new BScroll(this.$refs.msgView, {
                        click: true
                    })
                }else {
                    this.msgScroll.refresh()//refresh页面自动刷新
                }
            },
            ...mapActions(['closeChat','sendMessage','getNewMessage']),
             sendMsg() {
                if (!this.value.trim()) {
                    return
                }
                let msg = this.value
                let time = new Date().getTime()
                let msgItem = {msg, time, self: true, read: true}
                this.sendMessage(msgItem)
                this.value = ''
                this.chaconscroll()
                this.getNewMessage({id:this.currentUser._id,msg,axios:this.axios})
                .then(() => {
                        // 将action封装成promise对象保证 网络数据请求完毕更新vuex的store后,调用then方法
                        this.chaconscroll()
                    })
            },
            chaconscroll(){
                this.$nextTick(()=>{
                    this.msgScroll.refresh()
                    console.log(this.$refs.ChatCon.$refs.bottom)
                     let bottomEl=this.$refs.ChatCon.$refs.bottom
                     this.msgScroll.scrollToElement(bottomEl, 300)
                })
            }
    },
         components:{
            ChatContent,
         }
    }
</script>

<style scoped>
    .chat {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        z-index: 50;
    }

    .nav-title {
        font-size: 16px;
        text-align: center;
    }
    .content{
        position:absolute;
        left: 0;
        right: 0;
        top:56px;
        bottom: 96px;
        overflow: hidden;
        background-color: #eee;

    }

    .footer {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f6f6f6;
    }

    .footer .top {
        display: flex;
    }

    .footer .input-wrapper {
        padding: 5px 10px;
        flex: 1;
    }
    .footer .input {
        margin: 0;
        padding-bottom: 0;
        min-height: 32px;
    }

    .footer .bottom {
        display: flex;
    }
    .footer .icon {
        flex: 1;
        text-align: center;
        display: inline-block;
        line-height: 48px;
    }
</style>