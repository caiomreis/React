import { detalheCliente } from '../../api/cliente.js'

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputCPF = document.querySelector('[data-cpf]')
const inputNOME = document.querySelector('[data-nome]')

detalheCliente(id).then(dados => {
    console.log((dados[0]))
    inputCPF.value = dados[0].cpf
    inputNOME.value = dados[0].nome
})



const formEdicao = document.querySelector('[data-form]')

const mensagemSucesso = (menssagem) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `<div class="alert-success" role="alert">
    ${mensagem}
    </div>`

    linha.innerHTML = conteudoLinha

    return linha
}

const mensagemErro = (mensagem) => {
    const linha = document.createElement('tr')

    const conteudoLinha = `<div class="alert-warning" role="alert">
    ${mensagem}
    </div>`

    linha.innerHTML = conteudoLinha

    return linha
}


formEdicao.addEventListener('submit', event => {
    event.preventDefault()

    if (!cpfValidator(inputCPF.value)) {
        alert('CPF INVALIDO')
        return
    }

    editCliente(id, inputCPF.value, inputNOME.value).then(
        resposta => {
            if (resposta.status == 200) {
                formEdicao.appendChild(mensagemErro('Cliente editado com sucesso'))
            } else {
                formEdicao.appendChild(mensagemErro('Deu errado em'))
            }
        }
    )
    setTimeout(function() {
        window.location.href = "clientes.html";
    }, 3000);
})