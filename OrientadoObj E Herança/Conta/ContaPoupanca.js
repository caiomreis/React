import { Contas } from "./Conta.js"

export class ContaPoupanca extends Contas {

    constructor(saldoIncial, cliente, agencia) {
        super(saldoIncial, cliente, agencia);
    }

    sacar(valor) {
        const tava = 1.02;
        return this._sacar(valor, taxa)
    }

}