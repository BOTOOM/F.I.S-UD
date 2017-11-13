import { Flujo } from "../clases/Flujo";
import { Sugerencia } from "../clases/Sugerencia";

export interface IFabricaMovimientos {
    crearFlujo(): Flujo;
    crearSugerencia(): Sugerencia;
}
