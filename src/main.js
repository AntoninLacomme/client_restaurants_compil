import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';

import 'leaflet/dist/leaflet.css';

import TableauRestaurant from './components/TableauRestaurant.vue';
import RestaurantDetail from './components/RestaurantDetail.vue';
import NewRestaurant from './components/NewRestaurant.vue';
import DetailRestaurant from './components/DetailRestaurant.vue';

export const events = new Vue ();

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
      },
      {
        path: '/DetailRestaurant',
        component: DetailRestaurant
      }
    ],
    mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
