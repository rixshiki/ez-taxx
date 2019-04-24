import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ '@/views/register.vue')
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: () => import(/* webpackChunkName: "about" */ '@/views/calculate.vue')
    },
    {
      path: '/advDiscountTax',
      name: 'advDiscountTax',
      component: () => import(/* webpackChunkName: "about" */ '@/views/advDiscountTax.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ '@/views/contact.vue')
    },
    {
      path: '/descrip',
      name: 'descrip',
      component: () => import(/* webpackChunkName: "about" */ '@/views/descrip.vue')
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import(/* webpackChunkName: "about" */ '@/views/NavBar.vue')
    },
    {
      path: '/navbaruser',
      name: 'navbaruser',
      component: () => import(/* webpackChunkName: "about" */ '@/views/NavBarUser.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '@/views/login.vue')
    },
    {
      path: '/popup',
      name: 'popup',
      component: () => import(/* webpackChunkName: "about" */ '@/views/popup.vue')
    }
  ]
})
