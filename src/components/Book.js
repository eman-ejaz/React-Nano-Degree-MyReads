import React from 'react';
import * as PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

const Book = (props) => {
  const handleChangeBookShelf = (newShelf) => {
    props.changeBookShelf({
      newShelf,
      book: props.bookData,
      shelf: props.bookData.shelf ? true : false,
    });
  };
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: props.bookData.imageLinks
              ? `url(${props.bookData.imageLinks.thumbnail})`
              : 'url()',
          }}
        ></div>
        <ShelfChanger
          changeBookShelf={handleChangeBookShelf}
          currentShelf={props.bookData.shelf}
        />
      </div>
      <div className='book-title'>{props.bookData.title}</div>
      <div className='book-authors'>{props.bookData.publisher}</div>
    </div>
  );
};

Book.protoTypes = {
  bookData: PropTypes.object.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default Book;
