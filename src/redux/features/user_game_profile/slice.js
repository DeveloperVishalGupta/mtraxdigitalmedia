/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  info: null,
};

const slice = createSlice({
  name: 'userGameSlice',
  initialState,
  reducers: {
    setup: (state, action) => {
      state.info = {
        ...state.info,
        ...action.payload,
      };
    },
    updateDayStreak: (state, action) => {
      const newStreak = {
        current: state.info.streak.current,
        longest: state.info.streak.longest,
      };
      if (state.info.streak) {
        newStreak.current = action.payload;
        if (state.info.streak.longest < action.payload) {
          newStreak.longest = action.payload;
        }
      } else {
        newStreak.current = action.payload;
        newStreak.longest = action.payload;
      }
      return {
        info: {
          ...state.info,
          streak: { ...newStreak },
        },
      };
    },
    updateXp: (state, action) => {
      state.info.totalXp += action.payload;
    },
    updateGems: (state, action) => {
      state.info.totalGems += action.payload;
    },
    updateStreakGoal: (state, action) => {
      state.info.streakGoal = action.payload;
    },
    updateQuestById: (state, action) => {
      const index = state.info.quest.findIndex(
        (dailyQuest) => dailyQuest._id === action.payload._id,
      );
      state.info.quest[index] = {
        ...state.info.quest[index],
        noOfLessonPlanAchieve: action.payload.noOfLessonPlanAchieve,
      };
      return state;
    },
    deleteQuestById: (state, action) => {
      const newDailyQuests = state.info.dailyQuests.filter(
        (dailyQuest) => dailyQuest._id !== action.payload._id,
      );
      state.info = {
        ...state.info,
        dailyQuests: newDailyQuests,
      };
    },
    setQuest: (state, action) => {
      state.info.quest = action.payload;
    },
    setSubjects: (state, action) => {
      state.info.subjects = action.payload;
    },
    setStatistics: (state, action) => {
      return {
        info: {
          ...state.info,
          statistics: action.payload,
        },
      };
    },
    statisticsUpdateById: (state, action) => {
      const index = state.info.statistics.findIndex(
        (statistics) => statistics._id === action.payload._id,
      );
      if (index !== -1) {
        state.info.statistics[index] = {
          ...action.payload,
        };
      }
    },
    setAchivements: (state, action) => {
      state.info.achivements = action.payload;
    },
    achivementUpdateById: (state, action) => {
      const index = state.info.achivements.findIndex(
        (achivement) => achivement._id === action.payload._id,
      );
      if (index !== -1) {
        state.info.achivements[index] = {
          ...action.payload,
        };
      }
    },
    dayStreakHistory: (state, action) => {
      return {
        info: {
          ...state.info,
          dayStreakHistory: action.payload,
        },
      };
    },
  },
});

export const {
  setup,
  updateDayStreak,
  updateXp,
  updateGems,
  updateStreakGoal,
  updateQuestById,
  deleteQuestById,
  setSubjects,
  setStatistics,
  statisticsUpdateById,
  setAchivements,
  achivementUpdateById,
  setQuest,
  dayStreakHistory,
} = slice.actions;
export default slice.reducer;
