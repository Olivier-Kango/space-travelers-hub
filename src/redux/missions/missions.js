import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getMissionsApi from '../../api/SpaceApi';

const LOAD_MISSIONS = 'LOAD_MISSIONS';

// LOAD
export const loadMissions = createAsyncThunk(LOAD_MISSIONS, async () => {
  try {
    const response = await getMissionsApi();
    return response.data.map((mission) => ({ ...mission, reserved: true }));
  } catch (error) {
    throw new Error(error);
  }
});

// SPACE STORE
const MissionsSlice = createSlice({
  name: 'missionsstore',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(loadMissions.fulfilled, (state, action) => action.payload);
  },
});

export default MissionsSlice;
