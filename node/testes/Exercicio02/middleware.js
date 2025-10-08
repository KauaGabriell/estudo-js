function middlewareLogs(req, res, next){
    console.log(
        `
            ${new Date().toISOString()} -  Requisição recebida: ${req.method} - URL: ${req.url}
        `
    )
    next();
}

module.exports = {
    middlewareLogs: middlewareLogs
}
