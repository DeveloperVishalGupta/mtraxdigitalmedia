/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  info: {
    dailyQuests: [],
  },
};

const slice = createSlice({
  name: 'questsSlice',
  initialState,
  reducers: {
    setup: (state, action) => {
      state.info = {
        ...state.info,
        ...action.payload,
      };
    },
    setDailyQuests: (state, action) => {
      state.info.dailyQuests = action.payload;
    },
  },
  //   extraReducers: (builder)=>{
  //     builder.addCase()
  //   }
});

export const {
  setup,
  setDailyQuests,
  updateDailyQuestById,
  deleteDailyQuestById,
} = slice.actions;
export default slice.reducer;
