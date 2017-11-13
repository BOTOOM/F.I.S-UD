export interface IFlujoDBA {
    guardarFlujo(
        nombre: string,
        valor: number,
        periodicidad: string,
        fecha: number,
        descripcion: string,
        usuario: string): Promise<any>;
    eliminarFlujo(
        id: string,
        usuario: string): Promise<any>;
    actualizarFlujo(
        id: string,
        nombre: string,
        valor: number,
        periodicidad: string,
        fecha: number,
        descripcion: string,
        usuario: string): Promise<any>;
    consultarFlujo(
        usuario: string): Promise<any>;
    consultarUnicoFlujo(
        id: string,
        usuario: string): Promise<any>;
}
