import Animal from "./animal.js";
import Mascota from "./mascota.js";
import Propietario from "./propietario.js";

const btnAgregar = document.querySelector('#Agregar');
const cuerporesultado = document.querySelector('#resultado');
const arregloVeterinaria = [];

/*class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
    }
    datosPropietario() {
        return `El nombre del propietario es:  ${this._nombre}`;
    }
}

class Animal extends Propietario {
    constructor(_nombre, _direccion, tipo) {
        super(_nombre, _direccion);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
}

class Mascota extends Animal {
    constructor(_nombre, _direccion, _tipo, nombreMas, enfermedad) {
        super(_nombre, _direccion, _tipo)
        this._nombreMas = nombreMas;
        this._enfermedad = enfermedad;
    }
    get nombre() {
        return this._nombreMas;
    }
    set nombre(nombreMas) {
        this._nombreMas = nombreMas;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set nombre(enfermedad) {
        this._enfermedad = enfermedad;
    }

} 

const btnAgrega = document.querySelector('#agregar');
btnAgrega.addEventListener('click', () => {
    let 
});*/

btnAgregar.addEventListener('click', () => {
    //agregarFilas(llenarArreglo, cuerporesultado);
    llenarArreglo(arregloVeterinaria);
    agregarFilas(arregloVeterinaria, cuerporesultado);
    eliminar(arregloVeterinaria, cuerporesultado);
});

const llenarArreglo = (arregloVeterinaria) => {
    const tiposAnimales = document.querySelector('#tipo').value;
    let dueño = document.querySelector('#propietario').value;
    let telefono = document.querySelector('#telefono').value;
    let residencia = document.querySelector('#direccion').value;
    let nomMasco = document.querySelector('#nombreMascota').value;
    let motivConsulta = document.querySelector('#enfermedad').value;
    arregloVeterinaria.push(new Mascota(dueño, residencia, telefono, tiposAnimales, nomMasco, motivConsulta));
    console.log(arregloVeterinaria[0].datosPropietario());
    limpia(); 

}


const agregarFilas = (arregloVeterinaria, cuerporesultado) => {
    arregloVeterinaria.forEach((Mascota, index) => {

        const fila = document.createElement('ul');
        const filaUno = document.createElement('li');
        const filaDos = document.createElement('li');
        fila.setAttribute('id', `fila${index}`);
        filaUno.innerHTML = Mascota.datosPropietario();
        filaDos.innerHTML = `El tipo de animal es un : ${Mascota._tipo}, mientras que el nombre de la mascota es ${Mascota._nombreMas} y la enfermedad es : ${Mascota._enfermedad} `;
        fila.appendChild(filaUno);
        fila.appendChild(filaDos);

        cuerporesultado.appendChild(fila);
    });
}

const eliminar = (arregloVeterinaria, cuerporesultado) => {
    if (cuerporesultado.childElementCount >= 1) {
        for (let i = 0; i < arregloVeterinaria.length - 1; i++) {
            cuerporesultado.removeChild(document.querySelector(`#fila${i}`));
        }
    }
}

const limpia = () => {
    document.getElementById("propietario").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("nombreMascota").value = "";
    document.getElementById("enfermedad").value = "";
}