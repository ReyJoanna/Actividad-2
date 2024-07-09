// ejercicio 3 ejercicio de numeros pirmos 
let inicio=0;
let fin=1000;
let a;
let num;

for(num=inicio; num<=fin; num++){
    let primo= true;

    if(num <=1){
        primo=false;
    } else {
        for(a=2; a<num; a++){
            if(num % a ===0)
        {
          primo= false;
          break;
      }
    }
}


if(primo){
    console.log(num);
}
}