// EJERCICIO 2 : realizar un programa que resiva un numero y nos muestre
// el dia de la semana a la que corresponde ese numero 1 al 7 

const numero=7;
let dia;

 if(numero===1){
    dia='Lunes';
 }
  else  if(numero===2){
    dia='Martes';
  }
  else  if(numero===3){
    dia='Miercoles';
  }
  else  if(numero===4){
    dia='Jueves';
  }
  else  if(numero===5){
    dia='Viernes';
  } 
  else  if(numero===6){
    dia='Sabado';
  }
  else  if(numero===7){
    dia='Domingo';
  }
   else {
    dia= 'Este numero no pertenece a ningun dia de la semana ';
   }
     console.log(dia);