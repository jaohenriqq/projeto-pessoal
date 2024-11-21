/*PROGRAMA DECADASTRO DE USUARIOS
PROJETO PESSOAL
O usuário pode cadastrar novos usuários.
O sistema exibe a lista de usuários cadastrados.
O sistema permite pesquisar um usuário pelo nome.*/

const newaccount= []
function nomeUsuario(information){
    return(newaccount.unshift(information))
}




do{let pick = prompt(`a quantidade de  usuários cadastrados são:\n ${newaccount.length}\n\n1-cadastrar novo usuário\n2-pesquise pelo nome o usuário cadastrado\n3-editar usuário\n4-SAIR `)
if(pick ==1){
 
 
  let information= {
   nome:prompt('qual o nome do usuário?'),
  email:prompt('qual a email do usuário?'),
  senha:prompt('qual o senha do usuário?')
 }
 

nomeUsuario(information)


}
 
else if  (pick==2){

    let busca = prompt('qual o nome da conta que você procura?')
     let user =  newaccount.find(newaccount=>newaccount.nome==busca)
if(user){
  alert  (`${user.nome}\n${user.email}\n${user.senha}`)

}
    

}
}
while(pick=4)

