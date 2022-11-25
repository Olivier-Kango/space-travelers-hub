import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import MissionsSlice from './missions/missions';
import Rockets from './rockets/rockets';

const rootReducer = {
  reducer: {
    rockets: Rockets,
    missions: MissionsSlice.reducer,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
