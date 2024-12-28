# Système de réservation de salles de coworking

## Description :
Une application pour gérer la réservation de salles dans des espaces de coworking. Ce système permet aux utilisateurs de rechercher, réserver et gérer les salles . Les administrateurs peuvent gérer les salles, suivre les réservations et les revenus.

## Fonctionnalités principales :

### Utilisateur :
- Réservation de salles avec paiement en ligne.
- Annulation ou modification des réservations existantes.

### Administrateur :
- Gestion des salles (ajout, modification, suppression).
- Suivi des réservations et des revenus générés.

### Tableau de bord dynamique :
- Statistiques sur l'utilisation des salles.
- Visualisation graphique des réservations et des revenus.

## Technologies :
- *Backend* : Spring Boot (gestion des réservations avec validations complexes).
- *Frontend* : React
- *Base de données* : MySQL.
- *Paiement* :recu generé et à telecharger en ligne .

## Architecture du projet :

### Backend
Le backend utilise Spring Boot pour créer une application robuste et scalable. Le code suit une structure modulaire et est organisé comme suit :

## **Structure du Projet**

1. **ma.projet.coworking**  
   - **CoworkingApplication.java** : Point d'entrée de l'application Spring Boot, démarre l'application avec la méthode `main`.  

2. **ma.projet.coworking.controller**  
   - Contient les classes de contrôleur qui gèrent les requêtes HTTP entrantes. Chaque contrôleur est dédié à une fonctionnalité ou une entité spécifique et expose des points de terminaison RESTful.  

3. **ma.projet.coworking.exception**  
   - Gère les exceptions personnalisées pour fournir des réponses adaptées en cas d'erreurs spécifiques.  

4. **ma.projet.coworking.model**  
   - Contient les classes d'entités qui définissent la structure des données dans la base de données. Ces classes sont annotées avec des annotations JPA.  

5. **ma.projet.coworking.repository**  
   - Contient les interfaces de dépôt qui étendent les repositories Spring Data JPA pour faciliter l'interaction avec la base de données.  

6. **ma.projet.coworking.request**  
   - Contient les classes pour gérer les objets reçus dans les requêtes HTTP, souvent utilisés pour le mappage des données entrantes.  

7. **ma.projet.coworking.response**  
   - Contient les classes pour structurer les réponses HTTP envoyées au client, facilitant la standardisation des réponses.  

8. **ma.projet.coworking.security**  
   - Contient les configurations et les filtres de sécurité pour gérer l'authentification et l'autorisation avec JWT.  

9. **ma.projet.coworking.service**  
   - Contient les classes de services qui encapsulent la logique métier. Ces services interagissent avec les repositories et d'autres services.  

### Frontend
Le frontend est développé avec React . il permet aux utilisateurs de naviguer facilement et de visualiser les disponibilités des salles. We're using create-react-app as a base.

## Docker Image
Le projet peut être facilement conteneurisé à l'aide de Docker pour simplifier le déploiement dans des environnements de production ou de développement. Un fichier Dockerfile est inclus pour la création de l'image Docker.

## Guide de démarrage :

### Prérequis :

1.  *Git*: Assurez-vous que Git est installé sur votre machine.

2.  *Java Development Kit (JDK)
    - Téléchargez et installez-le depuis [Oracle Java Downloads](https://www.oracle.com/java/technologies/downloads/).

3.  *Apache Maven*: Installez Apache Maven pour gérer les dépendances du backend.
    - Téléchargez et installez-le depuis [Apache Maven](https://maven.apache.org/download.cgi).

4.  *MySQL *: Installez un serveur MySQL .
    - Pour MySQL: [MySQL Downloads](https://dev.mysql.com/downloads/)
        - Assurez-vous que le serveur est en cours d'exécution et que vous avez les identifiants d'accès (host, username, password).

5. *Node.js and npm*: Install Node.js which comes with npm.
    - Download and install it from [Node.js Downloads](https://nodejs.org/en/download/)
    - For version consistency, you can use a Node Version Manager like NVM, but it's not strictly necessary. 
     - If you use nvm you can ensure that you use a specific version nvm use 14.11.0

### Configuration Backend :

1.  *Clonez le projet*:
    bash
    git clone <repository_url>
    cd <E:\examnewversion\salle-coworking\salle-coworking\back-end>
    

2.  *Configurez la base de données*:
    - Dans le fichier src/main/resources/application.properties, configurez les paramètres de connexion à votre base de données (URL, username, password). Exemple pour MySQL:
      properties
       spring.datasource.url=jdbc:mysql://localhost:3306/cocoworking?useSSL=false
        spring.datasource.username=root
        spring.datasource.password=
        spring.jpa.hibernate.ddl-auto=update 
      
   

3. *Installez les dépendances du backend*:
    - Exécutez la commande suivante dans le dossier du backend:
    bash
    mvn clean install
    

4. *Démarrer le backend*:
    - Exécutez la commande suivante:
    bash
    mvn spring-boot:run
    
    - Vérifiez que le backend fonctionne en visitant http://localhost:9090 dans votre navigateur.

### Configuration Frontend :

1.  *Clonez le projet*:
    bash
    git clone <repository_url>
    cd <E:\examnewversion\salle-coworking\salle-coworking\coworking-frontend >
    

2.  *Installez les dépendances du frontend*:
    - Exécutez la commande suivante dans le dossier du frontend:
    bash
    npm install
    

3.  *Démarrer le frontend*:
    - Après l'installation des dépendances, démarrez le serveur de développement React:
    bash
    npm start
    
    - Accédez au frontend à http://localhost:3000 dans votre navigateur.

### Utilisation :

#### Authentification :
- Pour vous authentifier en tant qu'utilisateur :
  - Email : ihssane@ihssane
  - Mot de passe : 123


- Pour vous authentifier en tant qu'administrateur :
  - Email : test@example.com
  - Mot de passe : password123


*Important*: The default users are for development and should be changed or implemented with a more secure way (such as oauth2) before using for a production use case.

### Contribuer :
Nous encourageons les contributions de tous et apprécions votre aide pour améliorer ce projet ! Si vous souhaitez contribuer, veuillez suivre les directives suivantes :
- Forkez le projet.
- Créez une branche pour votre fonctionnalité ou correction de bug.
- Soumettez une Pull Request avec une description claire des changements.


## Contributeurs Voici les personnes qui ont contribué à ce projet :
 * Ihssane Elmaizi ([GitHub](  https://github.com/Ihssanf )
 * Kaoutar Okayl ([GitHub](https://github.com/votre-lien-github-kaoutar)) 
* Mohamed Lachgar 

