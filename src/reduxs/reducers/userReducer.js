import {createSlice} from '@reduxjs/toolkit';

const defaultUserState = {
  user: {},
  first: false,
};

const userSlice = createSlice({
  name: 'screen',
  initialState: defaultUserState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
    firstLogin(state) {
      state.first = true;
    },
  },
});

export const {addUser, firstLogin} = userSlice.actions;
export const UserReducer = userSlice.reducer;
