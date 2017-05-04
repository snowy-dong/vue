import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/header'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/goods',
      component: resolve => require(['@/components/goods/goods'], resolve)
    }, {
      path: '/ratings',
      component: resolve => require(['@/components/ratings/ratings'], resolve)
    }, {
      path: '/seller',
      component: resolve => require(['@/components/seller/seller'], resolve)
    }
  ]
})
router.push('/goods')
export default router