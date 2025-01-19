
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  info: [],
};

const slice = createSlice({
  name: 'chapterListSlice',
  initialState,
  reducers: {
    setupchapterListInfo: (state, action) => {
      state.info = [...action.payload];
    },
  },
});

export const { setupchapterListInfo } = slice.actions;
export default slice.reducer;
