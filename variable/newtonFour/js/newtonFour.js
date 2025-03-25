/*
	Name exercise: counter
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let gravity=9.8;
let weight;

let mass=parseFloat(prompt("Enter the mass of object :"));

weight=mass*gravity;

console.log("The weight of object:" + mass + " * " + gravity + " = " + weight);