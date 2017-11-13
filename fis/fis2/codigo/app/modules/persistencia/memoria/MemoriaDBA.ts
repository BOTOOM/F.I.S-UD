import { DBA } from "../DBA";
import { ListaFlujos } from "./ListaFlujos";
import { ListaSugerencias } from "./ListaSugerencias";
import { ListaUsuarios } from "./ListaUsuarios";

export class MemoriaDBA extends DBA {
    constructor() {
        super();
        this.flujoDBA = new ListaFlujos();
        this.sugerenciaDBA = new ListaSugerencias();
        this.usuarioDBA = new ListaUsuarios();
    }
}
