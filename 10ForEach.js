//Declare an array of objects with properties name and age. 
let pets = [
    { name: "dog", age: 10 },
    { name: "cat", age: 15 },
    { name: "dog", age: 2 }];
    console.log( "print the name and age of the object to the console");
console.log("Use an array.forEach  to iterate each object ");
pets.forEach(pet => console.log(`${pet.name} ${pet.age}`));
    
console.log("Do the same using a  for..of loop");
for (const pet of pets) {
    console.log(`${pet.name} ${pet.age}`);
}
console.log("Do the same using a for LOOP");
for (let i = 0; i < pets.length; i++) {
   
    console.log(`${pets[i].name} ${pets[i].age}`);
}