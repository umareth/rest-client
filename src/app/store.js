import { configureStore } from "@reduxjs/toolkit";
import restsReducer from '../features/restSlice'
import tokenReducer from '../features/signSlice'

export const store = configureStore({
  reducer: {
    rests: restsReducer,
    token: tokenReducer
  },
});

