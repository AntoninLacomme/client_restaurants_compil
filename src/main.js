import Vue from 'vue';
import App from './App.vue';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)


import VueRouter from 'vue-router';

import 'leaflet/dist/leaflet.css';

import TableauRestaurant from './components/TableauRestaurant.vue';
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
