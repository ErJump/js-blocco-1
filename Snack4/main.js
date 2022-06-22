// Crea un array vuoto, chiedi all'utente di inserire un numero per 7 volte.
// Se il numero è dispari inseriscilo nell'array vuoto.

const array = [];

/* for (let i = 0; i < 7; i++){
    const userInput = parseInt(prompt('inserisci un numero'));
    if (userInput % 2 === 1){
        array.push(userInput);
    }
} */

let i = 0;

while (i<7){
    const userInput = parseInt(prompt('inserisci un numero'));
    if ((userInput % 2 === 1) && (!isNaN(userInput))){
        array.push(userInput);
    };
    i++;
}
console.log(array);