import { IFlujoDBA } from "../persistencia";
import { IComandoCrud } from "./IComandoCrud";

export class ComandoActualizarFlujo implements IComandoCrud {

    private movimientoDBA: IFlujoDBA;
    private nombre: string;
    private valor: number;
    private periodicidad: string;
    private fecha: number;
    private descripcion: string;
    private usuario: string;
    private id: string;
    constructor(movimientoDba: IFlujoDBA) {
        this.movimientoDBA = movimientoDba;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setValor(valor: number): void {
        this.valor = valor;
    }
    public setPeriodicidad(periodicidad: string): void {
        this.periodicidad = periodicidad;
    }
    public setFecha(fecha: number): void {
        this.fecha = fecha;
    }
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }
    public setId(id: string): void {
        this.id = id;
    }
    public ejecutar(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.movimientoDBA.actualizarFlujo(
                this.id,
                this.nombre,
                this.valor,
                this.periodicidad,
                this.fecha,
                this.descripcion,
                this.usuario)
            .then((info) => {
                resolve(info);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

}
