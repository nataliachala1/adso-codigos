/*
	Name exercise: counter
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/


let sumtotal=0;
let calculate=0;

let appliedForce=parseFloat(prompt("Enter force applied :"));

while(appliedForce!==0){

let reactionForce=-appliedForce;

console.log("Force of reaction:" + reactionForce);

sumtotal+=appliedForce;
calculate++;

appliedForce=parseFloat(prompt("Enter new force applied :"));
}

console.log("Sum total of applied forces:" + sumtotal);
console.log("Numbers of forces enter:" + calculate);
 
