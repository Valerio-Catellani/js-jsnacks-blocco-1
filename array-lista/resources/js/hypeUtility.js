

// console.log(Document.prototype); show all document properties and method
/*
& Purple Comment
! Red Comment
^ Yellow Comment
? Blue Comment
* Green Comment
~ Violet Comment
TODO Orange Comment
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hypeCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} //return a string with capitalize

function isaN(value) {
    return !isNaN(value)
}

function addClass(element, value) {
    value = String(value);
    if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.add(value)
        }
    } else {
        element.classList.add(value)
    }
}