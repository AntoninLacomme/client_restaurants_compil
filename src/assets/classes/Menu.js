
export class Menu {
    menu () {
        // nota bene :
        // cette liste est juste une gigantesque blague, viendez pas dire 'oui mé sa c pa 2 tel pays é sa c pas pareil ke sa'
        return {
            Hamburgers: {
                "Burger-Frites": [5, 25],
                "Burger Americain": [5, 25],
                "Burger Végétarien": [5, 25],
                "Burger Oignons": [5, 25],
                "Burger Fromage": [5, 25],
                "Burger Poulet": [5, 25],
                "Burger Poisson": [5, 25],
                "Burger Oriental": [5, 25]
            },
            American: {
                "Burger-Frites": [5, 25],
                "Steak de Bison sauce Far West": [15, 40],
                "The Steak Of Liberty": [15, 40],
                "Texas Rangers": [15, 40],
                "Gnôle et Haricots": [15, 40]
            },
            Chicken: {
                "Poulet rôti": [15, 25], 
                "Poulet aux herbes": [15, 25], 
                "Poulet Braisé": [15, 25],
                "4 Ailes de Poulet": [5, 10], 
                "8 Ailes de Poulet": [10, 15],
                "Bouillon de Poule": [10, 15]
            },
            Chinese: {
                "Ramen": [10, 25],
                "Riz cantonnais": [5, 10],
                "Riz Thaïlandais": [5, 10],
                "Nems": [5, 15],
                "Raviolis Chinois": [10, 20],
                "Menu Vapeur": [20, 30],
                "Porc au Caramel": [15, 20],
                "Porc au Gingembre": [15, 20],
                "Porc aux Algues et Champignons": [15, 20]
            },
            Japanese: "Chinese",
            Italian: {
                "Salade Tomate Mozzarella": [5, 10],
                "Pizza 4 Fromages": [5, 25],
                "Pizza Margherita": [5, 25],
                "Pizza Tomate Fromage": [5, 25],
                "Pizza Calzone": [5, 25],
                "Pizza Vegan": [1, 2],
                "Pizza 4 Saisons": [5, 25],
                "Pizza Pesto Fromage de Chèvre": [5, 25],
                "Raviolis au fromage": [15, 25],
                "Raviolis au boeuf": [15, 25],
                "Ravioles Ricotta": [15, 25],
                "Pâtes Pesto": [10, 20],
                "Pâtes Bolognaises": [10, 20],
                "Pâtes Carbonara": [10, 20],
                "Lasagnes": [15, 25]
            },
            "Pizza/Italian": "Italian",
            Steak: {
                "Steak Hâché - Frites": [10, 20],
                "Steak de Boeuf - Frites": [15, 30],
                "Steak de Cheval - Frites": [5, 10],
                "Farandole de Grillades": [20, 30],
                "Steak Végétarien": [NaN, NaN],
                "Brochettes": [10, 25],
                "Barbecue": [25, 40],
                "Merguez": [10, 20],
                "Saucisse - Frites": [10, 20]
            },
            French: {
                "Cuisses de Grenouille": [5, 25],
                "Cassoulet": [15, 25],
                "Choucroute": [25, 40],
                "Raclette": [25, 40],
                "Fondue": [25, 40],
                "Baguette de Pain et Vin Rouge": [50, 250],
                "Tartiflette": [15, 25],
                "Quiche Lorraine": [15, 25],
                "Huîtres": [25, 40],
                "Coq au Vin": [30, 50],
                "Chapon": [30, 50],
                "Gratin dauphinois": [15, 30],
                "Boeuf Bourguignon": [15, 30]
            },
            Delicatessen: {
                "Salade Tomate Oignon": [5, 15],
                "Steak - Frite": [5, 15],
                "Pâtes au beurre": [5, 15],
                "Fish and Chips": [5, 15]
            },
            "Ice Cream, Gelato, Yogurt, Ices": {
                "Glaces": [2, 5],
                "Yaourts": [1, 5],
                "Sorbets": [2, 5],
                "Gaufres": [2, 5],
                "Crêpes": [2,5]
            },
            Donuts: {
                "Donuts Chocolat": [2, 5],
                "Donuts Vanille": [2, 5],
                "Donuts Fruits Rouges": [2, 5],
                "Donuts Citron": [2, 5],
                "Donuts Passion": [2, 5],
                "Donuts Caramel": [2, 5]
            },
            Spanish: {
                "Tortillas": [15, 20],
                "Gaspacho": [10, 20],
                "Paella": [30, 50]
            },
            German: {
                "Choucroute": [25, 40],
                "Hot Dogs": [5, 10],
                "Burgers": [5, 20],
                "Salade de Pomme de Terre": [10, 20],
                "Kebab": [5, 25]
            },
            SeaFood: {
                "Saumon Meunière": [20, 30],
                "Truite Fario et Salade Verte": [20, 30],
                "Espadon citron": [20, 30],
                "Aile de Raie, câpres et sauce au beurre": [20, 30],
                "Roussette et Pommes Frites": [20, 30],
                "Dorade Grillée": [20, 30],
                "Carpe aux Herbes": [20, 30],
                "Filet de Saules": [20, 30],
                "Brandade de Morue": [20, 30],
                "Plateau de Fruits de Mers": [30, 50]
            },
            Irish: {
                "Râgout Irlandais": [20, 40],
                "Guiness Pie": [15, 30],
                "Whisky": [20, 40],
                "Potatos Farls": [10, 20]
            },
            African: {
                "Dambou": [15, 30],
                "Beignet de Poisson Ivoirien": [15, 30],
                "Poulet Congolais": [15, 30],
                "Couscous": [15, 30],
                "Dattes": [15, 30],
                "Galette Ethiopienne": [15, 30],
                "Râgout d'Agneau": [15, 30]
            },
            Indian: {
                "Curry d'Agneau": [15, 30],
                "Dahl de Lentilles Vegetariennes": [5, 15],
                "Poulet Tandoori": [15, 25],
                "Samoussas": [15, 25],
                "Naan": [10, 20],
                "Poulet Tika Masala": [15, 25],
                "Keema Matar": [15, 25]
            },
            Mexican: {
                "Tacos": [5, 10],
                "Chipolattas": [10, 20],
                "Tapas": [10, 20],
                "Chili": [10, 20],
                "Chili Con Carne": [15, 25],
                "Tortillas": [5, 10]
            },
            "Latin (Cuban, Dominican, Puerto Rican, South & Central American)": "Mexican",
            HotDogs: {
                "Hot Dog Moutarde": [2, 5],
                "Hot Dog Ketchup": [2, 5],
                "Hot Dog Vegetarien": [NaN, NaN]
            },
            "Jewish/Kosher": {
                "Challah": [10, 20]
            },
            "Café/Coffee/Tea": {
                "Café": [3, 10],
                "Chocolat Chaud": [3, 10],
                "Thé Vert": [3, 10],
                "Thé au Jasmin": [3, 10],
                "Capuccino": [3, 10]
            },
            "Tex-Mex": "Mexican",
            "Pancakes/Waffles": {
                "Pancake Framboise": [5, 10],
                "Pancake Myrtille": [5, 10],
                "Pancake Chocolat": [5, 10],
                "Pancake Caramel": [5, 10],
                "Pancake Menthe": [5, 10]
            },
            "Soul Foud": {
                "Roman Policier": [15, 25],
                "Roman d'Amour": [15, 25],
                "Roman Science Fiction": [15, 25],
                "Roman d'Horreur": [15, 25],
                "Théâtre": [15, 25],
                "Mangas": [15, 25],
                "Bande Dessinées": [15, 25],
                "Magazine People": [5, 10]
            }
        }
    }

    accompagnements () {
        return {
            American: {
                "Salades": [2, 5]
            }
        }
    }

    generateMenu (cuisine) {
        if (typeof this.menu()[cuisine] == "string") {
            return this.generateMenu (this.menu()[cuisine]);
        }
        if (this.menu()[cuisine] == undefined) {
            return {};
        }

        let menu = [];
        let proba = 70;
        Object.keys(this.menu()[cuisine]).forEach ((plat) => {
            if (getRandomInt(0, 100) < proba) {
                menu.push({ "plat": plat, 
                            "price": getRandomInt (this.menu()[cuisine][plat][0], this.menu()[cuisine][plat][1])});
            }
        });
        return menu;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}