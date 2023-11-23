import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modal.slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

type TStore = ReturnType<typeof store.getState>;

export { store };
export type { TStore };
