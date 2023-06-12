import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
// import PhotoPage from '../views/PhotoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage,
    // children:[{
    //   path: "/",
    //   name: 'PhotoPage',
    //   redirect: "PhotoPage"
    // }]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
