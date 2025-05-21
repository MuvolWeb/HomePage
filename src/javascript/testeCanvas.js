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

 observarElementosAnimaveis();

