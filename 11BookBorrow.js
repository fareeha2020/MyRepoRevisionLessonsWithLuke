// List of all people who can borrow books
let borrowers = [
    {
        id: 1,
        name: "Luke Parker"
    }, {
        id: 2,
        name: "Jacinta Bealle"
    }, {
        id: 3,
        name: "Dan Wills"
        //booksBorrowed:[ array of books],we tend nt to use nested arrays to access from DATABBASE
    }
];
 // List of books that are avaliable to be borrowed
let books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy"
    }, {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        genre: "Fantasy"
    }, {
        id: 3,
        title: "The Hitchhiker's Guid to the Galaxy",
        genre: "Comedy"
    }
];
 // List of all books currently being borrowed
let bookBorrowers = [
    {
        borrowerId: 1,
        bookId: 1
    }, {
        borrowerId: 1,
        bookId: 2
    }, {
        borrowerId: 2,//book borroed by Jacinta
        bookId: 1
    }, {
        borrowerId: 3,
        bookId: 2
    }
];
//assuming there are multiple copies of books.SO 2 can borrow same book

function getBookById(bookId) {
    return books.find(book => book.id == bookId);
}
// console.log(getBookById(3));

function getBooksByPerson(borrowerId) {
    let booksBorrowedByPerson = bookBorrowers.filter(bb => bb.borrowerId == borrowerId);
    // return booksBorrowedByPerson;
    let bookIds = booksBorrowedByPerson.map(bb => bb.bookId);
    // return bookIds;
    return bookIds.map(id => getBookById(id));
}

console.log(getBooksByPerson(1));

    

// const genre = Object.freeze({
//     Fantasy: "Fantasy",
//     Comedy: "Comedy"
// });
 
// // List of all people who can borrow books
// let borrowers = [
//     {
//         id: 1,
//         name: "Luke Parker"
//     }, {
//         id: 2,
//         name: "Jacinta Bealle"
//     }, {
//         id: 3,
//         name: "Dan Wills"
//     }
// ];
 
// List of books that are avaliable to be borrowed
// letbooks = [
//     {
// id:1,
// title:"Harry Potter and the Philosopher's Stone",
// genreId:1
//     }, {
// id:2,
// title:"Harry Potter and the Chamber of Secrets",
// genreId:1
//     }, {
// id:3,
// title:"The Hitchhiker's Guide to the Galaxy",
// genreId:2
//     }
// ];
 
// letgenres = [
//     {
// id:1,
// name:"Fantasy"
//     }, {
// id:2,
// name:"Comedy"
//     }
// ]
 
// // List of all books currently being borrowed
// letbookBorrowers = [
//     {
// borrowerId:1,
// bookId:1
//     }, {
// borrowerId:1,
// bookId:2
//     }, {
// borrowerId:2,
// bookId:1
//     }, {
// borrowerId:3,
// bookId:2
//     }, {
// borrowerId:2,
// bookId:3
//     }, {
// borrowerId:3,
// bookId:3
//     }
// ];
 
// functiongetBookById(bookId) {
// returnbooks.find(book=>book.id == bookId);
// }
// // console.log(getBookById(3));
// functiongetBorrowerById(borrowerId) {
// returnborrowers.find(borrower=>borrower.id == borrowerId);
// }
 
// functiongetGenreById(genreId) {
// returngenres.find(genre=>genre.id == genreId);
// }
 
// functiongetBooksByPerson(borrowerId) {
// letbooksBorrowedByPerson = bookBorrowers.filter(bb=>bb.borrowerId == borrowerId);
// letbookIds = booksBorrowedByPerson.map(bb=>bb.bookId);
// returnbookIds.map(id=>getBookById(id));
// }
// // console.log(getBooksByPerson(1));
 
// functiongetPeoplebyBook(bookId) {
// letpeopleWhoHaveBorrowed = bookBorrowers.filter(bb=>bb.bookId == bookId);
// letborrowerIds = peopleWhoHaveBorrowed.map(bb=>bb.borrowerId);
// returnborrowerIds.map(id=>getBorrowerById(id));
// }
 
// // console.log(getPeoplebyBook(2));
 
// functiongetGenresBorrowedByPerson(borrowerId) {
// letbooksBorrowed = getBooksByPerson(borrowerId);
// letgenreIds = booksBorrowed.map(book=>book.genreId);
// letgenres = genreIds.map(id=>getGenreById(id));
// returngenres.map(genre=>genre.name);
// }
 
// console.log(getGenresBorrowedByPerson(3));


    


