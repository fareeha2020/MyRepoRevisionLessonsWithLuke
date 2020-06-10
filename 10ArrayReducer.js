 console.log("....... numbers and use the array.reduce method to find the smallest number in the array");
let numArray=[20,30,4,1,-100];
let numObject=[{age:20},{age:200},{age:120},{age:2}]
let smallNum=numArray.reduce((currentMax,currentValue)=>Math.min(currentMax,currentValue));
console.log(smallNum);
let smallAge=numObject.reduce((currentMax,currentValue)=>Math.min(currentMax,currentValue.age),numObject[0].age);
console.log(smallAge);
let stringArray=["Apple","Banana","PineApple"]
 console.log(".....to find the length of the longest string in the array");
 let longString=stringArray.reduce((accumulator,value)=>accumulator>value.length.length?accumulator:value.length,0);
console.log(longString);

 console.log(" .....objects called bankers. Each should have a name (string) and netWorth (number). Use the array.reduce method to find the total netWorth of all the bankers");
let bankers=[{name:"bank1",netWorth:24},{name:"bank2",netWorth:24},{name:"bank3",netWorth:12}];
let totalNetworth=bankers.reduce((currentSum,currentValue)=>currentSum+currentValue.netWorth,0);
console.log(totalNetworth);
let average=totalNetworth/bankers.length;
console.log(average);
//Then use that number to calculate the average netWorth of all the bankers.