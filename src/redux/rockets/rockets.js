import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchRockets = createAsyncThunk('fetchRockets', async () => {
  const res = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = res.json();
  return data;
});

const slice = createSlice({
  name: 'Rockets',
  initialState: [],
  reducers: {
    reserveRockets: (state, { id }) => {
      state.map((rocket) => {
        if (rocket.id === id) return rocket;
        return { ...rocket, reserved: true };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, { payload }) => {
      const newState = [];
      payload.map((rocket) => {
        newState.push({
          ...state,
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        });
        return newState;
      });
      return [...newState];
    });
  },
});

export { fetchRockets };
export default slice.reducer;
