let people = [{ firstName: "Tim", lastName: "Tam", age: 10 },
{ firstName: "firstname2", lastName: "longerlastname2", age: 30 },
{ firstName: "Luke", lastName: "Parker", age: 27 },]
///........FIND AND FILTER ALWAYS RETURNS TRUE,BUT NOT MAP
function function1(element) {
    if (element.age < 18) {
        return true;
    }
}
function function2(element) {
    if ((element.lastName.length) + (element.firstName.length) >= 10) {
        return true;
    }

}
function function3(element) {
    if (element.lastName.length > element.firstName.length) {
        return true;
    }
}
console.log("the first person that is under 18 years old and log their full name...");
let person = people.find(function1);
console.log(`${person.firstName} ${person.lastName}`)

console.log("..an array of all the people that have more than 10 characters in their first and ");
console.log("last names combined (eg. Luke Parker has exactly 10 characters and should not be included...");
const combinedMore10 = people.filter(function2);
for (const each of combinedMore10) {
    console.log(`${each.firstName} ${each.lastName}`);
}
console.log("all the people that have their last name longer than their first name...");
const longerLNames = people.filter(function3);
//console.log(longerLNames);
for (const each of longerLNames) {
    console.log(`${each.firstName} ${each.lastName}`);

}
