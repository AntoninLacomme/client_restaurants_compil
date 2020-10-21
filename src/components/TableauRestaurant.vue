<template>
    <div>
        <!-- DEBUT zone de dialogue pour les données d'un restaurant -->
        <FenetreInformationRestaurant :restaurant="{restaurant: actualRestaurant}" ref="fenInfRest"/>
        <!-- DEBUT ajout d'un nouveau Restaurant -->
        <md-dialog :md-active.sync="showDialogAddRestaurant">
            <md-dialog-title>Ajouter un nouveau Restaurant</md-dialog-title>
                <form v-on:submit="ajouterRestaurant" class="padd1em">
                    <md-field>
                        <label>Nom du Restaurant</label>
                        <md-input v-model="nom"></md-input>
                    </md-field>
                    <md-field>
                        <label>Type de Cuisine</label>
                        <md-input v-model="cuisine"></md-input>
                    </md-field>
                    <md-button type="submit" class="md-raised">Ajouter ce Restaurant</md-button>
                </form>
            <md-dialog-actions>
                <md-button class="md-primary" @click="showDialogAddRestaurant = false">Close</md-button>
            </md-dialog-actions>
        </md-dialog>
        <!-- FIN ajout d'un nouveau Restaurant -->

        <md-app>
        <md-app-toolbar class="md-primary">
            <span class="md-title">Vos Meilleurs Restaurants ({{restaurants.length}}):</span>
            <md-button class="md-raised buttonAlignRight" @click="showDialogAddRestaurant = true">Ajouter Restaurant</md-button>
        </md-app-toolbar>

        <md-app-drawer md-permanent="clipped">
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
                <md-table v-model="restaurants" md-sort="name" md-sort-order="asc" md-card md-fixed-header @md-selected="onSelect">
                    <md-table-row slot="md-table-row" slot-scope="{item}" md-selectable="single">
                        <md-table-cell md-label="Name" md-sort-by="name">{{item.name}}</md-table-cell>
                        <md-table-cell md-label="Cuisine" md-sort-by="cuisine">{{item.cuisine}}</md-table-cell>
                        <md-table-cell class="cell-delete" @click="deleteRestaurant"><md-icon>delete</md-icon></md-table-cell>
                    </md-table-row>
                </md-table>
            </md-app-content>
        </md-app>
    </div>
</template>


<script>
import FenetreInformationRestaurant from './FenetreInformationRestaurant.vue';

export default {
    name: 'TableauRestaurant', 
    components : {
        FenetreInformationRestaurant
    },
    data: () => ({
            precDisabled: true,
            restaurants: [],
            nom: '',
            cuisine: '',
            nbRestaurants: 5,
            page: 1,
            keywordRestaurant: '',
            lastTimeScroll: 0,
            actualRestaurant: {
                _id: "",
                name: "",
                cuisine: ""
            },
            showDialogDataRestaurant: false,
            showDialogAddRestaurant: false
        }
    ),
    methods: {
        onSelect (item) {
            if (item != null) {
                this.actualRestaurant = item;
            }
            this.$refs.fenInfRest.displayDialogDataRestaurant (this.actualRestaurant);
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
                    this.showDialogDataRestaurant = false;
                    this.showDialogAddRestaurant = false;
                });
        },
        supprimerRestaurant(event) {
            event.preventDefault ();
            fetch ("http://127.0.0.1:8080/api/restaurants/" + this.actualRestaurant._id, {
                method: "DELETE"
            }).then (() => {
                this.getRestaurantFromServer ();
            });
        },
        deleteRestaurant (event) {
            console.log(event);
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
        ajouterRestaurant(event) {
            event.preventDefault();
            this.restaurants.push(
                {
                    name: this.nom,
                    cuisine: this.cuisine
                }
            );

            let url = "http://127.0.0.1:8080/api/restaurants";
            fetch (url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nom: this.nom,
                    cuisine: this.cuisine
                })
            }).then (() => {
            });

            this.nom = "";
            this.cuisine = "";
        },
        getColor(index) {
            return (index % 2) ? 'lightBlue' : 'pink';
        },
        sliderChange (event) {
            this.lastTimeScroll = event.timeStamp;
        },
        sliderCharge () {
            this.getRestaurantFromServer ();
        },
        textChange (inputText) {
            this.keywordRestaurant = inputText;
            this.getRestaurantFromServer ();
        },
        increasePage () {
            this.page++;
            //this.$refs.buttonPrecedant.disabled = false;
            this.precDisabled = false;

            this.getRestaurantFromServer ();
        },
        decreasePage () {
            this.page--;
            if (this.page <= 1) {
                this.page = 1;
                //this.$refs.buttonPrecedant.disabled = true;
                this.precDisabled = true;
            }

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
    .cell-delete {
        width: 50px;
        background-color: brown;
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

    .fullscreen {
        min-height: calc(100% + 1px);
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

    .md-table-row:hover > .cell-delete {
        
    }

    
</style>