let color = "blue";
let price =19000;
if (price > 50000) {
    if (color == "red") {
        console.log(" yes  the price is over 50000 and the color is red :i like red cars");
    } else {
        console.log(" he price is over 50000 and the color is not red:thats too expensive");
    }
}
else {
    if (price > 10000) {
        if (color == "blue") {
            console.log(" the price is under 50000 but over 10000 and the color is blue :i like blue cars too");
        } else if (color == "red") {
            console.log("the price is under 50000 but over 10000 and the color is red: i like red cars and this one is bargain");
        }
    }


    else if (price < 10000) {
        console.log("wow,what a bargain");
    }
}

