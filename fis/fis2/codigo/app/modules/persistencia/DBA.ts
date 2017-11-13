import { IFlujoDBA } from "./IFlujoDBA";
import { ISugerenciaDBA } from "./ISugerenciaDBA";
import { IUsuarioDBA } from "./IUsuarioDBA";

export abstract class DBA {
    protected flujoDBA: IFlujoDBA;
    protected sugerenciaDBA: ISugerenciaDBA;
    protected usuarioDBA: IUsuarioDBA;

    public getFlujoDBA(): IFlujoDBA {
        return this.flujoDBA;
    }
    public getSugerenciaDBA(): ISugerenciaDBA {
        return this.sugerenciaDBA;
    }
    public getUsuarioDBA(): IUsuarioDBA {
        return this.usuarioDBA;
    }

}
