
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();
    const msgStatus = document.getElementById('msg-status');
  
    if (!nome || !email || !mensagem) {
      msgStatus.textContent = 'Por favor, preencha todos os campos.';
      return;
    }
  
    msgStatus.textContent = 'Mensagem enviada com sucesso! (simulado)';
    this.reset();
});
  

fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('projetos-container');
      data.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <a href="#" target="_blank">Ver Projeto</a>
        `;
        div.style.marginBottom = '1.5rem';
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error('Erro ao carregar projetos:', err);
});
  