
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  info: null,
  settings: null,
  subjects: [],
  homework: {},
};

const slice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setupInfo: (state, action) => {
      state.info = {
        ...state?.info,
        ...action.payload,
      };
    },
    setupSettings: (state, action) => {
      if (
        action.payload?.settings &&
        action.payload?.loginCount &&
        action.payload?._id
      ) {
        state.settings = {
          ...state?.settings,
          ...action.payload,
        };
      }
    },
    setupSubject: (state, action) => {
      state.subjects = [...action.payload];
    },
    setupHomework: (state, action) => {
      state.homework = action.payload;
    },
  },
});

export const { setupInfo, setupSettings, setupSubject, setupHomework } =
  slice.actions;
export default slice.reducer;
