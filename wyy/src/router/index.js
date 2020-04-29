import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const login = () => import("../pages/login")
const index = () => import("../pages/index")
const top = () => import("../pages/top")
const tuijian = () => import("../pages/tuijian")
const list = () => import("../pages/list")
const play = () => import("../pages/play")
const comment = () => import("../pages/comment")
const search = () => import("../pages/search")
export default new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
      path: "/login",
      component: login
    },
    {
      path: "/index",
      component: index,
      children: [{
          path: "tuijian",
          component: tuijian
        }, {
          path: "top",
          component: top
        },
        {
          path: "",
          redirect: "tuijian"
        }
      ]
    },
    {
      path: "/list",
      component: list
    },
    {
      path: "/comment",
      component: comment
    }, {
      path: "/search",
      component: search
    },
    {
      path: "/play/:id",
      component: play
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
})
