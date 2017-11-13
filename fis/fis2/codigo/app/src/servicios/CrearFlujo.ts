import { comandos, persistencia } from "../../modules";
import { IServicios } from "./IServicios";

export class CrearFlujo implements IServicios {

    private comandoCrearFlujo: comandos.ComandoGuardarFlujo;

    constructor(flujoBDA: persistencia.IFlujoDBA) {
        this.comandoCrearFlujo = new comandos.ComandoGuardarFlujo(flujoBDA);
    }

    public ejecutar(post: any, params: any): Promise<any> {
        return new Promise((resolve, reject) => {
            if (post.descripcion && post.fecha && post.periodicidad &&
                post.nombre && post.usuario && post.valor !== 0) {
                this.comandoCrearFlujo.setDescripcion(post.descripcion);
                this.comandoCrearFlujo.setFecha(post.fecha);
                this.comandoCrearFlujo.setNombre(post.nombre);
                this.comandoCrearFlujo.setPeriodicidad(post.periodicidad);
                this.comandoCrearFlujo.setUsuario(post.usuario);
                this.comandoCrearFlujo.setValor(post.valor);
                this.comandoCrearFlujo.ejecutar()
                .then((info) => {
                    resolve({
                        info,
                        status: 200,
                    });
                })
                .catch((error) => {
                    reject({
                        error,
                        message: "bad request",
                        status: 400,
                    });
                });
            } else {
                reject({
                    message: "bad request",
                    status: 400,
                });
            }
        });
    }

}
