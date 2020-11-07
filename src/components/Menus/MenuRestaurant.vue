<template>
    <div>
        <h1>Hello je suis les MenuRestaurant</h1>

        <template v-if="menu != undefined">
            LES MENUS SONT ARRIVES !
            <div
                v-for="(m) in menu.lesCartes"
                v-bind:key = "m"
            >
                <CarteRestaurant :nom="m.nomCarte" :entree="m.entree" :plat="m.platPrincipal" :dessert="m.dessert"/>
            </div>    
        </template>
    </div>
</template>

<script>
import {events} from '../../main.js';
import CarteRestaurant from "./CarteRestaurant.vue";

export default {
    name: "MenuRestaurant",
    components: {
        CarteRestaurant
    },
    data : () => ({
        menu: undefined
    }),
    mounted : function() {
        events.$on("setMenu", (menu) => {
            this.menu = menu;
            console.log(this.menu);
        });
    },

    methods : {
    }
}
</script>

<style scoped>
    div {
        border: solid thin green;
    }
</style>