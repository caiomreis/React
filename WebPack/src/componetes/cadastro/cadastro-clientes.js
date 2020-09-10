const fromCadastroCliente = document.querySelector('[data-form]')

fromCadastroCliente.addEventListener("submit", event => {
    event.preventDefault()
    const nome = event.target.querySelector('[data-nome]').value
    const cpf = event.target.querySelector('[data-cpf]').value
    if (cpfValidator(cpf) === true) {
        cadastrarClientes(nome, cpf)
        setTimeout(function() {
            window.location.href = "clientes.html";
        });
    } else { alert('CPF INVALIDO') }
})