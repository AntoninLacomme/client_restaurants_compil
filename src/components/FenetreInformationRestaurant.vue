<template>
    <md-dialog :md-active.sync="showDialogDataRestaurant">
        <md-dialog-title>{{actualRestaurant.name}}</md-dialog-title>

        <md-tabs>
            <!-- 

                C'est avec joie que j'aurai laissé ce code, mais bon, vueJS a décidé que dans ce fichier le 
                comportement de MenuRestaurant serait complètement cassé

                Donc pour voir le rendu normal, direction les détails :/
                ($emit, ça a l'air très sympa sur le papier, mais ça le serait plus s'il fonctionnait de la même façon d'un fichier à l'autre...)
                
            <md-tab md-label="Notre carte rapide">
                <MenuRestaurant/>
            </md-tab>-->
            <md-tab md-label="General">
               <!-- <span class="tableSetValuesRest">
                    <h1>Données Restaurant</h1>
                    <md-field>
                        <label>Nom du Restaurant :</label>
                        <md-input v-model="actualRestaurant.name" readonly></md-input>
                    </md-field>

                    <md-field>
                        <label>Cuisine du Restaurant :</label>
                        <md-input v-model="actualRestaurant.cuisine" readonly></md-input>
                    </md-field>
                </span> -->
                <template >  
                    <span class="tableSetValuesRest">                        
                        <h1>
                            <router-link :to=linkedid>
                                <span class="search-map">
                                    <md-icon>search</md-icon>
                                    <md-tooltip md-direction="bottom">Détails et précisions</md-tooltip>
                                </span>
                            </router-link>
                            Adresse
                            <router-view></router-view>
                        </h1>
                        <md-field v-if="actualRestaurant.address != undefined">
                            <label>Quartier :</label>
                            <md-input v-model="actualRestaurant.borough" readonly></md-input>
                        </md-field>  
                        <md-field v-if="actualRestaurant.address != undefined">
                            <label>Rue :</label>
                            <md-input v-model="actualRestaurant.address.street" readonly></md-input>
                        </md-field>  
                        <md-field v-if="actualRestaurant.address != undefined">
                            <label>Building</label>
                            <md-input v-model="actualRestaurant.address.building" readonly></md-input>
                        </md-field>
                        <!-- <md-field>
                            <label>Coordonnées</label>
                            <md-input v-model="actualRestaurant.address.coord[0]" readonly></md-input>
                            <md-input v-model="actualRestaurant.address.coord[1]" readonly></md-input>
                        </md-field>
                        <md-field>         
                            <label>ZipCode:</label>
                            <md-input v-model="actualRestaurant.address.zipcode" readonly></md-input>
                        </md-field> -->
                        Pour les détails, cliquez sur la petite loupe.
                    </span>
                    <span class="tableSetValuesRest" v-if="actualRestaurant.address != undefined"> 
                        <div class="map-centered" style="height: 400px; width: 450px">
                            <LMap
                                @ready="mapReady"
                                :zoom="zoom"
                                :center="center"
                            >
                                <LTileLayer
                                    :url="url"
                                    :attribution="attribution"
                                />
                                <template v-if="currentCenter != null">
                                    <LMarker :lat-lng="currentCenter"></LMarker>
                                </template>
                            </LMap>    
                        </div>
                    </span>
                </template>                    
            </md-tab>

            <template v-if="actualRestaurant.grades != undefined">
                 <md-tab md-label="Les notes du Jury">
                    <h1>Les notes du Jury</h1>
                    <md-table v-model="grades" md-fixed-header>
                        <md-table-row slot="md-table-row" slot-scope="{item}" md-selectable="single">
                            <md-table-cell md-label="Date">{{convertDate(item.date)}}</md-table-cell>
                            <md-table-cell md-label="Grade">{{item.grade}}</md-table-cell>
                            <md-table-cell md-label="Score">{{item.score}}</md-table-cell>
                        </md-table-row>
                    </md-table>                 
                </md-tab>
            </template>

            <md-tab md-label="Gestion Admin">
                <p>Voulez vous vraiment supprimer définitevement ce restaurant ?</p>
                <form v-on:submit="supprimerRestaurant">
                    <md-button type="submit" class="md-raised">Supprimer le Restaurant</md-button>
                </form>
            </md-tab>
        </md-tabs>

        <md-dialog-actions>
            <md-button class="md-primary" @click="showDialogDataRestaurant = false">Close</md-button>
        </md-dialog-actions>
    </md-dialog>
        <!-- FIN zone de dialogue pour les données d'un restaurant -->
</template>


<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// import {Menu} from '../assets/classes/Menu.js'
// import {CarteDesPlats} from '../assets/classes/CarteDesPlats.js'
// import MenuRestaurant from './Menus/MenuRestaurant.vue';
// import {events} from '../main.js';

export default {
    name: "FenetreInformationRestaurant",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        // MenuRestaurant
    },
    props: {
        restaurant: Object
    },
    data : () => ({
        showDialogDataRestaurant: false,
        selectedDate: new Date (),
        actualRestaurant: {
            _id: "",
            name: "",
            cuisine: "",
            address: {coord: [40.71, -74]},
            grades: []
        },
        linkedid: "/DetailRestaurant?id=",
        grades: [],
        gradeLabel: "A",

        markers: [],

        zoom: 15,
        center: [40.71, -74],
        currentCenter: null,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

       // menu : undefined
    }),
    methods : {
        mapReady (Lmap) {
            Lmap.invalidateSize ();
        },
        displayDialogDataRestaurant (restaurant) {
            this.actualRestaurant = restaurant;
            console.log(this.actualRestaurant);
            this.grades = this.actualRestaurant.grades;
            this.linkedid = "/DetailRestaurant?id=" + this.actualRestaurant._id;

            if (restaurant.address != undefined) {
                this.latitude = this.actualRestaurant.address.coord[1];
                this.longitude = this.actualRestaurant.address.coord[0];

                this.center = [this.actualRestaurant.address.coord[1],this.actualRestaurant.address.coord[0]];
                this.currentCenter = L.latLng(this.actualRestaurant.address.coord[1],this.actualRestaurant.address.coord[0]);
            }

            // normalement ce code aurait permis d'afficher des menus aléatoires
            // c'est un simple copié collé du code présent dans DetailRestaurant, qui là bas marche au poil
            // mais ici le $emit a un comportement abérant, 
            // 1er appel de la fonction -> $emit appelé 0 fois
            // 2eme appel -> $emit appelé 1 fois
            // 3ème appel -> $emit appelé 2 fois
            // etc etc

            // de plus, du coté de la vue MenuRestaurant, l'appel est bien reçu
            // le code est bien modifié
            // mais le template ne se met pas à jour, et continue d'afficher la div vide par défaut

            // visiblement $emit c'est un peu la roulette russe, il faut prier pour qu'elle marche...

            // this.menu = new Menu (new CarteDesPlats ()).generateMenu (this.actualRestaurant.cuisine);
            // events.$emit("setMenu", this.menu)
            this.showDialogDataRestaurant = !this.showDialogDataRestaurant;
        },
        closeDialogRestaurant () {
            this.showDialogDataRestaurant = false;
        },
        modifiedRestaurant (event) {
            this.$parent.modifiedRestaurant(event);
        },
        supprimerRestaurant (event) {
            event.preventDefault ();
            this.$parent.deleteRestaurant (this.actualRestaurant);
        },
        convertDate (date) {
            return date.substring(0, date.indexOf("T"));
        }
    },
    mounted: function () {
    }
}
</script>

<style scoped>
    .md-tabs {
        height: calc(50% + 1px);
    }

    .tableSetValuesRest {
        display: inline-block;
        padding: 0.2em;
        margin: 0.5em;
        max-width: calc(50% -1em);
        width: calc(50% - 1em);
        max-height: 600px;
        vertical-align: top;

        border: solid thin rgba(200, 200, 200, 0.12);
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

    .search-map {
        position: relative;
        top: -2px;
    }

    .search-map:hover {
        cursor: pointer;
    }
</style>