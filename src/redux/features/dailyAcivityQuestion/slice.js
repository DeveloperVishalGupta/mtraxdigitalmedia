
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  dailyQuestion: null,
};

const slice = createSlice({
  name: 'chapterListSlice',
  initialState,
  reducers: {
    saveDailyAcivityQuestion: (state, action) => {
      return {
        ...state,
        dailyQuestion: action.payload,
      };
    },
  },
});

export const { saveDailyAcivityQuestion } = slice.actions;
export default slice.reducer;
