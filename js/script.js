// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura o botão de contato pelo ID
    const botaoContato = document.getElementById("btnContato");

    // Adiciona um evento de clique
    botaoContato.addEventListener("click", () => {
        // Exemplo: Redirecionar para o WhatsApp ou abrir uma janela
        alert("Direcionando para o formulário de contato ou WhatsApp da marcenaria!");
        
        // Se quiser abrir um link externo direto, descomente a linha abaixo:
        // window.open("https://wa.me/seuNumeroDeTelefone", "_blank");
    });

});

document.addEventListener("DOMContentLoaded", () => {
    
    // Controle do carrossel da página Sobre Nós
    const container = document.getElementById("carouselContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (container && prevBtn && nextBtn) {
        // Gera um array móvel com os cards de imagem
        let cards = Array.from(container.querySelectorAll(".carousel-card"));
        
        // Função responsável por distribuir os pesos visuais
        function updateCarouselStyles() {
            cards.forEach((card, index) => {
                // Remove as classes antigas para remapeá-las
                card.classList.remove("center-card", "side-card");
                
                // O item de índice 1 sempre será o centro visual no layout de 3 itens
                if (index === 1) {
                    card.classList.add("center-card");
                } else {
                    card.classList.add("side-card");
                }
            });
        }

        // Evento: Passar para a Próxima Imagem
        nextBtn.addEventListener("click", () => {
            // Pega o primeiro card, remove da frente e coloca no final da fila
            const firstCard = cards.shift();
            cards.push(firstCard);
            
            // Move fisicamente o elemento dentro do HTML
            container.appendChild(firstCard);
            
            // Atualiza o foco das imagens
            updateCarouselStyles();
        });

        // Evento: Voltar para a Imagem Anterior
        prevBtn.addEventListener("click", () => {
            // Pega o último card, remove do fim e coloca na primeira posição
            const lastCard = cards.pop();
            cards.unshift(lastCard);
            
            // Insere o elemento na primeira posição interna do container HTML
            container.insertBefore(lastCard, container.firstChild);
            
            // Atualiza o foco das imagens
            updateCarouselStyles();
        });
    }

});

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================
    // SIMULAÇÃO DO BANCO DE DADOS DE PROJETOS (35 Itens para Teste)
    // ==========================================================
    const arrayProjetos = [
        // 12 de Madeira Maciça
        { id: 1, nome: "Mesa de Jantar Rustica", categoria: "madeira" },
        { id: 2, nome: "Aparador de Jacarandá", categoria: "madeira" },
        { id: 3, nome: "Balcão de Demolição", categoria: "madeira" },
        { id: 4, nome: "Cadeira Ergonômica Madeira", categoria: "madeira" },
        { id: 5, nome: "Buda Esculpido em Tronco", categoria: "madeira" },
        { id: 6, nome: "Porta Pivotante Luxo", categoria: "madeira" },
        { id: 7, nome: "Banco de Jardim Ipê", categoria: "madeira" },
        { id: 8, nome: "Mesa de Centro Bold", categoria: "madeira" },
        { id: 9, nome: "Prateleira Suspensa Maciça", categoria: "madeira" },
        { id: 10, nome: "Pergolado de Eucalipto", categoria: "madeira" },
        { id: 11, nome: "Painel Ripado Nobre", categoria: "madeira" },
        { id: 12, nome: "Escultura de Parede", categoria: "madeira" },

        // 15 de MDF
        { id: 13, nome: "Armário de Cozinha Grafite", categoria: "mdf" },
        { id: 14, nome: "Painel de TV Off-White", categoria: "mdf" },
        { id: 15, nome: "Guarda-Roupa Embutido Casal", categoria: "mdf" },
        { id: 16, nome: "Gabinete de Banheiro Clean", categoria: "mdf" },
        { id: 17, nome: "Estante de Livros Minimalista", categoria: "mdf" },
        { id: 18, nome: "Criado Mudo Suspenso", categoria: "mdf" },
        { id: 19, nome: "Mesa de Cabeceira MDF", categoria: "mdf" },
        { id: 20, nome: "Escrivaninha de Quarto", categoria: "mdf" },
        { id: 21, nome: "Nicho Decorativo Quadrado", categoria: "mdf" },
        { id: 22, nome: "Balcão de Recepção Comercial", categoria: "mdf" },
        { id: 23, nome: "Paneleiro Torre Quente", categoria: "mdf" },
        { id: 24, nome: "Gaveteiro com Rodízio", categoria: "mdf" },
        { id: 25, nome: "Buffet Amadeirado Sala", categoria: "mdf" },
        { id: 26, nome: "Sapateira Espelhada", categoria: "mdf" },
        { id: 27, nome: "Closet Aberto Modulado", categoria: "mdf" },

        // 5 de Planejados
        { id: 28, nome: "Cozinha Planejada Integrada", categoria: "planejados" },
        { id: 29, nome: "Home Office Planejado Duplo", categoria: "planejados" },
        { id: 30, nome: "Área de Serviço Otimizada", categoria: "planejados" },
        { id: 31, nome: "Dormitório Infantil Sob Medida", categoria: "planejados" },
        { id: 32, nome: "Churrasqueira Goumert Planejada", categoria: "planejados" },

        // 3 de Mobiliário
        { id: 33, nome: "Poltrona Estofada Designer", categoria: "mobiliario" },
        { id: 34, nome: "Sofá Base de Madeira", categoria: "mobiliario" },
        { id: 35, nome: "Banqueta Alta Cozinha", categoria: "mobiliario" }
    ];});

 document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================
    // SIMULAÇÃO DO BANCO DE DADOS DE PROJETOS (35 Itens para Teste)
    // ==========================================================
    const arrayProjetos = [
        // 12 de Madeira Maciça
        { id: 1, nome: "Mesa de Jantar Rustica", categoria: "madeira" },
        { id: 2, nome: "Aparador de Jacarandá", categoria: "madeira" },
        { id: 3, nome: "Balcão de Demolição", categoria: "madeira" },
        { id: 4, nome: "Cadeira Ergonômica Madeira", categoria: "madeira" },
        { id: 5, nome: "Buda Esculpido em Tronco", categoria: "madeira" },
        { id: 6, nome: "Porta Pivotante Luxo", categoria: "madeira" },
        { id: 7, nome: "Banco de Jardim Ipê", categoria: "madeira" },
        { id: 8, nome: "Mesa de Centro Bold", categoria: "madeira" },
        { id: 9, nome: "Prateleira Suspensa Maciça", categoria: "madeira" },
        { id: 10, nome: "Pergolado de Eucalipto", categoria: "madeira" },
        { id: 11, nome: "Painel Ripado Nobre", categoria: "madeira" },
        { id: 12, nome: "Escultura de Parede", categoria: "madeira" },

        // 15 de MDF
        { id: 13, nome: "Armário de Cozinha Grafite", categoria: "mdf" },
        { id: 14, nome: "Painel de TV Off-White", categoria: "mdf" },
        { id: 15, nome: "Guarda-Roupa Embutido Casal", categoria: "mdf" },
        { id: 16, nome: "Gabinete de Banheiro Clean", categoria: "mdf" },
        { id: 17, nome: "Estante de Livros Minimalista", categoria: "mdf" },
        { id: 18, nome: "Criado Mudo Suspenso", categoria: "mdf" },
        { id: 19, nome: "Mesa de Cabeceira MDF", categoria: "mdf" },
        { id: 20, nome: "Escrivaninha de Quarto", categoria: "mdf" },
        { id: 21, nome: "Nicho Decorativo Quadrado", categoria: "mdf" },
        { id: 22, nome: "Balcão de Recepção Comercial", categoria: "mdf" },
        { id: 23, nome: "Paneleiro Torre Quente", categoria: "mdf" },
        { id: 24, nome: "Gaveteiro com Rodízio", categoria: "mdf" },
        { id: 25, nome: "Buffet Amadeirado Sala", categoria: "mdf" },
        { id: 26, nome: "Sapateira Espelhada", categoria: "mdf" },
        { id: 27, nome: "Closet Aberto Modulado", categoria: "mdf" },

        // 5 de Planejados
        { id: 28, nome: "Cozinha Planejada Integrada", categoria: "planejados" },
        { id: 29, nome: "Home Office Planejado Duplo", categoria: "planejados" },
        { id: 30, nome: "Área de Serviço Otimizada", categoria: "planejados" },
        { id: 31, nome: "Dormitório Infantil Sob Medida", categoria: "planejados" },
        { id: 32, nome: "Churrasqueira Goumert Planejada", categoria: "planejados" },

        // 3 de Mobiliário
        { id: 33, nome: "Poltrona Estofada Designer", categoria: "mobiliario" },
        { id: 34, nome: "Sofá Base de Madeira", categoria: "mobiliario" },
        { id: 35, nome: "Banqueta Alta Cozinha", categoria: "mobiliario" }
    ];

    // Configurações de Estado do Sistema
    let categoriaAtual = "todos";
    let paginaAtual = 1;
    const itensPorPagina = 24; // O limite estipulado por você!
    let termoPesquisa = "";

    // Elementos da Tela
    const grid = document.getElementById("galleryGrid");
    const paginationContainer = document.getElementById("paginationContainer");
    const searchInput = document.getElementById("portfolioSearch");

    // ==========================================================
    // 1. ATUALIZADOR DE QUANTIDADES NOS FILTROS (DINAÂMICO)
    // ==========================================================
    function atualizarContadoresFiltros() {
        document.getElementById("count-todos").textContent = arrayProjetos.length;
        document.getElementById("count-madeira").textContent = arrayProjetos.filter(p => p.categoria === "madeira").length;
        document.getElementById("count-mdf").textContent = arrayProjetos.filter(p => p.categoria === "mdf").length;
        document.getElementById("count-planejados").textContent = arrayProjetos.filter(p => p.categoria === "planejados").length;
        document.getElementById("count-mobiliario").textContent = arrayProjetos.filter(p => p.categoria === "mobiliario").length;
    }

    // ==========================================================
    // 2. RENDERIZADOR DE CARDS E PAGINAÇÃO
    // ==========================================================
    function renderizarPortfolio() {
        if (!grid) return; // Segurança caso não esteja na tela certa

        // Filtragem Combinada (Categoria + Texto digitado na Busca)
        const projetosFiltrados = arrayProjetos.filter(projeto => {
            const matchesCategory = (categoriaAtual === "todos" || projeto.categoria === categoriaAtual);
            const matchesSearch = projeto.nome.toLowerCase().includes(termoPesquisa.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Cálculo Matemático da Paginação
        const totalItens = projetosFiltrados.length;
        const totalPaginas = Math.ceil(totalItens / itensPorPagina);

        // Ajuste de segurança caso os filtros eliminem a página atual
        if (paginaAtual > totalPaginas) paginaAtual = 1;
        if (totalPaginas === 0) paginaAtual = 0;

        // Separação de fatias (Ex: Página 1 pega do item 0 ao 23. Página 2 pega do 24 ao 47...)
        const indiceInicial = (paginaAtual - 1) * itensPorPagina;
        const indiceFinal = indiceInicial + itensPorPagina;
        const projetosDaPagina = projetosFiltrados.slice(indiceInicial, indiceFinal);

        // Limpa o grid antigo
        grid.innerHTML = "";

        // Desenha os novos cards calculados na tela com a marcação em X técnica
        projetosDaPagina.forEach(projeto => {
            const card = document.createElement("div");
            card.classList.add("gallery-card");
            card.title = projeto.nome; // Exibe o nome ao passar o mouse por cima
            
            card.innerHTML = `
                <div class="gallery-x1"></div>
                <div class="gallery-x2"></div>
                <span class="card-label" style="position:absolute; z-index:3; bottom:10px; background:#fff; padding:2px 6px; font-size:11px; font-weight:bold; border:1px solid #2b2b2b;">
                    ${projeto.nome}
                </span>
            `;
            grid.appendChild(card);
        });

        // Renderiza os círculos de paginação apenas se houver mais de 1 página necessária
        paginationContainer.innerHTML = "";
        if (totalPaginas > 1) {
            for (let i = 1; i <= totalPaginas; i++) {
                const btnPage = document.createElement("button");
                btnPage.classList.add("page-num");
                if (i === paginaAtual) btnPage.classList.add("active");
                btnPage.textContent = i;

                // Evento de clique para trocar de página
                btnPage.addEventListener("click", () => {
                    paginaAtual = i;
                    renderizarPortfolio();
                    window.scrollTo({ top: 400, behavior: 'smooth' }); // Sobe a tela suavemente para o topo da galeria
                });

                paginationContainer.appendChild(btnPage);
            }
        }
    }

    // ==========================================================
    // 3. CAPTURA DOS EVENTOS DE CLIQUE NOS FILTROS OCRA
    // ==========================================================
    const filterBtnGroup = document.getElementById("filterBtnGroup");
    if (filterBtnGroup) {
        const botoes = filterBtnGroup.querySelectorAll(".btn-filter");
        
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                // Alterna classe active visual
                botoes.forEach(b => b.classList.remove("active"));
                botao.classList.add("active");

                // Define filtros e reinicia para a página 1
                categoriaAtual = botao.getAttribute("data-category");
                paginaAtual = 1;
                renderizarPortfolio();
            });
        });
    }

    // ==========================================================
    // 4. MONITORAMENTO DO INPUT DE PESQUISA
    // ==========================================================
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            termoPesquisa = e.target.value;
            paginaAtual = 1; // Reinicia paginação ao pesquisar
            renderizarPortfolio();
        });
    }

    // Inicialização automática das funções ao abrir a página
    atualizarContadoresFiltros();
    renderizarPortfolio();

});

// Adicione dentro do escopo do DOMContentLoaded já existente
const infoItems = document.querySelectorAll(".info-item");
infoItems.forEach(item => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
        const texto = item.querySelector("strong").textContent;
        if(texto.includes("95432")) {
            window.open("https://wa.me/5511954321480", "_blank");
        } else if(texto.includes("@")) {
            window.open("https://instagram.com/paiefilhomarcenaria", "_blank");
        }
    });
});