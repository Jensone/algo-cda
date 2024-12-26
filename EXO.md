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

---

Recommandations par critique IA : 

Critiques et améliorations des algorithmes proposés :

1. Gestion des paiements

Forces :
	•	Les étapes sont claires et suivent une logique chronologique.
	•	Les différents moyens de paiement (carte bancaire et espèces) sont pris en compte.
	•	Une validation explicite des fonds et des commandes renforce l’intégrité du processus.
	•	La gestion des échecs de paiement est incluse, ce qui est essentiel pour une expérience utilisateur complète.

Faiblesses et points d’amélioration :
	1.	Manque de modularité :
	•	Le pseudo-code mélange la logique de commande et de paiement dans la gestion globale. Il serait mieux de séparer clairement ces responsabilités pour éviter la redondance.
	2.	Scénarios manquants :
	•	Que se passe-t-il si l’imprimante est en panne ?
	•	Que faire si le TPE (Terminal de Paiement Électronique) est indisponible ?
	•	Aucun cas de paiement mobile (par exemple : Apple Pay ou Google Pay) n’est mentionné.
	3.	Manque de gestion d’erreurs avancée :
	•	Que faire si le client n’insère pas de carte ou si l’appareil rencontre une erreur technique ?
	•	Les refus de paiement ne prévoient pas de deuxième tentative ou de bascule vers un autre moyen de paiement.
	4.	Répétitions :
	•	Les processus pour carte bancaire et espèces sont très similaires. Il serait judicieux d’extraire un processus générique de validation de paiement pour simplifier et réutiliser le code.

Recommandations :
	•	Introduire des sous-fonctions claires, comme processusPaiementCarte() et processusPaiementEspeces().
	•	Ajouter un cas pour les nouveaux moyens de paiement numériques.
	•	Prévoir une gestion d’erreurs détaillée et des alternatives en cas de panne.

2. Gestion des commandes

Forces :
	•	La logique est bien organisée avec un flux clair et intuitif.
	•	Le pseudo-code prend en compte des cas d’ajout d’options, d’annulation et de confirmation de commande.
	•	Le timer pour la validation est une bonne idée pour éviter les commandes abandonnées.

Faiblesses et points d’amélioration :
	1.	Complexité inutile dans certains cas :
	•	Le timer de 60 secondes avec relance à 50 secondes est une bonne intention, mais cela peut compliquer inutilement la logique sans bénéfice réel si les utilisateurs sont déjà habitués à valider rapidement leurs commandes.
	2.	Scénarios manquants :
	•	Que se passe-t-il si le client quitte la borne avant de terminer la commande ?
	•	Aucune mention de la gestion d’erreurs pour la sélection des produits ou des suppléments (par exemple : indisponibilité d’un produit).
	3.	Manque de modularité et de réutilisation :
	•	Les étapes répétées pour afficher des catégories et ajouter des produits pourraient être simplifiées en une boucle.
	•	Les options supplémentaires ne sont pas généralisées ; il serait préférable de permettre un ajout générique de plusieurs options avant validation.
	4.	Gestion du panier simpliste :
	•	Il n’y a pas de mention d’une fonctionnalité de modification ou de suppression d’un produit déjà ajouté au panier.
	5.	Absence de retour utilisateur détaillé :
	•	Le pseudo-code ne prévoit pas d’afficher un résumé interactif du panier avec des options d’édition avant validation.

Recommandations :
	•	Simplifier le timer en se basant sur un seul délai avant annulation (par exemple, 60 secondes) et éviter de relancer un timer intermédiaire.
	•	Ajouter des boucles pour la sélection de plusieurs produits ou suppléments avant validation.
	•	Intégrer la gestion d’un panier interactif (modification, suppression, révision).
	•	Ajouter des vérifications pour les produits ou options indisponibles.

Pistes d’amélioration globales :
	1.	Validation des états :
	•	Introduire des étapes explicites pour vérifier l’état de la borne (connectivité, état de l’imprimante, disponibilité des produits ou du TPE).
	2.	Flexibilité des fonctionnalités :
	•	Ajouter une structure modulaire permettant de prendre en charge d’autres fonctionnalités à l’avenir (par exemple, précommande en ligne ou fidélité client).
	3.	Expérience utilisateur (UX) :
	•	Intégrer des messages explicites pour guider l’utilisateur à chaque étape.
	•	Prévoir des notifications sonores ou visuelles pour signaler une erreur ou une confirmation.
	4.	Éviter la duplication :
	•	Utiliser des fonctions génériques comme choisirOption() ou traiterPaiement() pour éviter la redondance dans les cas similaires.

Exemple amélioré : Gestion des paiements

GESTION DU PAIEMENT
DEBUT
    GÉNÉRER le numéro de commande
    ENVOYER la commande en cuisine (statut : En attente)
    PROPOSER le mode de paiement
    SI le mode choisi est EN CAISSE
        IMPRIMER le ticket de commande
        TERMINER
    SINON
        AFFICHER le montant à payer
        ENVOYER le montant sur le TPE
        TRAITER_LE_PAIEMENT(moyen_de_paiement)
    FINSI
FIN

TRAITER_LE_PAIEMENT(moyen_de_paiement)
DEBUT
    INVITER le CLIENT à PAYER
    SI les fonds sont suffisants
        ALORS
        VALIDER le paiement
        METTRE À JOUR le statut de la commande (statut : Validée)
        IMPRIMER la facture
    SINON
        REFUSER le paiement
        ANNULER la commande (statut : Annulée)
        IMPRIMER le ticket d'annulation
    FINSI
FIN

Ces ajustements permettront un pseudo-code plus structuré, flexible et robuste pour l’implémentation.