/**Dependências */
const express = require('express');
const mongoose = require('mongoose');
const rotas = require('./routes');
require('dotenv').config()

const app = express();
const PORT = 3001;

/**Conexão com base de dados */
async function connect(){
    await mongoose.connect(process.env.URI)
}
connect().then(() => {app.emit('On')}).catch(e => console.log(e));


/**Middlewares */
app.use(express.json());
app.use('/livros', rotas);


/** Servidor*/
app.on('On', () =>{
    app.listen(PORT, () =>{
        console.log(`Servidor rodando em: http://localhost:${PORT}`)
    })
})