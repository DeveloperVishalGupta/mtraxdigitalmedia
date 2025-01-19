
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  info: {
    Consistency: {},
    reward: {},
  },
};

const slice = createSlice({
  name: 'topNav',
  initialState,
  reducers: {
    setup: (state, action) => {
      state.info = { ...state.info, ...action.payload };
    },
    setConsistency: (state, action) => {
      state.info.Consistency = { ...action.payload };
    },
    setDiamond: (state, action) => {
      state.info.reward = { ...action.payload };
    },
  },
  //   extraReducers: (builder)=>{
  //     builder.addCase()
  //   }
});

export const { setup, setConsistency, setDiamond } = slice.actions;
export default slice.reducer;
