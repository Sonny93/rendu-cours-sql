# Rendu Sonny LALLIER, Tanguy MOREL, Thomas PEREZ

## Installation du projet:

### Installer les dépendances

```console
make install
ou
npm install
```

### Formater le code

```console
make format
ou
npm run format
```

### Lancer les containers docker

```console
make docker
ou
docker compose up -d
```

### Lancer le projet en mode dev

```console
make dev
ou
npm run dev
```

## Migration de la base de données et insertion des données

```console
node ace migration:run && node ace db:seed
```
