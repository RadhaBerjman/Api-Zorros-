//Utilizando el template de ejercicio Zorro, se debe mostrar una imagen 
//aleatoria de un zorro cuando se apriete el botón.

const imagen = document.querySelector("#img");
const boton = document.querySelector("#btn");

const tomarImagen = async ()=>{
    const res = await fetch ("https://randomfox.ca/floof/")
    const data = await res.json()
    imagen.src= data.image 

}
boton.addEventListener("click",tomarImagen)


tomarImagen()