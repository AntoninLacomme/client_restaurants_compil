
export class CarteDesPlats {
    nomsCartes (index) {
        if (index < 0 && index >= 6) { return "Menu impossible"; }
        return ["Menu Principal", "Menu du Jour", "Menu enfant", "Menu Junior", "Menu Regionnal", "Menu Quartier"][index];
    }
    platsPrincipaux (cuisine) {
        // nota bene :
        // cette liste est juste une gigantesque blague, viendez pas dire 'oui mé sa c pa 2 tel pays é sa c pas pareil ke sa'
        return {
            Hamburgers: {
                "Burger Americain": {
                    price: [5, 25], 
                    description: "Burger Américain, steak de boeuf 20% de matière grasse, guda, salade fraiche, tomates, oignons",
                    cuisson: ["A point", "Bien cuit", "Saignant", "Bleu", "Rosée"]
                },
                "Burger Végétarien": {
                    price: [5, 25], 
                    description: "Burger Végétarien, steak végétal, salade, tomates, oignons, tofu"
                },
                "Burger Fromage de Chèvre Oignons": {
                    price: [5, 25], 
                    description: "Burger Fromage de Chèvre Oignons, tomates, fromage de chèvre, oignons"
                },
                "Burger Poulet": {
                    price: [5, 25], 
                    description: "Burger Poulet, escalope de poulet panée, salade, guda, sauce burger"
                },
                "Burger Poisson": {
                    price: [5, 25], 
                    description: "Burger Poisson, filet de colin pané, salade, guda, sauce burger"
                },
                "Burger Oriental": {
                    price: [5, 25], 
                    description: "Burger Oriental, poulet aux épices, salade, guda, sauce burger"
                },
            },
            American: {
                "Burger-Frites": {
                    price: [5, 25], 
                    description: "Burger de boeuf, 20% de matière grasse, et frites maison",
                    cuisson: ["A point", "Bien cuit", "Saignant", "Bleu", "Rosée"]
                },
                "Steak de Bison sauce Far West": {
                    price: [15, 40], 
                    description: "Steak de bison, 10% de matière grasse",
                    cuisson: ["A point", "Bien cuit", "Saignant", "Bleu", "Rosée"]
                },
                "The Steak Of Liberty": {
                    price: [15, 40], 
                    description: "Steak de boeuf, 10% de matière grasse, avec sa sauce maison",
                    cuisson: ["A point", "Bien cuit", "Saignant", "Bleu", "Rosée"]
                },
                "Texas Rangers": {
                    price: [15, 40], 
                    description: "Steak de bison, 10% de matière grasse, avec sa sauce spéciale",
                    cuisson: ["A point", "Bien cuit", "Saignant", "Bleu", "Rosée"]
                },
                "Gnôle et Haricots": {
                    price: [15, 40], 
                    description: "Haricots blancs, Haricots rouges, viande de boeuf, sauce maison"
                },
            },
            Chicken: {
                "Poulet rôti": {
                    price: [15, 25], 
                    description: "Poulet Rôti dans son lit de pommes de terre, champignons et herbes de provence"
                }, 
                "Poulet aux herbes": {
                    price: [15, 25], 
                    description: "Poulet Rôti aux épices et aux herbes de provence, pommes de terre"
                },  
                "Poulet Braisé": {
                    price: [15, 25], 
                    description: "Poulet cuit à la braise, pommes de terre et herbes de provence"
                }, 
                "4 Ailes de Poulet": {
                    price: [5, 10], 
                    description: "Ailes de poulets fritent maison"
                }, 
                "8 Ailes de Poulet": {
                    price: [10, 15], 
                    description: "Ailes de poulets fritent maison"
                }, 
                "Bouillon de Poule": {
                    price: [10, 15], 
                    description: "Bouillon de poule, petits légumes et vermicelles"
                }, 
            },
            Chinese: {
                "Ramen": {
                    price: [10, 25], 
                    description: "Nouilles chinoises, légume, viande porc et sauce maison"
                }, 
                "Riz cantonnais": {
                    price: [5, 10], 
                    description: "Riz, carottes, petits pois, omelette, herbes"
                }, 
                "Riz Thaïlandais": {
                    price: [5, 10], 
                    description: "Riz, crevettes, omelette, gingembre, herbes"
                }, 
                "Nems": {
                    price: [5, 15], 
                    description: "Nems à la crevette ou aux carottes"
                }, 
                "Raviolis Chinois":{
                    price: [10, 20], 
                    description: "Raviolis chinois, viande de porc, herbes et épices"
                },
                "Porc au Caramel": {
                    price: [15, 10], 
                    description: "Porc laqué avec sa sauce sucrée et gingembre"
                }, 
                "Porc au Gingembre": {
                    price: [15, 10], 
                    description: "Porc aux épices et gingembre"
                },
                "Porc aux Algues et Champignons": {
                    price: [15, 10], 
                    description: "Porc laqué aux algues et champignons chinois"
                }
            },
            Japanese: "Chinese",
            Italian: {
                "Salade Tomate Mozzarella": {
                    price: [5, 10], 
                    description: "Salade Tomate Mozarella avec sa sauce vinaigrette"
                },
                "Pizza 4 Fromages": {
                    price: [5, 25], 
                    description: "Pizza 4 Fromages, Mozzarella, Cheddar, Comté, Bleu, Sauce tomate"
                },
                "Pizza Margherita": {
                    price: [5, 25], 
                    description: "Pizza Margherita, Mozzarella, Oignons, Basilic, Sauce tomate"
                },
                "Pizza Calzone": {
                    price: [5, 25], 
                    description: "Pizza Calzone, Jambon, Champignons, Sauce tomate"
                },
                "Pizza Vegan": {
                    price: [1, 2], 
                    description: "Pizza Vegan, Campignons, Sauce tomate, Herbes"
                },
                "Pizza 4 Saisons": {
                    price: [5, 25], 
                    description: "Pizza 4 Saisons, Tomates Cerises, Poivrons, Asperges, Champignons, Coeur d'Artichaud, Sauce tomate"
                },
                "Pizza Pesto Fromage de Chèvre": {
                    price: [5, 25], 
                    description: "Pizza Pesto Fromage de Chèvre, Fromage de Chèvre, Lardons, Pesto, Sauce tomate"
                },
                "Raviolis au fromage": {
                    price: [15, 25], 
                    description: "Raviolis au fromage, Gorgonzola, Parmesan, Basilic"
                },
                "Raviolis au boeuf": {
                    price: [15, 25], 
                    description: "Raviolis au Boeuf, viande de boeuf maigre, herbes de provence"
                },
                "Ravioles Ricotta": {
                    price: [15, 25], 
                    description: "Raviolis Ricotta, Ricotta, Basilic"
                },
                "Pâtes Pesto": {
                    price: [10, 20], 
                    description: "Pâtes fraiches à la sauce Pesto maison"
                },
                "Pâtes Bolognaises": {
                    price: [10, 20], 
                    description: "Pâtes fraiches à la sauce Bolognaise maison"
                },
                "Pâtes Carbonara": {
                    price: [10, 20], 
                    description: "Pâtes fraiches à la sauce Carbonara maison"
                },
                "Lasagnes": {
                    price: [15, 25], 
                    description: "Lasagnes maison, viande de boeuf, sauce tomate et sauce blanche"
                },
            },
            "Pizza/Italian": "Italian",
            Steak: {
                "Steak Hâché - Frites": {
                    price: [5, 25], 
                    description: "Steak Haché pur viande de boeuf, 20% de matière grasse, frites maison",
                    cuisson: ["A point", "Bien cuit", "Saignant", "Bleu", "Rosée"]
                },
                "Farandole de Grillades": {
                    price: [20, 30], 
                    description: "Assiette de grillade: agneau, porc, boeuf, poulet",
                },
                "Steak Végétarien": {
                    price: [NaN, NaN], 
                    description: "Sans blagues, si vous êtes végétarien, pourquoi venir manger dans un restaurant qui se fait sa spécialité dans la VIANDE ?",
                    cuisson: ["A point", "Bien cuit", "Saignant", "Bleu", "Rosée"]
                },
                "Brochettes": {
                    price: [15, 25], 
                    description: "Brochette de grillages maisons et sauce maison"
                },
                "Barbecue": {
                    price: [25, 40], 
                    description: "Assortiments de viandes à faire griller sur un petit barbecue fournit"
                },
                "Saucisse - Frites": {
                    price: [10, 20], 
                    description: "Saucisse Grillées avec ses frites maison"
                },
            },
            French: {
                "Cuisses de Grenouille": {
                    price: [5, 25], 
                    description: "Délicieuses cuisses de grenouilles avec leur sauce maison"
                },
                "Cassoulet": {
                    price: [15, 25], 
                    description: "Délicieux Cassoulet, avec ses haricots, sa viande sélectionnées avec soin et sa sauce maison préparée avec amour"
                },
                "Choucroute": {
                    price: [25, 40], 
                    description: "Ineffable choucroute à l'ail, avec sa Palette de qualité, sa Morteau primée or, ses saucisses de Francfort d'origine controlée et ses pommes de terre issues de producteurs locaux"
                },
                "Raclette": {
                    price: [25, 40], 
                    description: "Raclette au fromage AOP avec son assortiment de charcuteries primées et pommes de terre issues de producteurs locaux"
                },
                "Fondue": {
                    price: [25, 40], 
                    description: "Fondue de fromages AOP et pommes de terre issues de producteurs locaux"
                },
                "Baguette de Pain et Vin Rouge": {
                    price: [25, 400], 
                    description: "Baguette de pain, vin rouge, pull à rayures et béret"
                },
                "Tartiflette": {
                    price: [15, 25], 
                    description: "Tartflette certifiée française !"
                },
                "Quiche Lorraine": {
                    price: [15, 25], 
                    description: "Quiche lorraine avec ses petits lardons et son fromage 100% français"
                },
                "Huîtres": {
                    price: [25, 40], 
                    description: "Beurk, il y a vraiment des gens qui avalent ces trucs ?"
                },
                "Coq au Vin": {
                    price: [30, 50], 
                    description: "Délicieux coq au vin avec sa viande fondante et sa sauce au vin"
                },
                "Chapon": {
                    price: [30, 50], 
                    description: "C'est comme du coq au vin, mais sans vin ni roubignoles"
                },
                "Gratin dauphinois": {
                    price: [15, 30], 
                    description: "Il est grattiné celui là, je vous le conseil"
                },
                "Boeuf Bourguignon": {
                    price: [15, 30], 
                    description: "Viande de boeuf marinée dans sa sauce au vin pendant 24 heures, viande fondante et aromatisée"
                },
            },
            Delicatessen: {
                "Salade Tomate Oignon": {
                    price: [5, 15], 
                    description: "Salade Tomate Oignon, le couteau suisse"
                },
                "Steak - Frite": {
                    price: [5, 15], 
                    description: "Un Delicatessen sans Steak Frite, ce n'est pas un véritable Delicatessen, n'est-ce pas ?"
                },
                "Pâtes au beurre": {
                    price: [5, 15], 
                    description: "Pour les nostalgiques de la cantine scolaire"
                },
                "Fish and Chips": {
                    price: [5, 15], 
                    description: "Un classique, le fish and chips, rapidement préparé, rapidement consommé"
                },
            },
            "Ice Cream, Gelato, Yogurt, Ices": {
                "Glaces": {
                    price: [1, 5], 
                    description: "Glaces café, chocolat, vanille, fraise, caramel, fruits rouges, citron, cactus"
                },
                "Yaourts": {
                    price: [1, 5], 
                    description: "Yaourt café, chocolat, vanille, fraise, caramel, fruits rouges, citron, cactus"
                },
                "Sorbets": {
                    price: [1, 5], 
                    description: "Sorbets café, chocolat, vanille, fraise, caramel, fruits rouges, citron, cactus"
                },
                "Gaufres": {
                    price: [1, 5], 
                    description: "Gauffres sucre, nutella, confiture"
                },
                "Crêpes": {
                    price: [1, 5], 
                    description: "Crêpes sucre, nutella, confiture"
                },
            },
            Donuts: {
                "Donuts Chocolat": {
                    price: [2, 5], 
                    description: "Donut au Chocolat"
                },
                "Donuts Vanille": {
                    price: [2, 5], 
                    description: "Donut Vanille"
                },
                "Donuts Fruits Rouges": {
                    price: [2, 5], 
                    description: "Donut au Fruits rouges"
                },
                "Donuts Citron": {
                    price: [2, 5], 
                    description: "Donut au Citron"
                },
                "Donuts Passion": {
                    price: [2, 5], 
                    description: "Donut au Fruit de la Passion"
                },
                "Donuts Caramel": {
                    price: [2, 5], 
                    description: "Donut Caramel"
                },
            },
            Spanish: {
                "Tortillas": {
                    price: [15, 20], 
                    description: "Les meilleurs Tortillas de la ville !"
                },
                "Gaspacho": {
                    price: [10, 20], 
                    description: "Faut aimer, mais c'est pas mauvais"
                },
                "Paella": {
                    price: [30, 50], 
                    description: "Paella Familliale, fruits de mer, épices, poisson, poivrons"
                },
            },
            German: {
                "Choucroute": {
                    price: [25, 40], 
                    description: "Pas aussi bonne que la choucroute française, mais pas mauvaise non plus"
                },
                "Hot Dogs": {
                    price: [5, 10], 
                    description: "Une demi douzaine de hots dogs, bon appétit !"
                },
                "Burgers": {
                    price: [5, 20], 
                    description: "Tout un assortiment de petits burgers"
                },
                "Salade de Pomme de Terre": {
                    price: [10, 20], 
                    description: "Il faut bien nourrir les vegans"
                },
                "Kebab": {
                    price: [5, 25], 
                    description: "Et oui, le kebab c'est allemand, qui l'eus cru ?"
                },
            },
            SeaFood: {
                "Saumon Meunière": {
                    price: [20, 30], 
                    description: "Les soeurs de pierre auront sérieusement cassé les pieds du héros de la légende avec leur saumon meunière"
                },
                "Truite Fario et Salade Verte": {
                    price: [20, 30], 
                    description: "Truite européenne avec son accompagnement"
                },
                "Espadon citron": {
                    price: [20, 30], 
                    description: "Espadon de haute mer au citron"
                },
                "Aile de Raie": {
                    price: [20, 30], 
                    description: "Aile de Raie, câpres et sauce au beurre"
                },
                "Roussette et Pommes Frites": {
                    price: [20, 30], 
                    description: "Roussette méditérannéenne et pommes frites maison"
                },
                "Dorade Grillée": {
                    price: [20, 30], 
                    description: "Dorade Grillée et son accompagnement de petits légumes"
                },
                "Carpe aux Herbes": {
                    price: [20, 30], 
                    description: "Carpe grillée aux herbes et ses pommes de terre maison"
                },
                "Filet de Saules": {
                    price: [20, 30], 
                    description: "Filet de saule, sauce maison et petits légumes"
                },
                "Brandade de Morue": {
                    price: [20, 30], 
                    description: "Brandade maison"
                },
                "Plateau de Fruits de Mers": {
                    price: [20, 30], 
                    description: "Assortiment de fruits de mers et sauces maison"
                },
            },
            Irish: {
                "Râgout Irlandais": {
                    price: [20, 40], 
                    description: "Râgout Irlandais"
                },
                "Guiness Pie": {
                    price: [15, 30], 
                    description: "Guiness Pie"
                },
                "Whisky": {
                    price: [20, 40], 
                    description: "Bouteille de Whisky"
                },
                "Potatos Farls": {
                    price: [10, 20], 
                    description: "Potatos Farls"
                },
            },
            African: {
                "Dambou": {
                    price: [15, 30], 
                    description: "Dambou"
                },
                "Beignet de Poisson Ivoirien": {
                    price: [15, 30], 
                    description: "Beignets de Poisson avec leur sauce ivoirienne"
                },
                "Poulet Congolais": {
                    price: [15, 30], 
                    description: "Poulet Congolais"
                },
                "Couscous": {
                    price: [15, 30], 
                    description: "Couscous typique, avec poulet, agneau, pois chiche, légumes et jus de cuisson"
                },
                "Dattes": {
                    price: [15, 30], 
                    description: "Toutes sortes de déclinaisons de dattes"
                },
                "Galette Ethiopienne": {
                    price: [15, 30], 
                    description: "Galette Ethiopienne"
                },
                "Râgout d'Agneau": {
                    price: [15, 30], 
                    description: "Râgout d'Agneau"
                },
            },
            Indian: {
                "Curry d'Agneau": {
                    price: [15, 30], 
                    description: "Curry d'Agneau"
                },
                "Dahl de Lentilles Vegetariennes": {
                    price: [5, 15], 
                    description: "Dahl de Lentilles Vegetariennes"
                },
                "Poulet Tandoori": {
                    price: [5, 25], 
                    description: "Poulet Tandoori"
                },
                "Samoussas": {
                    price: [15, 25], 
                    description: "Samoussas"
                },
                "Naan": {
                    price: [10, 20], 
                    description: "Naan"
                },
                "Poulet Tika Masala": {
                    price: [15, 25], 
                    description: "Poulet Tika Masala"
                },
                "Keema Matar": {
                    price: [5, 15], 
                    description: "Keema Matar"
                },
            },
            Mexican: {
                "Tacos": {
                    price: [5, 10], 
                    description: "Tacos"
                },
                "Chipolattas": {
                    price: [10, 20], 
                    description: "Chipolattas"
                },
                "Tapas": {
                    price: [10, 20], 
                    description: "Tapas"
                },
                "Chili": {
                    price: [10, 20], 
                    description: "Chili"
                },
                "Chili Con Carne": {
                    price: [15, 25], 
                    description: "Chili Con Carne"
                },
                "Tortillas": {
                    price: [5, 10], 
                    description: "Tortillas"
                },
            },
            "Latin (Cuban, Dominican, Puerto Rican, South & Central American)": "Mexican",
            HotDogs: {
                "Hot Dog Moutarde": {
                    price: [2, 5], 
                    description: "Hit Dog Moutarde"
                },
                "Hot Dog Ketchup": {
                    price: [2, 5], 
                    description: "Hit Dog Ketchup"
                },
                "Hot Dog Vegetarien": {
                    price: [NaN, NaN], 
                    description: "Mort de rire..."
                },
            },
            "Jewish/Kosher": {
                "Challah": {
                    price: [10, 20], 
                    description: "Challah"
                },
            },
            "Café/Coffee/Tea": {
                "Café": {
                    price: [3, 10], 
                    description: "Café"
                },
                "Chocolat Chaud": {
                    price: [3, 10], 
                    description: "Chocolat Chaud"
                },
                "Thé Vert": {
                    price: [3, 10], 
                    description: "Thé vert"
                },
                "Thé au Jasmin": {
                    price: [3, 10], 
                    description: "Thé au Jasmin"
                },
                "Capuccino": {
                    price: [3, 10], 
                    description: "Capuccino"
                },
            },
            "Tex-Mex": "Mexican",
            "Pancakes/Waffles": {
                "Pancake Framboise": {
                    price: [5, 10], 
                    description: "Pancake Framboise"
                },
                "Pancake Myrtille": {
                    price: [5, 10], 
                    description: "Pancake Myrtille"
                },
                "Pancake Chocolat": {
                    price: [5, 10], 
                    description: "Pancake chocolat"
                },
                "Pancake Caramel": {
                    price: [5, 10], 
                    description: "Pancake caramel"
                },
                "Pancake Menthe": {
                    price: [5, 10], 
                    description: "Pancake Menthe"
                },
            },
            "Soul Foud": {
                "Roman Policier": {
                    price: [15, 25], 
                    description: "Des romans policiers, tous de fins limiers"
                },
                "Roman d'Amour": {
                    price: [15, 25], 
                    description: "Des romans d'amour, fleur bleue et dégoulinant de niaiseries"
                },
                "Roman Science Fiction": {
                    price: [15, 25], 
                    description: "Des romans de science fiction, car rien n'est plus beau que l'imagination"
                },
                "Roman d'Horreur": {
                    price: [15, 25], 
                    description: "Des romans d'horreur, pour les amateurs de sensations fortes"
                },
                "Théâtre": {
                    price: [15, 25], 
                    description: "Des pièces de théâtre, pour les vieux de la vieille"
                },
                "Mangas": {
                    price: [15, 25], 
                    description: "Des mangas, pour les millénials fan de japanimation"
                },
                "Bande Dessinées": {
                    price: [15, 25], 
                    description: "Des dande dessinées pour ceux qui n'ont pas envie de lire"
                },
                "Magazine People": {
                    price: [5, 10], 
                    description: "Tous les secrets intimes de personnes que vous ne rencontrerez jamais et que vous n'auriez jamais connu sans nous"
                },
            }
        }[cuisine];
    }

    accompagnements (cuisine) {
        return {
            Hamburgers: {
                "Salade Verte": 1,
                "Potatoes": 3,
                "Petite Frite": 2,
                "Grande Frite": 3
            },
            American: "Hamburgers",
            Chicken: "Hamburgers",
            Chinese: {
                "Portion de riz": 2,
                "Nems": 3,
                "Rouleau de printemps": 3
            },
            Japanese: "Chinese",
            Italian: {
                "Salade Verte": 1,
                "Frites Maison": 2
            },
            "Pizza/Italian": "Italian",
            Steak: 'Hamburgers',
            French: "Italian",
            Delicatessen: "Italian",
            "Ice Cream, Gelato, Yogurt, Ices": {
            },
            Donuts: {
            },
            Spanish: "Italian",
            German: "Italian",
            SeaFood: {
                "Salade Verte": 1,
                "Frites Maison": 2,
                "Farandole de légumes": 3
            },
            Irish: {
            },
            African: {
            },
            Indian: {
            },
            Mexican: {
            },
            "Latin (Cuban, Dominican, Puerto Rican, South & Central American)": "Mexican",
            HotDogs: {
            },
            "Jewish/Kosher": {
            },
            "Café/Coffee/Tea": {
            },
            "Tex-Mex": "Mexican",
            "Pancakes/Waffles": {
            },
            "Soul Foud": {
            }
        }[cuisine];
    }

    entrees (cuisine) {
        return {
            Hamburgers: {
                "Salade Verte": [2],
                "Salade de Tomate": [2],
                "Salade Oeufs Crudité": [3],
                "Assortiment de Crudités": [3],
                "Tartines": [3]
            },
            American: "Hamburgers",
            Chicken: "Hamburgers",
            Chinese: {
                "Mini rouleaux de printemps": [5],
                "Rouleau de printemps au tourteau": [5],
                "Soupe de raviolis aux crevette": [5],
                "Brochettes de crevette": [5],
                "Samoussas de crevette": [5],
                "Nems aux crevette": [5]
            },
            Japanese: "Chinese",
            Italian: {
                "Carpaccio au pesto": [5],
                "Asperges milanaises": [5],
                "Calzone aux tomates": [3],
                "Salade de Melon": [5],
                "Carpaccio aux carpes": [5]
            },
            "Pizza/Italian": "Italian",
            Steak: "Hamburgers",
            French: {
                "Mini Paté en croute": [5],
                "Oeuf Mayonnaise": [3],
                "Asperges grillées": [5],
                "Terrine paysane": [5],
                "Velouté de châteigne": [5],
                "Tempura provencales": [5],
                "Ouef à la coque et mouillettes": [3]
            },
            Delicatessen: "Hamburgers",
            "Ice Cream, Gelato, Yogurt, Ices": {
            },
            Donuts: {
            },
            Spanish: {
                "Gaspacho glacé": [5],
                "Sardines catalanes": [5],
                "Croustades de la mer andalouse": [5],
                "Petit sandwitch ibérique": [5],
                "Cornets de Jambon": [5]
            },
            German: {
                "Soupe de pomme de Terre": [3],
                "Brioche Allemande": [3],
                "Soupe paysanne": [3],
                "Saumon mariné": [3]
            },
            SeaFood: "Hambrugers",
            Irish: "Hamburgers",
            African: "Hamburgers",
            Indian: {
                "Salade Epinard / Pois Chiche": [3],
                "Soupe froide de concombre": [3],
                "Brochettes de rognons": [3],
                "Soupe indienne glacée": [3]
            },
            Mexican: {
                "Trempette aux crevette": [5],
                "Salade Mexicaine": [5],
                "Mesclun au guacamole": [5],
                "Purée de tomate Mexicaine": [3],
                "Enchiladas": [5]
            },
            "Latin (Cuban, Dominican, Puerto Rican, South & Central American)": "Mexican",
            HotDogs: {
            },
            "Jewish/Kosher": {
            },
            "Café/Coffee/Tea": {
            },
            "Tex-Mex": "Mexican",
            "Pancakes/Waffles": {
            },
            "Soul Foud": {
            }
        }[cuisine];
    }

    desserts (cuisine) {
        return {
            Hamburgers: {
                "Apple Dumpling Cobbler": [8],
                "Cheesecake": [8],
                "Pancake Myrtille": [8],
                "Donuts": [4],
                "Cookies": [4],
                "Muffins": [4]
            },
            American: "Hamburgers",
            Chicken: "Hamburgers",
            Chinese: {
                "Boule de coco chinoise": [5],
                "Flan à la fleur de rose": [5],
                "Baignet de banane": [5],
                "Sorbet aux litchis": [5],
                "Riz gluant au lait de coco et à la mangue": [5]
            },
            Japanese: "Chinese",
            Italian: {
                "Pettole": [3],
                "Zaletti": [3],
                "Castagnaccio": [5],
                "Sbrisolona": [5],
                "Pastiera napolitaine": [5]
            },
            "Pizza/Italian": "Italian",
            Steak: "Hamburgers",
            French: {
                "Baba au Rhum": [5],
                "Paris-Brest": [5],
                "Ile flottante": [5],
                "Mille-Feuille": [5],
                "Fondant au chocolat": [5],
                "Crême Brulée": [5],
                "Tarte Tatin": [5],
                "Mousse au chocolat": [5]
            },
            Delicatessen: "Hamburgers",
            "Ice Cream, Gelato, Yogurt, Ices": {
            },
            Donuts: {
            },
            Spanish: {
                "Churros": [5],
                "Tarta de Santiago": [5],
                "Tarta de queso": [5],
                "Crême catalane": [5]
            },
            German: {
                "Forêt Noire": [5],
                "Sablé Viennois": [5],
                "Chinois à la crême de noisette": [5],
                "Strüdel tresse pomme-poire": [5],
                "Stollen": [5],
                "Rote Grütze": [5]
            },
            SeaFood: "Hamburgers",
            Irish: "Hambrugers",
            African: {
                "Tarte au Lait": [5],
                "Biscuit bantou": [5],
                "Kaak": [5],
                "Beignets blofoto": [5]
            },
            Indian: {
                "Gulab Jamun": [5],
                "Khir": [5],
                "Ladoo": [5],
                "Kulfi": [5]
            },
            Mexican: {
                "Churros": [5],
                "Cocada": [5],
                "Tamales": [5],
                "Pan de Elote": [5],
                "Camotes": [5]
            },
            "Latin (Cuban, Dominican, Puerto Rican, South & Central American)": "Mexican",
            HotDogs: {
            },
            "Jewish/Kosher": {
            },
            "Café/Coffee/Tea": {
            },
            "Tex-Mex": "Mexican",
            "Pancakes/Waffles": {
            },
            "Soul Foud": {
            }
        }[cuisine];
    }

    hasCuisineMenu () {
        return {
            Hamburgers: true, American: true, Chicken: true, Chinese: true, Japanese: true, Italian: true, "Pizza/Italian": true,
            Steak: true, French: true, Delicatessen: true, "Ice Cream, Gelato, Yogurt, Ices": false, Donuts: false, Spanish: true,
            German: true, SeaFood: true, Irish: true, African: true, Indian: true, Mexican: true,
            "Latin (Cuban, Dominican, Puerto Rican, South & Central American)": true, HotDogs: false, "Jewish/Kosher": true,
            "Café/Coffee/Tea": false, "Tex-Mex": true, "Pancakes/Waffles": false, "Soul Foud": true
        }
    }

    hasMenu (cuisine) {
        return this.hasCuisineMenu()[cuisine];
    }
}
