import {createSlice} from '@reduxjs/toolkit';

const defaultUserState = {
  token: undefined,
  user: undefined,
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
    removeUser(state) {
      state.user = undefined;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const {setUser, addUser, firstLogin, removeUser} = userSlice.actions;
export const UserReducer = userSlice.reducer;
