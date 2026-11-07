# GastoClaro frontend

Scaffolding inicial con React, Vite, Tailwind CSS y estado local/Context API.

## Requisitos

Node.js 20.19+ o 22.12+ y npm.

## Inicio local

1. Copia `.env.example` a `.env` y ajusta `VITE_API_URL` al origen/puerto del backend Express.
2. Instala dependencias: `npm install`.
3. Inicia Vite: `npm run dev`.

El cliente espera `POST /api/auth/login`, `POST /api/auth/logout` y `GET /api/auth/me`; las rutas de movimientos usan `/api/v1/movements`. El token de acceso se conserva solo en memoria y se pierde al recargar la página. La API debe permitir CORS desde el origen local de Vite.

Tailwind CSS 4 se conecta mediante el plugin oficial de Vite y se importa desde `src/styles.css`.
