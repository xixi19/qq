<template>
    <div class="search-wrapper">
        <div class="search-bar" @click="showShearchView">
            <mu-icon value="search" size="20" class="icon"></mu-icon>
            <span class="text">搜索</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchBar',
        methods:{
            showShearchView(){
                this.$store.commit('TOGGLE_SEARCH_VIEW',true)
            }
        }
    }
</script>

<style>
    .search-wrapper {
        box-sizing: border-box;
        height: 45px;
        padding: 10px;
    }

    .search-bar {
        background: rgba(7, 17, 27, 0.1);
        width: 100%;
        border-radius: 4px;
    }
    .search-bar .icon {
        display: inline-block;
        vertical-align: top;
        line-height: 25px;
        margin-left: 5px;
    }
    .search-bar .text {
        display: inline-block;
        font-size: 12px;
        line-height: 25px;
    }
</style>