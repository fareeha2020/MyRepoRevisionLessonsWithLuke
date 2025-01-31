const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...

    let books = [
        {
            author: "author1",
            title: "title1"
        },
        {
            author: "author2",
            title: "title2"
        },
        {
            author: "author3",
            title: "title3"
        },
        {
            author: "author4",
            title: "title4"
        },];

    function byAuthor(book, stg) {
        for (let i = 0; i < book.length; i++) {
            let element = book[i]; //gets whole elment
            let authorName = element.author;
            //let titleName=element.title;
            if (authorName == stg) {
                return `The Book by ${authorName} is currently available`;
                break;
            }

        }
        return `The Book ${stg} is currently Unavailable`;
    }

    function byTitle(book, stg) {


        for (let i = 0; i < book.length; i++) {
            let element = book[i]; //gets whole elment
            let titleName = element.title;
            if (authortitle == stg) {
                return `The Book by ${titleName} is currently available`;
                break;
            }

        }
        return `The Book ${stg} is currently Unavailable`;

    }
    function addTitleAuthor(author, title) {
        books.push(author, title);

    }
    while (true) {
        console.log("Welcome to Library app");
        console.log("[1] search by Author name");
        console.log("[2] search by Title name");
        console.log("[3] return a Book");
        console.log("[4] Exit");
        let ans = await askQuestion("Enter a number to select an option from the list above");
        if (ans == "1") {
            console.log();
            console.log("You have selected search by Author Name");
            let input1 = await askQuestion("Enter the Author Name: ");
            let x = byAuthor(books, input1);
            console.log(x);
        } else if (ans == "2") {
            console.log();
            console.log("You have selected search by Title ");
            let input1 = await askQuestion("Enter the Title : ");
            let x = byTitle(books, input1);
            console.log(x);

            console.log();
        } else if (ans == "3") {
            console.log();
            console.log("You have selected to Return your book");
            let input1 = await askQuestion("Enter the title");

            let input2 = await askQuestion("Enter the author name: ");
            let addedValue = addTitleAuthor(input1, input2);

            console.log();

        } else if (ans == "4") {
            console.log("Thank you for using this Library console app");
            break;
        } else {
            console.log("Sorry, we couldn't understand your input. Please enter a number from 1 - 4");
        }
    }
}

Program().then(() => {
    process.exit(0);
});