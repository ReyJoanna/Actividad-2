// EJERCICIO 1 : PORGRAMA PARA EL NUMERO EN LETRA POR MEDIO DE UN IF ELSE  

const calificacion=0;
let LETRAS;

if (calificacion >=90 === calificacion <=100){
    LETRAS='A';
} else if(calificacion >=80 === calificacion <=89){
    LETRAS='B';
}else if (calificacion >=70 === calificacion <=79){
    LETRAS='C';
}else if (calificacion >=60 === calificacion <=69){
    LETRAS='D';
}else {
    LETRAS ='F';

}
   console.log(LETRAS);
