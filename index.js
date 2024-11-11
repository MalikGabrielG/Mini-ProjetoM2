// Classe Item para armazenar os dados do item
class Item {
    constructor(nome, descricao) {
        this.nome = nome; // Nome do item
        this.descricao = descricao; // Descrição do item
    }
}

// Classe Cadastro para gerenciar os itens cadastrados
class Cadastro {
    constructor() {
        this.itens = []; // Lista que vai armazenar todos os itens cadastrados
    }

    // Adiciona um novo item à lista
    adicionarItem(nome, descricao) {
        const novoItem = new Item(nome, descricao); // Cria um novo item
        this.itens.push(novoItem); // Adiciona o item à lista
    }

    // Edita um item existente
    editarItem(index, nome, descricao) {
        if (this.itens[index]) { // Verifica se o item existe
            this.itens[index].nome = nome; // Altera o nome
            this.itens[index].descricao = descricao; // Altera a descrição
        }
    }

    // Exclui um item da lista
    excluirItem(index) {
        if (this.itens[index]) { // Verifica se o item existe
            this.itens.splice(index, 1); // Remove o
