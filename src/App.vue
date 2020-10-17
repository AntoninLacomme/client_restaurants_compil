<template>
  <div id="app">
    <TableauRestaurant />
  </div>
</template>

<script>
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
