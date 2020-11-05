export class Menu {
    constructor (carteDesPlats) {
        this.carte = carteDesPlats;
    }

    // ah opti un peu plus tard si j'ai le temps
    generateMenu (cuisine) {
        if (typeof this.carte.platsPrincipaux(cuisine) == "string") {
            return this.generateMenu (this.carte.platsPrincipaux(cuisine));
        }
        if (this.carte.platsPrincipaux(cuisine) == undefined) {
            return {};
        }

        // un menu, c'est une entrée, un plat, un dessert
        // mais tous les restos n'ont pas à proposer ce genre de 'prestation'
        // par exemple: les restos à hotdog ou les glaciers
        if (this.carte.hasMenu(cuisine)) {
            // très bien, maintenant, je veux générer une carte
            // je commence par importer la totalité des entrées / plats / dessert proposable par ce type de cuisine
            let entrees = this.carte.entrees(cuisine);
            let plats = this.carte.platsPrincipaux(cuisine);
            let accompagnements = this.carte.accompagnements(cuisine);
            let desserts = this.carte.desserts(cuisine);

            // un menu, kess ke c ?
            // une entrée, un plat et un dessert
            // pour faire bonne figure, il faudrait deux menu pour trois plats principaux

            // donc on prend le nombre de plats, on multiplie par 2 et divise par 3
            // et on ajoute 1 pour la forme ?

            let nbCartes = (Object.keys(plats).length * 2 / 3) | 0 + 1 > 6 ? (Object.keys(plats).length * 2 / 3) | 0 + 1 : 6;
            // admettons qu'il n'y ait que 1 plat: (1*2 / 3) | 0 = 0, donc le +1 est nécessaire
            // s'il y a 0 plats, bah écoutez le dev est une vrai feignasse alors

            let cartes = [];

            for (let i=0; i < nbCartes; i++) {
                cartes[i] = {
                    nomCarte : this.carte.nomCarte(i),
                    entree : entrees[getRandomInt(0, entrees.length)],
                    platPrincipal : plats[getRandomInt(0, plats.length)],
                    dessert : desserts[getRandomInt(0, desserts.length)]
                }
            }

            // maintenant on met tout dans une grosse boite et hop, on envoi tout !

            return {
                "lesCartes": cartes,
                "entrees": entrees,
                "plats": plats,
                "accompagnements": accompagnements,
                "desserts": desserts
            }
        }

        /*Object.keys(this.carte.menu()[cuisine]).forEach ((plat) => {
            if (getRandomInt(0, 100) < proba) {
                platPrincipal.push({ "plat": plat, 
                                    "price": getRandomInt (this.carte.menu()[cuisine][plat].price[0], this.carte.menu()[cuisine][plat].price[1]),
                                    "description": this.carte.menu()[cuisine][plat].description
                        });
            }
        });
    
        menu["platPrincipal"] = platPrincipal;*/
        return {};
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}
