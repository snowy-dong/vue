<template>
  <div class="header">
    <!--内容相关-->
    <div class='content-wrapper'>
      <div class='avatar'>
        <!--头像-->
          <img width='64' height='64' :src='seller.avatar'  />
      </div>
      <div class='content'>
        <div class='title'>
            <span class='brand'></span>
            <span class='name'>{{seller.name}}</span>
        </div>
        <div class='description'>
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if='seller.supports' class="support">
          <span class="icon" :class='classMap[seller.supports[0].type]'></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count">
        <span class="count">{{seller.supports.length}}</span>
      </div>
    </div>
    <!--公告相关-->
    <div class='bulletin-wrapper'>

    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props:{
    seller:{
      type:Object
    }
  },
  created () {
    this.classMap=['decrease','discount','special','invoice','guarantee']
  },
   data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .header
    color:#fff
    background:#000
    .content-wrapper
      font-size:0
      padding:24px 12px 18px 24px
      .avatar
        display:inline-block
        vertical-align:center
        img
          border-radius:2px
      .content
        display:inline-block
        margin-left:16px
        font-size:14px
        .title
          margin:2px 0 8px 0
          .brand
            width:30px
            height:18px
            vertical-align:center
            display:inline-block
            bg-image('./img/brand')
            background-size:30px 18px
            background-repeat:no-repeat
          .name
            margin-left:6px
            font-size:16px
            line-height:18px
            font-weight:bold
        .description
          margin-bottom:10px
          line-height:12px
          font-size:12px
        .support
          .icon
            display:inline-block
            vertical-algin:top
            width:12px
            height:12px
            margin-right:4px
            background-size:12px
            background-repeat:no-repeat
            &.decrease
              bg-image('./img/decrease_1')
            &.discount
              bg-image('./img/discount_1')
            &.invoice
              bg-image('./img/invoice_1')
            &.special
              bg-image('./img/special_1')
            &.guarantee
              bg-image('./img/guarantee_1')
          .text
            line-height:12px
            font-size:10px
      .support-count
        position:absolute
        right:12px
        bottom:18px
        padding:0 8px
        height:24px
        line-height:24px
        border-radius:14px
        color:#fff
        background:rgba(0,0,0,0.2)
        text-align:center
        .count
          font-size:10px













</style>
