
// const notes = [
//     {
//         course: "Educación Física",
//         note: 3,
//         credit: 2,
//     },
//     {
//         course: "Programación",
//         note: 6,
//         credit: 1,
//     },
//     {
//         course: "Finanzas personales",
//         note: 7,
//         credit: 5,
//     },
// ];
[]
{}
function calculadoraPromedioPonderado(notes) {
    const multiplicacionDeNotasConCreditos = notes.map(function (multiplicacion) {
        return multiplicacion.note * multiplicacion.credit;
    });
    const sumaMultiplicacionDeNotasConCreditos = multiplicacionDeNotasConCreditos.reduce(
        function (suma = 0, nuevoElemento) {
            return suma + nuevoElemento;
        }
    );
    const creditos = notes.map(function (multiplicacion) {
        return multiplicacion.credit;
    });
    
    const creditoSuma = creditos.reduce(
        function (suma = 0, nuevoElemento) {
            return suma + nuevoElemento;
        }
    );
    
    const resultadoPromedioPonderado = sumaMultiplicacionDeNotasConCreditos / creditoSuma;
    return resultadoPromedioPonderado;
    
}

// function calculoMediaArmonica(lista) {
//     const divisionDelista = lista.map(function (numObjeto) {
//         return 1/numObjeto.numero;
//     })
// console.log(divisionDelista);
//     const sumaDivisionDelista = divisionDelista.reduce(function (a=0,b) {
//         return a+b;
//     })
//      const resultado = lista.length/sumaDivisionDelista;
//      return resultado;
// }