let array1 = new Array();
array1.push('a');
array1.push('b');
array1.push('c');
console.log("reverse order printing")
for (let i = array1.length; i >= 0; i--) {
    console.log(array1[i]);

}
let array2 = new Array(1, 12, 3, 14);
array2.push(15);
console.log("even index printing");
for (let i = 0; i < array2.length; i++) {
    if (i % 2 == 0) {
        console.log(`${array2[i]} at ${i}`);
    }

}
console.log("even value printing using for of")
for (let eachElement of array2) {
    if (eachElement % 2 == 0) {
        console.log(eachElement);
    }
}

let array3 = [];
console.log("greter than or equal to 10")
for (const eachElement of array2) {
    if (eachElement >= 10) {
        array3.push(eachElement);
    }
}
console.log(array3);