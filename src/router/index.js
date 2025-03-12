import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';
import Login from '@/components/Login.vue';
import CreatePost from '@/components/CreatePost.vue';
import DisplayPost from '@/components/DisplayPost.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      children: [
        {
          path: 'create',
          component: CreatePost,
        },
        {
          path: ':id',
          component: DisplayPost,
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
