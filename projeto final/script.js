document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    document.getElementById('respostaMensagem').innerText = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
    this.reset();
});
