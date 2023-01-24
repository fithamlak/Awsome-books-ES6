/* eslint-disable import/no-cycle */
import Book from './books.js';
import { booksData } from '../index.js';

const dynamicCreation = document.querySelector('.daynamic');
let count = 0;
const bookLoders = (bookToBeLoad) => {
  const book = document.createElement('article');
  book.classList.add('article_content');
  if (count % 2 === 0) {
    book.style.backgroundColor = '#e5e5e5c4';
  } else {
    book.style.backgroundColor = 'white';
  }
  count += 1;
  const title = document.createElement('p');
  title.innerText = `"${bookToBeLoad.title}" by ${bookToBeLoad.author}`;
  book.append(title);
  const button = document.createElement('button');
  button.classList.add('remove');
  button.innerText = 'Remove';
  button.addEventListener('click', () => {
    Book.removeBook(bookToBeLoad);
    book.style.display = 'none';
  });
  book.append(button);
  dynamicCreation.append(book);
  dynamicCreation.classList.add('daynamic');
};

// eslint-disable-line import/no-mutable-exports
const displayToPage = () => {
  booksData.forEach((book) => {
    bookLoders(book);
  });
};

export default displayToPage;
