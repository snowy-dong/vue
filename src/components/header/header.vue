<template>
  <div class="header">
    <!--内容相关-->
    <div class='content-wrapper'>
      <!--头像-->
      <div class='avatar'>
        <img width='64' height='64' :src='seller.avatar' />
      </div>
      <!--主体内容-->
      <div class='content'>
        <div class='title'>
          <span class='brand'></span>
          <span class='name'>{{seller.name}}</span>
        </div>
        <!--描述-->
        <div class='description'>
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <!--支持情况-->
        <div v-if='seller.supports' class="support">
          <span class="icon" :class='classMap[seller.supports[0].type]'></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!--公告相关-->
    <div class='bulletin-wrapper'>
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" />
    </div>
    <div class="detaile"></div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    data() {
      return {}
    }
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";
  @import "./header.styl"
</style>