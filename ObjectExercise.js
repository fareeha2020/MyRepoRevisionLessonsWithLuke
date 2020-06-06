let libraries = [
    {
        name: "Libraryname1",
        address: "adress1",
        headLibrarian:
        {
            name: "head librarian1",
            age: 20,
        }
    },
    {
        name: "Librarryname2",
        address: "adress2",
        headLibrarian:
        {
            name: "head librarian2",
            age: 30,
        }
    },
    // {
    //     name:"Libraryname3",
    //     address:"adress3",
    //     headLibrarian:
    //     {
    //     name:"head libraria3",
    //     age:24,
    // }
    //},
];
libraries[0].books = [
    {
        title: "title1",
        author: "author1",
        yearOfPub: 1920,
    },
    {
        title: "title2",
        author: "author2",
        yearOfPub: 2010,
    },
    {
        title: "title3",
        author: "author3",
        yearOfPub: 1980,
    },
    {
        title: "title4",
        author: "author4",
        yearOfPub: 1981,
    }, {
        title: "title5",
        author: "author5",
        yearOfPub: 1984,
    }
];
libraries[1].books = [
    {
        title: "title6",
        author: "author6",
        yearOfPub: 1970,
    },
    {
        title: "title7",
        author: "author7",
        yearOfPub: 2015,
    },
    {
        title: "title8",
        author: "author8",
        yearOfPub: 2020,
    },
    {
        title: "title9",
        author: "author9",
        yearOfPub: 1991,
    }, {
        title: "title10",
        author: "author10",
        yearOfPub: 1990,
    }
];
//console.log(libraries);
console.log("Book titles across all libraries in last 20years");
for (const eachLib of libraries) {
    for (const eachbook of eachLib.books) {
        if (eachbook.yearOfPub < 2000) {
            console.log(eachbook.title);
        }
    }
}

console.log("Book authors across all,librarian under the age 30");
for (const eachEl of libraries) {
    if (eachEl.headLibrarian.age < 30) {
        for (const bookAuthor of eachEl.books) {
            console.log(bookAuthor.author);
        }
    }
}

console.log(" names of libraries:atleast 3 books published before year 2000");
for (const eachLibrary of libraries) {
    let count = 0;
    for (const echBook of eachLibrary.books) {
        if (echBook.yearOfPub < 2000) {
            count++;
        }
    }
    console.log(count);
    if (count >= 3) {
        console.log(eachLibrary.name);
    }
}


