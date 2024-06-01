# Test technique – Développeur Full Stack

## Django Backend

Ce projet contient la partie Backend Realise avec Django Rest template

## Comment Executer le projet

### Installation des Dependances
   -Pour installer les depandences execute cette commande dans votre terminale 
        `pip install -r requirements.txt`

### Pour demarrer le projet 
    - pour lancer le projet execute cette commande dans votre terminale 
        `python manage.py runserver`

### Pour Modifier les informations de base de donnee
    -Pour Modifier les informations de base de donnee accede au fichier setting.py dans le repertoire nutritechbackend et ajouter ces information :
        `DATABASE_NAME=nutritechdb`
        `DATABASE_USER=nutritechdb_user`
        `DATABASE_PASSWORD=pass`
        `DATABASE_HOST=localhost`
        `DATABASE_PORT=5432`

### Information sur L'API
    - Pour acceder a l'api ajouter a votre url '/api/v1':
        *pour Afficher tous les produit  '/products'
        *pour ajouter produit '/addproduct'
        *pour supprimer produit '/deleteproduct/{id_product}'
        


