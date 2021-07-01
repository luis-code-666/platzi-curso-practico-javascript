// const lista1 = [
//     1,
//     2,
//     3,
//     2,
//     2,
//     5,
//     5,
//     1,
// ]

// object.entries convierte las listas en array


function calcularModa(lista) {
    const crearLista = {};
    
    lista.map(
        function (elemento) {
            if (crearLista[elemento]) {
                crearLista[elemento] += 1;
            }else{
                crearLista[elemento] = 1;
            }
        }
    )
    
    const nuevaModa = Object.entries(crearLista).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )
    
    const moda = nuevaModa[nuevaModa.length - 1]
    return moda;
}