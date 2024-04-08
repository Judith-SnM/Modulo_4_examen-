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
    } catch (error) {
        console.log(error)
    }
}
getData()