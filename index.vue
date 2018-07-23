<template>
  <div>
    <tabBar :tabIconFontTitles="tabIconFontTitles" 
      :tabIconFontStyles="tabIconFontStyles"
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
                path: "/"
                },
                {
                title: "任务大厅",
                iconfont: "\ue892",
                path: "/task/task",
                notice: 3
                },
                {
                title: "我的",
                iconfont: "\ue8a0",
                path: "/user/user",
                dot: true
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
            },
            currentPage: 0
        };
    },
    components: {
        tabBar
    },
    created() {
        util.initIconFont();
    },
    methods: {
        tabTo(data) {
            this.currentPage = data.data.index
            let path = data.data.path || "";
            this.$router && this.$router.push(path);
        }
    }
};
</script>

<style scoped>
</style>
