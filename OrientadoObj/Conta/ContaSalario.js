import { Contas } from "./Conta.js"
export class ContaSalario extends Contas {
    constructor(cliente) {
        super(0, cliente, 100)
    }

    sacar(valor) {
        const taxa = 1.001;
        return this._sacar(valor, taxa);
    }
}