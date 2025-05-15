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
