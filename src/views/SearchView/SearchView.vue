<template>
    <div class="search-view">
        <div class="header">
            <div class="search">
                <mu-icon class="icon search-icon" value="search" size="18" color="#696A6A"></mu-icon>
                <input v-model="searchStr" placeholder="搜索">
                <mu-icon class="icon cancel-icon" value="cancel" v-show="searchStr.length" size="20"
                         color="#a6a6a6" @click="clearSearchVal"></mu-icon>
            </div>
            <div class="cancel" @click="closeSearchView">取消</div>
        </div>
        <Split></Split>
        <mu-list textline="two-line">
            <mu-list-item class="item" v-for="f in searchFriends" :key="f._id" avatar button
                          @click="showChatAndCloseSearchView(f)">
                <mu-list-item-action>
                    <mu-avatar :size="30">
                        <img :src="`${baseUrl}${f.avatar}`">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>{{f.name}}</mu-list-item-title>
                    <mu-list-item-sub-title>{{f.explain}}</mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import Split from "../../widget/Split";

    export default {
        name: 'SearchView',
        components: {Split},
        data() {
            return {
                searchStr: ''
            }
        },
        computed: {
            ...mapState({
                baseUrl: 'baseUrl',
                // 根据输入框的文本内容,与好友数组进行filter过滤,返回一个好友name值与输入框文本正则匹配成功的新数组
                searchFriends(state) {
                    if (!this.searchStr.trim()) {
                        return []
                    }
                    return state.data.friends.filter(f => {
                        let reg = new RegExp(this.searchStr, 'img')
                        return reg.test(f.name)
                    })
                }
            })
        },
        methods: {
            ...mapActions(['showChat']),
            closeSearchView() {
                this.$store.commit('TOGGLE_SEARCH_VIEW', false)
            },
            clearSearchVal() {
                this.searchStr = ''
            },
            showChatAndCloseSearchView(f) {
                this.showChat(f)
                this.closeSearchView()
            }
        }
    }
</script>

<style scoped>
    .search-view {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 15;
        background: #fff;
    }

    .search-view .header {
        box-sizing: border-box;
        display: flex;
        height: 44px;
        padding: 10px;
    }

    .search-view .search {
        flex: 1;
        position: relative;
        margin-right: 5px;
    }

    .search-view .search input {
        box-sizing: border-box;
        padding: 0 25px;
        width: 100%;
        height: 100%;
        border: 0;
        outline: 0;
        background: rgba(7, 17, 27, 0.1);
        border-radius: 8px;
    }

    .search-view .icon {
        position: absolute;
        display: inline-block;
        height: 24px;
        line-height: 24px;
    }

    .icon.search-icon {
        top: 1px;
        left: 5px;
    }

    .icon.cancel-icon {
        right: 2px;
    }

    .header .cancel {
        height: 24px;
        line-height: 24px;
        color: #a6a6a6;
    }
</style>