/*
	Name exercise: LeydeNewtonTwo
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let weight;
let counter=0;
let gravity=[earth=9.8,mars=3.7,jupiter=24.8,moon=1.6];


let mass=parseFloat(prompt("Enter mass of object:"));

for(let planet in gravity){

weight=mass*gravity[planet];

console.log("Weigth on " + planet +": " + mass + " * " + gravity[planet] + " = " + weight);
}