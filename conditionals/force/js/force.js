/*
	Name exercise: force
	Description: force
	Autor: NataliaCh
	Date: march 15th 2025
*/


      let mass=parseFloat(prompt("ingresa mass:"));
     let acceleration=parseFloat(prompt("ingresa acceleration:"));

      let force = mass * acceleration;

        if(force>=100){
            console.log("La fuerza es alta.")
        }else{
            console.log("La fuerza es baja.")
}
