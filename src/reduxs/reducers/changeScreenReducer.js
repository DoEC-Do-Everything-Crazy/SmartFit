import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const defaultChangeScreenState = {
  screen: '',
};

const changeScreenSlice = createSlice({
  name: 'screen',
  initialState: defaultChangeScreenState,
  reducers: {
    changeScreen(state, action) {
      state.screen = action.payload;
    },
  },
});

export const {changeScreen} = changeScreenSlice.actions;
export const ChangeScreenReducer = changeScreenSlice.reducer;
