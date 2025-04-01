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

let outputText;

// ALGORITMO
if (!isNaN(distance) && !isNaN(ages)) {
  if (ages < 18) {
    outputText = price - discount20;
  } else if (ages > 65) {
    outputText = price - discount40;
  } else {
    outputText = price;
  }
} else {
  alert("Inserisci un numero");
}

alert("Il prezzo del biglietto è €" + outputText.toFixed(2));
