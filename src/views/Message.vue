<template>
    <div class="message">
        <div v-if="isAjax">请求中</div>
        <mu-list textline="two-line" v-else>
            <div class="list" v-for="f in msgViewList" :key="f._id">
                <v-touch @swipeleft="onSwipeleft(f._id)" @swiperight="cancelRemove" @tap="itemClick(f)">
                    <mu-list-item class="item" :class="{remove:f._id===currentId}" avatar button>
                        <mu-list-item-action>
                            <mu-avatar :size="30">
                                <img :src="`${baseUrl}${f.avatar}`">
                            </mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            <mu-list-item-title>{{f.name}}</mu-list-item-title>
                            <mu-list-item-sub-title>{{f.lastMessaage.msg}}</mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action class="desc">
                            <mu-list-item-title><span class="time">{{f.lastMessaage.time|getTime}}</span>
                            </mu-list-item-title>
                            <mu-list-item-sub-title>
                                <mu-badge :content="f.unreadNum+''" color="red" v-show="f.unreadNum"></mu-badge>
                            </mu-list-item-sub-title>
                        </mu-list-item-action>
                    </mu-list-item>
                </v-touch>
                <div class="delete-btn" @click="deleteMsg(f._id)">删除</div>
            </div>
        </mu-list>
    </div>
</template>

<script>
    import {mapGetters, mapState,mapActions,} from 'vuex'
    import {timeDesc} from  '../assets/js/tool'

    export default {
        name: 'Message',
        data() {
            return {currentId: null}
        },
        computed: {
            ...mapState(['isAjax', 'baseUrl']),
            ...mapGetters(['msgViewList'])
        },
        filters: {
            getTime(val) {
                return timeDesc(val)
            }
        },
        methods: {
            ...mapActions(['showChat']),
            onSwipeleft(id) {
                this.currentId = id
            },
            cancelRemove() {
                this.currentId = null
            },
            itemClick(f) {
                this.showChat(f)
                // 还原删除样式
                this.cancelRemove()
            },
            deleteMsg(id) {
                console.log(id)
                this.$store.commit('DELETD_MESSAGE', id)
            }
        }
    }
</script>

<style scoped>
    .list {
        position: relative;
    }

    .item {
        background: #fff;
        position: relative;
        transition: all .3s linear;
        z-index: 10;
    }

    .item.remove {
        transform: translateX(-50px);
    }

    .list .delete-btn {
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        height: 100%;
        line-height: 72px;
        text-align: center;
        color: #fff;
        background: red;
        z-index: 2;
    }

    .item .desc .time {
        display: inline-block;
        width: 100%;
        text-align: right;
    }

    .item .desc {
        text-align: right;
    }

</style>