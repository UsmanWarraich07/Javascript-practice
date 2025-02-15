//...................... JavaScript Review...............
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",

      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);
//book;
let auhor = book.author;
//auhor;

//Destrucutuing
//D obj
const { author, reviews, genres } = book;
//console.log(auhor, reviews, genres);
//console.log(genres);
//D arr
var [primayGenres, secondaryGeners] = genres;
//console.log(primayGenres, secondaryGeners);

// ...Rest Operator
var [primayGenres, secondaryGeners, ...otherGenres] = genres;
//console.log(primayGenres, secondaryGeners, otherGenres);

//...Spered operator[arr]  ===> use to add to arrs
const newGenres = [...genres, "epic fantacy"];
//newGenres;

//...Spered operator[obj]  ===> use to add properties and update exicting properties..
const updateBook = {
  ...book,
  moviePublicationDate: "2-12-2024", // add new prop
  title: "react js book", // update exicting prop
};
//updateBook;

//......template leterals...
const literals = `${book.title}, a ${book.pages}-pages long book, written by ${book.author} and published in ${book.publicationDate} `;
//literals;

//..........Array map function
const books = getBooks();
const pages = books.map((book) => book.pages);
//pages;

///.........Array fillter mathod
const fillterBook = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
//fillterBook;
//console.log(fillterBook.length);

//..........Array reduce mathod
const reduce = books.reduce((acc, book) => acc + book.pages, 0);
//reduce;

//......Array includes mathod...
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
//adventureBooks;

//..........Sort array mothod
const sortedArr = books
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => book.pages);
//sortedArr;

// ............Working with immutable Array.....

// ...1) add new obj into book array
const newBook = {
  id: 6,
  title: " essientional javascript",
  auhor: "usman me",
};

const addObj = [...books, newBook];
//addObj;

// ...2)  add delete obj from arr
const deleteObj = addObj.filter((book) => book.id !== 6);
//deleteObj;

// ...3) update obj
const updateObj = deleteObj.map((book) =>
  book.id === 2 ? { ...book, pages: 500 } : book
);
updateBook;
// =======
