import { IFlujoDBA } from "../persistencia";
import { IComandoCrud } from "./IComandoCrud";

export class ComandoConsultarUnicoFlujo implements IComandoCrud {

    private movimientoDBA: IFlujoDBA;
    private usuario: string;
    private id: string;

    constructor(movimientoDba: IFlujoDBA) {
        this.movimientoDBA = movimientoDba;
    }
    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }
    public setId(id: string): void {
        this.id = id;
    }
    public ejecutar(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.movimientoDBA.consultarUnicoFlujo(
                this.id,
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
