<template>
    <div>
        <h1>Hi</h1>
    </div>
</template>

<script>
export default {
    name: 'RestaurantDetail',
    computed: {
        id () { return this.$route.params.id; }
    }
}
</script>

<style scoped>
    body {
        position: absolute;
        margin: 0 0 0 0;
        width: 100%;
        height: 100vh;
        background-color: red;
    }
</style>