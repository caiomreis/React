import { Cliente } from "./Cliente.js"
import { Gerente } from './Funcionarios/Gerente.js'
import { Diretor } from './Funcionarios/Diretor.js'
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"


const diretor = new Diretor("Caio", 10000, 12344560)
diretor.cadastrarSenha("1234567")
const gerente = new Gerente('Rodrigo', 5000, 1232323213)
gerente.cadastrarSenha("123")

const cliente = new Cliente("Claudia", 123213213213, "434")


const DiretorEstaLogado = SistemaAutenticacao.login(diretor, "1234567")
const GerenteEstaLogado = SistemaAutenticacao.login(gerente, "123")

const ClienteEstaLogado = SistemaAutenticacao.login(cliente, "434")

console.log(ClienteEstaLogado, DiretorEstaLogado, GerenteEstaLogado)