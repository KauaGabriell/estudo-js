function autenticar(username, password){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
           if(username == 'admin' && password == '123'){
            resolve({
                token: 'abc123def',
                expiracao: '1h'
            })
           }else{
            reject(new Error('Credenciais Inválidas'));
           }
        }, 2000);
    })
}

async function fazerLogin(username, password){
    try {
        const token = await autenticar(username, password)
        console.log("Login bem sucedido! Token: " + token.token)
    } catch (error) {
        console.log(error);
    }
}

fazerLogin('admin', '123');
fazerLogin('admin', '1234');