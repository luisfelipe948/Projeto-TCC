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