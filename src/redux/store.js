import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './books/booksSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
