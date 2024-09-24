let clientes = [];

// Função para cadastrar um novo cliente
function cadastrarCliente(nome, idade, email) {
  let novoCliente = {
    nome: nome,
    idade: idade,
    email: email,
    exibirInformacoes: function() {
      return `Nome: ${this.nome}, Idade: ${this.idade}, Email: ${
this.email
}`;
    }
  };

  // Adiciona o novo cliente ao array
  clientes.push(novoCliente);
}

// Função para exibir todos os clientes cadastrados
function listarClientes() {
  clientes.forEach(function(cliente) {
    console.log(cliente.exibirInformacoes());
  });
}

// Cadastrando alguns clientes
cadastrarCliente("Ana Silva", 25, "ana.silva@email.com");

cadastrarCliente("João Pereira", 30, "joao.pereira@email.com");

cadastrarCliente("Maria Oliveira", 22, "maria.oliveira@email.com");


// Listando todos os clientes cadastrados
listarClientes(); 
