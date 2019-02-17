<template>
    <mu-list toggle-nested>
        <mu-list-item button :ripple="false" nested :open="open === 'send'"
                      @toggle-nested="open = arguments[0] ? 'send' : ''">
            <mu-icon class="toggle-icon" size="24"
                     value="keyboard_arrow_right"></mu-icon>
            <mu-list-item-title>特别关心</mu-list-item-title>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested :open="open === 'drafts'"
                      @toggle-nested="open = arguments[0] ? 'drafts' : ''">
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_right"></mu-icon>
            <mu-list-item-title>我的好友</mu-list-item-title>
            <mu-list-item button slot="nested" class="f-item" @click="showChat(f)" v-for="f in friends" :key="f._id">
                <mu-list-item-action>
                    <mu-avatar :size="30" slot="left">
                        <img :src="`${baseUrl}${f.avatar}`">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title>{{f.name}}</mu-list-item-title>
                    <mu-list-item-sub-title>{{f.explain}}</mu-list-item-sub-title>
                    <mu-divider></mu-divider>
                </mu-list-item-content>
            </mu-list-item>

        </mu-list-item>
        <mu-list-item button :ripple="false" nested :open="open === 'inbox'"
                      @toggle-nested="open = arguments[0] ? 'inbox' : ''">
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_right"></mu-icon>
            <mu-list-item-title>不重要的联系人</mu-list-item-title>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested :open="open === 'stared'"
                      @toggle-nested="open = arguments[0] ? 'stared' : ''">
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_right"></mu-icon>
            <mu-list-item-title>客户</mu-list-item-title>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
                <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>
        </mu-list-item>
    </mu-list>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'FriendsList',
        data() {
            return {
                open: ''
            }
        },
        methods: mapActions(['showChat']),
        computed: mapState({
            friends: state => state.data.friends,
            baseUrl: 'baseUrl'
        })
    }
</script>

<style>
    .toggle-icon {
        margin-right: 5px;
        transition: all 0.2s linear;
    }

    .mu-item__open .toggle-icon {
        transform: rotate(90deg);
    }

    .f-item .mu-item {
        margin-left: 0 !important;
    }

    .f-item .mu-item-action {
        min-width: 40px !important;
    }

</style>