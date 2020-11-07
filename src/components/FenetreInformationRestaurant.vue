<template>
    <md-dialog :md-active.sync="showDialogDataRestaurant">
        <md-dialog-title>Données du Restaurant</md-dialog-title>

        <md-tabs>
            <md-tab md-label="General">
                <span class="tableSetValuesRest">
                    <h1>Données Restaurant</h1>
                    <md-field>
                        <label>Nom du Restaurant :</label>
                        <md-input v-model="actualRestaurant.name" readonly></md-input>
                    </md-field>

                    <md-field>
                        <label>Cuisine du Restaurant :</label>
                        <md-input v-model="actualRestaurant.cuisine" readonly></md-input>
                    </md-field>
                </span>
                <template v-if="actualRestaurant.address != undefined">  
                    <span class="tableSetValuesRest">                        
                        <h1>Adresse
                            <router-link :to=linkedid>
                                <span class="search-map">
                                    <md-icon>search</md-icon>
                                </span>
                            </router-link>

                            <router-view></router-view>
                        </h1>
                        <md-field>
                            <label>Quartier :</label>
                            <md-input v-model="actualRestaurant.borough" readonly></md-input>
                        </md-field>  
                        <md-field>
                            <label>Rue :</label>
                            <md-input v-model="actualRestaurant.address.street" readonly></md-input>
                        </md-field>  
                        <md-field>
                            <label>Building</label>
                            <md-input v-model="actualRestaurant.address.building" readonly></md-input>
                        </md-field>
                        <md-field>
                            <label>Coordonnées</label>
                            <md-input v-model="actualRestaurant.address.coord[0]" readonly></md-input>
                            <md-input v-model="actualRestaurant.address.coord[1]" readonly></md-input>
                        </md-field>
                        <md-field>         
                            <label>ZipCode:</label>
                            <md-input v-model="actualRestaurant.address.zipcode" readonly></md-input>
                        </md-field>
                    </span>
                    <span class="tableSetValuesRest"> 
                        <div class="map-google">
                            <GmapMap
                                :center="{lat:latitude, lng:longitude}"
                                :zoom="16"
                                map-type-id="terrain"
                                style="width: 400px; height: 300px"
                            >
                            </GmapMap>
                        </div>
                        <!-- <l-map
                            :zoom="zoom"
                            :center="center"
                            style="height: 500px; width: 100%"
                        >
                            <l-tile-layer
                                :url="url"
                                :attribution="attribution"
                            />
                            <l-marker :lat-lng="currentCenter"></l-marker>
                        </l-map> -->
                    </span>
                </template>                    
            </md-tab>

            <template v-if="actualRestaurant.grades != undefined">
                 <md-tab md-label="Grades">
                    <h1>Grades</h1>
                    <md-table v-model="grades" md-fixed-header>
                        <md-table-row slot="md-table-row" slot-scope="{item}" md-selectable="single">
                            <md-table-cell md-label="Date">{{item.date}}</md-table-cell>
                            <md-table-cell md-label="Grade">{{item.grade}}</md-table-cell>
                            <md-table-cell md-label="Score">{{item.score}}</md-table-cell>
                        </md-table-row>
                    </md-table>                 
                </md-tab>
            </template>

            <md-tab md-label="Supprimer le Restaurant">
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
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default {
    name: "FenetreInformationRestaurant",
    components: {
        // LMap,
        // LTileLayer,
        // LMarker
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
        latitude: -74,
        longitude: 40.71,
        hmdtabs: 500,

        markers: []
        // currentCenter: L.latLng (40.71, -74),
        // zoom: 13,
        // center: [40.71, -74],
        // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        // attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }),
    methods : {
        displayDialogDataRestaurant (restaurant) {
            //console.trace ();
            this.actualRestaurant = restaurant;
            this.grades = this.actualRestaurant.grades;
            this.linkedid = "/DetailRestaurant?id=" + this.actualRestaurant._id,
            console.log(this.linkid);
            console.log(this.grades);
          // this.currentCenter = L.latLng (this.actualRestaurant.address.coord[1], this.actualRestaurant.address.coord[0]);
            if (restaurant.address != undefined) {
                this.latitude = this.actualRestaurant.address.coord[1];
                this.longitude = this.actualRestaurant.address.coord[0];
            }
            this.showDialogDataRestaurant = !this.showDialogDataRestaurant;
        },
        closeDialogRestaurant () {
            this.showDialogDataRestaurant = false;
        },
        modifiedRestaurant (event) {
            console.log("modified - FenetreInformationRestaurant");
            this.$parent.modifiedRestaurant(event);
        },
        supprimerRestaurant (event) {
            event.preventDefault ();
            this.$parent.deleteRestaurant (this.actualRestaurant);
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
        max-width: calc(33% -1em);
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
        margin-left: 8em;
    }

    .search-map:hover {
        cursor: pointer;
    }
</style>