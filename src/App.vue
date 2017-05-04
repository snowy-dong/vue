<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
         <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/header'
import vueRecource from 'vue-resource'
const ERR_OK =0;
Vue.use(vueRecource)
export default {
  name: 'app',
  data() {
    return  {
      seller:{}
    }
  },
  created () {
    this.$http.get("/api/seller").then(res=>{
      res=res.body
      if(res.errno===ERR_OK){
        this.seller =res.data
        console.log(this.seller)
      }

    },err=>{

    })
  },
  components:{
    'v-header':Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
@import "./common/stylus/mixin.styl"
  .tab
    display:flex
    width:100%
    height:40px
    line-height:40px
    border-1px(rgba(7,17,27.0.1))
    .tab-item
      flex:1
      text-align:center
      &>a
        display:block
        text-decoration:none
        &.router-link-active
          color:#c40000




</style>
