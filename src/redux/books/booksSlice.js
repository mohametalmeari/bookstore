import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'VDMpOJ9cfQIt0CqEJGuh';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/${appId}/books`);

      const books = Object.entries(response.data).map(([key, value]) => ({
        item_id: key,
        ...value[0],
      }));
      return books;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (bookData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/${appId}/books`, bookData);
      thunkAPI.dispatch(getBooks());
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  books: [],
  isLoading: true,
  error: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export default booksSlice.reducer;
