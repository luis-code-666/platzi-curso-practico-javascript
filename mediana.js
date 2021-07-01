// const lista = [
//     40000000,
//     100,
//     500,
//     200,
// ];

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    
    return promedioLista;
}

function siEsPas(numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
    
function calcularMediana(lista) {
    //ordena el sort array y lo hace mas simple
    let listaOrdenada = lista.sort(
        function(a,b){
            return a - b;
        }
    )
    const medianaLista = parseInt( listaOrdenada.length/2);
        
    let mediana;
    if (siEsPas(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[medianaLista-1];
        const elemento2 = listaOrdenada[medianaLista];
    
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana;
    } else {
        mediana = listaOrdenada[medianaLista];
        return mediana;
    }
}