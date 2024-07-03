// EJERCICIO 2 
// ejercicio de los numeros 1 lunes con swicht 
const numero=3;
let dia;
 
switch(numero){
    case 1:
        dia='Lunes';
        break;
    case 2:
        dia='Martes';
        break;
    case 3:
        dia='Miercoles';
        break;
    case 4:
        dia='Jueves';
        break;
    case 5:
        dia='viernes';
        break;
    case 6:
        dia='Sabado';
        break;
    case 7:
        dia='Domingo';
        break;
    default:
        dia='Este numero no pertecene a ningun dia de la semana';
        break;
}
  console.log(dia)