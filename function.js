function sayHelloInside(name="Fareeha") {
    console.log(`Hello ${name}`);
}
function returnHelloStmt(name="Luke") {
    return `Hi ${name}`;

}
function logLargest(num1, num2=100) {
    if (num1 > num2) {
        console.log(`the largest of ${num1} &${num2} is ${num1}`);
    }
    else {
        console.log(`the largest of ${num1} &${num2} is ${num2}`);
    }
}

function returnSmall(num1=5, num2=5) {
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
console.log("........demonstrating Default Value..........");
sayHelloInside();
console.log(returnHelloStmt());
logLargest(11);
console.log(returnSmall());
console.log(returnSmall(2));