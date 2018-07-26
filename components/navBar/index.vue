<template>
  <div class="nav-bar-wrapper">
    <div class="title-wrapper">
      <div class="title-left">
        <text class="icon title-icon">{{navBarText.titleLeftIcon}}</text>
        <text class="title-text">{{navBarText.titleLeftText}}</text>
      </div>
      <div class="title-right">
        <text class="title-text">{{navBarText.titleRightText}}</text>
        <text class="icon title-icon">&#xe8f1;</text>
      </div>
    </div>
    <div class="nav-list">
      <div class="nav-item" v-for="item in navBarText.navList" @click="jumpUrl(item.path)">
        <text class="icon nav-item-icon">{{item.icon}}</text>
        <text class="nav-item-title">{{item.title}}</text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navBarText: {
      type: Object,
      default: ()=>({})
    },
  },
  methods: {
    jumpUrl(path){
      this.$emit("tabTo", {
        path: path,
      });
    }
  },
  created(){

  }
};
</script>
<style scoped>
  .icon{
    font-family: iconfont;
  }
  .nav-bar-wrapper{
    background-color: #fff;
  }
  .title-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 750px;
    /* height: 60px; */
    padding: 15px 20px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #eee;
  }
  .title-left, .title-right{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .title-text{
    margin: 0 4px;
    font-size: 28px;
    color: #666;
  }
  .title-icon{
    font-size: 36px;
  }
  .nav-list{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 20px;
  }
  .nav-item{
    flex: 1;
  }
  .nav-item-title{
    margin-top: 2px;
    font-size: 24px;
    color: #666;
    text-align: center;
  }
  .nav-item-icon{
    font-size: 40px;
    color: #666;
    text-align: center;
  }
</style>


