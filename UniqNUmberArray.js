let numbers = [1, 2, 3, 4, 1, 5, 2, 4];
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(uniqueNumbers.includes(number)){
        continue;
    }
    uniqueNumbers.push(number)
}
console.log(numbers);
console.log(uniqueNumbers);