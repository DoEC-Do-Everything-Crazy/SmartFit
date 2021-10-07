import {createSlice} from '@reduxjs/toolkit';

const defaultPasswordState = {
  password: '',
};

const passwordScreenSlice = createSlice({
  name: 'password',
  initialState: defaultPasswordState,
  reducers: {
    changePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const {changePassword} = passwordScreenSlice.actions;
export const PasswordReducer = passwordScreenSlice.reducer;
