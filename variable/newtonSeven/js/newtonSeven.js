/*
	Name exercise: counter
	Description: counter
	Autor: NataliaCh
	Date: march 15th 2025
*/

let massWeapon=parseFloat(prompt("Enter the mass of weapon :"));
let massBullet=parseFloat(prompt("Enter the mass of bullet :"));

let velocityBullet=parseFloat(prompt("Enter the velocity of bullet :"));

let velocityRetroceso=(massBullet*velocityBullet)/massWeapon;


             console.log("The velocity of retroceso is:" + velocityRetroceso);