
'use strict'

console.log("hello world");

const lizard = {
    Name: "Scabby",
    Age: "Unknown",
    Color: "Brown",
    Size: "Small",
}
console.log(lizard);

const JSONlizard = JSON.stringify(lizard);
console.log(JSONlizard);

localStorage.setItem("lizard", JSONlizard);
console.log(localStorage);

let pet = localStorage.getItem("lizard");
console.log(pet);

const petStore = ['cat', 'dog', 'fish', 'bird', 'spider', 'rat'];
console.log(petStore);

const JSONpet = JSON.stringify(petStore);
console.log(JSONpet);

localStorage.setItem("petstore", JSONpet);
console.log(localStorage);

let store = localStorage.getItem("petstore");
console.log(store);