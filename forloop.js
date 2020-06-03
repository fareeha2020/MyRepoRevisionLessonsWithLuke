let i, j, k, l;
console.log(" printing from 2 to 6");
for (i = 2; i <= 6; i++) {
    console.log(i);
}

console.log("  odd numbers between 10 n 20 ");
for (j = 10; j <= 20; j++) {
    if (j % 2 == 1) {
        console.log(j);
    }
}

console.log(" printing -4 to +3");
for (k = 3; k >= -4; k--) {
    console.log(k);
}

console.log("multiples of 5  between 30 and 75 ");
for (l = 30; l <= 75; l++) {
    if (l % 5 == 0) {
        console.log(l);
    }
}