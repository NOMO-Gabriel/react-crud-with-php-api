
# CRUD App avec React et PHP

Bienvenue dans le projet **CRUD App** ! Cette application combine un front-end en React et Bootstrap avec un back-end en PHP pour permettre la gestion d'utilisateurs (CRUD).

## Table des matières

- [Aperçu](#aperçu)
- [Démonstration](#démonstration)
- [Fonctionnalités](#fonctionnalités)
- [Comment utiliser](#comment-utiliser)
- [Installation](#installation)
- [Configuration de la base de données](#configuration-de-la-base-de-données)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Aperçu

**CRUD App** est une application de gestion d'utilisateurs qui vous permet de créer, lire, mettre à jour et supprimer des utilisateurs. Elle combine un front-end en React avec un back-end en PHP pour une application efficace et complète.

![Capture d'écran de l'application](/Demo/cap1.png)

![Capture d'écran de l'application](/Demo/cap2.png)

![Capture d'écran de l'application](/Demo/cap3.png)

## Démonstration

- [Voir la vidéo de démonstration](/Demo/crud.gif)


## Fonctionnalités

- Créer de nouveaux utilisateurs.
- Lire et consulter les utilisateurs existants.
- Mettre à jour les informations des utilisateurs.
- Supprimer les utilisateurs.

## Comment utiliser

1. Clonez ou téléchargez ce projet sur votre ordinateur.
2. Accédez à votre répertoire local où se trouve le projet.
3. Configurez l'API (voir la section [Installation](#installation)).
4. Configurez le front-end (voir les instructions [ici](#front-end)).
5. Ouvrez le front-end dans un navigateur web pour commencer à utiliser l'application.

## Installation

### Front-end

1. Naviguez vers le dossier `front-end/react-crud` dans votre terminal.
2. Installez les dépendances avec `npm install`.
3. Lancez l'application avec `npm start`.
4. L'application devrait maintenant être accessible sur `http://localhost:3000` ou le port fourni par l'application.


### Back-end (API)

#### Instructions pour les utilisateurs de Linux et macOS

1. Naviguez vers le dossier `backend/api` dans votre terminal.
2. Copiez le dossier `api` dans votre répertoire de serveur web (`htdocs` pour Apache ou `www` pour Nginx).
3. Assurez-vous que votre serveur web (Apache ou Nginx) est actif.
4. L'API sera disponible à l'URL `http://localhost/api`.

#### Instructions pour les utilisateurs de Windows

1. Naviguez vers le dossier `backend/api` dans votre terminal.
2. Copiez le dossier `api` dans votre répertoire de serveur web (`htdocs` pour XAMPP ou `www` pour WAMP).
3. Assurez-vous que votre serveur web (Apache ou Nginx) est actif.
4. L'API sera disponible à l'URL `http://localhost/api`.

## Configuration de la base de données

1. **Choisissez un gestionnaire de base de données** : Nous vous recommandons d'utiliser XAMPP, WAMP, ou MAMP pour une gestion facile des bases de données MySQL.
2. **Créez une base de données** : Ouvrez votre gestionnaire de base de données (phpMyAdmin ou autre) et créez une base de données nommée `react-crud`.
3. **Créez une table** : Dans la base de données `react-crud`, créez une table `users` avec les colonnes suivantes :
    - `id` : Entier (clé primaire, auto-incrément).
    - `name` : VARCHAR (nom de l'utilisateur).
    - `email` : VARCHAR (email de l'utilisateur).
    - `mobile` : VARCHAR (numéro de téléphone de l'utilisateur).
    - `created_at` : TimeStamp (date de creation de l'utilisateur).
    - `mobile` : TimesTamp (date de modification de l'utilisateur).
4. **Modifiez `DbConnect.php`** : Ouvrez le fichier `DbConnect.php` dans `backend/api` et modifiez les paramètres de connexion à votre base de données (`serveur`, `nom d'utilisateur`, `mot de passe`, `nom de la base de données`) selon votre configuration.
5.voici a quoi ressemble ma base de donnee deja configuree:![alt text](/Demo/bd1.png) ![alt text](/Demo/bd2.png)

## Contribuer

Les contributions à ce projet sont les bienvenues ! N'hésitez pas à soumettre des problèmes, suggestions ou améliorations via GitHub.

## Licence

Ce projet est sous licence [MIT](licence.txt). Vous pouvez consulter le fichier `licence.txt` pour plus de détails.
