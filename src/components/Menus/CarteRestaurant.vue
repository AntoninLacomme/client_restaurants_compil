<template>
    <div>
        <md-list>
            <caption @click="showMenu = !showMenu">{{nomMenu}}</caption>
        <table v-if="showMenu">
            <tr>
                <th>Entrée</th>
                <td>{{nomEntree}}</td>
                <td>{{prixEntree}} €</td>
            </tr>
            <tr>
                <th>Plat Principal</th>
                <td>{{nomPlat}}</td>
                <td>{{prixPlat}} €</td>
            </tr>
            <tr>
                <th>Dessert</th>
                <td>{{nomDessert}}</td>
                <td>{{prixDessert}} €</td>
            </tr>
            <tr>
                <td colspan="3" class="separator"></td>
            </tr>
            <tr>
                <td colspan="3" class="separator"></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>{{prix}} €</td>
            </tr>
        </table>
        </md-list>
        
    </div>
</template>

<script>
export default {
    name: "CarteRestaurant",

    props: {
        nom: String,
        entree: Array,
        plat: Array,
        dessert: Array
    },

    data: () => ({
        showMenu : false,

        nomMenu: "",
        nomEntree: "",
        nomPlat: "",
        nomDessert: "",
        prix: 0,
        prixEntree: 0,
        prixPlat: 0,
        prixDessert: 0
    }),

    mounted: function () {
        this.prix = this.entree[1] + this.dessert[1] + this.plat[1].price[0];
        this.prixEntree = this.entree[1];
        this.prixPlat = this.plat[1].price[0];
        this.prixDessert = this.dessert[1];
        this.nomMenu = this.nom;
        this.nomEntree = this.entree[0];
        this.nomPlat = this.plat[0];
        this.nomDessert = this.dessert[0];
    }
}
</script>

<style scoped>
    table {
        width: 100%;
    }

    caption {
        font-weight: bold;
    }

    th, td {
        width: 45%;
        text-align: center;
    }

    th:nth-child(3n) {
        width: 10%;
    }

    td.separator {
        border-bottom: solid thin gold;
    }

</style>