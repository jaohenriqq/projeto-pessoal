/*PROGRAMA DECADASTRO DE USUARIOS
PROJETO PESSOAL
O usuário pode cadastrar novos usuários.
O sistema exibe a lista de usuários cadastrados.
O sistema permite pesquisar um usuário pelo nome.*/

const newaccount= []
function nomeUsuario(information){
    return(newaccount.unshift(information))
}




do{let pick = prompt(`a quantidade de  usuários cadastrados são:\n ${newaccount.length}\n\n1-cadastrar novo usuário\n2-pesquise pelo nome o usuário cadastrado\n3-SAIR `)
if(pick =1){
 
 
  let information= {
   nome:prompt('qual o nome do usuário?'),
  email:prompt('qual a email do usuário?'),
  senha:prompt('qual o senha do usuário?')
 }
 

 nomeUsuario(information)

 alert(`${information.nome}\n${information.email}\n${information.senha}`)
}
 

}
  while(pick=3)
