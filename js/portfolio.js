document.addEventListener("DOMContentLoaded", () => {
    // BANCO DE DADOS DE PROJETOS
    const arrayProjetos = [
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
        { id: 28, nome: "Cozinha Planejada Integrada", categoria: "planejados" },
        { id: 29, nome: "Home Office Planejado Duplo", categoria: "planejados" },
        { id: 30, nome: "Área de Serviço Otimizada", categoria: "planejados" },
        { id: 31, nome: "Dormitório Infantil Sob Medida", categoria: "planejados" },
        { id: 32, nome: "Churrasqueira Goumert Planejada", categoria: "planejadas" },
        { id: 33, nome: "Poltrona Estofada Designer", categoria: "mobiliario" },
        { id: 34, nome: "Sofá Base de Madeira", categoria: "mobiliario" },
        { id: 35, nome: "Banqueta Alta Cozinha", categoria: "mobiliario" }
    ];

    let categoriaAtual = "todos";
    let paginaAtual = 1;
    const itensPorPagina = 24; 
    let termoPesquisa = "";

    const grid = document.getElementById("galleryGrid");
    const paginationContainer = document.getElementById("paginationContainer");
    const searchInput = document.getElementById("portfolioSearch");

    function atualizarContadoresFiltros() {
        if (!document.getElementById("count-todos")) return;
        document.getElementById("count-todos").textContent = arrayProjetos.length;
        document.getElementById("count-madeira").textContent = arrayProjetos.filter(p => p.categoria === "madeira").length;
        document.getElementById("count-mdf").textContent = arrayProjetos.filter(p => p.categoria === "mdf").length;
        document.getElementById("count-planejados").textContent = arrayProjetos.filter(p => p.categoria === "planejados").length;
        document.getElementById("count-mobiliario").textContent = arrayProjetos.filter(p => p.categoria === "mobiliario").length;
    }

    function renderizarPortfolio() {
        if (!grid) return;

        const projetosFiltrados = arrayProjetos.filter(projeto => {
            const matchesCategory = (categoriaAtual === "todos" || projeto.categoria === categoriaAtual);
            const matchesSearch = projeto.nome.toLowerCase().includes(termoPesquisa.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        const totalItens = projetosFiltrados.length;
        const totalPaginas = Math.ceil(totalItens / itensPorPagina);

        if (paginaAtual > totalPaginas) paginaAtual = 1;
        if (totalPaginas === 0) paginaAtual = 0;

        const indiceInicial = (paginaAtual - 1) * itensPorPagina;
        const indiceFinal = indiceInicial + itensPorPagina;
        const projetosDaPagina = projetosFiltrados.slice(indiceInicial, indiceFinal);

        grid.innerHTML = "";

        projetosDaPagina.forEach(projeto => {
            const card = document.createElement("div");
            card.classList.add("gallery-card");
            card.title = projeto.nome;
            
            if (projeto.imagem) {
                card.innerHTML = `
                    <img src="${projeto.imagem}" alt="${projeto.nome}" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
                    <span class="card-label" style="position:absolute; z-index:3; bottom:10px; background:#fff; padding:2px 6px; font-size:11px; font-weight:bold; border:1px solid #2b2b2b;">
                        ${projeto.nome}
                    </span>
                    <p style="display:none;">${projeto.descricao || ''}</p>
                `;
            } else {
                card.innerHTML = `
                    <div class="gallery-x1"></div>
                    <div class="gallery-x2"></div>
                    <span class="card-label" style="position:absolute; z-index:3; bottom:10px; background:#fff; padding:2px 6px; font-size:11px; font-weight:bold; border:1px solid #2b2b2b;">
                        ${projeto.nome}
                    </span>
                `;
            }
            grid.appendChild(card);
        });

        paginationContainer.innerHTML = "";
        if (totalPaginas > 1) {
            for (let i = 1; i <= totalPaginas; i++) {
                const btnPage = document.createElement("button");
                btnPage.classList.add("page-num");
                if (i === paginaAtual) btnPage.classList.add("active");
                btnPage.textContent = i;

                btnPage.addEventListener("click", () => {
                    paginaAtual = i;
                    renderizarPortfolio();
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                });

                paginationContainer.appendChild(btnPage);
            }
        }
    }

    const filterBtnGroup = document.getElementById("filterBtnGroup");
    if (filterBtnGroup) {
        const botoes = filterBtnGroup.querySelectorAll(".btn-filter");
        botoes.forEach(botao => {
            botao.addEventListener("click", () => {
                botoes.forEach(b => b.classList.remove("active"));
                botao.classList.add("active");
                categoriaAtual = botao.getAttribute("data-category");
                paginaAtual = 1;
                renderizarPortfolio();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            termoPesquisa = e.target.value;
            paginaAtual = 1;
            renderizarPortfolio();
        });
    }

    atualizarContadoresFiltros();
    renderizarPortfolio();
});