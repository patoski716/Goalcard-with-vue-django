import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import HomeView from '../views/HomeView.vue'
import Signup from '../views/sign-up.vue'
import Login from '../views/log-in.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import AddDocs from '../views/dashboard/Addfile.vue'
import Detail from '../views/dashboard/Detail.vue'
import Edit from '../views/dashboard/Editfile.vue'
import Page from '../views/404Page.vue'






const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: Signup
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: Login
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
  
  {
    path: '/dashboard/add',
    name: 'AddDocs',
    component: AddDocs,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/file/:id/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: Page
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
