
// 2. La coda dell'Array
// Cartella: array_tail
// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

//input
let numberOfElements = document.getElementById("number-of-elements");
let lastNumbers = document.getElementById("last-numbers-input")
//buttons
let generateArrayButton = document.getElementById("generate-array-button");
let cancelButton = document.getElementById("cancel-button");
let lastNumbersButton = document.getElementById("last-numbers-button")
//output
let response = document.getElementById("response");
let arrayOutput = document.querySelector("h4")
//variables
let arrayRandom = [];

generateArrayButton.addEventListener('click', function () {
    let elements = parseInt(numberOfElements.value)
    if (isNaN(elements)) {
        alert("Devi inserire un numero valido!")
    } else {
        arrayRandom = [];
        for (let i = 0; i < elements; i++) {
            arrayRandom.push(getRndInteger(1, 100))
        }
        arrayOutput.innerHTML = `[${arrayRandom}]`;
        document.querySelector("#array-creation").classList.add("d-none");
        document.querySelector("#last-numbers").classList.remove("d-none");

    }
})

lastNumbersButton.addEventListener('click', function () {
    lastNumbers.value = parseInt(lastNumbers.value);
    if (lastNumbers.value > arrayRandom.length) {
        alert(`assicurati che il numero inserito(${lastNumbers.value}) non superi la lunghezza dell'array generato (${arrayRandom.length})`)
    } else {
        let newArray = arrayRandom.slice(arrayRandom.length - lastNumbers.value)
        response.innerHTML = `gli ultimi ${lastNumbers.value} numeri sono ${newArray}`
    }
})


cancelButton.addEventListener('click', function () {
    document.querySelector("#array-creation").classList.remove("d-none");
    document.querySelector("#last-numbers").classList.add("d-none");
    arrayRandom = [];
    arrayOutput.innerHTML = lastNumbers.value = numberOfElements.value = ``;
})
