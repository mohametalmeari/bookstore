import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        item_id: payload.id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    },
    removeBook: (state, { payload }) => {
      const itemId = payload;
      state.books = state.books.filter((item) => item.item_id !== itemId);
    },
  },

});

export const {
  addBook, removeBook,
} = booksSlice.actions;
export default booksSlice.reducer;
