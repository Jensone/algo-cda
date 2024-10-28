<?php

// Exercice 1 : Afficher le message "Bonjour" à l'écran
echo "Bonjour";

// Exercice 2 : Entrer Deux Nombres et Afficher leur Produit
$nb1 = 20; $nb2 = 30;
echo $nb1 * $nb2;

// Exercice 3 : Permuter le Contenu de Deux Entiers A et B et les Afficher
$a = 10; $b = 20;
$temp = $a; $a = $b; $b = $temp;
echo "a = $a, b = $b";


// Exercice 4 : Afficher si un Entier Entré est Pair ou Impair
$nb = random_int(1, 100);

if ($nb % 2 == 0) {
    echo "Le nombre $nb est pair";
} else {
    echo "Le nombre $nb est impair";
}

// Exercice 5 : Afficher le Plus Grand des Trois Entiers Entrés
$nombre = [random_int(1, 100), random_int(1, 100), random_int(1, 100)];
echo max($nombre);

// Exercice 6 : Ajouter un Commentaire sur une Note Entrée
$note = random_int(0, 20);

switch ($note) {
    case $note < 10:
        echo "Insuffisant";
        break;
    case $note < 14:
        echo "Assez bien";
        break;
    case $note < 16:
        echo "Bien";
        break;
    case $note < 19:
        echo "Très bien";
        break;
    default:
        echo "Excellent";
}

// Exercice 7 : Demander Deux Nombres M et N et Informer sur le Signe de leur Produit
$m = random_int(-100, 100);
$n = random_int(-100, 100);

if ($m * $n > 0) {
    echo "Le produit de $m et $n est positif";
} elseif ($m * $n < 0) {
    echo "Le produit de $m et $n est négatif";
} else {
    echo "Le produit de $m et $n est nul";
}

// Exercice 8 : Calculer la Valeur Absolue d'un Entier Entré
$nb = random_int(-100, 100);
echo abs($nb);

// Exercice 9 : Calculer la Somme de Trois Entiers Entrés
$nombres = [random_int(1, 100), random_int(1, 100), random_int(1, 100)];
echo array_sum($nombres);

// Exercice 10 : Calculer le Prix TTC avec Remise d'un Magasin
// Défifinir la TVA à 1.2 et la réduction comme vous voulez

$prix = random_int(1, 500);

if ($prix > 200) {
    $total = ($prix * 0.8) * 1.2;
    echo $total;
} else {
    echo $prix * 1.2;
}
