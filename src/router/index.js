import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import global from '../global/global.js'

Vue.use(VueRouter)

const routes = [
  {
    path: global.mirrorRootPath,
    name: 'home',
    component: HomeView,
    meta: {
      title: "吉林大学开源镜像站"
    }
  },
  {
    path: global.helpRootPath,
    name: 'help',
    redirect: global.helpRootPath + '/welcome',
    component: () => import('../views/HelpView.vue'),
    children: [
      {
        path: ':name',
        name: 'help-detail',
        component: () => import('../views/HelpDetailView.vue'),
      }
    ]
  },
  {
    path: global.newsRootPath,
    name: 'news',
    component: () => import('../views/NewsView.vue'),
  },
  {
    path: global.newsRootPath + '/:name',
    name: 'news-detail',
    component: () => import('../views/NewsDetailView.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
