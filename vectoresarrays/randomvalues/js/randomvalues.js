/*
	Name exercise: Ramdom Values
	Description: Create an N x M matrix with random values
	Autor: Valery Trujillo
	Date: march 25th 2025
*/
function generarMatriz(n, m) {
    let matriz = [];
    
    for (let i = 0; i < n; i++) {
        let fila = [];
        for (let j = 0; j < m; j++) {
            fila.push(Math.floor(Math.random() * 100)); 
        }
        matriz.push(fila);
    }
    
    return matriz;
}

function sumarFilas(matriz) {
    return matriz.map(fila => fila.reduce((a, b) => a + b, 0));
}

function sumarColumnas(matriz) {
    let columnas = new Array(matriz[0].length).fill(0);
    
    matriz.forEach(fila => {
        fila.forEach((valor, j) => {
            columnas[j] += valor;
        });
    });

    return columnas;
}


let N = 7; 
let M = 5; 


let matriz = generarMatriz(N, M);
console.log("Matriz generada:");
console.table(matriz);


let sumaFilas = sumarFilas(matriz);
let sumaColumnas = sumarColumnas(matriz);

console.log("Suma de cada fila:", sumaFilas);
console.log("Suma de cada columna:", sumaColumnas);