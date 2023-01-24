/* eslint-disable import/no-cycle */
import { bookListHandler, addSectionHandler, contactInfoHandler } from './modules/singlePage.js';
import { DateTime } from './modules/luxon.js';
import Book from './modules/books.js';
import displayToPage from './modules/desplayBook.js';

const linForBookList = document.querySelector('.for_list_link');
const linkForAddSection = document.querySelector('.for_addSection_link');
const linkForContInfo = document.querySelector('.for_contact_link');

const addButton = document.querySelector('#add');
const titleInput = document.querySelector('#title');
const autherInput = document.querySelector('#author');
/* eslint-disable import/no-mutable-exports,import/prefer-default-export */
export let booksData = [];
/* eslint-disable import/no-mutable-exports,import/prefer-default-export */
const retrieveData = () => {
  const bookData = window.localStorage.getItem('books');
  const parseBookData = JSON.parse(bookData);
  if (parseBookData) {
    booksData = parseBookData;
  }
};

addButton.addEventListener('click', () => {
  const newBook = new Book(titleInput.value, autherInput.value);
  Book.addBook(newBook);
  displayToPage(newBook);
});

const dateParagraph = document.querySelector('.date');
const dateTime = DateTime.now();
dateParagraph.innerHTML = dateTime.toLocaleString(DateTime.DATETIME_MED);

window.onload = () => {
  linForBookList.style.color = 'blue';
  retrieveData();
  displayToPage();
};

linForBookList.addEventListener('click', bookListHandler);
linkForAddSection.addEventListener('click', addSectionHandler);
linkForContInfo.addEventListener('click', contactInfoHandler);