import { IObservador } from "./IObservador";

export abstract class Notificador {

    protected tipoNotificacion: string;
    private observadores: IObservador[];

    constructor(tipo: string) {
        this.observadores = [];
        this.tipoNotificacion = tipo;
    }

    public Notificador(informacion: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const len = this.observadores.length;
            for (let i = 0; i < len; i++) {
                this.observadores[i].notificar(this.tipoNotificacion, informacion);
            }
        });
    }

    public suscribir(observador: IObservador): void {
        const index = this.observadores.indexOf(observador);
        if (index < 0) {
            this.observadores.push(observador);
        }
    }

    public dessucribir(observador: IObservador): void {
        const index = this.observadores.indexOf(observador);
        if (index >= 0) {
            this.observadores.splice(index, 1);
        }
    }

}
