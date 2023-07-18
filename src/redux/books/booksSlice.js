import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (bookName, author, state) => {
      const newBook = [
        {
          bookName: { bookName },
          author: { author },
          genre: 'unkown',
          progressPorcentage: 0,
          currentChapter: 'unkown',
        },
      ];

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
