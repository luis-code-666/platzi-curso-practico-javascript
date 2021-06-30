const precioOriginal = 100;
const descuento = 15;


// const porcentajeDelPrecioConDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajeDelPrecioConDescuento)/ 100;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;

    return precioConDescuento;

}

// console.log({
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento,
//     precioOriginal,
// });