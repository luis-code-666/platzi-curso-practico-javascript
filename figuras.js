console.log("Hello, world!")
// Codigo del cuadrado 
console.group("Caudrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro de un cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área de un cuadrado es: " + areaCuadrado + "cm2");
/////// Para funciones 

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();
// Codigo del triangulo 

console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoBase = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     "Los lados del triangulo miden: "
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + ladoBase 
//     + "cm "
// );

// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 +ladoTriangulo2 + ladoBase;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (ladoBase * alturaTriangulo)/2;
// console.log("El área del triangulo es: " + areaTriangulo + "cm2");

// function perimetroTriangulo(lado1, lado2, base){
//     return lado1+lado2+base;
// }

// function areaTriangulo(base, altura){
//     return (base * altura)/2;
// }

console.groupEnd();

// Codigo del circulo 

console.group("Circulo");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
// const diametrCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametrCirculo + "cm");
function diametroCirculo (radio){
    return radio * 2;
}
//PI
const PI = Math.PI;
console.log("El PI es: " + PI );


//Circunferencia
// const perimetroCirculo = diametrCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
// const areaCirculo = (radioCirculo * radioCirculo)* PI;
// console.log("El área del circulo es: " + areaCirculo + "cm2");
function areaCirculo(radio){
    return ( radio * radio ) * PI;
}
console.groupEnd();

// Aquí interactuamos con HTML

function calcularPerimetroCuadrado(){
    const inputCuadrado = document.getElementById("InputCuadrado");
    const valueCuadrado = inputCuadrado.value;

    const perimetroDelCuadrado = perimetroCuadrado (valueCuadrado);
    alert(perimetroDelCuadrado);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado (value);
    alert(area);
}


function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

function calcularPerimetroTriangulo(){

    const inputDelTriangulo = document.getElementById("InputTriangulo");
    const value1 = inputDelTriangulo.value;
    const inputDelTriangulo1 = document.getElementById("InputTriangulo1");
    const value2 = inputDelTriangulo1.value;
    const inputDelTriangulo2 = document.getElementById("InputTriangulo2");
    const valueBase = inputDelTriangulo2.value;


    const perimetroDelTriangulo = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetroDelTriangulo);

    }

function calcularAreaTriangulo(){
    const inputDelTriangulo3 = document.getElementById("InputTriangulo3");
    const inputDelTriangulo2 = document.getElementById("InputTriangulo2");


    const valueAltura = inputDelTriangulo3.value;
    const valueBase = inputDelTriangulo2.value;

    const areaDelTriangulo = areaTriangulo(valueBase, valueAltura );
    alert(areaDelTriangulo);
}

function calcularPerimetroCirculo(){
    const inputDelCirculo = document.getElementById("inputRadio")
    const radio = inputDelCirculo.value;
    const perimetroDelCirculo = perimetroCirculo(radio);
    alert(perimetroDelCirculo);
}

function calcularAreaCirculo(){

    const inputDelCirculo = document.getElementById("inputRadio")
    const radio = inputDelCirculo.value;
    const areaDelCirculo = areaCirculo(radio);
    alert(areaDelCirculo);
}


// ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

function trianguloIsoseles(lado1,lado2,lado3){
    if (lado1!=lado2 ) {
        alert("no es un isoseles");

    }else{
        alert('Es isoceles')
        return Math.sqrt((lado1**2)-((lado3**2)/4))
    }

}

function calcularLaAltura(){
    const inputDeLadoA = document.getElementById("inputLadoA")
    const ladoA = inputDeLadoA.value;
    const inputDeLadoB= document.getElementById("inputLadoB")
    const ladoB = inputDeLadoB.value;
    const inputDeLadoC = document.getElementById("inputLadoC")
    const ladoC = inputDeLadoC.value;
    const muestraAltura = trianguloIsoseles(ladoA,ladoB,ladoC);
    alert(muestraAltura);
}

// function calcularPerimetroTriangulo(){

// }