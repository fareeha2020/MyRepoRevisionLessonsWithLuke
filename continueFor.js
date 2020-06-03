console.log("alleven numbers 10 and 16");
for (i = 10; i <= 16; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}
console.log("odd between 33 and 45 {reverse)");
for (j = 45; j >= 33; j--) {
    if (j % 2 == 0) {
        continue;
    }
    console.log(j);
}
console.log(" %10 equals 5 ::All 50 to 100");
for (k = 50; k <= 100; k++) {
    if (k % 10 != 5) {
        continue
    }
    console.log(k);
}
