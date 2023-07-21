import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AZWwdB6xdu3Biv6ZvG64/books/';
export const getBooksFromServer = createAsyncThunk('bookshelf/getBooks', async () => {
  const formatApiResponse = (response) => {
    const formattedData = Object.keys(response).map((key) => {
      return {
        item_id: key,
        ...response[key][0],
      };
    });
    return formattedData;
  };

  const response = await axios.get(URL);
  return formatApiResponse(response.data);
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
    addBookFromList: (state, action) => {
      const newBook = action.payload;
      state.books = state.books.concat(newBook);
    },

    removeBookFromList: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
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
      })
  },
});

export const { addBookFromList, removeBookFromList } = booksSlice.actions;
export default booksSlice.reducer;
