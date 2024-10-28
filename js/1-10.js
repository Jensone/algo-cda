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
let prix = Math.floor(Math.random() * 100) + 1;

if (prix > 200) {
    console.log(prix * 0.8);
} else {
    console.log(prix * 1.2);
}