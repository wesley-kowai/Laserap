

document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", function() {
        const searchInput = document.getElementById("search-input").value;
        const products = document.querySelectorAll(".product-container");

        products.forEach(product => {
            const productCode = product.getAttribute("id").replace("product-", "");
            if (productCode === searchInput) {
                product.style.display = "block"; // Mostra o produto correspondente
            } else {
                product.style.display = "none"; // Oculta os outros produtos
            }
        });

        const notFoundMessage = document.getElementById("not-found");
        if (!document.getElementById("product-" + searchInput)) {
            notFoundMessage.style.display = "block"; // Mostra a mensagem de não encontrado
        } else {
            notFoundMessage.style.display = "none"; // Oculta a mensagem de não encontrado se o produto for encontrado
        }
    });
});


