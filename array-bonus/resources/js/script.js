

//input
//buttons
let generateArrayButton = document.getElementById("generate-array-button");
let cancelButton = document.getElementById("cancel-button");
let addElementsButton = document.getElementById("add-elements-button")
//output
let response = document.getElementById("response");
let array1Output = document.querySelector(".first-array h4")
let array2Output = document.querySelector(".second-array h4")
//variables
let array1Random = [];
let array2Random = [];
//function
function compara(element1, element2) {
    if (element1 === element2) {
        addElementsButton.classList.add("disabled");
        addElementsButton.innerText = "I due Array sono lunghi uguali";
    } else if (element1 > element2) {
        addElementsButton.classList.remove("disabled");
        addElementsButton.innerText = "Aggiungi un elemento a Array 2";
    } else {
        addElementsButton.classList.remove("disabled");
        addElementsButton.innerText = "Aggiungi un elemento a Array 1";
    }
}


generateArrayButton.addEventListener('click', function () {
    for (let i = 0; i < getRndInteger(0, 100); i++) {
        array1Random.push(getRndInteger(0, 100))
    }
    for (let i = 0; i < getRndInteger(0, 100); i++) {
        array2Random.push(getRndInteger(0, 100))
    }
    array1Output.innerHTML = `[${array1Random}]`;
    array2Output.innerHTML = `[${array2Random}]`;
    document.querySelector("#array-creation").classList.add("d-none");
    document.querySelector("#add-elements").classList.remove("d-none");
    compara(array1Random.length, array2Random.length)
})

addElementsButton.addEventListener('click', function () {
    let randomNumber = getRndInteger(0, 100)
    if (array1Random.length > array2Random.length) {
        array2Random.push(randomNumber);
        array2Output.innerHTML = `[${array2Random}]`;
        response.innerHTML = `Ho aggiunto ${randomNumber} all'Array 2!`
        compara(array1Random.length, array2Random.length);
    } else {
        array1Random.push(randomNumber);
        array1Output.innerHTML = `[${array1Random}]`;
        response.innerHTML = `Ho aggiunto ${randomNumber} all'Array 1!`
        compara(array1Random.length, array2Random.length);
    }
})


cancelButton.addEventListener('click', function () {
    document.querySelector("#array-creation").classList.remove("d-none");
    document.querySelector("#add-elements").classList.add("d-none");
    array1Random = [];
    array2Random = [];
    array1Output.innerHTML = array2Output.innerHTML = ``;
})
