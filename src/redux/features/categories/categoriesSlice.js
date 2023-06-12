import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories === []) {
        return 'Under construction';
      }
      return 'Under construction';
    },
  },

});

export const {
  checkStatus,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
