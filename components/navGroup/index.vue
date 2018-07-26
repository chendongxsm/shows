<template>
  <div class="nav-group-wrapper">
    <div class="nav-item" v-for="item in navGroup" :key="item.title" :style="{paddingLeft: navGroupStyle.itemPaddingLeft}">
      <div class="nav-left">
        <text class="icon nav-icon">{{item.icon}}</text>
        <text class="nav-title">{{item.title}}</text>
      </div>
      <div class="nav-right">
        <text class="nav-title" v-if="item.value">{{item.value}}</text>
        <text class="icon icon-arrow">&#xe8f1;</text>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navGroup: {
      type: Array
    },
    navGroupStyle: {
      type: Object
    }
  },
  data(){
    return{

    }
  },
  methods: {

  }
};
</script>
<style scoped>
  .icon{
    vertical-align:middle;
    font-family: iconfont;
  }
  .nav-group-wrapper{
    background-color: #fff;
  }
  .nav-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #000;
  }
  .nav-left, .nav-right{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .nav-title{
    margin-left: 10px;
    font-size: 28px;
    color: #666;
  }
  .nav-icon{
    font-size: 38px;
  }
  .icon-arrow{
    font-size: 38px;
    color: #999;
  }
</style>


