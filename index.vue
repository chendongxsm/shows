<template>
  <div>
    
    <wxc-tab-bar :tab-titles="tabIconFontTitles"
               :tab-styles="tabIconFontStyles"
               title-type="iconFont"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
               <router-view/>
  </wxc-tab-bar>
  </div>
</template>

<script>
import { WxcTabBar, Utils } from "weex-ui";
export default {
  name: "App",
  data() {
    return {
      tabIconFontTitles: [
        {
          title: "首页",
          codePoint: "\ue8ff"
        },
        {
          title: "任务大厅",
          codePoint: "\ue892"
        },
        {
          title: "我的",
          codePoint: "\ue8a0",
        }
      ],
      tabIconFontStyles: {
        bgColor: "#FFFFFF",
        titleColor: "#666666",
        activeTitleColor: "#f10215",
        activeBgColor: "#FFFFFF",
        isActiveTitleBold: false,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 8,
        iconFontColor: "#333333",
        activeIconFontColor: "#f10215",
        iconFontUrl: "//at.alicdn.com/t/font_755393_60j6n7j3vnj.ttf"
      }
    };
  },
  components: { WxcTabBar },
  created() {
    const tabPageHeight = Utils.env.getPageHeight();
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this;
    this.contentStyle = { height: tabPageHeight - tabStyles.height + "px" };
  },
  methods: {
    wxcTabBarCurrentTabSelected(e) {
      const urlArr = ["/", "/task/task", "/user/user"];
      let index = e.page;
      this.$router.push(urlArr[index]);
    }
  }
};
</script>

<style scoped>
</style>
