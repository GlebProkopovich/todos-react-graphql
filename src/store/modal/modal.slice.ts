import { createSlice } from '@reduxjs/toolkit';
import { IInitState } from './modal.types';

const initialState: IInitState = {
  isNewTaskModalOpened: false,
  isSuccessModalOpened: false,
  isErrorModalOpened: false,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    toggleNewTaskModal(state, action) {
      state.isNewTaskModalOpened = action.payload;
    },
    toggleSuccessModal(state, action) {
      state.isSuccessModalOpened = action.payload;
    },
    toggleErrorModal(state, action) {
      state.isErrorModalOpened = action.payload;
    },
  },
});

export const { toggleNewTaskModal } = modalSlice.actions;
export default modalSlice.reducer;
