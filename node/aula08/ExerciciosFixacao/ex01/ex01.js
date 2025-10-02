const express = require('express');
const app = express();
const port = 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/criaturas/:nomeCriatura', (req, res) =>{
    const {raridade} =  req.query
    if(!raridade){
        res.send(`Buscando informações da criatura ${req.params.nomeCriatura}`);
    }else{
        res.send(`Buscando informações da criatura ${req.params.nomeCriatura}(Raridade: ${req.query.raridade})`)
    }
});

app.listen(port, () =>{
    console.log(`Server Startado na porta ${port}`);
    console.log(`http://localhost:${port}`)
})
