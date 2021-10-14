//Array de tipos de mancuernas y pesos de las mismas. 
const tiposMancuernas = ["fundicion","hexagonales","plastico","cromadas"];
const pesosMancuerna = [2,4,6,8,10,12,14,16,18,20];
const listaCompleta = tiposMancuernas.concat(pesosMancuerna);
console.log(listaCompleta);


//Calculo de Precio de Mancuernas utilizando metodo Map
const pesosMancuernas = [2,4,6,8,10,12,14,16,18,20]
const precioPorKilo = pesosMancuernas.map(kg =>kg*200);
console.log(precioPorKilo);
//Ingreso de nuevos Pesos de Mancuernas utilizando metodo Push
pesosMancuernas.push(22,24,26,28,30);
console.log(pesosMancuernas);


