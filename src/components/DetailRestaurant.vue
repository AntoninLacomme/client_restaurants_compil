<template>
    <div class='main'>
        <Redirection />
        LES DETAILS
    </div>
</template>

<script>
import Redirection from './Redirection.vue';

export default {
    name: "DetailRestaurant",
    components: {
        Redirection
    },
    data: () => ({
        id: ""
    }),
    methods: {
        getRestaurantByID () {
            
        }
    },
    mounted: function () {
        this.id = this.$router.history.current.query.id;
    }
}
</script>

<style scoped>

</style>