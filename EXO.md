# Borne de commandes resto

---

Le restaurant **Prepa Cuizine** recherche un système qui permettrait de faciliter la prise de commande et les paiements de celles-ci en plus de employé en caisse. Vous avaez entendu parleer de borne de commande connectées au web et qui permettent d'utiliser une application web dédiée à la gestion des commandes et des paiements.

## Exo

Choisissez une de solution apporté par la borne de commandes et rédiger un algorithme permettant de réaliser la fonctionnalité demandée :

- Gestion des commandes
- Gestion des paiements

### Gestion des paiements

Pseudo-code :

**GESTION DU PAIEMENT**
DEBUT
    GÉNÉRER le numéro de commande
    ENVOYER la commande en attente en cuisine
    PROPOSER le mode de paiement
    SI le mode choisi est EN CAISSE
        ALORS 
        IMPRIMER le ticket de commande
        **PROCESSUS DE PAIEMENT**
    SINON
        ALORS 
        AFFICHER le montant à payer
        ENVOYER le montant sur le TPE
        **PROCESSUS DE PAIEMENT**
    FINSI
FIN

**PROCESSUS DE PAIEMENT**
DEBUT
    SI le moyen de paiement est CARTE BANCAIRE
        INVITER le CLIENT à PAYER
        SI les fonds sont suffisants
            ALORS 
            VALIDER le paiement
            VALIDER la commande
            IMPRIMER la facture
        SINON
            ALORS
            REFUSER le paiement
            ANNULER la commande
            IMPRIMER le ticket d'annulation
        FINSI
    SINON
        ALORS
        INVITER le CLIENT à PAYER en espèces
        SI les fonds sont suffisants
            ALORS 
            VALIDER le paiement
            VALIDER la commande
            IMPRIMER la facture
        SINON
            ALORS
            REFUSER le paiement
            ANNULER la commande
            IMPRIMER le ticket d'annulation
        FINSI
    FINSI
FIN

---

### Gestion des commandes

Pseudo-code :

**GESTION DES COMMANDES**

DEBUT
    AFFICHER l'écran d'accueil
    L'UTILISATEUR appuye sur le bouton "Commander"
    L'UTILISATEUR choisit le mode de consommation
    AFFICHER les catégories des produits à la carte
    L'UTILISATEUR choisit une catégorie
    AFFICHER les produits de la catégorie
    L'UTILISATEUR choisit un produit
    PRÉSENTER les suppléments en option du produit sélectionné
    SI L'UTILISATEUR choisit une option supplémentaire
        ALORS
        AJOUTER cette option à la commande
        AFFICHER une proposition d'ajout de produit
        SI L'UTILISATEUR accepte
            ALORS
            AFFICHIER les catégories des produits à la carte
        SINON
            ALORS
            AFFICHER le panier pour valider la commande
            LANCER un TIMER de 60 secondes
            SI L'UTILISATEUR valide la commande
                ALORS
                **GESTION DES PAIEMENTS**
            SINON SI L'UTILISATEUR annule la commande
                ALORS
                EFFACER le panier
                RETOURNER à l'écran d'accueil
            SINON SI le TIMER à atteint les 50 secondes
                ALORS
                AFFICHER un message pour confirmer la présence
                SI L'UTILISATEUR confirme
                    ALORS
                    RELANCER un TIMER de 60 secondes
                SINON
                    EFFACER le panier à la fin du TIMER en cours
                    AFFICHER l'écran d'accueil
                FINSI
            FINSI
        FINSI
    FINSI
FIN