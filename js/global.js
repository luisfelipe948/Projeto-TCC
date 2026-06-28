// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura o botão de contato pelo ID (caso exista na página)
    const botaoContato = document.getElementById("btnContato");
    if (botaoContato) {
        botaoContato.addEventListener("click", () => {
            alert("Direcionando para o formulário de contato ou WhatsApp da marcenaria!");
        });
    }

    // Eventos de clique adicionais para redes sociais
    const infoItems = document.querySelectorAll(".info-item");
    infoItems.forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("click", () => {
            const strongElem = item.querySelector("strong");
            if (!strongElem) return;
            const texto = strongElem.textContent;
            if(texto.includes("95432") || texto.includes("91053")) {
                window.open("https://wa.me/5511910538560", "_blank");
            } else if(texto.includes("@") || texto.includes("instagram")) {
                window.open("https://instagram.com/paiefilhomarcenaria", "_blank");
            }
        });
    });

    // Transição de página estilo folhear de livro (Esquerda e Direita)
    const prevBtn = document.getElementById("bookPrevBtn");
    const nextBtn = document.getElementById("bookNextBtn");

    document.body.style.transition = "transform 0.4s ease, opacity 0.4s ease";

    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetUrl = prevBtn.getAttribute("href");
            document.body.style.transform = "translateX(50px)";
            document.body.style.opacity = "0";
            setTimeout(() => { window.location.href = targetUrl; }, 350);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetUrl = nextBtn.getAttribute("href");
            document.body.style.transform = "translateX(-50px)";
            document.body.style.opacity = "0";
            setTimeout(() => { window.location.href = targetUrl; }, 350);
        });
    }
});