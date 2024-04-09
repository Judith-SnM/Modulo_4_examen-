const getData = async () => {
    try {
        const response = await fetch('animales.json');

        console.log(response)
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
getData()

const tablaRegistro = document.querySelector("#Tabla")
const nomAnimal = document.querySelector("#animal")
const añoEdad = document.querySelector("#edad")
const comentario = document.querySelector("#comentarios")

tablaRegistro.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log("esta procesando")
    const tipoAnimal =nomAnimal.Value
    const tramoEdad = añoEdad.Value
    const descripcion =comentario.Value


})