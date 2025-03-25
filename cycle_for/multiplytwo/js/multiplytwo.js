/*
	Name exercise: counter for
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/


let counter=1;
let number=9;
let product;

for(counter=1;counter<=5;counter++){
	
	product=number*counter;

	console.log(product);
 
	if(product%2==0){
		console.log("is even");

	}
	else{
		console.log("is odd");
	}	

}
console.log("product:" + product);

