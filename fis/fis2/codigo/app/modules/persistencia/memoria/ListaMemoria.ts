export abstract class ListaMemoria {
    protected lista: any[];

    constructor() {
        this.lista = [];
    }

    protected verificarExistencia(id: string): number {
        let index: number = -1;
        index = this.lista.findIndex((item) => {
            return item.id === id;
        });
        return index;
    }

}
