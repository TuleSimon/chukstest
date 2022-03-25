import { configureStore } from '@reduxjs/toolkit';
import Chukstest from '../features/chukstest/Chukstest';

export const store = configureStore({
  reducer: {
    chukstest: Chukstest,
  },
});
