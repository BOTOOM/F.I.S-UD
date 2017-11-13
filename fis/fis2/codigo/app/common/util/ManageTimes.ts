import * as moment from "moment";

export class ManageTimes {
    public static getTimeStamp(date?: number|string): number {
        return moment(date).valueOf();
    }
    public static DDMMYYYY(date?: number|string): string {
        const format: string = "DDMMYYYY";
        return moment(date).format(format);
    }
    public static getDayWeek(date?: number|string): number {
        return moment(date).weekday();
    }
    public static getDayMonth(date?: number|string): number {
        return moment(date).date();
    }
    public static getDayYear(date?: number|string): number {
        return moment(date).dayOfYear();
    }
    public static getEndMonth(date?: number|string): number {
        return moment(date).endOf("month").date();
    }
    public static getEndYear(date?: number|string): number {
        return moment(date).endOf("year").dayOfYear();
    }
    public static getStartMonth(date?: number|string): number {
        return moment(date).startOf("month").date();
    }
    public static getStartYear(date?: number|string): number {
        return moment(date).startOf("year").dayOfYear();
    }
    public static getYear(date?: number|string): number {
        return moment(date).year();
    }
}
