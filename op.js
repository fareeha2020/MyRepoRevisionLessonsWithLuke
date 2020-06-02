// let a=1, b=1;
// let c=++a;//pre fix
// let d=b++;//post fix
// console.log(c);
// console.log(d);

//**********DATATYPES AND OPERATORS BEHAVE */
//string originally
console.log("......string to number");
let myVar="hi";
myVar=Number(myVar);
console.log(myVar);
console.log(typeof myVar);
//boolean originally t,f,"",0,null
console.log("......boolean to number");
let myOtherVar=true;
myOtherVar=Number(myOtherVar);
console.log(myOtherVar);
console.log(typeof myOtherVar);
//use concat +
console.log("........using concat+ ");
let myVarAndMyOtherVar=myVar+myOtherVar;
console.log(myVarAndMyOtherVar);
console.log(typeof myVarAndMyOtherVar);
//changing intial values and check datatype
console.log("..........reassigning")
myVar=0;//reassigning
myVar=Boolean(myVar);
console.log(myVar);//reads number zero as false in boolean
console.log(typeof myVar);
myOtherVar=null;
myOtherVar=Number(myOtherVar);
console.log(myOtherVar);//number Null prints 0 undefined prints NaN
console.log(typeof myOtherVar);
myOtherVar="10";
myOtherVar=Number(myOtherVar);
console.log(myOtherVar);
console.log(typeof myOtherVar);
//change operator on mynewothervariable -/*
console.log("....using more operators on myVarandOthervariable");
myVarAndMyOtherVar=myVar-myOtherVar;
console.log(myVarAndMyOtherVar);
console.log(typeof myVarAndMyOtherVar);
myVarAndMyOtherVar=myVar*myOtherVar;
console.log(myVarAndMyOtherVar);
console.log(typeof myVarAndMyOtherVar);


