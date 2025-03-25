/*
	Name exercise: vectores
	Description: vectores
	Autor: NataliaCh
	Date: march 20th 2025
*/

let vector=[];
let iteration;
let number;

for(iteration=0;iteration<10;iteration++)
{
        number=Math.floor(Math.random()*100);
        vector.push(number);
}

console.log(vector);

let maximo=Math.max(...vector);
let minimo=Math.min(...vector);

console.log("Maximo: "+ maximo);
console.log("Minimo: "+ minimo);

let pares=vector.filter(number
