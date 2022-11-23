import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchRockets = createAsyncThunk('fetchRockets', async () =>{
const res = await fetch("https://api.spacexdata.com/v3/rockets");
const data = res.json();
return data;
});

const slice = createSlice({
    name: "Rockets",
    initialState: [],
    extraReducers: (builder) => {
        try {
            
            builder
              .addCase(fetchRockets.fulfilled, (state, { payload }) => payload);
        } catch(error) {}
    }
})


export { fetchRockets };
export default slice.reducer;