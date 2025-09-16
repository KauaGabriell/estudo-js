function criarUsuario(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                id: 101, 
                username: 'novo_usuario'
            })
        }, 2000);
    })
}

 function buscarPerfil(userId) {
   return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve({
            userId: 101, 
            bio: 'Sou um novo usuário.', 
            status: 'ativo' 
        })
    }, 1500);
   })
}

async function cadastrarUsuarioCompleto(){
    try {
        const user = await criarUsuario();
        const userPronto = await buscarPerfil(user.id);
        console.log(user, userPronto);
    } catch (error) {
        console.error(error);
    }
}

cadastrarUsuarioCompleto();