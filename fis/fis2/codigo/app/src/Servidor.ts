import { Router } from "express";
import { Enrutador } from "./presentacion/Enrutador";

export class Servidor {

    private rutas: Router;

    constructor() {
        const enrutado: Enrutador = new Enrutador("memoria");
        this.rutas = enrutado.rutas();
    }

    public getRutas(): Router {
        return this.rutas;
    }
}
