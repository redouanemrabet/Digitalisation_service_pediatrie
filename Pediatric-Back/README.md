# CHU API

## Getting Started

1. If not already done, [install Docker Compose with Docker Desktop](https://docs.docker.com/compose/install/) (v2.10+)
2. Run `docker compose build --pull --no-cache` to build fresh images
3. Run `docker compose up -d` to run the containers.
4. Open `https://localhost:4430` in your favorite web browser. (For API documentation, open `https://localhost:4430/api/docs`)
5. Generate the public and private keys used for signing JWT tokens:
   1. Enter the php Container: `docker compose exec php sh`
   2. Launch `set -e`
   3. Generate keys `php bin/console lexik:jwt:generate-keypair`
   4. Update Permissions:
      1. `setfacl -R -m u:www-data:rX -m u:"$(whoami)":rwX config/jwt`
      2. `setfacl -dR -m u:www-https://localhost:4430data:rX -m u:"$(whoami)":rwX config/jwt`

PS: to stop the Docker containers, run `docker compose down --remove-orphans`

## Tech & Features

* PHP 8.2
* Symfony 6.2
* Caddy 2.6
* API Platform already installed and integred
* JWT Authentication, Security & User Entity with Password Hash implemented

**Enjoy!**
