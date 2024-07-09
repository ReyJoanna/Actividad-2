// ejercicio 1 de suma de pares 
let suma_par=0;
let h;

for(h=0; h<=1000; h++){
    if (h % 2===0){
        suma_par +=h;
    }
}
console.log(suma_par);