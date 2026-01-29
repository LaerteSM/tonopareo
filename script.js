document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    if(!nome || !email){
        alert("Por favor, preencha nome e e-mail.");
        return;
    }

    const numeroTel = "5511999999999"; // Substitua pelo seu número
    const msg = `*Cadastro Passeio a Cavalo*%0ANome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
    window.open(`https://wa.me/${numeroTel}?text=${msg}`, "_blank");
});
