import { IUsuarioDBA } from "../persistencia";
import { IComandoCrud } from "./IComandoCrud";

export class ComandoCrearUsuario implements IComandoCrud {

    private usuarioDBA: IUsuarioDBA;
    private email: string;
    private password: string;
    private nombre: string;

    constructor(usuarioDBA: IUsuarioDBA) {
        this.usuarioDBA = usuarioDBA;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setPassword(password: string): void {
        this.password = password;
    }
    public setNomber(nombre: string): void {
        this.nombre = nombre;
    }
    public ejecutar(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.usuarioDBA.crearUsuario(
                this.email,
                this.password,
                this.nombre)
            .then((info) => {
                resolve(info);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

}
