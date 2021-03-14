import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
const Detail = () => import('../views/detail/Detail');

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: Home,
  meta: {
    showTab: true
  }
}, {
  path: '/category',
  name: 'category',
  component: Category,
  meta: {
    showTab: true
  }
}, {
  path: '/cart',
  name: 'cart',
  component: Cart,
  meta: {
    showTab: true
  }
}, {
  path: '/profile',
  name: 'profile',
  component: Profile,
  meta: {
    showTab: true
  }
}, {
  path: '/detail/:iid',
  name: 'detail',
  component: Detail,
  meta: {
    showTab: false
  }
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
