// ejercicio 3  de descuentos POR MEDIO DEL METODO ELSE IF 
const cantidadArticulos = 50;
const precioUnitario = 10;
let descuento;
let precioTotal;
let precioConIVA;

switch (true) {
    case cantidadArticulos >= 0 && cantidadArticulos <= 10:
        descuento = 0.05; // desceunto del 5%
        break;
    case cantidadArticulos >= 11 && cantidadArticulos <= 20:
        descuento = 0.10; // descuento del 10%
        break;
    default:
        descuento = 0.15; // descuento 15%
        break;
}
// operaciones para la realizacion del prototivo 
precioTotal = cantidadArticulos * precioUnitario;
precioTotal -= precioTotal * descuento;
precioConIVA = precioTotal * 1.16; // Se aplica el 16% de IVA

console.log(precioConIVA);