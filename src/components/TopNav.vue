<template>
  <mu-appbar style="width: 100%">
        <mu-avatar :size="30" slot="left" @click="showDrawer(true)">
            <img :src="`${baseUrl}images/avatar.jpg`">
        </mu-avatar>
        <div class="title">{{navTitle}}</div>
        <mu-button icon slot="right">
            <mu-icon color="#fff" value="search"></mu-icon>
        </mu-button>
    </mu-appbar>
 </template>
  
 <script>
 	  import {mapGetters, mapState, mapMutations} from 'vuex'
    export default {
    	  name: 'TopNav',
        computed: {
            ...mapState(['baseUrl']),
            ...mapGetters(['navTitle'])
        },
        methods: mapMutations({
            showDrawer: 'TOGGLE_SETDRAWER'
        })

  }
</script>

 <style>
 .mu-appbar {
        background: #2955f3;
        background: linear-gradient(to right, #2955f3 0%, #7db8e7 70%);
    }

    .mu-appbar .title {
        text-align: center;
        color: #fff;
    }

    .mu-appbar .mu-avatar {
        margin-left: 12px;
    }
</style>