import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusCheck: () => {
      return 'Under construction';
    },
  },
});

export const { statusCheck } = categoriesSlice.actions;
export default categoriesSlice.reducer;
