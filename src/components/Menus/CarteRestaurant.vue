<template>
    <div>
        <table>
            <tr><th colspan="2">{{nomMenu}}</th></tr>
            <tr>
                <th>Entrée</th>
                <td>{{nomEntree}}</td>
            </tr>
            <tr>
                <th>Plat Principal</th>
                <td>{{nomPlat}}</td>
            </tr>
            <tr>
                <th>Dessert</th>
                <td>{{nomDessert}}</td>
            </tr>
        </table>
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
        nomMenu: "",
        nomEntree: "",
        nomPlat: "",
        nomDessert: "",
        prix: 0
    }),

    mounted: function () {
        console.log(this.nom);
        console.log(this.entree)
        console.log(this.plat);
        console.log(this.dessert);
        // console.log("Calcul du prix minimal de la carte :");
        // console.log(this.entree[1] + this.dessert[1] + this.plat.price[0]);
        // console.log("Calcul du prix maximal de la carte :");
        // console.log(this.entree[1] + this.dessert[1] + this.plat.price[1]);

        // le prix du menu sera toujours le prix minimal de la somme des trois "morceaux" du menu :
        console.log(this.plat[1])
        this.prix = this.entree[1] + this.dessert[1] + this.plat[1].price[0]
        this.nomMenu = this.nom;
        this.nomEntree = this.entree[0];
        this.nomPlat = this.plat[0];
        this.nomDessert = this.dessert[0];
    }
}
</script>

<style scoped>

</style>