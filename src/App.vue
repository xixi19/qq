<template>
    <div id="app">
        <div class="top-nav">
            <top-nav/>
        </div>
        <router-view/>
        <div class="tabbar">
            <bottom-tab/>
        </div>
        <chat-view v-if="chat"/>
        <!-- 侧边栏 -->
        <set-drawer/>
        <SearchView v-if="shearchView"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BottomTab from './components/BottomTab'
    import TopNav from './components/TopNav'
    import SetDrawer from './components/SetDrawer'
    import ChatView from "./views/chatview/ChatView"
     import SearchView from '../src/views/SearchView/SearchView'

    export default {
        name: 'App',
        computed:mapState(['chat','shearchView']),
        components: {
            SetDrawer,
            BottomTab,
            TopNav,
            ChatView,
            SearchView
        }
    }
</script>
<style>
 .tabbar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }

</style>
