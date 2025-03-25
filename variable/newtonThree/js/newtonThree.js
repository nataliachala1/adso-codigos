/*
	Name exercise: counter
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let acceleration;

let force=parseFloat(prompt("Enter the force applied :"));

let mass=parseFloat(prompt("Enter the mass of car :"));
   
        acceleration=force/mass;

console.log("The acceleration of car is:" + force + " / " + mass + " = " + acceleration);