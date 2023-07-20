import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AZWwdB6xdu3Biv6ZvG64/books';
export const getBooksFromServer = createAsyncThunk('bookshelf/getBooks', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const addBookToServer = createAsyncThunk('bookshelf/addBook', async (bookData) => {
  const response = await axios.post(URL, bookData);
  return response.data;
});

export const removeBookFromServer = createAsyncThunk('bookshelf/removeBook', async (bookId) => {
  const response = await axios.delete(`${URL}${bookId}`);
  return response.data;
});

const initialState = {
  books: [],
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

      addBookToServer(newBook);
    },

    removeBook: (action) => {
      const bookId = action.payload;
      removeBookFromServer(bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksFromServer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksFromServer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(getBooksFromServer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
