console.log(" WHILE alleven numbers 10 and 16");
let j = 9;
while (j <= 16) {
    j++;
    if (j % 2 == 1) {
            continue;
    }
    
    console.log(j);
    j++;
    
}


console.log(" WHILE odd between 33 and 45 {reverse)");
let i = 44;
while (i >= 33) {
    i--;
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
    i--;
}
console.log(" WHILE %10 equals 5 ::All 50 to 100");
let k=50;
while(k<=100){
    k++;
    if(k%10!=5){
        continue
    }
    console.log(k);
    k++;
}