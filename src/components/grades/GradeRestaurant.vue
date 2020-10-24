<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item">
                <md-card-header>
                <div class="md-title">Ajouter une note</div>
                </md-card-header>

                <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">

                        <!-- LE GRADE -->
                    <md-field :class="getValidationClass('grade')">
                        <label>Grade</label>
                        <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.grade" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.grade.required">Le grade doit être saisie !</span>
                        <span class="md-error" v-else-if="!$v.form.grade.minLength">Le grade ne doit comporter un seul caractère !</span>
                        <span class="md-error" v-else-if="!$v.form.grade.maxLength">Le grade ne doit comporter un seul caractère !</span>
                        <span class="md-error" v-else-if="!$v.form.grade.alpha">Le grade est une lettre !</span>
                    </md-field>
                    </div>

                        <!-- LE SCORE -->
                    <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('score')">
                        <label>Score</label>
                        <md-input name="score" type="number" v-model="form.score" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.score.required">Le score doit être saisie !</span>
                        <span class="md-error" v-else-if="!$v.form.score.between">Le score est compris entre 1 et 12 !</span>
                    </md-field>
                    </div>
                </div>

                        <!-- LA DATE -->
                <md-field :class="getValidationClass('date')">
                    <label>Date</label>
                    <md-datepicker v-model="form.date" name="date" id="date" :disabled="sending"/>
                    <span class="md-error" v-if="!$v.form.date.required">La date de la note doit être saisie</span>
                </md-field>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">Ajouter note</md-button>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, between, alpha } from 'vuelidate/lib/validators'
// import parse from 'date-fns/parse'
import format from 'date-fns/format'

export default {
    name: "GradeRestaurant",
    
    mixins: [validationMixin],
    data: () => ({
        form: {
            grade: null,
            score: null,
            date: null,
        },
        userSaved: false,
        sending: false,
        lastUser: null
    }),
    validations: {
        form: {
            grade: {
                required,
                minLength: minLength(1),
                maxLength: maxLength(1),
                alpha
            },
            score: {
                required,
                between: between(1, 12)
            },
            date: {
                required
            }
        }
    },
    methods: {
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },
        clearForm () {
            this.$v.$reset()
            this.form.grade = null
            this.form.score = null
            this.form.date = null
        },
        validateUser () {
            this.$v.form["grade"].$touch ();
            this.$v.form["score"].$touch ();
            this.$v.form["date"].$touch ();
            
            if (!this.$v.form.$invalid) {
                // à remplacer par un $emit 
                this.$parent.$parent.$parent.$parent.addGrade ({
                    date: format(this.form.date, 'yyyy-MM-dd') + "T" + format(this.form.date, 'HH:mm:ss.SSS') + "Z",
                    grade: this.form.grade.toUpperCase (),
                    score: parseInt(this.form.score)
                });
            }
         }
    }
}
</script>

<style scoped>

</style>