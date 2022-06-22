/* 
 * Dare la possibilità di inserire due parole. Verificare tramite 
 * una funzione che le due parole abbiano la stessa lunghezza. 
 * Se hanno la stessa lunghezza, stamparle entrambe 
 * altrimenti stampare la più lunga delle due.
*/

const firstWord = prompt('Inserisci una parola');
const secondWord = prompt('Inserisci un\'altra parola');

function confrontaParola(word1 , word2){
    if (word1.length === word2.length){
        console.log(word1, word2);
    } else if (word1.length > word2.length){
        console.log(word1);
    } else {
        console.log(word2);
    }
};

confrontaParola(firstWord, secondWord);