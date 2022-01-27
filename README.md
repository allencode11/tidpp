# EBS Simple Product Management API

<hr/>

## Instalation

```JS
git clone --recurse-submodules [this repo]

npm install

// copy .env.example into .env and change values
npm run start
// open @apiDocs

// For opening UI
cd UI

npm i

npm run start

// Also for UI is present in src an env.js file where it have to be written
// the api host url with port
```

### API DOCS
```
./doc
```

### Migrations
```JS
./migrations

// Run migrations with knex cli
knex migrate:latest
```

### Seeds
```JS
./seeds

// Run seeding with knex cli
knex seed:run
```

### Present models in app
> Product Model in <b>./models</b> folder

#### Author: Andrei Pavalachi <andrei.pavalachi@hotmail.com>