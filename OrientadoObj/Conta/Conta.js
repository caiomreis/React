//Classe abstrata, ela so serve para ser herdada
export class Contas {
    constructor(saldoIncial, cliente, agencia) {
        if (this.constructor == Contas) {
            throw new Error("Nao deveria instanciar um objeto do tipo Cont Diretamente, pois essa e um classe abstrata")
        }

        this._saldo = saldoIncial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
            return this._saldo;
        }
        //Metodo abstrato
    sacar(valor) {
        throw new Error("O metodo Sacar da conta e abstrato")
    }
    _sacar(valor, taxa) {
        const valorsacado = taxa * valor;
        if (this._saldo >= valorsacado) {
            this._saldo -= valorsacado;
            return valorsacado;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}