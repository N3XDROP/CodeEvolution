# backend
Carpeta contenedora del backend para el aplicativo, con uso de Express y typeScript como modelo de lenguaje de programación.

---

## Pasos creacion carpeta 'backend' e instalación express
1. cd CodeEvolution
2. mkdir backend && cd backend
3. npm init -y <!-- Creacion 'package.json' de express -->
4. npm i express cors morgan dotenv <!-- Instalación dependencias de cors (RunTime) -->
5. npm i -D typescript ts-node-dev @types/node @types/express @types/cors @types/morgan <!-- Instalación dependencias de TypeScript/node -->
6. npx tsc --init <!-- Creación 'tsConfig.ts' recomendación: Reemplazar el contenido del tsConfig por un compatible con Express en node -->

---

## Estructura backend:
```
backend/
├─ src/
│  ├─ routes/
│  │  └─ health.ts
│  ├─ middlewares/
│  │  └─ errorHandler.ts
│  └─ server.ts
├─ .env
├─ package.json
├─ tsconfig.json
└─ (dist/ se genera al compilar)
```
---