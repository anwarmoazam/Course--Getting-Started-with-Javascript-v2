// function addFavoriteBook(bookName){
//     if(!bookName.includes("Great")){
//         favoriteBooks.push(bookName);
//     };
// }

// function printFavoriteBook(){
//     console.log(
//         `Favorite Books : ${favoriteBooks.length}`
//     );
//     // for(let i=0; i<favoriteBooks.length; i++){
//     //     console.log(favoriteBooks[i]);
//     // }
//     for(let bookName of favoriteBooks){
//         console.log(bookName);
//     }
// }

// // var favoriteBooks = [];

// addFavoriteBook("A Song of Ice and Fire");
// addFavoriteBook("The Great Gatsby");
// addFavoriteBook("Crime & Punishment");
// addFavoriteBook("Great Expectations");
// addFavoriteBook("You Don't Know JS");

// printFavoriteBook();


// // Types/Coercion
// //     Primitive Types
// //     Converting Types
// //     Checking Equality 

// // Primitive Types
//     // undefined       
//     // string
//     // number
//     // boolean
//     // object
//     // symbol


// var v;
// console.log(typeof(v));
// v = "1";
// console.log(typeof(v));
// v=2;
// console.log(typeof(v));
// v=true;
// console.log(typeof(v));
// v={};
// console.log(typeof(v));
// v=Symbol();
// console.log(typeof(v));

// console.log(typeof(doesntExist));

// v=null;
// console.log(typeof(v));

// v=function(){};
// console.log(typeof(v));

// v=[1,2,3];
// console.log(typeof(v));

// var greeting = "Hello, class!"
// var something = greeting/2;
// console.log(something);


// console.log(Number.isNaN(greeting));
// console.log(Number.isNaN(something));

// var yesterday = new Date("March 6, 2019");
// console.log(yesterday);
// console.log(yesterday.toUTCString());
// // var myGPA = String(transcript.gpa);

// // Coercion: string concatenation (number to string)
// var msg1 = "There are ";
// var numStudents = 16;
// var msg2 = " students.";
// console.log(msg1 + numStudents + msg2);
// console.log(`There are ${numStudents+""} students.`);

// function addStudent(numStudents){
//     return numStudents+1;
// }

// let textDOM = document.querySelector(".text");

// if(textDOM.value){
//     numStudents = Number(textDOM.value);
// }

// // addStudent(Number(studentsInputElem.value));
// // console.log(addStudent(5(studentsInputElem.value)));

// function ask(question){
//     setTimeout(function waitASec(){
//         console.log(question);},2000);
// }

// ask("What is closure?");

class bookShelf {
    constructor() {
        this.favoriteBooks = [];
    }
    
    addFavoriteBook(bookName){
        if(!bookName.includes("Great")){
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks(){
        console.log(`Favorite Books : ${String(this.favoriteBooks.length)}`);
        for (let bookName of this.favoriteBooks){
            console.log(bookName);
        }
    }
}

function loadBooks(theBookShelf){
    fakeAjax(BOOK_API,function onBooks(bookNames){
        for(let bookName of bookNames){
            theBookShelf.addFavoriteBook(bookName);
        }
        theBookShelf.printFavoriteBooks();
    });
}

var BOOK_API = "https://some.url/api";

var myBooks = new bookShelf();
loadBooks(myBooks);

function fakeAjax(url,cb){
    setTimeout(function fakeLoadingDelay(){
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't Know JS"
        ]);
    },500);
}