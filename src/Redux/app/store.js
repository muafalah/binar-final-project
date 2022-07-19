import { configureStore } from '@reduxjs/toolkit';
import authUser from '../features/authUser';

export const store = configureStore({
  reducer: {
    authUserReducer: authUser,
  },
});
