import Propietario from "./propietario.js";

export default class Animal extends Propietario{
    constructor(_nombre, _direccion,_telefono, tipo) {
        super(_nombre, _direccion,_telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
}