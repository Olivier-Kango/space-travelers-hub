import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import MissionsSlice from './missions/missions';

const rootReducer = {
  reducer: {
    missions: MissionsSlice.reducer,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
