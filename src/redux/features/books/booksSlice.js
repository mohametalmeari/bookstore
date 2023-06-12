import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        id: uuid(),
        title: payload.title,
        author: payload.author,
      });
    },
    removeBook: (state, { payload }) => {
      const itemId = payload.id;
      state.books = state.books.filter((item) => item.id !== itemId);
    },
  },

});

export const {
  addBook, removeBook,
} = booksSlice.actions;
export default booksSlice.reducer;
