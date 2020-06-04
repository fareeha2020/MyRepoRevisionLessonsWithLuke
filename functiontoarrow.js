const sayHelloInside=(name)=> console.log(`Hello ${name}`);

const returnHelloStmt=(name)=> `Hi ${name}`;


const logLargest=(num1, num2)=>{
    if (num1 > num2) {
        console.log(`the largest of ${num1} &${num2} is ${num1}`);
    }
    else {
        console.log(`the largest of ${num1} &${num2} is ${num2}`);
    }
}

const returnSmall=(num1, num2) =>{
    if (num1 < num2) {
        return `the smallest of ${num1} &${num2} is ${num1}`;
    }
    else {
        return `the smallest of ${num1}& ${num2} is ${num2}`;
    }
}
sayHelloInside("Zoya");
console.log(returnHelloStmt("Tom"));
logLargest(11, 10);
console.log(returnSmall(22, 14));




    