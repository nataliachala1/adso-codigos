/*
	Name exercise: counter for
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let counter=0;
let gravity=9.8;



let num_angle=parseFloat(prompt("Enter number of angles a calculate :"));

                   for(counter=0;counter<num_angle;counter++){


let mass=parseFloat(prompt("Enter mass:"));

let range_angle=parseFloat(prompt("Enter range of angle:"));
                                        
                           let angle_radians=range_angle*(Math.PI/180);

let parralel_force=mass*gravity*Math.sin(angle_radians);



console.log("Result is:  " + mass + " * " + gravity + " * " + range_angle + " = " + parralel_force );

}