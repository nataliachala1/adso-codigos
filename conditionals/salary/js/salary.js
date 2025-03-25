/*
	Name exercise: age
	Description: age
	Autor: NataliaCh
	Date: march 15th 2025
*/
let salary=1480000;
let salaryMin=1480000;
let subsidyTransport=150000; 
let health_porcentage = 0.12;
let pension_porcentage = 0.16;
let arl_porcentage = 0.052;
let retention_porcentage = 0.04;

       if(salary<2 * salaryMin){
        salaryMin += subsidyTransport

 let   descoint_health = salary * health_porcentage;
 let   descoint_pension = salary * pension_porcentage;
 let   descoint_arl = salary * arl_porcentage;

      if(salary > 4 * salaryMin){
        retention = salary - retention_porcentage
}    else{
        retention = 0;
}
   let salary_total = salary - descoint_health  - descoint_pension - descoint_arl - retention;

console.log(" Salary total is:" +salary_total);
}