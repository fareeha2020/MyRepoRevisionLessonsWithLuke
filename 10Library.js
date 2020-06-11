let books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        yearOfPublication: 1997,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "426ef1f8-59fc-40c8-8e0b-6943848be1ac"
    }, {
        title: "Harry Potter and the Chamber of Secrets",
        yearOfPublication: 1998,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "ce215083-e77d-4ead-917e-680d11443b69"
    }, {
        title: "Harry Potter and the Prisoner of Azkaban",
        yearOfPublication: 2000,
        authorId: "7e7354b8-59e8-4b6a-916b-70882eab6fb6",
        bookId: "6454c991-985e-4f1c-b390-76ef4293f6ba"
    }, {
        title: "The Hobbit",
        yearOfPublication: 1937,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "fa7cb9a8-0f81-4205-8650-64225d7c1de4"
    }, {
        title: "The Fellowship of the Ring",
        yearOfPublication: 1954,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "752b80b5-7b9f-454d-b1d0-b274480d9ad2"
    }, {
        title: "The Two Towers",
        yearOfPublication: 1954,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "ba86fdd0-1ac2-4867-a0fa-d1b1bd7de403"
    }, {
        title: "The Return of the King",
        yearOfPublication: 1955,
        authorId: "184c518a-753f-49ce-9abb-e2e9c29fc980",
        bookId: "64e58f34-94b3-4dd5-9701-d00513f83291"
    }
];

let authors = [
    {
        firstName: "J. K.",
        lastName: "Rowling",
        id: "7e7354b8-59e8-4b6a-916b-70882eab6fb6"
    }, {
        firstName: "J. R. R.",
        lastName: "Tolkien",
        id: "184c518a-753f-49ce-9abb-e2e9c29fc980"
    }
];
//title of all books ordered by pub year;
function getBooks() {
    let sortByYearOfPub = books.sort((book1, book2) => book1.yearOfPublication - book2.yearOfPublication);
    return sortByYearOfPub.map(b=>`Title: ${b.title} year :${b.yearOfPublication}`);
    }
console.log(getBooks());

function getBook(byBookId) {
   return books.find(b=>(b.bookId==byBookId));
}
//     for (const book of books) {
//         if (book.bookId == byBookId) {
//             return `The book name  is ${book.title}`;
//         }
//     }
// }

let book=getBook("64e58f34-94b3-4dd5-9701-d00513f83291");//king
console.log(`The book name  is ${book.title}`);

function getAuthor(byAuthorId) {
    return authors.find(a=>(a.id==byAuthorId));}
//     for (const author of authors) {
//         if (author.id == byAuthorId) {
//             return `The Author Name is ${author.firstName} ${author.lastName}`;
//         }
//     }
// }
let author=getAuthor("7e7354b8-59e8-4b6a-916b-70882eab6fb6");
console.log(`The Author Name is ${author.firstName} ${author.lastName}`);
//returns an array of all the books written by that author in order of the year of publication.
function getBooksByAuthor(byAuthorId) {
    let allBooks= books
    .filter(b=>b.authorId==byAuthorId)
    .sort((book1,book2)=>book1.yearOfPublication-book2.yearOfPublication)
   return allBooks;
}

    // let allBooks = [];
    // for (const book of books) {
    //     if (book.authorId == byAuthorId) {
    //         allBooks.push(book.title);
    //     }    // }
       // let sorted= allBooks.sort((book1,book2)=>book1.yearOfPublication-book2.yearOfPublication);
    // return sorted;



console.log(getBooksByAuthor("7e7354b8-59e8-4b6a-916b-70882eab6fb6"));//by author Id J.K Rowling
console.log(getBooksByAuthor("184c518a-753f-49ce-9abb-e2e9c29fc980"));//by other author
console.log(" The function should return all books where the title or author name contains the given string.");
function searchBooks(searchTerm){
 let term=searchTerm.toLowerCase();
 let array1=  books.filter(b=>(b.title.includes(term)));//filtering books
   let array2=authors.filter(a=>(a.firstName.includes(term)||a.lastName.includes(term)));//
  let all=array1.concat(array2);
   return all;
   }
   console.log(searchBooks("ing"));
//    let array1=  books.filter(b=>(b.title.includes("the")));
//    console.log(array1);
//...........LUKES LUKES LUKES................//returns authors books by author name 
function searchBuks(searchTerm) {
    function termAppearsInBooksOrAuthor(book) {
        let lowerSearchTerm = searchTerm.toLowerCase();

        let author = getAuthor(book.authorId);
        return book.title.toLowerCase().includes(lowerSearchTerm) ||
            author.firstName.toLowerCase().includes(lowerSearchTerm) ||
            author.lastName.toLowerCase().includes(lowerSearchTerm);

    }

    return books.filter(termAppearsInBooksOrAuthor);
}

function sortBooks(sortField) {
    function sortByField(book1, book2) {
        if (book1[sortField] > book2[sortField]) {
            return 1;
        } else if (book1[sortField] < book2[sortField]) {
            return -1;
        } else {
            return 0;
        }
    }

    return books
        .sort(sortByField)
        .map(book => book.title);
}
console.log("...LUKES SEARCH BOOK")
console.log(searchBuks("j"));

// console.log(sortBooks("title"));
