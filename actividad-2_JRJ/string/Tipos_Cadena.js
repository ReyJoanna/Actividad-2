// string cadena de caracteres 
let srt_1 = "Hola soy un texto con comillas";
let srt_2 = 'Hola soy un texto con comillas simples';
let srt_3 = "Comillas dentro de comillas  \"Ejemplo";
let srt_4 = 'COmillas dentro de comillas "Ejemplo"';
let srt_5 = "Comillas dentro de comillas 'Ejmplo'";

console.log(srt_1);
console.log(srt_2);
console.log(srt_3);
console.log(srt_4);
console.log(srt_5);


//comillas invertidas (backticks)
let srt_6 = `Comillas invertidas backticks`;
console.log(srt_6);


let nombre = "Joanna";
let welcome = `hola ${nombre}, esto es una variable dentro del valor de otra variable`

console.log(welcome);

//plantilla HTML

let plantilla = `
<html>
    <h3>Pagina web de ${nombre}</h3>
    <p>Un parrofo</p>
<html>
`
console.log(plantilla);


