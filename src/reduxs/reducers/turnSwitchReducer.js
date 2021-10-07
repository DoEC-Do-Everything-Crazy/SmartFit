import {createSlice} from '@reduxjs/toolkit';

const defaultTurnState = {
  isTurnPassword: false,
  isTurnDarkMode: false,
};

const turnSlice = createSlice({
  name: 'password',
  initialState: defaultTurnState,
  reducers: {
    turnPassword(state) {
      state.isTurnPassword = !state.isTurnPassword;
    },
    turnDarkMode(state) {
      state.isTurnDarkMode = !state.isTurnDarkMode;
    },
  },
});

export const {turnPassword, turnDarkMode} = turnSlice.actions;
export const TurnSwitchReducer = turnSlice.reducer;
