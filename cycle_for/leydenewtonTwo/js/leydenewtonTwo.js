/*
	Name exercise: counter for
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let counter=0;
let forces=[];
let cal=0;


let n=parseInt(prompt("Enter the value of net applied forces:"));

                       for(counter=0;counter<n;counter++){

let netForces=parseFloat(prompt("Enter forces net:"));
 
forces.push(netForces);

console.log("net force:" + netForces );


                if(netForces==0){
		console.log("The object remains at rest or in uniform motion");

	}
	else{
		console.log("The object experiment a change in its motion");

        }

    }

 for(cal=0;cal<forces.length;cal++){

console.log("Forces nets enter:" + forces.length);
}


