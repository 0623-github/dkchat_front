import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginUser from '../components/LoginUser.vue'
import RegisterUser from '../components/RegisterUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: LoginUser
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/register',
    component: RegisterUser
  }
]

const router = new VueRouter({
  routes
})

export default router
