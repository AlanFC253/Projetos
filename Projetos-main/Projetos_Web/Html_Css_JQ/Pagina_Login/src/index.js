$("#btn").click(function(e) {
    
   let login = $("#login").val();
   let senha = $("#senha").val();

    let rightLogin = "Alan Fernandes";
    let rightSenha = "1234567890";

   if(login==rightLogin && senha == rightSenha){
    alert("Login confirmado com sucesso ");
   }else if (login!=rightLogin && senha == rightSenha) {
    alert("Login invalido");
   }else if (login==rightLogin && senha != rightSenha) {
    alert("Senha invalida");
   }else{
    alert("Login e senha invalidos");
   }
});

$("#getSenha").click(()=>{
    alert("login: Alan Fernandes \nSenha:1234567890 ");
})