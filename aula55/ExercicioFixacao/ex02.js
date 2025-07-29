function buscarUsuarioPorID(id, callback){ 
    setTimeout(function(){
        const usuario = {
            id: 11,
            name: 'Peixe',
        }
        if(id === usuario.id && callback){
            callback(usuario);
        }else{
            console.log('Não foi possível encontrar esse usuário!!!');
        };
    }, 2000);
}

function mostrarNoConsole(usuario){
    console.log(usuario.name);
}

buscarUsuarioPorID(18, mostrarNoConsole);