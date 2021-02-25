var nome = prompt("Come ti chiami?")

var cognome = prompt("Qual è il tuo cognome?")

var colore = prompt("Qual è il tuo colore preferito?")

var combo = nome + cognome + colore + "27";

document.getElementById('passwordGenerata').innerHTML = "La tua nuova e sicurissima password è: " + combo;
