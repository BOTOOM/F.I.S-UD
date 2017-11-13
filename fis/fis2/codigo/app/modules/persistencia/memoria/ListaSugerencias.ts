import { util } from "../../../common";
import { ISugerenciaDBA } from "../ISugerenciaDBA";
import { ListaMemoria } from "./ListaMemoria";

export class ListaSugerencias extends ListaMemoria implements ISugerenciaDBA {
    public guardarSugerencia(
        nombre: string,
        valor: number,
        fecha: number,
        periodicidad: string,
        descripcion: string,
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let id = util.Random.randomString(20);
            while (this.verificarExistencia(id) >= 0) {
                id = util.Random.randomString(20);
            }
            const sugerencia: any = {};
            sugerencia.nombre = nombre;
            sugerencia.valor = valor;
            sugerencia.fecha = fecha;
            sugerencia.periodicidad = periodicidad;
            sugerencia.descripcion = descripcion;
            sugerencia.usuario = usuario;
            this.lista.push(sugerencia);
            resolve(sugerencia);
        });
    }
    public eliminarSugerencia(
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
    public actualizarSugerencia(
        id: string,
        nombre: string,
        valor: number,
        fecha: number,
        periodicidad: string,
        descripcion: string,
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const index: number = this.verificarExistencia(id);
            if (index >= 0) {
                const sugerencia: any = {};
                sugerencia.nombre = nombre;
                sugerencia.valor = valor;
                sugerencia.fecha = fecha;
                sugerencia.periodicidad = periodicidad;
                sugerencia.descripcion = descripcion;
                sugerencia.usuario = usuario;
                sugerencia.id = id;
                this.lista[index] = sugerencia;
                resolve(sugerencia);
            } else {
                reject();
            }
        });
    }
    public consultarSugerencia(
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve(this.lista.filter((item) => {
                return item.usuario === usuario;
            }));
        });
    }
    public consultarUnicoSugerencia(
        id: string,
        usuario: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const index = this.verificarExistencia(id);
            if (index >= 0) {
                const sugerencia: any = this.lista[index];
                if (sugerencia.usuario === usuario) {
                    resolve(sugerencia);
                } else {
                    reject();
                }
            } else {
                reject();
            }
        });
    }

}
