export interface ISugerenciaDBA {
    guardarSugerencia(
        nombre: string,
        valor: number,
        fecha: number,
        periodicidad: string,
        descripcion: string,
        usuario: string): Promise<any>;
    eliminarSugerencia(
        id: string,
        usuario: string): Promise<any>;
    actualizarSugerencia(
        id: string,
        nombre: string,
        valor: number,
        fecha: number,
        periodicidad: string,
        descripcion: string,
        usuario: string): Promise<any>;
    consultarSugerencia(
        usuario: string): Promise<any>;
    consultarUnicoSugerencia(
        id: string,
        usuario: string): Promise<any>;
}
