const precioOriginal = 100;
const descuento = 15;


const porcentajeDelPrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajeDelPrecioConDescuento)/ 100;

console.log({
    descuento,
    porcentajeDelPrecioConDescuento,
    precioConDescuento,
    precioOriginal,
});