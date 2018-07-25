<template>
  <div class="container" >
    <div class="top-wrapper">
      <div class="avatar-wrapper">
        <image class="avatar" src="https://img1.360buyimg.com/da/s750x366_jfs/t24556/120/1048702098/197464/88130084/5b4f153cN998ac1ea.jpg!cr_1125x549_0_72.dpg" />
        <div class="info-wrapper">
          <span class="nickname">陈东xsm</span>
          <span class="vip">银牌会员</span>
        </div>
      </div>
      <span class="icon icon-service top-icon">&#xe891;</span>
      <span class="icon icon-setting top-icon">&#xe893;</span>
      
    </div>
    <div class="menu-wrapper">
      <div class="menu first-menu">
        <p class="menu-num">3</p>
        <p class="menu-title">我的收藏</p>
      </div>
      <div class="menu">
        <p class="menu-num">300</p>
        <p class="menu-title">我的金币</p>
      </div>
    </div>
    <NavBar :navBarText="navBarText" style="margin-top: 15px;"></NavBar>
    <NavGroup :navGroup="navGroup" style="margin-top: 15px;"></NavGroup>
  </div>
</template>

<script>
  import NavBar from '@/components/navBar'
  import NavGroup from '@/components/navGroup'
  export default {
    components: {
      NavBar,
      NavGroup
    },
    data(){
      return{
        navBarText: {
          titleLeftIcon: '\ue674',
          titleLeftIconColor: '#ccc',
          titleLeftText: '我的任务',
          titleRightText: '全部任务',
          navList: [
            {
              icon: '\ue897',
              title: '已申请',
              path: ''
            },
            {
              icon: '\ue8f9',
              title: '待完成',
              path: ''
            },
            {
              icon: '\ue895',
              title: '待确认',
              path: ''
            },
            {
              icon: '\ue89a',
              title: '已完成',
              path: ''
            },
            {
              icon: '\ue896',
              title: '待评价',
              path: ''
            }
          ]
        },
        navGroup: [
          {
            icon: '\ue8a6',
            title: '会员认证',
            path: '',
            type: 'view'
          },
          {
            icon: '\ue8e6',
            title: '收货地址',
            path: '',
            type: 'view'
          },
          {
            icon: '\ue890',
            title: '商家入驻',
            path: '',
            type: 'view'
          },
          {
            icon: '\ue654',
            title: '邀请有礼',
            path: '',
            type: 'view'
          },
          {
            icon: '\ue894',
            title: '注销登录',
            event: 'logout',
            type: 'click'
          }
        ]
      }
    },
    methods: {
      
    },
    created(){
      
    }
  };
</script>
<style scoped>
  .icon{
    font-family: iconfont
  }
  .container{
    height: 100%;
    background: #f1f1f1;
  }
  .top-wrapper{
    position: relative;
    width: 750px;
    height: 250px;
    background: #e83632;
  }
  .menu-wrapper{
    display: flex;
    flex-direction: row;
    height: 140px;
    padding: 28px 0;
    background: #fff;
  }
  .menu{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .first-menu{
    border-right: 1px solid #eee;
  }
  .menu-num{
    color: #666;
  }
  .menu-title{
    margin-top: 6px;
    font-size: 15px;
    color: #666;
  }
  .avatar-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 55px;
    padding-left: 20px;
  }
  .avatar{
    width: 140px;
    height: 140px;
    border-radius: 100%;
  }
  .info-wrapper{
    margin-left: 20px;
  }
  .nickname{
    color: #fff;
  }
  .vip{
    color: #fff;
  }
  .top-icon{
    position: absolute;
    top: 30px;
    font-size: 50px;
    color: #fff;
  }
  .icon-service{
    right: 40px;
  }
  .icon-setting{
    right: 120px;
  }
</style>
