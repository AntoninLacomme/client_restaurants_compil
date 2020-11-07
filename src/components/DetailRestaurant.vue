<template>
    <div class='main'>
        <Redirection />
        <md-content>        
            <md-tabs class="md-transparent" md-alignment="fixed">
                <md-tab md-label="Restaurant">
                        <md-field>
                            <label>Nom du restaurant</label>
                            <md-input readonly v-model="restaurant.name"/>
                        </md-field>
                        <md-field>
                            <label>Type de cuisine du restaurant</label>
                            <md-input readonly v-model="restaurant.cuisine"/>
                        </md-field>

                        <!-- <md-table v-model="restaurant.menu" md-card>
                            <md-table-row slot="md-table-row" slot-scope="{item}">
                                <md-table-cell md-label="Plat">{{item.plat}}</md-table-cell>
                                <md-table-cell md-label="Prix">{{item.price}}.00 €</md-table-cell>
                            </md-table-row>
                        </md-table> -->

                        <MenuRestaurant/>
                </md-tab>
                <md-tab md-label="Localisation">
                        <md-field>
                            <label>Quartier</label>
                            <md-input readonly v-model="restaurant.borough"/>
                        </md-field>
                        <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Rue</label>
                                    <md-input readonly v-model="restaurant.address.street"/>
                                </md-field>
                            </div>
                            <div class="md-layout-item md-small-size-100">
                                <md-field>
                                    <label>Batiment</label>
                                    <md-input readonly v-model="restaurant.address.building"/>
                                </md-field>
                            </div>
                        </div>
                        
                        <md-field>
                            <label>Zipcode</label>
                            <md-input readonly v-model="restaurant.address.zipcode"/>
                        </md-field>
                        <div style="height: 400px; width: 600px">
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
                </md-tab>
                <md-tab md-label="Grades">

                    <md-table v:on="addNewGrade=addGrade" v-model="restaurant.grades" md-card>
                        <md-table-row slot="md-table-row" slot-scope="{item}">
                            <md-table-cell md-label="Date">{{item.date}}</md-table-cell>
                            <md-table-cell md-label="grade">{{item.grade}}</md-table-cell>
                            <md-table-cell md-label="score">{{item.score}}</md-table-cell>
                        </md-table-row>
                    </md-table>
                </md-tab>
            </md-tabs>
        </md-content> 
    </div>
</template>

<script>
import Redirection from './Redirection.vue';
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

import MenuRestaurant from './Menus/MenuRestaurant.vue';

import {Menu} from '../assets/classes/Menu.js'
import {CarteDesPlats} from '../assets/classes/CarteDesPlats.js'

import {events} from '../main.js';

export default {
    name: "DetailRestaurant",
    components: {
        Redirection,
        LMap,
        LTileLayer,
        LMarker,
        MenuRestaurant
    },
    data: () => ({
        id: "",
        restaurant: {
            address: {
                building: "",
                coord: [40.71, -74],
                street: "",
                zipcode: '00000'
            },
            borough: '',
            cuisine: '',
            grades: [],
            name: '',
            menu: {}
        },
        zoom: 14,
        center: [40.71, -74],
        currentCenter: null,
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }),
    methods: {
        mapReady (Lmap) {
            Lmap.invalidateSize ();
        },
        getRestaurantByID () {
            
        },
        getRestaurantFromServer () {
            let url = "http://127.0.0.1:8080/api/restaurants/" + this.id;
            fetch (url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then (response => response.json())
                .then((data) => {
                    console.log(data);
                    this.restaurant = data.restaurant;
                    this.center = [this.restaurant.address.coord[1],this.restaurant.address.coord[0]];
                    this.currentCenter = L.latLng(this.restaurant.address.coord[1],this.restaurant.address.coord[0]);

                    let menu = new Menu (new CarteDesPlats ()).generateMenu (this.restaurant.cuisine)
                    this.restaurant["menu"] = menu;

                    events.$emit("setMenu", menu);
                });
        }
    },
    mounted: function () {
        this.id = this.$router.history.current.query.id;

        this.getRestaurantFromServer ();
    }
}
</script>

<style scoped>
    .md-content {
        width: 100%;
        padding: 1em;
        height: 100vh;
    }

    .md-table {
        max-height: 50vh;
    }
</style>