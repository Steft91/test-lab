const express = require('express');
const app = express();
const PORT = process.env.PORT;

// enpoint que responde un mensaje 
app.get('/', (_req, res) => {
  res.send('Integracion continua funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    });