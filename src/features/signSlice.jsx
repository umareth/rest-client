import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    password: "",
  },
  error: null,
  signIn: false,
  token: localStorage.getItem("token"),
};

export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token.token);
      return token.token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const singInSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignIn.pending, (state) => {
        (state.signIn = true), (state.error = null);
      })
      .addCase(authSignIn.rejected, (state, action) => {
        (state.error = action.payload), (state.signIn = false);
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        (state.signIn = false),
          (state.error = null),
          (state.token = action.payload);
        state.user.email = action.meta.arg.email;
        state.user._id = action.meta.arg._id;
      });
  },
});

export default singInSlice.reducer;
