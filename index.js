// Classe para representar cada item cadastrado
class Item {
    constructor(nome, descricao) {
        this.nome = nome; // Nome do item
        this.descricao = descricao; // Descrição do item
    }
}

// Classe para gerenciar cadastro de itens
class Cadastro {
    constructor() {
        this.itens = []; // Lista de itens cadastrados
    }

    // Adiciona um novo item ao cadastro
    adicionarItem(nome, descricao) {
        const novoItem = new Item(nome, descricao); // Cria um novo item
        this.itens.push(novoItem); // Adiciona o item à lista
    }

    // Edita um item existente pelo índice
    editarItem(index, nome, descricao) {
        if (this.itens[index]) { // Verifica se o item existe
            this.itens[index].nome = nome;
            this.itens[index].descricao = descricao;
        }
    }

    // Remove um item da lista pelo índice
    excluirItem(index) {
        if (this.itens[index]) { // Verifica se o item existe
            this.itens.splice(index, 1); // Remove o item
        }
    }

    // Retorna todos os itens cadastrados
    listarItens() {
        return this.itens;
    }
}

// Instancia a classe Cadastro para gerenciar os dados
const cadastro = new Cadastro();

// Pega os elementos do formulário e da lista
const formCadastro = document.getElementById("formCadastro");
const inputNome = document.getElementById("inputNome");
const inputDescricao = document.getElementById("inputDescricao");
const listaItens = document.getElementById("listaItens");

// Atualiza a lista de itens exibida na página
function atualizarLista() {
    listaItens.innerHTML = ""; // Limpa a lista atual

    cadastro.listarItens().forEach((item, index) => {
        const li = document.createElement("li"); // Cria um item da lista

        li.innerHTML = `
            <span><strong>${item.nome}</strong>: ${item.descricao}</span>
            <div>
                <button class="edit" onclick="editarItem(${index})">Editar</button>
                <button class="delete" onclick="excluirItem(${index})">Excluir</button>
            </div>
        `;

        listaItens.appendChild(li); // Adiciona o item à lista
    });
}

// Adiciona um novo item quando o formulário é enviado
formCadastro.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o reload da página

    const nome = inputNome.value.trim();
    const descricao = inputDescricao.value.trim();

    if (nome && descricao) { // Verifica se os campos não estão vazios
        cadastro.adicionarItem(nome, descricao);
        atualizarLista(); // Atualiza a lista exibida

        // Limpa os campos do formulário
        inputNome.value = "";
        inputDescricao.value = "";
    }
});

// Edita um item da lista
function editarItem(index) {
    const item = cadastro.listarItens()[index];

    // Preenche os campos com os dados do item a ser editado
    inputNome.value = item.nome;
    inputDescricao.value = item.descricao;

    excluirItem(index); // Remove o item original para ser substituído
}

// Exclui um item da lista
function excluirItem(index) {
    cadastro.excluirItem(index);
    atualizarLista(); // Atualiza a lista exibida
}

// Inicializa a lista vazia ao carregar o site
atualizarLista();