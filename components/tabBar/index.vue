<template>
    <div :class="['wrapper']">
        <div v-for="(tab, index) in tabIconFontTitles" :key="tab.title" class="bar-item" @click="tabTo(tab.path, index)">
            <text class="bar-ic iconfont" :class="[isActive(index)]">{{tab.iconfont}}</text>
            <text class="bar-txt" :class="[isActive(index)]">{{tab.title}}</text>
            <text class="i-notice" v-if="tab.notice">{{tab.notice}}</text>
            <text class="i-dot" v-if="tab.dot"></text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 90px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .w-ipx{
        height: 140px;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 14px;
        font-size: 38px;
    }
    .bar-txt{
        font-size: 22px;
        padding-top: 2px;
    }
    .i-notice{
        position: absolute;
        top:10px;
        right: 30px;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        font-size: 26px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #f00;
    }
    .i-dot{
        position: absolute;
        top:15px;
        right: 40px;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        background-color: #f00;
    }
</style>
<script>
    export default {
        props: {
            tabIconFontTitles: {
                type: Array,
                default: ()=>([])
            },
            currentPage: {
                type: [Number, String],
                default: 0
             }
        },
        computed:{
        },
        data () {
            return {
            }
        },
        mounted(){
        },
        methods: {
            isActive:function (_c) {
                return this.currentPage === _c ?'bar-active':''
            },
            tabTo(path, index){
                if(this.currentPage === index) return;
                this.$emit('tabTo',{
                    status : 'tabTo',
                    data : {
                        path : path,
                        index: index
                    }
                })
            }
        }
    }
</script>