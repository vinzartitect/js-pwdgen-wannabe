/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina: nomecognomecolorepreferito21
*/

const inputName = prompt("inserisci il tuo nome");
const inputSurname = prompt("inserisci il tuo cognome");
const inputColor = prompt("inserisci il tuo colore preferito");

console.log(inputName);
console.log(inputSurname);
console.log(inputColor);

document.getElementById("password").innerText = `la tua password è: ${inputName}${inputSurname}${inputColor}21`;