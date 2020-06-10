console.log(".......an array of strings into an array of the length of each of those strings");
let stringArray=["Apple","Banana","PineApple"]
console.log(stringArray.map(element=>element.length));
 console.log(".......numbers. Use the array.map function to add 5 to each of those numbers");
 let numArray=[20,30,4,1];
 console.log(numArray.map(element=>element+5));
 console.log("......people with properties firstName and lastName. Use the array.map function to create an array of the full names");
 let people=[{firstName:"name1",lastName:"FIRST"},{firstName:"name2",lastName:"SECOND"},{firstName:"name3",lastName:"THIRD"}];
 console.log(people.map(person=>person.firstName+"  "+person.lastName));
//pets with properties name (string), age (number) and owner (object with name and age
 console.log(".......  Use the array.map function to get an array of the names of all the owners");
 
 let pets=[{name:"dog",age:10,owner:{name:"owner1",age:30}},
 {name:"cat",age:15,owner:{name:"owner2",age:20}},
 {name:"dog",age:2,owner:{name:"owner3",age:30}}]
 console.log(pets.map(pet=>pet.owner.name));