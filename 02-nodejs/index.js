/**
 * 0. Obter um usuário
 * 1. Obter o número de telefone de um usuário a patir de seu id
 * 2. Obter o endereço do usuário pelo id
 */

function obterUsuario(callback){
    setTimeout(function(){
        return callback(':: Erro ao recuperar usuário, obterUsuario()', {
            id: 1,
            nome: 'Larissa',
            dataNascimento: '22/11/1994'
        });
    }, 1000);

}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback({
            telefone: '11245688',
            ddd: '19'
        })
    },2000)

}

function obterEndereco(idUsuario){
     
}

function resolverUsuario(erro, usuario){
    console.log(':: resolverUsuario')
    console.log(':: Usuário:',usuario);

}

obterUsuario(function resolverUsuario(erro, usuario){
    //(null || '' || 0) = false
    if(erro) {
        console.log(':: ERRO EM RECUPERAR USUÁRIO', erro)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error2, telefone){
        if(erro) {
            console.log(':: ERRO EM RECUPERAR TELEFONE', erro)
            return;
        }


    })
})

// const usuario = obterUsuario();
// const telefone = obterTelefone(usuario.id);


// console.log('Usuário:',usuario);
// console.log('Telefone do usuário:',telefone);