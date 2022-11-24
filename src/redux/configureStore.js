import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import MissionsSlice from './missions/missions';
import reducerReservedMission from './missions/reservedMission';

const rootReducer = {
  reducer: {
    missions: MissionsSlice.reducer,
    reducerReservedMission,
  },
};

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
