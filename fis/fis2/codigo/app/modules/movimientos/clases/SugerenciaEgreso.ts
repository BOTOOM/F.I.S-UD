import { Flujo} from "./Flujo";

export class SugerenciaEgreso extends Flujo {
    public setValor(valor: number): void {
        let valorAsignar: number = valor;
        if (valor > 0) {
            valorAsignar = valor * -1;
        }
        this.valor = valorAsignar;
    }
}
