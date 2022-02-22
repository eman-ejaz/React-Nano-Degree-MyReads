export const getShelfBooks = (books, filter) => {
  return books.filter((book) => book.shelf === filter);
};
