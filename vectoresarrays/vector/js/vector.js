/*
	Name exercise: vectores
	Description: vectores
	Autor: NataliaCh
	Date: march 20th 2025
*/

let vector=[];
let iteration;
let number;

for(iteration=0;iteration<10;iteration++){

        number=Math.floor(Math.random()*100);
        vector.push(number);
}

console.log(vector);

       for(iteration=0;iteration<vector.length;iteration++){
          //vector [iteration];
          console.log(vector[iteration]);
}
let pares= vector.filter(number=>number%2 ==0);
let impares= vector.filter(number=>number%2 !==0);

      console.log("pares: "+ pares);
      console.log("impares: "+ impares);

let maximo=Math.max (...vector);
let minimo=Math.min (...vector);

console.log("Maximo:"+ maximo);
console.log("Minimo:"+ minimo);