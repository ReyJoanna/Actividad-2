// EJERCICIO 5: realizar las tablas de multiplicar del 1 al 10 usando un while o do while segun lo considere 
let a = 1; 
let res; 

while (a <= 10) {
   m = 1; // Sirve para el inicio dentro del bucle en la interaccion interna del segundo while 
   while (m <= 10) {
      res = a * m;
      console.log(a + " x " + m + " = " + res);
      m++;
   }
   console.log("");
   a++;
}