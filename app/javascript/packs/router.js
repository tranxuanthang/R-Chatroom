import Vue from "vue"
import Router from "vue-router"
import Chat from "../vue_views/Chat.vue";
import Register from "../vue_views/Register.vue";
import Login from "../vue_views/Login.vue";
import Logout from "../vue_views/Logout.vue";
import Index from "../vue_views/Index.vue";
import Activate from "../vue_views/Activate.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      meta: { title: "Home" },
      component: Index
    },
    {
      path: "/chat",
      name: "chat",
      meta: { title: "R-Chatroom" },
      component: Chat
    },
    {
      path: "/register",
      name: "register",
      meta: { title: "Register" },
      component: Register
    },
    {
      path: "/login",
      name: "login",
      meta: { title: "Login" },
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      meta: { title: "logout" },
      component: Logout
    },
    {
      path: "/activate",
      name: "activate",
      meta: { title: "Activate" },
      component: Activate
    }
  ]
});
