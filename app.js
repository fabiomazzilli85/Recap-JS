// // // Prendo una variabile e la incremento di 1 fino a che è vera la condizione per cui la variabile è <=20.
// // // Alert manda a schermo i numeri da 0 a 20.
// // // Quando la variabile è ===5, mando a schermo un messaggio: "Numero 5"
// // for (let i = 0; i <= 20; i++) {
// //     alert(i);
// //     if (i === 5) {
// //       alert("Numero 5");
// //     }
// //   }


// // // Creo un Array di nomi. A questo Array ne aggiungo uno (Egiziago) con il metodo "push". 
//   const names = ["Francesco", "Luca", "Giovanni", "Donato", "Laura", "Ettore"];
// //   console.log(names[5]);  //Mostro in console l'elemento corrispondente all'indice 5, ovvero Ettore.
//   names.push ("Egiziago"); //All'Array aggiungo un elemento, Egiziago, che è correttamente visualizzato in console.log.
// //   console.log(names);


// // Ho visto un orologio usato molto bello. Il venditore vuole venderlo a 500 Euro ma per me è troppo. Se è disposto a scendere sotto i 500 Euro possiamo inizare una trattativa. Se invece vuole vendermelo a 340 Euro lo compro subito.
// let prezzo = parseInt(prompt("Qual è la tua richiesta per l'orologio?"));
// if (prezzo >= 500) {
//     console.log("Mi dispiace, dico no...");
// } else if (prezzo < 500 && prezzo > 350) {
//     console.log("Ok, parliamone...");
// } else if (prezzo <= 340) {
//     console.log("Va bene, lo compro.");
// }


// Hai visto una bella ragazza. L'avvicini per parlarle e scopri che ti piace. Vi fidanzate. Passa un anno e lei vuole sposarti ma tu fai le tue valutazoini.
// let numeroFigli = parseInt(prompt("Amore, quanti figli vuoi che facciamo?"));
// if (numeroFigli > 5) {
//     console.log("Ho appena capito di essere gay. Mi dispiace. Addio.");
// } else if (numeroFigli <= 5 && numeroFigli > 2) {
//     console.log("Parto verso l'orizzonte, ma non preoccuparti, userò Google Maps per non perdermi! Arrivederci.");
// } else if (numeroFigli <= 2 && numeroFigli === 1) {
//     console.log("Va bene, parliamone.");
// } else if (numeroFigli === 0 ) {
//     console.log("Questa donna è così unica che se fosse un numero intero, sarebbe un NaN (Not a Number).");
// }


// Esempio di un array
// let numeri = [1, 2, 3, 4, 5];

// // Esempio di un oggetto
// let persona = {
//   nome: "Mario",
//   cognome: "Rossi",
//   eta: 30,
//   professione: "Ingegnere"
// };

// // Accesso agli elementi dell'array
// console.log(numeri[0]); // Stampa: 1

// // Accesso alle proprietà dell'oggetto
// console.log(persona.nome); // Stampa: Mario
// console.log(persona["cognome"]); // Stampa: Rossi

// // Modifica di un elemento dell'array
// numeri[0] = 10;
// console.log(numeri); // Stampa: [10, 2, 3, 4, 5]

// // Modifica di una proprietà dell'oggetto
// persona.professione = "Programmatore";
// console.log(persona); // Stampa: { nome: 'Mario', cognome: 'Rossi', eta: 30, professione: 'Programmatore' }


//  Questo è un Object. Userò il desctucturing per rendere il codice più pulito.
// Dichiaro una variabile, "me", al cui interno inserisco alcuni elementi (name, cognome, eta, nazionalita) che contengono un valore.
const me = {name: 'Fabio', cognome: 'Mazzilli', eta: 39, nazionalita: 'italiana'};
// console.log(me) OK

// Questo è invece il desctucturing. Dichiaro una variabile, inserisco {name, congmome, eta, nazionalita} = me. 
const {name, cognome, eta, nazionalita} = me;
// console.log(me) OK

// Questo è  un Array. Userò il desctucturing per rendere il codice più pulito. Al posto delle parentesi graffe, si usano le parentesi quadre.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, second, third, ...rest] = numbers;

console.log(first)
console.log(second)
console.log(third)
console.log(rest)

