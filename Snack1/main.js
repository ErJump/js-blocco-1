// L'utente inserisce due numeri in sucessione, con due Prompt. Il software stampa il maggiore. (Se sono uguali? => scegliete voi)

const userFirstInput = parseInt(prompt('inserisci il primo numero'));
const userSecondInput = parseInt(prompt('inserisci il secondo numero'));

if(isNaN(userFirstInput) || isNaN(userSecondInput)){
    console.log('Non hai inserito dei numeri, ricarica la pagina');
} else {
    if (userFirstInput > userSecondInput){
        console.log(userFirstInput); 
    } else if (userFirstInput === userSecondInput){
        console.log('sono uguali');
    } else {
        console.log(userSecondInput);
    }
};