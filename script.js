// INFORMAZIONI

const distance = parseInt(prompt("Quanti Km vuoi percorrere?", "50"));
console.log("distance", distance);

const ages = parseInt(prompt("Quanti anni hai?", "18"));
console.log("ages", ages);

const kmPrice = 0.21;

const price = distance * kmPrice;
console.log("price", price);

const discount20 = (price * 20) / 100;
const discount40 = (price * 40) / 100;

const final20 = price - discount20;
console.log("final20", final20);

const final40 = price - discount40;
console.log("final40", final40);

let outputText;

// ALGORITMO

if (ages < 18) {
  outputText = final20;
}
if (ages >= 18) {
  outputText = price;
}
if (ages > 65) {
  outputText = final40;
}

alert("Il prezzo del biglietto è €" + outputText.toFixed(2));
