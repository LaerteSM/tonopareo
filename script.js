document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const numeroWhatsApp = "5511999999999"; // Troque pelo seu número

  const texto = `Olá! Gostaria de informações sobre o passeio a cavalo.%0A%0A*Nome:* ${nome}%0A*Email:* ${email}%0A*Telefone:* ${telefone}%0A*Mensagem:* ${mensagem}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

  window.open(url, "_blank");
});
