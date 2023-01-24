import storeData from './preserveData.js';
/* eslint-disable import/no-cycle */
import { booksData } from '../index.js';
/* eslint-disable import/no-cycle */

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Math.random();
  }

  static addBook(book) {
    const newBook = new Book(book.title, book.author);
    booksData.push(newBook);
    storeData(booksData);
    window.location.reload();
  }

  static removeBook(book) {
    let currentBooksData = booksData;
    currentBooksData = booksData.filter((e) => e.id !== book.id);
    storeData(currentBooksData);
  }
}