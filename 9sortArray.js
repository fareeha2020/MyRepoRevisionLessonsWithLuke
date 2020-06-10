let array1=[20,100,450,600,20,22,8769];
console.log(array1.sort((a,b)=>b-a));//value of b-a returns negative
let events = [
    {
        name: "Went on holiday",
        month: 3,
        year: 2019
    }, {
        name: "Got first car",
        month: 5,
        year: 2015
    }, {
        name: "Moved out of home",
        month: 11,
        year: 2019
    }
];
// function byYear(event1,event2){
//     return event1.year-event2.year;
// }
let chronologicalOrder=events
.sort((event1,event2)=>event1.month-event2.month)
.sort((event1,event2)=>event1.year-event2.year)
console.log(chronologicalOrder);
console.log(" Sort the following array in alphabetical order by last name, then by first name");
let people = [
    {
        firstName: "Margaret",
        lastName: "Cox"
    }, {
        firstName: "Aaryan",
        lastName: "Bauer"
    }, {
        firstName: "Asma",
        lastName: "Bauer"
    }, {
        firstName: "Jazmin",
        lastName: "Flowers"
    }
];
let stringArray=["Boy","Ant","Cat","Apple"]
  const s= stringArray.sort();//sorts by default?
   console.log(s);

function byLastName(p1,p2){
let person1=p1.lastName.toLowerCase();
let person2=p2.lastName.toLowerCase();
if(person1<person2){
    return -1;
    if(person1>person2){
        return 1;
    } 
     //  equal
    return 0;
  }}
  function byFirstName(p1,p2){
    let person1=p1.firstName.toLowerCase();
    let person2=p2.firstName.toLowerCase();
    if(person1<person2){
        return -1;
        if(person1>person2){
            return 1;
        }  // equal
        return 0;
      }}
    
let sortedNames=people
.sort(byLastName)
.sort(byFirstName);
console.log(sortedNames);
