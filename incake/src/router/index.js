import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { Header } from 'element-ui'
import Index from '../views/Index.vue'
import All from '../views/All.vue'
import Cart from '../views/Cart.vue'
//导入项目组件文件

Vue.use(VueRouter)

  const routes = [
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/all',
    component:All
  },
  {
    path:'/index',
    component:Index
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    component:Home
  }
]

const router = new VueRouter({
  routes
})

export default router
