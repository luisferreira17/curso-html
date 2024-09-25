document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevê o envio padrão do formulário
    
    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const emails = document.getElementById('emails').value;

    // Cria um novo elemento de lista
    const aluno = document.createElement('div');
    aluno.className = 'aluno'; // Adiciona uma classe para estilização
    aluno.innerHTML = `<strong>Nome:</strong> ${nome} | <strong>Idade:</strong> ${idade} | <strong>Curso:</strong> ${curso} | <strong>Email:</strong> ${emails}`;
    
    // Adiciona o novo aluno à lista
    document.getElementById('alunosList').appendChild(aluno);
    
    // Limpa os campos do formulário
    this.reset();
});

// Função para imprimir a lista de alunos na mesma página
document.getElementById('printButton').addEventListener('click', function() {
    const alunosList = document.getElementById('alunosList').innerHTML; // Obtém o conteúdo da lista

    // Cria um novo elemento de impressão
    const printDiv = document.createElement('div');
    printDiv.innerHTML = `<h1>Lista de Alunos</h1>${alunosList}`; // Adiciona o conteúdo da lista
    printDiv.className = 'print-area'; // Classe para estilização da área de impressão

    // Adiciona o novo elemento ao corpo do documento
    document.body.appendChild(printDiv);
    

    // Remove a área de impressão após a impressão
    document.body.removeChild(printDiv);
    document.head.removeChild(style);
});
