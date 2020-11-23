# Guest Book Demo Application

This is a demo application for DigitalOcean's App Platform.

![](https://i.imgur.com/AQV1t4y.png)

This is the frontend repo for creating the Laravel UI. The overall structure of the demo application is:

-   Laravel: Backend API ([Repo](https://github.com/do-community/guest-book-laravel))
-   React: Frontend ([Repo](https://github.com/do-community/guest-book-react))

## Instructions to Deploy

[![Deploy to DO](https://mp-assets1.sfo2.digitaloceanspaces.com/deploy-to-do/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/do-community/guest-book-laravel/tree/master)

You can use the Deploy to DigitalOcean button to deploy this repo directly to App Platform.

### Important Notes on Deployment

-   Make sure you have all your environment variables in place
-   Add a dev database when deploying
-   Build Command: composer install
-   Run Command:

```
    php artisan migrate --force
    heroku-php-apache2 public/
```

-   Add the React repo after deploying the Laravel API: https://github.com/do-community/guest-book-react

## Environment Variables

The following environment variables are required:

| Name          | Value                 |
| ------------- | --------------------- |
| APP_URL       | ${APP_URL}            |
| APP_ENV       | "production"          |
| APP_KEY       | "insert-your-app-key" |
| DB_CONNECTION | "pgsql"               |
| DATABASE_URL  | ${db.DATABASE_URL}    |
| DB_HOST       | ${db.HOSTNAME}        |
| DB_PORT       | ${db.PORT}            |
| DB_DATABASE   | ${db.PASSWORD}        |
| DB_USERNAME   | ${db.USERNAME}        |
| DB_PASSWORD   | ${db.PORT}            |
