// Il software deve chiedere per 10 volte all'utente di inserire un numero, il programma stampa la somma di tutti i numeri inseriti e la media.

let userResult = 0;

for (i = 0 ; i < 10; i++){
    userInput = parseInt(prompt('Inserisci un numero - ciclo ' + i));
    userResult += userInput;  
    console.log(userResult); 
}

console.log('la somma è: '+ userResult);
console.log('la media è: ' + (userResult / 10));