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
    let listaOrtdenada = lista.sort(
        function(a,b){
            return a - b;
        }
    )
    const medianaLista = parseInt( listaOrtdenada.length/2);
        
    let mediana;
    if (siEsPas(listaOrtdenada.length)) {
        const elemento1 = listaOrtdenada[medianaLista-1];
        const elemento2 = listaOrtdenada[medianaLista];
    
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana;
    } else {
        mediana = listaOrtdenada[medianaLista];
        return mediana;
    }
}