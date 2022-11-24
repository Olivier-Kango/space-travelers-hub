// Define action types for Reserve Mission
const RESERVED_MISSION = 'RESERVED_MISSION';

export const reservedMission = (payload) => ({
  type: RESERVED_MISSION,
  payload,
});

// Reducer
const initialState = 'Join Mission';
const reducerReservedMission = (state = initialState, action) => {
  switch (action.type) {
    case RESERVED_MISSION:
      return action.payload;
    default:
      return state;
  }
};

export default reducerReservedMission;
