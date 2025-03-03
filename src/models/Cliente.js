export default class Cliente {
    constructor(codigo, nombre, apellido, edad, telefono, ciudad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.ciudad = ciudad;
    }
    toJSON() {
        return {
            codigo: this.codigo,
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            telefono: this.telefono,
            ciudad: this.ciudad
        }
    }
}