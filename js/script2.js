// ? SNACK 2

// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


const firstWord = prompt('Inserisci la prima parola', 'casa').trim();
const secondWord = prompt('Inserisci la seconda parola', 'appartamento').trim();

if (firstWord.leght > secondWord.leght) {

    console.log(secondWord, firstWord)

} else if (firstWord.leght < secondWord.leght) {

    console.log(firstWord, secondWord)

} else ('Sono uguali') 
