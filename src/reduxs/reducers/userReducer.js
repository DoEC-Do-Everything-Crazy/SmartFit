import {createSlice} from '@reduxjs/toolkit';

const defaultUserState = {
  user: {
    email: 'cuongnt258@gmail.com',
    emailVerified: true,
    displayName: 'Nguyễn Tấn Cường',
    photoURL:
      'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XA6KIXE6FBFM5EWSA25JI5YAU4.jpg',
    phoneNumber: '+84862090010',
    disabled: false,
    gender: 'male',
    birthday: '2021-10-12T03:23:40.393Z',
    type: '99',
    address: 'Dat Do, Ba Ria - Vung Tau',
    _id: '6165000faf327d0bdc3fc11c',
    uid: 'JYRj1l6P0NVfZDjOZEnUIDLAzel1',
    __v: 0,
  },
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
  },
});

export const {addUser, firstLogin, removeUser} = userSlice.actions;
export const UserReducer = userSlice.reducer;
