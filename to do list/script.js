// Adiciona um evento ao botão de adicionar tarefa
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput'); // Obtém o campo de entrada
    const taskText = taskInput.value.trim(); // Remove espaços em branco do texto da tarefa
    
    if (taskText) { // Verifica se a tarefa não está vazia
        const task = document.createElement('div'); // Cria um novo elemento 'div' para a tarefa
        task.className = 'task'; // Define a classe para o elemento
        task.draggable = true; // Torna a tarefa arrastável
        task.ondragstart = drag; // Define a função a ser chamada ao iniciar o arrasto
        task.innerHTML = `
            ${taskText} 
            <button class="remove-btn" onclick="removeTask(this)">✖</button>
        `; // Adiciona o texto da tarefa e o botão de remoção
        
        document.querySelector('#todo .task-list').appendChild(task); // Adiciona a tarefa à lista "A Fazer"
        taskInput.value = ''; // Limpa o campo de entrada
    }
}

// Função para iniciar o arrasto
function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.innerHTML); // Armazena os dados da tarefa arrastada
    event.dataTransfer.setData('taskId', event.target.innerHTML); // Armazena a identificação da tarefa
}

// Função para permitir o drop (soltar) de elementos
function allowDrop(event) {
    event.preventDefault(); // Previne o comportamento padrão do navegador
}

// Função para lidar com o drop de uma tarefa
function drop(event) {
    event.preventDefault(); // Previne o comportamento padrão do navegador
    const taskData = event.dataTransfer.getData('text/plain'); // Obtém os dados da tarefa arrastada
    const task = document.createElement('div'); // Cria um novo elemento 'div' para a tarefa
    task.className = 'task'; // Define a classe para o elemento
    task.draggable = true; // Torna a tarefa arrastável
    task.ondragstart = drag; // Define a função a ser chamada ao iniciar o arrasto
    
    // Define a cor da tarefa com base na coluna de destino
    if (event.target.id === 'in-progress') {
        task.style.backgroundColor = '#f39c12'; // Laranja para "Em Progresso"
    } else if (event.target.id === 'review') {
        task.style.backgroundColor = '#8e44ad'; // Roxo para "Em Revisão"
    } else if (event.target.id === 'done') {
        task.style.backgroundColor = '#2ecc71'; // Verde para "Concluídas"
    } else {
        task.style.backgroundColor = 'white'; // Branco para "A Fazer"
    }

    task.innerHTML = `
        ${taskData} 
        <button class="remove-btn" onclick="removeTask(this)">✖</button>
    `; // Adiciona o texto da tarefa e o botão de remoção
    
    event.target.querySelector('.task-list').appendChild(task); // Adiciona a tarefa à lista correspondente
}

// Função para remover uma tarefa
function removeTask(button) {
    button.parentElement.remove(); // Remove o elemento pai do botão, que é a tarefa
}
