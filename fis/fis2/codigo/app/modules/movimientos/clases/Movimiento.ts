export abstract class Movimiento {
    protected id: string;
    protected nombre: string;
    protected valor: number;
    protected fecha: number;
    protected descripcion: string;
    protected usuario: string;
    protected periodicidad: string;
    public setPeriodicidad(periodicidad: string): void {
        this.periodicidad = periodicidad;
    }
    public getPeriodicidad(): string {
        return this.periodicidad;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public setValor(valor: number): void {
        this.valor = valor;
    }
    public setFecha(fecha: number): void {
        this.fecha = fecha;
    }
    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }
    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }
    public setId(id: string): void {
        this.id = id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getId(): string {
        return this.id;
    }
    public getValor(): number {
        return this.valor;
    }
    public getFecha(): number {
        return this.fecha;
    }
    public getDescripcion(): string {
        return this.descripcion;
    }
    public getUsuario(): string {
        return this.usuario;
    }
    public abstract aplicarMovimiento(fecha: number): number;
}
