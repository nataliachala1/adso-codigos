/*
	Name exercise: counter
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/


let worked_days=parseFloat(prompt("Enter the days worked :"));

let value_day=parseFloat(prompt("Enter the value of the day :"));

let salary=worked_days*value_day;

let health=salary*0.12
let pension=salary*0.16
let arl=salary*0.0052

let descointTotal= health + pension + arl;

let netSalary=salary-descointTotal;

console.log("Salary:" + salary);
console.log("Health:" + health);
console.log("Pension:" + pension);
console.log("Arl:" + arl);
console.log("Descoint total:" + descointTotal);
console.log("Net salary:" + netSalary);