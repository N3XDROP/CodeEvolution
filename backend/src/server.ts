import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import healthRouter from "./routes/health";
import errorHandler from "./middlewares/errorHandler";

dotenv.config(); // Cargar variables de entorno desde .env

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// ---------- Middlewares globales ----------
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ---------- Rutas ----------
app.use("/api/health", healthRouter);

// Ruta raíz
app.get("/", (_req, res) => {
  res.send("🚀 Bienvenido a CodeEvolution API");
});

// Captura de favicon para evitar error 404 en consola
app.get("/favicon.ico", (_req, res) => res.status(204).end());

// ---------- Manejador de errores ----------
app.use(errorHandler);

// ---------- Inicio del servidor ----------
app.listen(PORT, () => {
  console.log(`API ready → http://localhost:${PORT}`);
});
