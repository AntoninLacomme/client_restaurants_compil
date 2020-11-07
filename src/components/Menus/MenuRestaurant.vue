<template>
    <div>
        <template v-if="menu != undefined">
            <div>
                <md-content class="full-line md-scrollbar">
                    <md-content 
                        v-for="(m, index) in menu.lesCartes"
                        :key = "index"
                        class="carteMenu"
                    >
                        <CarteRestaurant :nom="m.nomCarte" :entree="m.entree" :plat="m.platPrincipal" :dessert="m.dessert"/>
                    </md-content> 
                </md-content>
                <md-content class="full-line md-scrollbar">
                        <p>
                    <md-list>
                        <md-subheader class="md-primary">Nos entrées</md-subheader>
                        <md-list-item 
                            v-for="(prix, plat) in menu.entrees"
                            :key = "plat"
                        >
                            <table class="presentation">
                                <tr><th>{{plat}}</th><th>{{prix}} €</th></tr>
                            </table>
                        </md-list-item>

                        <md-divider class="md-inset"></md-divider>

                        <md-subheader class="md-primary">Nos Plats</md-subheader>
                        <md-list-item 
                            v-for="(prix, plat) in menu.plats"
                            :key = "plat"
                        >
                            <table class="presentation">
                                
                                <tr><th>{{plat}}</th><th>{{randintBetween(prix.price[0], prix.price[1])}} €</th></tr>
                                <tr class="annotations"><td colspan="2">{{prix.description}}</td></tr>
                                <tr class="annotations" v-if="prix.cuisson != undefined"><td colspan="2">
                                    <span
                                        v-for="c in prix.cuisson"
                                        :key = "c"
                                    >{{c}}.  </span>
                                </td></tr>
                            </table>
                        </md-list-item>

                        <md-divider class="md-inset"></md-divider>

                        <md-subheader class="md-primary">Nos Accompagnements</md-subheader>
                        <md-list-item 
                            v-for="(prix, plat) in menu.accompagnements"
                            :key = "plat"
                        >
                            <table class="presentation">
                                <tr><th>{{plat}}</th><th>{{prix}} €</th></tr>
                            </table>
                        </md-list-item>

                        <md-divider class="md-inset"></md-divider>

                        <md-subheader class="md-primary">Nos Desserts</md-subheader>
                        <md-list-item 
                            v-for="(prix, plat) in menu.desserts"
                            :key = "plat"
                        >
                            <table class="presentation">
                                <tr><th>{{plat}}</th><th>{{prix}} €</th></tr>
                            </table>
                        </md-list-item>
                    </md-list>
                    </p>
                </md-content>
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

            console.log(menu);
        });
    },

    methods : {
        randintBetween (x, y) {
            return Math.floor(Math.random() * Math.floor(y - x)) + x;
        }
    }
}
</script>

<style scoped>
    .carteMenu {
        border: solid thin gold;
        width: calc(100% - 1em);
        margin: 0.5em;
        padding: 0.5em;
    }

    .carteMenu:hover {
        background-color: rgb(220, 220, 220);
    }

    .full-line {
        width: calc(50% - 2em);
        display: inline-block;
        vertical-align: top;
        max-height: 65vh;
        overflow: auto;
    }

    table {
        width: 100%;
    }

    .annotations > td {
        font-size: 10px;
        font-style: italic;
    }

    .presentation {
    }

    .presentation > tr:nth-child(1) > th:nth-child(1) {
        width: 95%;
    }
    .presentation > tr:nth-child(1) > th:nth-child(2) {
        width: 5%;
    }
</style>