// try using some other operators: % (remainder or modulus), compound operator *= += /= -/, unary x++ (postfix), ++x (prefix), -- 

// try comparing myVariable and myOtherVariable using comparison: == (value) and === (value and type)
let myVar="10";
let myOtherVar="15";
console.log("Before converting both into Numbers");
console.log(myVar%myOtherVar);
console.log(myVar*myOtherVar);
console.log("After converting both into Numbers");
myVar=Number(myVar);
myOtherVar=Number(myOtherVar);
console.log(myVar%myOtherVar);
console.log(myVar*myOtherVar);

//===compare only datatype
//compare value and datatype
 
let x="hi";
let y="hello";
let xDt=typeof x;
let yDt=typeof y;
let arethesameDt=(xDt == yDt);
console.log(arethesameDt);
let aretheSameValue=(x==y);
console.log(aretheSameValue);
y="hi";
let aretheSameValueAndDt=(x===y);
console.log(aretheSameValueAndDt);


