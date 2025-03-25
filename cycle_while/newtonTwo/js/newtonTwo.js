/*
	Name exercise: counter
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let sum_total = 0;
let calculate = 0;
let planet1 = 9.8;
let planet2 = 3.71;
let planet3 = 24.79;

let mass=parseFloat(prompt("Enter mass of object :"));
 
while(mass<0){
   mass=parseFloat(prompt("enter mass positive :"));
} 
    while(true){

console.log("Selecciona el planeta:")

console.log("1: planet1:9,8" );
console.log("2: planet2:3.71" );
console.log("3: planet3:24.79" );

let numberplanet=parseFloat(prompt("Enter number of planet (1, 2, or 3:"));

let gravity;
 
if(numberplanet==1){
         gravity=planet1;
   
   }else if(numberplanet==2){
         gravity=planet2;

     } else if(numberplanet==3){
         gravity=planet3;
}

else{
            console.log("Opcion invalida:");
 continue;
}

let weight=mass*gravity;

console.log("Planet selecionado:" + numberplanet);

sum_total+=weight;
calculate++;

 console.log("Total sum weigth:" + sum_total.toFixed(2) + "N");
console.log("Total calculates:" + calculate);
break;

}