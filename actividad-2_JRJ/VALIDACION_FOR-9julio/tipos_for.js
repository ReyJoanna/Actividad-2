// for 
/* ESTRUCTURA 
su estructura lleva una inicializacion con una condicion  actualizado o con incremento
for (inicializado, condicion y actualizacion)
 
//junior 
let i = 0;
i = i+i;
i += i;
 
//master 
i++
i--
*/


// tipos de for 
// for 
//ejemplos mas usados 1
for(let i = 0; i < 10; i ++ ){
    //aqui va un bucle 
    console.log(i);
}

// ejemplos mas usados 2 
let lista = [1,4,6,8,10,15,18]
   for(let i = 0; i < lista.length /* longitud de cadena*/; i++ ){
    //imprime 
    console.log(lista[i]);
}

// for... of
// hace lo mismo que aeriba pero solo inicializa 
for(let valor of lista ){ /*metodo resumido para mostrar los valores o parametros */
    console.log(valor);
}


//for...in
// puedes comentarlo para evitra que al correr el codigo te gebere errores

let persona = {
    
    nombre = "Joanna",
    apellido = "Reyes ",
    edad = 21,
    IsDevelopor = true
}

console.log(persona.nombre)

let prop = "edad";
cosnsolo.log(persona[prop]);

for(let propiedad  in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}


//for...EACH
lista.forEach( valor => /* esto es un arrow funcion*/ {
    console.log(valor)
   }
)