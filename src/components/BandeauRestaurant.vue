<template>
  <div>
      <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'BandeauRestaurant',
  props: {
      title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    background-color: brown;
    height: 100px;
}
</style>
