import { util } from "../../../common";
import { Movimiento } from "./Movimiento";

export abstract class Flujo extends Movimiento {
    public aplicarMovimiento(fecha: number): number {
        let valor: number = 0;
        switch (this.periodicidad) {
            case util.Periodicidad.DIA:
                valor = this.valor;
                break;
            case util.Periodicidad.DIA_ANO:
                if (util.ManageTimes.getDayYear(this.fecha) === util.ManageTimes.getDayYear()) {
                    valor = this.valor;
                } else {
                    valor = 0;
                }
                break;
            case util.Periodicidad.DIA_MES:
                if (util.ManageTimes.getDayMonth(this.fecha) === util.ManageTimes.getDayMonth()) {
                    valor = this.valor;
                } else {
                    valor = 0;
                }
                break;
            case util.Periodicidad.DIA_SEM:
                if (util.ManageTimes.getDayWeek(this.fecha) === util.ManageTimes.getDayWeek()) {
                    valor = this.valor;
                } else {
                    valor = 0;
                }
                break;
            case util.Periodicidad.INI_ANO:
                if (util.ManageTimes.getStartYear(this.fecha) === util.ManageTimes.getStartYear()) {
                    valor = this.valor;
                } else {
                    valor = 0;
                }
                break;
            case util.Periodicidad.INI_MES:
                if (util.ManageTimes.getStartMonth(this.fecha) === util.ManageTimes.getStartMonth()) {
                    valor = this.valor;
                } else {
                    valor = 0;
                }
                break;
            case util.Periodicidad.FIN_ANO:
                if (util.ManageTimes.getEndYear(this.fecha) === util.ManageTimes.getEndYear()) {
                    valor = this.valor;
                } else {
                    valor = 0;
                }
                break;
            case util.Periodicidad.FIN_MES:
                if (util.ManageTimes.getEndYear(this.fecha) === util.ManageTimes.getEndYear()) {
                    valor = this.valor;
                } else {
                    valor = 0;
                }
                break;
            case util.Periodicidad.NONE:
                if (util.ManageTimes.getDayYear(this.fecha) === util.ManageTimes.getDayYear() &&
                    util.ManageTimes.getYear(this.fecha) === util.ManageTimes.getYear()) {
                    valor = this.valor;
                } else {
                    valor = 0;
                }
                break;
            default:
                valor = 0;
        }
        return valor;
    }
}
