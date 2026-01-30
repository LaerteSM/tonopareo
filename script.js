// ENVIO PARA WHATSAPP
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const numero = "5511999999999"; // Troque pelo seu número real

  const texto = `Olá! Quero mais informações sobre o passeio a cavalo.%0A%0ANome: ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;

  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
});

// CARROSSEL
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

let index = 0;

function updateCarousel() {
  if (slides.length === 0) return;
  const width = slides[0].clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
}
