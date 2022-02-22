// Filter books on the basis of their shelf
export const getShelfBooks = (books, filter) => {
  return books.filter((book) => book.shelf === filter);
};
