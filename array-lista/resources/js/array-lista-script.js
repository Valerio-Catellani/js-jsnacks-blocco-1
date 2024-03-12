
// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.

let userInput = document.getElementById("user-input");
let addFruit = document.getElementById("send-button");
let cancelButton = document.getElementById("cancel-button");
let response = document.getElementById("response");
let fridgeOutput = document.querySelector("h3");
let fridge = ["banana", "mela", "pera", "ciliegia", "arancia", "mandarino", "cocomero", "limone", "fragola"];
fridgeContainer();
function fridgeContainer() {
    fridgeOutput.innerHTML = `Frigorifero: ${fridge}`
};




addFruit.addEventListener('click', function () {
    fridge.push(userInput.value.toLowerCase());
    fridgeContainer();
})

cancelButton.addEventListener('click', function () {
    userInput.value = response.innerHTML = "";
    fridge.pop();
    fridgeContainer();
})



