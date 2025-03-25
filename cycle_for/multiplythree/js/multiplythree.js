/*
	Name exercise: counter for
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let multiply=1;
let counter=1;


for(multiply=1;multiply<=5;multiply++){

console.log("multiply:" + multiply);

for(counter=1;counter<=5;counter++){

let result=multiply*counter;

console.log( "Result is: " + multiply + " x " + counter + " = " + result );

                    if(result%2===0)
                      {
                            console.log("buzz");
     
                     }
                      else{ 
                            console.log("bass");
                     }

}
console.log();
}