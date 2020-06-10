let numArray = [3, 5, 2, 10];
let stringArray = ["apple", "banana", "carrot","Orange"];

console.log(`If ALL ELEMENTS meet condition divisible by 5 is ${numArray.every(element => element % 5 != 0)}`);
console.log(`if ANY ELEMENT meet condition begin with Vowel is ${stringArray.some(element => element[0] == "a" || "e" || "i" || "o" || "u")}`);
console.log("print all strings starting with vowels");
let startLetter=['a','e','i','o','u'];
console.log(stringArray.filter(element=>startLetter.includes(element[0].toLowerCase())));
////array.includes(value,index);???????

// Q3 - Create an array of pets (name, age, owner) and use array extension methods to

let pets = [{ name: "dog", age: 10, owner: "Luke" }, { name: "cat", age: 11, owner: "fareeQa" }];
console.log(`whether any of the pets are owned by Luke ${pets.some(element => element.owner == "Luke")}`);


// Q4 - Jimmy is scared of the letter Q, write some code that takes in an array of pet objects
// (name, age, owner) and tells Jimmy's parents if the array contains .
//iterate through all keys in pet
console.log(" any pets that have a name or owner with the letter Q. "); 

// console.log(pets.some(element => {
//     for (const key in element) {
    
//         //console.log(element[key].toString().toLowerCase());
//         if (element[key].toString().toLowerCase().includes('q')) {
//             return true;
//         }
//     }}));

function includeQ(pet){
    for (const key in pet) {
            const element = pet[key].toString().toLowerCase();//checking all values of objcets,
            if(element.includes('q')){
                return true;
            }
            
        }
    }
    let hasq=pets.some(includeQ);
    console.log(hasq);
    // Get all names that start with a,b,c or d
let names = [
    "Alice",
    "Daniel",
    "Luke",
    "Jacinta",
    "Orange"
];

 let namesMatches = names.filter(name => ["a", "b", "c", "d"].includes(name[0].toLowerCase()));
 console.log(["a", "b", "c", "d"].includes(names[0].toLowerCase()));//flase

// console.log(namesMatches);