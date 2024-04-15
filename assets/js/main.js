class Animal {
    #name
    #edad
    #img
    #comentarios
    #sonido
    constructor(name, edad, img, comentarios, sonido) {
        this.#name = name;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }
    get name() {
        return this.#name
    }
    get edad() {
        return this.#edad
    }
    get img() {
        return this.#img
    }

    get sonido() {
        return this.#sonido
    }
    get comentario() {
        return this.#comentarios
    }

    set comentario(descripcion) {
        this.#comentarios = descripcion
    }
    pintarHTML() {
        console.log('estoy pintando al personaje')
    }
}

class Leon extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.name}`)
    }
}
class Lobo extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.name}`)
    }
}
class Oso extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.name}`)
    }
}
class Serpiente extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.name}`)
    }
}
class Aguila extends Animal {
    pintarHTML() {
        console.log(`estoy pintando a ${this.name}`)
    }
}

const getData = async () => {
    try {
        const response = await fetch('animales.json');

        if (response.ok === false) {
            console.log("no encuentro animal")
            throw {
                codigo: 404,
                mensaje: "El animal no existe"
            }
        }
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

(async()=> {
   await getData();
})()

const tablaRegistro = document.querySelector("#Tabla");
const nomAnimal = document.querySelector("#animal");
const añoEdad = document.querySelector("#edad");
const comentario = document.querySelector("#comentarios");

tablaRegistro.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    console.log("esta procesando")
    const nomAnimal = nomAnimal.value;
    const rangoEdad = añoEdad.value;
    const comentarios = comentario.value;

    if (!nomAnimal  || !rangoEdad) {
        console.log('Por favor, complete todos los campos');
        return;
    }

    switch (nomAnimal) {
        case "Leon":
            const animal1 = new Leon("León", rangoEdad, "", comentarios, "Rugido");
            animal1.pintarHTML();
            break;
        case "Lobo":
            const animal2 = new Lobo("Lobo", rangoEdad, "", comentarios, "Aullar");
            animal2.pintarHTML();
            break;
        case "Oso":
            const animal3 = new Oso("Oso", rangoEdad, "", comentarios, "Gruñir");
            animal3.pintarHTML();
            break;
        case "Serpiente":
            const animal4 = new Serpiente("Serpiente", rangoEdad, "", comentarios, "Sisear");
            animal4.pintarHTML();
            break;
        case "Aguila":
            const animal5 = new Aguila("Aguila", rangoEdad, "", comentarios, "Chillar");
            animal5.pintarHTML();
            break;
        default:
            console.log("El animal Seleccionado no esta disponible")
    }

});
