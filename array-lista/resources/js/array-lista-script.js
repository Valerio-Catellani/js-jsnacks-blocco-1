
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

//input
let insertFruit = document.getElementById("insert-fruit");
let checkFruit = document.getElementById("check-fruit");
//pulsanti
let addFruitButton = document.getElementById("insert-fruit-button");
let cancelButton = document.getElementById("cancel-button");
let checkFruitButton = document.getElementById("check-fruit-button");
//output
let response = document.getElementById("response");
let fridgeOutput = document.querySelector("h4");
//variables
let fridge = ["banana", "mela", "pera", "ciliegia", "arancia", "mandarino", "cocomero", "limone", "fragola"];
//functions
fridgeContainer();
function fridgeContainer() {
    fridgeOutput.innerHTML = fridge
};


addFruitButton.addEventListener('click', function () {
    insertFruit.value = insertFruit.value.toLowerCase();
    if (insertFruit.value && hasAlready(insertFruit.value)) { //& my bonus.
        fridge.push(insertFruit.value);
        fridgeContainer();
    } else {
        alert("Inserisci un frutto nel campo appropriato che non sia già presente!");
    }
})

checkFruitButton.addEventListener('click', function () {
    let fruit = checkFruit.value.toLowerCase();
    let checkFlag = false;
    for (let i = 0; i < fridge.length; i++) {
        fruit === fridge[i] ? checkFlag = true : "";
    }
    response.innerHTML = checkFlag === true ? `${hypeCapitalize(fruit)} Trovato! Devo solo preparare il cocktail.` : `Oh no, devo uscire a comprare il ${fruit}!`
})

cancelButton.addEventListener('click', function () {
    insertFruit.value = insertFruit.value.toLowerCase();

    if (insertFruit.value && !hasAlready(insertFruit.value)) { //& my bonus.
        fridge = fridge.filter(item => item !== insertFruit.value);
        fridgeContainer();
    } else {
        alert(`Non ho trovato ${insertFruit.value} da rimuovere!`);
    }
})


//&My bonus.
function hasAlready(element) {
    for (let i = 0; i < fridge.length; i++) {
        if (element === fridge[i]) {
            return false;
        }
    }
    return true;
}
