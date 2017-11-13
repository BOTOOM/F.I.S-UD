import { FlujoIngreso } from "../clases/FlujoIngreso";
import { SugerenciaIngreso } from "../clases/SugerenciaIngreso";
import { IFabricaMovimientos } from "./IFabricaMovimientos";

export class FabricaIngreso implements IFabricaMovimientos {
    public crearFlujo(): FlujoIngreso {
        return new FlujoIngreso();
    }
    public crearSugerencia(): SugerenciaIngreso {
        return new SugerenciaIngreso();
    }
}
