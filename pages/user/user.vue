<template>
  <div class="container" >
    <div class="top-wrapper">
      <div class="avatar-wrapper">
        <image class="avatar" src="http://pcgty0mib.bkt.clouddn.com/user/default-avatar.jpg"  @click="jumpUrl('/setting')" />
        <div class="info-wrapper">
          <text class="nickname">陈东xsm</text>
          <!-- <span class="vip">银牌会员</span> -->
        </div>
      </div>
      <text class="icon icon-service top-icon">&#xe891;</text>
      <text class="icon icon-setting top-icon" @click="jumpUrl('/setting')">&#xe893;</text>
      
    </div>
    <div class="menu-wrapper">
      <div class="menu first-menu">
        <text class="menu-num">3</text>
        <text class="menu-title">我的收藏</text>
      </div>
      <div class="menu">
        <text class="menu-num">300</text>
        <text class="menu-title">我的金币</text>
      </div>
    </div>
    <NavBar :navBarText="navBarText" style="margin-top: 15px;"></NavBar>
    <NavGroup :navGroup="navGroup" :navGroupStyle="navGroupStyle" style="margin-top: 15px;"></NavGroup>
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
        ],
        navGroupStyle: {
          itemPaddingLeft: '15px'
        }
      }
    },
    methods: {
      jumpUrl(path){
        this.$router.push(path)
      }
    },
    created(){
      let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_755393_cmuzkfv0ob7.ttf')"
        });
    }
  };
</script>
<style scoped>
  .icon{
    font-family: iconfont
  }
  .container{
    height: 100%;
    background-color: #f1f1f1;
  }
  .top-wrapper{
    position: relative;
    width: 750px;
    height: 300px;
    background-color: #33a8de;
  }
  .menu-wrapper{
    display: flex;
    flex-direction: row;
    height: 140px;
    padding: 28px 0;
    background-color: #fff;
  }
  .menu{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .first-menu{
    /* border-right: 1px solid #eeeeee; */
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #eee;
  }
  .menu-num{
    font-size: 28px;
    color: #666;
  }
  .menu-title{
    margin-top: 6px;
    font-size: 28px;
    color: #666;
  }
  .avatar-wrapper{
    display: flex;
    align-items: center;
    margin-top: 60px;
  }
  .avatar{
    width: 140px;
    height: 140px;
    border-radius: 100%;
  }
  .info-wrapper{
    /* margin-left: 20px; */
  }
  .nickname{
    margin-top: 10px;
    font-size: 30px;
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
