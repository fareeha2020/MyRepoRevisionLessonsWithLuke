function sayHelloInside(name) {
    console.log(`Hello ${name}`);
}
function returnHelloStmt(name) {
    return `Hi ${name}`;

}
function logLargest(num1, num2) {
    if (num1 > num2) {
        console.log(`the largest of ${num1} &${num2} is ${num1}`);
    }
    else {
        console.log(`the largest of ${num1} &${num2} is ${num2}`);
    }
}

function returnSmall(num1, num2) {
    if (num1 < num2) {
        return `the smallest of ${num1} &${num2} is ${num1}`;
    }
    else {
        return `the smallest of ${num1}& ${num2} is ${num2}`;
    }
}
sayHelloInside("fareeha");
console.log(returnHelloStmt("Tom"));
logLargest(11, 10);
console.log(returnSmall(22, 14));