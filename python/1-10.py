import random

# Exercice 1 : Afficher le message "Bonjour" à l'écran
print("Bonjour")

# Exercice 2 : Entrer Deux Nombres et Afficher leur Produit
nb1 = 20
nb2 = 30
print(nb1 * nb2)

# Exercice 3 : Permuter le Contenu de Deux Entiers A et B et les Afficher
a = 10
b = 20
a, b = b, a
print(f"a = {a}, b = {b}")

# Exercice 4 : Afficher si un Entier Entré est Pair ou Impair
nb = random.randint(1, 100)
if nb % 2 == 0:
    print(f"Le nombre {nb} est pair")
else:
    print(f"Le nombre {nb} est impair")

# Exercice 5 : Afficher le Plus Grand des Trois Entiers Entrés
nombres = [random.randint(1, 100), random.randint(1, 100), random.randint(1, 100)]
print(max(nombres))

# Exercice 6 : Ajouter un Commentaire sur une Note Entrée
note = random.randint(0, 20)

if note < 10:
    print("Insuffisant")
elif note < 14:
    print("Assez bien")
elif note < 16:
    print("Bien")
elif note < 19:
    print("Très bien")
else:
    print("Excellent")

# Exercice 7 : Demander Deux Nombres M et N et Informer sur le Signe de leur Produit
m = random.randint(-100, 100)
n = random.randint(-100, 100)
produit = m * n

if produit > 0:
    print(f"Le produit de {m} et {n} est positif")
elif produit < 0:
    print(f"Le produit de {m} et {n} est négatif")
else:
    print(f"Le produit de {m} et {n} est nul")

# Exercice 8 : Calculer la Valeur Absolue d'un Entier Entré
nb = random.randint(-100, 100)
print(abs(nb))

# Exercice 9 : Calculer la Somme de Trois Entiers Entrés
nombres = [random.randint(1, 100), random.randint(1, 100), random.randint(1, 100)]
print(sum(nombres))

# Exercice 10 : Calculer le Prix TTC avec Remise d'un Magasin
# Défifinir la TVA à 1.2 et la réduction comme vous voulez
prix = random.randint(1, 500)

if prix > 200:
    total = (prix * 0.8) * 1.2
    print(total) 
else:
    print(prix * 1.2)