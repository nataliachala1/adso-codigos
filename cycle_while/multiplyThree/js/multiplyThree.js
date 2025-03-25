/*
	Name exercise: counter
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let pair=0;
let odd=0;
let counter=1;


while(counter<=5){

let multiply=1;

while(multiply<=5){

let product=counter*multiply;

console.log(  counter + " x " + multiply + " = " + product );


        if(product%2==0){
		console.log(product +  "is even");

                pair++;
	}
	else{
		console.log(product +  "is odd");

                odd++;
 }
       multiply++;
    }
counter++;
}


            console.log("Number of even numbers:"  + pair);
            console.log("Number of odd numbers:"  + odd);

		