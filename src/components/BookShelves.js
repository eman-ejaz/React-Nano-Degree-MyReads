import React from 'react';
import * as PropTypes from 'prop-types';
import { shelfTitles } from '../constants';
import Shelf from './Shelf';

const BookShelves = (props) => {
  const currentlyReading = props.books.filter(
    (book) => book.shelf === 'currentlyReading'
  );
  const wantToRead = props.books.filter((book) => book.shelf === 'wantToRead');
  const read = props.books.filter((book) => book.shelf === 'read');

  return (
    <>
      <Shelf
        books={currentlyReading}
        changeBookShelf={props.changeBookShelf}
        title={shelfTitles.currentReading}
      />
      <Shelf
        books={wantToRead}
        changeBookShelf={props.changeBookShelf}
        title={shelfTitles.wantToRead}
      />
      <Shelf
        books={read}
        changeBookShelf={props.changeBookShelf}
        title={shelfTitles.read}
      />
    </>
  );
};

BookShelves.protoTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default BookShelves;
