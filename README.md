# Projet cours SQL et API REST

> Rendu Sonny LALLIER, Tanguy MOREL et Thomas PEREZ

Liens utiles :

- Le projet : http://localhost:3333
- Document interactive : http://localhost:3333/swagger

## Installation du projet:

### Installer les dépendances

```console
make install
```

### Lancer les containers docker

```console
make docker
```

### Créer la base de donnée

```console
make create_db
```

### Migration de la base de données et insertion des données

```console
make migration
```

**Attention** : Il faut importer le fichier triggers.sql (présent à la racine du projet) dans la base de données pour ajouter les triggers et les procédures à la base de données. Ensuite il suffit de lancer la commande suivante:

```console
make seed-db
```

### Lancer le projet en mode dev

```console
make dev
```

### Formater le code

```console
make format
```
