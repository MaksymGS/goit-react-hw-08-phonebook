import { createSlice } from '@reduxjs/toolkit';

const filterSLice = createSlice({
  name: 'filterValue',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSLice.reducer;
export const { setFilterValue } = filterSLice.actions;
