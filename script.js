// INFORMAZIONI

const kmPrice = 0.21;
let outputText;

const distance = parseInt(prompt("Quanti Km vuoi percorrere?", "50"));
console.log("distance", distance);
if (isNaN(distance)) {
  alert("Distanza non corretta");
} else {
  const ages = parseInt(prompt("Quanti anni hai?", "18"));
  console.log("ages", ages);
  if (isNaN(ages)) {
    alert("Età non corretta");
  } else {
    const price = distance * kmPrice;
    console.log("price", price);
    if (ages < 18) {
      const discount20 = (price * 20) / 100;
      outputText = price - discount20;
    } else if (ages > 65) {
      const discount40 = (price * 40) / 100;
      outputText = price - discount40;
    } else {
      outputText = price;
    }
    alert("Il prezzo del biglietto è €" + outputText.toFixed(2));
  }
}
