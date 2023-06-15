/* Creat a contructor function called book that takes parameters for title, authorand year. inside the constructo, assign 
the values of respective properties. create an array of book object and log there details 

expand on the previous question by adding a method called getsummery to the book constructor that retuers with a string 
with a summery of books (eg "Title: [title], Author: [author], Year: [Year]"). create an array of book objects and call the 
getSummery method for each book.*/

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

var bookList = [
  new Book("Untold Story", "Sourav", 2021),
  new Book("Shiva Stories", "Pooja", 2019),
  new Book("javascript", "Achyut", 2020),
  new Book("cpp", "Shreya", 2023),
  new Book("Python", "Khushi", 2022),
];

//normal way

// for (let index = 0; index < bookList.length; index++) {
//   const element = bookList[index];
//   element.getSummery = function () {
//     return `title : ${this.title}, author: ${this.author}, year: ${this.year}`;
//   };

//   console.log(element.getSummery());
// }

//inheritance way

Book.prototype.getSummery = function () {
  return `title : ${this.title}, author: ${this.author}, year: ${this.year}`;
};

for (let index = 0; index < bookList.length; index++) {
  const element = bookList[index];
  console.log(element.getSummery());
}
