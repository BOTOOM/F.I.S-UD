import { IFlujoDBA } from "../persistencia";
import { IComandoCrud } from "./IComandoCrud";

export class ComandoConsultarFlujo implements IComandoCrud {

    private movimientoDBA: IFlujoDBA;
    private usuario: string;

    constructor(movimientoDba: IFlujoDBA) {
        this.movimientoDBA = movimientoDba;
    }
    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }
    public ejecutar(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.movimientoDBA.consultarFlujo(
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
