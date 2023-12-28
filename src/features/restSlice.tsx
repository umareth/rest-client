import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  rest: [],
  oneRest: []
}

export const getRest = createAsyncThunk('rest/fetch', async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/rest");
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
})

export const fetchOneRest = createAsyncThunk('oneRest/fetch', async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:3000/admin/food/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
})

const restSlice = createSlice({
  name: 'rests',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRest.fulfilled, (state,action) => {
        state.rest = action.payload
      })
      .addCase(fetchOneRest.fulfilled, (state,action) => {
        state.oneRest = action.payload
      })
  }
})

export default restSlice.reducer;