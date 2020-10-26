<template>
    <div class='main'>
        <FenetreInformationRestaurant :restaurant="{restaurant: actualRestaurant}" ref="fenInfRest"/>
        <Redirection />

        <md-app class='main'>
        <md-app-toolbar class="md-primary">
            <span class="md-title">Vos Meilleurs Restaurants :</span>
        </md-app-toolbar>

        <md-app-drawer md-permanent="clipped">
            <md-content>
                <md-field>
                    <md-input v-model="messCountRestaurants" readonly></md-input>
                </md-field><md-field>
                    <md-input v-model="messNbPages" readonly></md-input>
                </md-field>
            </md-content>
            <md-toolbar class="md-transparent parameters" md-elevation="0">
                <div class="md-title">Paramètres de Recherche</div>
            </md-toolbar>

            <md-list>
                <md-list-item class="listbrd">                    
                    <md-field md-clearable class="md-toolbar-section-end">
                        <md-input placeholder="Search by name..." @input="textChange" />
                    </md-field>
                </md-list-item>

                <md-list-item class="listbrd">
                <input type="range" v-on:input="sliderChange" v-on:change="sliderCharge" v-model.number="nbRestaurants" min="5" max="100"> {{ nbRestaurants }} / pages            </md-list-item>
                <md-list-item class="listbrd">
                    <md-button class="md-raised" :md-ripple="false" v-on:click="decreasePage()" v-bind:disabled=precDisabled>Précédant</md-button>
                    <md-button class="md-raised" :md-ripple="false" v-on:click="increasePage()">Suivant</md-button>
                </md-list-item>

                
            </md-list>
            </md-app-drawer>

            <md-app-content>
                <template v-if="restaurants.length > 0">
                    <md-table v-model="restaurants" md-sort="name" md-sort-order="asc" md-card @md-selected="onSelect">
                        <md-table-row slot="md-table-row" slot-scope="{item}" md-selectable="single">
                            <md-table-cell md-label="Name" md-sort-by="name">{{item.name}}</md-table-cell>
                            <md-table-cell md-label="Cuisine" md-sort-by="cuisine">{{item.cuisine}}</md-table-cell>
                        </md-table-row>
                    </md-table>
                </template>
                <template v-else>
                    <md-field>
                        <md-input v-model="messageMissRestaurant" readonly></md-input>
                    </md-field>                 
                </template>
            </md-app-content>
        </md-app>
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


import FenetreInformationRestaurant from './FenetreInformationRestaurant.vue';
import Redirection from './Redirection';
import _ from "lodash";

export default {
    name: 'TableauRestaurant', 
    components : {
        FenetreInformationRestaurant,
        Redirection
    },
    data: () => ({
            messageMissRestaurant: "Aucun restaurant ne correspond à vos critères de recherche...",
            precDisabled: true,
            restaurants: [],
            countRestaurants: 0,
            messCountRestaurants: "",
            messNbPages: "",
            nbRestaurants: 13,
            page: 1,
            keywordRestaurant: '',
            lastTimeScroll: 0,
            actualRestaurant: {
                _id: "",
                name: "",
                cuisine: ""
            },
            showDialogDataRestaurant: false
        }
    ),
    methods: {
        onSelect (item) {
            console.log(item);
            if (item != undefined) {
                if (item != null) {
                    this.actualRestaurant = item;
                }
                this.$refs.fenInfRest.displayDialogDataRestaurant (this.actualRestaurant);
            }
        },
        getRestaurantFromServer () {
            let url = "http://127.0.0.1:8080/api/restaurants?pagesize=" + this.nbRestaurants;
            url += "&page=" + this.page;
            url += "&name=" + this.keywordRestaurant;
            fetch (url)
                .then ((response) => {
                    return response.json();
                })
                .then ((response) => {
                    this.restaurants = response.data;
                    this.countRestaurants = response.count;
                    this.messCountRestaurants = this.countRestaurants + " restaurants trouvés";

                    let c = this.countRestaurants / this.nbRestaurants;
                    if ((c | 0) < c) {
                        c = (c | 0) + 1;
                    }
                    this.messNbPages = this.page + " / " + c;

                    this.$refs.fenInfRest.closeDialogRestaurant ();
                    this.showDialogAddRestaurant = false;
                });
        },
        supprimerRestaurant(event) {
            event.preventDefault ();
            if (this.actualRestaurant._id != undefined) {
            fetch ("http://127.0.0.1:8080/api/restaurants/" + this.actualRestaurant._id, {
                method: "DELETE"
            }).then (() => {
                this.getRestaurantFromServer ();
            });
            }
            else {
                alert ("Ce restaurant n'existe pas encore dans la base de donnée, veuillez attendre quelques secondes");
            }
        },
        deleteRestaurant (resto) {
            fetch ("http://127.0.0.1:8080/api/restaurants/" + resto._id, {
                method: "DELETE"
            }).then (() => {
                this.getRestaurantFromServer ();
            });
        },
        modifiedRestaurant (event) {
            event.preventDefault ();
            let donneesFormulaire = new FormData(event.target);
            let url = "http://127.0.0.1:8080/api/restaurants/" + this.actualRestaurant._id;
            fetch(url, {
                method: "PUT",
                body: donneesFormulaire
            })
            .then((responseJSON) => {
                responseJSON.json()
                    .then(() => {
                        this.getRestaurantFromServer ();
                    });
                });
        },
        
        getColor(index) {
            return (index % 2) ? 'lightBlue' : 'pink';
        },
        sliderChange (event) {
            this.lastTimeScroll = event.timeStamp;
        },
        sliderCharge : _.debounce (function () {
            this.$refs.fenInfRest.closeDialogRestaurant ();
            this.getRestaurantFromServer ();
        }, 300),
        textChange : _.debounce (function (inputText) {
            this.keywordRestaurant = inputText;
            this.$refs.fenInfRest.closeDialogRestaurant ();
            this.getRestaurantFromServer ();            
        }, 300),
        increasePage () {
            this.page++;
            this.precDisabled = false;
            this.$refs.fenInfRest.closeDialogRestaurant ();
            this.getRestaurantFromServer ();
        },
        decreasePage () {
            this.page--;
            if (this.page <= 1) {
                this.page = 1;
                //this.$refs.buttonPrecedant.disabled = true;
                this.precDisabled = true;
            }
            this.$refs.fenInfRest.closeDialogRestaurant ();
            this.getRestaurantFromServer ();
        }
    },
    mounted: function () {
        this.getRestaurantFromServer ();

        if (this.page <= 1) {
            //this.$refs.buttonPrecedant.disabled = true;
            this.precDisabled = true;
        }
    }
}

</script>

<style scoped>
    div.main {
        height: 100vh;
    }

    .md-table {
        height: 87vh;
        max-height: 87vh;
    }

    .buttonAlignRight {
        right: 1em;
        position: absolute;
    }

    div.little-box  {
        border: solid thin black;    
    }

    .md-app {
        border: 1px solid rgba(#000, .12);
    }

    .drawer {
        background-color: rgb(140, 140, 140);
    }

    .midd-section {
        width: 100%;
    }

    .midd-section > tr > td {
        width: calc(50% - 2px);
    }

    .page-container {
        min-height: 300px;
        overflow: hidden;
        position: relative;
        border: 1px solid rgba(#000, .12);
    }

    .md-drawer {
        width: 400px;
    }
    .md-layout-item {
        width: calc(400px - 2em);
    }

    .md-content {
        padding: 16px;
    }

    .padd1em {
        padding: 0.5em;
        margin: 0.5em;
        border: solid thin rgba(0, 0, 0, 0.15);
    }

    .listbrd {
        border-top: solid thin rgba(0, 0, 0, 0.15);
    }

    .md-table-head-label {
        background-color: darkblue;
        width: 100%;
        text-align: center;
    }

    .md-table-row:nth-child(2n+1) {
        background-color: rgb(250, 250, 255);
    }
</style>