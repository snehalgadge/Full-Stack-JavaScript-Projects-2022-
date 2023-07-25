import { configureStore } from '@reduxjs/toolkit';
import amazonReducer from "../redux/amazonSlice"

export const store = configureStore({
  reducer: {
    amazonReducer
  },
});

export default store