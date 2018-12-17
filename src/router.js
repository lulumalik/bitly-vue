import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'about',
      component: function () { 
        return import('./views/About.vue')
      },
    },
    {
      path: '/login',
      name: 'login',
      component: function () {
        return import('./components/auth/Login.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      component: function () {
        return import('./components/auth/Register.vue')
      }
    },
    {
      path: '/app',
      name: 'app',
      component: function () {
        return import('./components/app/App.vue')
      },
      meta: {
        user: true,
        guest: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.user)) {
    if(!localStorage.getItem("usertoken") && localStorage.getItem("usertoken") == null){
      next({
        path: "/login"
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("userToken") == null ) {
      next();
    } else {
      next({
        name: "Dashboard"
      })
    }
  } else {
    next();
  }
})

export default router