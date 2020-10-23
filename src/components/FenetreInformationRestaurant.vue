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
                        <h1>Adresse<span class="search-map" @click="searchOnGoogleMap"><md-icon>search</md-icon></span></h1>
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
                    </span>
                </template>                    
            </md-tab>

            <template v-if="actualRestaurant.grades != undefined">
                 <md-tab md-label="Grades">
                    <h1>Grades</h1>
                    <md-table v-model="actualRestaurant.grades" md-fixed-header>
                        <md-table-row slot="md-table-row" slot-scope="{item}" md-selectable="single">
                            <template v-if="actualRestaurant.grades.date != undefined">
                                <md-table-cell md-label="Date">{{item.date}}</md-table-cell>
                            </template>
                            <template v-if="actualRestaurant.grades.grade != undefined">
                                <md-table-cell md-label="Grade">{{item.grade}}</md-table-cell>
                            </template>
                            <template v-if="actualRestaurant.grades.score != undefined">
                                <md-table-cell md-label="Score">{{item.score}}</md-table-cell>
                            </template>
                        </md-table-row>
                    </md-table>                 
                </md-tab>
            </template>
           


            <md-tab md-label="Modification des données">
                <form @submit.prevent="modifiedRestaurant">
                    <md-field>
                        <label>Nom du Restaurant</label>
                        <md-input name="nom" v-model="actualRestaurant.name"></md-input>
                    </md-field>
                    <md-field>
                        <label>Type de Cuisine</label>
                        <md-input name="cuisine" v-model="actualRestaurant.cuisine"></md-input>
                    </md-field>
                    <md-button type="submit" class="md-raised">Valider Modification</md-button>
                </form>
            </md-tab>

            <md-tab md-label="Ajouter un Grade">
                <p>Ajouter un nouveau grade à ce restaurant</p>
                <form>
                    <md-datepicker v-model="selectedDate">
                        <label>Date de test</label>
                    </md-datepicker>

                    <md-field>
                        <label>Grade</label>
                        <md-select v-model="gradeLabel" name="grade">
                            <md-option value="A">A</md-option>
                            <md-option value="B">B</md-option>
                            <md-option value="C">C</md-option>
                            <md-option value="D">D</md-option>
                            <md-option value="E">E</md-option>
                            <md-option value="F">F</md-option>
                            <md-option value="G">G</md-option>
                        </md-select>
                    </md-field>
                </form>
            </md-tab>

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
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

export default {
    name: "FenetreInformationRestaurant",
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
            address: {coord: [0, 0]},
            grades: undefined
        },
        gradeLabel: "A",

        latitude: 0,
        longitude: 0,
        hmdtabs: 500,

        markers: []

    }),

    methods : {
        displayDialogDataRestaurant (restaurant) {
            //console.trace ();
            this.actualRestaurant = restaurant;
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
        },
        searchOnGoogleMap (event) {
            console.log(event);
        }
    }
}
</script>

<style scoped>
    .md-tabs {
        height: calc(50% + 1px);
    }

    .tableSetValuesRest {
        display: inline-block;
        padding: 0.5em;
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