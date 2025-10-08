function alert(req, res){
    res.send(req.body)
}

function criaContato(req, res){
    res.status(200).json({message: 'Contato recebido!'})
}

module.exports = {
    alert: alert,
    criaContato, criaContato
}