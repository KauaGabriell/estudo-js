require('dotenv').config();

/** Iniciando o Express */
const express = require('express');
const app = express();
const path = require('path');

/** Modelador da base de dados */
const mongoose = require('mongoose');
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('On');
  })
  .catch((error) => console.log(error));

/** Sessões */
const session = require('express-session');
const MongoStore = require('connect-mongo'); // Sessões salvas dentro da base de dados (Por padrão é salvo na memória)
const flash = require('connect-flash'); // Mensagens temporárias (Salvas em sessões)

/** Rotas */
const routes = require('./routes');

/** Segurança */
const helmet = require('helmet');

/** Import de Middlewares */
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
  verifyCsrf,
} = require('./src/middlewares/middlewareGlobal');

/** "Use" Gerais */
app.use(helmet());
app.use(express.urlencoded({ extended: true })); // Permitir envio de forms na aplicação
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public'))); // Arquivos estáticos que podem ser acessados diretamente

/** Configurações de Sessão */
const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt29',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

/** Definindo a engine do EJS */
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

/** Nossos Middlewares */
app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(verifyCsrf);
app.use(checkCsrfError);
app.use(routes);

/** Servidor */
app.on('On', () => {
  app.listen(3001, () => {
    console.log('Acessar http://localhost:3001');
    console.log('Servidor executando na porta 3001');
  });
});
