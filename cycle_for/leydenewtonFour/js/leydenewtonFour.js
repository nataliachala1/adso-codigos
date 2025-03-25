/*
	Name exercise: LeydeNewtonFour
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let counter=0;
let gravity=9.8;


let num_mass=parseFloat(prompt("Enter number of mass a calculate :"));

                   for(counter=0;counter<num_mass;counter++){


let mass=parseFloat(prompt("Enter mass:"));

let normal=mass*gravity

let coeficientFriction=parseFloat(prompt("Enter coeficient of friction:"));


let force_friction=coeficientFriction*normal

console.log("Result is:  " + coeficientFriction + " * " + normal + " = " + force_friction );

}
