import {createSlice} from '@reduxjs/toolkit';

const defaultTurnState = {
  isTurnPassword: false,
};

const turnSlice = createSlice({
  name: 'password',
  initialState: defaultTurnState,
  reducers: {
    turnPassword(state) {
      state.isTurnPassword = !state.isTurnPassword;
    },
  },
});

export const {turnPassword} = turnSlice.actions;
export const TurnSwitchReducer = turnSlice.reducer;
