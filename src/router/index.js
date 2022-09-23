import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginUser from '../components/LoginUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: LoginUser
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
