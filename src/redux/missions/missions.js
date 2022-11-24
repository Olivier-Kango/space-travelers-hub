import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import getMissionsApi from '../../api/SpaceApi';

const LOAD_MISSIONS = 'LOAD_MISSIONS';

// LOAD
export const loadMissions = createAsyncThunk(LOAD_MISSIONS, async () => {
  try {
    const response = await getMissionsApi();
    return response.data.map((mission) => ({ ...mission, reserved: false }));
  } catch (error) {
    throw new Error(error);
  }
});

// SPACE STORE
const MissionsSlice = createSlice({
  name: 'missionsstore',
  initialState: { mission: [] },
  reducers: {
    MissionStatus: (state, { payload }) => {
      const x = current(state);
      const data = x.mission.map((m) => (
        m.mission_id === payload ? { ...m, reserved: !m.reserved } : m
      ));
      return {
        ...state,
        mission: data,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMissions.fulfilled, (state, action) => ({
        ...state,
        mission: action.payload,
      }))
      .addCase(loadMissions.pending, (state) => ({ ...state }));
  },
});

export default MissionsSlice;
export const { MissionStatus } = MissionsSlice.actions;
