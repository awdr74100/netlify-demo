import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/HelloWorld.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: Home,
    },
  ],
});
