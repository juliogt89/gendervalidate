const express = require('express');
const app = express();
const nombres = require('./nombres.json');
const PORT = process.env.PORT || 3000;
app.get('/nombres', (req, res) => {
  res.json(nombres);
});
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
