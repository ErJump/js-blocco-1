/* 
 * Crea un array vuoto e chiedi all'utente un numero
 * da inserire nell'array. Continua a chiedere i numeri 
 * all'utente e a inserirli nell'array fino a quando 
 * a somma degli elementi è minore di 50.
 * Microbonus: controlla la somma degli elementi usando una funzione che prenda come argomento solo l'array
 */

let array = [];
let number;

while (getSum(array) < 50){
    number = prompt('inserisci un numero');
    array.push(number);
};

function getSum (someArray){
    let result = 0
    for (let i = 0; i < someArray.length; i++){
        const currentNumber = parseInt(array[i])
        if(isNaN(currentNumber) === false){
            result += parseInt(array[i]);
        }
    }
    return result;
}

console.log(array);