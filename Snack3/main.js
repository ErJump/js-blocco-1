/**
 * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
 * Chiedi all'utente il suo nome e comunicagli se può partecipare oppure no alla festa.
 */


const invitati  = ['sofia', 'gianna', 'luigina', 'lorenza' ,'luigi', 'stefano', 'simone', 'marco', 'chiara', 'riccardo'];

const userInput = prompt('Inserisci il tuo nome');



let nameCheck = false;
/* for (let i = 0; i < invitati.length; i++){
    if (userInput === invitati[i]){
        nameCheck = true;
    }
} */

let i = 0;

while ((i<invitati) && (userInput === false)){
    if (userInput === invitati[i]){
        nameCheck = true;
    };
    i++;
}

if (nameCheck === true){
    alert('Sei stato invitato');
} else {
    alert('Non sei stato invitato');
}