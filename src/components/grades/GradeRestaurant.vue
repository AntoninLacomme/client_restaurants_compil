<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                <div class="md-title">Users</div>
                </md-card-header>

                <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('grade')">
                        <label for="first-name">Grade</label>
                        <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.grade" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.grade.required">The first name is required</span>
                        <span class="md-error" v-else-if="!$v.form.grade.minlength">Invalid first name</span>
                    </md-field>
                    </div>

                    <div class="md-layout-item md-small-size-100">
                    <md-field :class="getValidationClass('lastName')">
                        <label for="last-name">Last Name</label>
                        <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                        <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                        <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                    </md-field>
                    </div>
                </div>

                <md-field :class="getValidationClass('date')">
                    <label>Date</label>
                    <md-datepicker v-model="form.date" name="date" id="date" :disabled="sending"/>
                    <span class="md-error" v-if="!$v.form.date.required">The date is required</span>
                </md-field>
                </md-card-content>

                <md-progress-bar md-mode="indeterminate" v-if="sending" />

                <md-card-actions>
                <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
                </md-card-actions>
            </md-card>

            <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
    required,
    minLength,
    maxLength
    } from 'vuelidate/lib/validators'

export default {
    name: "GradeRestaurant",
    
    mixins: [validationMixin],
    data: () => ({
        form: {
            grade: null,
            lastName: null,
            date: null,
        },
        userSaved: false,
        sending: false,
        lastUser: null
    }),
    validations: {
        form: {
            firstName: {
                required,
                minLength: minLength(3)
            },
            lastName: {
                required,
                minLength: minLength(3)
            },
            age: {
                required,
                maxLength: maxLength(3)
            },
            gender: {
                required
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
            this.form.firstName = null
            this.form.lastName = null
            this.form.age = null
            this.form.gender = null
            this.form.date = null
        },
        saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
                this.lastUser = `${this.form.firstName} ${this.form.lastName}`
                this.userSaved = true
                this.sending = false
                this.clearForm()
            }, 1500)
            },
            validateUser () {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.saveUser()
            }
        }
    }
}

</script>

<style scoped>

</style>