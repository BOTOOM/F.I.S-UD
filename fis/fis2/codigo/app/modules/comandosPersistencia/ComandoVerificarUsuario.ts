import { IUsuarioDBA } from "../persistencia";
import { IComandoCrud } from "./IComandoCrud";

export class ComandoVerificarUsuario implements IComandoCrud {

    private usuarioDBA: IUsuarioDBA;
    private email: string;
    private password: string;

    constructor(usuarioDBA: IUsuarioDBA) {
        this.usuarioDBA = usuarioDBA;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public setPassword(password: string): void {
        this.password = password;
    }

    public ejecutar(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.usuarioDBA.verificarUsuario(
                this.email,
                this.password)
            .then((info) => {
                resolve(info);
            })
            .catch((error) => {
                reject(error);
            });
        });
    }

}
