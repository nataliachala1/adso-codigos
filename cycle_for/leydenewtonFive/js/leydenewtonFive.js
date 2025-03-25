/*
	Name exercise: counter for
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let counter=0;
let tension=[];
let gravity=9.8;
let tensioncounter=0;

let numberObjects=parseInt(prompt("Enter number of objects:"));


             for(counter=0;counter<numberObjects;counter++){

let mass=parseFloat(prompt("Enter mass of objects"));


let currentTension=mass*gravity;



tension.push(currentTension);

console.log("tension:" + currentTension);
tensioncounter++;

}


console.log("Tension calculates:" + tensioncounter);