import React from 'react';
import * as PropTypes from 'prop-types';

const ShelfChanger = ({ changeBookShelf, currentShelf }) => {
  const shelfChangeHandler = (event) => {
    changeBookShelf(event.target.value);
  };
  return (
    <div className='book-shelf-changer'>
      <select
        onChange={shelfChangeHandler}
        value={currentShelf ? currentShelf : 'none'}
      >
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  changeBookShelf: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired,
};

ShelfChanger.defaultProps = {
  currentShelf: '',
};

export default ShelfChanger;
