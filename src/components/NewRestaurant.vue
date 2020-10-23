<template>
    <div>
        <!-- cette balise md-app permet de remonter le body, qui autrement est trop bas d'une vingtaine de pixels -->
        <md-app>            
        </md-app>

        <form novalidate v-on:submit="ajouterRestaurant">
            <md-steppers :md-active-step.sync="active" md-linear>
                <md-step id="first" md-label="Informations Générales" md-description="Description du restaurant">
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

                    <md-button class="md-raised md-primary" @click="setDoneGeneral('general', 'second')">Continue</md-button>
                </md-step>

                <md-step id="second" md-label="Adresse" md-description="Renseignez l'adresse de cet établissement">
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

                    <md-button class="md-raised md-primary" @click="setDone('second', 'general')">Back</md-button>
                    <md-button class="md-raised md-primary" @click="setDoneAddress('second', 'third')">Continue</md-button>
                </md-step>

                <md-step id="third" md-label="Third Step">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                    
                    <md-button class="md-raised md-primary" @click="setDone('third', 'second')">Back</md-button>
                    <md-button type="submit" class="md-raised md-primary" @click="setDone('third')">Valider Formulaire</md-button>
                </md-step>
            </md-steppers>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'

export default {
    name: 'NewRestaurant',
    mixins: [validationMixin],
    data: () => ({
        form: {
            nom: "",
            cuisine: "",
            borough: "",
            street: "",
            building: "",
            zipcode: ""
        },   
        
        allBoroughs : [
            "Brooklyn",
            "Manhattan",
            "Bronx",
            "Queens",
            "Staten Island"
        ],

        active: 'first',
        general: false,
        second: false,
        third: false,

        sending: false
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
            }
        }
    },
    methods : {
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

            if (!this.$v.form["borough"].$invalid && 
                !this.$v.form["street"].$invalid &&
                !this.$v.form["building"].$invalid && 
                !this.$v.form["zipcode"].$invalid) {
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
            let donneesFormulaire = new FormData(event.target);
            let url = "http://127.0.0.1:8080/api/restaurants";

            console.log(donneesFormulaire);
            console.log(url)
            console.log(event.target);
           /* fetch (url, {
                method: "POST",
                body: donneesFormulaire
            }).then ((answer) => {
                console.log(answer)
            });*/
        },
    },
    mounted: function () {

    }
}
</script>

<style scoped>
</style>