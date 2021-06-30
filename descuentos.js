const precioOriginal = 100;
const descuento = 15;


// const porcentajeDelPrecioConDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajeDelPrecioConDescuento)/ 100;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;

    return precioConDescuento;

}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuentos = calcularPrecioConDescuento(priceValue,discountValue)

    const resulP = document.getElementById("ResultP");
    // innerText sirve para escrivir el html desde java escrip desde un botonn
    resulP.innerText = "El precio con descuento son: $" + precioConDescuentos;
}
// console.log({
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento,
//     precioOriginal,
// });