/*
	Name exercise: counter for
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let counter=0;
let force=[];


let calculate=parseInt(prompt("ingresa calculate:"));

             for(counter=0;counter<calculate;counter++){
console.log("calculate:" + calculate);


let mass=parseFloat(prompt("ingresa mass:"));

let acceleration=parseFloat(prompt("ingresa acceleration:"));

let currentForce=mass*acceleration;

             force.push(currentForce);
}
 console.log("force:" + force );