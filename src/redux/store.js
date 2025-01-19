import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import NotificationSlice from '@/redux/features/notification/slice';
import userSlices from './features/user_profile/slice';
import questSlices from './features/quests/slice';
import leagueSlices from './features/leagues/slice';
import topNavSlices from './features/top_nav/slice';
import userGameSlice from './features/user_game_profile/slice';
import chapterListSlice from './features/chapterList/slice';
import dailyQuestionSlice from './features/dailyAcivityQuestion/slice';

const persistConfig = {
  key: 'tailwndStore',
  storage,
};

const rootReducer = combineReducers({
  userStore: userSlices,
  questStore: questSlices,
  leagueStore: leagueSlices,
  topNavStore: topNavSlices,
  userGameStore: userGameSlice,
  NotificationStore: NotificationSlice,
  chapterListStore: chapterListSlice,
  dailyQuestionStore: dailyQuestionSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
  });
};
