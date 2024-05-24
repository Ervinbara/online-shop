<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>Cahier des Charges - Système de Gestion de Magasin en Ligne</h1>

<h2>Introduction</h2>

<p>Le système de gestion de magasin en ligne est une application web permettant aux utilisateurs de parcourir les produits disponibles dans un magasin, d'ajouter des produits à leur panier et de passer des commandes. Cette application sera développée en utilisant <strong>Spring Boot</strong> pour le backend et <strong>Angular</strong> pour le frontend.</p>

<h2>Objectifs</h2>

<ul>
  <li>Permettre aux utilisateurs de parcourir et de filtrer les produits disponibles.</li>
  <li>Permettre aux utilisateurs de visualiser les détails des produits et d'ajouter des produits à leur panier.</li>
  <li>Permettre aux utilisateurs de passer des commandes en fournissant leurs informations de livraison et de paiement.</li>
  <li>Permettre aux administrateurs de gérer les produits, les commandes et les utilisateurs.</li>
</ul>

<h2>Fonctionnalités</h2>

<h3>Authentification et Autorisation</h3>

<ul>
  <li>Inscription et connexion des utilisateurs.</li>
  <li>Connexion des administrateurs avec accès à des fonctionnalités supplémentaires.</li>
  <li>Accès aux paniers et historique de commandes des utilisateurs authentifiés.</li>
</ul>

<h3>Gestion des Produits</h3>

<ul>
  <li>Parcours et filtrage des produits par catégorie, prix, etc.</li>
  <li>Visualisation des détails des produits.</li>
  <li>Ajout, modification et suppression des produits par les administrateurs.</li>
</ul>

<h3>Gestion du Panier</h3>

<ul>
  <li>Ajout, modification et suppression des produits dans le panier.</li>
  <li>Visualisation du contenu du panier et du total à payer.</li>
</ul>

<h3>Passer des Commandes</h3>

<ul>
  <li>Passer des commandes avec informations de livraison et de paiement.</li>
  <li>Réception d'une confirmation de commande après l'achat.</li>
</ul>

<h3>Gestion des Utilisateurs</h3>

<ul>
  <li>Consultation de la liste des utilisateurs enregistrés.</li>
  <li>Désactivation ou suppression de comptes utilisateur par les administrateurs.</li>
</ul>

<h2>Architecture de l'Application</h2>

<h3>Backend (Spring Boot)</h3>

<ul>
  <li>Implémentation d'API RESTful pour la gestion des produits, des utilisateurs et des commandes.</li>
  <li>Authentification des utilisateurs avec JWT.</li>
  <li>Utilisation de Spring Data JPA pour l'interaction avec la base de données.</li>
</ul>

<h3>Frontend (Angular)</h3>

<ul>
  <li>Interface utilisateur moderne et réactive.</li>
  <li>Utilisation de composants Angular pour afficher les produits, le panier, etc.</li>
  <li>Intégration avec les API RESTful du backend pour récupérer et afficher les données.</li>
</ul>

<h2>Technologies Utilisées</h2>

<h3>Backend</h3>

<ul>
  <li>Spring Boot</li>
  <li>Spring Data JPA</li>
  <li>Spring Security</li>
  <li>MySQL ou PostgreSQL (base de données relationnelle)</li>
</ul>

<h3>Frontend</h3>

<ul>
  <li>Angular</li>
  <li>Angular Material (pour les composants UI)</li>
  <li>HTML/CSS/TypeScript</li>
</ul>

<h2>Livrables Attendus</h2>

<ul>
  <li>Code source de l'application backend développée avec Spring Boot.</li>
  <li>Code source de l'application frontend développée avec Angular.</li>
  <li>Documentation détaillée des fonctionnalités de l'application et des endpoints de l'API.</li>
  <li>Instructions d'installation et de déploiement de l'application.</li>
</ul>

<h2>Planning de Développement</h2>

<ol>
  <li>Configuration de l'environnement de développement et mise en place du projet.</li>
  <li>Développement de l'API backend pour la gestion des produits, utilisateurs et commandes.</li>
  <li>Développement de l'interface utilisateur frontend avec Angular.</li>
  <li>Intégration de l'API backend avec l'interface utilisateur frontend.</li>
  <li>Tests, débogage et correction des erreurs.</li>
  <li>Documentation et préparation des livrables.</li>
</ol>

<h2>Contraintes Techniques</h2>

<ul>
  <li>Utilisation de Java avec Spring Boot pour le backend.</li>
  <li>Utilisation d'Angular pour le frontend.</li>
  <li>Base de données relationnelle (MySQL ou PostgreSQL).</li>
  <li>Respect des bonnes pratiques de développement et de sécurité.</li>
</ul>

<h2>Références</h2>

<ul>
  <li>Documentation officielle de Spring Boot : <a href="https://spring.io/projects/spring-boot">spring.io/projects/spring-boot</a></li>
  <li>Documentation officielle d'Angular : <a href="https://angular.io/">angular.io</a></li>
  <li>Tutoriels et ressources en ligne sur le développement avec Spring Boot et Angular.</li>
</ul>

</body>
</html>
