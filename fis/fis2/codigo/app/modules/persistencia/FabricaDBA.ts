import { DBA } from "./DBA";
import { MemoriaDBA } from "./memoria";

export class FabricaDBA {
    public static crearDBA(nombre: string): DBA {
        switch (nombre) {
            case "memoria":
                return new MemoriaDBA();
        }
        return null;
    }
}
