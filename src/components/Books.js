import React from 'react';
import * as PropTypes from 'prop-types';
import Book from './Book';

const Books = (props) => {
  return (
    <div>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {props.shelfBooks.map((book) => (
            <li key={book.id}>
              <Book bookData={book} changeBookShelf={props.changeBookShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Books.propTypes = {
  shelfBooks: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default Books;
