
[![Build Status](https://travis-ci.org/thomas-schaller/todo-serveur.svg?branch=master)](https://travis-ci.org/thomas-schaller/todo-serveur)
# todo-serveur

la partie serveur d'une todo list en webservice REST.
Ce projet me sert d'entrainement pour l'utilisation du framework Spring.

## Rôle des dépendances
* Spring Data JPA est utilisé pour la couche de persistance en liaison avec une bdd.
JPA est utilisée par des annotations.
 Cette Base de données est pour l'instant une base en mémoire pour faciliter le développement et les tests.
* Spring Boot est utilisé pour construire le projet en association avec maven.
* Les Webservices sont définis à l'aide des annotations spring.

## Fonctionnalités

Il faut avoir un compte et s'authentifier avant de pouvoir gérer ses tâches.

Une tâche peut avoir des sous-tâches, elle est alors finie uniquement
si les sous-tâches sont finies. Elle appartien à un utilisateur.

Une tâche a un titre, une description plus détaillée,
une priorité, un contexte, une date de fin, une date de début.
