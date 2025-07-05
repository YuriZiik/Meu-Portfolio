document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contato-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 

      const nome = form.nome.value;

      // agradecimento
      alert('Obrigado por entrar em contato, ' + nome + '!');

      // limpa o formulario
      form.reset();
    });
  }
});