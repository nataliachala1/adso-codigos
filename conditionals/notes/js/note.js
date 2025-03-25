/*
	Name exercise: age
	Description: age
	Autor: NataliaCh
	Date: march 15th 2025
*/


 let note1=3;
 let note2=5;
 let note3=9;
 let clasification;
    
   let percentage_note1 = note1 * 0.20;
   let percentage_note2 = note2 * 0.35;
   let percentage_note3 = note3 * 0.45;

       let note_final = percentage_note1 + percentage_note2 + percentage_note3;


    if(note_final> 4.5){
        clasification = "Nota Superior";
}
    else if(nota_final == 3.5){
        clasification = "Nota Buena";
}
    else if(nota_final>= 3){
        clasification = "Nota Media";
}
    else{
        clasification = "Nota Mala";
}


console.log("Note final:" + note_final);
console.log("Clasificatión:" + clasification);




