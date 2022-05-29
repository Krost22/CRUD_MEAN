export class producto {
    _id?: number;
    nombre: string;
    peso: number;
    proveedor: string;
    placa_vehiculo: string;
    unidades: number;
    observaciones: string;
  static title: any;
    

    constructor(nombre: string, peso: number, proveedor: string, placa_vehiculo: string, unidades: number, observaciones: string) {
        this.nombre = nombre;
        this.peso = peso;
        this.proveedor = proveedor;
        this.placa_vehiculo = placa_vehiculo;
        this.unidades = unidades;
        this.observaciones = observaciones;
    }
}