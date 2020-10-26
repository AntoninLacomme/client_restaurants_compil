<template>
    <div class="container">
        <!-- cette balise md-app permet de remonter le body, qui autrement est trop bas d'une vingtaine de pixels -->
        <md-app>            
        </md-app>
        <Redirection />

        <form novalidate v-on:submit="ajouterRestaurant">
            <md-steppers :md-active-step.sync="active" md-linear>
                
                <md-step id="first" md-label="Adresse" md-description="Renseignez l'adresse de cet établissement">
                    <md-content>
                        <md-card-content>
                        <p>Sélectionnez sur la carte votre restaurant :</p>
                        <div class="md-layout md-gutter">
                                <div class="md-layout-item md-small-size-100">
                                    <md-field :class="getValidationClass('latitude')">
                                        <label>Latitude</label>
                                        <md-input readonly name="latitude" v-model="form.latitude" :disabled="sending" />
                                        <span class="md-error" v-if="!$v.form.latitude.required">La latitude doit être renseignée (clic sur la carte) !</span>
                                    </md-field>
                                </div>

                                <div class="md-layout-item md-small-size-100">
                                    <md-field :class="getValidationClass('longitude')">
                                        <label>Longitude</label>
                                        <md-input readonly name="longitude" v-model="form.longitude" :disabled="sending" />
                                        <span class="md-error" v-if="!$v.form.longitude.required">La longitude doit être renseignée (clic sur la carte) !</span>
                                    </md-field>
                                </div>
                        </div>

                        <md-field :class="getValidationClass('borough')">
                            <md-autocomplete name="borough" v-model="form.borough" :disabled="sending" :md-options="allBoroughs">
                            <label>Quartier</label>
                            <span class="md-error" v-if="!$v.form.borough.required">Le quartier doit être renseigné !</span>
                            </md-autocomplete>
                        </md-field>

                        <md-field :class="getValidationClass('street')">
                            <label>Rue</label>
                            <md-input name="street" v-model="form.street" :disabled="sending"></md-input>
                            <span class="md-error" v-if="!$v.form.street.required">La rue est requise !</span>
                        </md-field>

                        <md-field :class="getValidationClass('building')">
                            <label>Bâtiment</label>
                            <md-input name="building" v-model="form.building" :disabled="sending"></md-input>
                            <span class="md-error" v-if="!$v.form.building.required">Le bâtiment est requis !</span>
                        </md-field>

                        <md-field :class="getValidationClass('zipcode')">
                            <label>ZipCode</label>
                            <md-input name="zipcode" v-model="form.zipcode" :disabled="sending"></md-input>
                            <span class="md-error" v-if="!$v.form.zipcode.required">Le zipcode est requis !</span>
                            <span class="md-error" v-else-if="!$v.form.zipcode.maxlength">Zipcode invalide</span>
                            <span class="md-error" v-else-if="!$v.form.zipcode.minlength">Zipcode invalide</span>
                            <span class="md-error" v-else-if="!$v.form.zipcode.between">Zipcode invalide</span>
                        </md-field>
                        </md-card-content>
                    </md-content>
                    <md-content>
                        <l-map
                            :zoom="zoom"
                            :center="center"
                            style="height: 500px; width: 100%"
                            @click="clickUpdate"
                        >
                            <l-tile-layer
                                :url="url"
                                :attribution="attribution"
                            />
                            <template v-if="currentCenter != null">
                                <l-marker :lat-lng="currentCenter"></l-marker>
                            </template>
                        </l-map>
                    </md-content>
                    <md-button class="md-raised md-primary" @click="setDoneAddress('first', 'second')">Continue</md-button>
                </md-step>

                <md-step id="second" md-label="Informations Générales" md-description="Description du restaurant">
                    <md-field :class="getValidationClass('nom')">
                        <label>Nom du Restaurant</label>
                        <md-input name="nom" v-model="form.nom" :disabled="sending"></md-input>
                        <span class="md-error" v-if="!$v.form.nom.required">Le nom du restaurant est requis !</span>
                    </md-field>
                    <md-field :class="getValidationClass('cuisine')">
                        <label>Type de Cuisine</label>
                        <md-input name="cuisine" v-model="form.cuisine" :disabled="sending"></md-input>
                        <span class="md-error" v-if="!$v.form.cuisine.required">Le type de cuisine est requis !</span>
                    </md-field>

                    <md-button class="md-raised md-primary" @click="setDone('second', 'first')">Back</md-button>
                    <md-button class="md-raised md-primary" @click="setDoneGeneral('second', 'third')">Continue</md-button>
                </md-step>


                <md-step id="third" md-label="Grades" md-description="Les notes obtenues (optionnel)">
                    <md-content>
                        <md-table v:on="addNewGrade=addGrade" v-model="grades" md-card>
                            <md-table-row slot="md-table-row" slot-scope="{item}">
                                <md-table-cell md-label="Date">{{item.date}}</md-table-cell>
                                <md-table-cell md-label="grade">{{item.grade}}</md-table-cell>
                                <md-table-cell md-label="score">{{item.score}}</md-table-cell>
                            </md-table-row>
                        </md-table>
                    </md-content>
                    <md-content>
                        <GradeRestaurant class="grade-restaurant"/>
                    </md-content>

                    <md-button class="md-raised md-primary" @click="setDone('third', 'second')">Back</md-button>
                    <md-button type="submit" class="md-raised md-primary" @click="setDone('third')">Valider Formulaire</md-button>
                </md-step>
            </md-steppers>
        </form>
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        </l-map>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'
    import GradeRestaurant from './grades/GradeRestaurant.vue'
    import Redirection from './Redirection.vue'

    import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
    import L from "leaflet";
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });

    export default {
        name: 'NewRestaurant',
        mixins: [validationMixin],
        components: {
            GradeRestaurant,
            Redirection,
            LMap,
            LTileLayer,
            LMarker
        },
        data: () => ({
            form: {
                nom: "",
                cuisine: "",
                borough: "",
                street: "",
                building: "",
                zipcode: "",
                latitude: "",
                longitude: ""
            }, 
            zoom: 13,
            center: [40.71, -74],
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            currentCenter: null,

            allBoroughs : [
                "Brooklyn",
                "Manhattan",
                "Bronx",
                "Queens",
                "Staten Island"
            ],

            active: 'first',
            first: false,
            second: false,
            third: false,

            sending: false,
            grades: []
        }),
        validations : {
            form: {
                nom: {
                    required
                },
                cuisine: {
                    required
                },
                borough: {
                    required
                },
                street: {
                    required
                },
                building: {
                    required
                },
                zipcode: {
                    required,
                    minLength: minLength (5),
                    maxLength: maxLength(5),
                    between: between(0, 99999)
                },
                latitude: {
                    required
                },
                longitude: {
                    required
                }
            }
        },
        methods : {
            clickUpdate (event) {
                this.currentCenter = event.latlng;
                console.log(this.currentCenter);
                this.form.latitude = this.currentCenter.lat;
                this.form.longitude = this.currentCenter.lng;
            },
            getValidationClass (fieldName) {
                const field = this.$v.form[fieldName];

                if (field) {
                    return {
                        "md-invalid": field.$invalid && field.$dirty
                    }
                }
            },
            setDoneGeneral (id, index) {
                this.$v.form["nom"].$touch ();
                this.$v.form["cuisine"].$touch ();

                if (!this.$v.form["nom"].$invalid && !this.$v.form["cuisine"].$invalid) {
                    this.setDone (id, index)
                }
            },
            setDoneAddress (id, index) {
                this.$v.form["borough"].$touch ();
                this.$v.form["street"].$touch ();
                this.$v.form["building"].$touch ();
                this.$v.form["zipcode"].$touch ();
                this.$v.form["latitude"].$touch ();
                this.$v.form["longitude"].$touch ();

                if (!this.$v.form["borough"].$invalid && 
                    !this.$v.form["street"].$invalid &&
                    !this.$v.form["building"].$invalid && 
                    !this.$v.form["zipcode"].$invalid &&
                    !this.$v.form["latitude"].$invalid && 
                    !this.$v.form["longitude"].$invalid) {
                    this.setDone (id, index)
                }
            },
            setDone (id, index) {
                this[id] = true
                if (index) {
                    this.active = index
                }
            },
            ajouterRestaurant(event) {
                event.preventDefault();

                let restaurant = {
                    address: {
                        building: this.form.building,
                        coord: [this.form.longitude, this.form.latitude],
                        street: this.form.street,
                        zipcode: this.form.zipcode
                    },
                    borough: this.form.borough,
                    cuisine: this.form.cuisine,
                    grades: this.grades,
                    nom: this.form.nom
                };
                
                console.log(restaurant);

                
                fetch ("http://127.0.0.1:8080/api/restaurants", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(restaurant)
                }).then ((data) => {
                    console.log(data);
                });
            },
            addGrade (grade) {
                this.grades.push(grade);
                console.log(this.grades);
            }
        },
        mounted: function () {
        }
    }
</script>

<style scoped>
    .md-content {
        width: 50%;
        display: inline-block;
    }
</style>