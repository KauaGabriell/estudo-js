const express = require('express');

const app = express();
const PORT = 3000;

const rotas = require('./src/routes/userRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**Rotas */
app.use('/', rotas);


app.listen(PORT, () => {
  console.log(`Servidor Rodando em http://localhost:${PORT}`);
});
