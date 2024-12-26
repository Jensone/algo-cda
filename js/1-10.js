// Exercice 1 : Afficher le message "Bonjour" à l'écran
console.log("Bonjour");

// Exercice 2 : Entrer Deux Nombres et Afficher leur Produit
let nb1 = 20;
let nb2 = 30;
console.log(nb1 * nb2);

// Exercice 3 : Permuter le Contenu de Deux Entiers A et B et les Afficher
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(`a = ${a}, b = ${b}`);

// Exercice 4 : Afficher si un Entier Entré est Pair ou Impair
let nb = Math.floor(Math.random() * 100) + 1;

if (nb % 2 === 0) {
    console.log(`Le nombre ${nb} est pair`);
} else {
    console.log(`Le nombre ${nb} est impair`);
}

// Exercice 5 : Afficher le Plus Grand des Trois Entiers Entrés
let nombres = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
console.log(Math.max(...nombres));

// Exercice 6 : Ajouter un Commentaire sur une Note Entrée
let note = Math.floor(Math.random() * 21);

if (note < 10) {
    console.log("Insuffisant");
} else if (note < 14) {
    console.log("Assez bien");
} else if (note < 16) {
    console.log("Bien");
} else if (note < 19) {
    console.log("Très bien");
} else {
    console.log("Excellent");
}

// Exercice 7 : Demander Deux Nombres M et N et Informer sur le Signe de leur Produit
let m = Math.floor(Math.random() * 201) - 100;
let n = Math.floor(Math.random() * 201) - 100;
let produit = m * n;

if (produit > 0) {
    console.log(`Le produit de ${m} et ${n} est positif`);
} else if (produit < 0) {
    console.log(`Le produit de ${m} et ${n} est négatif`);
} else {
    console.log(`Le produit de ${m} et ${n} est nul`);
}

// Exercice 8 : Calculer la Valeur Absolue d'un Entier Entré
let nb_abs = Math.floor(Math.random() * 201) - 100;
console.log(Math.abs(nb_abs));

// Exercice 9 : Calculer la Somme de Trois Entiers Entrés
let nombres_somme = [
    Math.floor(Math.random() * 100) + 1, 
    Math.floor(Math.random() * 100) + 1, 
    Math.floor(Math.random() * 100) + 1
];
console.log(nombres_somme.reduce((a, b) => a + b, 0));

// Exercice 10 : Calculer le Prix TTC avec Remise d'un Magasin
// Défifinir la TVA à 1.2 et la réduction comme vous voulez
let prix = Math.floor(Math.random() * 500) + 1;

if (prix > 200) {
    let total = (prix * 0.8) * 1.2;
    console.log(total);
} else {
    console.log(prix * 1.2);
}

// ### Exercice 11 : Déterminer la Catégorie d'un Enfant en Fonction de son Âge

// #### Algorithme :

// ```
// 1. Entrer l'âge de l'enfant (Age)
let age = prompt("Entrer l'âge de l'enfant");

switch (age) {
    case age <= 5:
        console.log("Pas de catégorie");
        break;
    case age < 6:
        console.log("Enfant de 6 à 7 ans");
        break;
    case age < 8:
        console.log("Écolier de 8 à 9 ans");
        break;
    case age < 10:
        console.log("Enfant de 10 à 11 ans");
        break;
    default:
        console.log("Cadet après 12 ans");
}
// 2. Si l'âge est entre 6 et 7 ans :
//     3. Afficher "Enfant de 6 à 7 ans"
// 4. Sinon, si l'âge est entre 8 et 9 ans :
//     5. Afficher "Écolier de 8 à 9 ans"
// 6. Sinon, si l'âge est entre 10 et 11 ans :
//     7. Afficher "Enfant de 10 à 11 ans"
// 8. Sinon :
//     9. Afficher "Cadet après 12 ans"
// ```

// ### Exercice 12 : Afficher les Mois en Lettres Selon le Numéro Entré

// #### Algorithme :

// ```
// 1. Entrer un numéro de mois (Mois)
// 2. Si l'utilisateur entre 1 :
//     3. Afficher "Janvier"
// 4. Sinon, si l'utilisateur entre 2 :
//     5. Afficher "Février"
// 6. Continuer de la même manière pour les autres mois...
// ```

const mois = {
    1: "Janvier",
    2: "Février",
    3: "Mars",
    4: "Avril",
    5: "Mai",
    6: "Juin",
    7: "Juillet",
    8: "Août",
    9: "Septembre",
    10: "Octobre",
    11: "Novembre",
    12: "Décembre"
}

let selection = prompt("Entrer un numéro de mois");

console.log(months[selection]);



// ### Exercice 13 : Afficher "Bonsoir" 10 Fois en Utilisant la Boucle While

// #### Algorithme :

// ```
// 1. Initialiser un compteur (i) à 1
let i = 1;

// 2. Tant que i est inférieur ou égal à 10 :
while (i <= 10) {
    //     3. Afficher "Bonsoir"
    console.log("Bonsoir");
    //     4. Incrémenter le compteur i
    i++;
}
// ```

// ### Exercice 14 : Calculer la Somme de 1 à 10 en Utilisant la Boucle While

// #### Algorithme :

// ```
// 1. Initialiser une variable de somme (Somme) à 0
// 2. Initialiser un compteur (i) à 1
// 3. Tant que i est inférieur ou égal à 10 :
//     4. Ajouter i à la somme (Somme)
//     5. Incrémenter le compteur i
// 6. Afficher la somme (Somme)
// ```

// ### Exercice 15 : Calculer la Somme de 1 à N en Utilisant la Boucle While

// #### Algorithme :

// ```
// 1. Entrer un nombre N
// 2. Initialiser une variable de somme (Somme) à 0
// 3. Initialiser un compteur (i) à 1
// 4. Tant que i est inférieur ou égal à N :
//     5. Ajouter i à la somme (Somme)
//     6. Incrémenter le compteur i
// 7. Afficher la somme (Somme)
// ```