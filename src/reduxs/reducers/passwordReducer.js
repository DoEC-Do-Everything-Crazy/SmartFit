import {createSlice} from '@reduxjs/toolkit';

const defaultPasswordState = {
  password: '',
  isTurn: false,
};

const passwordScreenSlice = createSlice({
  name: 'password',
  initialState: defaultPasswordState,
  reducers: {
    changePassword(state, action) {
      state.password = action.payload;
    },
    turnPassword(state, action) {
      state.isTurn = action.payload;
    },
  },
});

export const {changePassword, deletePassword, turnPassword} =
  passwordScreenSlice.actions;
export const PasswordReducer = passwordScreenSlice.reducer;
