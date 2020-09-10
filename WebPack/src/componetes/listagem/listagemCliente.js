import { deleteClentes, listarClientes } from '../../api/cliente.js'

const corpoTabela = document.querySelector("[data-conteudoTabela]")
const removeCliente = (id) => {
    if (confirm("Deseja deletar o cliente?")) {
        deleteClentes(id)
        setTimeout(function() {
            document.location.reload(true);
        }, 3000);
    }
}

const Exibecliente = (cpf, nome, id) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    <a href="./src/componetes/editarClientes/edita-clientes.html?id=${id}"><button type="button" class="btn btn-info m-1">Editar</button></a>`

    linha.innerHTML = conteudoLinha

    return linha
}
listarClientes().then(exibe => {
        exibe.forEach(indice => {
            corpoTabela.appendChild(Exibecliente(indice.cpf, indice.nome, indice.id))
        })

        console.log(corpoTabela)
    }

)