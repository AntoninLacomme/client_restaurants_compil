<template>
  <div id="app">
    <TableauRestaurant />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBjjdVYZrjcMbzJ6KS37f06P_ltlxjI2dE',
    libraries: 'places'
  }
})

import TableauRestaurant from './components/TableauRestaurant.vue'

export default {
  name: 'App',
  components: {
    TableauRestaurant
  }
}
</script>

<style>
body {
  color: ivory;
  background-color: rgb(120, 120, 120);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
