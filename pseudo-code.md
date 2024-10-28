DEBUT
    SOUMISSION du formulaire de l'UTILISATEUR
    SI TENTATIVES est plus grand que 2
        ALORS
            REDIRIGER l'UTILISATEUR vers le formulaire
            AFFICHER un message de limite d'essai
            ENCLENCHER un délai d'attente de 15 minutes pour resoumettre le formulaire
        SINON
            SI L'UTILISATEUR existe et que les IDENTIFIANTS sont valides
                ALORS
                    CREER une session d'authentification
                    REDIRIGER l'UTILISATEUR vers sa page de profil
            SINON
                REDIRIGER l'UTILISATEUR vers le formulaire
                AFFICHER un message d'IDENTIFIANT non valides
                INCREMENTER TENTATIVES de un.
            FINSI
    FINSI
FIN