<template>
  <div style="height:100%;">
    <router-view style="height:100%;"></router-view>
    <tabBar :tabTitles="tabIconFontTitles" 
      :tabStyles="tabIconFontStyles"
      :currentPage="currentPage"
      @tabTo="tabTo"
    ></tabBar>
  </div>
</template>

<script>
import util from "@/assets/util";
import tabBar from "@/components/tabBar";
export default {
  name: "App",
  data() {
    return {
      tabIconFontTitles: [
        {
          title: "首页",
          iconfont: "\ue8ff",
          path: ""
        },
        {
          title: "任务大厅",
          iconfont: "\ue892",
          path: "task",
          notice: 3
        },
        {
          title: "我的",
          iconfont: "\ue8a0",
          path: "user",
          dot: true
        }
      ],
      tabIconFontStyles: {
        bgColor: "#FFFFFF",
        activeBgColor: "#FFFFFF",
        titleColor: "#666666",
        activeTitleColor: "#f10215",
        isActiveTitleBold: false,
        width: 160,
        height: 110,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 4,
        iconFontColor: "#333333",
        activeIconFontColor: "#f10215",
      },
      currentPage: 0
    };
  },
  components: {
    tabBar
  },
  created() {

    // util.initIconFont()
  },
  methods: {
    tabTo(data) {
      this.currentPage = data.data.index;
      let path = data.data.path || "";
      this.$router && this.$router.push(`/${path}`);
    }
  }
};
</script>

<style scoped>
</style>
