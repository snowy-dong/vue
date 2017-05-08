<template>
  <div>
    <v-header :seller="seller"></v-header>
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
  import Header from '@/components/header/header'
  import axios from 'axios'
  Vue.prototype.$http = axios
  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get("/api/seller").then(res => {
        console.log(res)
        this.seller = res.data;
      }, err => {

      })
    },
    components: {
      'v-header': Header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  @import "../common/stylus/mixin.styl";
  @import "./stylus/app.styl";

</style>
