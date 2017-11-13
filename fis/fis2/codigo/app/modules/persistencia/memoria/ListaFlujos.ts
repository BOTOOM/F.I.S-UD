import { util } from "../../../common";
import { IFlujoDBA } from "../IFlujoDBA";
import { ListaMemoria } from "./ListaMemoria";

export class ListaFlujos extends ListaMemoria implements IFlujoDBA {
    public guardarFlujo(
        nombre: string,
        valor: number,
        periodicidad: string,
        fecha: number,
        descripcion: string,
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let id = util.Random.randomString(20);
            while (this.verificarExistencia(id) >= 0) {
                id = util.Random.randomString(20);
            }
            const flujo: any = {};
            flujo.nombre = nombre;
            flujo.valor = valor;
            flujo.periodicidad = periodicidad;
            flujo.fecha = fecha;
            flujo.descripcion = descripcion;
            flujo.usuario = usuario;
            this.lista.push(flujo);
            resolve(flujo);
        });
    }
    public eliminarFlujo(
        id: string,
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const index: number = this.verificarExistencia(id);
            if (index >= 0) {
                this.lista.splice(index, 1);
                resolve();
            } else {
                reject();
            }
        });
    }
    public actualizarFlujo(
        id: string,
        nombre: string,
        valor: number,
        periodicidad: string,
        fecha: number,
        descripcion: string,
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const index: number = this.verificarExistencia(id);
            if (index >= 0) {
                const flujo: any = {};
                flujo.nombre = nombre;
                flujo.valor = valor;
                flujo.periodicidad = periodicidad;
                flujo.fecha = fecha;
                flujo.descripcion = descripcion;
                flujo.usuario = usuario;
                flujo.id = id;
                this.lista[index] = flujo;
                resolve(flujo);
            } else {
                reject();
            }
        });
    }
    public consultarFlujo(
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(this.lista.filter((item) => {
                return item.usuario === usuario;
            }));
        });
    }
    public consultarUnicoFlujo(
        id: string,
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const index = this.verificarExistencia(id);
            if (index >= 0) {
                const movimiento: any = this.lista[index];
                if (movimiento.usuario === usuario) {
                    resolve(movimiento);
                } else {
                    reject();
                }
            } else {
                reject();
            }
        });
    }

}
