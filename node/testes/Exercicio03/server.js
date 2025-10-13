const express = require('express');
const rotas = require('./routes');
const middlewarePosts = require('./middleware');

const app = express();
const PORT = 3001;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

/**Middleware */
app.use(middlewarePosts);
app.use('/', rotas);



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})



