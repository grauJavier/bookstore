import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { bookName, author } = action.payload;

      const newBook = {
        bookName,
        author,
        genre: 'unknown',
        progressPercentage: 0,
        currentChapter: 'unknown',
      };

      state.books = state.books.concat(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
