import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '@/views/Сatalog'
import Registration from "@/views/Registration";
import Login from "@/views/Login";
import Success from "@/views/Success"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/success',
    name: 'Success',
    component: Success,
    beforeEnter: (to, from, next) => {
      if (from.name === 'Registration') {
        next()
      } else {
        next('/')
      }
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
