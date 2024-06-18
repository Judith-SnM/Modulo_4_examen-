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
    constructor(edad, comentarios) {
        super("León", edad, "assets/img/leon.png", comentarios, "Rugido.mp3");
    }
}
class Lobo extends Animal {
    constructor(edad, comentarios) {
        super("Lobo", edad, "assets/img/lobo.jpg", comentarios, "Aullido.mp3");
    }
}
class Oso extends Animal {
    constructor(edad, comentarios) {
        super("Oso", edad, "assets/img/oso.jpg", comentarios, "Gruñido.mp3");
    }
}
class Serpiente extends Animal {
    constructor(edad, comentarios) {
        super("Serpiente", edad, "assets/img/serpiente.jpg", comentarios,"Siseo.mp3");
    }
}
class Aguila extends Animal {
    constructor(edad, comentarios) {
        super("Águila", edad, "assets/img/aguila.png", comentarios, "Chillido.mp3");
    }
}

//iniciar animales
let animales = [];

//IIFE: funcion autoejecutable
(async () => {
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
        animales = data
    } catch (error) {
        console.log(error)
    }
})();

const tablaRegistro = document.querySelector("#Tabla");
const nomAnimal = document.querySelector("#animal");
const añoEdad = document.querySelector("#edad");
const comentario = document.querySelector("#comentarios");

tablaRegistro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log("esta procesando")
    const nomAnimal = nomAnimal.value;
    const rangoEdad = añoEdad.value;
    const comentarios = comentario.value;

    if (!nomAnimal || !rangoEdad) {
        console.log('Por favor, complete todos los campos');
        return;
    }

    switch (nomAnimal) {
        case "Leon":
            const animalEncontradoLeon = animales.find(item => item.name === "Leon");
            if (animalEncontradoLeon) {
                const animal1 = new Leon(rangoEdad, comentarios);
                animal1.pintarHTML();
            } else {
                console.log("El animal no está disponible");
            }
            break;
        case "Lobo":
            const animalEncontradoLobo = animales.find(item => item.name === "Lobo");
            if (animalEncontradoLobo) {
                const animal2 = new Lobo(rangoEdad, comentarios);
                animal2.pintarHTML();
            } else {
                console.log("El animal no está disponible");
            }
            break;
        case "Oso":
            const animalEncontradoOso = animales.find(item => item.name === "Oso");
            if (animalEncontradoOso) {
                const animal3 = new Oso(rangoEdad, comentarios);
                animal3.pintarHTML();
            } else {
                console.log("El animal no está disponible");
            }
            break;
        case "Serpiente":
            const animalEncontradoSerpiente = animales.find(item => item.name === "Serpiente");
            if (animalEncontradoSerpiente) {
                const animal4 = new Serpiente(rangoEdad, comentarios);
                animal4.pintarHTML();
            } else {
                console.log("El animal no está disponible");
            }
            break;
        case "Aguila":
            const animalEncontradoAguila = animales.find(item => item.name === "Aguila");
            if (animalEncontradoAguila) {
                const animal5 = new Aguila(rangoEdad, comentarios);
                animal5.pintarHTML();
            } else {
                console.log("El animal no está disponible");
            }
            break;
        default:
            console.log("El animal Seleccionado no esta disponible")
    }

});
