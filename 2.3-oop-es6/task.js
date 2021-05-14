 class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     this.type = null;
     this.state = 100;
     this.fix = function() {
       this.state *= 1.5;
     };
   }
   set state(num) {
     if (num < 0) {
       this._state = 0;
     } else if (num > 100) {
       this._state = 100;
     } else {
       this._state = num;
     }
   };
   get state() {
     return this._state;
   }
 };

 class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = 'magazine';
   }
 }

 class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = 'book';
     this.author = author;
   }
 }

 class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
     this.type = 'novel';
   }
 }

 class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
     this.type = 'fantastic';
   }
 }

 class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
     super(author, name, releaseDate, pagesCount);
     this.type = 'detective';
   }
 }

 class Library {
   constructor(name, books) {
     this.name = name;
     this.books = [];
   }

   addBook(book) {
     if (book.state > 30) {
       this.books.push(book);
     }
   }

   findBookBy(type, value) {
     for (let findElem of this.books) {
       if (findElem[type] == value) {
         return findElem;
       }
     }
     return null;
   }

   giveBookByName(bookName) {
     for (let findElem of this.books) {
       if (findElem['name'] === bookName) {
         this.books.splice(findElem, 1);
         return findElem;
       }
     }
     return null;
   }
 }

 class StudentLog {
   constructor(name) {
     this.name = name;

   }

   const studentJournal = {};

   getName(name) {
     return this.name;
   }

   addGrade(grade, subject) {
     this.studentJournal.subject = [grade];
     console.log(grade, subject)
     console.log(studentJournal)
   }

   // function getAverageBySubject(subject) {
  // let meanValue = 0;
  // if (marks.length === 0) {
  //   return 0;
  // } else if (marks.length > 0) {
  //   for (let i = 0; i < marks.length; i++) {
  //     meanValue += marks[i];
  //   }
  //   meanValue = meanValue / marks.length;
  //   return meanValue;
  // }
 };
  const log = new StudentLog('Олег Никифоров');
