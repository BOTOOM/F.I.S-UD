import { util } from "../../../common";
import { IUsuarioDBA } from "../IUsuarioDBA";
import { ListaMemoria } from "./ListaMemoria";

export class ListaUsuarios extends ListaMemoria implements IUsuarioDBA {
    public verificarUsuario(email: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const index = this.lista.findIndex((item) => {
                return (item.email === email && item.password === password);
            });
            if (index >= 0) {
                resolve(this.lista[index]);
            } else {
                reject();
            }
        });
    }
    public crearUsuario(
        email: string,
        password: string,
        nombre: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.verificarEmail(email)) {
                reject();
            } else {
                let id: string = util.Random.randomString(10);
                while (this.verificarExistencia(id) >= 0) {
                    id = util.Random.randomString(10);
                }
                const usuario: any = {};
                usuario.id = id;
                usuario.email = email;
                usuario.password = password;
                usuario.nombre = nombre;
                this.lista.push(usuario);
                resolve(usuario);
            }
        });
    }
    public consultarUsuario(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const index = this.verificarExistencia(id);
            if (index >= 0) {
                resolve(this.lista[index]);
            } else {
                reject();
            }
        });
    }
    private verificarEmail(email: string): number {
        let index: number = -1;
        index = this.lista.findIndex((item) => {
            return item.email === email;
        });
        return index;
    }

}
