let pet={
    name:"dog",
    age:10,
}
pet.owners=["person1","person2","person3"];
console.log(" printing owners array of object pet ")
for (let i = 0; i < pet.owners.length; i++) {
    console.log(pet.owners[i]);    
}
let object1=new Object();
object1["firstName"]="Fareeha";
object1.lastName="Farhath";
for (const key in object1) {
   console.log(`The property name ${key} has value ${object1[key]}`);     
    }
