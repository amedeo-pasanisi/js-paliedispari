// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("inserisci una parola");

function palindroma (string) {
    var reverseString = string.toLowerCase().split('').reverse().join('');
    console.log(reverseString)
    
    if (string === reverseString) {
        return "parola palindroma"
    }
    return "parola non palindroma"
}

console.log(palindroma(parola));