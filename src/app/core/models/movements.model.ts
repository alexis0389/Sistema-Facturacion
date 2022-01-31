export interface Movement {
    id: number,
    fecha: Date,
    hora: Date,
    productoId: number,
    descripcion: string,
    tipo: string,
    cantidad: number,
    total: number
}