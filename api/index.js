import series from "./series.json";
const express = require("express");
import path, {resolve} from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3001; // Utilizamos process.env.PORT para permitir que Vercel asigne un puerto automáticamente


const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views'));

// Configuramos Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.resolve(__dirname, '..' ,'public')));

// Configuramos una ruta para servir el archivo HTML desde la carpeta "cliente_servidor"
app.get("/api/series", (req, res) => res.send(series));

app.get("/express", (req, res) => res.render("lista", {series: series}));

// Iniciamos el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Server ready on port http://localhost:${port}`);
});

module.exports = app;