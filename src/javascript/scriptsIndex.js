document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById('side-bar').classList.toggle('open-sidebar');
});

const sideItems = document.querySelectorAll(".side-item");

// Define o IntersectionObserver global
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('entrando');
    } else {
      // Remove para permitir reativar animação ao sair e entrar
      entrada.target.classList.remove('entrando');
    }
  });
}, {
  threshold: 0.3
});

// Função que observa elementos animáveis recém adicionados
function observarElementosAnimaveis() {
  const elementos = document.querySelectorAll('.animavel');
  elementos.forEach(el => observador.observe(el));
}

sideItems.forEach(item => {
  item.addEventListener("click", function () {
    // Remove 'active' de todos os itens
    sideItems.forEach(i => i.classList.remove("active"));
    // Adiciona 'active' ao item clicado
    item.classList.add("active");

    // Carrega o conteúdo relacionado ao item clicado
    const nomeConteudo = item.getAttribute('data-content');
    carregarConteudo(nomeConteudo);
  });
});

const conteudos = {
  equipe: `
    <div class="title">
      <h1>Sobre Nossa Equipe</h1>
      <p>Somos um time apaixonado por esporte e tecnologia!</p>
    </div>

    <div class="container">
      <div class="caixaDeTexto">
        <div id="nome-texto" class="animavel">
          <h1>Muttsen</h1>
        </div>
        <div id="texto-parteUm" class="animavel">
          <p>garra e energia na formação de atletas</p>
        </div>
        <div id="texto-parteDois" class="animavel">
          <ul>
            <li>clube</li>
            <li>esportivo</li>
            <li>especializado</li>
            <li>na formação de atletas</li>
          </ul>
        </div>
      </div>
      <img src="src/image/site muvol.png" class="img_apresentacao" title="image">
    </div>
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

function carregarConteudo(nome) {
  const main = document.getElementById('main-content');
  if (!main) {
    console.error('Elemento #main-content não encontrado');
    return;
  }
  main.innerHTML = conteudos[nome];

  // Atualiza o item ativo do menu
  sideItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-content') === nome);
  });

  // Observa os novos elementos animáveis para disparar a animação
  observarElementosAnimaveis();
}

// Ao carregar a página, carrega o conteúdo padrão e inicia a observação
window.addEventListener('DOMContentLoaded', () => {
  carregarConteudo('equipe');
});
