// ? SNACK 1

/ # L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore. /


const userNumber = parseInt(prompt('Inserisci primo numero',));
const userNumbers = parseInt(prompt('Inserisci secondo numero',));

console.log('Primo Numero', userNumber);
console.log('Secondo Numero', userNumbers);


if (userNumber > userNumbers) {

    console.log('Il numero > è', userNumber)

} else if (userNumber < userNumbers) {

    console.log('Il numero > è', userNumbers)

} else {

    console.log('I numeri sono =')

}