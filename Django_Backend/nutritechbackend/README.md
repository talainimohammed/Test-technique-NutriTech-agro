# Test technique – Développeur Full Stack

## Django Backend

Ce projet contient la partie backend réalisée avec Django Rest Framework.

## Comment Executer le projet

### Installation des Dependances
   -Pour installer les dépendances, exécutez cette commande dans votre terminal : 
        `pip install -r requirements.txt`

### Pour demarrer le projet 
    - pour lancer le projet execute cette commande dans votre terminal
        `python manage.py runserver`

### Pour Modifier les informations de base de donnee
    -Pour modifier les informations de la base de données, accédez au fichier settings.py dans le répertoire nutritechbackend et ajoutez ces informations :
        `DATABASE_NAME=nutritechdb`
        `DATABASE_USER=nutritechdb_user`
        `DATABASE_PASSWORD=pass`
        `DATABASE_HOST=localhost`
        `DATABASE_PORT=5432`

### Information sur L'API
    - Pour accéder à l'API, ajoutez '/api/v1' à votre URL.:
        *pour afficher tous les produit  '/products'
        *pour ajouter produit '/addproduct'
        *pour supprimer produit '/deleteproduct/{id_product}'



