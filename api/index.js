import series from "./series.json";
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001; // Utilizamos process.env.PORT para permitir que Vercel asigne un puerto automáticamente


// Configuramos Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Configuramos una ruta para servir el archivo HTML desde la carpeta "cliente_servidor"
app.get("/api/series", (req, res) => res.send(series));

// Configuramos una ruta de ejemplo
app.get("/express", (req, res) => res.render("listado", {series: series}));

// Iniciamos el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Server ready on port http://localhost:${port}`);
});

module.exports = app;