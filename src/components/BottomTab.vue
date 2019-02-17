<template>
<mu-bottom-nav :value.sync="tab" @change="change">
        <mu-bottom-nav-item value="message" title="消息" icon="chat_bubble_outline"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="friends" title="联系人" icon="supervisor_account"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="discover" title="发现" icon="explore"></mu-bottom-nav-item>
    </mu-bottom-nav>
 </template>

 <script>
    export default {
    	 data() {
            return {
                tab: 'message'
            }
        },
    	methods: {
            change(val) {
                this.$router.push(val)
            }
        }
  }
</script>

 <style>

</style>