// Pari e Dispari

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariDispari (num) {
    if (num % 2 == 0) {
        return "pari";
    }
    return "dispari";
}

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var utente = prompt("inserisci 'pari' o 'dispari'");
var numeroUtente = parseInt(prompt("inserisci un numero tra 1 e 5 inclusi"));
var numeroComputer = rndNum(1, 5);
console.log("hai scelto " + utente)
console.log("numero utente: " + numeroUtente);
console.log("numero computer: " + numeroComputer);

// Sommiamo i due numeri
var somma = numeroUtente + numeroComputer;
console.log("somma: " + somma);
console.log(somma + " è un numro " + pariDispari(somma));

// Dichiariamo chi ha vinto.
if (pariDispari(somma) == utente) {
    console.log("hai vinto!");
} else {
    console.log("ha vinto il computer :(");
}