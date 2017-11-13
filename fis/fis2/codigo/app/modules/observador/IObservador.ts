export interface IObservador {
    notificar(coleccion: string, informacion: any): Promise<any>;
}
