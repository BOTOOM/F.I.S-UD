import { Request, Response, Router } from "express";
import { persistencia } from "../../modules";
import { CrearFlujo } from "../servicios";

export class Enrutador {

    private dba: persistencia.DBA;

    constructor(nombrePersistencia: string) {
        this.dba = persistencia.FabricaDBA.crearDBA(nombrePersistencia);
    }

    public rutas(): Router {
        const router = Router();
        router.route("/flujo")
        .post((request: Request, response: Response) => {
            const crearFlujo: CrearFlujo = new CrearFlujo(this.dba.getFlujoDBA());
            crearFlujo.ejecutar(request.body, request.params)
            .then((result) => {
                response.status(200).send(result);
            })
            .catch((error) => {
                response.status(400).send(error);
            });
        });
        return router;
    }
}
