/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  info: null,
};

const slice = createSlice({
  name: 'NotificationSlice',
  initialState,
  reducers: {
    setupNotification: (state, action) => {
      state.info = {
        data: action.payload.data,
        unReadCount: action.payload.unReadCount,
      };
    },

    // updateBadgesById: (state, action) => {
    //   const index = state.info.achievBadges.findIndex(
    //     (badge) => badge._id === action.payload._id,
    //   );
    //   if (index !== -1) {
    //     state.info.achievBadges[index] = {
    //       ...action.payload,
    //     };
    //   }
    // },
    // updateRank: (state, action) => {
    //   const index = state.info.rankHolders.findIndex(
    //     (rank) => rank._id === action.payload._id,
    //   );
    //   if (index !== -1) {
    //     state.info.rankHolders[index] = {
    //       ...action.payload,
    //     };
    //   }
    // },
  },
});

export const { setupNotification } = slice.actions;
export default slice.reducer;
