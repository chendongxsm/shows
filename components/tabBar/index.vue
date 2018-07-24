<template>
  <div class="wrapper" :style="{ backgroundColor: tabStyles.bgColor, height: (tabStyles.height + (isIPhoneX ? 78 : 0))+'px',
  paddingBottom:isIPhoneX?'78px':'0'}">
    <div v-for="(tab, index) in tabTitles" :key="tab.title" class="bar-item" @click="tabTo(tab.path, index)"
      :style="{ width: tabStyles.width +'px', height: tabStyles.height +'px', backgroundColor: currentPage == index ?
      tabStyles.activeBgColor : tabStyles.bgColor }"
    >
      <div class="bar-ic ">
        <text :style="{fontFamily: 'iconfont', fontSize: tabStyles.iconFontSize+'px', 
        marginBottom:tabStyles.iconFontMarginBottom ? (tabStyles.iconFontMarginBottom +'px') : '8px', 
        color: currentPage == index ? tabStyles.activeIconFontColor : tabStyles.iconFontColor}">{{tab.iconfont}}</text>
        <text class="i-notice" v-if="tab.notice">{{tab.notice}}</text>
        <text class="i-dot" v-if="tab.dot"></text>
      </div>
      
      <text class="bar-txt" :style="{ fontSize: tabStyles.fontSize+'px', 
        fontWeight: (currentPage == index && tabStyles.isActiveTitleBold)? 'bold' : 'normal', 
        color: currentPage == index ? tabStyles.activeTitleColor : tabStyles.titleColor, 
        paddingLeft:tabStyles.textPaddingLeft+'px', paddingRight:tabStyles.textPaddingRight+'px'}">{{tab.title}}</text>
      
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  background-color: #fafafa;
}
.bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bar-ic{
  position: relative;
}
.bar-txt,
.bar-ic {
  text-align: center;
}
.i-notice {
  position: absolute;
  top: -5px;
  right: -15px;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-color: #f00;
}
.i-dot {
  position: absolute;
  top: -5px;
  right: -5px;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: #f00;
}
</style>
<script>
import Utils from "../utils";
export default {
  props: {
    tabTitles: {
      type: Array,
      default: () => []
    },
    tabStyles: {
      type: Object,
      default: () => ({
        bgColor: "#FFFFFF",
        activeBgColor: "#FFFFFF",
        titleColor: "#666666",
        activeTitleColor: "#3D3D3D",
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 4,
        iconFontColor: "#333333",
        activeIconFontColor: "#3D3D3D",
      })
    },
    currentPage: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {},
  data() {
    return {};
  },
  created() {
    const { titleType, tabStyles } = this;
    
    this.isIPhoneX = Utils.env.isIPhoneX();
  },
  mounted() {},
  methods: {
    isActive: function(_c) {
      return this.currentPage === _c ? "bar-active" : "";
    },
    tabTo(path, index) {
      if (this.currentPage === index) return;
      this.$emit("tabTo", {
        status: "tabTo",
        data: {
          path: path,
          index: index
        }
      });
    }
  }
};
</script>