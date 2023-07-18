import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      progressPorcentage: 0,
      currentChapter: 'unknown',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      progressPorcentage: 0,
      currentChapter: 'unknown',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      progressPorcentage: 0,
      currentChapter: 'unknown',
    },
  ],
};

const booksSlice = createSlice({
  name: 'bookshelf',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;

      const newBook = {
        item_id: 'item' + state.books.length,
        title,
        author,
        category: 'unknown',
        progressPercentage: 0,
        currentChapter: 'unknown',
      };

      state.books = state.books.concat(newBook);
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
