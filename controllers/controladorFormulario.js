let cajaNombreProducto = document.getElementById('nombre');

let cajaPrecioUnitario = document.getElementById('precioUnitario');

let cajaDescripcion = document.getElementById('descripcion');

let cajaFoto = document.getElementById('foto');

let cajaReseña = document.getElementById('reseña');

let botonFormulario = document.getElementById('botonFormulario');





//Como detecto eventos

//1. Una vez tenga una variable que almacena
//la etiqueta sobre la cual quiero escuchar el evento


//2. Utilizar la funcion o metodo propio de js (Watch Dog)

//addEventListener Recibe dos parametros : cual evento?, que hago?

botonFormulario.addEventListener("click", (event)=> {
event.preventDefault();

try {
    let capturaNombre = cajaNombreProducto.value;
    let capturaPrecioUnitario = cajaPrecioUnitario.value;
    let capturaDescripcion = cajaDescripcion.value;
    let capturaUrlFoto = cajaFoto.value;
    let reseña = cajaReseña.value;

    console.log(`Valor campo Nombre ${capturaNombre}`);
    console.log(`Valor campo PrecioUnitario ${capturaPrecioUnitario}`);
    console.log(`Valor campo Descripcion ${capturaDescripcion}`);
    console.log(`Valor campo CapturaUrlFoto ${capturaUrlFoto}`);
    console.log(`Valor campo Reseña ${reseña}`);

    
} catch (error) {
  console.log(`Se produjo un error: ${error}`);
}

});