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
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount, author);
     this.type = 'book';
     this.author = this.name;
   }
 }

 class NovelBook extends Book {
   constructor(name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = 'novel';
   }
 }

 class FantasticBook extends Book {
   constructor(name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = 'fantastic';
   }
 }

 class DetectiveBook extends Book {
   constructor(name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount);
     this.type = 'detective';
   }
 }

 class Library {
   constructor(name, books) {
     this.name = name;
     this.books = [];
   }

   addBook = function(book) {
     const takeBook = new Object(book);
     if (takeBook.state > 30) {
       this.books.push(takeBook);
     }
   }

   findBookBy(type, value) {
     for (let book in this.books) {
       if ()
     }
     this.type = type;
     if (this.books[0][this.type] == value) {
       return this.books[0].name;
     } else {
       return null
     }
   }

   giveBookByName(bookName) {
     if (this.books[0]['name'] === bookName) {
       console.log(this.name)
       return this.name
     } else {
       return null
     }

   }
 }
