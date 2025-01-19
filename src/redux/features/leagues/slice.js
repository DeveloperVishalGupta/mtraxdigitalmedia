
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  leagueDetails: null,
  users: [],
  rank: null,
  timeInHours: null,
};

const slice = createSlice({
  name: 'LeagueSlice',
  initialState,
  reducers: {
    saveLeagueDetails: (state, action) => {
      return {
        ...state,
        leagueDetails: action.payload.leagueDetails,
        users: action.payload.users,
        rank: action.payload.rank,
        timeInHours: action.payload.timeInHours,
      };
    },
  },
});

export const { saveLeagueDetails } = slice.actions;
export default slice.reducer;
