export interface IUsuarioDBA {
    crearUsuario(
        email: string,
        password: string,
        nombre: string): Promise<any>;
    consultarUsuario(
        id: string): Promise<any>;
    verificarUsuario(
        email: string,
        password: string): Promise<any>;
}
