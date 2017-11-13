import { FlujoEgreso } from "../clases/FlujoEgreso";
import { SugerenciaEgreso } from "../clases/SugerenciaEgreso";
import { IFabricaMovimientos } from "./IFabricaMovimientos";

export class FabricaEgreso implements IFabricaMovimientos {
    public crearFlujo(): FlujoEgreso {
        return new FlujoEgreso();
    }
    public crearSugerencia(): SugerenciaEgreso {
        return new SugerenciaEgreso();
    }
}
