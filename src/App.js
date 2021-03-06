import React, { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelves from './components/BookShelves';
import Book from './components/Book';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [booksSearchResult, setBooksSearchResult] = useState([]);

  useEffect(() => {
    // Get all books from the API when the component first renders and generate record of all available books.
    BooksAPI.getAll().then((response) => {
      setBooks(response);
    });
  }, []);

  useEffect(() => {
    // Search books whenever there is change in search bar text.
    if (searchQuery)
      BooksAPI.search(searchQuery).then((response) => {
        if (response.error) setBooksSearchResult([]);
        else {
          const searchBooks = response.map((book) => {
            books.filter((stateBook) => {
              if (stateBook.id === book.id) {
                book.shelf = stateBook.shelf;
              }
              return book;
            });
            return book;
          });
          setBooksSearchResult(searchBooks);
        }
      });
    else setBooksSearchResult([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const bookShelfChangeHandler = (bookData) => {
    // Handle the change of shelf of a book
    let isNewBook = true;
    let changedShelvesBooks = books.map((book) => {
      if (book.id === bookData.book.id) {
        isNewBook = false;
        book.shelf = bookData.newShelf;
        return book;
      }
      return book;
    });

    if (isNewBook) {
      // if this is a new book, this is added from search results
      bookData.book.shelf = bookData.newShelf;
      changedShelvesBooks.push(bookData.book);
    }
    BooksAPI.update(bookData.book, bookData.newShelf);
    setBooks(changedShelvesBooks);
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/search'>
            <div className='search-books'>
              <div className='search-books-bar'>
                <Link to='/'>
                  <button className='close-search'>Close</button>
                </Link>

                <div className='search-books-input-wrapper'>
                  <input
                    type='text'
                    placeholder='Search by title or author'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                  />
                </div>
              </div>
              <div className='search-books-results'>
                <ol className='books-grid'>
                  {booksSearchResult.map((book) => (
                    <li key={book.id}>
                      <Book
                        bookData={book}
                        changeBookShelf={bookShelfChangeHandler}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Route>
          <Route path='/'>
            <div className='list-books'>
              <div className='list-books-title'>
                <h1>MyReads</h1>
              </div>

              <div className='list-books-content'>
                <div>
                  <BookShelves
                    books={books}
                    changeBookShelf={bookShelfChangeHandler}
                  />
                </div>
              </div>
              <div className='open-search'>
                <Link to='/search'>
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default BooksApp;
