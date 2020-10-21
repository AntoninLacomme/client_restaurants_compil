<template>
    <md-dialog :md-active.sync="showDialogDataRestaurant">
        <md-dialog-title>Données du Restaurant</md-dialog-title>

        <md-tabs md-dynamic-height>
            <md-tab md-label="General">
                <md-content md-fixed-header>
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
                        <h1>Adresse</h1>
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
                </template>
                <template v-if="actualRestaurant.grades != undefined">
                    <span class="tableSetValuesRest">
                        <h1>Grades</h1>
                        <md-table v-model="actualRestaurant.grades" md-fixed-header>
                            <md-table-row slot="md-table-row" slot-scope="{item}" md-selectable="single">
                                <md-table-cell md-label="Date">{{item.date}}</md-table-cell>
                                <md-table-cell md-label="Grade">{{item.grade}}</md-table-cell>
                                <md-table-cell md-label="Score">{{item.score}}</md-table-cell>
                            </md-table-row>
                        </md-table>
                    </span>
                </template>
                </md-content>
            </md-tab>

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
                        <md-select v-model="grade" name="grade">
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
        selectedDate: false,
        actualRestaurant: {
                _id: "",
                name: "",
                cuisine: "",
                grades: undefined
            },
    }),

    methods : {
        displayDialogDataRestaurant (restaurant) {
            this.actualRestaurant = restaurant;
            this.showDialogDataRestaurant = !this.showDialogDataRestaurant;
        },
        ajouterRestaurant (restaurant) {
            console.log(restaurant);
        },
        supprimerRestaurant (restaurant) {
            console.log(restaurant);
        }
    }
}
</script>

<style scoped>
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
</style>