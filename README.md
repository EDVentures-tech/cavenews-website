# CAVEnews PROductions Website

Next.js 14 (App Router, TS) + Tailwind + Framer Motion + Docker.

## Local
npm install
npm run dev

## Docker
docker compose up -d --build

## NGINX Proxy Manager
Proxy Host: cave-news.de -> http://<docker-host>:3000
Websockets an, SSL (Let’s Encrypt). Optional: cavenews.de als 301-Redirect oder Alias.
