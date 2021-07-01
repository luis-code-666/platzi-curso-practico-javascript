// const lista1 =[
//     100,
//     200,
//     300,
//     500,
// ];

// let sumaLista1 =0;
// for (let i = 0; i < lista1.length; i++) {
//     sumaLista1 = sumaLista1 + lista1[i];
    
// }


// const promedioLista1 = sumaLista1/lista1.length;

//  creando con una funcion dinamica 

function calcularMediaAritmetica(lista){
    // primera opcion
    // let sumaLista =0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
        
    // }

    // segunda opcion con el metodo
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;

    return promedioLista;

}
