document.getElementById("open_btn").addEventListener("click", function () {
    document.getElementById('side-bar').classList.toggle('open-sidebar');
});

const sideItems = document.querySelectorAll(".side-item");

sideItems.forEach(item => {
    item.addEventListener("click", function () {
        // Remove 'activate' de todos os itens
        sideItems.forEach(i => i.classList.remove("active"));
        // Adiciona 'activate' ao item clicado
        item.classList.add("active");
    });
});
const conteudos = {
  equipe: `
    <h1>Sobre Nossa Equipe</h1>
    <p>Somos um time apaixonado por esporte e tecnologia!</p>
  `,
  redes: `
    <h1>Redes Sociais</h1>
    <p>Nos siga no Instagram, Facebook e Twitter!</p>
  `,
  contato: `
    <h1>Entrar em Contato</h1>
    <p>Envie um email para contato@muvol.com ou use o formulário abaixo.</p>
  `
};

// Função para trocar conteúdo
function carregarConteudo(nome) {
  document.getElementById('main-content').innerHTML = conteudos[nome];

  // Ativa apenas o item clicado
  document.querySelectorAll('.side-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-content') === nome) {
      item.classList.add('active');
    }
  });
}

// Adiciona evento aos itens do menu
document.querySelectorAll('.side-item').forEach(item => {
  item.addEventListener('click', () => {
    const nomeConteudo = item.getAttribute('data-content');
    carregarConteudo(nomeConteudo);
  });
});

// 👉 Garante que o conteúdo "equipe" apareça ao iniciar a página
window.addEventListener('DOMContentLoaded', () => {
  carregarConteudo('equipe');
});