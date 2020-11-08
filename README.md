# client_restaurants_compil

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1. Page générale
L'application se lance sur un affichage de la liste des restaurants.
A gauche se trouvent les paramètres de recherche. De bas en haut :
    - le nombre de restaurants trouvés,
    - la page courante / le nombre de pages totales
    - un champs de saisie permettant de faire une recherche par nom
    - une progressbar permettant de choisir le nombre de restaurants à afficher sur une seule page
    - les boutons précédants et suivants, permettant de naviguer d'une page à l'autre

Au centre, la liste des restaurants. Les restaurants peuvent être triés par ordre croissant et décroissant en fonction de leur nom ou de leur cuisine.
Pour afficher des informations complémentaires au restaurant, il suffit de cliquer sur la ligne. Une pop-up apparaitra.
Cette pop-up contient 3 onglets, "General", "Les notes du Jury" et "Gestion Admin"
    - L'onglet Général affiche les coordonnées du restaurant ainsi qu'une map le géolocalisant.
    - L'onglet Les notes du jury affiche toutes les notes obtenues par ce restaurant.
    - L'onglet Gestion Admin affiche un bouton permettant de supprimer le restaurant de la base de donnée.  

Pour accéder aux détails d'un restaurant, il faut cliquer sur la petite loupe de son onglet Général (à gauche de Adresse)

2. Les Détails du restaurant :
Les Détails du restaurant se découpent en trois points: "Restaurant", "Localisation", et "Grades"

- Dans Restaurant, on trouve, le nom et le type de cuisine du restaurant. On trouve également les menus proposés par ce restaurant, ainsi que sa carte complète. Cliquez sur un menu permet d'afficher son détail, qui se compose d'une entrée, d'un plat et d'un dessert.
Les menus et la carte sont générés aléatoirement, et changeront donc d'un restaurant à l'autre (essayez les restaurants français, se sont proposant la carte la plus fournie)

- Dans Localisation, on retrouve l'adresse du restaurant, ainsi qu'une petite map permettant de le localiser.

- Dans Grades, on retrouve toutes les notes attribuées à ce restaurant.


3. Navigation :
Dans le coin supérieur droit de l'écran, se trouve un petit menu statique. Passez la sourie dessus pour faire apparaitre les choix.
- Le premier onglet (la maison) permet de retourner à la page principale.
- Le second onglet (le +) permet d'ajouter un restaurant à la base de donnée

4. Ajouter un Restaurant :
L'ajout d'un restaurant passe par trois phases (notez qu'à chaque phase, un bouton back permet de revenir à la phase précédante afin d'apporter des correctifs)
- Premièrement, il faut saisir l'adresse. Il faut choisir un Quartier, saisir le nom de la rue, du batiment et le zipcode (attention, un zipcode se compose exactement de 5 entiers, ex: 00000). Une sécurité a été mise en place pour s'assurer que tous les champs sont bien remplis. Pour remplir les coordonnées en latitude et longitude, il faut cliquer que la mini-map. Celà place un curseur, que l'on peut dépacer en recliquant sur la mini-map. Le curseur indique remplira les chalos latitude et longitude. 

- Deuxièmement, il faut renseigner le nom du restaurant et son type de cuisine, et une sécurité s'assure que ces deux champs sont remplis.

- Et enfin, la troisième phase est optionnelle et permet de rajouter des notes au restaurant, en saisissant le garde, le score et la date d'obtention. Il suffit d'appuyer sur Valider Formulaire pour enregistrer le restaurant dans la base de donnée. Toute fois la redirection n'est pas automatique, et il faudra revenir à la main à la page d'accueil.