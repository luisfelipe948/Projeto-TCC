document.addEventListener("DOMContentLoaded", () => {
    // Controle do carrossel da página Sobre Nós
    const container = document.getElementById("carouselContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (container && prevBtn && nextBtn) {
        let cards = Array.from(container.querySelectorAll(".carousel-card"));
        
        function updateCarouselStyles() {
            cards.forEach((card, index) => {
                card.classList.remove("center-card", "side-card");
                if (index === 1) {
                    card.classList.add("center-card");
                } else {
                    card.classList.add("side-card");
                }
            });
        }

        nextBtn.addEventListener("click", () => {
            const firstCard = cards.shift();
            cards.push(firstCard);
            container.appendChild(firstCard);
            updateCarouselStyles();
        });

        prevBtn.addEventListener("click", () => {
            const lastCard = cards.pop();
            cards.unshift(lastCard);
            container.insertBefore(lastCard, container.firstChild);
            updateCarouselStyles();
        });
    }
});