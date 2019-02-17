<template>
    <mu-drawer :open="open" :docked="false" @close="close(false)">
        <div class="header">
            <div class="title">
                <mu-avatar :size="54">
                    <img :src="`${baseUrl}${self.avatar}`">
                </mu-avatar>
                <div class="desc">
                    <div class="name">{{self.name}}</div>
                    <div class="tel">tel:{{self.phone}}</div>
                </div>
            </div>
            <div class="explain">{{self.explain}}</div>
        </div>
    <mu-list class="set-list">
    <mu-list-item button>
      <mu-list-item-action>
        <mu-icon value="remove_red_eye"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>了解会员特权</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button>
      <mu-list-item-action>
        <mu-icon value="payment"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>QQ钱包</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button>
      <mu-list-item-action>
        <mu-icon value="color_lens"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>个性装扮</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button>
      <mu-list-item-action>
        <mu-icon value="grade"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的收藏</mu-list-item-title>
    </mu-list-item>
      <mu-list-item button>
      <mu-list-item-action>
        <mu-icon value="crop_original"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的相册</mu-list-item-title>
    </mu-list-item>
      <mu-list-item button>
      <mu-list-item-action>
        <mu-icon value="folder_open"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>我的文件</mu-list-item-title>
    </mu-list-item>
      <mu-list-item button>
      <mu-list-item-action>
        <mu-icon value="settings_input_antenna"></mu-icon>
      </mu-list-item-action>
      <mu-list-item-title>免流量特权</mu-list-item-title>
    </mu-list-item>
  </mu-list>
  <div class="footer">
      <div class="btn">
         <mu-icon value="settings"></mu-icon>
         <div class="name">设置</div>
     </div>
     <div class="btn">
         <mu-icon  value="brightness_3"></mu-icon>
         <div class="name">夜间</div>
     </div>
     <div class="btn">
         <i class="icon">23°</i>
         <div class="name">广州</div>
     </div>
  </div>
    </mu-drawer>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'SetDrawer',
        computed: mapState({
            open: 'showDrawer',
            baseUrl: 'baseUrl',
            self: state => state.data.self
        }),
        methods: mapMutations({
            close: 'TOGGLE_SETDRAWER'
        })
    }
</script>

<style scoped>
    .header {
        background: url("../assets/img/bg.jpg");
        background-size: 256px 168px;
        color: #fff;
        padding: 70px 10px 10px;
    }

    .header .title {
        display: flex;
    }

    .header .desc {
        flex: 1;
        margin-left: 5px;
        box-sizing: border-box;
    }
    .header .desc .name {
        font-size: 24px;
        font-weight: 700;
    }
    .header .desc .tel {
        font-size: 10px;
    }
    .header .explain {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .set-list .mu-item-action {
        min-width:35px;
    }
    .footer{
      position: absolute;
      left: 0px;
      bottom: 10px;
    }
    .footer .btn{
        display: inline-block;
        margin: 0 10px;
        width: 30px;
        text-align: center;
    }
    .footer .icon{
        font-size: 20px;
    }
    .fonter .name{
        font-size: 9px;
    }
</style>