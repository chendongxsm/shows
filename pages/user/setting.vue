<template>
  <div>
    <div class="avatar-group">
      <div class="avatar-label">头像</div>
      <image class="avatar" src="http://pcgty0mib.bkt.clouddn.com/user/default-avatar.jpg"  @click="gallery" />
    </div>
    <NavGroup :navGroup="navGroup" :navGroupStyle="navGroupStyle"  style="margin-left: 15px;"></NavGroup>
  </div>
</template>
<script>
  const actionSheet = weex.requireModule('actionSheet');
  const photo = weex.requireModule('photo');
  const nat_camera = weex.requireModule('nat_camera');
  const nat_network_transfer = weex.requireModule('nat_network_transfer');

  var ImageCropPicker = weex.requireModule('imageCropPicker')
  var options = {
      width: 300,
      height: 300,
      includeExif: true,
      mediaType: 'photo',
      cropping: true
  }

  import NavGroup from '@/components/navGroup'
  export default {
    components: {
      NavGroup
    },
    data(){
      return{
        navGroup: [
          {
            title: '用户昵称',
            value: '陈东xsm',
            path: '',
            type: 'view'
          },
          {
            title: '更改手机号',
            value: '13071249530',
            path: '',
            type: 'view'
          },
          {
            title: '登录密码',
            value: '去修改',
            path: '',
            type: 'view'
          },
        ],
        navGroupStyle: {
          itemPaddingLeft: '0px'
        },
        result: ''
      }
    },
    methods: {
      jumpUrl(path){
        this.$router.push(path)
      },

      gallery(e) {
        console.log(ImageCropPicker)
        return false
            ImageCropPicker.openPicker(options, (response) => {
              
                // 成功返回 {code:'E_SUCCESS', data:{...}}
                this.result = JSON.stringify(response)
            })
        },
        camera(e) {
            ImageCropPicker.openCamera(options, (response) => {
                // 失败返回 {code:'E_PERMISSION_MISSING', message:'...'}
                this.result = JSON.stringify(response)
            })
        }
    },
    created(){
      
    }
  };
</script>
<style scoped>
  .avatar-group{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 140px;
    margin-left: 15px;
    padding-right: 30px;
    border-bottom: 1px solid #eee;
  }
  .avatar-label{
    margin-left: 10px;
    font-size: 28px;
    color: #666;
  }
  .avatar{
    width: 100px;
    height: 100px;
  }
</style>

