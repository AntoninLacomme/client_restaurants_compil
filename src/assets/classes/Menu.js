export class Menu {
    constructor (carteDesPlats) {
        this.carte = carteDesPlats;
    }

    generateMenu (cuisine) {
        if (typeof this.carte.menu()[cuisine] == "string") {
            return this.generateMenu (this.carte.menu()[cuisine]);
        }
        if (this.carte.menu()[cuisine] == undefined) {
            return {};
        }

        let menu = [];
        let proba = 70;
        Object.keys(this.carte.menu()[cuisine]).forEach ((plat) => {
            if (getRandomInt(0, 100) < proba) {
                menu.push({ "plat": plat, 
                            "price": getRandomInt (this.carte.menu()[cuisine][plat].price[0], this.carte.menu()[cuisine][plat].price[1]),
                            "description": this.carte.menu()[cuisine][plat].description
                        });
            }
        });
        return menu;
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}
