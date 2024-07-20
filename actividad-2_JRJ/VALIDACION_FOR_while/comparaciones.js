// comparaciones 
// = igualdad  o bien usar == o  solo ===
// opcion 1 :
if(5 == 5){
    console.log("5 es igual a 5");
}


// opcion 2:
if(5 === 5){
    console.log("5 es igual a 5");
}


//declaraciones
let a = 5;
console.log(typeof a);
//let b = 5;
let b = "5";
console.log(typeof b);


// ejercicio durante da el tema ( fromas de declarar)
if(a == b){
    console.log(" a es igual que b DEBIL ")
}

 //ejercicio 2 durante da el tema ( fromas de declarar )
 if(a === b){
    console.log(" a es igual que b FUERTE  ")
}

// desigualdades 
let c = 4;
let d = "4";
if(c != d){
    console.log("c es diferente que d BEDBIL")
}

if(c !== d){
    console.log("c es diferente que d FUERTE")
}


// mayor que y menor que  mayor o igual o menor o igual 
let max = 10;
let min = 5;

if(max > min){
    console.log("max es mayor que min")
}

if(max >= min){
    console.log("max es mayor o igual min")
}


if(min < max){
    console.log("min es menor que max")
}

if(min <= max){
    console.log("min  es menor o igual max")
}