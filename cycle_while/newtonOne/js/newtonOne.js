/*
	Name exercise: counter
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let sum_total=0;
let calculate=0;
let force;

let mass=parseFloat(prompt("Enter mass:"));

let acceleration=parseFloat(prompt("Enter acceleration:"));

while(mass>=0  && acceleration>=0){

force=mass*acceleration;

console.log( mass + " * " + acceleration + " = " + force );

sum_total+=force;
calculate++;

console.log("force:" + force )

console.log("Number total force:" + sum_total);
console.log("Number calculates:" + calculate);

     mass=parseFloat(prompt("Enter mass:"));

     acceleration=parseFloat(prompt("Enter acceleration:"));


}