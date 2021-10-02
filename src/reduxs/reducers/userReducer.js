import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const defaultUserState = {
  user: {},
};

const userSlice = createSlice({
  name: 'screen',
  initialState: defaultUserState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const {addUser} = userSlice.actions;
export const UserReducer = userSlice.reducer;
