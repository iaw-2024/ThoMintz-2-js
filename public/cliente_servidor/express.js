const cors = require('cors');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static('public'));

const PORT = 3000;

// Endpoint para obtener todas las series
app.get('/api/series', (req, res) => {
    fs.readFile('series.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        const series = JSON.parse(data);
        res.json(series);
    });
});


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
