import Animal from "./animal.js";

export default class Mascota extends Animal{
    constructor (_nombre,_direccion,_telefono,_tipo,nombreMas,enfermedad){
        super (_nombre,_direccion,_telefono,_tipo)
        this._nombreMas = nombreMas;
        this._enfermedad = enfermedad; 
    }
    get nombre (){
        return this._nombreMas;
    }
    set nombre (nombreMas){
        this._nombreMas = nombreMas;
    }
    get enfermedad (){
        return this._enfermedad;
    }
    set nombre (enfermedad){
        this._enfermedad = enfermedad;
    }

}


