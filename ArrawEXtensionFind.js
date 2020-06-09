let nameArray = ["Fname1", "name2", "name3","tim", "tom"];
let numArray = [1, 2, 3, 4,9];
let people = [{ firstName: "Tim", lastName: "Tam", age: 10 },
{ firstName: "firstname2", lastName: "longerlastname2", age: 30 },
{ firstName: "Luke", lastName: "Parker", age: 27 },]

console.log(" first name in the names array that starts with an F");
console.log(nameArray.find(element => element[0] == "F"));
console.log("the first number in the numbers array that is smaller than 10");
console.log(numArray.find(element => element < 10));
console.log("all the names that are 4 or less characters long");
console.log(nameArray.filter(element => {
    for (let i = 0; i < element.length; i++) {
                  return element.length<4;
            }
}
));
console.log("all the numbers in the numbers array that are divisible by 3");
console.log(numArray.filter(element => element%3==0));


console.log("the first person that is under 18 years old and log their full name");
let person=people.find(element =>element.age<18);
console.log(`${person.firstName} ${person.lastName}`)
    
console.log(people.find(element =>{
    if(element.age<18){
    return `${element.firstName} ${element.lastName}`;
}
}));
console.log("an array of all the people that have more than 10 characters in their first and ");
console.log("last names combined (eg. Luke Parker has exactly 10 characters and should not be included");
console.log(people.filter(element =>{
    if((element.lastName.length)+(element.firstName.length)>=10)
    {
        return `${element.firstName} ${element.lastName}`;
    }
}));

console.log("all the people that have their last name longer than their first name");
const longerLNames=people.filter(element =>(element.lastName.length>element.firstName.length));
console.log( `${longerLNames.firstName} ${longerLNames.lastName}`);
 