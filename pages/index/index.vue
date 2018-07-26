<template>
  <div class="wrapper">
    <slider class="slider" interval="5000" auto-play="true">
      <div class="frame" v-for="(img, idx) in imageList">
        <image class="image" resize="cover" :src="img"></image>
      </div>
    </slider> 
    <div class="menu">1231111</div>
    <div class="menu">2123312321</div>
    <image class="image" style="width:750px;width:300px" src="https://img1.360buyimg.com/da/jfs/t20455/301/2314342412/184746/2428898/5b50376cNea0cbd1a.jpg!cr_1125x549_0_72.dpg"></image>
  </div>
</template>
<style scoped>
  .slider, .frame,  .frame figure{
    width: 750px;
    height: 300px;
  }
</style>
<script>
  export default {
    data: () => ({
      imageList: [
        'https://img1.360buyimg.com/da/s750x366_jfs/t24556/120/1048702098/197464/88130084/5b4f153cN998ac1ea.jpg!cr_1125x549_0_72.dpg',
        'https://img1.360buyimg.com/da/jfs/t20455/301/2314342412/184746/2428898/5b50376cNea0cbd1a.jpg!cr_1125x549_0_72.dpg',
        'https://m.360buyimg.com/mobilecms/s750x366_jfs/t22453/74/1029933177/185559/f279931e/5b4d97f3N52a2331b.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      ]
    }),
    methods: {
    }
  }
</script>