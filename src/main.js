import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';

import TableauRestaurant from './components/TableauRestaurant.vue';
import RestaurantDetail from './components/RestaurantDetail.vue';
import NewRestaurant from './components/NewRestaurant.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter ({
    routes: [
      {
        path: '/',
        component: TableauRestaurant
      },
      {
        path: '/RestaurantDetail',
        component: RestaurantDetail
      },
      {
        path: '/NewRestaurant',
        component: NewRestaurant
      }
    ],
    mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
