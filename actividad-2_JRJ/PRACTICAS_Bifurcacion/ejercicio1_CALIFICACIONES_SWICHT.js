// EJERCICIO 1 CON SWICTH 
const calificacion=99;
let LETRAS;
 
switch(true){
    case (calificacion >=90 === calificacion <=100):
        LETRAS='A';
        break;
    case (calificacion >=80 === calificacion <=89):
        LETRAS='B';
        break;
    case (calificacion >=70 === calificacion <=79):
        LETRAS='C';
        break;
    case (calificacion >=60 === calificacion <=69):
        LETRAS='D';
        break;  d
    default:
        LETRAS='Este numero no pertecene a ningun dia de la semana';
        break;
}
  console.log(LETRAS)