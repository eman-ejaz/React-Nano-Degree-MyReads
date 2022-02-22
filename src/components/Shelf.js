import React from 'react';
import * as PropTypes from 'prop-types';
import Books from './Books';

const Shelf = (props) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.title}</h2>
      <Books shelfBooks={props.books} changeBookShelf={props.changeBookShelf} />
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default Shelf;
