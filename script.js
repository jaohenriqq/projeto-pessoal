/*PROGRAMA DECADASTRO DE USUARIOS
PROJETO PESSOAL
O usuário pode cadastrar novos usuários.
O sistema exibe a lista de usuários cadastrados.
O sistema permite pesquisar um usuário pelo nome.*/

const newaccount= []
function nomeUsuario(information){
    return(newaccount.unshift(information))
}
function searchname(busca) {
return function (user){
  return user.nome==busca
}

} 

do{let pick = prompt(`a quantidade de  usuários cadastrados são:\n ${newaccount.length}\n\n1-cadastrar novo usuário\n2-pesquise pelo nome o usuário cadastrado\n3-mudar senha\n4-SAIR `)
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
    let user = newaccount.find(searchname(busca))
    if(user){
        alert  (`NOME:${user.nome}\nE-MAIL:${user.email}\nSENHA:${user.senha}`)
    }
else{
    alert('usuario nao encontrado!')
}

}
else if (pick==3){
  let busca = prompt('qual o nome da conta do usuário que você está procurando?')
  let user = newaccount.find(searchname(busca))
  if(user){
    let password=prompt('digite a senha antiga:')
  
  if(password === user.senha){
  user.senha=prompt('qual sua nova senha?')
  alert('senha alterada!')
  }
}
  else{alert('senha incorreta!')}
}
}

while(true)



/*
1Excluir Usuário:

Permita ao usuário remover um cadastro do sistema pelo nome.


2Autenticação:

Permita que os usuários façam login usando e-mail e senha, verificando as credenciais.

3Atualizar Email ou Senha:

Adicione opções para que o usuário possa atualizar seu e-mail ou senha separadamente.

4Recuperação de Senha:

Implemente uma funcionalidade para recuperação de senha via e-mail.*/
