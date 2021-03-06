import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import UsersShow from './views/UsersShow.vue';
import UsersEdit from './views/UsersEdit.vue';
import MealsNew from './views/MealsNew.vue';
import MealsIndex from './views/MealsIndex.vue';


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')},
       { path: "/signup", name: "signup", component: Signup },
       { path: "/login", name: "login", component: Login },
       { path: "/logout", name: "logout", component: Logout },
       { path: "/users/:id", name: "users-show", component: UsersShow },
       { path: "/users/:id/edit", name: "users-edit", component: UsersEdit },
       { path: "/meals/edit", name: "meals-new", component: MealsNew },
       { path: "/meals", name: "meals-index", component: MealsIndex }
  ]
})
