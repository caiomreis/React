const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
        .then(resposta => {
            return resposta.json()

        })
        .then(json => {
            return json
        })
}

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch('http://localhost:4000/clientes/cliente', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })
        .then(resp => {
            return resp.body
        })
}

const deleteClentes = (id) => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'DELETE'
    })

}



const detalheCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
            method: 'GET'
        })
        .then(resposta => {
            return resposta.json()

        })

}


const editCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: json
    })
}


export {
    listarClientes,
    deleteClentes,
    detalheCliente,
    editCliente,
    cadastrarClientes
}