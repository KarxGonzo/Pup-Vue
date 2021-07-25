import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PuppiesIndex from '../views/PuppiesIndex.vue'
import PuppiesNew from '../views/PuppiesNew.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Puppies', 
    name: 'PuppiesIndex', 
    component: PuppiesIndex
  },
  {
    path:'/puppies/new', 
    name: 'PuppiesNew', 
    component: PuppiesNew
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
