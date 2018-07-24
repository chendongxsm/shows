<template>
  <div class="nav-group-wrapper">
    <div class="nav-item" v-for="item in navGroup" :key="item.title">
      <div class="nav-left">
        <span class="icon nav-icon">{{item.icon}}</span>
        <span class="nav-title">{{item.title}}</span>
      </div>
      <span class="icon icon-arrow">&#xe8f1;</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navGroup: {
      type: Array
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
    background: #fff;
  }
  .nav-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px;
    border-bottom: 1px solid #eee;
  }
  .nav-left{
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


